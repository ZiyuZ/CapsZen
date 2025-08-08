<!-- markdownlint-disable MD028 MD033 MD036 MD041 -->

<div align="center">
  <img src="docs/assets/CapsZen.png" alt="CapsZen Logo" width="120" height="120">
  <h1>CapsZen</h1>
  <p><strong>Transform your CapsLock key into a powerful modifier for navigation and editing</strong></p>
  
  English | [中文](README-zh.md)
  
  [![GitHub stars](https://img.shields.io/github/stars/ZiyuZ/CapsZen?style=for-the-badge)](https://github.com/ZiyuZ/CapsZen)
  [![GitHub forks](https://img.shields.io/github/forks/ZiyuZ/CapsZen?style=for-the-badge)](https://github.com/ZiyuZ/CapsZen)
  [![GitHub downloads](https://img.shields.io/github/downloads/ZiyuZ/CapsZen/total?style=for-the-badge)](https://github.com/ZiyuZ/CapsZen/releases)
</div>

---

## 📖 Project Overview

CapsZen is a hotkey system for Windows (AHK) and macOS (Karabiner) that uses CapsLock for unified navigation, text editing, and special character input.

> Visit [interactive keyboard mapping](https://ziyuz.github.io/CapsZen) to preview all shortcut functions

<div align="center">
  <img src="screenshots/keymap_mac.png" alt="Keymap macOS" width="100%">
</div>

<details>
<summary>Windows Keymap</summary>
<div align="center">
  <img src="screenshots/keymap_win.png" alt="Keymap Windows" width="100%">
</div>
</details>

### ✨ Key Features

- **🖥️ Cross-Platform Support** - Works seamlessly on both macOS and Windows with unified operation logic
- **⚡ Instant Navigation** - HJKL arrow keys, page up/down, home/end
- **✂️ Quick Editing** - Copy, paste, undo, select all shortcuts
- **🚀 App Launching** - One-click launch of common applications (Windows: first taskbar app, macOS: WezTerm and ForkLift, customizable)
- **🎨 Visual Reference** - Interactive keyboard mapping shows all shortcuts
- **🔧 Highly Customizable** - Adjust key bindings to match your workflow

## 🚀 Quick Start

### System Requirements

- **macOS**: Requires Karabiner-Elements
- **Windows**: Requires AutoHotkey V2 if running `CapsZen.ahk`, or 64-bit Windows system if running `CapsZen.exe`

### Download

<div align="center">

| Platform | Download Link |
|----------|---------------|
| macOS | [CapsZen.json](https://github.com/ZiyuZ/CapsZen/releases/latest/download/CapsZen.json) |
| Windows | [CapsZen.ahk (AutoHotkey V2)](https://github.com/ZiyuZ/CapsZen/releases/latest/download/CapsZen.ahk) <br/> [CapsZen.exe (x64)](https://github.com/ZiyuZ/CapsZen/releases/latest/download/CapsZen.exe) |

</div>

### Installation Steps

#### macOS Users

1. Install [Karabiner-Elements](https://karabiner-elements.pqrs.org/)
2. Download `CapsZen.json` configuration file
3. Import the configuration file in Karabiner-Elements
   1. Copy the configuration file to Karabiner's rule import location, usually `~/.config/karabiner/assets/complex_modifications`
   2. In Karabiner's `Complex Modifications`, click `Add predefined rule`, find CapsZen and click `Enable`
4. Enable the configuration

#### Windows Users

> [!TIP]
> To add to startup:
>
> 1. Open Run dialog with <kbd>Win</kbd> + <kbd>R</kbd>
> 2. Type `shell:startup` and press Enter
> 3. Drag the application or its shortcut to the opened folder

##### AHK Script Method

1. Install [AutoHotkey V2](https://www.autohotkey.com/)
2. Download `CapsZen.ahk` script file
3. Double-click to run the script

##### Executable File Method

1. Download `CapsZen.exe`
2. Double-click to run the application

## ⌨️ Shortcut Reference

### Navigation Shortcuts

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>H</kbd> | Left | Left | Move cursor left |
| <kbd>CapsLock</kbd> + <kbd>J</kbd> | Down | Down | Move cursor down |
| <kbd>CapsLock</kbd> + <kbd>K</kbd> | Up | Up | Move cursor up |
| <kbd>CapsLock</kbd> + <kbd>L</kbd> | Right | Right | Move cursor right |
| <kbd>CapsLock</kbd> + <kbd>I</kbd> | Home | Home | Move to beginning of line |
| <kbd>CapsLock</kbd> + <kbd>O</kbd> | End | End | Move to end of line |
| <kbd>CapsLock</kbd> + <kbd>U</kbd> | Page Up | Page Up | Page Up |
| <kbd>CapsLock</kbd> + <kbd>P</kbd> | Page Down | Page Down | Page Down |
| <kbd>CapsLock</kbd> + <kbd>W</kbd> | Next Word | Next Word | Move to next word |
| <kbd>CapsLock</kbd> + <kbd>B</kbd> | Previous Word | Previous Word | Move to previous word |

> [!TIP]
> When navigating, simultaneously pressing <kbd>Option</kbd> (macOS) or <kbd>Alt</kbd> (Windows) will have a selection effect, similar to pressing <kbd>Shift</kbd> (because pressing <kbd>CapsLock</kbd> and <kbd>Shift</kbd> together is a bit difficult)

> [!NOTE]
> On macOS, different terminals have some differences in how they handle home/end movement. This project is optimized specifically for WezTerm.

### Editing Shortcuts

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>Z</kbd> | Undo | Undo | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Z</kbd> |
| <kbd>CapsLock</kbd> + <kbd>Y</kbd> | Redo | Redo | <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>/<kbd>Ctrl</kbd> + <kbd>Y</kbd> |
| <kbd>CapsLock</kbd> + <kbd>X</kbd> | Cut | Cut | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>X</kbd> |
| <kbd>CapsLock</kbd> + <kbd>C</kbd> | Copy | Copy | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>C</kbd> |
| <kbd>CapsLock</kbd> + <kbd>V</kbd> | Paste | Paste | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>V</kbd> |
| <kbd>CapsLock</kbd> + <kbd>A</kbd> | Select All | Select All | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>A</kbd> |
| <kbd>CapsLock</kbd> + <kbd>G</kbd> | Right-click Menu | Right-click Menu | Context menu, macOS at mouse position, Windows at cursor position |
| <kbd>CapsLock</kbd> + <kbd>Enter</kbd> | New Line at End | New Line at End | Insert new line at end of current line |

### Deletion Shortcuts

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>N</kbd> | Delete Previous Character | Delete Previous Character | |
| <kbd>CapsLock</kbd> + <kbd>M</kbd> | Delete Previous Word | Delete Previous Word |   |
| <kbd>CapsLock</kbd> + <kbd>,</kbd> | Delete Next Character | Delete Next Character |  |
| <kbd>CapsLock</kbd> + <kbd>.</kbd> | Delete Next Word | Delete Next Word |   |
| <kbd>CapsLock</kbd> + <kbd>/</kbd> | Delete Line | Delete Line | Delete entire line <br> Uses <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> shortcut in VSCode on macOS |

### App Launch Shortcuts

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>T</kbd> | Launch WezTerm | Launch first taskbar app <br> (<kbd>Windows</kbd> + <kbd>1</kbd>) | Terminal application |
| <kbd>CapsLock</kbd> + <kbd>R</kbd> | Launch ForkLift | Reload script | macOS: File manager / Windows: Reload script |

### Symbol Shortcuts

> Avoid moving the little finger long distance

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>;</kbd> | - | - |  |
| <kbd>CapsLock</kbd> + <kbd>'</kbd> | = | = |  |
| <kbd>CapsLock</kbd> + <kbd>[</kbd> | _ | _ |  |
| <kbd>CapsLock</kbd> + <kbd>]</kbd> | + | + |  |
| <kbd>CapsLock</kbd> + <kbd>\\</kbd> | \| | \| |  |

### Number Shortcuts

> Work like <kbd>Shift</kbd>

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>1</kbd> | ! | ! | |
| <kbd>CapsLock</kbd> + <kbd>2</kbd> | @ | @ | |
| <kbd>CapsLock</kbd> + <kbd>3</kbd> | # | # | |
| <kbd>CapsLock</kbd> + <kbd>4</kbd> | $ | $ | |
| <kbd>CapsLock</kbd> + <kbd>5</kbd> | % | % | |
| <kbd>CapsLock</kbd> + <kbd>6</kbd> | ^ | ^ | |
| <kbd>CapsLock</kbd> + <kbd>7</kbd> | & | & | |
| <kbd>CapsLock</kbd> + <kbd>8</kbd> | * | * | |
| <kbd>CapsLock</kbd> + <kbd>9</kbd> | ( | ( | |
| <kbd>CapsLock</kbd> + <kbd>0</kbd> | ) | ) | |

### Special Functions

| Key Combination | macOS Function | Windows Function | Notes |
|----------------|----------------|------------------|-------|
| <kbd>CapsLock</kbd> + <kbd>`</kbd> | Toggle Caps Lock | Toggle Caps Lock | Temporarily enable/disable Caps Lock |
| <kbd>CapsLock</kbd> + <kbd>Q</kbd> | Quit App | Quit App | <kbd>Cmd</kbd> + <kbd>Q</kbd>/<kbd>Alt</kbd> + <kbd>F4</kbd> |
| <kbd>CapsLock</kbd> + Scroll Up | - | Volume Up | Adjust volume |
| <kbd>CapsLock</kbd> + Scroll Down | - | Volume Down | Adjust volume |

<!-- ### Mouse Side Button Functions (Windows Only)

| Key | Function | Notes |
|-----|----------|-------|
| <kbd>XButton2</kbd> | Middle Click | Far side button |
| <kbd>XButton2</kbd> + Scroll Up | Previous Tab | Ctrl + Page Up |
| <kbd>XButton2</kbd> + Scroll Down | Next Tab | Ctrl + Page Down |
| <kbd>XButton2</kbd> + Right Click | Browser Forward | Browser forward |
| <kbd>XButton2</kbd> + Left Click | Go to Parent Directory | Alt + Up |
| <kbd>XButton1</kbd> | Middle Click | Near side button |
| <kbd>XButton1</kbd> + Scroll Down | Alt + Tab | Window switching |
| <kbd>XButton1</kbd> + Scroll Up | Shift + Alt + Tab | Reverse window switching |
| <kbd>XButton1</kbd> + Middle Click | Escape | Cancel window switching |
| <kbd>XButton1</kbd> + Left Click | Virtual Desktop Left | Win + Ctrl + Left |
| <kbd>XButton1</kbd> + Right Click | Virtual Desktop Right | Win + Ctrl + Right | -->

## 💫 Customization

### Windows

1. Modify `CapsZen.ahk`
2. Start the script
   - If currently running, press <kbd>CapsLock</kbd> + <kbd>R</kbd> to reload script
   - If not running, double-click the script to start
3. Compile to executable
   - Launch Autohotkey Dash, select `Compile`
   - Choose script file and executable target location
   - Select icon located at `/docs/assets/CapsZen.ico` in this project
   - Choose Base File for your system version
   - Click `Convert`

### macOS

1. Modify `CapsZen.yml`
2. Run `uv run converter.py CapsZen.yml -o CapsZen.json`
    - Require [uv](https://docs.astral.sh/uv/) installed
3. Copy `CapsZen.json` to Karabiner's external rule import directory
4. Import and enable CapsZen rule

## 💡 Use Cases

### Programming Development

- Use HJKL for precise cursor navigation
- Quick word jumping (W/B)
- One-click word or line deletion
- Fast terminal and file manager launching

### Document Editing

- More efficient copy-paste operations
- Quick text selection (with Option or Alt)
- Undo/redo operations
- Convenient symbol input

## 📄 License

This project is licensed under the MIT License ([LICENSE](LICENSE)).

## 🙏 Acknowledgments

CapsZen is inspired by these excellent open-source projects:

- **[matrix1001/capslock-plus-plus](https://github.com/matrix1001/capslock-plus-plus)**
- **[Vonng/Capslock](https://github.com/Vonng/Capslock)**

---

<div align="center">
  <p>⭐ If this project helps you, please give us a Star!</p>
</div>
