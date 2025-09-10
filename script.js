// Search functionality using Lunr.js
document.addEventListener('DOMContentLoaded', function() {
    let searchIndex;
    let documents = [];
    
    // Initialize search
    initializeSearch();
    
    function initializeSearch() {
        // Extract content from all sections for indexing
        const sections = document.querySelectorAll('.section, .intro, .conclusion');
        
        sections.forEach((section, index) => {
            const headings = section.querySelectorAll('h1, h2, h3, h4');
            const paragraphs = section.querySelectorAll('p, li');
            
            let title = '';
            let content = '';
            let id = section.id || `section-${index}`;
            
            // Get the main heading as title
            if (headings.length > 0) {
                title = headings[0].textContent.trim();
            }
            
            // Collect all text content
            headings.forEach(h => content += h.textContent + ' ');
            paragraphs.forEach(p => content += p.textContent + ' ');
            
            if (title && content.trim()) {
                documents.push({
                    id: id,
                    title: title,
                    content: content.trim(),
                    element: section
                });
            }
        });
        
        // Create Lunr index
        searchIndex = lunr(function() {
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('content');
            
            documents.forEach(doc => {
                this.add(doc);
            });
        });
        
        // Set up search input event listener
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        
        let searchTimeout;
        
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                hideSearchResults();
                return;
            }
            
            // Debounce search
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 300);
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                hideSearchResults();
            }
        });
        
        // Handle escape key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideSearchResults();
                searchInput.blur();
            }
        });
    }
    
    function performSearch(query) {
        try {
            const results = searchIndex.search(query);
            displaySearchResults(results, query);
        } catch (error) {
            console.log('Search error:', error);
            // Try a more lenient search
            try {
                const results = searchIndex.search(query + '*');
                displaySearchResults(results, query);
            } catch (e) {
                hideSearchResults();
            }
        }
    }
    
    function displaySearchResults(results, query) {
        const searchResultsContainer = document.getElementById('search-results');
        
        if (results.length === 0) {
            searchResultsContainer.innerHTML = '<div class="search-result-item"><div class="search-result-title">No results found</div><div class="search-result-snippet">Try different keywords or check your spelling.</div></div>';
            searchResultsContainer.style.display = 'block';
            return;
        }
        
        const resultsHTML = results.slice(0, 8).map(result => {
            const doc = documents.find(d => d.id === result.ref);
            if (!doc) return '';
            
            const snippet = createSnippet(doc.content, query);
            
            return `
                <div class="search-result-item" onclick="navigateToResult('${doc.id}')">
                    <div class="search-result-title">${highlightText(doc.title, query)}</div>
                    <div class="search-result-snippet">${snippet}</div>
                </div>
            `;
        }).join('');
        
        searchResultsContainer.innerHTML = resultsHTML;
        searchResultsContainer.style.display = 'block';
    }
    
    function createSnippet(content, query) {
        const words = query.toLowerCase().split(/\s+/);
        const sentences = content.split(/[.!?]+/);
        
        // Find the best sentence that contains query terms
        let bestSentence = '';
        let bestScore = 0;
        
        sentences.forEach(sentence => {
            const lowerSentence = sentence.toLowerCase();
            let score = 0;
            words.forEach(word => {
                if (lowerSentence.includes(word)) {
                    score += word.length;
                }
            });
            
            if (score > bestScore) {
                bestScore = score;
                bestSentence = sentence.trim();
            }
        });
        
        if (!bestSentence) {
            bestSentence = content.substring(0, 150);
        }
        
        // Limit length and add ellipsis
        if (bestSentence.length > 150) {
            bestSentence = bestSentence.substring(0, 150) + '...';
        }
        
        return highlightText(bestSentence, query);
    }
    
    function highlightText(text, query) {
        if (!query) return text;
        
        const words = query.split(/\s+/);
        let highlightedText = text;
        
        words.forEach(word => {
            if (word.length > 1) {
                const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
                highlightedText = highlightedText.replace(regex, '<span class="search-highlight">$1</span>');
            }
        });
        
        return highlightedText;
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    function hideSearchResults() {
        document.getElementById('search-results').style.display = 'none';
    }
    
    // Make navigateToResult globally accessible
    window.navigateToResult = function(elementId) {
        hideSearchResults();
        document.getElementById('search-input').value = '';
        
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
            
            // Add a subtle highlight effect
            element.style.backgroundColor = '#fff3cd';
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 2000);
        }
    };
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active state to navigation links based on scroll position
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('.section[id], .intro[id], .conclusion[id]');
        const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
        
        let current = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Add active navigation styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-list a.active {
            background-color: var(--active-bg);
            color: var(--active-text);
        }
    `;
    document.head.appendChild(style);
    
    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initial call
    
    // Add copy-to-clipboard functionality for code elements
    document.querySelectorAll('kbd').forEach(kbd => {
        kbd.style.cursor = 'pointer';
        kbd.title = 'Click to copy';
        
        kbd.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                const originalText = this.textContent;
                const originalBg = this.style.backgroundColor;
                this.textContent = 'Copied!';
                this.style.backgroundColor = 'var(--success-bg)';
                this.style.color = 'var(--success-text)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = originalBg;
                    this.style.color = '';
                }, 1000);
            }).catch(() => {
                console.log('Failed to copy to clipboard');
            });
        });
    });
    
    // Add print button functionality
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '🖨️ Print Documentation';
        printButton.className = 'print-button';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }
    
    addPrintButton();
    
    // Add back to top functionality
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '↑';
        backToTopButton.className = 'back-to-top-button';
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        document.body.appendChild(backToTopButton);
    }
    
    addBackToTopButton();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
    });
    
    console.log('Prefab Brush Pro Documentation loaded successfully!');
});
