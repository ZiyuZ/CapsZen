// CapsZen Alpine.js app
window.capszenApp = () => {
	return {
		currentPlatform: "mac",
		showKeymap: false,
		selectedKey: null,
		selectedKeyInfo: "",
		scrolled: false,

		features: [
			{
				icon: "⌨️",
				title: "Cross-Platform",
				description: "Works seamlessly on both macOS and Windows",
			},
			{
				icon: "🚀",
				title: "Instant Navigation",
				description: "HJKL arrow keys, page up/down, home/end",
			},
			{
				icon: "✂️",
				title: "Quick Editing",
				description: "Copy, paste, undo, select all shortcuts",
			},
			{
				icon: "🎯",
				title: "App Launching",
				description: "Launch applications with key combinations",
			},
			{
				icon: "🔧",
				title: "Customizable",
				description: "Modify keybindings to match your workflow",
			},
			{
				icon: "📋",
				title: "Visual Reference",
				description: "Interactive keymap shows all shortcuts",
			},
		],

		downloadOptions: [
			{
				title: "🍎 macOS",
				requirement: "Requires Karabiner-Elements",
				steps: [
					'Install <a href="https://karabiner-elements.pqrs.org/" target="_blank">Karabiner-Elements</a>',
					"Download <code>CapsZen.yml</code>",
					"Import the configuration file",
				],
				downloadLink: "#",
				buttonText: "Download CapsZen.yml (WIP🚧)",
			},
			{
				title: "🪟 Windows",
				requirement: "Requires AutoHotkey",
				steps: [
					'Install <a href="https://www.autohotkey.com/" target="_blank">AutoHotkey</a>',
					"Download <code>CapsZen.ahk</code>",
					"Run the script or add to startup",
				],
				downloadLink: "#",
				buttonText: "Download CapsZen.ahk (WIP🚧)",
			},
		],

		// 公共键盘映射配置（两个平台共同的部分）
		commonKeymap: {
			// 功能键行（暂时注释，可以后续启用）
			// esc: { description: "Escape" },
			// F1: { description: "F1" },
			// F2: { description: "F2" },
			// F3: { description: "F3" },
			// F4: { description: "F4" },
			// F5: { description: "F5" },
			// F6: { description: "F6" },
			// F7: { description: "F7" },
			// F8: { description: "F8" },
			// F9: { description: "F9" },
			// F10: { description: "F10" },
			// F11: { description: "F11" },
			// F12: { description: "F12" },
			// ins: { description: "Insert" },
			// del: { description: "Delete" },

			// 数字行
			"`": { description: "CapsLock", group: "capslock-group" },
			1: { description: "!" },
			2: { description: "@" },
			3: { description: "#" },
			4: { description: "$" },
			5: { description: "%" },
			6: { description: "^" },
			7: { description: "&" },
			8: { description: "*" },
			9: { description: "(" },
			0: { description: ")" },
			"-": { description: "_" },
			"=": { description: "+" },
			// backspace: { description: "Backspace" },

			// QWERTY行
			// tab: { description: "Tab" },
			Q: { description: "Quit", group: "app-group" },
			W: { description: "Move Word Right", group: "navigation-group" },
			E: { description: "Move Line Up", group: "navigation-group" },
			Y: { description: "Redo", group: "edit-group" },
			U: { description: "Page Up", group: "navigation-group" },
			P: { description: "Page Down", group: "navigation-group" },
			"[": { description: "_" },
			"]": { description: "+" },
			"\\": { description: "|" },

			// ASDF行
			capslock: { description: "Zen Key", group: "capslock-group" },
			A: { description: "Select All", group: "edit-group" },
			S: { description: "Move Word Left", group: "navigation-group" },
			D: { description: "Move Line Down", group: "navigation-group" },
			F: { description: "Move Line Right", group: "navigation-group" },
			G: { description: "Context Menu" },
			H: { description: "← Left", group: "navigation-group" },
			J: { description: "↓ Down", group: "navigation-group" },
			K: { description: "↑ Up", group: "navigation-group" },
			L: { description: "→ Right", group: "navigation-group" },
			";": { description: "-" },
			"'": { description: "=" },
			// enter: { description: "Enter" },

			// ZXCV行
			// shift: { description: "Shift" },
			Z: { description: "Undo", group: "edit-group" },
			X: { description: "Cut", group: "edit-group" },
			C: { description: "Copy", group: "edit-group" },
			V: { description: "Paste", group: "edit-group" },
			B: { description: "Move Word Left", group: "navigation-group" },
			N: { description: "Backspace", group: "delete-group" },
			M: { description: "Delete Word", group: "delete-group" },
			",": { description: "Delete Forward", group: "delete-group" },
			".": { description: "Delete Word Forward", group: "delete-group" },
			"/": { description: "Delete Line", group: "delete-group" },

			// 底部控制键（暂时注释，平台特定）
			// ctrl: { description: "Ctrl" },
			// control: { description: "Control" },
			// win: { description: "Win" },
			// command: { description: "Command" },
			// alt: { description: "Alt" },
			// option: { description: "Option" },
			// space: { description: "Space" },

			// 方向键（暂时注释，可以后续启用）
			// up: { description: "Up" },
			// down: { description: "Down" },
			// left: { description: "Left" },
			// right: { description: "Right" },
		},

		// Mac平台特定配置
		macSpecificKeymap: {
			R: { description: "Launch ForkLift", group: "app-group" },
			T: { description: "Launch WezTerm", group: "app-group" },
			I: { description: "Line Head", group: "navigation-group" },
			O: { description: "Line End", group: "navigation-group" },
			option: { description: "Selection" },
			enter: { description: "Insert Line Below" },
		},

		// Windows平台特定配置
		windowsSpecificKeymap: {
			R: { description: "Launch Explorer", group: "app-group" },
			T: { description: "Launch Terminal", group: "app-group" },
			I: { description: "Home", group: "navigation-group" },
			O: { description: "End", group: "navigation-group" },
			alt: { description: "Selection" },
			enter: { description: "Insert Line Below" },
		},

		init() {
			console.log("CapsZen app initialized");
		},

		// Get current keymap based on platform (合并公共配置和平台特定配置)
		getCurrentKeymap() {
			const specificKeymap =
				this.currentPlatform === "mac"
					? this.macSpecificKeymap
					: this.windowsSpecificKeymap;

			// 合并公共配置和平台特定配置，平台特定的会覆盖公共的
			return { ...this.commonKeymap, ...specificKeymap };
		},

		// Get key label for display
		getKeyLabel(key) {
			const keymap = this.getCurrentKeymap();
			const keyInfo = keymap[key];

			if (key === "capslock") {
				return "CapsLock\nZen Key";
			}

			if (keyInfo?.description) {
				// For longer descriptions, show just the key name and description
				if (keyInfo.description.length > 8) {
					return (
						key.toUpperCase() +
						"\n" +
						keyInfo.description.substring(0, 6) +
						"..."
					);
				}
				return key.toUpperCase() + keyInfo.description;
			}

			return key.toUpperCase();
		},

		// Show key information
		showKeyInfo(key) {
			const keymap = this.getCurrentKeymap();
			const keyInfo = keymap[key];

			this.selectedKey = key.toUpperCase();

			if (keyInfo) {
				this.selectedKeyInfo = `CapsLock + ${key.toUpperCase()}: ${keyInfo.description}`;
			} else {
				this.selectedKeyInfo = `${key.toUpperCase()}: Standard key function`;
			}
		},

		scrollToSection(sectionId) {
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		},

		// Keyboard layout data - 2D array for better organization
		keyboardLayout: [
			// 功能键行
			[
				"Esc",
				"F1",
				"F2",
				"F3",
				"F4",
				"F5",
				"F6",
				"F7",
				"F8",
				"F9",
				"F10",
				"F11",
				"F12",
				"Ins",
				"Del",
			],
			// 数字行
			["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
			// QWERTY行
			["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"],
			// ASDF行
			["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"],
			// ZXCV行
			["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
		],

		// 为了向后兼容，保留原有的属性（通过计算属性获取）
		get functionKeys() {
			return this.keyboardLayout[0];
		},
		get numberRowKeys() {
			return this.keyboardLayout[1];
		},
		get qwertyRowKeys() {
			return this.keyboardLayout[2];
		},
		get asdfRowKeys() {
			return this.keyboardLayout[3];
		},
		get zxcvRowKeys() {
			return this.keyboardLayout[4];
		},

		// 获取每行的特殊键配置（如 Tab, CapsLock, Enter, Shift 等）
		getRowSpecialKeys(rowIndex) {
			const specialKeys = {
				1: {
					// 数字行
					after: [{ key: "backspace", flex: 1 }],
				},
				2: {
					// QWERTY行
					before: [{ key: "tab", flex: 3 }],
					after: [{ key: "\\", flex: 2 }],
				},
				3: {
					// ASDF行
					before: [{ key: "capslock", flex: 9 }],
					after: [{ key: "enter", flex: 8 }],
				},
				4: {
					// ZXCV行
					before: [{ key: "shift", flex: 1 }],
					after: [{ key: "shift", flex: 1 }],
				},
			};
			return specialKeys[rowIndex] || {};
		},

		// 获取底部按钮行的按钮顺序（数据驱动）
		getBottomRowButtons() {
			if (this.currentPlatform === "mac") {
				return [
					{ key: "control" },
					{ key: "option" }, // Mac: Option 在前
					{ key: "command" },
					{ key: "space", flex: true },
					{ key: "command" },
					{ key: "control" },
				];
			} else {
				return [
					{ key: "ctrl" },
					{ key: "win" }, // Windows: Win 在前
					{ key: "alt" },
					{ key: "space", flex: true },
					{ key: "alt" },
					{ key: "ctrl" },
				];
			}
		},

		// Helper methods for data-driven rendering
		getKeyFlex(key) {
			const flexMap = {
				backspace: 1,
				tab: 3,
				capslock: 9,
				enter: 8,
				space: 2,
				shift: 1,
				"\\": 2,
			};
			return flexMap[key] || null;
		},

		getKeyClass(key) {
			const keyInfo = this.getCurrentKeymap()[key];
			const classes = [];

			// 动态判断：如果在keymap中有定义，则为活跃状态
			if (this.isKeyActive(key)) {
				// 添加功能组样式
				if (keyInfo?.group) {
					classes.push(keyInfo.group);
				}
			} else {
				// 没有定义功能的按键添加 inactive 类
				classes.push("inactive");
			}

			// 添加特殊样式类
			const specialClasses = {
				backspace: ["right", "text"],
				tab: ["left", "text"],
				capslock: ["left", "text"],
				enter: ["right", "text"],
				shift: ["left", "text"],
				ctrl: ["text"],
				control: ["text"],
				win: ["text"],
				command: ["text"],
				alt: ["text"],
				option: ["text"],
			};

			if (specialClasses[key]) {
				classes.push(...specialClasses[key]);
			}

			return classes.join(" ");
		},

		// 检查按键是否有定义的功能
		isKeyActive(key) {
			const keymap = this.getCurrentKeymap();
			return !!keymap[key];
		},

		// 获取按键的功能描述（从keymap中获取）
		getKeyDescription(key) {
			const keyInfo = this.getCurrentKeymap()[key];
			return keyInfo ? keyInfo.description : "";
		},
	};
};
