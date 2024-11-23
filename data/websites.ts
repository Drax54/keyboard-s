// data/websites.ts
import { Application, DeepReadonly } from "@/types/shortcut";

export const websites: DeepReadonly<{ [key: string]: Application }> = {
  gmail: {
    "id": "gmail",
    "name": "Gmail",
    "icon": "/icons/websites/gmail.svg",
    "description": "Email client shortcuts",
    platforms: ["windows", "macos"],
    "groups": [
      {
        "title": "Compose and Chat",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["P"],
            "description": "Previous message in an open conversation",
            "platforms": { "windows": ["P"], "mac": ["P"] }
          },
          {
            "id": "2",
            "keys": ["N"],
            "description": "Next message in an open conversation",
            "platforms": { "windows": ["N"], "mac": ["N"] }
          },
          {
            "id": "3",
            "keys": ["Shift", "+", "Esc"],
            "description": "Focus main window",
            "platforms": { "windows": ["Shift", "+", "Esc"], "mac": ["Shift", "+", "Esc"] }
          },
          {
            "id": "4",
            "keys": ["Esc"],
            "description": "Focus latest chat or compose",
            "platforms": { "windows": ["Esc"], "mac": ["Esc"] }
          },
          {
            "id": "5",
            "keys": ["Ctrl", "+", "."],
            "description": "Advance to the next chat or compose",
            "platforms": { "windows": ["Ctrl", "+", "."], "mac": ["⌘", "+", "."] }
          },
          {
            "id": "6",
            "keys": ["Ctrl", "+", ","],
            "description": "Advance to previous chat or compose",
            "platforms": { "windows": ["Ctrl", "+", ","], "mac": ["⌘", "+", ","] }
          },
          {
            "id": "7",
            "keys": ["Ctrl", "+", "Enter"],
            "description": "Send",
            "platforms": { "windows": ["Ctrl", "+", "Enter"], "mac": ["⌘", "+", "Enter"] }
          },
          {
            "id": "8",
            "keys": ["Ctrl", "+", "Shift", "+", "C"],
            "description": "Add cc recipients",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "C"], "mac": ["⌘", "+", "Shift", "+", "C"] }
          },
          {
            "id": "9",
            "keys": ["Ctrl", "+", "Shift", "+", "B"],
            "description": "Add bcc recipients",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "B"], "mac": ["⌘", "+", "Shift", "+", "B"] }
          },
          {
            "id": "10",
            "keys": ["Ctrl", "+", "Shift", "+", "F"],
            "description": "Access custom from",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "F"], "mac": ["⌘", "+", "Shift", "+", "F"] }
          },
          {
            "id": "11",
            "keys": ["Ctrl", "+", "K"],
            "description": "Insert a link",
            "platforms": { "windows": ["Ctrl", "+", "K"], "mac": ["⌘", "+", "K"] }
          }
        ]
      },
      {
        "title": "Formatting Text",
        "shortcuts": [
          {
            "id": "12",
            "keys": ["Ctrl", "+", "Shift", "+", "5"],
            "description": "Previous font",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "5"], "mac": ["⌘", "+", "Shift", "+", "5"] }
          },
          {
            "id": "13",
            "keys": ["Ctrl", "+", "Shift", "+", "6"],
            "description": "Next font",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "6"], "mac": ["⌘", "+", "Shift", "+", "6"] }
          },
          {
            "id": "14",
            "keys": ["Ctrl", "+", "Shift", "+", "-"],
            "description": "Decrease text size",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "-"], "mac": ["⌘", "+", "Shift", "+", "-"] }
          },
          {
            "id": "15",
            "keys": ["Ctrl", "+", "Shift", "+", "+"],
            "description": "Increase text size",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "+"], "mac": ["⌘", "+", "Shift", "+", "+"] }
          },
          {
            "id": "16",
            "keys": ["Ctrl", "+", "B"],
            "description": "Bold",
            "platforms": { "windows": ["Ctrl", "+", "B"], "mac": ["⌘", "+", "B"] }
          },
          {
            "id": "17",
            "keys": ["Ctrl", "+", "I"],
            "description": "Italics",
            "platforms": { "windows": ["Ctrl", "+", "I"], "mac": ["⌘", "+", "I"] }
          },
          {
            "id": "18",
            "keys": ["Ctrl", "+", "U"],
            "description": "Underline",
            "platforms": { "windows": ["Ctrl", "+", "U"], "mac": ["⌘", "+", "U"] }
          },
          {
            "id": "19",
            "keys": ["Ctrl", "+", "Shift", "+", "7"],
            "description": "Numbered list",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "7"], "mac": ["⌘", "+", "Shift", "+", "7"] }
          },
          {
            "id": "20",
            "keys": ["Ctrl", "+", "Shift", "+", "8"],
            "description": "Bulleted list",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "8"], "mac": ["⌘", "+", "Shift", "+", "8"] }
          },
          {
            "id": "21",
            "keys": ["Ctrl", "+", "Shift", "+", "9"],
            "description": "Quote",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "9"], "mac": ["⌘", "+", "Shift", "+", "9"] }
          },
          {
            "id": "22",
            "keys": ["Ctrl", "+", "["],
            "description": "Indent less",
            "platforms": { "windows": ["Ctrl", "+", "["], "mac": ["⌘", "+", "["] }
          },
          {
            "id": "23",
            "keys": ["Ctrl", "+", "RightBracket"],
            "description": "Indent more",
            "platforms": { "windows": ["Ctrl", "+", "RightBracket"], "mac": ["⌘", "+", "RightBracket"] }
          },
          {
            "id": "24",
            "keys": ["Ctrl", "+", "Shift", "+", "L"],
            "description": "Align left",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "L"], "mac": ["⌘", "+", "Shift", "+", "L"] }
          },
          {
            "id": "25",
            "keys": ["Ctrl", "+", "Shift", "+", "E"],
            "description": "Align centre",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "E"], "mac": ["⌘", "+", "Shift", "+", "E"] }
          },
          {
            "id": "26",
            "keys": ["Ctrl", "+", "Shift", "+", "R"],
            "description": "Align right",
            "platforms": { "windows": ["Ctrl", "+", "Shift", "+", "R"], "mac": ["⌘", "+", "Shift", "+", "R"] }
          },
          {
            "id": "27",
            "keys": ["Ctrl", "+", "\\"],
            "description": "Remove formatting",
            "platforms": { "windows": ["Ctrl", "+", "\\"], "mac": ["⌘", "+", "\\"] }
          }
        ]
      },
      {
        "title": "Actions",
        "shortcuts": [
          {
            "id": "28",
            "keys": ["X"],
            "description": "Select conversation",
            "platforms": { "windows": ["X"], "mac": ["X"] }
          },
          {
            "id": "29",
            "keys": ["S"],
            "description": "Toggle star/rotate among superstars",
            "platforms": { "windows": ["S"], "mac": ["S"] }
          },
          {
            "id": "30",
            "keys": ["E"],
            "description": "Archive",
            "platforms": { "windows": ["E"], "mac": ["E"] }
          },
          {
            "id": "31",
            "keys": ["M"],
            "description": "Mute conversation",
            "platforms": { "windows": ["M"], "mac": ["M"] }
          },
          {
            "id": "32",
            "keys": ["!"],
            "description": "Report as spam",
            "platforms": { "windows": ["!"], "mac": ["!"] }
          },
          {
            "id": "33",
            "keys": ["#"],
            "description": "Delete",
            "platforms": { "windows": ["#"], "mac": ["#"] }
          },
          {
            "id": "34",
            "keys": ["R"],
            "description": "Reply",
            "platforms": { "windows": ["R"], "mac": ["R"] }
          },
          {
            "id": "35",
            "keys": ["Shift", "+", "R"],
            "description": "Reply in a new window",
            "platforms": { "windows": ["Shift", "+", "R"], "mac": ["Shift", "+", "R"] }
          },
          {
            "id": "36",
            "keys": ["A"],
            "description": "Reply to all",
            "platforms": { "windows": ["A"], "mac": ["A"] }
          },
          {
            "id": "37",
            "keys": ["Shift", "+", "A"],
            "description": "Reply to all in a new window",
            "platforms": { "windows": ["Shift", "+", "A"], "mac": ["Shift", "+", "A"] }
          },
          {
            "id": "38",
            "keys": ["F"],
            "description": "Forward",
            "platforms": { "windows": ["F"], "mac": ["F"] }
          }
        ]
      }
    ]
  },
  youtube: {
    id: "youtube",
    name: "YouTube",
    icon: "/icons/websites/youtube.svg",
    description: "Video platform shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "Playback",
        shortcuts: [
          {
            id: "1",
            keys: ["Space"],
            description: "Play/Pause",
            platforms: {
              windows: ["Space"],
              mac: ["Space"]
            }
          },
          {
            id: "2",
            keys: ["J"],
            description: "Rewind 10 seconds",
            platforms: {
              windows: ["J"],
              mac: ["J"]
            }
          },
          {
            id: "3",
            keys: ["L"],
            description: "Forward 10 seconds",
            platforms: {
              windows: ["L"],
              mac: ["L"]
            }
          },
          {
            id: "4",
            keys: ["K"],
            description: "Pause/Resume",
            platforms: {
              windows: ["K"],
              mac: ["K"]
            }
          },
          {
            id: "5",
            keys: ["M"],
            description: "Mute/Unmute",
            platforms: {
              windows: ["M"],
              mac: ["M"]
            }
          },
          {
            id: "6",
            keys: ["Arrow Up"],
            description: "Increase Volume",
            platforms: {
              windows: ["Arrow Up"],
              mac: ["Arrow Up"]
            }
          },
          {
            id: "7",
            keys: ["Arrow Down"],
            description: "Decrease Volume",
            platforms: {
              windows: ["Arrow Down"],
              mac: ["Arrow Down"]
            }
          },
          {
            id: "8",
            keys: ["Arrow Left"],
            description: "Rewind 5 seconds",
            platforms: {
              windows: ["Arrow Left"],
              mac: ["Arrow Left"]
            }
          },
          {
            id: "9",
            keys: ["Arrow Right"],
            description: "Fast Forward 5 seconds",
            platforms: {
              windows: ["Arrow Right"],
              mac: ["Arrow Right"]
            }
          },
          {
            id: "10",
            keys: ["0"],
            description: "Restart Video",
            platforms: {
              windows: ["0"],
              mac: ["0"]
            }
          },
          {
            id: "11",
            keys: ["1", "through", "9"],
            description: "Jump to 10%-90% of video",
            platforms: {
              windows: ["1", "through", "9"],
              mac: ["1", "through", "9"]
            }
          },
          {
            id: "12",
            keys: ["F"],
            description: "Full screen",
            platforms: {
              windows: ["F"],
              mac: ["F"]
            }
          },
          {
            id: "13",
            keys: ["Esc"],
            description: "Exit Full screen",
            platforms: {
              windows: ["Esc"],
              mac: ["Esc"]
            }
          },
          {
            id: "14",
            keys: ["C"],
            description: "Toggle Captions",
            platforms: {
              windows: ["C"],
              mac: ["C"]
            }
          },
          {
            id: "15",
            keys: ["Shift", "+", "N"],
            description: "Next Video in Playlist",
            platforms: {
              windows: ["Shift", "+", "N"],
              mac: ["Shift", "+", "N"]
            }
          },
          {
            id: "16",
            keys: ["Shift", "+", "P"],
            description: "Previous Video in Playlist",
            platforms: {
              windows: ["Shift", "+", "P"],
              mac: ["Shift", "+", "P"]
            }
          },
        ],
      },
      {
        title: "Navigation",
        shortcuts: [
          {
            id: "17",
            keys: ["/"],
            description: "Focus Search Box",
            platforms: {
              windows: ["/"],
              mac: ["/"]
            }
          },
          {
            id: "18",
            keys: ["G", "+", "H"],
            description: "Go to Home",
            platforms: {
              windows: ["G", "+", "H"],
              mac: ["G", "+", "H"]
            }
          },
          {
            id: "19",
            keys: ["G", "+", "L"],
            description: "Go to Library",
            platforms: {
              windows: ["G", "+", "L"],
              mac: ["G", "+", "L"]
            }
          },
          {
            id: "20",
            keys: ["G", "+", "S"],
            description: "Go to Subscriptions",
            platforms: {
              windows: ["G", "+", "S"],
              mac: ["G", "+", "S"]
            }
          }
        ],
      },
      {
        title: "Captions",
        shortcuts: [
          {
            id: "21",
            keys: ["+"],
            description: "Increase Caption Font Size",
            platforms: {
              windows: ["+"],
              mac: ["+"]
            }
          },
          {
            id: "22",
            keys: ["-"],
            description: "Decrease Caption Font Size",
            platforms: {
              windows: ["-"],
              mac: ["-"]
            }
          }
        ]
      },
      {
        title: "Speed Controls",
        shortcuts: [
          {
            id: "23",
            keys: ["Shift", "+", ">"],
            description: "Increase Playback Speed",
            platforms: {
              windows: ["Shift", "+", ">"],
              mac: ["Shift", "+", ">"]
            }
          },
          {
            id: "24",
            keys: ["Shift", "+", "<"],
            description: "Decrease Playback Speed",
            platforms: {
              windows: ["Shift", "+", "<"],
              mac: ["Shift", "+", "<"]
            }
          }
        ]
      }
    ],
  },
  github: {
    id: "github",
    name: "GitHub",
    icon: "/icons/websites/github.svg",
    description: "Code hosting platform shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "General Navigation",
        shortcuts: [
          {
            id: "1",
            keys: ["⌘ (Command)", "+", "1"],
            description: "Show Changes view (second press will focus commit field)",
            platforms: {
              windows: ["Ctrl (Control)", "+", "1"],
              mac: ["⌘ (Command)", "+", "1"]
            }
          },
          {
            id: "2",
            keys: ["⌘ (Command)", "+", "2"],
            description: "Show All Commits view (second press will jump to HEAD)",
            platforms: {
              windows: ["Ctrl (Control)", "+", "2"],
              mac: ["⌘ (Command)", "+", "2"]
            }
          },
          {
            id: "3",
            keys: ["⌘ (Command)", "+", "0"],
            description: "Reveal HEAD",
            platforms: {
              windows: ["Ctrl (Control)", "+", "0"],
              mac: ["⌘ (Command)", "+", "0"]
            }
          },
          {
            id: "4",
            keys: ["⌘ (Command)", "+", "P"],
            description: "Show Quick Launch window",
            platforms: {
              windows: ["Ctrl (Control)", "+", "P"],
              mac: ["⌘ (Command)", "+", "P"]
            }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Tab"],
            description: "Select next tab",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Tab"],
              mac: ["⌃ (Control)", "+", "Tab"]
            }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Tab"],
            description: "Select previous tab",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "Tab"],
              mac: ["⌃ (Control)", "+", "⇧ (Shift)", "+", "Tab"]
            }
          },
          {
            id: "7",
            keys: ["⌘ (Command)", "+", "T"],
            description: "Open new tab",
            platforms: {
              windows: ["Ctrl (Control)", "+", "T"],
              mac: ["⌘ (Command)", "+", "T"]
            }
          },
          {
            id: "8",
            keys: ["⌘ (Command)", "+", "W"],
            description: "Close current tab",
            platforms: {
              windows: ["Ctrl (Control)", "+", "W"],
              mac: ["⌘ (Command)", "+", "W"]
            }
          },
          {
            id: "9",
            keys: ["⌘ (Command)", "+", ","],
            description: "Open Fork preferences",
            platforms: {
              windows: ["Ctrl (Control)", "+", ","],
              mac: ["⌘ (Command)", "+", ","]
            }
          },
        ],
      },
      {
        title: "All Commits View",
        shortcuts: [
          {
            id: "10",
            keys: ["⌘ (Command)", "+", "0"],
            description: "Jump to HEAD",
            platforms: {
              windows: ["Ctrl (Control)", "+", "0"],
              mac: ["⌘ (Command)", "+", "0"]
            }
          },
          {
            id: "11",
            keys: ["⌘ (Command)", "+", "F"],
            description: "Commit search",
            platforms: {
              windows: ["Ctrl (Control)", "+", "F"],
              mac: ["⌘ (Command)", "+", "F"]
            }
          },
          {
            id: "12",
            keys: ["Return"],
            description: "Jump to next search result",
            platforms: {
              windows: ["Enter", "+", "F3"],
              mac: ["Return"]
            }
          },
          {
            id: "13",
            keys: ["Shift", "+", "Return"],
            description: "Jump to previous search result",
            platforms: {
              windows: ["Shift", "+", "Enter", "+", "Shift", "+", "F3"],
              mac: ["⇧ (Shift)", "+", "Return"]
            }
          },
          {
            id: "14",
            keys: ["⌘ (Command)", "+", "C"],
            description: "Copy commit info",
            platforms: {
              windows: ["Ctrl (Control)", "+", "C"],
              mac: ["⌘ (Command)", "+", "C"]
            }
          },
          {
            id: "15",
            keys: ["Delete"],
            description: "Remove branch/stash",
            platforms: {
              windows: ["Delete"],
              mac: ["⌫ (Delete)"]
            }
          },
          {
            id: "16",
            keys: ["⌘ (Command)", "+", "Shift", "+", "A"],
            description: "Filter by active branch",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "A"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "A"]
            }
          },
        ],
      },
      {
        title: "Changes View",
        shortcuts: [
          {
            id: "17",
            keys: ["⌘ (Command)", "+", "Return"],
            description: "Commit",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Enter"],
              mac: ["⌘ (Command)", "+", "Return"]
            }
          },
          {
            id: "18",
            keys: ["⌘ (Command)", "+", "Shift", "+", "Return"],
            description: "Commit and push",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "Enter"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "Return"]
            }
          },
          {
            id: "19",
            keys: ["⌘ (Command)", "+", "1"],
            description: "Focus commit message field",
            platforms: {
              windows: ["Ctrl (Control)", "+", "1"],
              mac: ["⌘ (Command)", "+", "1"]
            }
          },
          {
            id: "20",
            keys: ["Return", "+", "⌘ (Command)", "+", "S"],
            description: "Stage/unstage selected file (or lines)",
            platforms: {
              windows: ["Enter", "+", "Ctrl (Control)", "+", "Shift", "+", "S"],
              mac: ["Return", "+", "⌘ (Command)", "+", "S"]
            }
          },
          {
            id: "21",
            keys: ["⌘ (Command)", "+", "⌥ (Option)", "+", "Shift", "+", "S"],
            description: "Stage/unstage all files",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt", "+", "Shift", "+", "S"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "⇧ (Shift)", "+", "S"]
            }
          },
          {
            id: "22",
            keys: ["⌫ (Delete)", "+", "⌘ (Command)", "+", "Shift", "+", "D"],
            description: "Discard selected file (or lines)",
            platforms: {
              windows: ["Backspace", "+", "Ctrl (Control)", "+", "Shift", "+", "D"],
              mac: ["⌫ (Delete)", "+", "⌘ (Command)", "+", "⇧ (Shift)", "+", "D"]
            }
          },
          {
            id: "23",
            keys: ["⌘ (Command)", "+", "⌥ (Option)", "+", "Shift", "+", "O"],
            description: "Open selected file",
            platforms: {
              windows: ["Ctrl (Control)", "+", "O"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "⇧ (Shift)", "+", "O"]
            }
          },
          {
            id: "24",
            keys: ["⌘ (Command)", "+", "D"],
            description: "Open selected file in external diff tool",
            platforms: {
              windows: ["Ctrl (Control)", "+", "D"],
              mac: ["⌘ (Command)", "+", "D"]
            }
          },
          {
            id: "25",
            keys: ["⌘ (Command)", "+", "C"],
            description: "Copy selected file full path",
            platforms: {
              windows: ["Ctrl (Control)", "+", "C"],
              mac: ["⌘ (Command)", "+", "C"]
            }
          },
        ],
      },
      {
        title: "Repository",
        shortcuts: [
          {
            id: "26",
            keys: ["⌘ (Command)", "+", "R"],
            description: "Refresh",
            platforms: {
              windows: ["F5"],
              mac: ["⌘ (Command)", "+", "R"]
            }
          },
          {
            id: "27",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "N"],
            description: "Init new repository",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "N"],
              mac: ["Ctrl (Control)", "+", "Shift", "+", "N"]
            }
          },
          {
            id: "28",
            keys: ["⌘ (Command)", "+", "O"],
            description: "Open repository",
            platforms: {
              windows: ["Ctrl (Control)", "+", "O"],
              mac: ["⌘ (Command)", "+", "O"]
            }
          },
          {
            id: "29",
            keys: ["⌘ (Command)", "+", "B"],
            description: "Checkout Branch",
            platforms: {
              windows: ["Ctrl (Control)", "+", "B"],
              mac: ["⌘ (Command)", "+", "B"]
            }
          },
          {
            id: "30",
            keys: ["⌘ (Command)", "+", "Shift", "+", "F"],
            description: "Fetch",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "F"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "F"]
            }
          },
          {
            id: "31",
            keys: ["⌘ (Command)", "+", "Shift", "+", "L"],
            description: "Pull",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "L"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "L"]
            }
          },
          {
            id: "32",
            keys: ["⌘ (Command)", "+", "Shift", "+", "P"],
            description: "Push",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "P"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "P"]
            }
          },
          {
            id: "33",
            keys: ["⌘ (Command)", "+", "Shift", "+", "B"],
            description: "New branch",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "B"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "B"]
            }
          },
          {
            id: "34",
            keys: ["⌘ (Command)", "+", "Shift", "+", "T"],
            description: "New tag",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "T"],
              mac: ["⌘ (Command)", "+", "⇧ (Shift)", "+", "T"]
            }
          },
          {
            id: "35",
            keys: ["⌘ (Command)", "+", "⌥ (Option)", "+", "O"],
            description: "Open in File Explorer",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt", "+", "O"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "O"]
            }
          },
          {
            id: "36",
            keys: ["⌘ (Command)", "+", "⌥ (Option)", "+", "T"],
            description: "Open in Terminal",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt", "+", "T"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "T"]
            }
          }
        ],
      },
    ],
  },
  notion: {
    id: "notion",
    name: "Notion",
    icon: "/icons/websites/notion.svg",
    description: "Productivity app shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "Most Popular",
        shortcuts: [
          {
            id: "1",
            keys: ["Cmd", "+", "N"],
            description: "Create a new page (desktop app only)",
            platforms: {
              windows: ["Ctrl", "+", "N"],
              mac: ["Cmd", "+", "N"],
              linux: ["Ctrl", "+", "N"]
            }
          },
          {
            id: "2",
            keys: ["Cmd", "+", "Shift", "+", "N"],
            description: "Open a new Notion window (desktop app only)",
            platforms: {
              windows: ["Ctrl", "+", "Shift", "+", "N"],
              mac: ["Cmd", "+", "Shift", "+", "N"],
              linux: ["Ctrl", "+", "Shift", "+", "N"]
            }
          },
          {
            id: "3",
            keys: ["Option", "+", "Shift", "+", "Click"],
            description: "Open page as a new window (desktop app only)",
            platforms: {
              universal: ["Option", "+", "Shift", "+", "Click"]
            }
          },
          {
            id: "4",
            keys: ["Cmd", "+", "T"],
            description: "Create a new Notion tab (desktop app only)",
            platforms: {
              windows: ["Ctrl", "+", "T"],
              mac: ["Cmd", "+", "T"],
              linux: ["Ctrl", "+", "T"]
            }
          },
          {
            id: "5",
            keys: ["Cmd", "+", "P"],
            description: "Open search or jump to a recently viewed page",
            platforms: {
              windows: ["Ctrl", "+", "P"],
              mac: ["Cmd", "+", "P"],
              linux: ["Ctrl", "+", "P"]
            }
          },
          {
            id: "6",
            keys: ["Cmd", "+", "L"],
            description: "Copy page URL",
            platforms: {
              windows: ["Ctrl", "+", "L"],
              mac: ["Cmd", "+", "L"],
              linux: ["Ctrl", "+", "L"]
            }
          },
          {
            id: "7",
            keys: ["Cmd", "+", "Shift", "+", "L"],
            description: "Toggle between dark mode and light mode",
            platforms: {
              windows: ["Ctrl", "+", "Shift", "+", "L"],
              mac: ["Cmd", "+", "Shift", "+", "L"],
              linux: ["Ctrl", "+", "Shift", "+", "L"]
            }
          }
        ]
      },
      {
        title: "Markdown Formatting",
        shortcuts: [
          {
            id: "8",
            keys: ["**", "text", "**"],
            description: "Bold text",
            platforms: {
              universal: ["**", "text", "**"]
            }
          },
          {
            id: "9",
            keys: ["*", "text", "*"],
            description: "Italicize text",
            platforms: {
              universal: ["*", "text", "*"]
            }
          },
          {
            id: "10",
            keys: ["`", "text", "`"],
            description: "Inline code",
            platforms: {
              universal: ["`", "text", "`"]
            }
          },
          {
            id: "11",
            keys: ["~", "text", "~"],
            description: "Strikethrough text",
            platforms: {
              universal: ["~", "text", "~"]
            }
          }
        ]
      },
      {
        title: "Content Creation & Styling",
        shortcuts: [
          {
            id: "12",
            keys: ["Cmd", "+", "B"],
            description: "Bold selected text",
            platforms: {
              windows: ["Ctrl", "+", "B"],
              mac: ["Cmd", "+", "B"],
              linux: ["Ctrl", "+", "B"]
            }
          },
          {
            id: "13",
            keys: ["Cmd", "+", "I"],
            description: "Italicize selected text",
            platforms: {
              windows: ["Ctrl", "+", "I"],
              mac: ["Cmd", "+", "I"],
              linux: ["Ctrl", "+", "I"]
            }
          },
          {
            id: "14",
            keys: ["Cmd", "+", "K"],
            description: "Add link to selected text",
            platforms: {
              windows: ["Ctrl", "+", "K"],
              mac: ["Cmd", "+", "K"],
              linux: ["Ctrl", "+", "K"]
            }
          },
          {
            id: "15",
            keys: ["Tab"],
            description: "Indent and nest content",
            platforms: {
              universal: ["Tab"]
            }
          },
          {
            id: "16",
            keys: ["Shift", "+", "Tab"],
            description: "Un-nest content",
            platforms: {
              universal: ["Shift", "+", "Tab"]
            }
          },
          {
            id: "17",
            keys: ["Cmd", "+", "Shift", "+", "M"],
            description: "Create a comment",
            platforms: {
              windows: ["Ctrl", "+", "Shift", "+", "M"],
              mac: ["Cmd", "+", "Shift", "+", "M"],
              linux: ["Ctrl", "+", "Shift", "+", "M"]
            }
          }
        ]
      },
      {
        title: "Block Editing & Moving",
        shortcuts: [
          {
            id: "18",
            keys: ["Esc"],
            description: "Select or clear the block you're currently in",
            platforms: {
              universal: ["Esc"]
            }
          },
          {
            id: "19",
            keys: ["Cmd", "+", "D"],
            description: "Duplicate selected blocks",
            platforms: {
              windows: ["Ctrl", "+", "D"],
              mac: ["Cmd", "+", "D"],
              linux: ["Ctrl", "+", "D"]
            }
          },
          {
            id: "20",
            keys: ["Cmd", "+", "/"],
            description: "Edit or change selected block type",
            platforms: {
              windows: ["Ctrl", "+", "/"],
              mac: ["Cmd", "+", "/"],
              linux: ["Ctrl", "+", "/"]
            }
          }
        ]
      },
      {
        title: "@, [[, and + Commands",
        shortcuts: [
          {
            id: "21",
            keys: ["@", "username"],
            description: "Mention a person in your workspace",
            platforms: {
              universal: ["@", "username"]
            }
          },
          {
            id: "22",
            keys: ["@", "page name"],
            description: "Mention a page within the workspace",
            platforms: {
              universal: ["@", "page name"]
            }
          },
          {
            id: "23",
            keys: ["@", "date"],
            description: "Add a reminder for a specific date",
            platforms: {
              universal: ["@", "date"]
            }
          },
          {
            id: "24",
            keys: ["[[", "page name"],
            description: "Link a page within the workspace",
            platforms: {
              universal: ["[[", "page name"]
            }
          },
          {
            id: "25",
            keys: ["+", "sub-page name"],
            description: "Create a sub-page within the current page",
            platforms: {
              universal: ["+", "sub-page name"]
            }
          }
        ]
      },
      {
        title: "Slash Commands",
        shortcuts: [
          {
            id: "26",
            keys: ["/text"],
            description: "Create a new text block",
            platforms: {
              universal: ["/text"]
            }
          },
          {
            id: "27",
            keys: ["/page"],
            description: "Create a new page",
            platforms: {
              universal: ["/page"]
            }
          },
          {
            id: "28",
            keys: ["/todo"],
            description: "Create a to-do list with checkboxes",
            platforms: {
              universal: ["/todo"]
            }
          },
          {
            id: "29",
            keys: ["/h1"],
            description: "Create a large heading (H1)",
            platforms: {
              universal: ["/h1"]
            }
          },
          {
            id: "30",
            keys: ["/emoji"],
            description: "Bring up emoji picker",
            platforms: {
              universal: ["/emoji"]
            }
          }
        ]
      },
      {
        title: "Advanced Media Commands",
        shortcuts: [
          {
            id: "31",
            keys: ["/image"],
            description: "Insert an image (upload, embed, or add from Unsplash)",
            platforms: {
              universal: ["/image"]
            }
          },
          {
            id: "32",
            keys: ["/pdf"],
            description: "Embed a PDF",
            platforms: {
              universal: ["/pdf"]
            }
          },
          {
            id: "33",
            keys: ["/video"],
            description: "Embed a video from YouTube, Vimeo, etc.",
            platforms: {
              universal: ["/video"]
            }
          },
          {
            id: "34",
            keys: ["/file"],
            description: "Upload any file from your computer",
            platforms: {
              universal: ["/file"]
            }
          },
          {
            id: "35",
            keys: ["/math"],
            description: "Add a TeX formula or mathematical equation",
            platforms: {
              universal: ["/math"]
            }
          }
        ]
      }
    ]
  },
  slack: {
    id: "slack",
    name: "Slack",
    icon: "/icons/websites/slack.svg",
    description: "Team chat shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "Slack Basics",
        shortcuts: [
          {
            id: "1",
            keys: ["⌘ (Command) + N"],
            description: "Compose a new message",
            platforms: {
              windows: ["Ctrl (Control) + N"],
              mac: ["⌘ (Command) + N"]
            }
          },
          {
            id: "2",
            keys: ["⌘ (Command) + ,"],
            description: "Open your preferences (desktop only)",
            platforms: {
              windows: ["Ctrl (Control) + ,"],
              mac: ["⌘ (Command) + ,"]
            }
          },
          {
            id: "3",
            keys: ["⌘ (Command) + B"],
            description: "Show or hide the left sidebar (desktop only)",
            platforms: {
              windows: ["Ctrl (Control) + B"],
              mac: ["⌘ (Command) + B"]
            }
          },
          {
            id: "4",
            keys: ["⌘ (Command) + ⇧ (Shift) + H"],
            description: "Start a search",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + H"],
              mac: ["⌘ (Command) + ⇧ (Shift) + H"]
            }
          },
          {
            id: "5",
            keys: ["Esc"],
            description: "Close window",
            platforms: {
              windows: ["Esc"],
              mac: ["Esc"]
            }
          },
          {
            id: "6",
            keys: ["⌘ (Command) + P"],
            description: "Open Help",
            platforms: {
              windows: ["Ctrl (Control) + P"],
              mac: ["⌘ (Command) + P"]
            }
          },
          {
            id: "7",
            keys: ["⌘ (Command) + F"],
            description: "Search in the current conversation",
            platforms: {
              windows: ["Ctrl (Control) + F"],
              mac: ["⌘ (Command) + F"]
            }
          },
          {
            id: "8",
            keys: ["⌘ (Command) + ⇧ (Shift) + F"],
            description: "Start a search",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + F"],
              mac: ["⌘ (Command) + ⇧ (Shift) + F"]
            }
          }
        ]
      },
      {
        title: "Navigate Conversations and Messages",
        shortcuts: [
          {
            id: "9",
            keys: ["⌘ (Command) + K"],
            description: "Jump to a conversation",
            platforms: {
              windows: ["Ctrl (Control) + K"],
              mac: ["⌘ (Command) + K"]
            }
          },
          {
            id: "10",
            keys: ["⌘ (Command) + ⇧ (Shift) + T"],
            description: "Jump to the most recent unread message in a conversation",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + T"],
              mac: ["⌘ (Command) + ⇧ (Shift) + T"]
            }
          },
          {
            id: "11",
            keys: ["⌘ (Command) + ["],
            description: "Go back in history",
            platforms: {
              windows: ["Alt (Option) + ←"],
              mac: ["⌘ (Command) + ["]
            }
          },
          {
            id: "12",
            keys: ["⌘ (Command) + ]"],
            description: "Go forward in history",
            platforms: {
              windows: ["Alt (Option) + →"],
              mac: ["⌘ (Command) + ]"]
            }
          },
          {
            id: "13",
            keys: ["⌘ (Command) + ⇧ (Shift) + A"],
            description: "Open Activity view (desktop only)",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + A"],
              mac: ["⌘ (Command) + ⇧ (Shift) + A"]
            }
          },
          {
            id: "14",
            keys: ["⌘ (Command) + ⇧ (Shift) + M"],
            description: "Open Threads view (desktop only)",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + M"],
              mac: ["⌘ (Command) + ⇧ (Shift) + M"]
            }
          },
          {
            id: "15",
            keys: ["⌘ (Command) + ⇧ (Shift) + L"],
            description: "Browse channels (desktop only)",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + L"],
              mac: ["⌘ (Command) + ⇧ (Shift) + L"]
            }
          }
        ]
      },
      {
        title: "Mark Messages Read or Unread",
        shortcuts: [
          {
            id: "16",
            keys: ["⌘ (Command) + ⇧ (Shift) + E"],
            description: "Mark all messages as read",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + E"],
              mac: ["⌘ (Command) + ⇧ (Shift) + E"]
            }
          },
          {
            id: "17",
            keys: ["⇧ (Shift) + Esc"],
            description: "Mark all messages in current conversation as read",
            platforms: {
              windows: ["⇧ (Shift) + Esc"],
              mac: ["⇧ (Shift) + Esc"]
            }
          },
          {
            id: "18",
            keys: ["⌘ (Command) + ⇧ (Shift) + E"],
            description: "Mark a message as unread",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + E"],
              mac: ["⌘ (Command) + ⇧ (Shift) + E"]
            }
          }
        ]
      },
      {
        title: "Switch Workspaces",
        shortcuts: [
          {
            id: "19",
            keys: ["⌘ (Command) + ⇧ (Shift) + M"],
            description: "Expand or collapse the workspace switcher",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + M"],
              mac: ["⌘ (Command) + ⇧ (Shift) + M"]
            }
          },
          {
            id: "20",
            keys: ["⌘ (Command) + 1"],
            description: "Switch to specific workspace",
            platforms: {
              windows: ["Ctrl (Control) + 1"],
              mac: ["⌘ (Command) + 1"]
            }
          },
          {
            id: "21",
            keys: ["⌘ (Command) + ]"],
            description: "Switch to the next workspace",
            platforms: {
              windows: ["Ctrl (Control) + ]"],
              mac: ["⌘ (Command) + ]"]
            }
          },
          {
            id: "22",
            keys: ["⌘ (Command) + ["],
            description: "Switch to the previous workspace",
            platforms: {
              windows: ["Ctrl (Control) + ["],
              mac: ["⌘ (Command) + ["]
            }
          }
        ]
      },
      {
        title: "Take Actions on Messages",
        shortcuts: [
          {
            id: "23",
            keys: ["⌘ (Command) + ⇧ (Shift) + ↑ (Up)"],
            description: "Edit last message sent",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + ↑ (Up)"],
              mac: ["⌘ (Command) + ⇧ (Shift) + ↑ (Up)"]
            }
          },
          {
            id: "24",
            keys: ["⌘ (Command) + Delete"],
            description: "Delete message sent",
            platforms: {
              windows: ["Ctrl (Control) + Delete"],
              mac: ["⌘ (Command) + Delete"]
            }
          },
          {
            id: "25",
            keys: ["⌘ (Command) + ⇧ (Shift) + T"],
            description: "Open or reply to a thread",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + T"],
              mac: ["⌘ (Command) + ⇧ (Shift) + T"]
            }
          },
          {
            id: "26",
            keys: ["⌘ (Command) + ⇧ (Shift) + P"],
            description: "Pin or unpin a message",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + P"],
              mac: ["⌘ (Command) + ⇧ (Shift) + P"]
            }
          },
          {
            id: "27",
            keys: ["⌘ (Command) + ⇧ (Shift) + S"],
            description: "Save message or remove from Later",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + S"],
              mac: ["⌘ (Command) + ⇧ (Shift) + S"]
            }
          },
          {
            id: "28",
            keys: ["⌘ (Command) + ⇧ (Shift) + R"],
            description: "Create a reminder about a message",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + R"],
              mac: ["⌘ (Command) + ⇧ (Shift) + R"]
            }
          },
          {
            id: "29",
            keys: ["⌘ (Command) + ⇧ (Shift) + C"],
            description: "Add an emoji reaction to a message",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + C"],
              mac: ["⌘ (Command) + ⇧ (Shift) + C"]
            }
          }
        ]
      },
      {
        title: "Formatting Messages",
        shortcuts: [
          {
            id: "30",
            keys: ["⌘ (Command) + B"],
            description: "Bold selected text",
            platforms: {
              windows: ["Ctrl (Control) + B"],
              mac: ["⌘ (Command) + B"]
            }
          },
          {
            id: "31",
            keys: ["⌘ (Command) + I"],
            description: "Italicize selected text",
            platforms: {
              windows: ["Ctrl (Control) + I"],
              mac: ["⌘ (Command) + I"]
            }
          },
          {
            id: "32",
            keys: ["⌘ (Command) + ⇧ (Shift) + X"],
            description: "Strikethrough selected text",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + X"],
              mac: ["⌘ (Command) + ⇧ (Shift) + X"]
            }
          },
          {
            id: "33",
            keys: ["⌘ (Command) + ⇧ (Shift) + C"],
            description: "Code selected text",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + C"],
              mac: ["⌘ (Command) + ⇧ (Shift) + C"]
            }
          },
          {
            id: "34",
            keys: ["⌘ (Command) + ⇧ (Shift) + 8"],
            description: "Format as bulleted list",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + 8"],
              mac: ["⌘ (Command) + ⇧ (Shift) + 8"]
            }
          },
          {
            id: "35",
            keys: ["⌘ (Command) + ⇧ (Shift) + 7"],
            description: "Format as numbered list",
            platforms: {
              windows: ["Ctrl (Control) + ⇧ (Shift) + 7"],
              mac: ["⌘ (Command) + ⇧ (Shift) + 7"]
            }
          }
        ]
      }
    ]
  },
  discord: {
    id: "discord",
    name: "Discord",
    icon: "/icons/websites/discord.svg",
    description: "Chat platform shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "Navigation",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "K"],
            description: "Quick switcher",
            platforms: {
              windows: ["Ctrl (Control)", "+", "K"],
              mac: ["⌘ (Command)", "+", "K"]
            }
          },
          {
            id: "2",
            keys: ["Alt (Option)", "+", "↑"],
            description: "Previous channel",
            platforms: {
              windows: ["Alt (Option)", "+", "↑"],
              mac: ["⌥ (Option)", "+", "↑"]
            }
          },
          {
            id: "3",
            keys: ["Alt (Option)", "+", "↓"],
            description: "Next channel",
            platforms: {
              windows: ["Alt (Option)", "+", "↓"],
              mac: ["⌥ (Option)", "+", "↓"]
            }
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "Alt (Option)", "+", "↑"],
            description: "Previous server",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt (Option)", "+", "↑"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "↑"]
            }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Alt (Option)", "+", "↓"],
            description: "Next server",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt (Option)", "+", "↓"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "↓"]
            }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "N"],
            description: "Create or join a server",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "N"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "N"]
            }
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "U"],
            description: "Upload a file",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "U"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "U"]
            }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "P"],
            description: "Toggle pins popout",
            platforms: {
              windows: ["Ctrl (Control)", "+", "P"],
              mac: ["⌘ (Command)", "+", "P"]
            }
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "D"],
            description: "Toggle deafen",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "D"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "D"]
            }
          }
        ]
      },
      {
        title: "Messaging",
        shortcuts: [
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "E"],
            description: "Toggle emoji picker",
            platforms: {
              windows: ["Ctrl (Control)", "+", "E"],
              mac: ["⌘ (Command)", "+", "E"]
            }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "M"],
            description: "Toggle mute",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "M"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "M"]
            }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "Enter"],
            description: "Answer incoming call",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Enter"],
              mac: ["⌘ (Command)", "+", "Enter"]
            }
          },
          {
            id: "13",
            keys: ["Esc"],
            description: "Decline incoming call or mark channel as read",
            platforms: {
              windows: ["Esc"],
              mac: ["Esc"]
            }
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Toggle channel member list",
            platforms: {
              windows: ["Ctrl (Control)", "+", "U"],
              mac: ["⌘ (Command)", "+", "U"]
            }
          },
          {
            id: "15",
            keys: ["Shift", "+", "Page Up"],
            description: "Jump to oldest unread message",
            platforms: {
              windows: ["Shift", "+", "Page Up"],
              mac: ["Shift", "+", "Page Up"]
            }
          }
        ]
      },
      {
        title: "Channel and Server Management",
        shortcuts: [
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "I"],
            description: "Toggle mentions popout",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "I"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "I"]
            }
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Return to previous text channel",
            platforms: {
              windows: ["Ctrl (Control)", "+", "B"],
              mac: ["⌘ (Command)", "+", "B"]
            }
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "Alt (Option)", "+", "A"],
            description: "Return to active audio channel",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Alt (Option)", "+", "A"],
              mac: ["⌘ (Command)", "+", "⌥ (Option)", "+", "A"]
            }
          }
        ]
      },
      {
        title: "Formatting",
        shortcuts: [
          {
            id: "19",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Bold text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "B"],
              mac: ["⌘ (Command)", "+", "B"]
            }
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "I"],
            description: "Italicize text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "I"],
              mac: ["⌘ (Command)", "+", "I"]
            }
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "S"],
            description: "Strikethrough text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "S"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "S"]
            }
          },
          {
            id: "22",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "C"],
            description: "Code block",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "C"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "C"]
            }
          }
        ]
      }
    ]
  },
  figma: {
    "id": "figma",
    "name": "Figma",
    "icon": "/icons/websites/figma.svg",
    "description": "Design tool shortcuts",
    platforms: ["windows", "macos"],
    "groups": [
      {
        "title": "Essentials",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Ctrl (Control)", "+", "\\"],
            "description": "Show / Hide UI",
            "platforms": { "windows": ["Ctrl (Control)", "+", "\\"], "mac": ["⌘ (Command)", "+", "\\"] }
          },
          {
            "id": "2",
            "keys": ["Ctrl (Control)", "+", "C"],
            "description": "Pick color",
            "platforms": { "windows": ["Ctrl (Control)", "+", "C"], "mac": ["⌃ (Control)", "+", "C"] }
          },
          {
            "id": "3",
            "keys": ["Ctrl (Control)", "+", "/"],
            "description": "Quick actions",
            "platforms": { "windows": ["Ctrl (Control)", "+", "/"], "mac": ["⌘ (Command)", "+", "/"] }
          }
        ]
      },
      {
        "title": "Tools",
        "shortcuts": [
          {
            "id": "4",
            "keys": ["V"],
            "description": "Move tool",
            "platforms": { "windows": ["V"], "mac": ["V"] }
          },
          {
            "id": "5",
            "keys": ["F"],
            "description": "Frame tool",
            "platforms": { "windows": ["F"], "mac": ["F"] }
          },
          {
            "id": "6",
            "keys": ["P"],
            "description": "Pen tool",
            "platforms": { "windows": ["P"], "mac": ["P"] }
          },
          {
            "id": "7",
            "keys": ["Shift", "+", "P"],
            "description": "Pencil tool",
            "platforms": { "windows": ["Shift", "+", "P"], "mac": ["⇧ (Shift)", "+", "P"] }
          },
          {
            "id": "8",
            "keys": ["T"],
            "description": "Text tool",
            "platforms": { "windows": ["T"], "mac": ["T"] }
          },
          {
            "id": "9",
            "keys": ["R"],
            "description": "Rectangle tool",
            "platforms": { "windows": ["R"], "mac": ["R"] }
          },
          {
            "id": "10",
            "keys": ["O"],
            "description": "Ellipse tool",
            "platforms": { "windows": ["O"], "mac": ["O"] }
          },
          {
            "id": "11",
            "keys": ["L"],
            "description": "Line tool",
            "platforms": { "windows": ["L"], "mac": ["L"] }
          },
          {
            "id": "12",
            "keys": ["Shift", "+", "L"],
            "description": "Arrow tool",
            "platforms": { "windows": ["Shift", "+", "L"], "mac": ["⇧ (Shift)", "+", "L"] }
          },
          {
            "id": "13",
            "keys": ["C"],
            "description": "Add comment",
            "platforms": { "windows": ["C"], "mac": ["C"] }
          },
          {
            "id": "14",
            "keys": ["I"],
            "description": "Pick color",
            "platforms": { "windows": ["I"], "mac": ["I"] }
          },
          {
            "id": "15",
            "keys": ["S"],
            "description": "Slice tool",
            "platforms": { "windows": ["S"], "mac": ["S"] }
          },
          {
            "id": "16",
            "keys": ["Ctrl (Control)", "+", "G"],
            "description": "Group selection",
            "platforms": { "windows": ["Ctrl (Control)", "+", "G"], "mac": ["⌘ (Command)", "+", "G"] }
          }
        ]
      },
      {
        "title": "View",
        "shortcuts": [
          {
            "id": "17",
            "keys": ["Ctrl (Control)", "+", "\\"],
            "description": "Show / Hide UI",
            "platforms": { "windows": ["Ctrl (Control)", "+", "\\"], "mac": ["⌘ (Command)", "+", "\\"] }
          },
          {
            "id": "18",
            "keys": ["Alt (Option)", "+", "Ctrl (Control)", "+", "\\"],
            "description": "Multiplayer cursors",
            "platforms": { "windows": ["Alt (Option)", "+", "Ctrl (Control)", "+", "\\"], "mac": ["⌥ (Option)", "+", "⌘ (Command)", "+", "\\"] }
          },
          {
            "id": "19",
            "keys": ["Shift", "+", "R"],
            "description": "Rulers",
            "platforms": { "windows": ["Shift", "+", "R"], "mac": ["⇧ (Shift)", "+", "R"] }
          },
          {
            "id": "20",
            "keys": ["Shift", "+", "O"],
            "description": "Outlines",
            "platforms": { "windows": ["Shift", "+", "O"], "mac": ["⇧ (Shift)", "+", "O"] }
          }
        ]
      },
      {
        "title": "Zoom",
        "shortcuts": [
          {
            "id": "21",
            "keys": ["Space"],
            "description": "Pan",
            "platforms": { "windows": ["Space"], "mac": ["Space"] }
          },
          {
            "id": "22",
            "keys": ["+"],
            "description": "Zoom in",
            "platforms": { "windows": ["+"], "mac": ["+"] }
          },
          {
            "id": "23",
            "keys": ["-"],
            "description": "Zoom out",
            "platforms": { "windows": ["-"], "mac": ["-"] }
          },
          {
            "id": "24",
            "keys": ["Shift", "+", "0"],
            "description": "Zoom to 100%",
            "platforms": { "windows": ["Shift", "+", "0"], "mac": ["⇧ (Shift)", "+", "0"] }
          },
          {
            "id": "25",
            "keys": ["Shift", "+", "1"],
            "description": "Zoom to fit",
            "platforms": { "windows": ["Shift", "+", "1"], "mac": ["⇧ (Shift)", "+", "1"] }
          },
          {
            "id": "26",
            "keys": ["Shift", "+", "2"],
            "description": "Zoom to selection",
            "platforms": { "windows": ["Shift", "+", "2"], "mac": ["⇧ (Shift)", "+", "2"] }
          }
        ]
      },
      {
        "title": "Text",
        "shortcuts": [
          {
            "id": "27",
            "keys": ["Ctrl (Control)", "+", "B"],
            "description": "Bold",
            "platforms": { "windows": ["Ctrl (Control)", "+", "B"], "mac": ["⌘ (Command)", "+", "B"] }
          },
          {
            "id": "28",
            "keys": ["Ctrl (Control)", "+", "I"],
            "description": "Italic",
            "platforms": { "windows": ["Ctrl (Control)", "+", "I"], "mac": ["⌘ (Command)", "+", "I"] }
          },
          {
            "id": "29",
            "keys": ["Ctrl (Control)", "+", "U"],
            "description": "Underline",
            "platforms": { "windows": ["Ctrl (Control)", "+", "U"], "mac": ["⌘ (Command)", "+", "U"] }
          },
          {
            "id": "30",
            "keys": ["Ctrl (Control)", "+", "K"],
            "description": "Create link",
            "platforms": { "windows": ["Ctrl (Control)", "+", "K"], "mac": ["⌘ (Command)", "+", "K"] }
          }
        ]
      },
      {
        "title": "Arrange",
        "shortcuts": [
          {
            "id": "31",
            "keys": ["Ctrl (Control)", "+", "]"],
            "description": "Bring forward",
            "platforms": { "windows": ["Ctrl (Control)", "+", "]"], "mac": ["⌘ (Command)", "+", "]"] }
          },
          {
            "id": "32",
            "keys": ["Ctrl (Control)", "+", "["],
            "description": "Send backward",
            "platforms": { "windows": ["Ctrl (Control)", "+", "["], "mac": ["⌘ (Command)", "+", "["] }
          },
          {
            "id": "33",
            "keys": ["Alt (Option)", "+", "Ctrl (Control)", "+", "]"],
            "description": "Bring to front",
            "platforms": { "windows": ["Alt (Option)", "+", "Ctrl (Control)", "+", "]"], "mac": ["⌥ (Option)", "+", "⌘ (Command)", "+", "]"] }
          },
          {
            "id": "34",
            "keys": ["Alt (Option)", "+", "Ctrl (Control)", "+", "["],
            "description": "Send to back",
            "platforms": { "windows": ["Alt (Option)", "+", "Ctrl (Control)", "+", "["], "mac": ["⌥ (Option)", "+", "⌘ (Command)", "+", "["] }
          }
        ]
      }
    ]
  },
  netflix: {
    id: "netflix",
    name: "Netflix",
    icon: "/icons/websites/netflix.svg",
    description: "Streaming platform shortcuts",
    platforms: ["windows", "macos"],
    groups: [
      {
        title: "Playback",
        shortcuts: [
          {
            id: "1",
            keys: ["Space"],
            description: "Play/Pause",
            platforms: {
              windows: ["Space"],
              mac: ["Space"]
            }
          },
          {
            id: "2",
            keys: ["Enter"],
            description: "Play/Pause (alternative)",
            platforms: {
              windows: ["Enter"],
              mac: ["Enter"]
            }
          },
          {
            id: "3",
            keys: ["F"],
            description: "Full screen",
            platforms: {
              windows: ["F"],
              mac: ["F"]
            }
          },
          {
            id: "4",
            keys: ["Esc"],
            description: "Exit full screen",
            platforms: {
              windows: ["Esc"],
              mac: ["Esc"]
            }
          },
          {
            id: "5",
            keys: ["Left Arrow"],
            description: "Rewind 10 seconds",
            platforms: {
              windows: ["Left Arrow"],
              mac: ["Left Arrow"]
            }
          },
          {
            id: "6",
            keys: ["Right Arrow"],
            description: "Fast forward 10 seconds",
            platforms: {
              windows: ["Right Arrow"],
              mac: ["Right Arrow"]
            }
          },
          {
            id: "7",
            keys: ["Up Arrow"],
            description: "Increase volume",
            platforms: {
              windows: ["Up Arrow"],
              mac: ["Up Arrow"]
            }
          },
          {
            id: "8",
            keys: ["Down Arrow"],
            description: "Decrease volume",
            platforms: {
              windows: ["Down Arrow"],
              mac: ["Down Arrow"]
            }
          },
          {
            id: "9",
            keys: ["M"],
            description: "Mute",
            platforms: {
              windows: ["M"],
              mac: ["M"]
            }
          },
          {
            id: "10",
            keys: ["S"],
            description: "Skip intro",
            platforms: {
              windows: ["S"],
              mac: ["S"]
            }
          },
          {
            id: "11",
            keys: ["J"],
            description: "Rewind 10 seconds (alternative)",
            platforms: {
              windows: ["J"],
              mac: ["J"]
            }
          },
          {
            id: "12",
            keys: ["L"],
            description: "Fast forward 10 seconds (alternative)",
            platforms: {
              windows: ["L"],
              mac: ["L"]
            }
          },
          {
            id: "13",
            keys: ["<"],
            description: "Slow down playback",
            platforms: {
              windows: ["<"],
              mac: ["<"]
            }
          },
          {
            id: "14",
            keys: [">"],
            description: "Speed up playback",
            platforms: {
              windows: [">"],
              mac: [">"]
            }
          },
          {
            id: "15",
            keys: ["C"],
            description: "Toggle subtitles",
            platforms: {
              windows: ["C"],
              mac: ["C"]
            }
          },
          {
            id: "16",
            keys: ["V"],
            description: "Change subtitle track",
            platforms: {
              windows: ["V"],
              mac: ["V"]
            }
          },
          {
            id: "17",
            keys: ["A"],
            description: "Change audio track",
            platforms: {
              windows: ["A"],
              mac: ["A"]
            }
          },
          {
            id: "18",
            keys: ["P"],
            description: "Toggle picture-in-picture",
            platforms: {
              windows: ["P"],
              mac: ["P"]
            }
          },
          {
            id: "19",
            keys: ["D"],
            description: "Toggle diagnostics panel",
            platforms: {
              windows: ["D"],
              mac: ["D"]
            }
          },
          {
            id: "20",
            keys: ["0-9"],
            description: "Jump to percentage (0% to 90%)",
            platforms: {
              windows: ["0-9"],
              mac: ["0-9"]
            }
          }
        ]
      }
    ]
  },
  "google-docs": {
    "id": "google-docs",
    "name": "Google Docs",
    "icon": "/icons/websites/docs.svg",
    "description": "Shortcuts for Google Docs - Updated for MacOS and Windows OS",
    "platforms": [
      "windows",
      "macos"
    ],
    "featured": true,
    "groups": [
      {
        "title": "Text Formatting",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control) + B"
            ],
            "description": "Bold",
            "platforms": {
              "windows": [
                "Ctrl (Control) + B"
              ],
              "mac": [
                "⌘ (Command) + B"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control) + I"
            ],
            "description": "Italic",
            "platforms": {
              "windows": [
                "Ctrl (Control) + I"
              ],
              "mac": [
                "⌘ (Command) + I"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control) + U"
            ],
            "description": "Underline",
            "platforms": {
              "windows": [
                "Ctrl (Control) + U"
              ],
              "mac": [
                "⌘ (Command) + U"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control) + Shift + S"
            ],
            "description": "Strikethrough",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + S"
              ],
              "mac": [
                "⌘ (Command) + Shift + S"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control) + Shift + 8"
            ],
            "description": "Bulleted List",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + 8"
              ],
              "mac": [
                "⌘ (Command) + Shift + 8"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control) + Shift + 7"
            ],
            "description": "Numbered List",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + 7"
              ],
              "mac": [
                "⌘ (Command) + Shift + 7"
              ]
            }
          }
        ]
      },
      {
        "title": "Document Navigation",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "Ctrl (Control) + Alt + M"
            ],
            "description": "Insert Comment",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + M"
              ],
              "mac": [
                "⌘ (Command) + ⌥ (Option) + M"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl (Control) + Down"
            ],
            "description": "Go to Next Paragraph",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Down"
              ],
              "mac": [
                "⌘ (Command) + Down"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control) + Up"
            ],
            "description": "Go to Previous Paragraph",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Up"
              ],
              "mac": [
                "⌘ (Command) + Up"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control) + K"
            ],
            "description": "Insert Link",
            "platforms": {
              "windows": [
                "Ctrl (Control) + K"
              ],
              "mac": [
                "⌘ (Command) + K"
              ]
            }
          }
        ]
      },
      {
        "title": "File Management",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "Ctrl (Control) + S"
            ],
            "description": "Save Document",
            "platforms": {
              "windows": [
                "Ctrl (Control) + S"
              ],
              "mac": [
                "⌘ (Command) + S"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "Ctrl (Control) + P"
            ],
            "description": "Print Document",
            "platforms": {
              "windows": [
                "Ctrl (Control) + P"
              ],
              "mac": [
                "⌘ (Command) + P"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "Ctrl (Control) + O"
            ],
            "description": "Open File",
            "platforms": {
              "windows": [
                "Ctrl (Control) + O"
              ],
              "mac": [
                "⌘ (Command) + O"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "Ctrl (Control) + Shift + P"
            ],
            "description": "Open Preview",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + P"
              ],
              "mac": [
                "⌘ (Command) + Shift + P"
              ]
            }
          }
        ]
      }
    ]
  }
} as const;

export type Website = Application;
// module.exports = { websites };
