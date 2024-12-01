

// export interface Browser {
//     id: string;
//     name: string;
//     icon: string;
//     description: string;
//     platforms: string;
//     featured: boolean;
//     groups: { title: string; shortcuts: any[] }[];
//     shortcutpageName: string; // Ensure this is included
//     metadescription: string; // Ensure this is included
// }


import { CategoryItems } from "@/data/types";



export const browsers: CategoryItems = {

    "mozilla-firefox": {
        id: "mozilla-firefox",
        name: "Mozilla Firefox",
        officialURL: "https://www.mozilla.org/",
        shortcutpageName: "Mozilla Firefox Keyboard Shortcuts",
        icon: "/icons/browsers/firefox.svg",
        description: "Mastering keyboard shortcuts in Mozilla Firefox can enhance your browsing experience by enabling faster navigation, tab management, and control over settings on both Windows and macOS.",
        metadescription: "Check all Mozilla Firefox Keyboard Shortcuts to browse more efficiently. These Firefox shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Navigation Shortcuts",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Alt + Home"
                        ],
                        "description": "Go to Homepage",
                        "platforms": {
                            "windows": [
                                "Alt + Home"
                            ],
                            "mac": [
                                "⌥ (Option) + Home"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control) + D"
                        ],
                        "description": "Bookmark current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + D"
                            ],
                            "mac": [
                                "⌘ (Command) + D"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Alt + Left Arrow",
                            "Backspace"
                        ],
                        "description": "Go back",
                        "platforms": {
                            "windows": [
                                "Alt + Left Arrow",
                                "Backspace"
                            ],
                            "mac": [
                                "⌘ (Command) + Left Arrow"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Alt + Right Arrow",
                            "Shift + Backspace"
                        ],
                        "description": "Go forward",
                        "platforms": {
                            "windows": [
                                "Alt + Right Arrow",
                                "Shift + Backspace"
                            ],
                            "mac": [
                                "⌘ (Command) + Right Arrow"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Tab Shortcuts",
                "shortcuts": [
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl (Control) + T"
                        ],
                        "description": "Open new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + T"
                            ],
                            "mac": [
                                "⌘ (Command) + T"
                            ]
                        }
                    },
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control) + Tab",
                            "Ctrl (Control) + Page Down"
                        ],
                        "description": "Move to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Tab",
                                "Ctrl (Control) + Page Down"
                            ],
                            "mac": [
                                "⌘ (Command) + ⌥ (Option) + Right Arrow"
                            ]
                        }
                    },
                    {
                        "id": "7",
                        "keys": [
                            "Ctrl (Control) + Shift + Tab",
                            "Ctrl (Control) + Page Up"
                        ],
                        "description": "Move to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + Tab",
                                "Ctrl (Control) + Page Up"
                            ],
                            "mac": [
                                "⌘ (Command) + ⌥ (Option) + Left Arrow"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "google-chrome": {
        id: "google-chrome",
        name: "Google Chrome",
        officialURL: "https://www.google.com/chrome/",
        shortcutpageName: "44+ Google Chrome Browser Keyboard Shortcuts",
        icon: "/icons/browsers/chrome.svg",
        description: "Mastering keyboard shortcuts in Google Chrome can optimize your browsing efficiency, enabling quicker navigation, tab management, and control over browser settings on both Windows and macOS.",
        metadescription: "Check all Google Chrome Keyboard Shortcuts to browse faster. These Chrome shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Tab Management",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Ctrl + T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + T"
                            ],
                            "mac": [
                                "\u2318 + T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl + Shift + T"
                        ],
                        "description": "Reopen the last closed tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + Shift + T"
                            ],
                            "mac": [
                                "\u2318 + Shift + T"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl + Tab / Ctrl + PageDown"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + Tab",
                                "Ctrl + PageDown"
                            ],
                            "mac": [
                                "\u2318 + Option + Right Arrow"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl + Shift + Tab / Ctrl + PageUp"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + Shift + Tab",
                                "Ctrl + PageUp"
                            ],
                            "mac": [
                                "\u2318 + Option + Left Arrow"
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl + 1-8"
                        ],
                        "description": "Switch to a specific tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + 1-8"
                            ],
                            "mac": [
                                "\u2318 + 1-8"
                            ]
                        }
                    },
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl + 9"
                        ],
                        "description": "Switch to the last tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + 9"
                            ],
                            "mac": [
                                "\u2318 + 9"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Browser Navigation",
                "shortcuts": [
                    {
                        "id": "7",
                        "keys": [
                            "Alt + Left Arrow / Alt + Right Arrow"
                        ],
                        "description": "Go back / forward in history",
                        "platforms": {
                            "windows": [
                                "Alt + Left Arrow",
                                "Alt + Right Arrow"
                            ],
                            "mac": [
                                "\u2318 + [",
                                "\u2318 + ]"
                            ]
                        }
                    },
                    {
                        "id": "8",
                        "keys": [
                            "Ctrl + W"
                        ],
                        "description": "Close current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl + W"
                            ],
                            "mac": [
                                "\u2318 + W"
                            ]
                        }
                    },
                    {
                        "id": "9",
                        "keys": [
                            "Ctrl + Shift + W"
                        ],
                        "description": "Close entire window",
                        "platforms": {
                            "windows": [
                                "Ctrl + Shift + W"
                            ],
                            "mac": [
                                "\u2318 + Shift + W"
                            ]
                        }
                    },
                    {
                        "id": "10",
                        "keys": [
                            "Ctrl + N"
                        ],
                        "description": "Open a new window",
                        "platforms": {
                            "windows": [
                                "Ctrl + N"
                            ],
                            "mac": [
                                "\u2318 + N"
                            ]
                        }
                    },
                    {
                        "id": "11",
                        "keys": [
                            "Ctrl + Shift + N"
                        ],
                        "description": "Open a new incognito window",
                        "platforms": {
                            "windows": [
                                "Ctrl + Shift + N"
                            ],
                            "mac": [
                                "\u2318 + Shift + N"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "microsoft-edge": {
        id: "microsoft-edge",
        name: "Microsoft Edge",
        officialURL: "https://www.microsoft.com/edge",
        shortcutpageName: "Microsoft Edge Browser Keyboard Shortcuts",
        icon: "/icons/browsers/edge.png",
        description: "Mastering keyboard shortcuts in Microsoft Edge can streamline your browsing by enabling faster navigation, tab control, and management of browser settings on both Windows and macOS.",
        metadescription: "Check all Microsoft Edge Keyboard Shortcuts to browse efficiently. These Edge shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Navigation Shortcuts",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Ctrl (Control) + T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + T"
                            ],
                            "mac": [
                                "⌘ (Command) + T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control) + W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + W"
                            ],
                            "mac": [
                                "⌘ (Command) + W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control) + Tab"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Tab"
                            ],
                            "mac": [
                                "⌘ (Command) + Option (⌥) + →"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control) + Shift + Tab"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + Tab"
                            ],
                            "mac": [
                                "⌘ (Command) + Option (⌥) + ←"
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Alt + D"
                        ],
                        "description": "Focus the address bar",
                        "platforms": {
                            "windows": [
                                "Alt + D"
                            ],
                            "mac": [
                                "⌘ (Command) + L"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Tab and Window Management",
                "shortcuts": [
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control) + N"
                        ],
                        "description": "Open a new window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + N"
                            ],
                            "mac": [
                                "⌘ (Command) + N"
                            ]
                        }
                    },
                    {
                        "id": "7",
                        "keys": [
                            "Ctrl (Control) + Shift + N"
                        ],
                        "description": "Open a new InPrivate window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + N"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + N"
                            ]
                        }
                    },
                    {
                        "id": "8",
                        "keys": [
                            "Ctrl (Control) + Shift + T"
                        ],
                        "description": "Reopen the last closed tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + T"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + T"
                            ]
                        }
                    },
                    {
                        "id": "9",
                        "keys": [
                            "Ctrl (Control) + Shift + W"
                        ],
                        "description": "Close the current window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + W"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + W"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "History and Bookmarks",
                "shortcuts": [
                    {
                        "id": "10",
                        "keys": [
                            "Ctrl (Control) + H"
                        ],
                        "description": "Open history",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + H"
                            ],
                            "mac": [
                                "⌘ (Command) + Y"
                            ]
                        }
                    },
                    {
                        "id": "11",
                        "keys": [
                            "Ctrl (Control) + D"
                        ],
                        "description": "Bookmark the current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + D"
                            ],
                            "mac": [
                                "⌘ (Command) + D"
                            ]
                        }
                    },
                    {
                        "id": "12",
                        "keys": [
                            "Ctrl (Control) + Shift + B"
                        ],
                        "description": "Show or hide the favorites bar",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + B"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + B"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Zoom and Appearance",
                "shortcuts": [
                    {
                        "id": "13",
                        "keys": [
                            "Ctrl (Control) + +"
                        ],
                        "description": "Zoom in",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + +"
                            ],
                            "mac": [
                                "⌘ (Command) + +"
                            ]
                        }
                    },
                    {
                        "id": "14",
                        "keys": [
                            "Ctrl (Control) + -"
                        ],
                        "description": "Zoom out",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + -"
                            ],
                            "mac": [
                                "⌘ (Command) + -"
                            ]
                        }
                    },
                    {
                        "id": "15",
                        "keys": [
                            "Ctrl (Control) + 0"
                        ],
                        "description": "Reset zoom level",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + 0"
                            ],
                            "mac": [
                                "⌘ (Command) + 0"
                            ]
                        }
                    },
                    {
                        "id": "16",
                        "keys": [
                            "F11"
                        ],
                        "description": "Toggle full screen",
                        "platforms": {
                            "windows": [
                                "F11"
                            ],
                            "mac": [
                                "Control (^) + Command (⌘) + F"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "uc-browser": {
        id: "uc-browser",
        name: "UC Browser",
        officialURL: "https://www.ucweb.com/",
        shortcutpageName: "UC Browser Keyboard Shortcuts",
        icon: "/icons/browsers/uc-browser.svg",
        description: "Mastering keyboard shortcuts in UC Browser can improve your browsing experience by enabling efficient tab management, navigation, and customization on both Windows and macOS.",
        metadescription: "Check all UC Browser Keyboard Shortcuts to browse faster. These UC Browser shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Basic Shortcuts",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Ctrl (Control) + T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + T"
                            ],
                            "mac": [
                                "⌘ (Command) + T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control) + W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + W"
                            ],
                            "mac": [
                                "⌘ (Command) + W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control) + N"
                        ],
                        "description": "Open a new browser window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + N"
                            ],
                            "mac": [
                                "⌘ (Command) + N"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Special Features",
                "shortcuts": [
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control) + D"
                        ],
                        "description": "Bookmark the current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + D"
                            ],
                            "mac": [
                                "⌘ (Command) + D"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "tor-browser": {
        id: "tor-browser",
        name: "Tor Browser",
        officialURL: "https://www.torproject.org/",
        shortcutpageName: "Tor Browser Keyboard Shortcuts",
        icon: "/icons/browsers/tor.svg",
        description: "Mastering keyboard shortcuts in Tor Browser can make secure browsing more efficient, enabling quicker navigation, tab management, and privacy controls on both Windows and macOS.",
        metadescription: "Check all Tor Browser Keyboard Shortcuts to browse securely and efficiently. These Tor shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Basic Navigation",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Ctrl (Control) + T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + T"
                            ],
                            "mac": [
                                "⌘ (Command) + T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control) + W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + W"
                            ],
                            "mac": [
                                "⌘ (Command) + W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control) + Shift + P"
                        ],
                        "description": "Open a new private browsing window",
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
            },
            {
                "title": "Tab and Window Management",
                "shortcuts": [
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control) + Shift + T"
                        ],
                        "description": "Reopen the last closed tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + T"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + T"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "maxthon-browser": {
        id: "maxthon-browser",
        name: "Maxthon Browser",
        officialURL: "https://www.maxthon.com/",
        shortcutpageName: "Maxthon Browser Keyboard Shortcuts",
        icon: "/icons/browsers/maxthon.svg",
        description: "Mastering keyboard shortcuts in Maxthon Browser can enhance your browsing efficiency by allowing quicker navigation, tab management, and control of browser features on both Windows and macOS.",
        metadescription: "Check all Maxthon Browser Keyboard Shortcuts to optimize your browsing experience. These Maxthon shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: true,
        "groups": [
            {
                "title": "Navigation",
                "shortcuts": [
                    {
                        "id": "1",
                        "keys": [
                            "Ctrl (Control) + T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + T"
                            ],
                            "mac": [
                                "⌘ (Command) + T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control) + W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + W"
                            ],
                            "mac": [
                                "⌘ (Command) + W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control) + Tab"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Tab"
                            ],
                            "mac": [
                                "⌘ (Command) + Tab"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control) + Shift + Tab"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + Tab"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + Tab"
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl (Control) + L"
                        ],
                        "description": "Focus on the address bar",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + L"
                            ],
                            "mac": [
                                "⌘ (Command) + L"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Page Actions",
                "shortcuts": [
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control) + D"
                        ],
                        "description": "Bookmark the current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + D"
                            ],
                            "mac": [
                                "⌘ (Command) + D"
                            ]
                        }
                    },
                    {
                        "id": "7",
                        "keys": [
                            "F5"
                        ],
                        "description": "Refresh the current page",
                        "platforms": {
                            "windows": [
                                "F5"
                            ],
                            "mac": [
                                "⌘ (Command) + R"
                            ]
                        }
                    },
                    {
                        "id": "8",
                        "keys": [
                            "Ctrl (Control) + Shift + R"
                        ],
                        "description": "Reload the page without cache",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + R"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + R"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Window Management",
                "shortcuts": [
                    {
                        "id": "9",
                        "keys": [
                            "Ctrl (Control) + N"
                        ],
                        "description": "Open a new browser window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + N"
                            ],
                            "mac": [
                                "⌘ (Command) + N"
                            ]
                        }
                    },
                    {
                        "id": "10",
                        "keys": [
                            "Ctrl (Control) + Shift + N"
                        ],
                        "description": "Open a new incognito window",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + N"
                            ],
                            "mac": [
                                "⌘ (Command) + Shift + N"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Developer Tools",
                "shortcuts": [
                    {
                        "id": "11",
                        "keys": [
                            "Ctrl (Control) + Shift + I"
                        ],
                        "description": "Open Developer Tools",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + Shift + I"
                            ],
                            "mac": [
                                "⌘ (Command) + Option (⌥) + I"
                            ]
                        }
                    },
                    {
                        "id": "12",
                        "keys": [
                            "Ctrl (Control) + U"
                        ],
                        "description": "View page source",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control) + U"
                            ],
                            "mac": [
                                "⌘ (Command) + Option (⌥) + U"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "safari": {
        id: "safari",
        name: "Safari",
        officialURL: "https://www.apple.com/safari/",
        shortcutpageName: "Best Safari Browser Keyboard Shortcuts",
        icon: "/icons/browsers/safari.svg",
        description: "Mastering keyboard shortcuts in Safari can improve your browsing experience on macOS and Windows by enabling quicker navigation, tab management, and browser customization.",
        metadescription: "Check all Safari Keyboard Shortcuts to browse effortlessly. These Safari shortcuts are updated for MacOS and Windows OS.",
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
                            "T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "T"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control)",
                            "W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "W"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control)",
                            "Tab"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "]"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control)",
                            "Shift",
                            "Tab"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Shift",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "["
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl (Control)",
                            "L"
                        ],
                        "description": "Focus on the address bar",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "L"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "L"
                            ]
                        }
                    },
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control)",
                            "R"
                        ],
                        "description": "Reload the current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "R"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "R"
                            ]
                        }
                    },
                    {
                        "id": "7",
                        "keys": [
                            "Ctrl (Control)",
                            "H"
                        ],
                        "description": "Show history",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "H"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Y"
                            ]
                        }
                    },
                    {
                        "id": "8",
                        "keys": [
                            "Ctrl (Control)",
                            "D"
                        ],
                        "description": "Add current site to bookmarks",
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
                "title": "Page Navigation Shortcuts",
                "shortcuts": [
                    {
                        "id": "9",
                        "keys": [
                            "Space"
                        ],
                        "description": "Scroll down a full page",
                        "platforms": {
                            "windows": [
                                "Space"
                            ],
                            "mac": [
                                "Space"
                            ]
                        }
                    },
                    {
                        "id": "10",
                        "keys": [
                            "Shift",
                            "Space"
                        ],
                        "description": "Scroll up a full page",
                        "platforms": {
                            "windows": [
                                "Shift",
                                "Space"
                            ],
                            "mac": [
                                "Shift",
                                "Space"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "opera-browser": {
        id: "opera-browser",
        name: "Opera Browser",
        officialURL: "https://www.opera.com/",
        shortcutpageName: "Opera Browser Keyboard Shortcuts",
        icon: "/icons/browsers/opera.svg",
        description: "Mastering keyboard shortcuts in Opera Browser can make browsing faster and more efficient by enabling quick navigation, tab control, and feature management on both Windows and macOS.",
        metadescription: "Check all Opera Browser Keyboard Shortcuts to enhance your browsing experience. These Opera shortcuts are updated for MacOS and Windows OS.",
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
                            "T"
                        ],
                        "description": "Open a new tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "T"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "T"
                            ]
                        }
                    },
                    {
                        "id": "2",
                        "keys": [
                            "Ctrl (Control)",
                            "W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "W"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "W"
                            ]
                        }
                    },
                    {
                        "id": "3",
                        "keys": [
                            "Ctrl (Control)",
                            "Shift",
                            "T"
                        ],
                        "description": "Reopen the last closed tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Shift",
                                "T"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "T"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control)",
                            "Tab"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Option",
                                "Right Arrow"
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl (Control)",
                            "Shift",
                            "Tab"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Shift",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Option",
                                "Left Arrow"
                            ]
                        }
                    },
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control)",
                            "L"
                        ],
                        "description": "Focus the address bar",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "L"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "L"
                            ]
                        }
                    },
                    {
                        "id": "7",
                        "keys": [
                            "Ctrl (Control)",
                            "Shift",
                            "B"
                        ],
                        "description": "Show or hide the bookmarks bar",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Shift",
                                "B"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "B"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "Page Shortcuts",
                "shortcuts": [
                    {
                        "id": "8",
                        "keys": [
                            "F5"
                        ],
                        "description": "Reload the current page",
                        "platforms": {
                            "windows": [
                                "F5"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "R"
                            ]
                        }
                    },
                    {
                        "id": "9",
                        "keys": [
                            "Ctrl (Control)",
                            "R"
                        ],
                        "description": "Reload the current page",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "R"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "R"
                            ]
                        }
                    },
                    {
                        "id": "10",
                        "keys": [
                            "Ctrl (Control)",
                            "F5"
                        ],
                        "description": "Reload the current page ignoring cached content",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "F5"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "R"
                            ]
                        }
                    },
                    {
                        "id": "11",
                        "keys": [
                            "Alt",
                            "Left Arrow"
                        ],
                        "description": "Go back a page",
                        "platforms": {
                            "windows": [
                                "Alt",
                                "Left Arrow"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "["
                            ]
                        }
                    },
                    {
                        "id": "12",
                        "keys": [
                            "Alt",
                            "Right Arrow"
                        ],
                        "description": "Go forward a page",
                        "platforms": {
                            "windows": [
                                "Alt",
                                "Right Arrow"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "]"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    "arc-browser": {
        id: "arc-browser",
        name: "Arc Browser",
        officialURL: "https://arc.net/",
        shortcutpageName: "Arc Browser Keyboard Shortcuts",
        icon: "/icons/browsers/arc.svg",
        description: "Mastering keyboard shortcuts in Arc Browser can improve your browsing productivity by allowing faster navigation, tab management, and efficient use of browser features on both Windows and macOS.",
        metadescription: "Check all Arc Browser Keyboard Shortcuts to browse effectively. These Arc Browser shortcuts are updated for MacOS and Windows OS.",
        platforms: ["windows", "macos"],
        featured: false,
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
                        "description": "Open a ROM or File",
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
                        "description": "Create a new tab",
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
                            "W"
                        ],
                        "description": "Close the current tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "W"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "W"
                            ]
                        }
                    },
                    {
                        "id": "4",
                        "keys": [
                            "Ctrl (Control)",
                            "Tab"
                        ],
                        "description": "Switch to the next tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Tab"
                            ]
                        }
                    },
                    {
                        "id": "5",
                        "keys": [
                            "Ctrl (Control)",
                            "Shift",
                            "Tab"
                        ],
                        "description": "Switch to the previous tab",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Shift",
                                "Tab"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Shift",
                                "Tab"
                            ]
                        }
                    }
                ]
            },
            {
                "title": "General Shortcuts",
                "shortcuts": [
                    {
                        "id": "6",
                        "keys": [
                            "Ctrl (Control)",
                            "S"
                        ],
                        "description": "Save current configuration",
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
                        "id": "7",
                        "keys": [
                            "Ctrl (Control)",
                            "Q"
                        ],
                        "description": "Quit Arc Browser",
                        "platforms": {
                            "windows": [
                                "Ctrl (Control)",
                                "Q"
                            ],
                            "mac": [
                                "\u2318 (Command)",
                                "Q"
                            ]
                        }
                    },
                    {
                        "id": "8",
                        "keys": [
                            "Ctrl (Control)",
                            "Z"
                        ],
                        "description": "Undo the last action",
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
                        "description": "Redo the last undone action",
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
                    }
                ]
            }
        ]
    }

};


// as const;

// export type Browsers = typeof browsers;
// export type BrowserId = keyof Browsers;