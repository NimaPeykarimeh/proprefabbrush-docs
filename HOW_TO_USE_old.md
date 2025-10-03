# Prefab Brush Pro - How to Use Guide

Welcome to Prefab Brush Pro, a powerful Unity Editor tool for efficient prefab placement and level design. This guide will walk you through all features and help you master the tool quickly.

## 🚀 Getting Started

### Opening the Tool
1. In Unity, go to **Tools > Peykarimeh > Prefab Brush**
2. The Prefab Brush Pro window will open - dock it wherever convenient in your workspace

### Initial Setup
Before you start painting, you need to:

1. **Create or Select Settings**: Choose a settings preset from the dropdown at the top
2. **Add Prefabs**: Drag prefabs from your Project window into the prefab list
3. **Set Parent Object**: Assign a Transform as the parent for all placed objects
4. **Configure Ground Layer**: Set which layer(s) the tool should paint on

> 💡 **Tip**: Create different settings presets for different types of objects (trees, rocks, buildings) to quickly switch between workflows.

---

## 🎨 Brush Modes

Prefab Brush Pro offers 8 distinct brush modes, each designed for specific placement needs:

### 🌱 **Spray Brush**
*Perfect for organic, natural placement like grass, flowers, or debris*

- **How to Use**: Click and drag to continuously paint prefabs
- **Best For**: Vegetation, particles, scattered objects
- **Controls**: 
  - Click + Drag: Paint continuously
  - Ctrl + Scroll: Adjust amount per spray
  - Shift + Scroll: Change brush radius

### 📍 **Single Brush**
*Precise placement of individual objects*

- **How to Use**: Click to place exactly one prefab at cursor position
- **Best For**: Buildings, furniture, key objects
- **Controls**:
  - Click: Place single object
  - Scroll: Scale preview object
  - Drag: Rotate preview object
  - Ctrl + Drag: Snap rotation to 15° intervals

### ⭕ **Circle Stamp**
*Place multiple objects in a circular pattern*

- **How to Use**: Click to stamp prefabs in a circular area
- **Best For**: Flower beds, stone circles, campfires
- **Controls**:
  - Click: Stamp objects in circle
  - Ctrl + Scroll: Change amount of objects
  - Shift + Scroll: Adjust circle radius

### ⬜ **Square Stamp**
*Place objects in a square/grid formation*

- **How to Use**: Click to stamp prefabs in a square area
- **Best For**: Building layouts, grid-based placement, organized structures
- **Controls**: Same as Circle Stamp but creates square patterns

### 📏 **Line Brush**
*Create perfect lines of objects*

- **How to Use**: 
  1. Click to set start point
  2. Click again to set end point and place objects along the line
- **Best For**: Fences, walls, paths, borders
- **Controls**:
  - Ctrl + Scroll: Adjust objects per line segment
  - ESC: Cancel line drawing

### 🌊 **Curve Brush**
*Create flowing, curved arrangements*

- **How to Use**:
  1. Click to add control points (minimum 3 points)
  2. Right-click or press Enter to finalize and place objects
- **Best For**: Winding paths, organic borders, decorative curves
- **Special Controls**:
  - T: Toggle spacing mode
  - +/-: Adjust curve tension
  - Enter: Finalize curve
  - ESC: Cancel curve

### 🗑️ **Erase Brush**
*Remove placed objects*

- **How to Use**: Click and drag to remove prefabs within brush radius
- **Best For**: Cleaning up, making clearings, fine-tuning placement
- **Controls**:
  - Click + Drag: Remove objects in radius
  - Shift + Scroll: Adjust erase radius

### ✋ **Move Brush**
*Relocate existing objects*

- **How to Use**: Click and drag to move placed prefabs
- **Best For**: Adjusting placement, repositioning objects
- **Controls**:
  - Click + Drag: Move objects within radius
  - Shift + Scroll: Adjust move radius

---

## ⚙️ Core Settings

### 🎯 **Basic Parameters**

**Amount**: Number of objects to place per brush stroke
- Spray: Objects per spray burst
- Stamps: Total objects in stamp pattern
- Line/Curve: Objects along path

**Radius**: Size of the brush area
- Controls spread area for most brushes
- Affects erase/move area for utility brushes

**Min Distance**: Minimum spacing between placed objects
- Prevents objects from overlapping
- Higher values = more spread out placement

### 🏗️ **Placement Settings**

**Parent Object**: Transform that will contain all placed objects
- Keeps your scene organized
- Easy to select/move/delete groups of objects
- ⚠️ **Required** - tool will warn if not set

**Parenting Mode**:
- **Static Parent**: Uses manually assigned parent object
- **Hit Object Parent**: Auto-parents to the object you paint on

**Ground Layer**: Which layer(s) to paint on
- Set to specific terrain/ground layers
- Or use "All Colliders" mode to paint on any surface

---

## 🎲 Randomization & Variation

### 🔄 **Rotation Options**

**Align to Surface Normal**: 
- ON: Objects tilt to match surface angle (rocks on slopes)
- OFF: Objects stay upright (trees, buildings)

**Random Rotation**:
- Toggle: Enable/disable random Y-axis rotation
- Range: Set min/max rotation angles (0-360°)
- Great for natural variation

### 📏 **Scale Variation**

**Random Scale**:
- Toggle: Enable scale randomization
- Range: Set min/max scale multipliers (0.1x to 5x)
- Creates size variety for organic looks

### 📐 **Height Control**

**Height Offset**: Fixed vertical offset for all objects

**Random Height**:
- Toggle: Enable random height variation
- Range: Set min/max height offset values
- Perfect for uneven terrain adaptation

### ⛰️ **Slope Filtering**

