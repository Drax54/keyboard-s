// data/operating-systems.ts
import { Application } from "@/types/shortcut";

export const operatingSystems: { [key: string]: Application } = {
  windows: {
    id: "windows",
    name: "Windows OS",
    icon: "/icons/os/windows.svg",
    description: "Essential Windows keyboard shortcuts",
    groups: [
      {
        title: "Run Commands",
        shortcuts: [
          {
            id: "1",
            keys: ["Win", "+", "R"],
            description: "Open the Run dialog box"
          },
          {
            id: "2",
            keys: ["Win", "+", "Pause/Break"],
            description: "Open System Properties"
          },
          {
            id: "3",
            keys: ["Win", "+", "Ctrl", "+", "Enter"],
            description: "Open Narrator"
          },
          {
            id: "4",
            keys: ["Win", "+", "G"],
            description: "Open Xbox Game Bar"
          },
          {
            id: "5",
            keys: ["Win", "+", "H"],
            description: "Start dictation"
          },
          {
            id: "6",
            keys: ["Win", "+", "U"],
            description: "Open Ease of Access Center"
          },
          {
            id: "7",
            keys: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"],
            description: "Restart graphics driver"
          }
        ]
      },
      {
        title: "File Shortcuts",
        shortcuts: [
          {
            id: "8",
            keys: ["Ctrl", "+", "C"],
            description: "Copy selected item"
          },
          {
            id: "9",
            keys: ["Ctrl", "+", "X"],
            description: "Cut selected item"
          },
          {
            id: "10",
            keys: ["Ctrl", "+", "V"],
            description: "Paste copied/cut item"
          },
          {
            id: "11",
            keys: ["Ctrl", "+", "Z"],
            description: "Undo an action"
          },
          {
            id: "12",
            keys: ["Ctrl", "+", "Y"],
            description: "Redo an action"
          },
          {
            id: "13",
            keys: ["Ctrl", "+", "A"],
            description: "Select all items"
          },
          {
            id: "14",
            keys: ["Shift", "+", "Delete"],
            description: "Permanently delete selected item"
          }
        ]
      },
      {
        title: "Navigation",
        shortcuts: [
          {
            id: "15",
            keys: ["Win", "+", "Arrow Keys"],
            description: "Snap windows (up, down, left, right)"
          },
          {
            id: "16",
            keys: ["Win", "+", "Home"],
            description: "Minimize all but the active window"
          },
          {
            id: "17",
            keys: ["Win", "+", "Shift", "+", "M"],
            description: "Restore all minimized windows"
          },
          {
            id: "18",
            keys: ["Win", "+", "Ctrl", "+", "Arrow Keys"],
            description: "Switch between virtual desktops"
          },
          {
            id: "19",
            keys: ["Ctrl", "+", "Esc"],
            description: "Open the Start Menu"
          },
          {
            id: "20",
            keys: ["Alt", "+", "Space"],
            description: "Open window control menu"
          }
        ]
      },
      {
        title: "Accessibility Shortcuts",
        shortcuts: [
          {
            id: "21",
            keys: ["Win", "+", "+ (Plus)"],
            description: "Zoom in (Magnifier)"
          },
          {
            id: "22",
            keys: ["Win", "+", "- (Minus)"],
            description: "Zoom out (Magnifier)"
          },
          {
            id: "23",
            keys: ["Win", "+", "Esc"],
            description: "Close Magnifier"
          },
          {
            id: "24",
            keys: ["Ctrl", "+", "Alt", "+", "Del"],
            description: "Open Security Options"
          },
          {
            id: "25",
            keys: ["Ctrl", "+", "Shift", "+", "Esc"],
            description: "Open Task Manager"
          }
        ]
      },
      {
        title: "Windows Search Shortcuts",
        shortcuts: [
          {
            id: "26",
            keys: ["Win", "+", "S"],
            description: "Open Search"
          },
          {
            id: "27",
            keys: ["Ctrl", "+", "F"],
            description: "Find in apps or files"
          },
          {
            id: "28",
            keys: ["Ctrl", "+", "H"],
            description: "Search for a file or app"
          },
          {
            id: "29",
            keys: ["Ctrl", "+", "E"],
            description: "Activate the search box in File Explorer"
          }
        ]
      },
      {
        title: "Screenshot Shortcuts",
        shortcuts: [
          {
            id: "30",
            keys: ["Win", "+", "PrtScn"],
            description: "Take a screenshot and save to Pictures folder"
          },
          {
            id: "31",
            keys: ["Alt", "+", "PrtScn"],
            description: "Take a screenshot of the active window"
          },
          {
            id: "32",
            keys: ["Win", "+", "Shift", "+", "S"],
            description: "Open Snip & Sketch to take a screenshot"
          }
        ]
      },
      {
        title: "Browser Shortcuts",
        shortcuts: [
          {
            id: "33",
            keys: ["Ctrl", "+", "T"],
            description: "Open a new tab"
          },
          {
            id: "34",
            keys: ["Ctrl", "+", "Shift", "+", "T"],
            description: "Reopen last closed tab"
          },
          {
            id: "35",
            keys: ["Ctrl", "+", "D"],
            description: "Bookmark current page"
          },
          {
            id: "36",
            keys: ["Ctrl", "+", "Shift", "+", "Del"],
            description: "Clear browsing data"
          },
          {
            id: "37",
            keys: ["Ctrl", "+", "W"],
            description: "Close current tab"
          }
        ]
      },
      {
        title: "Command Prompt Shortcuts",
        shortcuts: [
          {
            id: "38",
            keys: ["Ctrl", "+", "C"],
            description: "Copy selected text"
          },
          {
            id: "39",
            keys: ["Ctrl", "+", "V"],
            description: "Paste text from clipboard"
          },
          {
            id: "40",
            keys: ["Ctrl", "+", "A"],
            description: "Select all content in Command Prompt"
          },
          {
            id: "41",
            keys: ["Ctrl", "+", "M"],
            description: "Enter mark mode to select text"
          },
          {
            id: "42",
            keys: ["Arrow keys"],
            description: "Move cursor in the command line"
          },
          {
            id: "43",
            keys: ["Ctrl", "+", "Arrow keys"],
            description: "Move cursor by word in the command line"
          },
          {
            id: "44",
            keys: ["Ctrl", "+", "Home"],
            description: "Scroll to the top of the buffer"
          },
          {
            id: "45",
            keys: ["Ctrl", "+", "End"],
            description: "Scroll to the bottom of the buffer"
          },
          {
            id: "46",
            keys: ["F1"],
            description: "Paste previous command one character at a time"
          },
          {
            id: "47",
            keys: ["F2", "+", "char"],
            description: "Paste previous command up to a specific character"
          },
          {
            id: "48",
            keys: ["F3"],
            description: "Paste the last executed command"
          },
          {
            id: "49",
            keys: ["F4", "+", "char"],
            description: "Delete characters in the current command up to a specific character"
          },
          {
            id: "50",
            keys: ["F7"],
            description: "Display command history in a selectable list"
          },
          {
            id: "51",
            keys: ["Alt", "+", "Enter"],
            description: "Switch Command Prompt between full screen and windowed mode"
          }
        ]
      },
      {
        title: "PowerShell Shortcuts",
        shortcuts: [
          {
            id: "52",
            keys: ["Ctrl", "+", "C"],
            description: "Terminate current command"
          },
          {
            id: "53",
            keys: ["Ctrl", "+", "R"],
            description: "Search command history"
          },
          {
            id: "54",
            keys: ["Ctrl", "+", "End"],
            description: "Clear the current line"
          },
          {
            id: "55",
            keys: ["Ctrl", "+", "Space"],
            description: "Trigger IntelliSense"
          },
          {
            id: "56",
            keys: ["Shift", "+", "Enter"],
            description: "Execute command in a new tab"
          },
          {
            id: "57",
            keys: ["Ctrl", "+", "T"],
            description: "Open a new PowerShell tab"
          },
          {
            id: "58",
            keys: ["Ctrl", "+", "W"],
            description: "Close the current PowerShell tab"
          }
        ]
      },
      {
        title: "Windows Terminal Shortcuts",
        shortcuts: [
          {
            id: "59",
            keys: ["Ctrl", "+", "Shift", "+", "D"],
            description: "Duplicate current terminal"
          },
          {
            id: "60",
            keys: ["Alt", "+", "Shift", "+", "+"],
            description: "Split terminal vertically"
          },
          {
            id: "61",
            keys: ["Alt", "+", "Shift", "+", "-"],
            description: "Split terminal horizontally"
          },
          {
            id: "62",
            keys: ["Ctrl", "+", "Shift", "+", "P"],
            description: "Open Command Palette"
          },
          {
            id: "63",
            keys: ["Alt", "+", "Arrow Keys"],
            description: "Resize panes"
          },
          {
            id: "64",
            keys: ["Ctrl", "+", "Tab"],
            description: "Switch to next tab"
          },
          {
            id: "65",
            keys: ["Ctrl", "+", "Shift", "+", "Tab"],
            description: "Switch to previous tab"
          },
          {
            id: "66",
            keys: ["Ctrl", "+", "Shift", "+", "W"],
            description: "Close the current tab"
          }
        ]
      },
      {
        title: "Miscellaneous System Shortcuts",
        shortcuts: [
          {
            id: "67",
            keys: ["Ctrl", "+", "Shift", "+", "Esc"],
            description: "Open Task Manager"
          },
          {
            id: "68",
            keys: ["Win", "+", "P"],
            description: "Open Projection options"
          },
          {
            id: "69",
            keys: ["Win", "+", "Ctrl", "+", "Shift", "+", "B"],
            description: "Reset display driver"
          },
          {
            id: "70",
            keys: ["Ctrl", "+", "Alt", "+", "Del"],
            description: "Open Security Options"
          },
          {
            id: "71",
            keys: ["Win", "+", "Alt", "+", "D"],
            description: "Show or hide the date and time on the taskbar"
          },
          {
            id: "72",
            keys: ["Win", "+", "Shift", "+", "S"],
            description: "Take a screenshot using Snip & Sketch"
          }
        ]
      }      
    ]
  },
  macos: {
    id: "macos",
    name: "macOS",
    icon: "/icons/os/macos.svg",
    description: "Essential macOS keyboard shortcuts",
    groups: [
      {
        title: "System",
        shortcuts: [
          {
            id: "1",
            keys: ["⌘ (Command) + Space"],
            description: "Open Spotlight Search"
          },
          {
            id: "2",
            keys: ["⌘ (Command) + ⌥ (Option) + D"],
            description: "Show/hide Dock"
          },
          {
            id: "3",
            keys: ["⌃ (Control) + ⌘ (Command) + Q"],
            description: "Lock screen"
          },
          {
            id: "4",
            keys: ["⌘ (Command) + ⇧ (Shift) + 3"],
            description: "Take a screenshot of the entire screen"
          },
          {
            id: "5",
            keys: ["⌘ (Command) + ⇧ (Shift) + 4"],
            description: "Take a screenshot of a selected area"
          },
          {
            id: "6",
            keys: ["⌘ (Command) + ⇧ (Shift) + 5"],
            description: "Open screenshot options"
          },
          {
            id: "7",
            keys: ["⌘ (Command) + ⌥ (Option) + Esc"],
            description: "Force quit an application"
          },
          {
            id: "8",
            keys: ["⌃ (Control) + ⌘ (Command) + Power"],
            description: "Restart the computer"
          },
          {
            id: "9",
            keys: ["⌃ (Control) + ⌘ (Command) + Eject"],
            description: "Shut down the computer"
          },
          {
            id: "10",
            keys: ["⌘ (Command) + ⇧ (Shift) + Delete"],
            description: "Empty the Trash"
          }
        ]
      },
      {
        title: "Window Management",
        shortcuts: [
          {
            id: "11",
            keys: ["⌘ (Command) + Tab"],
            description: "Switch between apps"
          },
          {
            id: "12",
            keys: ["⌘ (Command) + M"],
            description: "Minimize window"
          },
          {
            id: "13",
            keys: ["⌘ (Command) + H"],
            description: "Hide window"
          },
          {
            id: "14",
            keys: ["⌘ (Command) + ⌥ (Option) + M"],
            description: "Minimize all windows"
          },
          {
            id: "15",
            keys: ["⌘ (Command) + ` (backtick)"],
            description: "Cycle through windows of the current app"
          },
          {
            id: "16",
            keys: ["⌘ (Command) + W"],
            description: "Close the current window"
          },
          {
            id: "17",
            keys: ["⌘ (Command) + ⌥ (Option) + W"],
            description: "Close all windows in the current app"
          },
          {
            id: "18",
            keys: ["⌘ (Command) + F3"],
            description: "Show the desktop"
          },
          {
            id: "19",
            keys: ["⌘ (Command) + ⇧ (Shift) + F3"],
            description: "Show Mission Control"
          }
        ]
      },
      {
        title: "Document Shortcuts",
        shortcuts: [
          {
            id: "20",
            keys: ["⌘ (Command) + C"],
            description: "Copy selected text or item"
          },
          {
            id: "21",
            keys: ["⌘ (Command) + X"],
            description: "Cut selected text or item"
          },
          {
            id: "22",
            keys: ["⌘ (Command) + V"],
            description: "Paste copied item"
          },
          {
            id: "23",
            keys: ["⌘ (Command) + Z"],
            description: "Undo the last action"
          },
          {
            id: "24",
            keys: ["⌘ (Command) + ⇧ (Shift) + Z"],
            description: "Redo the last action"
          },
          {
            id: "25",
            keys: ["⌘ (Command) + A"],
            description: "Select all items"
          },
          {
            id: "26",
            keys: ["⌘ (Command) + F"],
            description: "Find text within a document"
          },
          {
            id: "27",
            keys: ["⌘ (Command) + P"],
            description: "Print the current document"
          },
          {
            id: "28",
            keys: ["⌘ (Command) + S"],
            description: "Save the current document"
          }
        ]
      },
      {
        title: "Finder Shortcuts",
        shortcuts: [
          {
            id: "29",
            keys: ["⌘ (Command) + N"],
            description: "Open a new Finder window"
          },
          {
            id: "30",
            keys: ["⌘ (Command) + T"],
            description: "Open a new Finder tab"
          },
          {
            id: "31",
            keys: ["⌘ (Command) + ⇧ (Shift) + N"],
            description: "Create a new folder"
          },
          {
            id: "32",
            keys: ["⌘ (Command) + Delete"],
            description: "Move selected item to Trash"
          },
          {
            id: "33",
            keys: ["⌘ (Command) + ⇧ (Shift) + Delete"],
            description: "Empty Trash"
          },
          {
            id: "34",
            keys: ["⌘ (Command) + I"],
            description: "Show info for selected item"
          },
          {
            id: "35",
            keys: ["⌘ (Command) + D"],
            description: "Duplicate selected item"
          },
          {
            id: "36",
            keys: ["⌘ (Command) + L"],
            description: "Create an alias for the selected item"
          },
          {
            id: "37",
            keys: ["⌘ (Command) + K"],
            description: "Connect to a server"
          },
          {
            id: "38",
            keys: ["⌘ (Command) + ⇧ (Shift) + G"],
            description: "Go to Folder"
          }
        ]
      },
      {
        title: "Text Editing",
        shortcuts: [
          {
            id: "39",
            keys: ["⌘ (Command) + B"],
            description: "Bold selected text"
          },
          {
            id: "40",
            keys: ["⌘ (Command) + I"],
            description: "Italicize selected text"
          },
          {
            id: "41",
            keys: ["⌘ (Command) + U"],
            description: "Underline selected text"
          },
          {
            id: "42",
            keys: ["⌘ (Command) + ⌥ (Option) + C"],
            description: "Copy text style"
          },
          {
            id: "43",
            keys: ["⌘ (Command) + ⌥ (Option) + V"],
            description: "Paste text style"
          },
          {
            id: "44",
            keys: ["⌘ (Command) + ⇧ (Shift) + V"],
            description: "Paste without formatting"
          },
          {
            id: "45",
            keys: ["⌘ (Command) + T"],
            description: "Show fonts window"
          }
        ]
      },
      {
        title: "Accessibility",
        shortcuts: [
          {
            id: "46",
            keys: ["⌘ (Command) + F5"],
            description: "Turn VoiceOver on or off"
          },
          {
            id: "47",
            keys: ["⌘ (Command) + ⌥ (Option) + F5"],
            description: "Open Accessibility options"
          },
          {
            id: "48",
            keys: ["⌘ (Command) + ⌥ (Option) + ⌃ (Control) + F5"],
            description: "Enable Full Keyboard Access for all controls"
          },
          {
            id: "49",
            keys: ["⌘ (Command) + ⇧ (Shift) + ⌥ (Option) + S"],
            description: "Toggle grayscale display"
          }
        ]
      }
    ]
  },
  linux: {
    id: "linux",
    name: "Linux",
    icon: "/icons/os/linux.png",
    description: "Comprehensive Linux keyboard shortcuts",
    groups: [
      {
        title: "System",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "T"],
            description: "Open terminal"
          },
          {
            id: "2",
            keys: ["Alt (Alt)", "+", "F2"],
            description: "Run command"
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "L"],
            description: "Lock screen"
          },
          {
            id: "4",
            keys: ["PrtSc (Print Screen)"],
            description: "Take a screenshot of the entire screen"
          },
          {
            id: "5",
            keys: ["Shift", "+", "PrtSc (Print Screen)"],
            description: "Take a screenshot of a selected area"
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Delete"],
            description: "Force logout"
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Backspace"],
            description: "Restart X server"
          }
        ]
      },
      {
        title: "Window Management",
        shortcuts: [
          {
            id: "8",
            keys: ["Alt (Alt)", "+", "Tab"],
            description: "Switch between apps"
          },
          {
            id: "9",
            keys: ["Alt (Alt)", "+", "Space"],
            description: "Open window menu"
          },
          {
            id: "10",
            keys: ["Alt (Alt)", "+", "F4"],
            description: "Close window"
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Up)"],
            description: "Maximize window"
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Down)"],
            description: "Minimize window"
          },
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Left)"],
            description: "Move window to the left half of the screen"
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Right)"],
            description: "Move window to the right half of the screen"
          },
          {
            id: "15",
            keys: ["Super (Windows)", "+", "D"],
            description: "Show desktop"
          }
        ]
      },
      {
        title: "Terminal Shortcuts",
        shortcuts: [
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Stop the current command"
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Suspend the current command"
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "D"],
            description: "Logout from the terminal session"
          },
          {
            id: "19",
            keys: ["Ctrl (Control)", "+", "R"],
            description: "Search command history"
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "L"],
            description: "Clear terminal screen"
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "C"],
            description: "Copy selected text in terminal"
          },
          {
            id: "22",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "V"],
            description: "Paste text in terminal"
          }
        ]
      },
      {
        title: "Workspace Management",
        shortcuts: [
          {
            id: "23",
            keys: ["Super (Windows)", "+", "Arrow (Left)"],
            description: "Move to the workspace on the left"
          },
          {
            id: "24",
            keys: ["Super (Windows)", "+", "Arrow (Right)"],
            description: "Move to the workspace on the right"
          },
          {
            id: "25",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Left)"],
            description: "Move window to the workspace on the left"
          },
          {
            id: "26",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Right)"],
            description: "Move window to the workspace on the right"
          },
          {
            id: "27",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Shift", "+", "Arrow (Up)"],
            description: "Move window to the workspace above"
          },
          {
            id: "28",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Shift", "+", "Arrow (Down)"],
            description: "Move window to the workspace below"
          }
        ]
      },
      {
        title: "GNOME-Specific Shortcuts",
        shortcuts: [
          {
            id: "29",
            keys: ["Super (Windows)", "+", "A"],
            description: "Open the Applications menu"
          },
          {
            id: "30",
            keys: ["Super (Windows)", "+", "S"],
            description: "Open the Activities overview"
          },
          {
            id: "31",
            keys: ["Super (Windows)", "+", "H"],
            description: "Hide all windows"
          },
          {
            id: "32",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Del"],
            description: "Log out from the session"
          },
          {
            id: "33",
            keys: ["Alt (Alt)", "+", "F10"],
            description: "Maximize or restore the current window"
          }
        ]
      },
      {
        title: "Accessibility Shortcuts",
        shortcuts: [
          {
            id: "34",
            keys: ["Alt (Alt)", "+", "Shift", "+", "PrtSc (Print Screen)"],
            description: "Toggle high contrast mode"
          },
          {
            id: "35",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Tab"],
            description: "Switch to the next accessibility feature"
          },
          {
            id: "36",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Esc"],
            description: "Activate accessibility shortcuts"
          },
          {
            id: "37",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Alt (Alt)", "+", "S"],
            description: "Toggle screen reader"
          }
        ]
      }
    ]
  },
  chromeos: {
    id: "chromeos",
    name: "ChromeOS",
    icon: "/icons/os/chromeos.svg",
    description: "Essential ChromeOS shortcuts for Chromebooks",
    groups: [
      {
        title: "System Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "T"],
            description: "Open the terminal (Crosh)"
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Q"],
            description: "Sign out of the account"
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "P"],
            description: "Open the task manager"
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "R"],
            description: "Restart ChromeOS"
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "E"],
            description: "Open the network login screen"
          }
        ]
      },
      {
        title: "Window and Tab Management",
        shortcuts: [
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Open a new window"
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "T"],
            description: "Open a new tab"
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "T"],
            description: "Reopen the last closed tab"
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "Tab"],
            description: "Switch to the next tab"
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Tab"],
            description: "Switch to the previous tab"
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "1-8"],
            description: "Jump to a specific tab"
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "9"],
            description: "Jump to the last tab"
          },
          {
            id: "13",
            keys: ["Alt (Alt)", "+", "Tab"],
            description: "Switch between open apps"
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "W"],
            description: "Close the current tab"
          },
          {
            id: "15",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "W"],
            description: "Close all tabs"
          },
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Up)"],
            description: "Snap window to the top"
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Left)"],
            description: "Snap window to the left"
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Arrow (Right)"],
            description: "Snap window to the right"
          }
        ]
      },
      {
        title: "Search and Navigation",
        shortcuts: [
          {
            id: "19",
            keys: ["Search (Magnifying Glass)", "+", "L"],
            description: "Lock the screen"
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "L"],
            description: "Highlight the address bar"
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "K"],
            description: "Perform a web search"
          },
          {
            id: "22",
            keys: ["Ctrl (Control)", "+", "H"],
            description: "Open the history page"
          },
          {
            id: "23",
            keys: ["Ctrl (Control)", "+", "J"],
            description: "Open the downloads page"
          }
        ]
      },
      {
        title: "File Management",
        shortcuts: [
          {
            id: "24",
            keys: ["Ctrl (Control)", "+", "E"],
            description: "Open the File Manager"
          },
          {
            id: "25",
            keys: ["Alt (Alt)", "+", "Enter"],
            description: "Open selected file or folder"
          },
          {
            id: "26",
            keys: ["Ctrl (Control)", "+", "Backspace"],
            description: "Delete the selected item"
          },
          {
            id: "27",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "N"],
            description: "Create a new folder"
          }
        ]
      },
      {
        title: "Accessibility",
        shortcuts: [
          {
            id: "28",
            keys: ["Ctrl (Control)", "+", "Search (Magnifying Glass)", "+", "M"],
            description: "Open accessibility features"
          },
          {
            id: "29",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "Z"],
            description: "Enable/disable screen reader"
          },
          {
            id: "30",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "U"],
            description: "Enable/disable high contrast mode"
          }
        ]
      },
      {
        title: "Display Management",
        shortcuts: [
          {
            id: "31",
            keys: ["Ctrl (Control)", "+", "Search (Magnifying Glass)", "+", "Arrow (Up)"],
            description: "Increase screen brightness"
          },
          {
            id: "32",
            keys: ["Ctrl (Control)", "+", "Search (Magnifying Glass)", "+", "Arrow (Down)"],
            description: "Decrease screen brightness"
          },
          {
            id: "33",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "0"],
            description: "Reset screen zoom"
          },
          {
            id: "34",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "+"],
            description: "Zoom in"
          },
          {
            id: "35",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "-"],
            description: "Zoom out"
          }
        ]
      }
    ]
  },
  unix: {
    id: "unix",
    name: "Unix - Terminal Based OS",
    icon: "/icons/os/unix.png",
    description: "Comprehensive Unix shortcuts for terminal-based systems",
    groups: [
      {
        title: "Basic Terminal Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Clear the current command line"
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "W"],
            description: "Delete the previous word in the terminal"
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "D"],
            description: "Exit the current terminal session"
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Interrupt/stop the current process"
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Suspend the current process"
          }
        ]
      },
      {
        title: "Navigation Shortcuts",
        shortcuts: [
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "A"],
            description: "Move the cursor to the beginning of the line"
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "E"],
            description: "Move the cursor to the end of the line"
          },
          {
            id: "8",
            keys: ["Alt (Alt)", "+", "F"],
            description: "Move the cursor forward by one word"
          },
          {
            id: "9",
            keys: ["Alt (Alt)", "+", "B"],
            description: "Move the cursor backward by one word"
          }
        ]
      },
      {
        title: "Search and History",
        shortcuts: [
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "R"],
            description: "Search through command history"
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "P"],
            description: "Repeat the previous command"
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Repeat the next command in history"
          },
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "L"],
            description: "Clear the terminal screen"
          }
        ]
      }
    ]
  },
};