// data/operating-systems.ts
// import { Application } from "@/types/shortcut";

import { CategoryItems } from "@/data/types";

export const OperatingSystems: CategoryItems = {
    "windows": {
        id: "windows",
        name: "Windows 11",
        shortcutpageName: "100+ Windows 11 Keyboard Shortcuts",
        icon: "/icons/os/windows.svg",
        description: "Mastering keyboard shortcuts in Windows OS can significantly enhance your productivity by allowing quick navigation, multitasking, and system control without relying on the mouse. These shortcuts streamline common tasks like file management, window switching, and system commands, ensuring efficiency for both beginners and power users.",
        metadescription: "Check all Windows 11 Keyboard Shortcuts to make your life easlier. These Windows 11 keyboard shortcuts will save you a lot of time.",
        platforms: ["windows"],
        featured: true,
        groups: [
            {
                title: "Run Commands",
                shortcuts: [
                    {
                        id: "1",
                        keys: ["Win", "+", "R"],
                        description: "Open the Run dialog box",
                        platforms: { windows: ["Win", "+", "R"] }
                    },
                    {
                        id: "2",
                        keys: ["Win", "+", "Pause/Break"],
                        description: "Open System Properties",
                        platforms: { windows: ["Win", "+", "Pause/Break"] }
                    },
                    {
                        id: "3",
                        keys: ["Win", "+", "Ctrl", "+", "Enter"],
                        description: "Open Narrator",
                        platforms: { windows: ["Win", "+", "Ctrl", "+", "Enter"] }
                    },
                    {
                        id: "4",
                        keys: ["Win", "+", "G"],
                        description: "Open Xbox Game Bar",
                        platforms: { windows: ["Win", "+", "G"] }
                    },
                    {
                        id: "5",
                        keys: ["Win", "+", "H"],
                        description: "Start dictation",
                        platforms: { windows: ["Win", "+", "H"] }
                    },
                    {
                        id: "6",
                        keys: ["Win", "+", "U"],
                        description: "Open Ease of Access Center",
                        platforms: { windows: ["Win", "+", "U"] }
                    },
                    {
                        id: "7",
                        keys: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"],
                        description: "Restart graphics driver",
                        platforms: { windows: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"] }
                    }
                ]
            },
            {
                title: "File Shortcuts",
                shortcuts: [
                    {
                        id: "8",
                        keys: ["Ctrl", "+", "C"],
                        description: "Copy selected item",
                        platforms: { windows: ["Ctrl", "+", "C"] }
                    },
                    {
                        id: "9",
                        keys: ["Ctrl", "+", "X"],
                        description: "Cut selected item",
                        platforms: { windows: ["Ctrl", "+", "X"] }
                    },
                    {
                        id: "10",
                        keys: ["Ctrl", "+", "V"],
                        description: "Paste copied/cut item",
                        platforms: { windows: ["Ctrl", "+", "V"] }
                    },
                    {
                        id: "11",
                        keys: ["Ctrl", "+", "Z"],
                        description: "Undo an action",
                        platforms: { windows: ["Ctrl", "+", "Z"] }
                    },
                    {
                        id: "12",
                        keys: ["Ctrl", "+", "Y"],
                        description: "Redo an action",
                        platforms: { windows: ["Ctrl", "+", "Y"] }
                    },
                    {
                        id: "13",
                        keys: ["Ctrl", "+", "A"],
                        description: "Select all items",
                        platforms: { windows: ["Ctrl", "+", "A"] }
                    },
                    {
                        id: "14",
                        keys: ["Shift", "+", "Delete"],
                        description: "Permanently delete selected item",
                        platforms: { windows: ["Shift", "+", "Delete"] }
                    }
                ]
            },
            {
                title: "Navigation",
                shortcuts: [
                    {
                        id: "15",
                        keys: ["Win", "+", "Arrow Keys"],
                        description: "Snap windows (up, down, left, right)",
                        platforms: { windows: ["Win", "+", "Arrow Keys"] }
                    },
                    {
                        id: "16",
                        keys: ["Win", "+", "Home"],
                        description: "Minimize all but the active window",
                        platforms: { windows: ["Win", "+", "Home"] }
                    },
                    {
                        id: "17",
                        keys: ["Win", "+", "Shift", "+", "M"],
                        description: "Restore all minimized windows",
                        platforms: { windows: ["Win", "+", "Shift", "+", "M"] }
                    },
                    {
                        id: "18",
                        keys: ["Win", "+", "Ctrl", "+", "Arrow Keys"],
                        description: "Switch between virtual desktops",
                        platforms: { windows: ["Win", "+", "Ctrl", "+", "Arrow Keys"] }
                    },
                    {
                        id: "19",
                        keys: ["Ctrl", "+", "Esc"],
                        description: "Open the Start Menu",
                        platforms: { windows: ["Ctrl", "+", "Esc"] }
                    },
                    {
                        id: "20",
                        keys: ["Alt", "+", "Space"],
                        description: "Open window control menu",
                        platforms: { windows: ["Alt", "+", "Space"] }
                    }
                ]
            },
            {
                title: "Accessibility Shortcuts",
                shortcuts: [
                    {
                        id: "21",
                        keys: ["Win", "+", "+ (Plus)"],
                        description: "Zoom in (Magnifier)",
                        platforms: { windows: ["Win", "+", "+ (Plus)"] }
                    },
                    {
                        id: "22",
                        keys: ["Win", "+", "- (Minus)"],
                        description: "Zoom out (Magnifier)",
                        platforms: { windows: ["Win", "+", "- (Minus)"] }
                    },
                    {
                        id: "23",
                        keys: ["Win", "+", "Esc"],
                        description: "Close Magnifier",
                        platforms: { windows: ["Win", "+", "Esc"] }
                    },
                    {
                        id: "24",
                        keys: ["Ctrl", "+", "Alt", "+", "Del"],
                        description: "Open Security Options",
                        platforms: { windows: ["Ctrl", "+", "Alt", "+", "Del"] }
                    },
                    {
                        id: "25",
                        keys: ["Ctrl", "+", "Shift", "+", "Esc"],
                        description: "Open Task Manager",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "Esc"] }
                    }
                ]
            },
            {
                title: "Windows Search Shortcuts",
                shortcuts: [
                    {
                        id: "26",
                        keys: ["Win", "+", "S"],
                        description: "Open Search",
                        platforms: { windows: ["Win", "+", "S"] }
                    },
                    {
                        id: "27",
                        keys: ["Ctrl", "+", "F"],
                        description: "Find in apps or files",
                        platforms: { windows: ["Ctrl", "+", "F"] }
                    },
                    {
                        id: "28",
                        keys: ["Ctrl", "+", "H"],
                        description: "Search for a file or app",
                        platforms: { windows: ["Ctrl", "+", "H"] }
                    },
                    {
                        id: "29",
                        keys: ["Ctrl", "+", "E"],
                        description: "Activate the search box in File Explorer",
                        platforms: { windows: ["Ctrl", "+", "E"] }
                    }
                ]
            },
            {
                title: "Screenshot Shortcuts",
                shortcuts: [
                    {
                        id: "30",
                        keys: ["Win", "+", "PrtScn"],
                        description: "Take a screenshot and save to Pictures folder",
                        platforms: { windows: ["Win", "+", "PrtScn"] }
                    },
                    {
                        id: "31",
                        keys: ["Alt", "+", "PrtScn"],
                        description: "Take a screenshot of the active window",
                        platforms: { windows: ["Alt", "+", "PrtScn"] }
                    },
                    {
                        id: "32",
                        keys: ["Win", "+", "Shift", "+", "S"],
                        description: "Open Snip & Sketch to take a screenshot",
                        platforms: { windows: ["Win", "+", "Shift", "+", "S"] }
                    }
                ]
            },
            {
                title: "Browser Shortcuts",
                shortcuts: [
                    {
                        id: "33",
                        keys: ["Ctrl", "+", "T"],
                        description: "Open a new tab",
                        platforms: { windows: ["Ctrl", "+", "T"] }
                    },
                    {
                        id: "34",
                        keys: ["Ctrl", "+", "Shift", "+", "T"],
                        description: "Reopen last closed tab",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "T"] }
                    },
                    {
                        id: "35",
                        keys: ["Ctrl", "+", "D"],
                        description: "Bookmark current page",
                        platforms: { windows: ["Ctrl", "+", "D"] }
                    },
                    {
                        id: "36",
                        keys: ["Ctrl", "+", "Shift", "+", "Del"],
                        description: "Clear browsing data",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "Del"] }
                    },
                    {
                        id: "37",
                        keys: ["Ctrl", "+", "W"],
                        description: "Close current tab",
                        platforms: { windows: ["Ctrl", "+", "W"] }
                    }
                ]
            },
            {
                title: "Command Prompt Shortcuts",
                shortcuts: [
                    {
                        id: "38",
                        keys: ["Ctrl", "+", "C"],
                        description: "Copy selected text",
                        platforms: { windows: ["Ctrl", "+", "C"] }
                    },
                    {
                        id: "39",
                        keys: ["Ctrl", "+", "V"],
                        description: "Paste text from clipboard",
                        platforms: { windows: ["Ctrl", "+", "V"] }
                    },
                    {
                        id: "40",
                        keys: ["Ctrl", "+", "A"],
                        description: "Select all content in Command Prompt",
                        platforms: { windows: ["Ctrl", "+", "A"] }
                    },
                    {
                        id: "41",
                        keys: ["Ctrl", "+", "M"],
                        description: "Enter mark mode to select text",
                        platforms: { windows: ["Ctrl", "+", "M"] }
                    },
                    {
                        id: "42",
                        keys: ["Arrow keys"],
                        description: "Move cursor in the command line",
                        platforms: { windows: ["Arrow keys"] }
                    },
                    {
                        id: "43",
                        keys: ["Ctrl", "+", "Arrow keys"],
                        description: "Move cursor by word in the command line",
                        platforms: { windows: ["Ctrl", "+", "Arrow keys"] }
                    },
                    {
                        id: "44",
                        keys: ["Ctrl", "+", "Home"],
                        description: "Scroll to the top of the buffer",
                        platforms: { windows: ["Ctrl", "+", "Home"] }
                    },
                    {
                        id: "45",
                        keys: ["Ctrl", "+", "End"],
                        description: "Scroll to the bottom of the buffer",
                        platforms: { windows: ["Ctrl", "+", "End"] }
                    },
                    {
                        id: "46",
                        keys: ["F1"],
                        description: "Paste previous command one character at a time",
                        platforms: { windows: ["F1"] }
                    },
                    {
                        id: "47",
                        keys: ["F2", "+", "char"],
                        description: "Paste previous command up to a specific character",
                        platforms: { windows: ["F2", "+", "char"] }
                    },
                    {
                        id: "48",
                        keys: ["F3"],
                        description: "Paste the last executed command",
                        platforms: { windows: ["F3"] }
                    },
                    {
                        id: "49",
                        keys: ["F4", "+", "char"],
                        description: "Delete characters in the current command up to a specific character",
                        platforms: { windows: ["F4", "+", "char"] }
                    },
                    {
                        id: "50",
                        keys: ["F7"],
                        description: "Display command history in a selectable list",
                        platforms: { windows: ["F7"] }
                    },
                    {
                        id: "51",
                        keys: ["Alt", "+", "Enter"],
                        description: "Switch Command Prompt between full screen and windowed mode",
                        platforms: { windows: ["Alt", "+", "Enter"] }
                    }
                ]
            },
            {
                title: "PowerShell Shortcuts",
                shortcuts: [
                    {
                        id: "52",
                        keys: ["Ctrl", "+", "C"],
                        description: "Terminate current command",
                        platforms: { windows: ["Ctrl", "+", "C"] }
                    },
                    {
                        id: "53",
                        keys: ["Ctrl", "+", "R"],
                        description: "Search command history",
                        platforms: { windows: ["Ctrl", "+", "R"] }
                    },
                    {
                        id: "54",
                        keys: ["Ctrl", "+", "End"],
                        description: "Clear the current line",
                        platforms: { windows: ["Ctrl", "+", "End"] }
                    },
                    {
                        id: "55",
                        keys: ["Ctrl", "+", "Space"],
                        description: "Trigger IntelliSense",
                        platforms: { windows: ["Ctrl", "+", "Space"] }
                    },
                    {
                        id: "56",
                        keys: ["Shift", "+", "Enter"],
                        description: "Execute command in a new tab",
                        platforms: { windows: ["Shift", "+", "Enter"] }
                    },
                    {
                        id: "57",
                        keys: ["Ctrl", "+", "T"],
                        description: "Open a new PowerShell tab",
                        platforms: { windows: ["Ctrl", "+", "T"] }
                    },
                    {
                        id: "58",
                        keys: ["Ctrl", "+", "W"],
                        description: "Close the current PowerShell tab",
                        platforms: { windows: ["Ctrl", "+", "W"] }
                    }
                ]
            },
            {
                title: "Windows Terminal Shortcuts",
                shortcuts: [
                    {
                        id: "59",
                        keys: ["Ctrl", "+", "Shift", "+", "D"],
                        description: "Duplicate current terminal",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "D"] }
                    },
                    {
                        id: "60",
                        keys: ["Alt", "+", "Shift", "+", "+"],
                        description: "Split terminal vertically",
                        platforms: { windows: ["Alt", "+", "Shift", "+", "+"] }
                    },
                    {
                        id: "61",
                        keys: ["Alt", "+", "Shift", "+", "-"],
                        description: "Split terminal horizontally",
                        platforms: { windows: ["Alt", "+", "Shift", "+", "-"] }
                    },
                    {
                        id: "62",
                        keys: ["Ctrl", "+", "Shift", "+", "P"],
                        description: "Open Command Palette",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "P"] }
                    },
                    {
                        id: "63",
                        keys: ["Alt", "+", "Arrow Keys"],
                        description: "Resize panes",
                        platforms: { windows: ["Alt", "+", "Arrow Keys"] }
                    },
                    {
                        id: "64",
                        keys: ["Ctrl", "+", "Tab"],
                        description: "Switch to next tab",
                        platforms: { windows: ["Ctrl", "+", "Tab"] }
                    },
                    {
                        id: "65",
                        keys: ["Ctrl", "+", "Shift", "+", "Tab"],
                        description: "Switch to previous tab",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "Tab"] }
                    },
                    {
                        id: "66",
                        keys: ["Ctrl", "+", "Shift", "+", "W"],
                        description: "Close the current tab",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "W"] }
                    }
                ]
            },
            {
                title: "Miscellaneous System Shortcuts",
                shortcuts: [
                    {
                        id: "67",
                        keys: ["Ctrl", "+", "Shift", "+", "Esc"],
                        description: "Open Task Manager",
                        platforms: { windows: ["Ctrl", "+", "Shift", "+", "Esc"] }
                    },
                    {
                        id: "68",
                        keys: ["Win", "+", "P"],
                        description: "Open Projection options",
                        platforms: { windows: ["Win", "+", "P"] }
                    },
                    {
                        id: "69",
                        keys: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"],
                        description: "Reset display driver",
                        platforms: { windows: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"] }
                    },
                    {
                        id: "70",
                        keys: ["Ctrl", "+", "Alt", "+", "Del"],
                        description: "Open Security Options",
                        platforms: { windows: ["Ctrl", "+", "Alt", "+", "Del"] }
                    },
                    {
                        id: "71",
                        keys: ["Win", "+", "Alt", "+", "D"],
                        description: "Show or hide the date and time on the taskbar",
                        platforms: { windows: ["Win", "+", "Alt", "+", "D"] }
                    },
                    {
                        id: "72",
                        keys: ["Win", "+", "Shift", "+", "S"],
                        description: "Take a screenshot using Snip & Sketch",
                        platforms: { windows: ["Win", "+", "Shift", "+", "S"] }
                    }
                ]
            }
        ]
    },
    "macos": {
        id: "macos",
        name: "macOS",
        shortcutpageName: "80+ macOS Keyboard Shortcuts",
        icon: "/icons/os/macos.svg",
        description: "Mastering keyboard shortcuts in macOS can greatly enhance your productivity by allowing efficient navigation, multitasking, and system control without depending on the mouse. These shortcuts streamline everyday tasks like file management, window switching, and system commands, ensuring seamless operation for both novice and experienced users.",
        metadescription: "Check all macOS Keyboard Shortcuts to make your life easier. These macOS keyboard shortcuts will save you a lot of time.",
        platforms: ["macos"],
        featured: true,
        
        groups: [
            {
                title: "System",
                shortcuts: [
                    {
                        id: "1",
                        keys: ["⌘", "+", "Space"],
                        description: "Open Spotlight Search",
                        platforms: { mac: ["⌘", "+", "Space"] }
                    },
                    {
                        id: "2",
                        keys: ["⌘", "+", "⌥", "+", "D"],
                        description: "Show/hide Dock",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "D"] }
                    },
                    {
                        id: "3",
                        keys: ["⌃", "+", "⌘", "+", "Q"],
                        description: "Lock screen",
                        platforms: { mac: ["⌃", "+", "⌘", "+", "Q"] }
                    },
                    {
                        id: "4",
                        keys: ["⌘", "+", "⇧", "+", "3"],
                        description: "Take a screenshot of the entire screen",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "3"] }
                    },
                    {
                        id: "5",
                        keys: ["⌘", "+", "⇧", "+", "4"],
                        description: "Take a screenshot of a selected area",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "4"] }
                    },
                    {
                        id: "6",
                        keys: ["⌘", "+", "⇧", "+", "5"],
                        description: "Open screenshot options",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "5"] }
                    },
                    {
                        id: "7",
                        keys: ["⌘", "+", "⌥", "+", "Esc"],
                        description: "Force quit an application",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "Esc"] }
                    },
                    {
                        id: "8",
                        keys: ["⌃", "+", "⌘", "+", "Power"],
                        description: "Restart the computer",
                        platforms: { mac: ["⌃", "+", "⌘", "+", "Power"] }
                    },
                    {
                        id: "9",
                        keys: ["⌃", "+", "⌘", "+", "Eject"],
                        description: "Shut down the computer",
                        platforms: { mac: ["⌃", "+", "⌘", "+", "Eject"] }
                    },
                    {
                        id: "10",
                        keys: ["⌘", "+", "⇧", "+", "Delete"],
                        description: "Empty the Trash",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "Delete"] }
                    }
                ]
            },
            {
                title: "Window Management",
                shortcuts: [
                    {
                        id: "11",
                        keys: ["⌘", "+", "Tab"],
                        description: "Switch between apps",
                        platforms: { mac: ["⌘", "+", "Tab"] }
                    },
                    {
                        id: "12",
                        keys: ["⌘", "+", "M"],
                        description: "Minimize window",
                        platforms: { mac: ["⌘", "+", "M"] }
                    },
                    {
                        id: "13",
                        keys: ["⌘", "+", "H"],
                        description: "Hide window",
                        platforms: { mac: ["⌘", "+", "H"] }
                    },
                    {
                        id: "14",
                        keys: ["⌘", "+", "⌥", "+", "M"],
                        description: "Minimize all windows",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "M"] }
                    },
                    {
                        id: "15",
                        keys: ["⌘", "+", "`"],
                        description: "Cycle through windows of the current app",
                        platforms: { mac: ["⌘", "+", "`"] }
                    },
                    {
                        id: "16",
                        keys: ["⌘", "+", "W"],
                        description: "Close the current window",
                        platforms: { mac: ["⌘", "+", "W"] }
                    },
                    {
                        id: "17",
                        keys: ["⌘", "+", "⌥", "+", "W"],
                        description: "Close all windows in the current app",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "W"] }
                    },
                    {
                        id: "18",
                        keys: ["⌘", "+", "F3"],
                        description: "Show the desktop",
                        platforms: { mac: ["⌘", "+", "F3"] }
                    },
                    {
                        id: "19",
                        keys: ["⌘", "+", "⇧", "+", "F3"],
                        description: "Show Mission Control",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "F3"] }
                    }
                ]
            },
            {
                title: "Document Shortcuts",
                shortcuts: [
                    {
                        id: "20",
                        keys: ["⌘", "+", "C"],
                        description: "Copy selected text or item",
                        platforms: { mac: ["⌘", "+", "C"] }
                    },
                    {
                        id: "21",
                        keys: ["⌘", "+", "X"],
                        description: "Cut selected text or item",
                        platforms: { mac: ["⌘", "+", "X"] }
                    },
                    {
                        id: "22",
                        keys: ["⌘", "+", "V"],
                        description: "Paste copied item",
                        platforms: { mac: ["⌘", "+", "V"] }
                    },
                    {
                        id: "23",
                        keys: ["⌘", "+", "Z"],
                        description: "Undo the last action",
                        platforms: { mac: ["⌘", "+", "Z"] }
                    },
                    {
                        id: "24",
                        keys: ["⌘", "+", "⇧", "+", "Z"],
                        description: "Redo the last action",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "Z"] }
                    },
                    {
                        id: "25",
                        keys: ["⌘", "+", "A"],
                        description: "Select all items",
                        platforms: { mac: ["⌘", "+", "A"] }
                    },
                    {
                        id: "26",
                        keys: ["⌘", "+", "F"],
                        description: "Find text within a document",
                        platforms: { mac: ["⌘", "+", "F"] }
                    },
                    {
                        id: "27",
                        keys: ["⌘", "+", "P"],
                        description: "Print the current document",
                        platforms: { mac: ["⌘", "+", "P"] }
                    },
                    {
                        id: "28",
                        keys: ["⌘", "+", "S"],
                        description: "Save the current document",
                        platforms: { mac: ["⌘", "+", "S"] }
                    }
                ]
            },
            {
                title: "Finder Shortcuts",
                shortcuts: [
                    {
                        id: "29",
                        keys: ["⌘", "+", "N"],
                        description: "Open a new Finder window",
                        platforms: { mac: ["⌘", "+", "N"] }
                    },
                    {
                        id: "30",
                        keys: ["⌘", "+", "T"],
                        description: "Open a new Finder tab",
                        platforms: { mac: ["⌘", "+", "T"] }
                    },
                    {
                        id: "31",
                        keys: ["⌘", "+", "⇧", "+", "N"],
                        description: "Create a new folder",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "N"] }
                    },
                    {
                        id: "32",
                        keys: ["⌘", "+", "Delete"],
                        description: "Move selected item to Trash",
                        platforms: { mac: ["⌘", "+", "Delete"] }
                    },
                    {
                        id: "33",
                        keys: ["⌘", "+", "⇧", "+", "Delete"],
                        description: "Empty Trash",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "Delete"] }
                    },
                    {
                        id: "34",
                        keys: ["⌘", "+", "I"],
                        description: "Show info for selected item",
                        platforms: { mac: ["⌘", "+", "I"] }
                    },
                    {
                        id: "35",
                        keys: ["⌘", "+", "D"],
                        description: "Duplicate selected item",
                        platforms: { mac: ["⌘", "+", "D"] }
                    },
                    {
                        id: "36",
                        keys: ["⌘", "+", "L"],
                        description: "Create an alias for the selected item",
                        platforms: { mac: ["⌘", "+", "L"] }
                    },
                    {
                        id: "37",
                        keys: ["⌘", "+", "K"],
                        description: "Connect to a server",
                        platforms: { mac: ["⌘", "+", "K"] }
                    },
                    {
                        id: "38",
                        keys: ["⌘", "+", "⇧", "+", "G"],
                        description: "Go to Folder",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "G"] }
                    }
                ]
            },
            {
                title: "Text Editing",
                shortcuts: [
                    {
                        id: "39",
                        keys: ["⌘", "+", "B"],
                        description: "Bold selected text",
                        platforms: { mac: ["⌘", "+", "B"] }
                    },
                    {
                        id: "40",
                        keys: ["⌘", "+", "I"],
                        description: "Italicize selected text",
                        platforms: { mac: ["⌘", "+", "I"] }
                    },
                    {
                        id: "41",
                        keys: ["⌘", "+", "U"],
                        description: "Underline selected text",
                        platforms: { mac: ["⌘", "+", "U"] }
                    },
                    {
                        id: "42",
                        keys: ["⌘", "+", "⌥", "+", "C"],
                        description: "Copy text style",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "C"] }
                    },
                    {
                        id: "43",
                        keys: ["⌘", "+", "⌥", "+", "V"],
                        description: "Paste text style",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "V"] }
                    },
                    {
                        id: "44",
                        keys: ["⌘", "+", "⇧", "+", "V"],
                        description: "Paste without formatting",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "V"] }
                    },
                    {
                        id: "45",
                        keys: ["⌘", "+", "T"],
                        description: "Show fonts window",
                        platforms: { mac: ["⌘", "+", "T"] }
                    }
                ]
            },
            {
                title: "Accessibility",
                shortcuts: [
                    {
                        id: "46",
                        keys: ["⌘", "+", "F5"],
                        description: "Turn VoiceOver on or off",
                        platforms: { mac: ["⌘", "+", "F5"] }
                    },
                    {
                        id: "47",
                        keys: ["⌘", "+", "⌥", "+", "F5"],
                        description: "Open Accessibility options",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "F5"] }
                    },
                    {
                        id: "48",
                        keys: ["⌘", "+", "⌥", "+", "⌃", "+", "F5"],
                        description: "Enable Full Keyboard Access for all controls",
                        platforms: { mac: ["⌘", "+", "⌥", "+", "⌃", "+", "F5"] }
                    },
                    {
                        id: "49",
                        keys: ["⌘", "+", "⇧", "+", "⌥", "+", "S"],
                        description: "Toggle grayscale display",
                        platforms: { mac: ["⌘", "+", "⇧", "+", "⌥", "+", "S"] }
                    }
                ]
            }
        ]
    },
    "linux": {
        id: "linux",
        name: "Linux",
        shortcutpageName: "Linux Keyboard Shortcuts",
        icon: "/icons/os/linux.png",
        description: "Mastering keyboard shortcuts in Linux can significantly boost your efficiency by enabling quick navigation, multitasking, and system control without relying on a mouse. These shortcuts simplify routine tasks like file management, terminal commands, and window operations, catering to both beginners and power users.",
        metadescription: "Check all Linux Keyboard Shortcuts to make your life easier. These Linux keyboard shortcuts will save you a lot of time.",
        platforms: ["linux"],
        featured: true,
        
        groups: [
            {
                title: "System",
                shortcuts: [
                    {
                        id: "1",
                        keys: ["Ctrl", "+", "Alt", "+", "T"],
                        description: "Open terminal",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "T"] }
                    },
                    {
                        id: "2",
                        keys: ["Alt", "+", "F2"],
                        description: "Run command",
                        platforms: { linux: ["Alt", "+", "F2"] }
                    },
                    {
                        id: "3",
                        keys: ["Ctrl", "+", "Alt", "+", "L"],
                        description: "Lock screen",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "L"] }
                    },
                    {
                        id: "4",
                        keys: ["PrtSc"],
                        description: "Take a screenshot of the entire screen",
                        platforms: { linux: ["PrtSc"] }
                    },
                    {
                        id: "5",
                        keys: ["Shift", "+", "PrtSc"],
                        description: "Take a screenshot of a selected area",
                        platforms: { linux: ["Shift", "+", "PrtSc"] }
                    },
                    {
                        id: "6",
                        keys: ["Ctrl", "+", "Alt", "+", "Delete"],
                        description: "Force logout",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Delete"] }
                    },
                    {
                        id: "7",
                        keys: ["Ctrl", "+", "Alt", "+", "Backspace"],
                        description: "Restart X server",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Backspace"] }
                    }
                ]
            },
            {
                title: "Window Management",
                shortcuts: [
                    {
                        id: "8",
                        keys: ["Alt", "+", "Tab"],
                        description: "Switch between apps",
                        platforms: { linux: ["Alt", "+", "Tab"] }
                    },
                    {
                        id: "9",
                        keys: ["Alt", "+", "Space"],
                        description: "Open window menu",
                        platforms: { linux: ["Alt", "+", "Space"] }
                    },
                    {
                        id: "10",
                        keys: ["Alt", "+", "F4"],
                        description: "Close window",
                        platforms: { linux: ["Alt", "+", "F4"] }
                    },
                    {
                        id: "11",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Up"],
                        description: "Maximize window",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Up"] }
                    },
                    {
                        id: "12",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Down"],
                        description: "Minimize window",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Down"] }
                    },
                    {
                        id: "13",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Left"],
                        description: "Move window to the left half of the screen",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Left"] }
                    },
                    {
                        id: "14",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Right"],
                        description: "Move window to the right half of the screen",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Right"] }
                    },
                    {
                        id: "15",
                        keys: ["Super", "+", "D"],
                        description: "Show desktop",
                        platforms: { linux: ["Super", "+", "D"] }
                    }
                ]
            },
            {
                title: "Terminal Shortcuts",
                shortcuts: [
                    {
                        id: "16",
                        keys: ["Ctrl", "+", "C"],
                        description: "Stop the current command",
                        platforms: { linux: ["Ctrl", "+", "C"] }
                    },
                    {
                        id: "17",
                        keys: ["Ctrl", "+", "Z"],
                        description: "Suspend the current command",
                        platforms: { linux: ["Ctrl", "+", "Z"] }
                    },
                    {
                        id: "18",
                        keys: ["Ctrl", "+", "D"],
                        description: "Logout from the terminal session",
                        platforms: { linux: ["Ctrl", "+", "D"] }
                    },
                    {
                        id: "19",
                        keys: ["Ctrl", "+", "R"],
                        description: "Search command history",
                        platforms: { linux: ["Ctrl", "+", "R"] }
                    },
                    {
                        id: "20",
                        keys: ["Ctrl", "+", "L"],
                        description: "Clear terminal screen",
                        platforms: { linux: ["Ctrl", "+", "L"] }
                    },
                    {
                        id: "21",
                        keys: ["Ctrl", "+", "Shift", "+", "C"],
                        description: "Copy selected text in terminal",
                        platforms: { linux: ["Ctrl", "+", "Shift", "+", "C"] }
                    },
                    {
                        id: "22",
                        keys: ["Ctrl", "+", "Shift", "+", "V"],
                        description: "Paste text in terminal",
                        platforms: { linux: ["Ctrl", "+", "Shift", "+", "V"] }
                    }
                ]
            },
            {
                title: "Workspace Management",
                shortcuts: [
                    {
                        id: "23",
                        keys: ["Super", "+", "Arrow", "Left"],
                        description: "Move to the workspace on the left",
                        platforms: { linux: ["Super", "+", "Arrow", "Left"] }
                    },
                    {
                        id: "24",
                        keys: ["Super", "+", "Arrow", "Right"],
                        description: "Move to the workspace on the right",
                        platforms: { linux: ["Super", "+", "Arrow", "Right"] }
                    },
                    {
                        id: "25",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Left"],
                        description: "Move window to the workspace on the left",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Left"] }
                    },
                    {
                        id: "26",
                        keys: ["Ctrl", "+", "Alt", "+", "Arrow", "Right"],
                        description: "Move window to the workspace on the right",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Arrow", "Right"] }
                    },
                    {
                        id: "27",
                        keys: ["Ctrl", "+", "Alt", "+", "Shift", "+", "Arrow", "Up"],
                        description: "Move window to the workspace above",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Shift", "+", "Arrow", "Up"] }
                    },
                    {
                        id: "28",
                        keys: ["Ctrl", "+", "Alt", "+", "Shift", "+", "Arrow", "Down"],
                        description: "Move window to the workspace below",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Shift", "+", "Arrow", "Down"] }
                    }
                ]
            },
            {
                title: "GNOME-Specific Shortcuts",
                shortcuts: [
                    {
                        id: "29",
                        keys: ["Super", "+", "A"],
                        description: "Open the Applications menu",
                        platforms: { linux: ["Super", "+", "A"] }
                    },
                    {
                        id: "30",
                        keys: ["Super", "+", "S"],
                        description: "Open the Activities overview",
                        platforms: { linux: ["Super", "+", "S"] }
                    },
                    {
                        id: "31",
                        keys: ["Super", "+", "H"],
                        description: "Hide all windows",
                        platforms: { linux: ["Super", "+", "H"] }
                    },
                    {
                        id: "32",
                        keys: ["Ctrl", "+", "Alt", "+", "Del"],
                        description: "Log out from the session",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Del"] }
                    },
                    {
                        id: "33",
                        keys: ["Alt", "+", "F10"],
                        description: "Maximize or restore the current window",
                        platforms: { linux: ["Alt", "+", "F10"] }
                    }
                ]
            },
            {
                title: "Accessibility Shortcuts",
                shortcuts: [
                    {
                        id: "34",
                        keys: ["Alt", "+", "Shift", "+", "PrtSc"],
                        description: "Toggle high contrast mode",
                        platforms: { linux: ["Alt", "+", "Shift", "+", "PrtSc"] }
                    },
                    {
                        id: "35",
                        keys: ["Ctrl", "+", "Alt", "+", "Tab"],
                        description: "Switch to the next accessibility feature",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Tab"] }
                    },
                    {
                        id: "36",
                        keys: ["Ctrl", "+", "Alt", "+", "Esc"],
                        description: "Activate accessibility shortcuts",
                        platforms: { linux: ["Ctrl", "+", "Alt", "+", "Esc"] }
                    },
                    {
                        id: "37",
                        keys: ["Ctrl", "+", "Shift", "+", "Alt", "+", "S"],
                        description: "Toggle screen reader",
                        platforms: { linux: ["Ctrl", "+", "Shift", "+", "Alt", "+", "S"] }
                    }
                ]
            }
        ]
    },
    "chromeos": {
        id: "chromeos",
        name: "ChromeOS",
        shortcutpageName: "ChromeOS Keyboard Shortcuts",
        icon: "/icons/os/chromeos.svg",
        description: "Mastering keyboard shortcuts in ChromeOS can enhance your productivity by enabling swift navigation, multitasking, and system control without relying on touch or a mouse. These shortcuts simplify everyday tasks on Chromebooks, ensuring efficiency for both casual and advanced users.",
        metadescription: "Check all ChromeOS Keyboard Shortcuts to make your life easier. These ChromeOS keyboard shortcuts will save you a lot of time.",
        platforms: ["linux"],
        featured: true,
        "groups": [
            {
                "title": "System Shortcuts",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": ["Ctrl", "+", "Alt", "+", "T"],
                        "description": "Open the terminal (Crosh)",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "T"]
                        }
                    },
                    {
                        "id": "2",
                        "keys": ["Ctrl", "+", "Shift", "+", "Q"],
                        "description": "Sign out of the account",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "Q"]
                        }
                    },
                    {
                        "id": "3",
                        "keys": ["Ctrl", "+", "Shift", "+", "P"],
                        "description": "Open the task manager",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "P"]
                        }
                    },
                    {
                        "id": "4",
                        "keys": ["Ctrl", "+", "Shift", "+", "R"],
                        "description": "Restart ChromeOS",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "R"]
                        }
                    },
                    {
                        "id": "5",
                        "keys": ["Ctrl", "+", "Alt", "+", "E"],
                        "description": "Open the network login screen",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "E"]
                        }
                    },
                    {
                        "id": "6",
                        "keys": ["Ctrl", "+", "Alt", "+", "/"],
                        "description": "View all keyboard shortcuts",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "/"]
                        }
                    },
                    {
                        "id": "7",
                        "keys": ["Search", "+", "L"],
                        "description": "Lock the screen",
                        "platforms": {
                            "linux": ["Search", "+", "L"]
                        }
                    }
                ]
            },
            {
                "title": "Window and Tab Management",
                "shortcuts": [
                    {
                        "id": "8",
                        "keys": ["Ctrl", "+", "N"],
                        "description": "Open a new window",
                        "platforms": {
                            "linux": ["Ctrl", "+", "N"]
                        }
                    },
                    {
                        "id": "9",
                        "keys": ["Ctrl", "+", "T"],
                        "description": "Open a new tab",
                        "platforms": {
                            "linux": ["Ctrl", "+", "T"]
                        }
                    },
                    {
                        "id": "10",
                        "keys": ["Ctrl", "+", "W"],
                        "description": "Close the current tab",
                        "platforms": {
                            "linux": ["Ctrl", "+", "W"]
                        }
                    },
                    {
                        "id": "11",
                        "keys": ["Ctrl", "+", "Shift", "+", "W"],
                        "description": "Close the current window",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "W"]
                        }
                    },
                    {
                        "id": "12",
                        "keys": ["Ctrl", "+", "Shift", "+", "T"],
                        "description": "Reopen the last closed tab",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "T"]
                        }
                    },
                    {
                        "id": "13",
                        "keys": ["Ctrl", "+", "Shift", "+", "N"],
                        "description": "Open a new incognito window",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "N"]
                        }
                    },
                    {
                        "id": "14",
                        "keys": ["Ctrl", "+", "Tab"],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Tab"]
                        }
                    },
                    {
                        "id": "15",
                        "keys": ["Ctrl", "+", "Shift", "+", "Tab"],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "Tab"]
                        }
                    },
                    {
                        "id": "16",
                        "keys": ["Alt", "+", "["],
                        "description": "Dock window to the left",
                        "platforms": {
                            "linux": ["Alt", "+", "["]
                        }
                    },
                    {
                        "id": "17",
                        "keys": ["Alt", "+", "]"],
                        "description": "Dock window to the right",
                        "platforms": {
                            "linux": ["Alt", "+", "]"]
                        }
                    },
                    {
                        "id": "18",
                        "keys": ["Alt", "+", "="],
                        "description": "Maximize the window",
                        "platforms": {
                            "linux": ["Alt", "+", "="]
                        }
                    },
                    {
                        "id": "19",
                        "keys": ["Alt", "+", "-"],
                        "description": "Minimize the window",
                        "platforms": {
                            "linux": ["Alt", "+", "-"]
                        }
                    }
                ]
            },
            {
                "title": "Accessibility",
                "shortcuts": [
                    {
                        "id": "20",
                        "keys": ["Ctrl", "+", "Search", "+", "M"],
                        "description": "Toggle ChromeVox (spoken feedback)",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Search", "+", "M"]
                        }
                    },
                    {
                        "id": "21",
                        "keys": ["Ctrl", "+", "Alt", "+", "Z"],
                        "description": "Enable/disable screen magnifier",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "Z"]
                        }
                    },
                    {
                        "id": "22",
                        "keys": ["Ctrl", "+", "Alt", "+", "S"],
                        "description": "Open accessibility settings",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "S"]
                        }
                    }
                ]
            },
            {
                "title": "Screenshots",
                "shortcuts": [
                    {
                        "id": "23",
                        "keys": ["Ctrl", "+", "Overview Key"],
                        "description": "Take a screenshot",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Overview Key"]
                        }
                    },
                    {
                        "id": "24",
                        "keys": ["Ctrl", "+", "Shift", "+", "Overview Key"],
                        "description": "Capture part of the screen",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Shift", "+", "Overview Key"]
                        }
                    },
                    {
                        "id": "25",
                        "keys": ["Ctrl", "+", "Alt", "+", "Overview Key"],
                        "description": "Record the screen",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Alt", "+", "Overview Key"]
                        }
                    }
                ]
            }
        ]
    },
    "unix": {
        id: "unix",
        name: "Unix - Terminal Based OS",
        shortcutpageName: "Unix - Terminal Based OS Keyboard Shortcuts",
        icon: "/icons/os/unix.png",
        description: "Mastering keyboard shortcuts in Unix systems can significantly improve your workflow by allowing efficient navigation and command execution in terminal-based environments. These shortcuts are essential for system administrators and developers seeking to optimize their productivity.",
        metadescription: "Check all Unix Keyboard Shortcuts to make your life easier. These Unix keyboard shortcuts will save you a lot of time.",
        platforms: ["linux"],
        featured: true,
        
        "groups": [
            {
                "title": "Basic Terminal Shortcuts",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": ["Ctrl", "+", "U"],
                        "description": "Clear the current command line",
                        "platforms": {
                            "linux": ["Ctrl", "+", "U"]
                        }
                    },
                    {
                        "id": "2",
                        "keys": ["Ctrl", "+", "W"],
                        "description": "Delete the previous word in the terminal",
                        "platforms": {
                            "linux": ["Ctrl", "+", "W"]
                        }
                    },
                    {
                        "id": "3",
                        "keys": ["Ctrl", "+", "D"],
                        "description": "Exit the current terminal session",
                        "platforms": {
                            "linux": ["Ctrl", "+", "D"]
                        }
                    },
                    {
                        "id": "4",
                        "keys": ["Ctrl", "+", "C"],
                        "description": "Interrupt/stop the current process",
                        "platforms": {
                            "linux": ["Ctrl", "+", "C"]
                        }
                    },
                    {
                        "id": "5",
                        "keys": ["Ctrl", "+", "Z"],
                        "description": "Suspend the current process",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Z"]
                        }
                    },
                    {
                        "id": "6",
                        "keys": ["Ctrl", "+", "Y"],
                        "description": "Paste the last cut text",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Y"]
                        }
                    },
                    {
                        "id": "7",
                        "keys": ["Ctrl", "+", "K"],
                        "description": "Cut everything from the cursor to the end of the line",
                        "platforms": {
                            "linux": ["Ctrl", "+", "K"]
                        }
                    },
                    {
                        "id": "8",
                        "keys": ["Ctrl", "+", "X"],
                        "description": "Exchange the cursor's current position with the mark",
                        "platforms": {
                            "linux": ["Ctrl", "+", "X"]
                        }
                    },
                    {
                        "id": "9",
                        "keys": ["Ctrl", "+", "H"],
                        "description": "Delete the previous character",
                        "platforms": {
                            "linux": ["Ctrl", "+", "H"]
                        }
                    },
                    {
                        "id": "10",
                        "keys": ["Ctrl", "+", "/"],
                        "description": "Undo the last operation",
                        "platforms": {
                            "linux": ["Ctrl", "+", "/"]
                        }
                    }
                ]
            },
            {
                "title": "Navigation Shortcuts",
                "shortcuts": [
                    {
                        "id": "11",
                        "keys": ["Ctrl", "+", "A"],
                        "description": "Move the cursor to the beginning of the line",
                        "platforms": {
                            "linux": ["Ctrl", "+", "A"]
                        }
                    },
                    {
                        "id": "12",
                        "keys": ["Ctrl", "+", "E"],
                        "description": "Move the cursor to the end of the line",
                        "platforms": {
                            "linux": ["Ctrl", "+", "E"]
                        }
                    },
                    {
                        "id": "13",
                        "keys": ["Alt", "+", "F"],
                        "description": "Move the cursor forward by one word",
                        "platforms": {
                            "linux": ["Alt", "+", "F"]
                        }
                    },
                    {
                        "id": "14",
                        "keys": ["Alt", "+", "B"],
                        "description": "Move the cursor backward by one word",
                        "platforms": {
                            "linux": ["Alt", "+", "B"]
                        }
                    },
                    {
                        "id": "15",
                        "keys": ["Ctrl", "+", "B"],
                        "description": "Move the cursor one character backward",
                        "platforms": {
                            "linux": ["Ctrl", "+", "B"]
                        }
                    },
                    {
                        "id": "16",
                        "keys": ["Ctrl", "+", "F"],
                        "description": "Move the cursor one character forward",
                        "platforms": {
                            "linux": ["Ctrl", "+", "F"]
                        }
                    },
                    {
                        "id": "17",
                        "keys": ["Alt", "+", "D"],
                        "description": "Delete the word after the cursor",
                        "platforms": {
                            "linux": ["Alt", "+", "D"]
                        }
                    },
                    {
                        "id": "18",
                        "keys": ["Alt", "+", "Backspace"],
                        "description": "Delete the word before the cursor",
                        "platforms": {
                            "linux": ["Alt", "+", "Backspace"]
                        }
                    }
                ]
            },
            {
                "title": "Search and History",
                "shortcuts": [
                    {
                        "id": "19",
                        "keys": ["Ctrl", "+", "R"],
                        "description": "Search through command history",
                        "platforms": {
                            "linux": ["Ctrl", "+", "R"]
                        }
                    },
                    {
                        "id": "20",
                        "keys": ["Ctrl", "+", "P"],
                        "description": "Repeat the previous command",
                        "platforms": {
                            "linux": ["Ctrl", "+", "P"]
                        }
                    },
                    {
                        "id": "21",
                        "keys": ["Ctrl", "+", "N"],
                        "description": "Repeat the next command in history",
                        "platforms": {
                            "linux": ["Ctrl", "+", "N"]
                        }
                    },
                    {
                        "id": "22",
                        "keys": ["Ctrl", "+", "L"],
                        "description": "Clear the terminal screen",
                        "platforms": {
                            "linux": ["Ctrl", "+", "L"]
                        }
                    },
                    {
                        "id": "23",
                        "keys": ["Alt", "+", "R"],
                        "description": "Revert all changes made to a line",
                        "platforms": {
                            "linux": ["Alt", "+", "R"]
                        }
                    },
                    {
                        "id": "24",
                        "keys": ["Ctrl", "+", "G"],
                        "description": "Abort the current search",
                        "platforms": {
                            "linux": ["Ctrl", "+", "G"]
                        }
                    }
                ]
            },
            {
                "title": "Miscellaneous Shortcuts",
                "shortcuts": [
                    {
                        "id": "25",
                        "keys": ["Ctrl", "+", "T"],
                        "description": "Transpose two characters",
                        "platforms": {
                            "linux": ["Ctrl", "+", "T"]
                        }
                    },
                    {
                        "id": "26",
                        "keys": ["Alt", "+", "T"],
                        "description": "Transpose two words",
                        "platforms": {
                            "linux": ["Alt", "+", "T"]
                        }
                    },
                    {
                        "id": "27",
                        "keys": ["Ctrl", "+", "V"],
                        "description": "Scroll down one screen",
                        "platforms": {
                            "linux": ["Ctrl", "+", "V"]
                        }
                    },
                    {
                        "id": "28",
                        "keys": ["Ctrl", "+", "Y"],
                        "description": "Paste the previously cut content",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Y"]
                        }
                    },
                    {
                        "id": "29",
                        "keys": ["Ctrl", "+", "Q"],
                        "description": "Resume output to the terminal after stopping it",
                        "platforms": {
                            "linux": ["Ctrl", "+", "Q"]
                        }
                    },
                    {
                        "id": "30",
                        "keys": ["Ctrl", "+", "S"],
                        "description": "Stop all output to the terminal",
                        "platforms": {
                            "linux": ["Ctrl", "+", "S"]
                        }
                    }
                ]
            }
        ]
    }
};