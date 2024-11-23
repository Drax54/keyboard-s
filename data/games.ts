// data/games.ts
import { Application } from "@/types/shortcut";

export const games: { [key: string]: Application } = {
  "minecraft": {
    "id": "minecraft",
    "name": "Minecraft",
    "icon": "/icons/games/minecraft.svg",
    "description": "Shortcuts for Minecraft (Java Edition) - Updated for MacOS and Windows OS",
    "platforms": ["windows", "macos"],
    "featured": true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"],
              "mac": ["⌘", "P"]
            }
          },
          {
            "id": "2",
            "keys": ["S"],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "3",
            "keys": ["A"],
            "description": "Move left",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Move right",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "6",
            "keys": ["Ctrl", "+", "W"],
            "description": "Sprint",
            "platforms": {
              "windows": ["Ctrl", "+", "W"],
              "mac": ["⌘", "+", "W"]
            }
          }
        ]
      },
      {
        "title": "Inventory and Hotbar",
        "shortcuts": [
          {
            "id": "7",
            "keys": ["E"],
            "description": "Open Inventory",
            "platforms": {
              "windows": ["E"],
              "mac": ["E"]
            }
          },
          {
            "id": "8",
            "keys": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            "description": "Select Hotbar slot",
            "platforms": {
              "windows": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
              "mac": ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
            }
          },
          {
            "id": "9",
            "keys": ["F"],
            "description": "Swap item in hand with off-hand",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "10",
            "keys": ["Q"],
            "description": "Drop item",
            "platforms": {
              "windows": ["Q"],
              "mac": ["Q"]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "11",
            "keys": ["Left Click"],
            "description": "Attack or break block",
            "platforms": {
              "windows": ["Left Click"],
              "mac": ["Left Click"]
            }
          },
          {
            "id": "12",
            "keys": ["Right Click"],
            "description": "Use item or place block",
            "platforms": {
              "windows": ["Right Click"],
              "mac": ["Right Click"]
            }
          }
        ]
      },
      {
        "title": "Camera and Controls",
        "shortcuts": [
          {
            "id": "13",
            "keys": ["F5"],
            "description": "Toggle perspective (first/third person)",
            "platforms": {
              "windows": ["F5"],
              "mac": ["F5"]
            }
          },
          {
            "id": "14",
            "keys": ["F1"],
            "description": "Toggle HUD visibility",
            "platforms": {
              "windows": ["F1"],
              "mac": ["F1"]
            }
          },
          {
            "id": "15",
            "keys": ["F3"],
            "description": "Debug screen",
            "platforms": {
              "windows": ["F3"],
              "mac": ["F3"]
            }
          },
          {
            "id": "16",
            "keys": ["Shift", "+", "F3"],
            "description": "Debug pie chart",
            "platforms": {
              "windows": ["Shift", "+", "F3"],
              "mac": ["Shift", "+", "F3"]
            }
          }
        ]
      },
      {
        "title": "Multiplayer",
        "shortcuts": [
          {
            "id": "17",
            "keys": ["T"],
            "description": "Open chat",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "18",
            "keys": ["/"],
            "description": "Open command window",
            "platforms": {
              "windows": ["/"],
              "mac": ["/"]
            }
          },
          {
            "id": "19",
            "keys": ["Tab"],
            "description": "List players",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          }
        ]
      }
    ]
  },
  valorant: {
    "id": "valorant",
    "name": "Valorant",
    "icon": "/icons/games/valorant.svg",
    "description": "Keyboard shortcuts for Valorant on Windows PC",
    "platforms": ["windows"],
    "featured": true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move Forward",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "2",
            "keys": ["S"],
            "description": "Move Backward",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "3",
            "keys": ["A"],
            "description": "Strafe Left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Strafe Right",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Left Shift"],
            "description": "Walk",
            "platforms": {
              "windows": ["Left Shift"]
            }
          },
          {
            "id": "6",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"]
            }
          },
          {
            "id": "7",
            "keys": ["Left Ctrl"],
            "description": "Crouch",
            "platforms": {
              "windows": ["Left Ctrl"]
            }
          }
        ]
      },
      {
        "title": "Equipment",
        "shortcuts": [
          {
            "id": "8",
            "keys": ["Left Mouse Button"],
            "description": "Fire",
            "platforms": {
              "windows": ["Left Mouse Button"]
            }
          },
          {
            "id": "9",
            "keys": ["Right Mouse Button"],
            "description": "Alternate Fire (Aim Down Sights)",
            "platforms": {
              "windows": ["Right Mouse Button"]
            }
          },
          {
            "id": "10",
            "keys": ["R"],
            "description": "Reload",
            "platforms": {
              "windows": ["R"]
            }
          },
          {
            "id": "11",
            "keys": ["1"],
            "description": "Equip Primary Weapon",
            "platforms": {
              "windows": ["1"]
            }
          },
          {
            "id": "12",
            "keys": ["2"],
            "description": "Equip Secondary Weapon",
            "platforms": {
              "windows": ["2"]
            }
          },
          {
            "id": "13",
            "keys": ["3"],
            "description": "Equip Melee Weapon",
            "platforms": {
              "windows": ["3"]
            }
          },
          {
            "id": "14",
            "keys": ["4"],
            "description": "Equip Spike",
            "platforms": {
              "windows": ["4"]
            }
          },
          {
            "id": "15",
            "keys": ["Mouse Wheel Up"],
            "description": "Cycle to Next Weapon",
            "platforms": {
              "windows": ["Mouse Wheel Up"]
            }
          },
          {
            "id": "16",
            "keys": ["Mouse Wheel Down"],
            "description": "Cycle to Previous Weapon",
            "platforms": {
              "windows": ["Mouse Wheel Down"]
            }
          },
          {
            "id": "17",
            "keys": ["G"],
            "description": "Drop Equipped Weapon",
            "platforms": {
              "windows": ["G"]
            }
          },
          {
            "id": "18",
            "keys": ["Y"],
            "description": "Inspect Weapon",
            "platforms": {
              "windows": ["Y"]
            }
          },
          {
            "id": "19",
            "keys": ["F"],
            "description": "Use Object",
            "platforms": {
              "windows": ["F"]
            }
          },
          {
            "id": "20",
            "keys": ["Q"],
            "description": "Use/Equip Ability 1",
            "platforms": {
              "windows": ["Q"]
            }
          },
          {
            "id": "21",
            "keys": ["E"],
            "description": "Use/Equip Ability 2",
            "platforms": {
              "windows": ["E"]
            }
          },
          {
            "id": "22",
            "keys": ["C"],
            "description": "Use/Equip Ability 3",
            "platforms": {
              "windows": ["C"]
            }
          },
          {
            "id": "23",
            "keys": ["X"],
            "description": "Use/Equip Ultimate Ability",
            "platforms": {
              "windows": ["X"]
            }
          },
          {
            "id": "24",
            "keys": ["T"],
            "description": "Use Spray",
            "platforms": {
              "windows": ["T"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "25",
            "keys": ["U"],
            "description": "Party Voice Push-to-Talk",
            "platforms": {
              "windows": ["U"]
            }
          },
          {
            "id": "26",
            "keys": ["V"],
            "description": "Team Voice Push-to-Talk",
            "platforms": {
              "windows": ["V"]
            }
          },
          {
            "id": "27",
            "keys": ["Z"],
            "description": "Ping (Tap) / Ping Wheel (Hold)",
            "platforms": {
              "windows": ["Z"]
            }
          },
          {
            "id": "28",
            "keys": ["."],
            "description": "Radio Commands Menu Index",
            "platforms": {
              "windows": ["."]
            }
          },
          {
            "id": "29",
            "keys": [","],
            "description": "Radio Command Wheel Index",
            "platforms": {
              "windows": [","]
            }
          }
        ]
      },
      {
        "title": "Interface",
        "shortcuts": [
          {
            "id": "30",
            "keys": ["Left Alt"],
            "description": "Show Teammate Loadouts (Hold)",
            "platforms": {
              "windows": ["Left Alt"]
            }
          },
          {
            "id": "31",
            "keys": ["N"],
            "description": "Combat Report",
            "platforms": {
              "windows": ["N"]
            }
          },
          {
            "id": "32",
            "keys": ["B"],
            "description": "Open Buy Menu",
            "platforms": {
              "windows": ["B"]
            }
          },
          {
            "id": "33",
            "keys": ["M"],
            "description": "Open Map",
            "platforms": {
              "windows": ["M"]
            }
          },
          {
            "id": "34",
            "keys": ["Tab"],
            "description": "Show Scoreboard (Hold)",
            "platforms": {
              "windows": ["Tab"]
            }
          },
          {
            "id": "35",
            "keys": ["Enter"],
            "description": "Open Chat (Team)",
            "platforms": {
              "windows": ["Enter"]
            }
          },
          {
            "id": "36",
            "keys": ["Shift + Enter"],
            "description": "Open Chat (All)",
            "platforms": {
              "windows": ["Shift", "+", "Enter"]
            }
          },
          {
            "id": "37",
            "keys": ["Ctrl + Enter"],
            "description": "Open Chat (Party)",
            "platforms": {
              "windows": ["Ctrl", "+", "Enter"]
            }
          },
          {
            "id": "38",
            "keys": ["Esc"],
            "description": "Close Menu or Interface",
            "platforms": {
              "windows": ["Esc"]
            }
          }
        ]
      }
    ]
  },
  csgo: {
    "id": "csgo",
    "name": "Counter-Strike: Global Offensive",
    "icon": "/icons/games/Counter-Strike-2.svg",
    "description": "Keyboard shortcuts for Counter-Strike: Global Offensive (CS:GO) - applicable for Windows and macOS.",
    "platforms": ["windows", "macos"],
    "featured": true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"],
              "mac": ["W"]
            }
          },
          {
            "id": "2",
            "keys": ["S"],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "3",
            "keys": ["A"],
            "description": "Move left (strafe)",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Move right (strafe)",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Shift"],
            "description": "Walk",
            "platforms": {
              "windows": ["Shift"],
              "mac": ["Shift"]
            }
          },
          {
            "id": "6",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "7",
            "keys": ["Ctrl"],
            "description": "Duck",
            "platforms": {
              "windows": ["Ctrl"],
              "mac": ["Ctrl"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "8",
            "keys": ["K"],
            "description": "Use voice communication",
            "platforms": {
              "windows": ["K"],
              "mac": ["K"]
            }
          },
          {
            "id": "9",
            "keys": ["Z"],
            "description": "Standard radio messages",
            "platforms": {
              "windows": ["Z"],
              "mac": ["Z"]
            }
          },
          {
            "id": "10",
            "keys": ["X"],
            "description": "Group radio messages",
            "platforms": {
              "windows": ["X"],
              "mac": ["X"]
            }
          },
          {
            "id": "11",
            "keys": ["C"],
            "description": "Report radio messages",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          },
          {
            "id": "12",
            "keys": ["Y"],
            "description": "Chat message",
            "platforms": {
              "windows": ["Y"],
              "mac": ["Y"]
            }
          },
          {
            "id": "13",
            "keys": ["U"],
            "description": "Team message",
            "platforms": {
              "windows": ["U"],
              "mac": ["U"]
            }
          }
        ]
      },
      {
        "title": "Menu",
        "shortcuts": [
          {
            "id": "14",
            "keys": ["B"],
            "description": "Buy menu",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          },
          {
            "id": "15",
            "keys": ["F1"],
            "description": "Automatically buy equipment",
            "platforms": {
              "windows": ["F1"],
              "mac": ["F1"]
            }
          },
          {
            "id": "16",
            "keys": ["F2"],
            "description": "Re-buy previous equipment",
            "platforms": {
              "windows": ["F2"],
              "mac": ["F2"]
            }
          },
          {
            "id": "17",
            "keys": ["Tab"],
            "description": "Display multiplayer scores",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "18",
            "keys": ["M"],
            "description": "Select team",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "19",
            "keys": ["Mouse1"],
            "description": "Fire",
            "platforms": {
              "windows": ["Mouse1"],
              "mac": ["Mouse1"]
            }
          },
          {
            "id": "20",
            "keys": ["Mouse2"],
            "description": "Weapon special function",
            "platforms": {
              "windows": ["Mouse2"],
              "mac": ["Mouse2"]
            }
          },
          {
            "id": "21",
            "keys": ["R"],
            "description": "Reload weapon",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "22",
            "keys": ["Mouse Wheel Up"],
            "description": "Previous weapon",
            "platforms": {
              "windows": ["Mouse Wheel Up"],
              "mac": ["Mouse Wheel Up"]
            }
          },
          {
            "id": "23",
            "keys": ["Mouse Wheel Down"],
            "description": "Next weapon",
            "platforms": {
              "windows": ["Mouse Wheel Down"],
              "mac": ["Mouse Wheel Down"]
            }
          },
          {
            "id": "24",
            "keys": ["G"],
            "description": "Drop current weapon",
            "platforms": {
              "windows": ["G"],
              "mac": ["G"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "25",
            "keys": ["E"],
            "description": "Use items",
            "platforms": {
              "windows": ["E"],
              "mac": ["E"]
            }
          },
          {
            "id": "26",
            "keys": ["F12"],
            "description": "Take a screenshot",
            "platforms": {
              "windows": ["F12"],
              "mac": ["F12"]
            }
          },
          {
            "id": "27",
            "keys": ["F"],
            "description": "Inspect weapon",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "28",
            "keys": ["T"],
            "description": "Spray logo",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "29",
            "keys": ["~"],
            "description": "Open developer console",
            "platforms": {
              "windows": ["~"],
              "mac": ["~"]
            }
          }
        ]
      },
      {
        "title": "Weapon Slots",
        "shortcuts": [
          {
            "id": "30",
            "keys": ["1"],
            "description": "Primary weapon",
            "platforms": {
              "windows": ["1"],
              "mac": ["1"]
            }
          },
          {
            "id": "31",
            "keys": ["2"],
            "description": "Secondary weapon",
            "platforms": {
              "windows": ["2"],
              "mac": ["2"]
            }
          },
          {
            "id": "32",
            "keys": ["3"],
            "description": "Knife or melee weapon",
            "platforms": {
              "windows": ["3"],
              "mac": ["3"]
            }
          },
          {
            "id": "33",
            "keys": ["4"],
            "description": "Grenade",
            "platforms": {
              "windows": ["4"],
              "mac": ["4"]
            }
          },
          {
            "id": "34",
            "keys": ["5"],
            "description": "Bomb (if carrying)",
            "platforms": {
              "windows": ["5"],
              "mac": ["5"]
            }
          }
        ]
      }
    ]
  },
  fortnite: {
    "id": "fortnite",
    "name": "Fortnite",
    "icon": "/icons/games/Fortnite.svg",
    "description": "Keyboard shortcuts for Fortnite - applicable for Windows and macOS.",
    "platforms": ["windows", "macos"],
    "featured": true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"],
              "mac": ["W"]
            }
          },
          {
            "id": "2",
            "keys": ["A"],
            "description": "Move left",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "3",
            "keys": ["S"],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Move right",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "6",
            "keys": ["Left Shift"],
            "description": "Sprint",
            "platforms": {
              "windows": ["Left Shift"],
              "mac": ["Left Shift"]
            }
          },
          {
            "id": "7",
            "keys": ["Left Ctrl"],
            "description": "Crouch",
            "platforms": {
              "windows": ["Left Ctrl"],
              "mac": ["Left Ctrl"]
            }
          },
          {
            "id": "8",
            "keys": ["="],
            "description": "Auto run",
            "platforms": {
              "windows": ["="],
              "mac": ["="]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "9",
            "keys": ["Left Mouse Button"],
            "description": "Fire",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          },
          {
            "id": "10",
            "keys": ["Right Mouse Button"],
            "description": "Aim",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "11",
            "keys": ["R"],
            "description": "Reload",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "12",
            "keys": ["E"],
            "description": "Use",
            "platforms": {
              "windows": ["E"],
              "mac": ["E"]
            }
          },
          {
            "id": "13",
            "keys": ["1"],
            "description": "Harvesting tool",
            "platforms": {
              "windows": ["1"],
              "mac": ["1"]
            }
          },
          {
            "id": "14",
            "keys": ["2"],
            "description": "Weapon slot 1",
            "platforms": {
              "windows": ["2"],
              "mac": ["2"]
            }
          },
          {
            "id": "15",
            "keys": ["3"],
            "description": "Weapon slot 2",
            "platforms": {
              "windows": ["3"],
              "mac": ["3"]
            }
          },
          {
            "id": "16",
            "keys": ["4"],
            "description": "Weapon slot 3",
            "platforms": {
              "windows": ["4"],
              "mac": ["4"]
            }
          },
          {
            "id": "17",
            "keys": ["5"],
            "description": "Weapon slot 4",
            "platforms": {
              "windows": ["5"],
              "mac": ["5"]
            }
          },
          {
            "id": "18",
            "keys": ["6"],
            "description": "Weapon slot 5",
            "platforms": {
              "windows": ["6"],
              "mac": ["6"]
            }
          }
        ]
      },
      {
        "title": "Building",
        "shortcuts": [
          {
            "id": "19",
            "keys": ["F1"],
            "description": "Wall",
            "platforms": {
              "windows": ["F1"],
              "mac": ["F1"]
            }
          },
          {
            "id": "20",
            "keys": ["F2"],
            "description": "Floor",
            "platforms": {
              "windows": ["F2"],
              "mac": ["F2"]
            }
          },
          {
            "id": "21",
            "keys": ["F3"],
            "description": "Stairs",
            "platforms": {
              "windows": ["F3"],
              "mac": ["F3"]
            }
          },
          {
            "id": "22",
            "keys": ["F4"],
            "description": "Roof",
            "platforms": {
              "windows": ["F4"],
              "mac": ["F4"]
            }
          },
          {
            "id": "23",
            "keys": ["F5"],
            "description": "Trap",
            "platforms": {
              "windows": ["F5"],
              "mac": ["F5"]
            }
          },
          {
            "id": "24",
            "keys": ["Left Mouse Button"],
            "description": "Place building",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          },
          {
            "id": "25",
            "keys": ["F"],
            "description": "Repair/Upgrade",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "26",
            "keys": ["R"],
            "description": "Rotate building",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "27",
            "keys": ["Right Mouse Button"],
            "description": "Change building material",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "28",
            "keys": ["G"],
            "description": "Building edit",
            "platforms": {
              "windows": ["G"],
              "mac": ["G"]
            }
          },
          {
            "id": "29",
            "keys": ["Scroll Wheel"],
            "description": "Rotate through building pieces",
            "platforms": {
              "windows": ["Scroll Wheel"],
              "mac": ["Scroll Wheel"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "30",
            "keys": ["B"],
            "description": "Emote",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          },
          {
            "id": "31",
            "keys": ["M"],
            "description": "Map",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "32",
            "keys": ["T"],
            "description": "Chat",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "33",
            "keys": ["Y"],
            "description": "Team chat",
            "platforms": {
              "windows": ["Y"],
              "mac": ["Y"]
            }
          },
          {
            "id": "34",
            "keys": ["Push-to-Talk Key"],
            "description": "Voice chat",
            "platforms": {
              "windows": ["Default (bound in settings)"],
              "mac": ["Default (bound in settings)"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "35",
            "keys": ["P"],
            "description": "Open settings",
            "platforms": {
              "windows": ["P"],
              "mac": ["P"]
            }
          },
          {
            "id": "36",
            "keys": ["Esc"],
            "description": "Open game menu",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "37",
            "keys": ["Tab"],
            "description": "View inventory",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "38",
            "keys": ["F12"],
            "description": "Take screenshot (if bound to OS function)",
            "platforms": {
              "windows": ["F12"],
              "mac": ["F12"]
            }
          }
        ]
      }
    ]
  },
  "world-of-warcraft": {
    "id": "world-of-warcraft",
    "name": "World of Warcraft",
    "icon": "/icons/games/World-of-Warcraft.svg",
    "description": "Shortcuts for World of Warcraft (WoW) - Default keybindings for Windows and macOS",
    "platforms": ["windows", "macos"],
    "featured": true,
    "groups": [
      {
        "title": "Basic Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"],
              "mac": ["W"]
            }
          },
          {
            "id": "2",
            "keys": ["S"],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "3",
            "keys": ["A"],
            "description": "Turn left",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Turn right",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "6",
            "keys": ["Num Lock"],
            "description": "Toggle auto-run",
            "platforms": {
              "windows": ["Num Lock"],
              "mac": ["Num Lock"]
            }
          }
        ]
      },
      {
        "title": "Camera Controls",
        "shortcuts": [
          {
            "id": "7",
            "keys": ["Mouse Wheel"],
            "description": "Zoom camera in/out",
            "platforms": {
              "windows": ["Mouse Wheel"],
              "mac": ["Mouse Wheel"]
            }
          },
          {
            "id": "8",
            "keys": ["Right Mouse Button"],
            "description": "Freely move camera",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "9",
            "keys": ["Left Mouse Button"],
            "description": "Select target or interact",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          }
        ]
      },
      {
        "title": "Action Bar",
        "shortcuts": [
          {
            "id": "10",
            "keys": ["1"],
            "description": "Use Action Bar slot 1",
            "platforms": {
              "windows": ["1"],
              "mac": ["1"]
            }
          },
          {
            "id": "11",
            "keys": ["2"],
            "description": "Use Action Bar slot 2",
            "platforms": {
              "windows": ["2"],
              "mac": ["2"]
            }
          },
          {
            "id": "12",
            "keys": ["Shift+1"],
            "description": "Switch to Action Bar 1",
            "platforms": {
              "windows": ["Shift", "+", "1"],
              "mac": ["⌘", "+", "1"]
            }
          }
        ]
      },
      {
        "title": "Targeting",
        "shortcuts": [
          {
            "id": "13",
            "keys": ["Tab"],
            "description": "Target nearest enemy",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "14",
            "keys": ["F"],
            "description": "Assist target",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "15",
            "keys": ["Ctrl+Tab"],
            "description": "Target nearest friendly player",
            "platforms": {
              "windows": ["Ctrl", "+", "Tab"],
              "mac": ["⌘", "+", "Tab"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "16",
            "keys": ["Enter"],
            "description": "Open chat",
            "platforms": {
              "windows": ["Enter"],
              "mac": ["Enter"]
            }
          },
          {
            "id": "17",
            "keys": ["R"],
            "description": "Reply to last whisper",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "18",
            "keys": ["Shift+Enter"],
            "description": "Chat in /yell",
            "platforms": {
              "windows": ["Shift", "+", "Enter"],
              "mac": ["⌘", "+", "Enter"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "19",
            "keys": ["B"],
            "description": "Open all bags",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          },
          {
            "id": "20",
            "keys": ["I"],
            "description": "Open Dungeon Finder",
            "platforms": {
              "windows": ["I"],
              "mac": ["I"]
            }
          },
          {
            "id": "21",
            "keys": ["M"],
            "description": "Open world map",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "22",
            "keys": ["Shift+P"],
            "description": "Open Mount and Pet Journal",
            "platforms": {
              "windows": ["Shift", "+", "P"],
              "mac": ["⌘", "+", "P"]
            }
          }
        ]
      }
    ]
  },

};