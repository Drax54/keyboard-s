


// import { Application } from "@/types/shortcut";

import { CategoryItems } from "@/data/types";

// data/games.ts

export const games: CategoryItems = {
  "minecraft": {
    id: "minecraft",
    name: "Minecraft",
    shortcutpageName: "45+ Minecraft Keyboard Shortcuts",
    icon: "/icons/games/minecraft.svg",
    description: "Mastering keyboard shortcuts in Minecraft (Java Edition) can enhance your gameplay experience by enabling quick access to commands, inventory, and navigation on both Windows and macOS.",
    metadescription: "Check all Minecraft Keyboard Shortcuts to play more efficiently. These Minecraft shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
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
  "valorant": {
    id: "valorant",
    name: "Valorant",
    shortcutpageName: "30+ Valorant Keyboard Shortcuts",
    icon: "/icons/games/valorant.svg",
    description: "Mastering keyboard shortcuts in Valorant can optimize your gameplay by providing quick access to actions like abilities, weapon control, and communication on Windows PC.",
    metadescription: "Check all Valorant Keyboard Shortcuts to enhance your gameplay. These Valorant shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
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
              "windows": ["Shift + Enter"]
            }
          },
          {
            "id": "37",
            "keys": ["Ctrl + Enter"],
            "description": "Open Chat (Party)",
            "platforms": {
              "windows": ["Ctrl + Enter"]
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
  "csgo": {
    id: "csgo",
    name: "Counter-Strike: Global Offensive",
    shortcutpageName: "Most Used CS:GO Keyboard Shortcuts",
    icon: "/icons/games/Counter-Strike-2.svg",
    description: "Mastering keyboard shortcuts in Counter-Strike: Global Offensive (CS:GO) can improve your gameplay by enabling efficient control over weapons, communication, and movements on both Windows and macOS.",
    metadescription: "Check all CS:GO Keyboard Shortcuts to play like a pro. These Counter-Strike: Global Offensive shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
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
  "fortnite": {
    id: "fortnite",
    name: "Fortnite",
    shortcutpageName: "Fortnite Game Keyboard Shortcuts",
    icon: "/icons/games/Fortnite.svg",
    description: "Mastering keyboard shortcuts in Fortnite can enhance your gameplay by enabling quick actions like building, weapon switching, and communication on both Windows and macOS.",
    metadescription: "Check all Fortnite Keyboard Shortcuts to build and battle efficiently. These Fortnite shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
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
          },
          {
            "id": "19",
            "keys": ["Q"],
            "description": "Quick switch to last weapon used",
            "platforms": {
              "windows": ["Q"],
              "mac": ["Q"]
            }
          },
          {
            "id": "20",
            "keys": ["Middle Mouse Button"],
            "description": "Ping",
            "platforms": {
              "windows": ["Middle Mouse Button"],
              "mac": ["Middle Mouse Button"]
            }
          }
        ]
      },
      {
        "title": "Building",
        "shortcuts": [
          {
            "id": "21",
            "keys": ["F1"],
            "description": "Wall",
            "platforms": {
              "windows": ["F1"],
              "mac": ["F1"]
            }
          },
          {
            "id": "22",
            "keys": ["F2"],
            "description": "Floor",
            "platforms": {
              "windows": ["F2"],
              "mac": ["F2"]
            }
          },
          {
            "id": "23",
            "keys": ["F3"],
            "description": "Stairs",
            "platforms": {
              "windows": ["F3"],
              "mac": ["F3"]
            }
          },
          {
            "id": "24",
            "keys": ["F4"],
            "description": "Roof",
            "platforms": {
              "windows": ["F4"],
              "mac": ["F4"]
            }
          },
          {
            "id": "25",
            "keys": ["F5"],
            "description": "Trap",
            "platforms": {
              "windows": ["F5"],
              "mac": ["F5"]
            }
          },
          {
            "id": "26",
            "keys": ["Left Mouse Button"],
            "description": "Place building",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          },
          {
            "id": "27",
            "keys": ["R"],
            "description": "Rotate building",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "28",
            "keys": ["G"],
            "description": "Edit building",
            "platforms": {
              "windows": ["G"],
              "mac": ["G"]
            }
          },
          {
            "id": "29",
            "keys": ["Right Mouse Button"],
            "description": "Change building material",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "30",
            "keys": ["C"],
            "description": "Copy building piece",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "31",
            "keys": ["B"],
            "description": "Emote",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          },
          {
            "id": "32",
            "keys": ["M"],
            "description": "Map",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "33",
            "keys": ["T"],
            "description": "Chat",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "34",
            "keys": ["Y"],
            "description": "Team chat",
            "platforms": {
              "windows": ["Y"],
              "mac": ["Y"]
            }
          },
          {
            "id": "35",
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
            "id": "36",
            "keys": ["P"],
            "description": "Open settings",
            "platforms": {
              "windows": ["P"],
              "mac": ["P"]
            }
          },
          {
            "id": "37",
            "keys": ["Esc"],
            "description": "Open game menu",
            "platforms": {
              "windows": ["Esc"],
              "mac": ["Esc"]
            }
          },
          {
            "id": "38",
            "keys": ["Tab"],
            "description": "View inventory",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "39",
            "keys": ["F12"],
            "description": "Take screenshot",
            "platforms": {
              "windows": ["F12"],
              "mac": ["F12"]
            }
          },
          {
            "id": "40",
            "keys": ["V"],
            "description": "Toggle perspective",
            "platforms": {
              "windows": ["V"],
              "mac": ["V"]
            }
          }
        ]
      }
    ]
  },
  "world-of-warcraft": {
    id: "world-of-warcraft",
    name: "World of Warcraft",
    shortcutpageName: "World of Warcraft (WoW) 2024 Keyboard Shortcuts",
    icon: "/icons/games/World-of-Warcraft.svg",
    description: "Mastering keyboard shortcuts in World of Warcraft (WoW) can enhance your gameplay experience by enabling efficient movement, combat, and interaction on both Windows and macOS.",
    metadescription: "Check all World of Warcraft Keyboard Shortcuts to play efficiently. These WoW shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
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
          },
          {
            "id": "7",
            "keys": ["Q"],
            "description": "Strafe left",
            "platforms": {
              "windows": ["Q"],
              "mac": ["Q"]
            }
          },
          {
            "id": "8",
            "keys": ["E"],
            "description": "Strafe right",
            "platforms": {
              "windows": ["E"],
              "mac": ["E"]
            }
          }
        ]
      },
      {
        "title": "Camera Controls",
        "shortcuts": [
          {
            "id": "9",
            "keys": ["Mouse Wheel"],
            "description": "Zoom camera in/out",
            "platforms": {
              "windows": ["Mouse Wheel"],
              "mac": ["Mouse Wheel"]
            }
          },
          {
            "id": "10",
            "keys": ["Right Mouse Button"],
            "description": "Freely move camera",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "11",
            "keys": ["Left Mouse Button"],
            "description": "Select target or interact",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          },
          {
            "id": "12",
            "keys": ["Ctrl + Mouse Wheel"],
            "description": "Adjust camera angle",
            "platforms": {
              "windows": ["Ctrl + Mouse Wheel"],
              "mac": ["⌘ + Mouse Wheel"]
            }
          }
        ]
      },
      {
        "title": "Action Bar",
        "shortcuts": [
          {
            "id": "13",
            "keys": ["1"],
            "description": "Use Action Bar slot 1",
            "platforms": {
              "windows": ["1"],
              "mac": ["1"]
            }
          },
          {
            "id": "14",
            "keys": ["2"],
            "description": "Use Action Bar slot 2",
            "platforms": {
              "windows": ["2"],
              "mac": ["2"]
            }
          },
          {
            "id": "15",
            "keys": ["Shift + 1"],
            "description": "Switch to Action Bar 1",
            "platforms": {
              "windows": ["Shift + 1"],
              "mac": ["⌘ + 1"]
            }
          },
          {
            "id": "16",
            "keys": ["Shift + 2"],
            "description": "Switch to Action Bar 2",
            "platforms": {
              "windows": ["Shift + 2"],
              "mac": ["⌘ + 2"]
            }
          },
          {
            "id": "17",
            "keys": ["F1"],
            "description": "Use Pet Action slot 1",
            "platforms": {
              "windows": ["F1"],
              "mac": ["F1"]
            }
          }
        ]
      },
      {
        "title": "Targeting",
        "shortcuts": [
          {
            "id": "18",
            "keys": ["Tab"],
            "description": "Target nearest enemy",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "19",
            "keys": ["F"],
            "description": "Assist target",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "20",
            "keys": ["Ctrl + Tab"],
            "description": "Target nearest friendly player",
            "platforms": {
              "windows": ["Ctrl + Tab"],
              "mac": ["⌘ + Tab"]
            }
          },
          {
            "id": "21",
            "keys": ["Shift + Tab"],
            "description": "Cycle through enemies in reverse order",
            "platforms": {
              "windows": ["Shift + Tab"],
              "mac": ["⌘ + Shift + Tab"]
            }
          },
          {
            "id": "22",
            "keys": ["Ctrl + F"],
            "description": "Target focus target",
            "platforms": {
              "windows": ["Ctrl + F"],
              "mac": ["⌘ + F"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "23",
            "keys": ["Enter"],
            "description": "Open chat",
            "platforms": {
              "windows": ["Enter"],
              "mac": ["Enter"]
            }
          },
          {
            "id": "24",
            "keys": ["R"],
            "description": "Reply to last whisper",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "25",
            "keys": ["Shift + Enter"],
            "description": "Chat in /yell",
            "platforms": {
              "windows": ["Shift + Enter"],
              "mac": ["⌘ + Enter"]
            }
          },
          {
            "id": "26",
            "keys": ["/"],
            "description": "Open command prompt",
            "platforms": {
              "windows": ["/"],
              "mac": ["/"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "27",
            "keys": ["B"],
            "description": "Open all bags",
            "platforms": {
              "windows": ["B"],
              "mac": ["B"]
            }
          },
          {
            "id": "28",
            "keys": ["I"],
            "description": "Open Dungeon Finder",
            "platforms": {
              "windows": ["I"],
              "mac": ["I"]
            }
          },
          {
            "id": "29",
            "keys": ["M"],
            "description": "Open world map",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          },
          {
            "id": "30",
            "keys": ["Shift + P"],
            "description": "Open Mount and Pet Journal",
            "platforms": {
              "windows": ["Shift + P"],
              "mac": ["⌘ + P"]
            }
          },
          {
            "id": "31",
            "keys": ["Ctrl + M"],
            "description": "Toggle music",
            "platforms": {
              "windows": ["Ctrl + M"],
              "mac": ["⌘ + M"]
            }
          },
          {
            "id": "32",
            "keys": ["Ctrl + Z"],
            "description": "Toggle UI",
            "platforms": {
              "windows": ["Ctrl + Z"],
              "mac": ["⌘ + Z"]
            }
          }
        ]
      }
    ]
  },
  "league-of-legends": {
    id: "league-of-legends",
    name: "League of Legends",
    shortcutpageName: "League of Legends Keyboard Shortcuts",
    icon: "/icons/games/league-of-legends.svg",
    description: "Mastering keyboard shortcuts in League of Legends can improve your gameplay by enabling efficient control over abilities, communication, and movements on Windows PC.",
    metadescription: "Check all League of Legends Keyboard Shortcuts to enhance your gaming experience. These LoL shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Champion Abilities",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["Q"],
            "description": "Cast first ability (Q)",
            "platforms": {
              "windows": ["Q"]
            }
          },
          {
            "id": "2",
            "keys": ["W"],
            "description": "Cast second ability (W)",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "3",
            "keys": ["E"],
            "description": "Cast third ability (E)",
            "platforms": {
              "windows": ["E"]
            }
          },
          {
            "id": "4",
            "keys": ["R"],
            "description": "Cast ultimate ability (R)",
            "platforms": {
              "windows": ["R"]
            }
          }
        ]
      },
      {
        "title": "Summoner Spells",
        "shortcuts": [
          {
            "id": "5",
            "keys": ["D"],
            "description": "Use first summoner spell (D)",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "6",
            "keys": ["F"],
            "description": "Use second summoner spell (F)",
            "platforms": {
              "windows": ["F"]
            }
          }
        ]
      },
      {
        "title": "Item Management",
        "shortcuts": [
          {
            "id": "7",
            "keys": ["1", "2", "3", "4", "5", "6", "7"],
            "description": "Use items from item slots",
            "platforms": {
              "windows": ["1", "2", "3", "4", "5", "6", "7"]
            }
          }
        ]
      },
      {
        "title": "Camera Controls",
        "shortcuts": [
          {
            "id": "8",
            "keys": ["Space"],
            "description": "Center camera on champion",
            "platforms": {
              "windows": ["Space"]
            }
          },
          {
            "id": "9",
            "keys": ["Y"],
            "description": "Toggle camera lock",
            "platforms": {
              "windows": ["Y"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "10",
            "keys": ["Enter"],
            "description": "Open chat",
            "platforms": {
              "windows": ["Enter"]
            }
          },
          {
            "id": "11",
            "keys": ["G"],
            "description": "Ping menu",
            "platforms": {
              "windows": ["G"]
            }
          },
          {
            "id": "12",
            "keys": ["Alt + Left Click"],
            "description": "Ping an object or location",
            "platforms": {
              "windows": ["Alt + Left Click"]
            }
          }
        ]
      },
      {
        "title": "Gameplay",
        "shortcuts": [
          {
            "id": "13",
            "keys": ["P"],
            "description": "Open shop",
            "platforms": {
              "windows": ["P"]
            }
          },
          {
            "id": "14",
            "keys": ["B"],
            "description": "Recall (return to base)",
            "platforms": {
              "windows": ["B"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "15",
            "keys": ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"],
            "description": "Perform champion emotes",
            "platforms": {
              "windows": ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + 4"]
            }
          },
          {
            "id": "16",
            "keys": ["Ctrl + 5"],
            "description": "Toggle champion mastery emote",
            "platforms": {
              "windows": ["Ctrl + 5"]
            }
          },
          {
            "id": "17",
            "keys": ["Esc"],
            "description": "Open settings menu",
            "platforms": {
              "windows": ["Esc"]
            }
          }
        ]
      }
    ]
  },
  "apex-legends": {
    id: "apex-legends",
    name: "Apex Legends",
    shortcutpageName: "Apex Legends Keyboard Shortcuts",
    icon: "/icons/games/apex-legends.svg",
    description: "Mastering keyboard shortcuts in Apex Legends can improve your gameplay by enabling efficient controls for movement, combat, and communication on both Windows and macOS.",
    metadescription: "Check all Apex Legends Keyboard Shortcuts to become the champion. These Apex Legends shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"],
              "mac": ["W"]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": ["A"],
              "mac": ["A"]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"],
              "mac": ["S"]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": ["D"],
              "mac": ["D"]
            }
          },
          {
            "id": "5",
            "keys": [
              "Left Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": ["Left Shift"],
              "mac": ["Left Shift"]
            }
          },
          {
            "id": "6",
            "keys": [
              "Space"
            ],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"],
              "mac": ["Space"]
            }
          },
          {
            "id": "7",
            "keys": [
              "C"
            ],
            "description": "Crouch (toggle)",
            "platforms": {
              "windows": ["C"],
              "mac": ["C"]
            }
          },
          {
            "id": "8",
            "keys": [
              "Left Ctrl"
            ],
            "description": "Crouch (hold)",
            "platforms": {
              "windows": ["Left Ctrl"],
              "mac": ["Left Ctrl"]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire weapon",
            "platforms": {
              "windows": ["Left Mouse Button"],
              "mac": ["Left Mouse Button"]
            }
          },
          {
            "id": "10",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Aim down sights",
            "platforms": {
              "windows": ["Right Mouse Button"],
              "mac": ["Right Mouse Button"]
            }
          },
          {
            "id": "11",
            "keys": [
              "R"
            ],
            "description": "Reload",
            "platforms": {
              "windows": ["R"],
              "mac": ["R"]
            }
          },
          {
            "id": "12",
            "keys": [
              "F"
            ],
            "description": "Interact/Pick up",
            "platforms": {
              "windows": ["F"],
              "mac": ["F"]
            }
          },
          {
            "id": "13",
            "keys": [
              "G"
            ],
            "description": "Equip grenade",
            "platforms": {
              "windows": ["G"],
              "mac": ["G"]
            }
          },
          {
            "id": "14",
            "keys": [
              "1"
            ],
            "description": "Equip weapon 1",
            "platforms": {
              "windows": ["1"],
              "mac": ["1"]
            }
          },
          {
            "id": "15",
            "keys": [
              "2"
            ],
            "description": "Equip weapon 2",
            "platforms": {
              "windows": ["2"],
              "mac": ["2"]
            }
          },
          {
            "id": "16",
            "keys": [
              "3"
            ],
            "description": "Holster weapon",
            "platforms": {
              "windows": ["3"],
              "mac": ["3"]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "17",
            "keys": [
              "T"
            ],
            "description": "Ping (default)",
            "platforms": {
              "windows": ["T"],
              "mac": ["T"]
            }
          },
          {
            "id": "18",
            "keys": [
              "Mouse Wheel Click"
            ],
            "description": "Ping",
            "platforms": {
              "windows": ["Mouse Wheel Click"],
              "mac": ["Mouse Wheel Click"]
            }
          },
          {
            "id": "19",
            "keys": [
              "Enter"
            ],
            "description": "Open text chat",
            "platforms": {
              "windows": ["Enter"],
              "mac": ["Enter"]
            }
          },
          {
            "id": "20",
            "keys": [
              "Y"
            ],
            "description": "Push to talk (hold)",
            "platforms": {
              "windows": ["Y"],
              "mac": ["Y"]
            }
          }
        ]
      },
      {
        "title": "Inventory and Map",
        "shortcuts": [
          {
            "id": "21",
            "keys": [
              "Tab"
            ],
            "description": "Open inventory",
            "platforms": {
              "windows": ["Tab"],
              "mac": ["Tab"]
            }
          },
          {
            "id": "22",
            "keys": [
              "M"
            ],
            "description": "Open map",
            "platforms": {
              "windows": ["M"],
              "mac": ["M"]
            }
          }
        ]
      }
    ]
  },
  "call-of-duty-warzone": {
    id: "call-of-duty-warzone",
    name: "Call of Duty: Warzone",
    shortcutpageName: "Call of Duty: Warzone (COZ Warzone) Keyboard Shortcuts",
    icon: "/icons/games/call-of-duty-warzone.svg",
    description: "Mastering keyboard shortcuts in Call of Duty: Warzone can enhance your gameplay by enabling quick actions, communication, and inventory management on Windows PC.",
    metadescription: "Check all Call of Duty: Warzone Keyboard Shortcuts to dominate the battlefield. These Warzone shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": [
                "W"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": [
                "A"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": [
                "S"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": [
                "D"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Space"
            ],
            "description": "Jump",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)"
            ],
            "description": "Crouch",
            "platforms": {
              "windows": [
                "Ctrl (Control)"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "C"
            ],
            "description": "Slide",
            "platforms": {
              "windows": [
                "C"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": [
                "Shift"
              ]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire weapon",
            "platforms": {
              "windows": [
                "Left Mouse Button"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Aim down sights",
            "platforms": {
              "windows": [
                "Right Mouse Button"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "R"
            ],
            "description": "Reload weapon",
            "platforms": {
              "windows": [
                "R"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "G"
            ],
            "description": "Throw grenade",
            "platforms": {
              "windows": [
                "G"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "1"
            ],
            "description": "Switch to primary weapon",
            "platforms": {
              "windows": [
                "1"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "2"
            ],
            "description": "Switch to secondary weapon",
            "platforms": {
              "windows": [
                "2"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "4"
            ],
            "description": "Use tactical equipment",
            "platforms": {
              "windows": [
                "4"
              ]
            }
          }
        ]
      },
      {
        "title": "Communication and Teamplay",
        "shortcuts": [
          {
            "id": "16",
            "keys": [
              "T"
            ],
            "description": "Chat (text)",
            "platforms": {
              "windows": [
                "T"
              ]
            }
          },
          {
            "id": "17",
            "keys": [
              "Z"
            ],
            "description": "Ping",
            "platforms": {
              "windows": [
                "Z"
              ]
            }
          },
          {
            "id": "18",
            "keys": [
              "H"
            ],
            "description": "Push to talk (voice)",
            "platforms": {
              "windows": [
                "H"
              ]
            }
          }
        ]
      },
      {
        "title": "Vehicle Controls",
        "shortcuts": [
          {
            "id": "19",
            "keys": [
              "E"
            ],
            "description": "Enter/exit vehicle",
            "platforms": {
              "windows": [
                "E"
              ]
            }
          },
          {
            "id": "20",
            "keys": [
              "Shift"
            ],
            "description": "Boost",
            "platforms": {
              "windows": [
                "Shift"
              ]
            }
          },
          {
            "id": "21",
            "keys": [
              "Space"
            ],
            "description": "Handbrake",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          }
        ]
      }
    ]
  },
  "elden-ring": {
    id: "elden-ring",
    name: "Elden Ring",
    shortcutpageName: "Elden Ring Keyboard Shortcuts",
    icon: "/icons/games/elden-ring.svg",
    description: "Mastering keyboard shortcuts in Elden Ring can improve your gameplay by enabling efficient combat, exploration, and interactions on Windows PC.",
    metadescription: "Check all Elden Ring Keyboard Shortcuts to conquer the Lands Between. These Elden Ring shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Movement Controls",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": ["D"]
            }
          }
        ]
      },
      {
        "title": "Combat Controls",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Attack (Right-handed weapon)",
            "platforms": {
              "windows": ["Left Mouse Button"]
            }
          },
          {
            "id": "6",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Block (Left-handed weapon)",
            "platforms": {
              "windows": ["Right Mouse Button"]
            }
          },
          {
            "id": "7",
            "keys": [
              "Shift + Left Mouse Button"
            ],
            "description": "Strong attack (Right-handed weapon)",
            "platforms": {
              "windows": ["Shift + Left Mouse Button"]
            }
          },
          {
            "id": "8",
            "keys": [
              "Shift + Right Mouse Button"
            ],
            "description": "Parry (Left-handed weapon)",
            "platforms": {
              "windows": ["Shift + Right Mouse Button"]
            }
          },
          {
            "id": "9",
            "keys": [
              "R"
            ],
            "description": "Use equipped item",
            "platforms": {
              "windows": ["R"]
            }
          },
          {
            "id": "10",
            "keys": [
              "Q"
            ],
            "description": "Target lock/release",
            "platforms": {
              "windows": ["Q"]
            }
          }
        ]
      },
      {
        "title": "Interaction Controls",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "E"
            ],
            "description": "Interact",
            "platforms": {
              "windows": ["E"]
            }
          },
          {
            "id": "12",
            "keys": [
              "Space"
            ],
            "description": "Dodge / Roll / Dash",
            "platforms": {
              "windows": ["Space"]
            }
          },
          {
            "id": "13",
            "keys": [
              "Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": ["Shift"]
            }
          }
        ]
      },
      {
        "title": "Menu Controls",
        "shortcuts": [
          {
            "id": "14",
            "keys": [
              "Esc"
            ],
            "description": "Open system menu",
            "platforms": {
              "windows": ["Esc"]
            }
          },
          {
            "id": "15",
            "keys": [
              "I"
            ],
            "description": "Open inventory",
            "platforms": {
              "windows": ["I"]
            }
          },
          {
            "id": "16",
            "keys": [
              "G"
            ],
            "description": "Open map",
            "platforms": {
              "windows": ["G"]
            }
          }
        ]
      },
      {
        "title": "Camera Controls",
        "shortcuts": [
          {
            "id": "17",
            "keys": [
              "Mouse Movement"
            ],
            "description": "Adjust camera angle",
            "platforms": {
              "windows": ["Mouse Movement"]
            }
          },
          {
            "id": "18",
            "keys": [
              "Mouse Wheel Up"
            ],
            "description": "Zoom in",
            "platforms": {
              "windows": ["Mouse Wheel Up"]
            }
          },
          {
            "id": "19",
            "keys": [
              "Mouse Wheel Down"
            ],
            "description": "Zoom out",
            "platforms": {
              "windows": ["Mouse Wheel Down"]
            }
          }
        ]
      }
    ]
  },
  "gta-v": {
    id: "gta-v",
    name: "Grand Theft Auto V",
    shortcutpageName: "GTA V Keyboard Shortcuts",
    icon: "/icons/games/gta-v.svg",
    description: "Mastering keyboard shortcuts in Grand Theft Auto V (GTA V) can enhance your gameplay by enabling quick actions, vehicle controls, and navigation on both Windows and macOS.",
    metadescription: "Check all GTA V Keyboard Shortcuts to explore Los Santos efficiently. These Grand Theft Auto V shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Movement Controls",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "5",
            "keys": [
              "Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": ["Shift"]
            }
          },
          {
            "id": "6",
            "keys": [
              "Space"
            ],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"]
            }
          }
        ]
      },
      {
        "title": "Vehicle Controls",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "W"
            ],
            "description": "Accelerate",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "8",
            "keys": [
              "S"
            ],
            "description": "Brake / Reverse",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "9",
            "keys": [
              "A"
            ],
            "description": "Steer left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "10",
            "keys": [
              "D"
            ],
            "description": "Steer right",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "11",
            "keys": [
              "F"
            ],
            "description": "Enter/Exit vehicle",
            "platforms": {
              "windows": ["F"]
            }
          },
          {
            "id": "12",
            "keys": [
              "Space"
            ],
            "description": "Handbrake",
            "platforms": {
              "windows": ["Space"]
            }
          },
          {
            "id": "13",
            "keys": [
              "H"
            ],
            "description": "Toggle headlights",
            "platforms": {
              "windows": ["H"]
            }
          }
        ]
      },
      {
        "title": "Combat Controls",
        "shortcuts": [
          {
            "id": "14",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire weapon / Attack",
            "platforms": {
              "windows": ["Left Mouse Button"]
            }
          },
          {
            "id": "15",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Aim weapon",
            "platforms": {
              "windows": ["Right Mouse Button"]
            }
          },
          {
            "id": "16",
            "keys": [
              "R"
            ],
            "description": "Reload weapon",
            "platforms": {
              "windows": ["R"]
            }
          },
          {
            "id": "17",
            "keys": [
              "Q"
            ],
            "description": "Take cover",
            "platforms": {
              "windows": ["Q"]
            }
          },
          {
            "id": "18",
            "keys": [
              "Tab"
            ],
            "description": "Select weapon",
            "platforms": {
              "windows": ["Tab"]
            }
          }
        ]
      },
      {
        "title": "General Controls",
        "shortcuts": [
          {
            "id": "19",
            "keys": [
              "M"
            ],
            "description": "Open interaction menu",
            "platforms": {
              "windows": ["M"]
            }
          },
          {
            "id": "20",
            "keys": [
              "Esc"
            ],
            "description": "Open pause menu",
            "platforms": {
              "windows": ["Esc"]
            }
          },
          {
            "id": "21",
            "keys": [
              "F5"
            ],
            "description": "Quick save (Single-player)",
            "platforms": {
              "windows": ["F5"]
            }
          },
          {
            "id": "22",
            "keys": [
              "G"
            ],
            "description": "Throw grenade / special weapon",
            "platforms": {
              "windows": ["G"]
            }
          }
        ]
      }
    ]
  },
  "the-witcher-3": {
    id: "the-witcher-3",
    name: "The Witcher 3: Wild Hunt",
    shortcutpageName: "The Witcher 3 Keyboard Shortcuts",
    icon: "/icons/games/the-witcher-3.png",
    description: "Mastering keyboard shortcuts in The Witcher 3: Wild Hunt can enhance your gameplay by enabling quick combat controls, inventory management, and exploration on Windows PC.",
    metadescription: "Check all The Witcher 3 Keyboard Shortcuts to hunt monsters more efficiently. These Witcher 3 shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Movement and Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["W"],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "2",
            "keys": ["S"],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "3",
            "keys": ["A"],
            "description": "Move left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "4",
            "keys": ["D"],
            "description": "Move right",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "5",
            "keys": ["Left Shift"],
            "description": "Sprint",
            "platforms": {
              "windows": ["Left Shift"]
            }
          },
          {
            "id": "6",
            "keys": ["Left Ctrl"],
            "description": "Sneak/Walk",
            "platforms": {
              "windows": ["Left Ctrl"]
            }
          },
          {
            "id": "7",
            "keys": ["Space"],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"]
            }
          },
          {
            "id": "8",
            "keys": ["Alt"],
            "description": "Dodge",
            "platforms": {
              "windows": ["Alt"]
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
            "description": "Fast attack",
            "platforms": {
              "windows": ["Left Mouse Button"]
            }
          },
          {
            "id": "10",
            "keys": ["Right Mouse Button"],
            "description": "Parry/Counterattack",
            "platforms": {
              "windows": ["Right Mouse Button"]
            }
          },
          {
            "id": "11",
            "keys": ["Shift + Left Mouse Button"],
            "description": "Strong attack",
            "platforms": {
              "windows": ["Shift + Left Mouse Button"]
            }
          },
          {
            "id": "12",
            "keys": ["Q"],
            "description": "Use equipped Sign",
            "platforms": {
              "windows": ["Q"]
            }
          },
          {
            "id": "13",
            "keys": ["Tab"],
            "description": "Select Sign",
            "platforms": {
              "windows": ["Tab"]
            }
          },
          {
            "id": "14",
            "keys": ["R"],
            "description": "Use quick item (e.g., bombs)",
            "platforms": {
              "windows": ["R"]
            }
          }
        ]
      },
      {
        "title": "Exploration and Interaction",
        "shortcuts": [
          {
            "id": "15",
            "keys": ["E"],
            "description": "Interact with objects/NPCs",
            "platforms": {
              "windows": ["E"]
            }
          },
          {
            "id": "16",
            "keys": ["F"],
            "description": "Call Roach (horse)",
            "platforms": {
              "windows": ["F"]
            }
          },
          {
            "id": "17",
            "keys": ["X"],
            "description": "Dismount/Climb down",
            "platforms": {
              "windows": ["X"]
            }
          },
          {
            "id": "18",
            "keys": ["Z"],
            "description": "Use Witcher senses",
            "platforms": {
              "windows": ["Z"]
            }
          }
        ]
      },
      {
        "title": "Inventory and Menu",
        "shortcuts": [
          {
            "id": "19",
            "keys": ["I"],
            "description": "Open inventory",
            "platforms": {
              "windows": ["I"]
            }
          },
          {
            "id": "20",
            "keys": ["M"],
            "description": "Open map",
            "platforms": {
              "windows": ["M"]
            }
          },
          {
            "id": "21",
            "keys": ["J"],
            "description": "Open quests menu",
            "platforms": {
              "windows": ["J"]
            }
          },
          {
            "id": "22",
            "keys": ["K"],
            "description": "Open character menu",
            "platforms": {
              "windows": ["K"]
            }
          },
          {
            "id": "23",
            "keys": ["L"],
            "description": "Open bestiary",
            "platforms": {
              "windows": ["L"]
            }
          },
          {
            "id": "24",
            "keys": ["Esc"],
            "description": "Open game menu",
            "platforms": {
              "windows": ["Esc"]
            }
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "shortcuts": [
          {
            "id": "25",
            "keys": ["F5"],
            "description": "Quick save",
            "platforms": {
              "windows": ["F5"]
            }
          },
          {
            "id": "26",
            "keys": ["F9"],
            "description": "Quick load",
            "platforms": {
              "windows": ["F9"]
            }
          },
          {
            "id": "27",
            "keys": ["T"],
            "description": "Meditation menu",
            "platforms": {
              "windows": ["T"]
            }
          },
          {
            "id": "28",
            "keys": ["H"],
            "description": "Hide HUD",
            "platforms": {
              "windows": ["H"]
            }
          }
        ]
      }
    ]
  },
  "cyberpunk-2077": {
    id: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    shortcutpageName: "55+ Cyberpunk 2077 Keyboard Shortcuts",
    icon: "/icons/games/cyberpunk-2077.jpg",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the futuristic Night City. Developed by CD Projekt Red, it features a richly detailed environment, immersive storytelling, and customizable gameplay, where players take on the role of V, a mercenary navigating a world of cybernetic enhancements and high-stakes choices.Mastering keyboard shortcuts in Cyberpunk 2077 can optimize your gameplay by enabling efficient combat, navigation, and inventory control on Windows PC.",
    metadescription: "Check all Cyberpunk 2077 Keyboard Shortcuts to explore Night City efficiently. These Cyberpunk shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": [
                "W"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": [
                "A"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": [
                "S"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": [
                "D"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Space"
            ],
            "description": "Jump",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Left Ctrl"
            ],
            "description": "Crouch",
            "platforms": {
              "windows": [
                "Left Ctrl"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Left Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": [
                "Left Shift"
              ]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Attack",
            "platforms": {
              "windows": [
                "Left Mouse Button"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Aim",
            "platforms": {
              "windows": [
                "Right Mouse Button"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "R"
            ],
            "description": "Reload",
            "platforms": {
              "windows": [
                "R"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Q"
            ],
            "description": "Quick melee attack",
            "platforms": {
              "windows": [
                "Q"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "1"
            ],
            "description": "Switch to primary weapon",
            "platforms": {
              "windows": [
                "1"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "2"
            ],
            "description": "Switch to secondary weapon",
            "platforms": {
              "windows": [
                "2"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "3"
            ],
            "description": "Switch to melee weapon",
            "platforms": {
              "windows": [
                "3"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "G"
            ],
            "description": "Throw grenade",
            "platforms": {
              "windows": [
                "G"
              ]
            }
          }
        ]
      },
      {
        "title": "Vehicle Controls",
        "shortcuts": [
          {
            "id": "16",
            "keys": [
              "W"
            ],
            "description": "Accelerate",
            "platforms": {
              "windows": [
                "W"
              ]
            }
          },
          {
            "id": "17",
            "keys": [
              "S"
            ],
            "description": "Brake/Reverse",
            "platforms": {
              "windows": [
                "S"
              ]
            }
          },
          {
            "id": "18",
            "keys": [
              "A"
            ],
            "description": "Turn left",
            "platforms": {
              "windows": [
                "A"
              ]
            }
          },
          {
            "id": "19",
            "keys": [
              "D"
            ],
            "description": "Turn right",
            "platforms": {
              "windows": [
                "D"
              ]
            }
          },
          {
            "id": "20",
            "keys": [
              "Space"
            ],
            "description": "Handbrake",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          },
          {
            "id": "21",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire vehicle weapon",
            "platforms": {
              "windows": [
                "Left Mouse Button"
              ]
            }
          },
          {
            "id": "22",
            "keys": [
              "E"
            ],
            "description": "Enter/Exit vehicle",
            "platforms": {
              "windows": [
                "E"
              ]
            }
          }
        ]
      },
      {
        "title": "Inventory and Interactions",
        "shortcuts": [
          {
            "id": "23",
            "keys": [
              "Tab"
            ],
            "description": "Open inventory wheel",
            "platforms": {
              "windows": [
                "Tab"
              ]
            }
          },
          {
            "id": "24",
            "keys": [
              "I"
            ],
            "description": "Open inventory menu",
            "platforms": {
              "windows": [
                "I"
              ]
            }
          },
          {
            "id": "25",
            "keys": [
              "E"
            ],
            "description": "Interact",
            "platforms": {
              "windows": [
                "E"
              ]
            }
          }
        ]
      }
    ]
  },
  "pubg": {
    id: "pubg",
    name: "PUBG: Battlegrounds",
    shortcutpageName: "Most used PUBG Keyboard Shortcuts",
    icon: "/icons/games/pubg.svg",
    description: "Mastering keyboard shortcuts in PUBG: Battlegrounds can improve your gameplay by enabling quick controls for combat, communication, and looting on Windows PC.",
    metadescription: "Check all PUBG Keyboard Shortcuts to dominate the battleground. These PUBG shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "Movement",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": [
                "W"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Move left",
            "platforms": {
              "windows": [
                "A"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": [
                "S"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Move right",
            "platforms": {
              "windows": [
                "D"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Space"
            ],
            "description": "Jump/Vault",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Left Ctrl"
            ],
            "description": "Crouch",
            "platforms": {
              "windows": [
                "Left Ctrl"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Z"
            ],
            "description": "Prone",
            "platforms": {
              "windows": [
                "Z"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Left Shift"
            ],
            "description": "Sprint",
            "platforms": {
              "windows": [
                "Left Shift"
              ]
            }
          }
        ]
      },
      {
        "title": "Combat",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire weapon",
            "platforms": {
              "windows": [
                "Left Mouse Button"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Right Mouse Button"
            ],
            "description": "Aim down sights",
            "platforms": {
              "windows": [
                "Right Mouse Button"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "R"
            ],
            "description": "Reload weapon",
            "platforms": {
              "windows": [
                "R"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "G"
            ],
            "description": "Throw grenade",
            "platforms": {
              "windows": [
                "G"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "B"
            ],
            "description": "Change fire mode",
            "platforms": {
              "windows": [
                "B"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "V"
            ],
            "description": "Toggle first/third person view",
            "platforms": {
              "windows": [
                "V"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "1"
            ],
            "description": "Switch to primary weapon 1",
            "platforms": {
              "windows": [
                "1"
              ]
            }
          },
          {
            "id": "16",
            "keys": [
              "2"
            ],
            "description": "Switch to primary weapon 2",
            "platforms": {
              "windows": [
                "2"
              ]
            }
          },
          {
            "id": "17",
            "keys": [
              "3"
            ],
            "description": "Switch to sidearm",
            "platforms": {
              "windows": [
                "3"
              ]
            }
          },
          {
            "id": "18",
            "keys": [
              "4"
            ],
            "description": "Switch to melee weapon",
            "platforms": {
              "windows": [
                "4"
              ]
            }
          },
          {
            "id": "19",
            "keys": [
              "5"
            ],
            "description": "Switch to throwables",
            "platforms": {
              "windows": [
                "5"
              ]
            }
          }
        ]
      },
      {
        "title": "Inventory and Equipment",
        "shortcuts": [
          {
            "id": "20",
            "keys": [
              "Tab"
            ],
            "description": "Open inventory",
            "platforms": {
              "windows": [
                "Tab"
              ]
            }
          },
          {
            "id": "21",
            "keys": [
              "F"
            ],
            "description": "Interact/Pick up item",
            "platforms": {
              "windows": [
                "F"
              ]
            }
          },
          {
            "id": "22",
            "keys": [
              "I"
            ],
            "description": "Open equipment screen",
            "platforms": {
              "windows": [
                "I"
              ]
            }
          },
          {
            "id": "23",
            "keys": [
              "9"
            ],
            "description": "Use healing item",
            "platforms": {
              "windows": [
                "9"
              ]
            }
          },
          {
            "id": "24",
            "keys": [
              "0"
            ],
            "description": "Use boost item",
            "platforms": {
              "windows": [
                "0"
              ]
            }
          }
        ]
      },
      {
        "title": "Communication",
        "shortcuts": [
          {
            "id": "25",
            "keys": [
              "T"
            ],
            "description": "Push-to-talk",
            "platforms": {
              "windows": [
                "T"
              ]
            }
          },
          {
            "id": "26",
            "keys": [
              "Z"
            ],
            "description": "Mark location",
            "platforms": {
              "windows": [
                "Z"
              ]
            }
          },
          {
            "id": "27",
            "keys": [
              "H"
            ],
            "description": "Toggle voice chat",
            "platforms": {
              "windows": [
                "H"
              ]
            }
          }
        ]
      },
      {
        "title": "Vehicle Controls",
        "shortcuts": [
          {
            "id": "28",
            "keys": [
              "W"
            ],
            "description": "Accelerate",
            "platforms": {
              "windows": [
                "W"
              ]
            }
          },
          {
            "id": "29",
            "keys": [
              "S"
            ],
            "description": "Brake/Reverse",
            "platforms": {
              "windows": [
                "S"
              ]
            }
          },
          {
            "id": "30",
            "keys": [
              "A"
            ],
            "description": "Turn left",
            "platforms": {
              "windows": [
                "A"
              ]
            }
          },
          {
            "id": "31",
            "keys": [
              "D"
            ],
            "description": "Turn right",
            "platforms": {
              "windows": [
                "D"
              ]
            }
          },
          {
            "id": "32",
            "keys": [
              "F"
            ],
            "description": "Enter/exit vehicle",
            "platforms": {
              "windows": [
                "F"
              ]
            }
          },
          {
            "id": "33",
            "keys": [
              "Space"
            ],
            "description": "Handbrake",
            "platforms": {
              "windows": [
                "Space"
              ]
            }
          },
          {
            "id": "34",
            "keys": [
              "Left Mouse Button"
            ],
            "description": "Fire vehicle weapon",
            "platforms": {
              "windows": [
                "Left Mouse Button"
              ]
            }
          }
        ]
      }
    ]
  },
  "rocket-league": {
    id: "rocket-league",
    name: "Rocket League",
    shortcutpageName: "Rocket League Keyboard Shortcuts",
    icon: "/icons/games/rocket-league.svg",
    description: "Mastering keyboard shortcuts in Rocket League can enhance your gameplay by enabling quick vehicle controls, team communication, and actions on both Windows and macOS.",
    metadescription: "Check all Rocket League Keyboard Shortcuts to score efficiently. These Rocket League shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Movement Controls",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "W"
            ],
            "description": "Move forward",
            "platforms": {
              "windows": ["W"]
            }
          },
          {
            "id": "2",
            "keys": [
              "A"
            ],
            "description": "Steer left",
            "platforms": {
              "windows": ["A"]
            }
          },
          {
            "id": "3",
            "keys": [
              "S"
            ],
            "description": "Move backward",
            "platforms": {
              "windows": ["S"]
            }
          },
          {
            "id": "4",
            "keys": [
              "D"
            ],
            "description": "Steer right",
            "platforms": {
              "windows": ["D"]
            }
          },
          {
            "id": "5",
            "keys": [
              "Shift"
            ],
            "description": "Powerslide",
            "platforms": {
              "windows": ["Shift"]
            }
          },
          {
            "id": "6",
            "keys": [
              "Space"
            ],
            "description": "Jump",
            "platforms": {
              "windows": ["Space"]
            }
          }
        ]
      },
      {
        "title": "Camera Controls",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "Y"
            ],
            "description": "Switch camera mode",
            "platforms": {
              "windows": ["Y"]
            }
          },
          {
            "id": "8",
            "keys": [
              "Mouse Movement"
            ],
            "description": "Look around",
            "platforms": {
              "windows": ["Mouse Movement"]
            }
          }
        ]
      },
      {
        "title": "Boost and Ball Controls",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Left Ctrl"
            ],
            "description": "Use boost",
            "platforms": {
              "windows": ["Left Ctrl"]
            }
          },
          {
            "id": "10",
            "keys": [
              "Tab"
            ],
            "description": "Focus on ball",
            "platforms": {
              "windows": ["Tab"]
            }
          }
        ]
      },
      {
        "title": "Quick Chat",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "1"
            ],
            "description": "Quick chat preset 1",
            "platforms": {
              "windows": ["1"]
            }
          },
          {
            "id": "12",
            "keys": [
              "2"
            ],
            "description": "Quick chat preset 2",
            "platforms": {
              "windows": ["2"]
            }
          },
          {
            "id": "13",
            "keys": [
              "3"
            ],
            "description": "Quick chat preset 3",
            "platforms": {
              "windows": ["3"]
            }
          },
          {
            "id": "14",
            "keys": [
              "4"
            ],
            "description": "Quick chat preset 4",
            "platforms": {
              "windows": ["4"]
            }
          }
        ]
      },
      {
        "title": "General Controls",
        "shortcuts": [
          {
            "id": "15",
            "keys": [
              "Esc"
            ],
            "description": "Pause menu",
            "platforms": {
              "windows": ["Esc"]
            }
          },
          {
            "id": "16",
            "keys": [
              "F"
            ],
            "description": "Vote to forfeit",
            "platforms": {
              "windows": ["F"]
            }
          },
          {
            "id": "17",
            "keys": [
              "H"
            ],
            "description": "Toggle scoreboard",
            "platforms": {
              "windows": ["H"]
            }
          },
          {
            "id": "18",
            "keys": [
              "Enter"
            ],
            "description": "Open chat",
            "platforms": {
              "windows": ["Enter"]
            }
          }
        ]
      },
      {
        "title": "Team and Party Controls",
        "shortcuts": [
          {
            "id": "19",
            "keys": [
              "U"
            ],
            "description": "Switch to team chat",
            "platforms": {
              "windows": ["U"]
            }
          },
          {
            "id": "20",
            "keys": [
              "P"
            ],
            "description": "Invite to party",
            "platforms": {
              "windows": ["P"]
            }
          },
          {
            "id": "21",
            "keys": [
              "M"
            ],
            "description": "Mute chat",
            "platforms": {
              "windows": ["M"]
            }
          }
        ]
      }
    ]
  },
  "civilization-v": {
    id: "civilization-v",
    name: "Civilization V",
    shortcutpageName: "Civilization V Game Keyboard Shortcuts",
    icon: "/icons/games/civilization.png",
    description: "Mastering keyboard shortcuts in Civilization V can enhance your gameplay by enabling efficient strategy, resource management, and navigation on Windows PC.",
    metadescription: "Check all Civilization V Keyboard Shortcuts to lead your empire efficiently. These Civilization V shortcuts are updated for Windows OS.",
    platforms: ["windows"],
    featured: true,
    "groups": [
      {
        "title": "General Hotkeys",
        "shortcuts": [
          {
            "id": "1",
            "keys": ["F1"],
            "description": "Open Civilopedia",
            "platforms": {
              "windows": ["F1"],

            }
          },
          {
            "id": "2",
            "keys": ["F2"],
            "description": "Economic info",
            "platforms": {
              "windows": ["F2"],

            }
          },
          {
            "id": "3",
            "keys": ["F3"],
            "description": "Military info",
            "platforms": {
              "windows": ["F3"],

            }
          },
          {
            "id": "4",
            "keys": ["F4"],
            "description": "Diplomacy info",
            "platforms": {
              "windows": ["F4"],

            }
          },
          {
            "id": "5",
            "keys": ["F5"],
            "description": "Social Policies Screen",
            "platforms": {
              "windows": ["F5"],

            }
          },
          {
            "id": "6",
            "keys": ["F6"],
            "description": "Tech Screen",
            "platforms": {
              "windows": ["F6"],

            }
          },
          {
            "id": "7",
            "keys": ["F7"],
            "description": "Notification Log",
            "platforms": {
              "windows": ["F7"],

            }
          },
          {
            "id": "8",
            "keys": ["F8"],
            "description": "Victory Progress",
            "platforms": {
              "windows": ["F8"],

            }
          },
          {
            "id": "9",
            "keys": ["F9"],
            "description": "Demographics",
            "platforms": {
              "windows": ["F9"],

            }
          },
          {
            "id": "10",
            "keys": ["F10"],
            "description": "Strategic View",
            "platforms": {
              "windows": ["F10"],

            }
          },
          {
            "id": "11",
            "keys": ["F11"],
            "description": "Quick Save",
            "platforms": {
              "windows": ["F11"],

            }
          },
          {
            "id": "12",
            "keys": ["F12"],
            "description": "Quick Load",
            "platforms": {
              "windows": ["F12"],

            }
          },
          {
            "id": "13",
            "keys": ["g"],
            "description": "Toggle Hex Grid",
            "platforms": {
              "windows": ["g"],

            }
          },
          {
            "id": "14",
            "keys": ["Esc"],
            "description": "Open Menu",
            "platforms": {
              "windows": ["Esc"],

            }
          },
          {
            "id": "15",
            "keys": ["Enter"],
            "description": "End Turn",
            "platforms": {
              "windows": ["Enter"],

            }
          },
          {
            "id": "16",
            "keys": ["./,"],
            "description": "Next Unit / Previous Unit",
            "platforms": {
              "windows": ["./,"],

            }
          },
          {
            "id": "17",
            "keys": ["-/[+]"],
            "description": "Zoom In / Zoom Out",
            "platforms": {
              "windows": ["-/[+]"],

            }
          },
          {
            "id": "18",
            "keys": ["Home/End"],
            "description": "Capital City View",
            "platforms": {
              "windows": ["Home/End"],

            }
          },
          {
            "id": "19",
            "keys": ["Page Up/Page Down"],
            "description": "Zoom In / Zoom Out",
            "platforms": {
              "windows": ["Page Up/Page Down"],

            }
          },
          {
            "id": "20",
            "keys": ["Ctrl+r"],
            "description": "Show Resource Icons",
            "platforms": {
              "windows": ["Ctrl+r"],

            }
          },
          {
            "id": "21",
            "keys": ["y"],
            "description": "Show Yield Icons",
            "platforms": {
              "windows": ["y"],

            }
          },
          {
            "id": "22",
            "keys": ["Ctrl+o"],
            "description": "Game Options",
            "platforms": {
              "windows": ["Ctrl+o"],

            }
          },
          {
            "id": "23",
            "keys": ["Ctrl+s"],
            "description": "Save Game",
            "platforms": {
              "windows": ["Ctrl+s"],

            }
          },
          {
            "id": "24",
            "keys": ["Ctrl+l"],
            "description": "Load Game",
            "platforms": {
              "windows": ["Ctrl+l"],

            }
          },
          {
            "id": "25",
            "keys": ["Ctrl+Space"],
            "description": "End Turn",
            "platforms": {
              "windows": ["Ctrl+Space"],

            }
          }
        ]
      },
      {
        "title": "Action Hotkeys",
        "shortcuts": [
          {
            "id": "26",
            "keys": ["Delete"],
            "description": "Delete Unit",
            "platforms": {
              "windows": ["Delete"],

            }
          },
          {
            "id": "27",
            "keys": ["Ctrl+a"],
            "description": "Attack",
            "platforms": {
              "windows": ["Ctrl+a"],

            }
          },
          {
            "id": "28",
            "keys": ["Ctrl+b"],
            "description": "Ranged Attack",
            "platforms": {
              "windows": ["Ctrl+b"],

            }
          },
          {
            "id": "29",
            "keys": ["s"],
            "description": "Set Up Artillery",
            "platforms": {
              "windows": ["s"],

            }
          },
          {
            "id": "30",
            "keys": ["h"],
            "description": "Fortify Until Healed",
            "platforms": {
              "windows": ["h"],

            }
          }
        ]
      },
      {
        "title": "Air Unit Hotkeys",
        "shortcuts": [
          {
            "id": "31",
            "keys": ["Alt+r"],
            "description": "Rebase Mode",
            "platforms": {
              "windows": ["Alt+r"],

            }
          },
          {
            "id": "32",
            "keys": ["s"],
            "description": "Air Strike Mode",
            "platforms": {
              "windows": ["s"],

            }
          },
          {
            "id": "33",
            "keys": ["Alt+s"],
            "description": "Air Sweep",
            "platforms": {
              "windows": ["Alt+s"],

            }
          },
          {
            "id": "34",
            "keys": ["i"],
            "description": "Intercept",
            "platforms": {
              "windows": ["i"],

            }
          },
          {
            "id": "35",
            "keys": ["n"],
            "description": "Nuke Mode",
            "platforms": {
              "windows": ["n"],

            }
          }
        ]
      },
      {
        "title": "Civilian Unit Hotkeys",
        "shortcuts": [
          {
            "id": "36",
            "keys": ["b"],
            "description": "Found City",
            "platforms": {
              "windows": ["b"],

            }
          },
          {
            "id": "37",
            "keys": ["a"],
            "description": "Build Improvements (Automated)",
            "platforms": {
              "windows": ["a"],

            }
          },
          {
            "id": "38",
            "keys": ["r"],
            "description": "Construct a Railroad / Construct a Road",
            "platforms": {
              "windows": ["r"],

            }
          },
          {
            "id": "39",
            "keys": ["Alt+r"],
            "description": "Route to Mode",
            "platforms": {
              "windows": ["Alt+r"],

            }
          },
          {
            "id": "40",
            "keys": ["Alt+c"],
            "description": "Remove a Jungle / Clear a Marsh / Remove a Forest",
            "platforms": {
              "windows": ["Alt+c"],

            }
          },
          {
            "id": "41",
            "keys": ["t"],
            "description": "Construct a Trading Post",
            "platforms": {
              "windows": ["t"],

            }
          },
          {
            "id": "42",
            "keys": ["h"],
            "description": "Construct a Camp",
            "platforms": {
              "windows": ["h"],

            }
          },
          {
            "id": "43",
            "keys": ["i"],
            "description": "Construct a Farm",
            "platforms": {
              "windows": ["i"],

            }
          },
          {
            "id": "44",
            "keys": ["n"],
            "description": "Construct a Mine",
            "platforms": {
              "windows": ["n"],

            }
          },
          {
            "id": "45",
            "keys": ["p"],
            "description": "Construct a Plantation",
            "platforms": {
              "windows": ["p"],

            }
          },
          {
            "id": "46",
            "keys": ["q"],
            "description": "Construct a Quarry",
            "platforms": {
              "windows": ["q"],

            }
          },
          {
            "id": "47",
            "keys": ["p"],
            "description": "Construct a Pasture",
            "platforms": {
              "windows": ["p"],

            }
          },
          {
            "id": "48",
            "keys": ["f"],
            "description": "Construct a Fort",
            "platforms": {
              "windows": ["f"],

            }
          },
          {
            "id": "49",
            "keys": ["c"],
            "description": "Construct a Citadel",
            "platforms": {
              "windows": ["c"],

            }
          },
          {
            "id": "50",
            "keys": ["o"],
            "description": "Create a Well",
            "platforms": {
              "windows": ["o"],

            }
          },
          {
            "id": "51",
            "keys": ["l"],
            "description": "Construct a Lumber Mill",
            "platforms": {
              "windows": ["l"],

            }
          },
          {
            "id": "52",
            "keys": ["f"],
            "description": "Create Fishing Boats",
            "platforms": {
              "windows": ["f"],

            }
          },
          {
            "id": "53",
            "keys": ["o"],
            "description": "Create Offshore Platform",
            "platforms": {
              "windows": ["o"],

            }
          },
          {
            "id": "54",
            "keys": ["Backspace"],
            "description": "Cancel Last Mission",
            "platforms": {
              "windows": ["Backspace"],

            }
          }
        ]
      }
    ]
  },
};


// as const;

// export type games = Application;
