// data/websites.ts
// import { Application, DeepReadonly } from "@/types/shortcut";


import { CategoryItems } from "@/data/types";


export const websites: CategoryItems = {
  "gmail": {
    id: "gmail",
    name: "Gmail",
    shortcutpageName: "Gmail Keyboard Shortcuts",
    icon: "/icons/websites/gmail.svg",
    description: "Mastering keyboard shortcuts in Gmail can improve your email management by enabling faster navigation, composing, and organization on both Windows and macOS.",
    metadescription: "Check all Gmail Keyboard Shortcuts to manage your emails efficiently. These Gmail shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Compose and Chat",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["P"],
            "description": "Previous message in an open conversation",
            "platforms": {
              "windows": ["P"],
              "mac": ["P"]
            }
          },
          {
            "id": "2",
            "keys": ["N"],
            "description": "Next message in an open conversation",
            "platforms": {
              "windows": ["N"],
              "mac": ["N"]
            }
          },
          {
            "id": "3",
            "keys": ["Shift + Esc"],
            "description": "Focus main window",
            "platforms": {
              "windows": ["Shift + Esc"],
              "mac": ["Shift + Esc"]
            }
          },
          {
            "id": "4",
            "keys": ["Esc"],
            "description": "Focus latest chat or compose",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "5",
            "keys": ["Ctrl + ."],
            "description": "Advance to the next chat or compose",
            "platforms": {
              "windows": ["Ctrl + ."],
              "mac": ["⌘ + ."]
            }
          },
          {
            "id": "6",
            "keys": ["Ctrl + ,"],
            "description": "Advance to previous chat or compose",
            "platforms": {
              "windows": ["Ctrl + ,"],
              "mac": ["⌘ + ,"]
            }
          },
          {
            "id": "7",
            "keys": ["Ctrl + Enter"],
            "description": "Send",
            "platforms": {
              "windows": ["Ctrl + Enter"],
              "mac": ["⌘ + Enter"]
            }
          },
          {
            "id": "8",
            "keys": ["Ctrl + Shift + C"],
            "description": "Add cc recipients",
            "platforms": {
              "windows": ["Ctrl + Shift + C"],
              "mac": ["⌘ + Shift + C"]
            }
          },
          {
            "id": "9",
            "keys": ["Ctrl + Shift + B"],
            "description": "Add bcc recipients",
            "platforms": {
              "windows": ["Ctrl + Shift + B"],
              "mac": ["⌘ + Shift + B"]
            }
          },
          {
            "id": "10",
            "keys": ["Ctrl + Shift + F"],
            "description": "Access custom from",
            "platforms": {
              "windows": ["Ctrl + Shift + F"],
              "mac": ["⌘ + Shift + F"]
            }
          },
          {
            "id": "11",
            "keys": ["Ctrl + K"],
            "description": "Insert a link",
            "platforms": {
              "windows": ["Ctrl + K"],
              "mac": ["⌘ + K"]
            }
          }
        ]
      },
      {
        "title": "Formatting Text",
        "shortcuts": [
          {
            "id": "12",
            "keys": ["Ctrl + Shift + 5"],
            "description": "Previous font",
            "platforms": {
              "windows": ["Ctrl + Shift + 5"],
              "mac": ["⌘ + Shift + 5"]
            }
          },
          {
            "id": "13",
            "keys": ["Ctrl + Shift + 6"],
            "description": "Next font",
            "platforms": {
              "windows": ["Ctrl + Shift + 6"],
              "mac": ["⌘ + Shift + 6"]
            }
          },
          {
            "id": "14",
            "keys": ["Ctrl + Shift + -"],
            "description": "Decrease text size",
            "platforms": {
              "windows": ["Ctrl + Shift + -"],
              "mac": ["⌘ + Shift + -"]
            }
          },
          {
            "id": "15",
            "keys": ["Ctrl + Shift + +"],
            "description": "Increase text size",
            "platforms": {
              "windows": ["Ctrl + Shift + +"],
              "mac": ["⌘ + Shift + +"]
            }
          },
          {
            "id": "16",
            "keys": ["Ctrl + B"],
            "description": "Bold",
            "platforms": {
              "windows": ["Ctrl + B"],
              "mac": ["⌘ + B"]
            }
          },
          {
            "id": "17",
            "keys": ["Ctrl + I"],
            "description": "Italics",
            "platforms": {
              "windows": ["Ctrl + I"],
              "mac": ["⌘ + I"]
            }
          },
          {
            "id": "18",
            "keys": ["Ctrl + U"],
            "description": "Underline",
            "platforms": {
              "windows": ["Ctrl + U"],
              "mac": ["⌘ + U"]
            }
          },
          {
            "id": "19",
            "keys": ["Ctrl + Shift + 7"],
            "description": "Numbered list",
            "platforms": {
              "windows": ["Ctrl + Shift + 7"],
              "mac": ["⌘ + Shift + 7"]
            }
          },
          {
            "id": "20",
            "keys": ["Ctrl + Shift + 8"],
            "description": "Bulleted list",
            "platforms": {
              "windows": ["Ctrl + Shift + 8"],
              "mac": ["⌘ + Shift + 8"]
            }
          },
          {
            "id": "21",
            "keys": ["Ctrl + Shift + 9"],
            "description": "Quote",
            "platforms": {
              "windows": ["Ctrl + Shift + 9"],
              "mac": ["⌘ + Shift + 9"]
            }
          },
          {
            "id": "22",
            "keys": ["Ctrl + ["],
            "description": "Indent less",
            "platforms": {
              "windows": ["Ctrl + ["],
              "mac": ["⌘ + ["]
            }
          },
          {
            "id": "23",
            "keys": ["Ctrl + ]"],
            "description": "Indent more",
            "platforms": {
              "windows": ["Ctrl + ]"],
              "mac": ["⌘ + ]"]
            }
          },
          {
            "id": "24",
            "keys": ["Ctrl + Shift + L"],
            "description": "Align left",
            "platforms": {
              "windows": ["Ctrl + Shift + L"],
              "mac": ["⌘ + Shift + L"]
            }
          },
          {
            "id": "25",
            "keys": ["Ctrl + Shift + E"],
            "description": "Align center",
            "platforms": {
              "windows": ["Ctrl + Shift + E"],
              "mac": ["⌘ + Shift + E"]
            }
          },
          {
            "id": "26",
            "keys": ["Ctrl + Shift + R"],
            "description": "Align right",
            "platforms": {
              "windows": ["Ctrl + Shift + R"],
              "mac": ["⌘ + Shift + R"]
            }
          },
          {
            "id": "27",
            "keys": ["Ctrl + \\"],
            "description": "Remove formatting",
            "platforms": {
              "windows": ["Ctrl + \\"],
              "mac": ["⌘ + \\"]
            }
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
            "platforms": {
              "windows": ["X"],
              "mac": ["X"]
            }
          },
          {
            "id": "29",
            "keys": ["S"],
            "description": "Toggle star/rotate among superstars",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "30",
            "keys": ["E"],
            "description": "Archive",
            "platforms": {
              "windows": ["E"],
              "mac": ["E"]
            }
          },
          {
            "id": "31",
            "keys": ["M"],
            "description": "Mute conversation",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "32",
            "keys": ["!"],
            "description": "Report as spam",
            "platforms": {
              "windows": ["!"],
              "mac": ["!"]
            }
          },
          {
            "id": "33",
            "keys": ["#"],
            "description": "Delete",
            "platforms": {
              "windows": ["#"],
              "mac": ["#"]
            }
          },
          {
            "id": "34",
            "keys": ["R"],
            "description": "Reply",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "35",
            "keys": ["Shift + R"],
            "description": "Reply in a new window",
            "platforms": {
              "windows": ["Shift + R"],
              "mac": ["Shift + R"]
            }
          },
          {
            "id": "36",
            "keys": ["A"],
            "description": "Reply to all",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "37",
            "keys": ["Shift + A"],
            "description": "Reply to all in a new window",
            "platforms": {
              "windows": ["Shift + A"],
              "mac": ["Shift + A"]
            }
          },
          {
            "id": "38",
            "keys": ["F"],
            "description": "Forward",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          }
        ]
      }
    ]
  },
  "youtube": {
    id: "youtube",
    name: "YouTube",
    shortcutpageName: "YouTube Keyboard Shortcuts",
    icon: "/icons/websites/youtube.svg",
    description: "Mastering keyboard shortcuts in YouTube can enhance your video-watching experience by enabling quick navigation, playback control, and more on both Windows and macOS.",
    metadescription: "Check all YouTube Keyboard Shortcuts to enjoy videos effortlessly. These YouTube shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Playback",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Space"],
            "description": "Play/Pause",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "2",
            "keys": ["J"],
            "description": "Rewind 10 seconds",
            "platforms": {
              "windows": ["J"],
              "mac": ["J"]
            }
          },
          {
            "id": "3",
            "keys": ["L"],
            "description": "Forward 10 seconds",
            "platforms": {
              "windows": ["L"],
              "mac": ["L"]
            }
          },
          {
            "id": "4",
            "keys": ["K"],
            "description": "Pause/Resume",
            "platforms": {
              "windows": ["K"],
              "mac": ["K"]
            }
          },
          {
            "id": "5",
            "keys": ["M"],
            "description": "Mute/Unmute",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "6",
            "keys": ["Arrow Up"],
            "description": "Increase Volume",
            "platforms": {
              "windows": ["Arrow Up"],
              "mac": ["Arrow Up"]
            }
          },
          {
            "id": "7",
            "keys": ["Arrow Down"],
            "description": "Decrease Volume",
            "platforms": {
              "windows": ["Arrow Down"],
              "mac": ["Arrow Down"]
            }
          },
          {
            "id": "8",
            "keys": ["Arrow Left"],
            "description": "Rewind 5 seconds",
            "platforms": {
              "windows": ["Arrow Left"],
              "mac": ["Arrow Left"]
            }
          },
          {
            "id": "9",
            "keys": ["Arrow Right"],
            "description": "Fast Forward 5 seconds",
            "platforms": {
              "windows": ["Arrow Right"],
              "mac": ["Arrow Right"]
            }
          },
          {
            "id": "10",
            "keys": ["0"],
            "description": "Restart Video",
            "platforms": {
              "windows": ["0"],
              "mac": ["0"]
            }
          },
          {
            "id": "11",
            "keys": ["1 through 9"],
            "description": "Jump to 10%-90% of video",
            "platforms": {
              "windows": ["1 through 9"],
              "mac": ["1 through 9"]
            }
          },
          {
            "id": "12",
            "keys": ["F"],
            "description": "Full screen",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "13",
            "keys": ["Esc"],
            "description": "Exit Full screen",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "14",
            "keys": ["C"],
            "description": "Toggle Captions",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          },
          {
            "id": "15",
            "keys": ["Shift + N"],
            "description": "Next Video in Playlist",
            "platforms": {
              "windows": ["Shift + N"],
              "mac": ["Shift + N"]
            }
          },
          {
            "id": "16",
            "keys": ["Shift + P"],
            "description": "Previous Video in Playlist",
            "platforms": {
              "windows": ["Shift + P"],
              "mac": ["Shift + P"]
            }
          },
          {
            "id": "17",
            "keys": ["T"],
            "description": "Toggle theater mode",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          }
        ]
      },
      {
        "title": "Navigation",
        "shortcuts": [
          {
            "id": "18",
            "keys": ["/"],
            "description": "Focus Search Box",
            "platforms": {
              "windows": ["/"],
              "mac": ["/"]
            }
          },
          {
            "id": "19",
            "keys": ["G + H"],
            "description": "Go to Home",
            "platforms": {
              "windows": ["G + H"],
              "mac": ["G + H"]
            }
          },
          {
            "id": "20",
            "keys": ["G + L"],
            "description": "Go to Library",
            "platforms": {
              "windows": ["G + L"],
              "mac": ["G + L"]
            }
          },
          {
            "id": "21",
            "keys": ["G + S"],
            "description": "Go to Subscriptions",
            "platforms": {
              "windows": ["G + S"],
              "mac": ["G + S"]
            }
          },
          {
            "id": "22",
            "keys": ["G + W"],
            "description": "Go to Watch History",
            "platforms": {
              "windows": ["G + W"],
              "mac": ["G + W"]
            }
          }
        ]
      },
      {
        "title": "Captions",
        "shortcuts": [
          {
            "id": "23",
            "keys": ["+"],
            "description": "Increase Caption Font Size",
            "platforms": {
              "windows": ["+"],
              "mac": ["+"]
            }
          },
          {
            "id": "24",
            "keys": ["-"],
            "description": "Decrease Caption Font Size",
            "platforms": {
              "windows": ["-"],
              "mac": ["-"]
            }
          }
        ]
      },
      {
        "title": "Speed Controls",
        "shortcuts": [
          {
            "id": "25",
            "keys": ["Shift + >"],
            "description": "Increase Playback Speed",
            "platforms": {
              "windows": ["Shift + >"],
              "mac": ["Shift + >"]
            }
          },
          {
            "id": "26",
            "keys": ["Shift + <"],
            "description": "Decrease Playback Speed",
            "platforms": {
              "windows": ["Shift + <"],
              "mac": ["Shift + <"]
            }
          },
          {
            "id": "27",
            "keys": ["Shift + /"],
            "description": "Display keyboard shortcuts",
            "platforms": {
              "windows": ["Shift + /"],
              "mac": ["Shift + /"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "28",
            "keys": ["I"],
            "description": "Toggle miniplayer",
            "platforms": {
              "windows": ["I"],
              "mac": ["I"]
            }
          },
          {
            "id": "29",
            "keys": ["B"],
            "description": "Open browse channels",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          }
        ]
      }
    ]
  }
  ,
  "github": {
    id: "github",
    name: "GitHub",
    shortcutpageName: "GitHub Keyboard Shortcuts",
    icon: "/icons/websites/github.svg",
    description: "Mastering keyboard shortcuts in GitHub can optimize your workflow by enabling faster navigation, code review, and repository management on both Windows and macOS.",
    metadescription: "Check all GitHub Keyboard Shortcuts to manage your repositories efficiently. These GitHub shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "General Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["⌘ (Command) + 1"],
            "description": "Show Changes view (second press will focus commit field)",
            "platforms": {
              "windows": ["Ctrl (Control) + 1"],
              "mac": ["⌘ (Command) + 1"]
            }
          },
          {
            "id": "2",
            "keys": ["⌘ (Command) + 2"],
            "description": "Show All Commits view (second press will jump to HEAD)",
            "platforms": {
              "windows": ["Ctrl (Control) + 2"],
              "mac": ["⌘ (Command) + 2"]
            }
          },
          {
            "id": "3",
            "keys": ["⌘ (Command) + 0"],
            "description": "Reveal HEAD",
            "platforms": {
              "windows": ["Ctrl (Control) + 0"],
              "mac": ["⌘ (Command) + 0"]
            }
          },
          {
            "id": "4",
            "keys": ["⌘ (Command) + P"],
            "description": "Show Quick Launch window",
            "platforms": {
              "windows": ["Ctrl (Control) + P"],
              "mac": ["⌘ (Command) + P"]
            }
          },
          {
            "id": "5",
            "keys": ["Ctrl (Control) + Tab"],
            "description": "Select next tab",
            "platforms": {
              "windows": ["Ctrl (Control) + Tab"],
              "mac": ["⌃ (Control) + Tab"]
            }
          },
          {
            "id": "6",
            "keys": ["Ctrl (Control) + Shift + Tab"],
            "description": "Select previous tab",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + Tab"],
              "mac": ["⌃ (Control) + ⇧ (Shift) + Tab"]
            }
          },
          {
            "id": "7",
            "keys": ["⌘ (Command) + T"],
            "description": "Open new tab",
            "platforms": {
              "windows": ["Ctrl (Control) + T"],
              "mac": ["⌘ (Command) + T"]
            }
          },
          {
            "id": "8",
            "keys": ["⌘ (Command) + W"],
            "description": "Close current tab",
            "platforms": {
              "windows": ["Ctrl (Control) + W"],
              "mac": ["⌘ (Command) + W"]
            }
          },
          {
            "id": "9",
            "keys": ["⌘ (Command) + ,"],
            "description": "Open preferences",
            "platforms": {
              "windows": ["Ctrl (Control) + ,"],
              "mac": ["⌘ (Command) + ,"]
            }
          }
        ]
      },
      {
        "title": "All Commits View",
        "shortcuts": [
          {
            "id": "10",
            "keys": ["⌘ (Command) + 0"],
            "description": "Jump to HEAD",
            "platforms": {
              "windows": ["Ctrl (Control) + 0"],
              "mac": ["⌘ (Command) + 0"]
            }
          },
          {
            "id": "11",
            "keys": ["⌘ (Command) + F"],
            "description": "Commit search",
            "platforms": {
              "windows": ["Ctrl (Control) + F"],
              "mac": ["⌘ (Command) + F"]
            }
          },
          {
            "id": "12",
            "keys": ["Enter"],
            "description": "Jump to next search result",
            "platforms": {
              "windows": ["Enter"],
              "mac": ["Return"]
            }
          },
          {
            "id": "13",
            "keys": ["Shift + Return"],
            "description": "Jump to previous search result",
            "platforms": {
              "windows": ["Shift + Enter"],
              "mac": ["⇧ (Shift) + Return"]
            }
          },
          {
            "id": "14",
            "keys": ["⌘ (Command) + C"],
            "description": "Copy commit info",
            "platforms": {
              "windows": ["Ctrl (Control) + C"],
              "mac": ["⌘ (Command) + C"]
            }
          },
          {
            "id": "15",
            "keys": ["Delete"],
            "description": "Remove branch or stash",
            "platforms": {
              "windows": ["Delete"],
              "mac": ["⌫ (Delete)"]
            }
          },
          {
            "id": "16",
            "keys": ["⌘ (Command) + ⇧ (Shift) + A"],
            "description": "Filter by active branch",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + A"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + A"]
            }
          }
        ]
      },
      {
        "title": "Changes View",
        "shortcuts": [
          {
            "id": "17",
            "keys": ["⌘ (Command) + Return"],
            "description": "Commit changes",
            "platforms": {
              "windows": ["Ctrl (Control) + Enter"],
              "mac": ["⌘ (Command) + Return"]
            }
          },
          {
            "id": "18",
            "keys": ["⌘ (Command) + ⇧ (Shift) + Return"],
            "description": "Commit and push changes",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + Enter"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + Return"]
            }
          },
          {
            "id": "19",
            "keys": ["⌘ (Command) + 1"],
            "description": "Focus commit message field",
            "platforms": {
              "windows": ["Ctrl (Control) + 1"],
              "mac": ["⌘ (Command) + 1"]
            }
          },
          {
            "id": "20",
            "keys": ["⌘ (Command) + S"],
            "description": "Stage/unstage selected file",
            "platforms": {
              "windows": ["Ctrl (Control) + S"],
              "mac": ["⌘ (Command) + S"]
            }
          },
          {
            "id": "21",
            "keys": ["⌘ (Command) + D"],
            "description": "Discard changes",
            "platforms": {
              "windows": ["Ctrl (Control) + D"],
              "mac": ["⌘ (Command) + D"]
            }
          }
        ]
      },
      {
        "title": "Repository",
        "shortcuts": [
          {
            "id": "22",
            "keys": ["⌘ (Command) + R"],
            "description": "Refresh repository",
            "platforms": {
              "windows": ["F5"],
              "mac": ["⌘ (Command) + R"]
            }
          },
          {
            "id": "23",
            "keys": ["⌘ (Command) + O"],
            "description": "Open repository",
            "platforms": {
              "windows": ["Ctrl (Control) + O"],
              "mac": ["⌘ (Command) + O"]
            }
          },
          {
            "id": "24",
            "keys": ["⌘ (Command) + B"],
            "description": "Checkout branch",
            "platforms": {
              "windows": ["Ctrl (Control) + B"],
              "mac": ["⌘ (Command) + B"]
            }
          },
          {
            "id": "25",
            "keys": ["⌘ (Command) + ⇧ (Shift) + F"],
            "description": "Fetch from remote",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + F"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + F"]
            }
          }
        ]
      }
    ]
  },

  "notion": {
    id: "notion",
    name: "Notion",
    shortcutpageName: "35+ Notion Keyboard Shortcuts",
    icon: "/icons/websites/notion.svg",
    description: "Mastering keyboard shortcuts in Notion can enhance your productivity by enabling quick navigation, note-taking, and task management on Windows, macOS, and Linux.",
    metadescription: "Check all Notion Keyboard Shortcuts to boost productivity. These Notion shortcuts are updated for Windows, MacOS, and Linux OS.",
    platforms: ["windows", "macos", "linux"],
    featured: true,
    "groups": [
      {
        "title": "Most Popular",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Cmd + N"],
            "description": "Create a new page (desktop app only)",
            "platforms": {
              "windows": ["Ctrl + N"],
              "mac": ["Cmd + N"],
              "linux": ["Ctrl + N"]
            }
          },
          {
            "id": "2",
            "keys": ["Cmd + Shift + N"],
            "description": "Open a new Notion window (desktop app only)",
            "platforms": {
              "windows": ["Ctrl + Shift + N"],
              "mac": ["Cmd + Shift + N"],
              "linux": ["Ctrl + Shift + N"]
            }
          },
          {
            "id": "3",
            "keys": ["Option + Shift + Click"],
            "description": "Open page as a new window (desktop app only)",
            "platforms": {
              "universal": ["Option + Shift + Click"]
            }
          },
          {
            "id": "4",
            "keys": ["Cmd + T"],
            "description": "Create a new Notion tab (desktop app only)",
            "platforms": {
              "windows": ["Ctrl + T"],
              "mac": ["Cmd + T"],
              "linux": ["Ctrl + T"]
            }
          },
          {
            "id": "5",
            "keys": ["Cmd + P"],
            "description": "Open search or jump to a recently viewed page",
            "platforms": {
              "windows": ["Ctrl + P"],
              "mac": ["Cmd + P"],
              "linux": ["Ctrl + P"]
            }
          },
          {
            "id": "6",
            "keys": ["Cmd + L"],
            "description": "Copy page URL",
            "platforms": {
              "windows": ["Ctrl + L"],
              "mac": ["Cmd + L"],
              "linux": ["Ctrl + L"]
            }
          },
          {
            "id": "7",
            "keys": ["Cmd + Shift + L"],
            "description": "Toggle between dark mode and light mode",
            "platforms": {
              "windows": ["Ctrl + Shift + L"],
              "mac": ["Cmd + Shift + L"],
              "linux": ["Ctrl + Shift + L"]
            }
          }
        ]
      },
      {
        "title": "Markdown Formatting",
        "shortcuts": [
          {
            "id": "8",
            "keys": ["**text**"],
            "description": "Bold text",
            "platforms": {
              "universal": ["**text**"]
            }
          },
          {
            "id": "9",
            "keys": ["*text*"],
            "description": "Italicize text",
            "platforms": {
              "universal": ["*text*"]
            }
          },
          {
            "id": "10",
            "keys": ["`text`"],
            "description": "Inline code",
            "platforms": {
              "universal": ["`text`"]
            }
          },
          {
            "id": "11",
            "keys": ["~text~"],
            "description": "Strikethrough text",
            "platforms": {
              "universal": ["~text~"]
            }
          }
        ]
      },
      {
        "title": "Content Creation & Styling",
        "shortcuts": [
          {
            "id": "12",
            "keys": ["Cmd + B"],
            "description": "Bold selected text",
            "platforms": {
              "windows": ["Ctrl + B"],
              "mac": ["Cmd + B"],
              "linux": ["Ctrl + B"]
            }
          },
          {
            "id": "13",
            "keys": ["Cmd + I"],
            "description": "Italicize selected text",
            "platforms": {
              "windows": ["Ctrl + I"],
              "mac": ["Cmd + I"],
              "linux": ["Ctrl + I"]
            }
          },
          {
            "id": "14",
            "keys": ["Cmd + K"],
            "description": "Add link to selected text",
            "platforms": {
              "windows": ["Ctrl + K"],
              "mac": ["Cmd + K"],
              "linux": ["Ctrl + K"]
            }
          },
          {
            "id": "15",
            "keys": ["Tab"],
            "description": "Indent and nest content",
            "platforms": {
              "universal": ["Tab"]
            }
          },
          {
            "id": "16",
            "keys": ["Shift + Tab"],
            "description": "Un-nest content",
            "platforms": {
              "universal": ["Shift + Tab"]
            }
          },
          {
            "id": "17",
            "keys": ["Cmd + Shift + M"],
            "description": "Create a comment",
            "platforms": {
              "windows": ["Ctrl + Shift + M"],
              "mac": ["Cmd + Shift + M"],
              "linux": ["Ctrl + Shift + M"]
            }
          }
        ]
      },
      {
        "title": "Block Editing & Moving",
        "shortcuts": [
          {
            "id": "18",
            "keys": ["Esc"],
            "description": "Select or clear the block you're currently in",
            "platforms": {
              "universal": ["Esc"]
            }
          },
          {
            "id": "19",
            "keys": ["Cmd + D"],
            "description": "Duplicate selected blocks",
            "platforms": {
              "windows": ["Ctrl + D"],
              "mac": ["Cmd + D"],
              "linux": ["Ctrl + D"]
            }
          },
          {
            "id": "20",
            "keys": ["Cmd + /"],
            "description": "Edit or change selected block type",
            "platforms": {
              "windows": ["Ctrl + /"],
              "mac": ["Cmd + /"],
              "linux": ["Ctrl + /"]
            }
          }
        ]
      },
      {
        "title": "@, [[, and + Commands",
        "shortcuts": [
          {
            "id": "21",
            "keys": ["@username"],
            "description": "Mention a person in your workspace",
            "platforms": {
              "universal": ["@username"]
            }
          },
          {
            "id": "22",
            "keys": ["@page name"],
            "description": "Mention a page within the workspace",
            "platforms": {
              "universal": ["@page name"]
            }
          },
          {
            "id": "23",
            "keys": ["@date"],
            "description": "Add a reminder for a specific date",
            "platforms": {
              "universal": ["@date"]
            }
          },
          {
            "id": "24",
            "keys": ["[[page name]]"],
            "description": "Link a page within the workspace",
            "platforms": {
              "universal": ["[[page name]]"]
            }
          },
          {
            "id": "25",
            "keys": ["+sub-page name"],
            "description": "Create a sub-page within the current page",
            "platforms": {
              "universal": ["+sub-page name"]
            }
          }
        ]
      },
      {
        "title": "Slash Commands",
        "shortcuts": [
          {
            "id": "26",
            "keys": ["/text"],
            "description": "Create a new text block",
            "platforms": {
              "universal": ["/text"]
            }
          },
          {
            "id": "27",
            "keys": ["/page"],
            "description": "Create a new page",
            "platforms": {
              "universal": ["/page"]
            }
          },
          {
            "id": "28",
            "keys": ["/todo"],
            "description": "Create a to-do list with checkboxes",
            "platforms": {
              "universal": ["/todo"]
            }
          },
          {
            "id": "29",
            "keys": ["/h1"],
            "description": "Create a large heading (H1)",
            "platforms": {
              "universal": ["/h1"]
            }
          },
          {
            "id": "30",
            "keys": ["/emoji"],
            "description": "Bring up emoji picker",
            "platforms": {
              "universal": ["/emoji"]
            }
          }
        ]
      },
      {
        "title": "Advanced Media Commands",
        "shortcuts": [
          {
            "id": "31",
            "keys": ["/image"],
            "description": "Insert an image (upload, embed, or add from Unsplash)",
            "platforms": {
              "universal": ["/image"]
            }
          },
          {
            "id": "32",
            "keys": ["/pdf"],
            "description": "Embed a PDF",
            "platforms": {
              "universal": ["/pdf"]
            }
          },
          {
            "id": "33",
            "keys": ["/video"],
            "description": "Embed a video from YouTube, Vimeo, etc.",
            "platforms": {
              "universal": ["/video"]
            }
          },
          {
            "id": "34",
            "keys": ["/file"],
            "description": "Upload any file from your computer",
            "platforms": {
              "universal": ["/file"]
            }
          },
          {
            "id": "35",
            "keys": ["/math"],
            "description": "Add a TeX formula or mathematical equation",
            "platforms": {
              "universal": ["/math"]
            }
          }
        ]
      }
    ]
  },
  "slack": {
    id: "slack",
    name: "Slack",
    shortcutpageName: "Slack Keyboard Shortcuts",
    icon: "/icons/websites/slack.svg",
    description: "Mastering keyboard shortcuts in Slack can streamline communication by enabling faster navigation, message management, and collaboration on both Windows and macOS.",
    metadescription: "Check all Slack Keyboard Shortcuts to improve communication. These Slack shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Slack Basics",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["⌘ (Command) + N"],
            "description": "Compose a new message",
            "platforms": {
              "windows": ["Ctrl (Control) + N"],
              "mac": ["⌘ (Command) + N"]
            }
          },
          {
            "id": "2",
            "keys": ["⌘ (Command) + ,"],
            "description": "Open your preferences (desktop only)",
            "platforms": {
              "windows": ["Ctrl (Control) + ,"],
              "mac": ["⌘ (Command) + ,"]
            }
          },
          {
            "id": "3",
            "keys": ["⌘ (Command) + B"],
            "description": "Show or hide the left sidebar (desktop only)",
            "platforms": {
              "windows": ["Ctrl (Control) + B"],
              "mac": ["⌘ (Command) + B"]
            }
          },
          {
            "id": "4",
            "keys": ["⌘ (Command) + ⇧ (Shift) + H"],
            "description": "Start a search",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + H"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + H"]
            }
          },
          {
            "id": "5",
            "keys": ["Esc"],
            "description": "Close window",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "6",
            "keys": ["⌘ (Command) + P"],
            "description": "Open the quick switcher",
            "platforms": {
              "windows": ["Ctrl (Control) + P"],
              "mac": ["⌘ (Command) + P"]
            }
          },
          {
            "id": "7",
            "keys": ["⌘ (Command) + F"],
            "description": "Search in the current conversation",
            "platforms": {
              "windows": ["Ctrl (Control) + F"],
              "mac": ["⌘ (Command) + F"]
            }
          },
          {
            "id": "8",
            "keys": ["⌘ (Command) + ⇧ (Shift) + F"],
            "description": "Start a search across all conversations",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + F"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + F"]
            }
          }
        ]
      },
      {
        "title": "Navigate Conversations and Messages",
        "shortcuts": [
          {
            "id": "9",
            "keys": ["⌘ (Command) + K"],
            "description": "Jump to a conversation",
            "platforms": {
              "windows": ["Ctrl (Control) + K"],
              "mac": ["⌘ (Command) + K"]
            }
          },
          {
            "id": "10",
            "keys": ["⌘ (Command) + ⇧ (Shift) + T"],
            "description": "Jump to the most recent unread message in a conversation",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + T"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + T"]
            }
          },
          {
            "id": "11",
            "keys": ["⌘ (Command) + ["],
            "description": "Go back in history",
            "platforms": {
              "windows": ["Alt (Option) + ←"],
              "mac": ["⌘ (Command) + ["]
            }
          },
          {
            "id": "12",
            "keys": ["⌘ (Command) + ]"],
            "description": "Go forward in history",
            "platforms": {
              "windows": ["Alt (Option) + →"],
              "mac": ["⌘ (Command) + ]"]
            }
          },
          {
            "id": "13",
            "keys": ["⌘ (Command) + ⇧ (Shift) + A"],
            "description": "Open the Activity view",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + A"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + A"]
            }
          },
          {
            "id": "14",
            "keys": ["⌘ (Command) + ⇧ (Shift) + M"],
            "description": "Open the Threads view",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + M"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + M"]
            }
          },
          {
            "id": "15",
            "keys": ["⌘ (Command) + ⇧ (Shift) + L"],
            "description": "Browse channels",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + L"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + L"]
            }
          }
        ]
      },
      {
        "title": "Mark Messages Read or Unread",
        "shortcuts": [
          {
            "id": "16",
            "keys": ["⌘ (Command) + ⇧ (Shift) + E"],
            "description": "Mark all messages as read",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + E"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + E"]
            }
          },
          {
            "id": "17",
            "keys": ["⇧ (Shift) + Esc"],
            "description": "Mark all messages in the current conversation as read",
            "platforms": {
              "windows": ["⇧ (Shift) + Esc"],
              "mac": ["⇧ (Shift) + Esc"]
            }
          },
          {
            "id": "18",
            "keys": ["⌘ (Command) + ⇧ (Shift) + U"],
            "description": "Mark a message as unread",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + U"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + U"]
            }
          }
        ]
      },
      {
        "title": "Switch Workspaces",
        "shortcuts": [
          {
            "id": "19",
            "keys": ["⌘ (Command) + ⇧ (Shift) + M"],
            "description": "Expand or collapse the workspace switcher",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + M"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + M"]
            }
          },
          {
            "id": "20",
            "keys": ["⌘ (Command) + 1"],
            "description": "Switch to the first workspace",
            "platforms": {
              "windows": ["Ctrl (Control) + 1"],
              "mac": ["⌘ (Command) + 1"]
            }
          },
          {
            "id": "21",
            "keys": ["⌘ (Command) + ]"],
            "description": "Switch to the next workspace",
            "platforms": {
              "windows": ["Ctrl (Control) + ]"],
              "mac": ["⌘ (Command) + ]"]
            }
          },
          {
            "id": "22",
            "keys": ["⌘ (Command) + ["],
            "description": "Switch to the previous workspace",
            "platforms": {
              "windows": ["Ctrl (Control) + ["],
              "mac": ["⌘ (Command) + ["]
            }
          }
        ]
      },
      {
        "title": "Formatting Messages",
        "shortcuts": [
          {
            "id": "30",
            "keys": ["⌘ (Command) + B"],
            "description": "Bold selected text",
            "platforms": {
              "windows": ["Ctrl (Control) + B"],
              "mac": ["⌘ (Command) + B"]
            }
          },
          {
            "id": "31",
            "keys": ["⌘ (Command) + I"],
            "description": "Italicize selected text",
            "platforms": {
              "windows": ["Ctrl (Control) + I"],
              "mac": ["⌘ (Command) + I"]
            }
          },
          {
            "id": "32",
            "keys": ["⌘ (Command) + ⇧ (Shift) + X"],
            "description": "Strikethrough selected text",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + X"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + X"]
            }
          },
          {
            "id": "33",
            "keys": ["⌘ (Command) + ⇧ (Shift) + C"],
            "description": "Code selected text",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + C"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + C"]
            }
          },
          {
            "id": "34",
            "keys": ["⌘ (Command) + ⇧ (Shift) + 8"],
            "description": "Format as bulleted list",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + 8"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + 8"]
            }
          },
          {
            "id": "35",
            "keys": ["⌘ (Command) + ⇧ (Shift) + 7"],
            "description": "Format as numbered list",
            "platforms": {
              "windows": ["Ctrl (Control) + ⇧ (Shift) + 7"],
              "mac": ["⌘ (Command) + ⇧ (Shift) + 7"]
            }
          }
        ]
      }
    ]
  },
  "discord": {
    id: "discord",
    name: "Discord",
    shortcutpageName: "40+ Discord Keyboard Shortcuts",
    icon: "/icons/websites/discord.svg",
    description: "Mastering keyboard shortcuts in Discord can enhance your communication by enabling quicker navigation, server management, and message handling on both Windows and macOS.",
    metadescription: "Check all Discord Keyboard Shortcuts to communicate efficiently. These Discord shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Ctrl + K"],
            "description": "Quick switcher",
            "platforms": {
              "windows": ["Ctrl + K"],
              "mac": ["⌘ + K"]
            }
          },
          {
            "id": "2",
            "keys": ["Alt + ↑"],
            "description": "Previous channel",
            "platforms": {
              "windows": ["Alt + ↑"],
              "mac": ["⌥ + ↑"]
            }
          },
          {
            "id": "3",
            "keys": ["Alt + ↓"],
            "description": "Next channel",
            "platforms": {
              "windows": ["Alt + ↓"],
              "mac": ["⌥ + ↓"]
            }
          },
          {
            "id": "4",
            "keys": ["Ctrl + Alt + ↑"],
            "description": "Previous server",
            "platforms": {
              "windows": ["Ctrl + Alt + ↑"],
              "mac": ["⌘ + ⌥ + ↑"]
            }
          },
          {
            "id": "5",
            "keys": ["Ctrl + Alt + ↓"],
            "description": "Next server",
            "platforms": {
              "windows": ["Ctrl + Alt + ↓"],
              "mac": ["⌘ + ⌥ + ↓"]
            }
          },
          {
            "id": "6",
            "keys": ["Ctrl + Shift + N"],
            "description": "Create or join a server",
            "platforms": {
              "windows": ["Ctrl + Shift + N"],
              "mac": ["⌘ + Shift + N"]
            }
          },
          {
            "id": "7",
            "keys": ["Ctrl + Shift + U"],
            "description": "Upload a file",
            "platforms": {
              "windows": ["Ctrl + Shift + U"],
              "mac": ["⌘ + Shift + U"]
            }
          },
          {
            "id": "8",
            "keys": ["Ctrl + P"],
            "description": "Toggle pins popout",
            "platforms": {
              "windows": ["Ctrl + P"],
              "mac": ["⌘ + P"]
            }
          },
          {
            "id": "9",
            "keys": ["Ctrl + Shift + D"],
            "description": "Toggle deafen",
            "platforms": {
              "windows": ["Ctrl + Shift + D"],
              "mac": ["⌘ + Shift + D"]
            }
          },
          {
            "id": "10",
            "keys": ["Ctrl + `"],
            "description": "Show/hide server list",
            "platforms": {
              "windows": ["Ctrl + `"],
              "mac": ["⌘ + `"]
            }
          }
        ]
      },
      {
        "title": "Messaging",
        "shortcuts": [
          {
            "id": "11",
            "keys": ["Ctrl + E"],
            "description": "Toggle emoji picker",
            "platforms": {
              "windows": ["Ctrl + E"],
              "mac": ["⌘ + E"]
            }
          },
          {
            "id": "12",
            "keys": ["Ctrl + Shift + M"],
            "description": "Toggle mute",
            "platforms": {
              "windows": ["Ctrl + Shift + M"],
              "mac": ["⌘ + Shift + M"]
            }
          },
          {
            "id": "13",
            "keys": ["Ctrl + Enter"],
            "description": "Answer incoming call",
            "platforms": {
              "windows": ["Ctrl + Enter"],
              "mac": ["⌘ + Enter"]
            }
          },
          {
            "id": "14",
            "keys": ["Esc"],
            "description": "Decline incoming call or mark channel as read",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "15",
            "keys": ["Ctrl + U"],
            "description": "Toggle channel member list",
            "platforms": {
              "windows": ["Ctrl + U"],
              "mac": ["⌘ + U"]
            }
          },
          {
            "id": "16",
            "keys": ["Shift + Page Up"],
            "description": "Jump to oldest unread message",
            "platforms": {
              "windows": ["Shift + Page Up"],
              "mac": ["Shift + Page Up"]
            }
          },
          {
            "id": "17",
            "keys": ["Shift + Enter"],
            "description": "Start a new line in chat",
            "platforms": {
              "windows": ["Shift + Enter"],
              "mac": ["Shift + Enter"]
            }
          }
        ]
      },
      {
        "title": "Channel and Server Management",
        "shortcuts": [
          {
            "id": "18",
            "keys": ["Ctrl + Shift + I"],
            "description": "Toggle mentions popout",
            "platforms": {
              "windows": ["Ctrl + Shift + I"],
              "mac": ["⌘ + Shift + I"]
            }
          },
          {
            "id": "19",
            "keys": ["Ctrl + B"],
            "description": "Return to previous text channel",
            "platforms": {
              "windows": ["Ctrl + B"],
              "mac": ["⌘ + B"]
            }
          },
          {
            "id": "20",
            "keys": ["Ctrl + Alt + A"],
            "description": "Return to active audio channel",
            "platforms": {
              "windows": ["Ctrl + Alt + A"],
              "mac": ["⌘ + ⌥ + A"]
            }
          },
          {
            "id": "21",
            "keys": ["Ctrl + Shift + S"],
            "description": "Create a new text or voice channel",
            "platforms": {
              "windows": ["Ctrl + Shift + S"],
              "mac": ["⌘ + Shift + S"]
            }
          }
        ]
      },
      {
        "title": "Formatting",
        "shortcuts": [
          {
            "id": "22",
            "keys": ["Ctrl + B"],
            "description": "Bold text",
            "platforms": {
              "windows": ["Ctrl + B"],
              "mac": ["⌘ + B"]
            }
          },
          {
            "id": "23",
            "keys": ["Ctrl + I"],
            "description": "Italicize text",
            "platforms": {
              "windows": ["Ctrl + I"],
              "mac": ["⌘ + I"]
            }
          },
          {
            "id": "24",
            "keys": ["Ctrl + Shift + S"],
            "description": "Strikethrough text",
            "platforms": {
              "windows": ["Ctrl + Shift + S"],
              "mac": ["⌘ + Shift + S"]
            }
          },
          {
            "id": "25",
            "keys": ["Ctrl + Shift + C"],
            "description": "Code block",
            "platforms": {
              "windows": ["Ctrl + Shift + C"],
              "mac": ["⌘ + Shift + C"]
            }
          },
          {
            "id": "26",
            "keys": ["`text`"],
            "description": "Inline code",
            "platforms": {
              "windows": ["`text`"],
              "mac": ["`text`"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "27",
            "keys": ["Ctrl + /"],
            "description": "View keyboard shortcuts overlay",
            "platforms": {
              "windows": ["Ctrl + /"],
              "mac": ["⌘ + /"]
            }
          },
          {
            "id": "28",
            "keys": ["Ctrl + Shift + Escape"],
            "description": "Leave current voice channel",
            "platforms": {
              "windows": ["Ctrl + Shift + Escape"],
              "mac": ["⌘ + Shift + Escape"]
            }
          }
        ]
      }
    ]
  },
  "figma": {
    id: "figma",
    name: "Figma",
    shortcutpageName: "Most Used Figma Keyboard Shortcuts",
    icon: "/icons/websites/figma.svg",
    description: "Mastering keyboard shortcuts in Figma can enhance your design workflow by enabling faster navigation, tool usage, and collaboration on both Windows and macOS.",
    metadescription: "Check all Figma Keyboard Shortcuts to design efficiently. These Figma shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Essentials",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Ctrl (Control) + \\"],
            "description": "Show / Hide UI",
            "platforms": {
              "windows": ["Ctrl (Control) + \\"],
              "mac": ["⌘ (Command) + \\"]
            }
          },
          {
            "id": "2",
            "keys": ["Ctrl (Control) + C"],
            "description": "Pick color",
            "platforms": {
              "windows": ["Ctrl (Control) + C"],
              "mac": ["⌃ (Control) + C"]
            }
          },
          {
            "id": "3",
            "keys": ["Ctrl (Control) + /"],
            "description": "Quick actions",
            "platforms": {
              "windows": ["Ctrl (Control) + /"],
              "mac": ["⌘ (Command) + /"]
            }
          },
          {
            "id": "4",
            "keys": ["Alt (Option) + Drag"],
            "description": "Duplicate an object",
            "platforms": {
              "windows": ["Alt + Drag"],
              "mac": ["⌥ (Option) + Drag"]
            }
          },
          {
            "id": "5",
            "keys": ["Ctrl (Control) + D"],
            "description": "Duplicate",
            "platforms": {
              "windows": ["Ctrl (Control) + D"],
              "mac": ["⌘ (Command) + D"]
            }
          }
        ]
      },
      {
        "title": "Tools",
        "shortcuts": [
          {
            "id": "6",
            "keys": ["V"],
            "description": "Move tool",
            "platforms": {
              "windows": ["V"],
              "mac": ["V"]
            }
          },
          {
            "id": "7",
            "keys": ["F"],
            "description": "Frame tool",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "8",
            "keys": ["P"],
            "description": "Pen tool",
            "platforms": {
              "windows": ["P"],
              "mac": ["P"]
            }
          },
          {
            "id": "9",
            "keys": ["Shift + P"],
            "description": "Pencil tool",
            "platforms": {
              "windows": ["Shift + P"],
              "mac": ["⇧ (Shift) + P"]
            }
          },
          {
            "id": "10",
            "keys": ["T"],
            "description": "Text tool",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "11",
            "keys": ["R"],
            "description": "Rectangle tool",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "12",
            "keys": ["O"],
            "description": "Ellipse tool",
            "platforms": {
              "windows": ["O"],
              "mac": ["O"]
            }
          },
          {
            "id": "13",
            "keys": ["L"],
            "description": "Line tool",
            "platforms": {
              "windows": ["L"],
              "mac": ["L"]
            }
          },
          {
            "id": "14",
            "keys": ["Shift + L"],
            "description": "Arrow tool",
            "platforms": {
              "windows": ["Shift + L"],
              "mac": ["⇧ (Shift) + L"]
            }
          },
          {
            "id": "15",
            "keys": ["C"],
            "description": "Add comment",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          },
          {
            "id": "16",
            "keys": ["I"],
            "description": "Pick color",
            "platforms": {
              "windows": ["I"],
              "mac": ["I"]
            }
          },
          {
            "id": "17",
            "keys": ["S"],
            "description": "Slice tool",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "18",
            "keys": ["Ctrl (Control) + G"],
            "description": "Group selection",
            "platforms": {
              "windows": ["Ctrl (Control) + G"],
              "mac": ["⌘ (Command) + G"]
            }
          },
          {
            "id": "19",
            "keys": ["Ctrl (Control) + Shift + G"],
            "description": "Ungroup selection",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + G"],
              "mac": ["⌘ (Command) + Shift + G"]
            }
          }
        ]
      },
      {
        "title": "View",
        "shortcuts": [
          {
            "id": "20",
            "keys": ["Ctrl (Control) + \\"],
            "description": "Show / Hide UI",
            "platforms": {
              "windows": ["Ctrl (Control) + \\"],
              "mac": ["⌘ (Command) + \\"]
            }
          },
          {
            "id": "21",
            "keys": ["Alt (Option) + Ctrl (Control) + \\"],
            "description": "Multiplayer cursors",
            "platforms": {
              "windows": ["Alt + Ctrl (Control) + \\"],
              "mac": ["⌥ (Option) + ⌘ (Command) + \\"]
            }
          },
          {
            "id": "22",
            "keys": ["Shift + R"],
            "description": "Rulers",
            "platforms": {
              "windows": ["Shift + R"],
              "mac": ["⇧ (Shift) + R"]
            }
          },
          {
            "id": "23",
            "keys": ["Shift + O"],
            "description": "Toggle Outlines",
            "platforms": {
              "windows": ["Shift + O"],
              "mac": ["⇧ (Shift) + O"]
            }
          },
          {
            "id": "24",
            "keys": ["Ctrl (Control) + Y"],
            "description": "Toggle layers panel",
            "platforms": {
              "windows": ["Ctrl (Control) + Y"],
              "mac": ["⌘ (Command) + Y"]
            }
          }
        ]
      },
      {
        "title": "Zoom",
        "shortcuts": [
          {
            "id": "25",
            "keys": ["Space"],
            "description": "Pan",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "26",
            "keys": ["+"],
            "description": "Zoom in",
            "platforms": {
              "windows": ["+"],
              "mac": ["+"]
            }
          },
          {
            "id": "27",
            "keys": ["-"],
            "description": "Zoom out",
            "platforms": {
              "windows": ["-"],
              "mac": ["-"]
            }
          },
          {
            "id": "28",
            "keys": ["Shift + 0"],
            "description": "Zoom to 100%",
            "platforms": {
              "windows": ["Shift + 0"],
              "mac": ["⇧ (Shift) + 0"]
            }
          },
          {
            "id": "29",
            "keys": ["Shift + 1"],
            "description": "Zoom to fit",
            "platforms": {
              "windows": ["Shift + 1"],
              "mac": ["⇧ (Shift) + 1"]
            }
          },
          {
            "id": "30",
            "keys": ["Shift + 2"],
            "description": "Zoom to selection",
            "platforms": {
              "windows": ["Shift + 2"],
              "mac": ["⇧ (Shift) + 2"]
            }
          }
        ]
      },
      {
        "title": "Text",
        "shortcuts": [
          {
            "id": "31",
            "keys": ["Ctrl (Control) + B"],
            "description": "Bold",
            "platforms": {
              "windows": ["Ctrl (Control) + B"],
              "mac": ["⌘ (Command) + B"]
            }
          },
          {
            "id": "32",
            "keys": ["Ctrl (Control) + I"],
            "description": "Italic",
            "platforms": {
              "windows": ["Ctrl (Control) + I"],
              "mac": ["⌘ (Command) + I"]
            }
          },
          {
            "id": "33",
            "keys": ["Ctrl (Control) + U"],
            "description": "Underline",
            "platforms": {
              "windows": ["Ctrl (Control) + U"],
              "mac": ["⌘ (Command) + U"]
            }
          },
          {
            "id": "34",
            "keys": ["Ctrl (Control) + K"],
            "description": "Create link",
            "platforms": {
              "windows": ["Ctrl (Control) + K"],
              "mac": ["⌘ (Command) + K"]
            }
          },
          {
            "id": "35",
            "keys": ["Ctrl (Control) + Shift + >"],
            "description": "Increase font size",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + >"],
              "mac": ["⌘ (Command) + Shift + >"]
            }
          },
          {
            "id": "36",
            "keys": ["Ctrl (Control) + Shift + <"],
            "description": "Decrease font size",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + <"],
              "mac": ["⌘ (Command) + Shift + <"]
            }
          }
        ]
      },
      {
        "title": "Arrange",
        "shortcuts": [
          {
            "id": "37",
            "keys": ["Ctrl (Control) + ]"],
            "description": "Bring forward",
            "platforms": {
              "windows": ["Ctrl (Control) + ]"],
              "mac": ["⌘ (Command) + ]"]
            }
          },
          {
            "id": "38",
            "keys": ["Ctrl (Control) + ["],
            "description": "Send backward",
            "platforms": {
              "windows": ["Ctrl (Control) + ["],
              "mac": ["⌘ (Command) + ["]
            }
          },
          {
            "id": "39",
            "keys": ["Alt (Option) + Ctrl (Control) + ]"],
            "description": "Bring to front",
            "platforms": {
              "windows": ["Alt (Option) + Ctrl (Control) + ]"],
              "mac": ["⌥ (Option) + ⌘ (Command) + ]"]
            }
          },
          {
            "id": "40",
            "keys": ["Alt (Option) + Ctrl (Control) + ["],
            "description": "Send to back",
            "platforms": {
              "windows": ["Alt (Option) + Ctrl (Control) + ["],
              "mac": ["⌥ (Option) + ⌘ (Command) + ["]
            }
          },
          {
            "id": "41",
            "keys": ["Ctrl (Control) + Shift + H"],
            "description": "Hide selection",
            "platforms": {
              "windows": ["Ctrl (Control) + Shift + H"],
              "mac": ["⌘ (Command) + Shift + H"]
            }
          }
        ]
      }
    ]
  },
  "netflix": {
    id: "netflix",
    name: "Netflix",
    shortcutpageName: "Netflix Keyboard Shortcuts",
    icon: "/icons/websites/netflix.svg",
    description: "Mastering keyboard shortcuts in Netflix can enhance your streaming experience by enabling quick playback controls, navigation, and volume adjustments on both Windows and macOS.",
    metadescription: "Check all Netflix Keyboard Shortcuts to enjoy streaming efficiently. These Netflix shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Playback Controls",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Space"],
            "description": "Play/Pause",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "2",
            "keys": ["Enter"],
            "description": "Play/Pause (alternative)",
            "platforms": {
              "windows": ["Enter"],
              "mac": ["Enter"]
            }
          },
          {
            "id": "3",
            "keys": ["F"],
            "description": "Enter full screen",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "4",
            "keys": ["Esc"],
            "description": "Exit full screen",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "5",
            "keys": ["Left Arrow"],
            "description": "Rewind 10 seconds",
            "platforms": {
              "windows": ["Left Arrow"],
              "mac": ["Left Arrow"]
            }
          },
          {
            "id": "6",
            "keys": ["Right Arrow"],
            "description": "Fast forward 10 seconds",
            "platforms": {
              "windows": ["Right Arrow"],
              "mac": ["Right Arrow"]
            }
          },
          {
            "id": "7",
            "keys": ["Up Arrow"],
            "description": "Increase volume",
            "platforms": {
              "windows": ["Up Arrow"],
              "mac": ["Up Arrow"]
            }
          },
          {
            "id": "8",
            "keys": ["Down Arrow"],
            "description": "Decrease volume",
            "platforms": {
              "windows": ["Down Arrow"],
              "mac": ["Down Arrow"]
            }
          },
          {
            "id": "9",
            "keys": ["M"],
            "description": "Mute/Unmute",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "10",
            "keys": ["S"],
            "description": "Skip intro",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "11",
            "keys": ["J"],
            "description": "Rewind 10 seconds (alternative)",
            "platforms": {
              "windows": ["J"],
              "mac": ["J"]
            }
          },
          {
            "id": "12",
            "keys": ["L"],
            "description": "Fast forward 10 seconds (alternative)",
            "platforms": {
              "windows": ["L"],
              "mac": ["L"]
            }
          },
          {
            "id": "13",
            "keys": ["<"],
            "description": "Slow down playback speed",
            "platforms": {
              "windows": ["<"],
              "mac": ["<"]
            }
          },
          {
            "id": "14",
            "keys": [">"],
            "description": "Speed up playback",
            "platforms": {
              "windows": [">"],
              "mac": [">"]
            }
          },
          {
            "id": "15",
            "keys": ["C"],
            "description": "Toggle subtitles",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          },
          {
            "id": "16",
            "keys": ["V"],
            "description": "Change subtitle track",
            "platforms": {
              "windows": ["V"],
              "mac": ["V"]
            }
          },
          {
            "id": "17",
            "keys": ["A"],
            "description": "Change audio track",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "18",
            "keys": ["P"],
            "description": "Toggle picture-in-picture mode",
            "platforms": {
              "windows": ["P"],
              "mac": ["P"]
            }
          },
          {
            "id": "19",
            "keys": ["D"],
            "description": "Toggle diagnostics panel",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "20",
            "keys": ["0-9"],
            "description": "Jump to specific percentage (e.g., 1 for 10%, 5 for 50%)",
            "platforms": {
              "windows": ["0-9"],
              "mac": ["0-9"]
            }
          }
        ]
      },
      {
        "title": "Account and Navigation Controls",
        "shortcuts": [
          {
            "id": "21",
            "keys": ["Ctrl (Control) + Alt (Option) + Shift + S"],
            "description": "Open streaming settings",
            "platforms": {
              "windows": ["Ctrl (Control) + Alt + Shift + S"],
              "mac": ["Ctrl (Control) + ⌥ (Option) + ⇧ (Shift) + S"]
            }
          },
          {
            "id": "22",
            "keys": ["Ctrl (Control) + Alt (Option) + Shift + D"],
            "description": "Display bitrate and playback stats",
            "platforms": {
              "windows": ["Ctrl (Control) + Alt + Shift + D"],
              "mac": ["Ctrl (Control) + ⌥ (Option) + ⇧ (Shift) + D"]
            }
          },
          {
            "id": "23",
            "keys": ["Ctrl (Control) + Alt (Option) + Shift + L"],
            "description": "Display playback logging",
            "platforms": {
              "windows": ["Ctrl (Control) + Alt + Shift + L"],
              "mac": ["Ctrl (Control) + ⌥ (Option) + ⇧ (Shift) + L"]
            }
          },
          {
            "id": "24",
            "keys": ["Ctrl (Control) + Alt (Option) + Shift + M"],
            "description": "Open Netflix debug menu",
            "platforms": {
              "windows": ["Ctrl (Control) + Alt + Shift + M"],
              "mac": ["Ctrl (Control) + ⌥ (Option) + ⇧ (Shift) + M"]
            }
          }
        ]
      }
    ]
  },
  "google-docs": {
    id: "google-docs",
    name: "Google Docs",
    shortcutpageName: "Google Docs Keyboard Shortcuts",
    icon: "/icons/websites/docs.svg",
    description: "Mastering keyboard shortcuts in Google Docs can improve your writing experience by enabling faster text editing, formatting, and navigation on both Windows and macOS.",
    metadescription: "Check all Google Docs Keyboard Shortcuts to create documents efficiently. These Google Docs shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Text Formatting",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Ctrl + B"],
            "description": "Bold",
            "platforms": {
              "windows": ["Ctrl + B"],
              "mac": ["⌘ + B"]
            }
          },
          {
            "id": "2",
            "keys": ["Ctrl + I"],
            "description": "Italic",
            "platforms": {
              "windows": ["Ctrl + I"],
              "mac": ["⌘ + I"]
            }
          },
          {
            "id": "3",
            "keys": ["Ctrl + U"],
            "description": "Underline",
            "platforms": {
              "windows": ["Ctrl + U"],
              "mac": ["⌘ + U"]
            }
          },
          {
            "id": "4",
            "keys": ["Ctrl + Shift + S"],
            "description": "Strikethrough",
            "platforms": {
              "windows": ["Ctrl + Shift + S"],
              "mac": ["⌘ + Shift + S"]
            }
          },
          {
            "id": "5",
            "keys": ["Ctrl + Shift + 8"],
            "description": "Bulleted List",
            "platforms": {
              "windows": ["Ctrl + Shift + 8"],
              "mac": ["⌘ + Shift + 8"]
            }
          },
          {
            "id": "6",
            "keys": ["Ctrl + Shift + 7"],
            "description": "Numbered List",
            "platforms": {
              "windows": ["Ctrl + Shift + 7"],
              "mac": ["⌘ + Shift + 7"]
            }
          },
          {
            "id": "7",
            "keys": ["Ctrl + Alt + C"],
            "description": "Copy formatting",
            "platforms": {
              "windows": ["Ctrl + Alt + C"],
              "mac": ["⌘ + ⌥ + C"]
            }
          },
          {
            "id": "8",
            "keys": ["Ctrl + Alt + V"],
            "description": "Paste formatting",
            "platforms": {
              "windows": ["Ctrl + Alt + V"],
              "mac": ["⌘ + ⌥ + V"]
            }
          }
        ]
      },
      {
        "title": "Document Navigation",
        "shortcuts": [
          {
            "id": "9",
            "keys": ["Ctrl + Alt + M"],
            "description": "Insert comment",
            "platforms": {
              "windows": ["Ctrl + Alt + M"],
              "mac": ["⌘ + ⌥ + M"]
            }
          },
          {
            "id": "10",
            "keys": ["Ctrl + Down"],
            "description": "Go to next paragraph",
            "platforms": {
              "windows": ["Ctrl + Down"],
              "mac": ["⌘ + Down"]
            }
          },
          {
            "id": "11",
            "keys": ["Ctrl + Up"],
            "description": "Go to previous paragraph",
            "platforms": {
              "windows": ["Ctrl + Up"],
              "mac": ["⌘ + Up"]
            }
          },
          {
            "id": "12",
            "keys": ["Ctrl + K"],
            "description": "Insert link",
            "platforms": {
              "windows": ["Ctrl + K"],
              "mac": ["⌘ + K"]
            }
          },
          {
            "id": "13",
            "keys": ["Ctrl + Home"],
            "description": "Go to start of document",
            "platforms": {
              "windows": ["Ctrl + Home"],
              "mac": ["⌘ + Home"]
            }
          },
          {
            "id": "14",
            "keys": ["Ctrl + End"],
            "description": "Go to end of document",
            "platforms": {
              "windows": ["Ctrl + End"],
              "mac": ["⌘ + End"]
            }
          }
        ]
      },
      {
        "title": "File Management",
        "shortcuts": [
          {
            "id": "15",
            "keys": ["Ctrl + S"],
            "description": "Save document",
            "platforms": {
              "windows": ["Ctrl + S"],
              "mac": ["⌘ + S"]
            }
          },
          {
            "id": "16",
            "keys": ["Ctrl + P"],
            "description": "Print document",
            "platforms": {
              "windows": ["Ctrl + P"],
              "mac": ["⌘ + P"]
            }
          },
          {
            "id": "17",
            "keys": ["Ctrl + O"],
            "description": "Open file",
            "platforms": {
              "windows": ["Ctrl + O"],
              "mac": ["⌘ + O"]
            }
          },
          {
            "id": "18",
            "keys": ["Ctrl + Shift + P"],
            "description": "Open preview",
            "platforms": {
              "windows": ["Ctrl + Shift + P"],
              "mac": ["⌘ + Shift + P"]
            }
          },
          {
            "id": "19",
            "keys": ["Ctrl + Shift + N"],
            "description": "Open new document",
            "platforms": {
              "windows": ["Ctrl + Shift + N"],
              "mac": ["⌘ + Shift + N"]
            }
          }
        ]
      },
      {
        "title": "General Editing",
        "shortcuts": [
          {
            "id": "20",
            "keys": ["Ctrl + Z"],
            "description": "Undo",
            "platforms": {
              "windows": ["Ctrl + Z"],
              "mac": ["⌘ + Z"]
            }
          },
          {
            "id": "21",
            "keys": ["Ctrl + Y"],
            "description": "Redo",
            "platforms": {
              "windows": ["Ctrl + Y"],
              "mac": ["⌘ + Y"]
            }
          },
          {
            "id": "22",
            "keys": ["Ctrl + A"],
            "description": "Select all",
            "platforms": {
              "windows": ["Ctrl + A"],
              "mac": ["⌘ + A"]
            }
          },
          {
            "id": "23",
            "keys": ["Ctrl + X"],
            "description": "Cut",
            "platforms": {
              "windows": ["Ctrl + X"],
              "mac": ["⌘ + X"]
            }
          },
          {
            "id": "24",
            "keys": ["Ctrl + C"],
            "description": "Copy",
            "platforms": {
              "windows": ["Ctrl + C"],
              "mac": ["⌘ + C"]
            }
          },
          {
            "id": "25",
            "keys": ["Ctrl + V"],
            "description": "Paste",
            "platforms": {
              "windows": ["Ctrl + V"],
              "mac": ["⌘ + V"]
            }
          }
        ]
      },
      {
        "title": "Tools and Accessibility",
        "shortcuts": [
          {
            "id": "26",
            "keys": ["Ctrl + /"],
            "description": "Open help menu",
            "platforms": {
              "windows": ["Ctrl + /"],
              "mac": ["⌘ + /"]
            }
          },
          {
            "id": "27",
            "keys": ["Ctrl + Shift + C"],
            "description": "Word count",
            "platforms": {
              "windows": ["Ctrl + Shift + C"],
              "mac": ["⌘ + Shift + C"]
            }
          },
          {
            "id": "28",
            "keys": ["Ctrl + Alt + Shift + A"],
            "description": "Accessibility settings",
            "platforms": {
              "windows": ["Ctrl + Alt + Shift + A"],
              "mac": ["⌘ + ⌥ + Shift + A"]
            }
          },
          {
            "id": "29",
            "keys": ["Ctrl + Shift + G"],
            "description": "Find and replace",
            "platforms": {
              "windows": ["Ctrl + Shift + G"],
              "mac": ["⌘ + Shift + G"]
            }
          }
        ]
      }
    ]
  },
  "google-drive": {
    id: "google-drive",
    name: "Google Drive",
    shortcutpageName: "Google Drive Keyboard Shortcuts",
    icon: "/icons/websites/google-drive.svg",
    description: "Mastering keyboard shortcuts in Google Drive can optimize your file management by enabling quicker navigation, file sharing, and organization on both Windows and macOS.",
    metadescription: "Check all Google Drive Keyboard Shortcuts to manage your files efficiently. These Google Drive shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "File Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "O"
            ],
            "description": "Open a file",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "O"
              ],
              "mac": [
                "\u2318 (Command)",
                "O"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Create a new file",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "N"
              ],
              "mac": [
                "\u2318 (Command)",
                "N"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save current file",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "S"
              ]
            }
          }
        ]
      },
      {
        "title": "Editing Shortcuts",
        "shortcuts": [
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "X"
            ],
            "description": "Cut selected items",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "X"
              ],
              "mac": [
                "\u2318 (Command)",
                "X"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "C"
            ],
            "description": "Copy selected items",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "C"
              ],
              "mac": [
                "\u2318 (Command)",
                "C"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "V"
            ],
            "description": "Paste copied items",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "V"
              ],
              "mac": [
                "\u2318 (Command)",
                "V"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-sheets": {
    id: "google-sheets",
    name: "Google Sheets",
    shortcutpageName: "45+ Google Sheets Keyboard Shortcuts",
    icon: "/icons/websites/google-sheet.svg",
    description: "Mastering keyboard shortcuts in Google Sheets can improve your productivity by enabling quicker data entry, navigation, and formula management on both Windows and macOS.",
    metadescription: "Check all Google Sheets Keyboard Shortcuts to handle spreadsheets efficiently. These Google Sheets shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "O"
            ],
            "description": "Open a spreadsheet",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "O"
              ],
              "mac": [
                "\u2318 (Command)",
                "O"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save the spreadsheet",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "S"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Create a new spreadsheet",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "N"
              ],
              "mac": [
                "\u2318 (Command)",
                "N"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "P"
            ],
            "description": "Print the spreadsheet",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "P"
              ],
              "mac": [
                "\u2318 (Command)",
                "P"
              ]
            }
          }
        ]
      },
      {
        "title": "Editing Shortcuts",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "C"
            ],
            "description": "Copy",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "C"
              ],
              "mac": [
                "\u2318 (Command)",
                "C"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "V"
            ],
            "description": "Paste",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "V"
              ],
              "mac": [
                "\u2318 (Command)",
                "V"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "X"
            ],
            "description": "Cut",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "X"
              ],
              "mac": [
                "\u2318 (Command)",
                "X"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Z"
            ],
            "description": "Undo",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Z"
              ],
              "mac": [
                "\u2318 (Command)",
                "Z"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Y"
            ],
            "description": "Redo",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Y"
              ],
              "mac": [
                "\u2318 (Command)",
                "Y"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Find",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "F"
              ],
              "mac": [
                "\u2318 (Command)",
                "F"
              ]
            }
          }
        ]
      },
      {
        "title": "Formatting Shortcuts",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "Ctrl (Control)",
              "B"
            ],
            "description": "Bold",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "B"
              ],
              "mac": [
                "\u2318 (Command)",
                "B"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "I"
            ],
            "description": "Italic",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "I"
              ],
              "mac": [
                "\u2318 (Command)",
                "I"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "Ctrl (Control)",
              "U"
            ],
            "description": "Underline",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "U"
              ],
              "mac": [
                "\u2318 (Command)",
                "U"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "Ctrl (Control)",
              "1"
            ],
            "description": "Format as number",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "1"
              ],
              "mac": [
                "\u2318 (Command)",
                "1"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "Ctrl (Control)",
              "5"
            ],
            "description": "Strike through",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "5"
              ],
              "mac": [
                "\u2318 (Command)",
                "5"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-calendar": {
    id: "google-calendar",
    name: "Google Calendar",
    shortcutpageName: "Google Calendar Keyboard Shortcuts",
    icon: "/icons/websites/google-calendar.svg",
    description: "Mastering keyboard shortcuts in Google Calendar can make scheduling and managing your time more efficient on both Windows and macOS.",
    metadescription: "Check all Google Calendar Keyboard Shortcuts to organize your schedule efficiently. These Google Calendar shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "C"
            ],
            "description": "Create a new event",
            "platforms": {
              "windows": [
                "C"
              ],
              "mac": [
                "C"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "D"
            ],
            "description": "Day view",
            "platforms": {
              "windows": [
                "D"
              ],
              "mac": [
                "D"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "W"
            ],
            "description": "Week view",
            "platforms": {
              "windows": [
                "W"
              ],
              "mac": [
                "W"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "M"
            ],
            "description": "Month view",
            "platforms": {
              "windows": [
                "M"
              ],
              "mac": [
                "M"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "X"
            ],
            "description": "Return to current date",
            "platforms": {
              "windows": [
                "X"
              ],
              "mac": [
                "X"
              ]
            }
          }
        ]
      },
      {
        "title": "Event Shortcuts",
        "shortcuts": [
          {
            "id": "6",
            "keys": [
              "E"
            ],
            "description": "Edit event details",
            "platforms": {
              "windows": [
                "E"
              ],
              "mac": [
                "E"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Enter"
            ],
            "description": "Open event details",
            "platforms": {
              "windows": [
                "Enter"
              ],
              "mac": [
                "Enter"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Backspace"
            ],
            "description": "Delete event",
            "platforms": {
              "windows": [
                "Backspace"
              ],
              "mac": [
                "Backspace"
              ]
            }
          }
        ]
      },
      {
        "title": "View Shortcuts",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Alt (Option)",
              "1"
            ],
            "description": "Day view",
            "platforms": {
              "windows": [
                "Alt (Option)",
                "1"
              ],
              "mac": [
                "\u2325 (Option)",
                "1"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Alt (Option)",
              "2"
            ],
            "description": "Week view",
            "platforms": {
              "windows": [
                "Alt (Option)",
                "2"
              ],
              "mac": [
                "\u2325 (Option)",
                "2"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Alt (Option)",
              "3"
            ],
            "description": "Month view",
            "platforms": {
              "windows": [
                "Alt (Option)",
                "3"
              ],
              "mac": [
                "\u2325 (Option)",
                "3"
              ]
            }
          }
        ]
      }
    ]
  },
 "google-keep": {
  id: "google-keep",
  name: "Google Keep",
  shortcutpageName: "Google Keep Keyboard Shortcuts",
  icon: "/icons/websites/google-keep.svg",
  description: "Mastering keyboard shortcuts in Google Keep can enhance your note-taking and organization by enabling quicker navigation and list management on both Windows and macOS.",
  metadescription: "Check all Google Keep Keyboard Shortcuts to take notes efficiently. These Google Keep shortcuts are updated for MacOS and Windows OS.",
  platforms: ["windows", "macos"],
  featured: true,
    "groups": [
        {
            "title": "Navigation Shortcuts",
            "shortcuts": [
                {
                    "id": "1",
                    "keys": [
                        "j"
                    ],
                    "description": "Navigate to the next note",
                    "platforms": {
                        "windows": ["j"],
                        "mac": ["j"]
                    }
                },
                {
                    "id": "2",
                    "keys": [
                        "k"
                    ],
                    "description": "Navigate to the previous note",
                    "platforms": {
                        "windows": ["k"],
                        "mac": ["k"]
                    }
                },
                {
                    "id": "3",
                    "keys": [
                        "n"
                    ],
                    "description": "Navigate to the next list item",
                    "platforms": {
                        "windows": ["n"],
                        "mac": ["n"]
                    }
                },
                {
                    "id": "4",
                    "keys": [
                        "p"
                    ],
                    "description": "Navigate to the previous list item",
                    "platforms": {
                        "windows": ["p"],
                        "mac": ["p"]
                    }
                }
            ]
        },
        {
            "title": "Application Shortcuts",
            "shortcuts": [
                {
                    "id": "5",
                    "keys": [
                        "c"
                    ],
                    "description": "Compose a new note",
                    "platforms": {
                        "windows": ["c"],
                        "mac": ["c"]
                    }
                },
                {
                    "id": "6",
                    "keys": [
                        "l"
                    ],
                    "description": "Compose a new list",
                    "platforms": {
                        "windows": ["l"],
                        "mac": ["l"]
                    }
                },
                {
                    "id": "7",
                    "keys": [
                        "/"
                    ],
                    "description": "Search notes",
                    "platforms": {
                        "windows": ["/"],
                        "mac": ["/"]
                    }
                },
                {
                    "id": "8",
                    "keys": [
                        "Ctrl (Control) + A"
                    ],
                    "description": "Select all notes",
                    "platforms": {
                        "windows": ["Ctrl (Control) + A"],
                        "mac": ["⌘ (Command) + A"]
                    }
                },
                {
                    "id": "9",
                    "keys": [
                        "Ctrl (Control) + /",
                        "?"
                    ],
                    "description": "Open keyboard shortcut help",
                    "platforms": {
                        "windows": ["Ctrl (Control) + /", "?"],
                        "mac": ["⌘ (Command) + /", "?"]
                    }
                },
                {
                    "id": "10",
                    "keys": [
                        "@"
                    ],
                    "description": "Send feedback",
                    "platforms": {
                        "windows": ["@"],
                        "mac": ["@"]
                    }
                }
            ]
        },
        {
            "title": "Actions",
            "shortcuts": [
                {
                    "id": "11",
                    "keys": [
                        "e"
                    ],
                    "description": "Archive note",
                    "platforms": {
                        "windows": ["e"],
                        "mac": ["e"]
                    }
                },
                {
                    "id": "12",
                    "keys": [
                        "#"
                    ],
                    "description": "Trash note",
                    "platforms": {
                        "windows": ["#"],
                        "mac": ["#"]
                    }
                },
                {
                    "id": "13",
                    "keys": [
                        "f"
                    ],
                    "description": "Pin or unpin notes",
                    "platforms": {
                        "windows": ["f"],
                        "mac": ["f"]
                    }
                },
                {
                    "id": "14",
                    "keys": [
                        "x"
                    ],
                    "description": "Select note",
                    "platforms": {
                        "windows": ["x"],
                        "mac": ["x"]
                    }
                },
                {
                    "id": "15",
                    "keys": [
                        "Ctrl (Control) + G"
                    ],
                    "description": "Toggle between list and grid view",
                    "platforms": {
                        "windows": ["Ctrl (Control) + G"],
                        "mac": ["⌘ (Command) + G"]
                    }
                }
            ]
        },
        {
            "title": "Editor Shortcuts",
            "shortcuts": [
                {
                    "id": "16",
                    "keys": [
                        "Esc"
                    ],
                    "description": "Finish editing",
                    "platforms": {
                        "windows": ["Esc"],
                        "mac": ["Esc"]
                    }
                },
                {
                    "id": "17",
                    "keys": [
                        "Ctrl (Control) + Enter"
                    ],
                    "description": "Finish editing",
                    "platforms": {
                        "windows": ["Ctrl (Control) + Enter"],
                        "mac": ["⌘ (Command) + Enter"]
                    }
                },
                {
                    "id": "18",
                    "keys": [
                        "Ctrl (Control) + Shift + 8"
                    ],
                    "description": "Toggle checkboxes",
                    "platforms": {
                        "windows": ["Ctrl (Control) + Shift + 8"],
                        "mac": ["⌘ (Command) + Shift + 8"]
                    }
                },
                {
                    "id": "19",
                    "keys": [
                        "Ctrl (Control) + ]",
                        "Ctrl (Control) + ["
                    ],
                    "description": "Indent/dedent list item",
                    "platforms": {
                        "windows": ["Ctrl (Control) + ]", "Ctrl (Control) + ["],
                        "mac": ["⌘ (Command) + ]", "⌘ (Command) + ["]
                    }
                }
            ]
        }
    ]
  },
  "google-photos": {
    id: "google-photos",
    name: "Google Photos",
    shortcutpageName: "Google Photos Keyboard Shortcuts",
    icon: "/icons/websites/google-photos.svg",
    description: "Mastering keyboard shortcuts in Google Photos can streamline photo management by enabling faster navigation, editing, and organization on both Windows and macOS.",
    metadescription: "Check all Google Photos Keyboard Shortcuts to manage your photos efficiently. These Google Photos shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "J"
            ],
            "description": "Move to the next item in the stream",
            "platforms": {
              "windows": [
                "J"
              ],
              "mac": [
                "J"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "K"
            ],
            "description": "Move to the previous item in the stream",
            "platforms": {
              "windows": [
                "K"
              ],
              "mac": [
                "K"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "E"
            ],
            "description": "Edit the current photo",
            "platforms": {
              "windows": [
                "E"
              ],
              "mac": [
                "E"
              ]
            }
          }
        ]
      },
      {
        "title": "View Shortcuts",
        "shortcuts": [
          {
            "id": "4",
            "keys": [
              "O"
            ],
            "description": "Open the current photo in a lightbox view",
            "platforms": {
              "windows": [
                "O"
              ],
              "mac": [
                "O"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "C"
            ],
            "description": "Add the current photo to an album",
            "platforms": {
              "windows": [
                "C"
              ],
              "mac": [
                "C"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-maps": {
    id: "google-maps",
    name: "Google Maps",
    shortcutpageName: "Google Maps Keyboard Shortcuts",
    icon: "/icons/websites/google-map.svg",
    description: "Mastering keyboard shortcuts in Google Maps can improve navigation and map management by enabling quicker search, zooming, and route planning on both Windows and macOS.",
    metadescription: "Check all Google Maps Keyboard Shortcuts to navigate efficiently. These Google Maps shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,

    "groups": [
      {
        "title": "Map Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "\u2191 (Up Arrow)"
            ],
            "description": "Move map upwards",
            "platforms": {
              "windows": [
                "\u2191 (Up Arrow)"
              ],
              "mac": [
                "\u2191 (Up Arrow)"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "\u2193 (Down Arrow)"
            ],
            "description": "Move map downwards",
            "platforms": {
              "windows": [
                "\u2193 (Down Arrow)"
              ],
              "mac": [
                "\u2193 (Down Arrow)"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "\u2190 (Left Arrow)"
            ],
            "description": "Move map to the left",
            "platforms": {
              "windows": [
                "\u2190 (Left Arrow)"
              ],
              "mac": [
                "\u2190 (Left Arrow)"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "\u2192 (Right Arrow)"
            ],
            "description": "Move map to the right",
            "platforms": {
              "windows": [
                "\u2192 (Right Arrow)"
              ],
              "mac": [
                "\u2192 (Right Arrow)"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "\u21e7 (Shift)",
              "M"
            ],
            "description": "Toggle map view",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "\u21e7 (Shift)",
                "M"
              ],
              "mac": [
                "\u2318 (Command)",
                "\u21e7 (Shift)",
                "M"
              ]
            }
          }
        ]
      },
      {
        "title": "Map Zoom",
        "shortcuts": [
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "+"
            ],
            "description": "Zoom in",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "+"
              ],
              "mac": [
                "\u2318 (Command)",
                "+"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "-"
            ],
            "description": "Zoom out",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "-"
              ],
              "mac": [
                "\u2318 (Command)",
                "-"
              ]
            }
          }
        ]
      },
      {
        "title": "Search and Directions",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Focus in search bar",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "F"
              ],
              "mac": [
                "\u2318 (Command)",
                "F"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Enter"
            ],
            "description": "Search for direction",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Enter"
              ],
              "mac": [
                "\u2318 (Command)",
                "Enter"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-meet": {
    id: "google-meet",
    name: "Google Meet",
    shortcutpageName: "Google Meet Keyboard Shortcuts",
    icon: "/icons/websites/google-meet-logo.svg",
    description: "Mastering keyboard shortcuts in Google Meet can enhance your video conferencing experience by enabling quick navigation, muting, and screen sharing on both Windows and macOS.",
    metadescription: "Check all Google Meet Keyboard Shortcuts to make meetings efficient. These Google Meet shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "General Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Mute or unmute microphone",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "D"
              ],
              "mac": [
                "\u2318 (Command)",
                "D"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "E"
            ],
            "description": "Turn camera on or off",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "E"
              ],
              "mac": [
                "\u2318 (Command)",
                "E"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Enter or exit full screen mode",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "F"
              ],
              "mac": [
                "\u2318 (Command)",
                "F"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "M"
            ],
            "description": "Turn chat on or off",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "M"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "M"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "A"
            ],
            "description": "Turn captions on or off",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "A"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "Shift",
              "L"
            ],
            "description": "Turn tiled layout on or off",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "Shift",
                "L"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "Shift",
                "L"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "C"
            ],
            "description": "Turn screen sharing on or off",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "C"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "C"
              ]
            }
          }
        ]
      },
      {
        "title": "Meeting Controls",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "D"
            ],
            "description": "Open settings",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "D"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "D"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Alt",
              "Shift",
              "1"
            ],
            "description": "Jump to present chat",
            "platforms": {
              "windows": [
                "Alt",
                "Shift",
                "1"
              ],
              "mac": [
                "Option",
                "Shift",
                "1"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Alt",
              "Shift",
              "2"
            ],
            "description": "Jump to present participants",
            "platforms": {
              "windows": [
                "Alt",
                "Shift",
                "2"
              ],
              "mac": [
                "Option",
                "Shift",
                "2"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Alt",
              "Shift",
              "3"
            ],
            "description": "Jump to present polls",
            "platforms": {
              "windows": [
                "Alt",
                "Shift",
                "3"
              ],
              "mac": [
                "Option",
                "Shift",
                "3"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-news": {
    id: "google-news",
    name: "Google News",
    shortcutpageName: "Google News Keyboard Shortcuts",
    icon: "/icons/websites/google-news.svg",
    description: "Mastering keyboard shortcuts in Google News can make staying informed more efficient by enabling faster navigation, article saving, and section browsing on both Windows and macOS.",
    metadescription: "Check all Google News Keyboard Shortcuts to stay updated effortlessly. These Google News shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "E"
            ],
            "description": "Open Explore tab",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "E"
              ],
              "mac": [
                "\u2318 (Command)",
                "E"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "H"
            ],
            "description": "Open Saved tab",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "H"
              ],
              "mac": [
                "\u2318 (Command)",
                "H"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Open Settings tab",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "S"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Focus on search bar",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "F"
              ],
              "mac": [
                "\u2318 (Command)",
                "F"
              ]
            }
          }
        ]
      },
      {
        "title": "Article Reading",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "Up Arrow"
            ],
            "description": "Go to the previous article",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Up Arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Up Arrow"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Down Arrow"
            ],
            "description": "Go to the next article",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Down Arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Down Arrow"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-forms": {
    id: "google-forms",
    name: "Google Forms",
    shortcutpageName: "Google Forms Keyboard Shortcuts",
    icon: "/icons/websites/google-forms-logo.svg",
    description: "Mastering keyboard shortcuts in Google Forms can streamline form creation by enabling faster question editing, navigation, and response management on both Windows and macOS.",
    metadescription: "Check all Google Forms Keyboard Shortcuts to create forms efficiently. These Google Forms shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Form Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Tab"
            ],
            "description": "Move to the next field in the form",
            "platforms": {
              "windows": [
                "Tab"
              ],
              "mac": [
                "Tab"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Shift",
              "Tab"
            ],
            "description": "Move to the previous field in the form",
            "platforms": {
              "windows": [
                "Shift",
                "Tab"
              ],
              "mac": [
                "Shift",
                "Tab"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Enter"
            ],
            "description": "Submit the form",
            "platforms": {
              "windows": [
                "Enter"
              ],
              "mac": [
                "Enter"
              ]
            }
          }
        ]
      },
      {
        "title": "Question Shortcuts",
        "shortcuts": [
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "7"
            ],
            "description": "Add a checkbox question",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "7"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "7"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "8"
            ],
            "description": "Add a multiple-choice question",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "8"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "8"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "9"
            ],
            "description": "Add a dropdown question",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "9"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "9"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "L"
            ],
            "description": "Add a paragraph question",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "L"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "L"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-workspace-admin-panel": {
    id: "google-workspace-admin-panel",
    name: "Google Workspace Admin Panel",
    shortcutpageName: "Google Workspace Admin Panel Keyboard Shortcuts",
    icon: "/icons/websites/google-workspace-admin-logo.svg",
    description: "Mastering keyboard shortcuts in Google Workspace Admin Panel can simplify admin tasks by enabling quicker navigation, user management, and settings adjustments on both Windows and macOS.",
    metadescription: "Check all Google Workspace Admin Panel Keyboard Shortcuts to manage your workspace efficiently. These shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "M"
            ],
            "description": "Go to the Admin home page",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "M"
              ],
              "mac": [
                "\u2318 (Command)",
                "M"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Go to the Directory page",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "D"
              ],
              "mac": [
                "\u2318 (Command)",
                "D"
              ]
            }
          }
        ]
      },
      {
        "title": "User Management Shortcuts",
        "shortcuts": [
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "U"
            ],
            "description": "Navigate to User management",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "U"
              ],
              "mac": [
                "\u2318 (Command)",
                "U"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "P"
            ],
            "description": "Navigate to Group Management",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "P"
              ],
              "mac": [
                "\u2318 (Command)",
                "P"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-tasks": {
    id: "google-tasks",
    name: "Google Tasks",
    shortcutpageName: "Google Tasks Keyboard Shortcuts",
    icon: "/icons/websites/google-tasks-logo.svg",
    description: "Mastering keyboard shortcuts in Google Tasks can help you stay organized by enabling quicker navigation, task creation, and management on both Windows and macOS.",
    metadescription: "Check all Google Tasks Keyboard Shortcuts to stay productive. These Google Tasks shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Task Management",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Create a new task",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "N"
              ],
              "mac": [
                "\u2318 (Command)",
                "N"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "N"
            ],
            "description": "Create a new subtask",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "N"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "N"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "Up arrow"
            ],
            "description": "Move task up",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Up arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Up arrow"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "Down arrow"
            ],
            "description": "Move task down",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Down arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Down arrow"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Delete task",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "D"
              ],
              "mac": [
                "\u2318 (Command)",
                "D"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "M"
            ],
            "description": "Switch List View",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "M"
              ],
              "mac": [
                "\u2318 (Command)",
                "M"
              ]
            }
          }
        ]
      },
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "Left arrow"
            ],
            "description": "Navigate to previous task",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Left arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Left arrow"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Right arrow"
            ],
            "description": "Navigate to next task",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Right arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Right arrow"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Enter"
            ],
            "description": "Complete task",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Enter"
              ],
              "mac": [
                "\u2318 (Command)",
                "Enter"
              ]
            }
          }
        ]
      }
    ]
  },
  "google-groups": {
    id: "google-groups",
    name: "Google Groups",
    shortcutpageName: "Google Groups Keyboard Shortcuts",
    icon: "/icons/websites/google-groups-logo.svg",
    description: "Mastering keyboard shortcuts in Google Groups can improve group management by enabling quicker navigation, post creation, and settings customization on both Windows and macOS.",
    metadescription: "Check all Google Groups Keyboard Shortcuts to manage groups effectively. These Google Groups shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "c"
            ],
            "description": "Compose a new message",
            "platforms": {
              "windows": [
                "c"
              ],
              "mac": [
                "c"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Shift",
              "i"
            ],
            "description": "Mark message as read / unread",
            "platforms": {
              "windows": [
                "Shift",
                "i"
              ],
              "mac": [
                "Shift",
                "i"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "r"
            ],
            "description": "Reply to the selected message",
            "platforms": {
              "windows": [
                "r"
              ],
              "mac": [
                "r"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "Enter"
            ],
            "description": "Send a message",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Enter"
              ],
              "mac": [
                "\u2318 (Command)",
                "Enter"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "k then n"
            ],
            "description": "Go to the next message",
            "platforms": {
              "windows": [
                "k then n"
              ],
              "mac": [
                "k then n"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "k then p"
            ],
            "description": "Go to the previous message",
            "platforms": {
              "windows": [
                "k then p"
              ],
              "mac": [
                "k then p"
              ]
            }
          }
        ]
      },
      {
        "title": "Searching Shortcuts",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "/"
            ],
            "description": "Focus on the search box",
            "platforms": {
              "windows": [
                "/"
              ],
              "mac": [
                "/"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "g then a"
            ],
            "description": "Go to 'All People' group",
            "platforms": {
              "windows": [
                "g then a"
              ],
              "mac": [
                "g then a"
              ]
            }
          }
        ]
      }
    ]
  },

};