**Slope Filter**:
- Toggle: Enable slope-based placement restrictions
- Range: Set valid slope angles (0-90 degrees)
- Prevents placing objects on too-steep surfaces

---

## 🔧 Advanced Features

### 👁️ **Preview Modes**

**Live Preview**: See actual prefab meshes during placement
- More accurate but potentially slower
- Great for precise positioning

**Simple Preview**: Show colored spheres with labels
- Faster performance
- Good for general layout work

### 🌍 **Surface Modes**

**Top-Down Mode**: 
- Rays cast straight down from above
- Best for terrain/landscape work
- Objects placed on surface tops

**Surface-Aware Mode**:
- Rays cast along surface normals
- Better for complex geometry
- Objects follow surface contours

### 🔗 **Multi-Selection**

You can select multiple prefabs for varied placement:

1. **Ctrl + Click**: Add/remove prefabs from selection
2. **Weight System**: Assign different spawn probabilities
3. **Mixed Placement**: Tool randomly chooses from selected prefabs

---

## ⌨️ Keyboard Shortcuts

### Universal Controls
- **ESC**: Cancel current operation
- **Ctrl + Scroll**: Change Amount
- **Shift + Scroll**: Change Radius

### Brush-Specific Shortcuts

**Single Brush**:
- **Scroll**: Scale preview object
- **Drag**: Rotate preview object
- **Ctrl + Drag**: Snap rotation to 15° intervals

**Line Brush**:
- **Click**: Set start/end points
- **ESC**: Cancel line

**Curve Brush**:
- **T**: Toggle spacing mode
- **+/-**: Adjust curve tension
- **Enter**: Finalize curve
- **Right Click**: Finish curve

**Spray/Stamp Brushes**:
- **Ctrl + Scroll**: Change amount
- **Shift + Scroll**: Change radius

**Erase/Move Brushes**:
- **Shift + Scroll**: Change radius
- **Click + Drag**: Apply effect

---

## 🎮 Workflow Tips

### 🌲 **Creating Natural Environments**

1. **Start with Terrain**: Use Spray Brush for base vegetation
2. **Add Clusters**: Use Circle/Square Stamps for grouped objects
3. **Create Paths**: Use Line or Curve Brush for trails
4. **Fine-tune**: Use Move Brush to adjust positioning
5. **Clean up**: Use Erase Brush to create clearings

### 🏘️ **Building Structured Layouts**

1. **Plan with Single**: Place key structures first
2. **Fill with Stamps**: Use Square Stamp for grid layouts
3. **Connect with Lines**: Add fences, walls, or paths
4. **Add Details**: Spray Brush for small decorative elements

### ⚡ **Performance Optimization**

- Use **Simple Preview** for large-scale work
- Enable **Slope Filtering** to avoid invalid placements
- Set appropriate **Min Distance** to prevent overcrowding
- Group similar objects under organized parent objects

### 🎨 **Artistic Variation**

- Enable **Random Rotation** for natural looks
- Use **Random Scale** for organic variety
- Mix multiple prefabs with different weights
- Combine **Random Height** with terrain adaptation

---

## 🛠️ Settings Management

### Creating Presets
1. Configure your brush settings
2. Click "Create New Settings" 
3. Name your preset (e.g., "Forest Trees", "Stone Walls")
4. Settings are saved as ScriptableObjects in your project

### Switching Presets
- Use the dropdown at the top of the tool
- Instantly switch between different workflows
- Each preset remembers all settings and prefab lists

### Best Practices
- Create separate presets for different object types
- Name presets clearly ("Environment_Trees", "Props_Rocks")
- Share preset files with your team for consistency

---

## 🎯 Common Use Cases

### 🌿 **Landscape Design**
- **Trees**: Spray Brush + Random Scale + Random Rotation
- **Rocks**: Circle Stamp + Slope Filtering + Height Variation  
- **Grass Clumps**: Spray Brush + Small Min Distance
- **Paths**: Line/Curve Brush with path prefabs

### 🏘️ **Architecture & Props**
- **Building Placement**: Single Brush for precision
- **Fence Lines**: Line Brush with fence posts
- **Decorative Items**: Square Stamp for organized layouts
- **Random Props**: Spray Brush with multiple prefab selection

### 🎮 **Game Level Creation**
- **Collectibles**: Circle Stamp for power-up clusters
- **Obstacles**: Line Brush for barrier placement
- **Environmental Storytelling**: Mix of all brushes for detailed scenes

---

## ❗ Troubleshooting

### Objects Not Placing
- ✅ Check that Edit Mode is enabled
- ✅ Verify Parent Object is assigned
- ✅ Ensure prefabs are added to the list
- ✅ Check Ground Layer settings match your terrain
- ✅ Verify slope settings aren't too restrictive

### Performance Issues
- 🔧 Switch to Simple Preview mode
- 🔧 Reduce brush radius for complex scenes
- 🔧 Lower amount values for heavy prefabs
- 🔧 Use appropriate Min Distance values

### Preview Not Showing
- 🔧 Make sure you're hovering over valid surfaces
- 🔧 Check that your ground layer is set correctly
- 🔧 Verify slope filtering isn't blocking placement
- 🔧 Ensure prefabs are properly assigned

### Objects Appearing in Wrong Places
- 🔧 Check Top-Down Mode vs Surface-Aware Mode settings
- 🔧 Verify Normal Alignment settings
- 🔧 Adjust Height Offset if objects are floating/buried

---

## 🎉 You're Ready to Create!

Prefab Brush Pro is designed to speed up your level design workflow while maintaining creative control. Start with simple brush modes and gradually explore the advanced features as you become comfortable with the tool.

**Happy Painting! 🎨**

---

*For technical support or feature requests, please refer to the project documentation or contact the developer.*
