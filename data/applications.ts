
// data/applications.ts
// import { Application } from "@/types/shortcut";

// export interface BaseItem {
//   id: string;
//   name: string;
//   icon: string;
//   description: string;
//   featured?: boolean;
//   platforms?: ReadonlyArray<string>;
//   groups?: ReadonlyArray<{
//     title: string;
//     shortcuts: ReadonlyArray<{
//       id: string;
//       description: string;
//       keys: ReadonlyArray<string>;
//       platforms?: {
//         windows?: ReadonlyArray<string>;
//         mac?: ReadonlyArray<string>;
//       };
//     }>;
//   }>;
// }

// export interface CategoryCardProps {
//   title: string;
//   items: ReadonlyArray<BaseItem>;
//   baseUrl: string;
// }

// Add this type assertion utility
// export type ValidId<T> = T extends { [key: string]: any } ? keyof T : never;

import { CategoryItems } from "@/data/types";

export const applications: CategoryItems = {
  "microsoft-word": {
    id: "microsoft-word",
    name: "Microsoft Word",
    officialURL: "https://www.microsoft.com/microsoft-365/word",
    shortcutpageName: "45+ Microsoft Word Keyboard Shortcuts",
    icon: "/icons/software/microsoft-word.svg",
    description: "Mastering keyboard shortcuts in Microsoft Word can significantly enhance your productivity by enabling quick navigation, editing, and formatting of documents. These shortcuts are essential for users seeking to streamline their document creation process.",
    metadescription: "Check all Microsoft Word Keyboard Shortcuts to boost your productivity. These Microsoft Word shortcuts will save you time when creating and editing documents.",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "General Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new document",
            platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an existing document",
            platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Save the current document",
            platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "P"],
            description: "Print the document",
            platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "W"],
            description: "Close the current document",
            platforms: { windows: ["Ctrl (Control)", "+", "W"], mac: ["⌘ (Command)", "+", "W"] }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "Q"],
            description: "Quit Microsoft Word",
            platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "Q"] }
          }
        ]
      },
      {
        title: "Text Editing",
        shortcuts: [
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "X"],
            description: "Cut selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Copy selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "V"],
            description: "Paste copied text",
            platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Undo the last action",
            platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Y"],
            description: "Redo the last action",
            platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "A"],
            description: "Select all text",
            platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
          }
        ]
      },
      {
        title: "Formatting",
        shortcuts: [
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Apply bold formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "I"],
            description: "Apply italic formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
          },
          {
            id: "15",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Apply underline formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
          },
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "D"],
            description: "Apply double underline",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "D"], mac: ["⌘ (Command)", "+", "Shift", "+", "D"] }
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "W"],
            description: "Underline words, not spaces",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "W"], mac: ["⌘ (Command)", "+", "Shift", "+", "W"] }
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "K"],
            description: "Format text as small caps",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "K"], mac: ["⌘ (Command)", "+", "Shift", "+", "K"] }
          }
        ]
      }
    ]
  },
  "microsoft-powerpoint": {
    id: "microsoft-powerpoint",
    name: "Microsoft PowerPoint",
    officialURL: "https://www.microsoft.com/microsoft-365/powerpoint",

    shortcutpageName: "Microsoft PowerPoint Keyboard Shortcuts",
    icon: "/icons/software/microsoft-powerpoint.png",
    description: "Mastering keyboard shortcuts in Microsoft PowerPoint can streamline the process of creating and editing presentations. These shortcuts allow users to efficiently format slides, navigate, and execute commands, making them essential for productivity.",
    metadescription: "Check all Microsoft PowerPoint Keyboard Shortcuts to create presentations more efficiently. These PowerPoint shortcuts will help you save time.",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "General Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new presentation",
            platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an existing presentation",
            platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Save the current presentation",
            platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "P"],
            description: "Print the current presentation",
            platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "W"],
            description: "Close the current presentation",
            platforms: { windows: ["Ctrl (Control)", "+", "W"], mac: ["⌘ (Command)", "+", "W"] }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "Q"],
            description: "Quit PowerPoint",
            platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "Q"] }
          }
        ]
      },
      {
        title: "Text Editing",
        shortcuts: [
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "X"],
            description: "Cut selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Copy selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "V"],
            description: "Paste copied text",
            platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Undo the last action",
            platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Y"],
            description: "Redo the last undone action",
            platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "A"],
            description: "Select all objects",
            platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
          }
        ]
      },
      {
        title: "Presentation View Shortcuts",
        shortcuts: [
          {
            id: "13",
            keys: ["F5"],
            description: "Start slideshow from the beginning",
            platforms: { windows: ["F5"], mac: ["⌘ (Command)", "+", "Return"] }
          },
          {
            id: "14",
            keys: ["Shift", "+", "F5"],
            description: "Start slideshow from the current slide",
            platforms: { windows: ["Shift", "+", "F5"], mac: ["Shift", "+", "⌘ (Command)", "+", "Return"] }
          },
          {
            id: "15",
            keys: ["Esc"],
            description: "End the slideshow",
            platforms: { windows: ["Esc"], mac: ["Esc"] }
          }
        ]
      },
      {
        title: "Navigation Shortcuts",
        shortcuts: [
          {
            id: "16",
            keys: ["Arrow (Right)"],
            description: "Go to the next slide",
            platforms: { windows: ["Arrow (Right)"], mac: ["Arrow (Right)"] }
          },
          {
            id: "17",
            keys: ["Arrow (Left)"],
            description: "Go to the previous slide",
            platforms: { windows: ["Arrow (Left)"], mac: ["Arrow (Left)"] }
          },
          {
            id: "18",
            keys: ["Home"],
            description: "Go to the first slide",
            platforms: { windows: ["Home"], mac: ["Fn", "+", "Arrow (Left)"] }
          },
          {
            id: "19",
            keys: ["End"],
            description: "Go to the last slide",
            platforms: { windows: ["End"], mac: ["Fn", "+", "Arrow (Right)"] }
          }
        ]
      },
      {
        title: "Formatting",
        shortcuts: [
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Apply bold formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "I"],
            description: "Apply italic formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
          },
          {
            id: "22",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Apply underline formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
          }
        ]
      },
      {
        title: "Object Management",
        shortcuts: [
          {
            id: "23",
            keys: ["Ctrl (Control)", "+", "D"],
            description: "Duplicate the selected object",
            platforms: { windows: ["Ctrl (Control)", "+", "D"], mac: ["⌘ (Command)", "+", "D"] }
          },
          {
            id: "24",
            keys: ["Delete"],
            description: "Delete the selected object",
            platforms: { windows: ["Delete"], mac: ["Delete"] }
          },
          {
            id: "25",
            keys: ["Ctrl (Control)", "+", "G"],
            description: "Group selected objects",
            platforms: { windows: ["Ctrl (Control)", "+", "G"], mac: ["⌘ (Command)", "+", "G"] }
          },
          {
            id: "26",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "G"],
            description: "Ungroup selected objects",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "G"], mac: ["⌘ (Command)", "+", "Shift", "+", "G"] }
          }
        ]
      }
    ]
  },
  "microsoft-outlook": {
    id: "microsoft-outlook",
    name: "Microsoft Outlook",
    officialURL: "https://www.microsoft.com/microsoft-365/outlook",

    shortcutpageName: "30+ Microsoft Outlook Keyboard Shortcuts",
    icon: "/icons/software/microsoft-outlook.png",
    description: "Mastering keyboard shortcuts in Microsoft Outlook can help manage emails, calendars, and tasks more effectively. These shortcuts allow users to navigate through their inbox, schedule meetings, and complete tasks efficiently.",
    metadescription: "Check all Microsoft Outlook Keyboard Shortcuts to manage emails, calendars, and tasks quickly. These Outlook shortcuts will make your workflow smoother.",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "General Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new item",
            platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an item",
            platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Save an item",
            platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "P"],
            description: "Print the selected item",
            platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Q"],
            description: "Mark the selected email as read",
            platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "T"] }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Mark the selected email as unread",
            platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "Shift", "+", "T"] }
          }
        ]
      },
      {
        title: "Navigation Shortcuts",
        shortcuts: [
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "1"],
            description: "Switch to Mail",
            platforms: { windows: ["Ctrl (Control)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "2"],
            description: "Switch to Calendar",
            platforms: { windows: ["Ctrl (Control)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "3"],
            description: "Switch to Contacts",
            platforms: { windows: ["Ctrl (Control)", "+", "3"], mac: ["⌘ (Command)", "+", "3"] }
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "4"],
            description: "Switch to Tasks",
            platforms: { windows: ["Ctrl (Control)", "+", "4"], mac: ["⌘ (Command)", "+", "4"] }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "5"],
            description: "Switch to Notes",
            platforms: { windows: ["Ctrl (Control)", "+", "5"], mac: ["⌘ (Command)", "+", "5"] }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "I"],
            description: "Go to Inbox",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "I"], mac: ["⌘ (Command)", "+", "Shift", "+", "I"] }
          },
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "O"],
            description: "Go to Outbox",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "O"], mac: ["⌘ (Command)", "+", "Shift", "+", "O"] }
          }
        ]
      },
      {
        title: "Email Management",
        shortcuts: [
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "R"],
            description: "Reply to the email",
            platforms: { windows: ["Ctrl (Control)", "+", "R"], mac: ["⌘ (Command)", "+", "R"] }
          },
          {
            id: "15",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "R"],
            description: "Reply all to the email",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "R"], mac: ["⌘ (Command)", "+", "Shift", "+", "R"] }
          },
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "F"],
            description: "Forward the email",
            platforms: { windows: ["Ctrl (Control)", "+", "F"], mac: ["⌘ (Command)", "+", "J"] }
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "Enter"],
            description: "Send the email",
            platforms: { windows: ["Ctrl (Control)", "+", "Enter"], mac: ["⌘ (Command)", "+", "Return"] }
          },
          {
            id: "18",
            keys: ["Delete"],
            description: "Delete the selected email",
            platforms: { windows: ["Delete"], mac: ["Delete"] }
          }
        ]
      },
      {
        title: "Calendar Management",
        shortcuts: [
          {
            id: "19",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "A"],
            description: "Create a new appointment",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "A"], mac: ["⌘ (Command)", "+", "Shift", "+", "N"] }
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Q"],
            description: "Create a new meeting request",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "Q"], mac: ["⌘ (Command)", "+", "Shift", "+", "Q"] }
          },
          {
            id: "21",
            keys: ["Alt (Alt)", "+", "0"],
            description: "Switch to Month view",
            platforms: { windows: ["Alt (Alt)", "+", "0"], mac: ["⌘ (Command)", "+", "3"] }
          },
          {
            id: "22",
            keys: ["Alt (Alt)", "+", "1"],
            description: "Switch to Day view",
            platforms: { windows: ["Alt (Alt)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
          },
          {
            id: "23",
            keys: ["Alt (Alt)", "+", "2"],
            description: "Switch to Work Week view",
            platforms: { windows: ["Alt (Alt)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
          },
          {
            id: "24",
            keys: ["Alt (Alt)", "+", "3"],
            description: "Switch to Full Week view",
            platforms: { windows: ["Alt (Alt)", "+", "3"], mac: ["⌘ (Command)", "+", "3"] }
          }
        ]
      }
    ]
  },
  "microsoft-excel": {
    id: "microsoft-excel",
    name: "Microsoft Excel",
    officialURL: "https://www.microsoft.com/microsoft-365/excel",

    shortcutpageName: "Microsoft Excel Keyboard Shortcuts",
    icon: "/icons/software/microsoft-excel.png",
    description: "Mastering keyboard shortcuts in Microsoft Excel can greatly enhance your efficiency by enabling quick data analysis, formula input, and spreadsheet management. These shortcuts are invaluable for both novice and experienced users.",
    metadescription: "Check all Microsoft Excel Keyboard Shortcuts to work smarter. These Excel shortcuts will save you time on data analysis and spreadsheet management.",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "Basic Editing Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Copy selected cells",
            platforms: {
              windows: ["Ctrl (Control)", "+", "C"],
              mac: ["⌘ (Command)", "+", "C"]
            }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "V"],
            description: "Paste content into selected cells",
            platforms: {
              windows: ["Ctrl (Control)", "+", "V"],
              mac: ["⌘ (Command)", "+", "V"]
            }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "X"],
            description: "Cut selected cells",
            platforms: {
              windows: ["Ctrl (Control)", "+", "X"],
              mac: ["⌘ (Command)", "+", "X"]
            }
          },
          {
            id: "4",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Undo the last action",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Z"],
              mac: ["⌘ (Command)", "+", "Z"]
            }
          },
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "Y"],
            description: "Redo the last undone action",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Y"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "Z"]
            }
          }
        ]
      },
      {
        title: "Navigation Shortcuts",
        shortcuts: [
          {
            id: "6",
            keys: ["Arrow (Up)"],
            description: "Move one cell up",
            platforms: {
              windows: ["Arrow (Up)"],
              mac: ["Arrow (Up)"]
            }
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "Arrow (Down)"],
            description: "Move to the bottom edge of the current data region",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Arrow (Down)"],
              mac: ["⌘ (Command)", "+", "Arrow (Down)"]
            }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "Arrow (Right)"],
            description: "Move to the right edge of the current data region",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Arrow (Right)"],
              mac: ["⌘ (Command)", "+", "Arrow (Right)"]
            }
          }
        ]
      },
      {
        title: "Formatting Shortcuts",
        shortcuts: [
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Apply bold formatting to selected text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "B"],
              mac: ["⌘ (Command)", "+", "B"]
            }
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "I"],
            description: "Apply italic formatting to selected text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "I"],
              mac: ["⌘ (Command)", "+", "I"]
            }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Underline selected text",
            platforms: {
              windows: ["Ctrl (Control)", "+", "U"],
              mac: ["⌘ (Command)", "+", "U"]
            }
          }
        ]
      },
      {
        title: "Data Management Shortcuts",
        shortcuts: [
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "T"],
            description: "Convert selected data into a table",
            platforms: {
              windows: ["Ctrl (Control)", "+", "T"],
              mac: ["⌘ (Command)", "+", "T"]
            }
          },
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "L"],
            description: "Apply or remove filters",
            platforms: {
              windows: ["Ctrl (Control)", "+", "Shift", "+", "L"],
              mac: ["⌘ (Command)", "+", "Shift", "+", "L"]
            }
          }
        ]
      },
      {
        title: "Workbook Shortcuts",
        shortcuts: [
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new workbook",
            platforms: {
              windows: ["Ctrl (Control)", "+", "N"],
              mac: ["⌘ (Command)", "+", "N"]
            }
          },
          {
            id: "15",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an existing workbook",
            platforms: {
              windows: ["Ctrl (Control)", "+", "O"],
              mac: ["⌘ (Command)", "+", "O"]
            }
          },
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Save the current workbook",
            platforms: {
              windows: ["Ctrl (Control)", "+", "S"],
              mac: ["⌘ (Command)", "+", "S"]
            }
          }
        ]
      }
    ]
  },
  // "microsoft-access": {
  //   id: "microsoft-access",
  //   name: "Microsoft Access",
  //   icon: "/icons/software/microsoft-access.png",
  //   description: "Shortcuts for Microsoft Access - Database management and form design",
  //   platforms: ["windows", "macos"],
  //   featured: true,
  //   groups: [
  //     {
  //       title: "General Shortcuts",
  //       shortcuts: [
  //         {
  //           id: "1",
  //           keys: ["Ctrl (Control)", "+", "N"],
  //           description: "Create a new database",
  //           platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
  //         },
  //         {
  //           id: "2",
  //           keys: ["Ctrl (Control)", "+", "O"],
  //           description: "Open an existing database",
  //           platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
  //         },
  //         {
  //           id: "3",
  //           keys: ["Ctrl (Control)", "+", "S"],
  //           description: "Save the current object",
  //           platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
  //         },
  //         {
  //           id: "4",
  //           keys: ["Alt (Alt)", "+", "F4"],
  //           description: "Close Microsoft Access",
  //           platforms: { windows: ["Alt (Alt)", "+", "F4"], mac: ["⌘ (Command)", "+", "Q"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Data Navigation",
  //       shortcuts: [
  //         {
  //           id: "5",
  //           keys: ["Tab"],
  //           description: "Move to the next field in a form or table",
  //           platforms: { windows: ["Tab"], mac: ["Tab"] }
  //         },
  //         {
  //           id: "6",
  //           keys: ["Shift", "+", "Tab"],
  //           description: "Move to the previous field",
  //           platforms: { windows: ["Shift", "+", "Tab"], mac: ["Shift", "+", "Tab"] }
  //         },
  //         {
  //           id: "7",
  //           keys: ["Ctrl (Control)", "+", "Arrow (Right)"],
  //           description: "Move to the next record",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Arrow (Right)"], mac: ["⌘ (Command)", "+", "Arrow (Right)"] }
  //         },
  //         {
  //           id: "8",
  //           keys: ["Ctrl (Control)", "+", "Arrow (Left)"],
  //           description: "Move to the previous record",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Arrow (Left)"], mac: ["⌘ (Command)", "+", "Arrow (Left)"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Form Design",
  //       shortcuts: [
  //         {
  //           id: "9",
  //           keys: ["Ctrl (Control)", "+", "D"],
  //           description: "Duplicate the selected control",
  //           platforms: { windows: ["Ctrl (Control)", "+", "D"], mac: ["⌘ (Command)", "+", "D"] }
  //         },
  //         {
  //           id: "10",
  //           keys: ["Delete"],
  //           description: "Delete the selected control",
  //           platforms: { windows: ["Delete"], mac: ["Delete"] }
  //         },
  //         {
  //           id: "11",
  //           keys: ["Ctrl (Control)", "+", "Shift", "+", "G"],
  //           description: "Group selected controls",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "G"], mac: ["⌘ (Command)", "+", "Shift", "+", "G"] }
  //         },
  //         {
  //           id: "12",
  //           keys: ["Ctrl (Control)", "+", "Shift", "+", "U"],
  //           description: "Ungroup selected controls",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "U"], mac: ["⌘ (Command)", "+", "Shift", "+", "U"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Search and Replace",
  //       shortcuts: [
  //         {
  //           id: "13",
  //           keys: ["Ctrl (Control)", "+", "F"],
  //           description: "Find a record",
  //           platforms: { windows: ["Ctrl (Control)", "+", "F"], mac: ["⌘ (Command)", "+", "F"] }
  //         },
  //         {
  //           id: "14",
  //           keys: ["Ctrl (Control)", "+", "H"],
  //           description: "Replace data",
  //           platforms: { windows: ["Ctrl (Control)", "+", "H"], mac: ["⌘ (Command)", "+", "H"] }
  //         },
  //         {
  //           id: "15",
  //           keys: ["F3"],
  //           description: "Repeat the last Find or Replace action",
  //           platforms: { windows: ["F3"], mac: ["Fn", "+", "F3"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Data Entry",
  //       shortcuts: [
  //         {
  //           id: "16",
  //           keys: ["Ctrl (Control)", "+", ";"],
  //           description: "Insert the current date",
  //           platforms: { windows: ["Ctrl (Control)", "+", ";"], mac: ["⌘ (Command)", "+", ";"] }
  //         },
  //         {
  //           id: "17",
  //           keys: ["Ctrl (Control)", "+", ":"],
  //           description: "Insert the current time",
  //           platforms: { windows: ["Ctrl (Control)", "+", ":"], mac: ["⌘ (Command)", "+", ":"] }
  //         },
  //         {
  //           id: "18",
  //           keys: ["Ctrl (Control)", "+", "Enter"],
  //           description: "Save the current record",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Enter"], mac: ["⌘ (Command)", "+", "Enter"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "View and Navigation",
  //       shortcuts: [
  //         {
  //           id: "19",
  //           keys: ["F11"],
  //           description: "Toggle the Navigation Pane",
  //           platforms: { windows: ["F11"], mac: ["Fn", "+", "F11"] }
  //         },
  //         {
  //           id: "20",
  //           keys: ["Ctrl (Control)", "+", ","],
  //           description: "Switch to Datasheet View",
  //           platforms: { windows: ["Ctrl (Control)", "+", ","], mac: ["⌘ (Command)", "+", ","] }
  //         },
  //         {
  //           id: "21",
  //           keys: ["Ctrl (Control)", "+", "."],
  //           description: "Switch to Design View",
  //           platforms: { windows: ["Ctrl (Control)", "+", "."], mac: ["⌘ (Command)", "+", "."] }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // "microsoft-onenote": {
  //   id: "microsoft-onenote",
  //   name: "Microsoft OneNote",
  //   icon: "/icons/software/microsoft-onenote.png",
  //   description: "Shortcuts for Microsoft OneNote - Note-taking and organization",
  //   platforms: ["windows", "macos"],
  //   featured: true,
  //   groups: [
  //     {
  //       title: "General Shortcuts",
  //       shortcuts: [
  //         {
  //           id: "1",
  //           keys: ["Ctrl (Control)", "+", "N"],
  //           description: "Create a new notebook",
  //           platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
  //         },
  //         {
  //           id: "2",
  //           keys: ["Ctrl (Control)", "+", "O"],
  //           description: "Open an existing notebook",
  //           platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
  //         },
  //         {
  //           id: "3",
  //           keys: ["Ctrl (Control)", "+", "S"],
  //           description: "Sync the current notebook",
  //           platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
  //         },
  //         {
  //           id: "4",
  //           keys: ["Alt (Alt)", "+", "F4"],
  //           description: "Close Microsoft OneNote",
  //           platforms: { windows: ["Alt (Alt)", "+", "F4"], mac: ["⌘ (Command)", "+", "Q"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Text Editing",
  //       shortcuts: [
  //         {
  //           id: "5",
  //           keys: ["Ctrl (Control)", "+", "X"],
  //           description: "Cut selected text",
  //           platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
  //         },
  //         {
  //           id: "6",
  //           keys: ["Ctrl (Control)", "+", "C"],
  //           description: "Copy selected text",
  //           platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
  //         },
  //         {
  //           id: "7",
  //           keys: ["Ctrl (Control)", "+", "V"],
  //           description: "Paste copied text",
  //           platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
  //         },
  //         {
  //           id: "8",
  //           keys: ["Ctrl (Control)", "+", "Z"],
  //           description: "Undo the last action",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
  //         },
  //         {
  //           id: "9",
  //           keys: ["Ctrl (Control)", "+", "Y"],
  //           description: "Redo the last undone action",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
  //         },
  //         {
  //           id: "10",
  //           keys: ["Ctrl (Control)", "+", "A"],
  //           description: "Select all text on the page",
  //           platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Page and Notebook Navigation",
  //       shortcuts: [
  //         {
  //           id: "11",
  //           keys: ["Ctrl (Control)", "+", "Tab"],
  //           description: "Switch to the next page",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Tab"], mac: ["⌘ (Command)", "+", "]"] }
  //         },
  //         {
  //           id: "12",
  //           keys: ["Ctrl (Control)", "+", "Shift", "+", "Tab"],
  //           description: "Switch to the previous page",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "Tab"], mac: ["⌘ (Command)", "+", "["] }
  //         },
  //         {
  //           id: "13",
  //           keys: ["Ctrl (Control)", "+", "G"],
  //           description: "Navigate to the next notebook",
  //           platforms: { windows: ["Ctrl (Control)", "+", "G"], mac: ["⌘ (Command)", "+", "G"] }
  //         },
  //         {
  //           id: "14",
  //           keys: ["Ctrl (Control)", "+", "E"],
  //           description: "Search all notebooks",
  //           platforms: { windows: ["Ctrl (Control)", "+", "E"], mac: ["⌘ (Command)", "+", "E"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Formatting",
  //       shortcuts: [
  //         {
  //           id: "15",
  //           keys: ["Ctrl (Control)", "+", "B"],
  //           description: "Apply bold formatting",
  //           platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
  //         },
  //         {
  //           id: "16",
  //           keys: ["Ctrl (Control)", "+", "I"],
  //           description: "Apply italic formatting",
  //           platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
  //         },
  //         {
  //           id: "17",
  //           keys: ["Ctrl (Control)", "+", "U"],
  //           description: "Apply underline formatting",
  //           platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
  //         },
  //         {
  //           id: "18",
  //           keys: ["Ctrl (Control)", "+", "Shift", "+", "D"],
  //           description: "Apply strikethrough formatting",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "D"], mac: ["⌘ (Command)", "+", "Shift", "+", "D"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Tagging and To-Do Lists",
  //       shortcuts: [
  //         {
  //           id: "19",
  //           keys: ["Ctrl (Control)", "+", "1"],
  //           description: "Mark as To-Do",
  //           platforms: { windows: ["Ctrl (Control)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
  //         },
  //         {
  //           id: "20",
  //           keys: ["Ctrl (Control)", "+", "2"],
  //           description: "Mark as Important",
  //           platforms: { windows: ["Ctrl (Control)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
  //         },
  //         {
  //           id: "21",
  //           keys: ["Ctrl (Control)", "+", "Shift", "+", "K"],
  //           description: "Add a link to a tag",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "K"], mac: ["⌘ (Command)", "+", "Shift", "+", "K"] }
  //         }
  //       ]
  //     },
  //     {
  //       title: "Inserting Content",
  //       shortcuts: [
  //         {
  //           id: "22",
  //           keys: ["Alt (Alt)", "+", "N", "+", "P"],
  //           description: "Insert a picture",
  //           platforms: { windows: ["Alt (Alt)", "+", "N", "+", "P"], mac: ["⌘ (Command)", "+", "Option", "+", "P"] }
  //         },
  //         {
  //           id: "23",
  //           keys: ["Alt (Alt)", "+", "N", "+", "T"],
  //           description: "Insert a table",
  //           platforms: { windows: ["Alt (Alt)", "+", "N", "+", "T"], mac: ["⌘ (Command)", "+", "Option", "+", "T"] }
  //         },
  //         {
  //           id: "24",
  //           keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "D"],
  //           description: "Insert the current date and time",
  //           platforms: { windows: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "D"], mac: ["⌘ (Command)", "+", "Option", "+", "D"] }
  //         }
  //       ]
  //     }
  //   ]
  // },
  photoshop: {
    id: "photoshop",
    name: "Adobe Photoshop",
    officialURL: "https://www.adobe.com/products/photoshop.html",

    shortcutpageName: "Adobe Photoshop Keyboard Shortcuts",
    icon: "/icons/software/photoshop.svg",
    description: "Mastering keyboard shortcuts in Adobe Photoshop can streamline your image editing workflow, enabling efficient navigation, tool selection, and editing on both Windows and macOS platforms.",
    metadescription: "Check all Adobe Photoshop Keyboard Shortcuts to edit images faster. These Photoshop shortcuts will optimize your workflow for Windows and macOS.",
    platforms: ["windows", "macos"],
    featured: false,
    groups: [
      {
        title: "Essential Tools",
        shortcuts: [
          {
            id: "1",
            keys: ["V"],
            description: "Move Tool",
            platforms: { windows: ["V"], mac: ["V"] }
          },
          {
            id: "2",
            keys: ["M"],
            description: "Rectangular Marquee Tool",
            platforms: { windows: ["M"], mac: ["M"] }
          },
          {
            id: "3",
            keys: ["L"],
            description: "Lasso Tool",
            platforms: { windows: ["L"], mac: ["L"] }
          },
          {
            id: "4",
            keys: ["W"],
            description: "Magic Wand Tool",
            platforms: { windows: ["W"], mac: ["W"] }
          },
          {
            id: "5",
            keys: ["C"],
            description: "Crop Tool",
            platforms: { windows: ["C"], mac: ["C"] }
          }
        ],
      },
      {
        title: "File Operations",
        shortcuts: [
          {
            id: "6",
            keys: ["Ctrl", "N"],
            description: "New Document",
            platforms: {
              windows: ["Ctrl", "N"],
              mac: ["⌘", "N"]
            }
          },
          {
            id: "7",
            keys: ["Ctrl", "O"],
            description: "Open File",
            platforms: {
              windows: ["Ctrl", "O"],
              mac: ["⌘", "O"]
            }
          },
          {
            id: "8",
            keys: ["Ctrl", "S"],
            description: "Save",
            platforms: {
              windows: ["Ctrl", "S"],
              mac: ["⌘", "S"]
            }
          },
          {
            id: "9",
            keys: ["Ctrl", "Shift", "S"],
            description: "Save As",
            platforms: {
              windows: ["Ctrl", "Shift", "S"],
              mac: ["⌘", "Shift", "S"]
            }
          },
          {
            id: "10",
            keys: ["Ctrl", "Alt", "S"],
            description: "Save for Web",
            platforms: {
              windows: ["Ctrl", "Alt", "S"],
              mac: ["⌘", "Option", "S"]
            }
          }
        ],
      },
      {
        title: "Edit Operations",
        shortcuts: [
          {
            id: "11",
            keys: ["Ctrl", "Z"],
            description: "Undo/Redo",
            platforms: {
              windows: ["Ctrl", "Z"],
              mac: ["⌘", "Z"]
            }
          },
          {
            id: "12",
            keys: ["Ctrl", "Alt", "Z"],
            description: "Step Backward",
            platforms: {
              windows: ["Ctrl", "Alt", "Z"],
              mac: ["⌘", "Option", "Z"]
            }
          },
          {
            id: "13",
            keys: ["Ctrl", "Shift", "Z"],
            description: "Step Forward",
            platforms: {
              windows: ["Ctrl", "Shift", "Z"],
              mac: ["⌘", "Shift", "Z"]
            }
          }
        ],
      },
      {
        title: "Image Adjustments",
        shortcuts: [
          {
            id: "14",
            keys: ["Ctrl", "L"],
            description: "Levels",
            platforms: {
              windows: ["Ctrl", "L"],
              mac: ["⌘", "L"]
            }
          },
          {
            id: "15",
            keys: ["Ctrl", "M"],
            description: "Curves",
            platforms: {
              windows: ["Ctrl", "M"],
              mac: ["⌘", "M"]
            }
          },
          {
            id: "16",
            keys: ["Ctrl", "U"],
            description: "Hue/Saturation",
            platforms: {
              windows: ["Ctrl", "U"],
              mac: ["⌘", "U"]
            }
          }
        ],
      },
      {
        title: "Layer Operations",
        shortcuts: [
          {
            id: "17",
            keys: ["Ctrl", "J"],
            description: "Duplicate Layer",
            platforms: {
              windows: ["Ctrl", "J"],
              mac: ["⌘", "J"]
            }
          },
          {
            id: "18",
            keys: ["Ctrl", "G"],
            description: "Group Layers",
            platforms: {
              windows: ["Ctrl", "G"],
              mac: ["⌘", "G"]
            }
          },
          {
            id: "19",
            keys: ["Ctrl", "Shift", "N"],
            description: "New Layer",
            platforms: {
              windows: ["Ctrl", "Shift", "N"],
              mac: ["⌘", "Shift", "N"]
            }
          }
        ],
      },
      {
        title: "View Controls",
        shortcuts: [
          {
            id: "20",
            keys: ["Ctrl", "+"],
            description: "Zoom In",
            platforms: {
              windows: ["Ctrl", "+"],
              mac: ["⌘", "+"]
            }
          },
          {
            id: "21",
            keys: ["Ctrl", "-"],
            description: "Zoom Out",
            platforms: {
              windows: ["Ctrl", "-"],
              mac: ["⌘", "-"]
            }
          },
          {
            id: "22",
            keys: ["Ctrl", "0"],
            description: "Fit on Screen",
            platforms: {
              windows: ["Ctrl", "0"],
              mac: ["⌘", "0"]
            }
          }
        ],
      }
    ],
  },
  "vscode": {
    id: "vscode",
    name: "Visual Studio Code",
    officialURL: "https://code.visualstudio.com/",

    shortcutpageName: "Visual Studio Code Keyboard Shortcuts",
    icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.svg",
    description: "Mastering keyboard shortcuts in Visual Studio Code can enhance your coding experience by enabling fast navigation, debugging, and editing across Windows, macOS, and Linux. These shortcuts are essential for developers and power users.",
    metadescription: "Check all Visual Studio Code Keyboard Shortcuts to code more efficiently. These VS Code shortcuts will save time and improve productivity on Windows, macOS, and Linux.",
    platforms: ["windows", "macos", "linux"],
    featured: true,
    groups: [
      {
        title: "General",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl", "P"],
            description: "Quick Open, Go to File",
            platforms: {
              windows: ["Ctrl", "P"],
              mac: ["⌘", "P"]
            }
          },
          {
            id: "2",
            keys: ["Ctrl", "Shift", "P"],
            description: "Show Command Palette",
            platforms: {
              windows: ["Ctrl", "Shift", "P"],
              mac: ["⌘", "Shift", "P"]
            }
          },
          {
            id: "3",
            keys: ["Ctrl", "Shift", "N"],
            description: "New Window",
            platforms: {
              windows: ["Ctrl", "Shift", "N"],
              mac: ["⌘", "Shift", "N"]
            }
          },
          {
            id: "4",
            keys: ["Ctrl", "W"],
            description: "Close Window",
            platforms: {
              windows: ["Ctrl", "W"],
              mac: ["⌘", "W"]
            }
          }
        ],
      },
      {
        title: "Basic Editing",
        shortcuts: [
          {
            id: "5",
            keys: ["Ctrl", "X"],
            description: "Cut line",
            platforms: {
              windows: ["Ctrl", "X"],
              mac: ["⌘", "X"]
            }
          },
          {
            id: "6",
            keys: ["Ctrl", "C"],
            description: "Copy line",
            platforms: {
              windows: ["Ctrl", "C"],
              mac: ["⌘", "C"]
            }
          },
          {
            id: "7",
            keys: ["Ctrl", "V"],
            description: "Paste",
            platforms: {
              windows: ["Ctrl", "V"],
              mac: ["⌘", "V"]
            }
          },
          {
            id: "8",
            keys: ["Alt", "↑"],
            description: "Move line up",
            platforms: {
              windows: ["Alt", "↑"],
              mac: ["⌥", "↑"]
            }
          },
          {
            id: "9",
            keys: ["Alt", "↓"],
            description: "Move line down",
            platforms: {
              windows: ["Alt", "↓"],
              mac: ["⌥", "↓"]
            }
          }
        ],
      },
      {
        title: "Search and Replace",
        shortcuts: [
          {
            id: "10",
            keys: ["Ctrl", "F"],
            description: "Find",
            platforms: {
              windows: ["Ctrl", "F"],
              mac: ["⌘", "F"]
            }
          },
          {
            id: "11",
            keys: ["Ctrl", "H"],
            description: "Replace",
            platforms: {
              windows: ["Ctrl", "H"],
              mac: ["⌘", "H"]
            }
          },
          {
            id: "12",
            keys: ["Ctrl", "Shift", "F"],
            description: "Find in Files",
            platforms: {
              windows: ["Ctrl", "Shift", "F"],
              mac: ["⌘", "Shift", "F"]
            }
          }
        ],
      },
      {
        title: "Navigation",
        shortcuts: [
          {
            id: "13",
            keys: ["Ctrl", "G"],
            description: "Go to Line",
            platforms: {
              windows: ["Ctrl", "G"],
              mac: ["⌘", "G"]
            }
          },
          {
            id: "14",
            keys: ["Ctrl", "Tab"],
            description: "Switch between open files",
            platforms: {
              windows: ["Ctrl", "Tab"],
              mac: ["⌘", "Tab"]
            }
          },
          {
            id: "15",
            keys: ["Ctrl", "\\"],
            description: "Split editor",
            platforms: {
              windows: ["Ctrl", "\\"],
              mac: ["⌘", "\\"]
            }
          }
        ],
      },
      {
        title: "Code Folding",
        shortcuts: [
          {
            id: "16",
            keys: ["Ctrl", "Shift", "["],
            description: "Fold region",
            platforms: {
              windows: ["Ctrl", "Shift", "["],
              mac: ["⌘", "⌥", "["]
            }
          },
          {
            id: "17",
            keys: ["Ctrl", "Shift", "]"],
            description: "Unfold region",
            platforms: {
              windows: ["Ctrl", "Shift", "]"],
              mac: ["⌘", "⌥", "]"]
            }
          },
          {
            id: "18",
            keys: ["Ctrl", "K", "Ctrl", "0"],
            description: "Fold all regions",
            platforms: {
              windows: ["Ctrl", "K", "Ctrl", "0"],
              mac: ["⌘", "K", "⌘", "0"]
            }
          }
        ],
      },
      {
        title: "IntelliSense",
        shortcuts: [
          {
            id: "19",
            keys: ["Ctrl", "Space"],
            description: "Trigger suggestion",
            platforms: {
              windows: ["Ctrl", "Space"],
              mac: ["⌘", "Space"]
            }
          },
          {
            id: "20",
            keys: ["Ctrl", "."],
            description: "Quick Fix",
            platforms: {
              windows: ["Ctrl", "."],
              mac: ["⌘", "."]
            }
          }
        ],
      }
    ],
  },
  "adobe-illustrator": {
    id: "adobe-illustrator",
    name: "Adobe Illustrator",
    officialURL: "https://www.adobe.com/products/illustrator.html",

    shortcutpageName: "Adobe Illustrator Keyboard Shortcuts",
    icon: "/icons/software/illustrator.svg",
    description: "Mastering keyboard shortcuts in Adobe Illustrator can accelerate your design process by enabling efficient navigation, tool usage, and editing on both Windows and macOS.",
    metadescription: "Check all Adobe Illustrator Keyboard Shortcuts to create designs faster. These Illustrator shortcuts are updated for both MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Work with Layers",
        "shortcuts": [
          {
            "id": "16",
            "keys": [
              "Ctrl (Control) + L"
            ],
            "description": "Create new layer",
            "platforms": {
              "windows": [
                "Ctrl (Control) + L"
              ],
              "mac": [
                "⌘ (Command) + L"
              ]
            }
          },
          {
            "id": "17",
            "keys": [
              "Ctrl (Control) + ]"
            ],
            "description": "Bring layer forward",
            "platforms": {
              "windows": [
                "Ctrl (Control) + ]"
              ],
              "mac": [
                "⌘ (Command) + ]"
              ]
            }
          },
          {
            "id": "18",
            "keys": [
              "Ctrl (Control) + ["
            ],
            "description": "Send layer backward",
            "platforms": {
              "windows": [
                "Ctrl (Control) + ["
              ],
              "mac": [
                "⌘ (Command) + ["
              ]
            }
          },
          {
            "id": "19",
            "keys": [
              "Ctrl (Control) + Shift + ]"
            ],
            "description": "Bring layer to front",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + ]"
              ],
              "mac": [
                "⌘ (Command) + Shift + ]"
              ]
            }
          },
          {
            "id": "20",
            "keys": [
              "Ctrl (Control) + Shift + ["
            ],
            "description": "Send layer to back",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + ["
              ],
              "mac": [
                "⌘ (Command) + Shift + ["
              ]
            }
          }
        ]
      },
      {
        "title": "Alignment",
        "shortcuts": [
          {
            "id": "21",
            "keys": [
              "Ctrl (Control) + Alt (Option) + C"
            ],
            "description": "Center align objects",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + C"
              ],
              "mac": [
                "⌘ (Command) + Option + C"
              ]
            }
          },
          {
            "id": "22",
            "keys": [
              "Ctrl (Control) + Alt (Option) + T"
            ],
            "description": "Align top edges",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + T"
              ],
              "mac": [
                "⌘ (Command) + Option + T"
              ]
            }
          },
          {
            "id": "23",
            "keys": [
              "Ctrl (Control) + Alt (Option) + B"
            ],
            "description": "Align bottom edges",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + B"
              ],
              "mac": [
                "⌘ (Command) + Option + B"
              ]
            }
          },
          {
            "id": "24",
            "keys": [
              "Ctrl (Control) + Alt (Option) + L"
            ],
            "description": "Align left edges",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + L"
              ],
              "mac": [
                "⌘ (Command) + Option + L"
              ]
            }
          },
          {
            "id": "25",
            "keys": [
              "Ctrl (Control) + Alt (Option) + R"
            ],
            "description": "Align right edges",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + R"
              ],
              "mac": [
                "⌘ (Command) + Option + R"
              ]
            }
          }
        ]
      },
      {
        "title": "Guides and Grids",
        "shortcuts": [
          {
            "id": "26",
            "keys": [
              "Ctrl (Control) + ;"
            ],
            "description": "Show/Hide guides",
            "platforms": {
              "windows": [
                "Ctrl (Control) + ;"
              ],
              "mac": [
                "⌘ (Command) + ;"
              ]
            }
          },
          {
            "id": "27",
            "keys": [
              "Ctrl (Control) + Shift + ;"
            ],
            "description": "Lock/Unlock guides",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + ;"
              ],
              "mac": [
                "⌘ (Command) + Shift + ;"
              ]
            }
          },
          {
            "id": "28",
            "keys": [
              "Ctrl (Control) + '"
            ],
            "description": "Show/Hide grid",
            "platforms": {
              "windows": [
                "Ctrl (Control) + '"
              ],
              "mac": [
                "⌘ (Command) + '"
              ]
            }
          },
          {
            "id": "29",
            "keys": [
              "Ctrl (Control) + Shift + '"
            ],
            "description": "Snap to grid",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Shift + '"
              ],
              "mac": [
                "⌘ (Command) + Shift + '"
              ]
            }
          }
        ]
      },
      {
        "title": "Path Editing",
        "shortcuts": [
          {
            "id": "30",
            "keys": [
              "Ctrl (Control) + Alt (Option) + J"
            ],
            "description": "Join selected paths",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + J"
              ],
              "mac": [
                "⌘ (Command) + Option + J"
              ]
            }
          },
          {
            "id": "31",
            "keys": [
              "Ctrl (Control) + /"
            ],
            "description": "Split selected path",
            "platforms": {
              "windows": [
                "Ctrl (Control) + /"
              ],
              "mac": [
                "⌘ (Command) + /"
              ]
            }
          },
          {
            "id": "32",
            "keys": [
              "Shift + Ctrl (Control) + H"
            ],
            "description": "Hide edges",
            "platforms": {
              "windows": [
                "Shift + Ctrl (Control) + H"
              ],
              "mac": [
                "Shift + ⌘ (Command) + H"
              ]
            }
          },
          {
            "id": "33",
            "keys": [
              "Ctrl (Control) + Alt (Option) + K"
            ],
            "description": "Open Pathfinder panel",
            "platforms": {
              "windows": [
                "Ctrl (Control) + Alt + K"
              ],
              "mac": [
                "⌘ (Command) + Option + K"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-premiere-pro": {
    id: "adobe-premiere-pro",
    name: "Adobe Premiere Pro",
    officialURL: "https://www.adobe.com/products/premiere.html",

    shortcutpageName: "Adobe Premiere Pro Keyboard Shortcuts",
    icon: "/icons/software/adobe-premiere-pro.svg",
    description: "Mastering keyboard shortcuts in Adobe Premiere Pro can significantly enhance your video editing workflow, allowing efficient navigation, editing, and rendering on both Windows and macOS.",
    metadescription: "Check all Adobe Premiere Pro Keyboard Shortcuts to edit videos faster. These Premiere Pro shortcuts are updated for both MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Basic Editing Shortcuts",
        "shortcuts": [
          {
            "id": "1",
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
            "id": "2",
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
            "id": "3",
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
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save",
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
        "title": "Timeline Navigation",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Space"
            ],
            "description": "Play / Pause",
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
            "id": "6",
            "keys": [
              "J"
            ],
            "description": "Play backward, Stop, Play forward",
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
            "id": "7",
            "keys": [
              "Shift",
              "K"
            ],
            "description": "Play 10 frames backward",
            "platforms": {
              "windows": [
                "Shift",
                "K"
              ],
              "mac": [
                "Shift",
                "K"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Shift",
              "L"
            ],
            "description": "Play 10 frames forward",
            "platforms": {
              "windows": [
                "Shift",
                "L"
              ],
              "mac": [
                "Shift",
                "L"
              ]
            }
          }
        ]
      },
      {
        "title": "Editing Shortcuts",
        "shortcuts": [
          {
            "id": "9",
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
            "id": "10",
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
            "id": "11",
            "keys": [
              "Ctrl (Control)",
              "B"
            ],
            "description": "Ripple Edit",
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
              "Alt",
              "Left Arrow / Right Arrow"
            ],
            "description": "Nudge Clip Selection Left / Right",
            "platforms": {
              "windows": [
                "Alt",
                "Left Arrow / Right Arrow"
              ],
              "mac": [
                "Option",
                "Left Arrow / Right Arrow"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-lightroom": {
    id: "adobe-lightroom",
    name: "Adobe Lightroom",
    officialURL: "https://www.adobe.com/products/photoshop-lightroom.html",

    shortcutpageName: "Adobe Lightroom Keyboard Shortcuts",
    icon: "/icons/software/adobe-lightroom.svg",
    description: "Mastering keyboard shortcuts in Adobe Lightroom can simplify your photo editing and management tasks, enabling efficient navigation and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Lightroom Keyboard Shortcuts to edit photos efficiently. These Lightroom shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Library Module",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl",
              "Shift",
              "N"
            ],
            "description": "Import photos",
            "platforms": {
              "windows": [
                "Ctrl",
                "Shift",
                "N"
              ],
              "mac": [
                "\u2318",
                "Shift",
                "I"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "G"
            ],
            "description": "Go to Grid View",
            "platforms": {
              "windows": [
                "G"
              ],
              "mac": [
                "G"
              ]
            }
          }
        ]
      },
      {
        "title": "Develop Module",
        "shortcuts": [
          {
            "id": "3",
            "keys": [
              "D"
            ],
            "description": "Go to Develop Module",
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
            "id": "4",
            "keys": [
              "Ctrl",
              "]"
            ],
            "description": "Increase brush size",
            "platforms": {
              "windows": [
                "Ctrl",
                "]"
              ],
              "mac": [
                "\u2318",
                "]"
              ]
            }
          }
        ]
      },
      {
        "title": "Common Shortcuts",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl",
              "S"
            ],
            "description": "Save",
            "platforms": {
              "windows": [
                "Ctrl",
                "S"
              ],
              "mac": [
                "\u2318",
                "S"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl",
              "Z"
            ],
            "description": "Undo",
            "platforms": {
              "windows": [
                "Ctrl",
                "Z"
              ],
              "mac": [
                "\u2318",
                "Z"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl",
              "Shift",
              "E"
            ],
            "description": "Export photos",
            "platforms": {
              "windows": [
                "Ctrl",
                "Shift",
                "E"
              ],
              "mac": [
                "\u2318",
                "Shift",
                "E"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-after-effects": {
    id: "adobe-after-effects",
    name: "Adobe After Effects",
    officialURL: "https://www.adobe.com/products/aftereffects.html",

    shortcutpageName: "Adobe After Effects Keyboard Shortcuts",
    icon: "/icons/software/adobe-after-effects.svg",
    description: "Mastering keyboard shortcuts in Adobe After Effects can accelerate your motion graphics and visual effects workflow, allowing efficient navigation and tool usage on both Windows and macOS.",
    metadescription: "Check all Adobe After Effects Keyboard Shortcuts to speed up your workflow. These After Effects shortcuts are updated for both MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Project Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl",
              "N"
            ],
            "description": "New Project",
            "platforms": {
              "windows": [
                "Ctrl",
                "N"
              ],
              "mac": [
                "\u2318",
                "N"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl",
              "O"
            ],
            "description": "Open Project",
            "platforms": {
              "windows": [
                "Ctrl",
                "O"
              ],
              "mac": [
                "\u2318",
                "O"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl",
              "S"
            ],
            "description": "Save Project",
            "platforms": {
              "windows": [
                "Ctrl",
                "S"
              ],
              "mac": [
                "\u2318",
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
              "Ctrl",
              "Z"
            ],
            "description": "Undo",
            "platforms": {
              "windows": [
                "Ctrl",
                "Z"
              ],
              "mac": [
                "\u2318",
                "Z"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl",
              "X"
            ],
            "description": "Cut",
            "platforms": {
              "windows": [
                "Ctrl",
                "X"
              ],
              "mac": [
                "\u2318",
                "X"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl",
              "C"
            ],
            "description": "Copy",
            "platforms": {
              "windows": [
                "Ctrl",
                "C"
              ],
              "mac": [
                "\u2318",
                "C"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl",
              "V"
            ],
            "description": "Paste",
            "platforms": {
              "windows": [
                "Ctrl",
                "V"
              ],
              "mac": [
                "\u2318",
                "V"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl",
              "D"
            ],
            "description": "Duplicate",
            "platforms": {
              "windows": [
                "Ctrl",
                "D"
              ],
              "mac": [
                "\u2318",
                "D"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl",
              "F"
            ],
            "description": "Find",
            "platforms": {
              "windows": [
                "Ctrl",
                "F"
              ],
              "mac": [
                "\u2318",
                "F"
              ]
            }
          }
        ]
      },
      {
        "title": "Composition Shortcuts",
        "shortcuts": [
          {
            "id": "10",
            "keys": [
              "Ctrl",
              "Alt",
              "N"
            ],
            "description": "New Composition",
            "platforms": {
              "windows": [
                "Ctrl",
                "Alt",
                "N"
              ],
              "mac": [
                "\u2318",
                "Option",
                "N"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Ctrl",
              "K"
            ],
            "description": "Composition Settings",
            "platforms": {
              "windows": [
                "Ctrl",
                "K"
              ],
              "mac": [
                "\u2318",
                "K"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "Ctrl",
              ";"
            ],
            "description": "Composition Flowchart View",
            "platforms": {
              "windows": [
                "Ctrl",
                ";"
              ],
              "mac": [
                "\u2318",
                ";"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-acrobat": {
    id: "adobe-acrobat",
    name: "Adobe Acrobat",
    officialURL: "https://www.adobe.com/acrobat.html",

    shortcutpageName: "Adobe Acrobat Keyboard Shortcuts",
    icon: "/icons/software/adobe-acrobat.svg",
    description: "Mastering keyboard shortcuts in Adobe Acrobat can streamline PDF creation, editing, and management tasks, enabling faster navigation and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Acrobat Keyboard Shortcuts to manage PDFs more efficiently. These Acrobat shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "View Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "H"
            ],
            "description": "Toggle the visibility of the toolbar and task pane",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "H"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "H"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "L"
            ],
            "description": "Display the navigation bar",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "0"
            ],
            "description": "Fit the entire page to the window",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "0"
              ],
              "mac": [
                "\u2318 (Command)",
                "0"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Open a new window",
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
          }
        ]
      },
      {
        "title": "Edit Shortcuts",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Find text within the document",
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
            "id": "6",
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
            "id": "7",
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
  },
  "adobe-indesign": {
    id: "adobe-indesign",
    name: "Adobe InDesign",
    officialURL: "https://www.adobe.com/products/indesign.html",

    shortcutpageName: "Adobe InDesign Keyboard Shortcuts",
    icon: "/icons/software/adobe-indesign.svg",
    description: "Mastering keyboard shortcuts in Adobe InDesign can accelerate your layout and design tasks, enabling efficient navigation, editing, and formatting on both Windows and macOS.",
    metadescription: "Check all Adobe InDesign Keyboard Shortcuts to design layouts efficiently. These InDesign shortcuts are updated for both MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Text Editing Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "C"
            ],
            "description": "Copy text",
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
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "V"
            ],
            "description": "Paste text",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "X"
            ],
            "description": "Cut text",
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
            "id": "4",
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
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "Z"
            ],
            "description": "Redo",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "Z"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "Z"
              ]
            }
          }
        ]
      },
      {
        "title": "Document Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "0"
            ],
            "description": "Fit page in window",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "0"
              ],
              "mac": [
                "\u2318 (Command)",
                "0"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "Spacebar"
            ],
            "description": "Zoom in",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Spacebar"
              ],
              "mac": [
                "\u2318 (Command)",
                "Spacebar"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "Spacebar"
            ],
            "description": "Zoom out",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "Spacebar"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "Spacebar"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Page Up"
            ],
            "description": "Previous page",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Page Up"
              ],
              "mac": [
                "\u2318 (Command)",
                "Page Up"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "Page Down"
            ],
            "description": "Next page",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Page Down"
              ],
              "mac": [
                "\u2318 (Command)",
                "Page Down"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Spacebar"
            ],
            "description": "Hand tool (temporary)",
            "platforms": {
              "windows": [
                "Spacebar"
              ],
              "mac": [
                "Spacebar"
              ]
            }
          }
        ]
      },
      {
        "title": "Object Selection and Editing",
        "shortcuts": [
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "A"
            ],
            "description": "Select all",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "A"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Place a file",
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
            "id": "14",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "O"
            ],
            "description": "Fit selected frame to content",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "O"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "O"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "Ctrl (Control)",
              "2"
            ],
            "description": "Lock or unlock the selection",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "2"
              ],
              "mac": [
                "\u2318 (Command)",
                "2"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-animate": {
    id: "adobe-animate",
    name: "Adobe Animate",
    officialURL: "https://www.adobe.com/products/animate.html",

    shortcutpageName: "Adobe Animate Keyboard Shortcuts",
    icon: "/icons/software/adobe-animate.svg",
    description: "Mastering keyboard shortcuts in Adobe Animate can optimize your animation workflow, enabling faster navigation, tool usage, and editing on both Windows and macOS.",
    metadescription: "Check all Adobe Animate Keyboard Shortcuts to create animations faster. These Animate shortcuts are updated for MacOS and Windows OS.",
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
              "S"
            ],
            "description": "Save",
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
            "id": "2",
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
            "id": "3",
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
            "id": "4",
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
            "id": "5",
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
          }
        ]
      },
      {
        "title": "Timeline Shortcuts",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "F5"
            ],
            "description": "Insert Blank Keyframe",
            "platforms": {
              "windows": [
                "F5"
              ],
              "mac": [
                "F5"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "F6"
            ],
            "description": "Insert Keyframe",
            "platforms": {
              "windows": [
                "F6"
              ],
              "mac": [
                "F6"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "A"
            ],
            "description": "Select All Frames",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "A"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "K"
            ],
            "description": "Add Keyframe",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "K"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "K"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-bridge": {
    id: "adobe-bridge",
    name: "Adobe Bridge",
    officialURL: "https://www.adobe.com/products/bridge.html",

    shortcutpageName: "Adobe Bridge Keyboard Shortcuts",
    icon: "/icons/software/adobe-bridge.svg",
    description: "Mastering keyboard shortcuts in Adobe Bridge can simplify media file management and organization, enabling faster navigation and tagging on both Windows and macOS.",
    metadescription: "Check all Adobe Bridge Keyboard Shortcuts to manage files efficiently. These Bridge shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "File Management",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "New Window",
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
              "O"
            ],
            "description": "Open",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save",
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
              "Shift",
              "S"
            ],
            "description": "Save As",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "S"
              ]
            }
          }
        ]
      },
      {
        "title": "View Navigation",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "1"
            ],
            "description": "Extra Large Thumbnails",
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
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "2"
            ],
            "description": "Large Thumbnails",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "2"
              ],
              "mac": [
                "\u2318 (Command)",
                "2"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-dreamweaver": {
    id: "adobe-dreamweaver",
    name: "Adobe Dreamweaver",
    officialURL: "https://www.adobe.com/products/dreamweaver.html",

    shortcutpageName: "Adobe Dreamweaver Keyboard Shortcuts",
    icon: "/icons/software/adobe-dreamweaver.svg",
    description: "Mastering keyboard shortcuts in Adobe Dreamweaver can streamline your web design and development tasks, enabling faster coding, navigation, and debugging on both Windows and macOS.",
    metadescription: "Check all Adobe Dreamweaver Keyboard Shortcuts to design websites faster. These Dreamweaver shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "File Operations",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Create a new document",
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
              "O"
            ],
            "description": "Open an existing document",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save the current document",
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
              "Shift",
              "S"
            ],
            "description": "Save As",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "S"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "W"
            ],
            "description": "Close the current document",
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
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Q"
            ],
            "description": "Exit Adobe Dreamweaver",
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
          }
        ]
      },
      {
        "title": "Editing Shortcuts",
        "shortcuts": [
          {
            "id": "7",
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
            "id": "8",
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
            "id": "9",
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
            "id": "10",
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
            "id": "11",
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
          }
        ]
      },
      {
        "title": "Code Editing",
        "shortcuts": [
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "/"
            ],
            "description": "Comment/Uncomment selection",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "/"
              ],
              "mac": [
                "\u2318 (Command)",
                "/"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "K"
            ],
            "description": "Check Spelling",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "K"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "K"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "Ctrl (Control)",
              "J"
            ],
            "description": "Join Line",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "J"
              ],
              "mac": [
                "\u2318 (Command)",
                "J"
              ]
            }
          },
          {
            "id": "15",
            "keys": [
              "Ctrl (Control)",
              "Enter"
            ],
            "description": "Insert Line Break",
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
            "id": "16",
            "keys": [
              "Tab"
            ],
            "description": "Indent Code",
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
            "id": "17",
            "keys": [
              "Shift",
              "Tab"
            ],
            "description": "Unindent Code",
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
          }
        ]
      }
    ]
  },
  "adobe-substance-3d-painter": {
    id: "adobe-substance-3d-painter",
    name: "Adobe Substance 3D Painter",
    officialURL: "https://www.adobe.com/products/substance3d-painter.html",

    shortcutpageName: "Adobe Substance 3D Painter Keyboard Shortcuts",
    icon: "/icons/software/adobe-substance-3d-painter.svg",
    description: "Mastering keyboard shortcuts in Adobe Substance 3D Painter can enhance your 3D painting workflow, allowing faster navigation, tool selection, and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Substance 3D Painter Keyboard Shortcuts to improve your 3D painting efficiency. These shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "File Operations",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "New Project",
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
              "O"
            ],
            "description": "Open Project",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save Project",
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
        "title": "View and Navigation",
        "shortcuts": [
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "+"
            ],
            "description": "Zoom In",
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
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "-"
            ],
            "description": "Zoom Out",
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
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "0"
            ],
            "description": "Fit to Screen",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "0"
              ],
              "mac": [
                "\u2318 (Command)",
                "0"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Spacebar"
            ],
            "description": "Pan View",
            "platforms": {
              "windows": [
                "Spacebar"
              ],
              "mac": [
                "Spacebar"
              ]
            }
          }
        ]
      },
      {
        "title": "Brush Tools",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "B"
            ],
            "description": "Select Brush Tool",
            "platforms": {
              "windows": [
                "B"
              ],
              "mac": [
                "B"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Z"
            ],
            "description": "Undo Action",
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
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "Y"
            ],
            "description": "Redo Action",
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
      },
      {
        "title": "Layer Management",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "Ctrl (Control)",
              "G"
            ],
            "description": "Group Layers",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "G"
              ],
              "mac": [
                "\u2318 (Command)",
                "G"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "N"
            ],
            "description": "Create New Layer",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "N"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "N"
              ]
            }
          },
          {
            "id": "13",
            "keys": [
              "Ctrl (Control)",
              "E"
            ],
            "description": "Merge Layers",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "R"
              ],
              "mac": [
                "\u2318 (Command)",
                "E"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-dimension": {
    id: "adobe-dimension",
    name: "Adobe Dimension",
    officialURL: "https://www.adobe.com/products/dimension.html",

    shortcutpageName: "Adobe Dimension Keyboard Shortcuts",
    icon: "/icons/software/adobe-dimension.svg",
    description: "Mastering keyboard shortcuts in Adobe Dimension can optimize your 3D design workflow, enabling faster navigation, rendering, and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Dimension Keyboard Shortcuts to improve your 3D design workflow. These Dimension shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "View and Navigation",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "1"
            ],
            "description": "Fit All",
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
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "2"
            ],
            "description": "Fit Selection",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "2"
              ],
              "mac": [
                "\u2318 (Command)",
                "2"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "0"
            ],
            "description": "Actual Size",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "0"
              ],
              "mac": [
                "\u2318 (Command)",
                "0"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "Space"
            ],
            "description": "Pan View",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Space"
              ],
              "mac": [
                "\u2318 (Command)",
                "Space"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Alt",
              "Left Click",
              "Drag"
            ],
            "description": "Orbit/Pan/Tilt View",
            "platforms": {
              "windows": [
                "Alt",
                "Left Click",
                "Drag"
              ],
              "mac": [
                "Option",
                "Left Click",
                "Drag"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "Middle Click",
              "Drag"
            ],
            "description": "Zoom/Pan View",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "Middle Click",
                "Drag"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "Middle Click",
                "Drag"
              ]
            }
          }
        ]
      },
      {
        "title": "Tools and Selection",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "V"
            ],
            "description": "Selection Tool",
            "platforms": {
              "windows": [
                "V"
              ],
              "mac": [
                "V"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "M"
            ],
            "description": "Move Tool",
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
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Deselect",
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
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "I"
            ],
            "description": "Inverse Selection",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "I"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "I"
              ]
            }
          }
        ]
      },
      {
        "title": "Editing and Workflows",
        "shortcuts": [
          {
            "id": "11",
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
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "Z"
            ],
            "description": "Redo",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "Z"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "Z"
              ]
            }
          },
          {
            "id": "13",
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
            "id": "14",
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
            "id": "15",
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
          }
        ]
      }
    ]
  },
  "adobe-substance-3d-designer": {
    id: "adobe-substance-3d-designer",
    name: "Adobe Substance 3D Designer",
    officialURL: "https://www.adobe.com/products/substance3d-designer.html",

    shortcutpageName: "Adobe Substance 3D Designer Keyboard Shortcuts",
    icon: "/icons/software/adobe-substance-3d-painter.svg",
    description: "Mastering keyboard shortcuts in Adobe Substance 3D Designer can significantly improve your procedural material creation process, allowing for efficient navigation and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Substance 3D Designer Keyboard Shortcuts to speed up your material creation workflow. These shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "View Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "1"
            ],
            "description": "Toggle full-screen mode",
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
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "2"
            ],
            "description": "Toggle grid view",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "2"
              ],
              "mac": [
                "\u2318 (Command)",
                "2"
              ]
            }
          }
        ]
      },
      {
        "title": "Editing Shortcuts",
        "shortcuts": [
          {
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "C"
            ],
            "description": "Copy selected objects",
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
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "V"
            ],
            "description": "Paste copied objects",
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
      },
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "F"
            ],
            "description": "Search",
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
            "id": "6",
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
            "id": "7",
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
          }
        ]
      },
      {
        "title": "Transform Shortcuts",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "T"
            ],
            "description": "Free Transform",
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
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "T"
            ],
            "description": "Duplicate selected objects",
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
          }
        ]
      }
    ]
  },
  "adobe-substance-3d-stager": {
    id: "adobe-substance-3d-stager",
    name: "Adobe Substance 3D Stager",
    officialURL: "https://www.adobe.com/products/substance3d-stager.html",

    shortcutpageName: "Adobe Substance 3D Stager Keyboard Shortcuts",
    icon: "/icons/software/adobe-substance-3d-stager.svg",
    description: "Mastering keyboard shortcuts in Adobe Substance 3D Stager can optimize your 3D scene staging workflow, enabling efficient navigation, adjustments, and rendering on both Windows and macOS.",
    metadescription: "Check all Adobe Substance 3D Stager Keyboard Shortcuts to stage 3D scenes efficiently. These shortcuts are updated for MacOS and Windows OS.",
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
              "N"
            ],
            "description": "New project",
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
              "O"
            ],
            "description": "Open project",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save project",
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
            "id": "5",
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
            "id": "6",
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
            "id": "7",
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
            "id": "8",
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
          }
        ]
      },
      {
        "title": "Viewport Shortcuts",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Mouse Scroll"
            ],
            "description": "Zoom in/out",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Mouse Scroll"
              ],
              "mac": [
                "\u2318 (Command)",
                "Mouse Scroll"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "Alt",
              "Middle Mouse Button Drag"
            ],
            "description": "Orbit camera",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Alt",
                "Middle Mouse Button Drag"
              ],
              "mac": [
                "\u2318 (Command)",
                "Option",
                "Middle Mouse Button Drag"
              ]
            }
          }
        ]
      }
    ]
  },
  "adobe-character-animator": {
    id: "adobe-character-animator",
    name: "Adobe Character Animator",
    officialURL: "https://www.adobe.com/products/character-animator.html",

    shortcutpageName: "Adobe Character Animator Keyboard Shortcuts",
    icon: "/icons/software/adobe-character-animator.svg",
    description: "Mastering keyboard shortcuts in Adobe Character Animator can streamline your animation process, enabling efficient navigation, puppet control, and editing on both Windows and macOS.",
    metadescription: "Check all Adobe Character Animator Keyboard Shortcuts to create animations faster. These Character Animator shortcuts are updated for MacOS and Windows OS.",
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
              "N"
            ],
            "description": "New project",
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
              "O"
            ],
            "description": "Open project",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save project",
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
            "id": "5",
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
          }
        ]
      },
      {
        "title": "Animation Shortcuts",
        "shortcuts": [
          {
            "id": "6",
            "keys": [
              "Spacebar"
            ],
            "description": "Play/Pause animation",
            "platforms": {
              "windows": [
                "Spacebar"
              ],
              "mac": [
                "Spacebar"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Enter"
            ],
            "description": "Record",
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
      }
    ]
  },
  "adobe-fresco": {
    id: "adobe-fresco",
    name: "Adobe Fresco",
    shortcutpageName: "Adobe Fresco Keyboard Shortcuts",
    icon: "/icons/software/adobe-fresco.svg",
    officialURL: "https://www.adobe.com/products/fresco.html",

    description: "Mastering keyboard shortcuts in Adobe Fresco can speed up your painting and drawing process, enabling efficient navigation, tool usage, and adjustments on both Windows and macOS.",
    metadescription: "Check all Adobe Fresco Keyboard Shortcuts to paint and draw efficiently. These Fresco shortcuts are updated for MacOS and Windows OS.",
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
              "N"
            ],
            "description": "New Document",
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
              "O"
            ],
            "description": "Open Document",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save Document",
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
              "P"
            ],
            "description": "Print Document",
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
          },
          {
            "id": "5",
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
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "Z"
            ],
            "description": "Redo",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "Z"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "Z"
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
            "id": "9",
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
            "id": "10",
            "keys": [
              "Del"
            ],
            "description": "Delete",
            "platforms": {
              "windows": [
                "Del"
              ],
              "mac": [
                "Del"
              ]
            }
          }
        ]
      },
      {
        "title": "Brush and Tool Shortcuts",
        "shortcuts": [
          {
            "id": "11",
            "keys": [
              "B"
            ],
            "description": "Select Brush Tool",
            "platforms": {
              "windows": [
                "B"
              ],
              "mac": [
                "B"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "E"
            ],
            "description": "Eraser Tool",
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
            "id": "13",
            "keys": [
              "G"
            ],
            "description": "Fill Tool",
            "platforms": {
              "windows": [
                "G"
              ],
              "mac": [
                "G"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "Z"
            ],
            "description": "Zoom Tool",
            "platforms": {
              "windows": [
                "Z"
              ],
              "mac": [
                "Z"
              ]
            }
          }
        ]
      },
      {
        "title": "Canvas Shortcuts",
        "shortcuts": [
          {
            "id": "15",
            "keys": [
              "Space"
            ],
            "description": "Hand Tool",
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
            "id": "16",
            "keys": [
              "Ctrl (Control)",
              "+"
            ],
            "description": "Zoom In",
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
            "id": "17",
            "keys": [
              "Ctrl (Control)",
              "-"
            ],
            "description": "Zoom Out",
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
      }
    ]
  },
  "salesforce": {
    id: "salesforce",
    name: "Salesforce",
    officialURL: "https://www.salesforce.com/",

    shortcutpageName: "Salesforce Keyboard Shortcuts",
    icon: "/icons/software/salesforce.svg",
    description: "Mastering keyboard shortcuts in Salesforce can help you navigate, manage, and customize your CRM experience efficiently on both Windows and macOS.",
    metadescription: "Check all Salesforce Keyboard Shortcuts to manage your CRM efficiently. These Salesforce shortcuts are updated for MacOS and Windows OS.",
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
              "/"
            ],
            "description": "Open keyboard shortcuts cheat sheet",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "/"
              ],
              "mac": [
                "\u2318 (Command)",
                "/"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "1"
            ],
            "description": "Navigate to Home",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "2"
            ],
            "description": "Navigate to Chatter",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "2"
              ],
              "mac": [
                "\u2318 (Command)",
                "2"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "3"
            ],
            "description": "Navigate to People",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "3"
              ],
              "mac": [
                "\u2318 (Command)",
                "3"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "4"
            ],
            "description": "Navigate to Groups",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "4"
              ],
              "mac": [
                "\u2318 (Command)",
                "4"
              ]
            }
          }
        ]
      },
      {
        "title": "Record Shortcuts",
        "shortcuts": [
          {
            "id": "6",
            "keys": [
              "F2"
            ],
            "description": "Edit a record",
            "platforms": {
              "windows": [
                "F2"
              ],
              "mac": [
                "F2"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Alt",
              "Shift",
              "S"
            ],
            "description": "Save a record",
            "platforms": {
              "windows": [
                "Alt",
                "Shift",
                "S"
              ],
              "mac": [
                "Option",
                "Shift",
                "S"
              ]
            }
          },
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save and stay on a record",
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
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "S"
            ],
            "description": "Save and New a record",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "S"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "K"
            ],
            "description": "Edit a record in a new tab",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "K"
              ],
              "mac": [
                "\u2318 (Command)",
                "K"
              ]
            }
          }
        ]
      }
    ]
  },
  "tableau": {
    id: "tableau",
    name: "Tableau",
    officialURL: "https://www.tableau.com/",

    shortcutpageName: "Tableau Keyboard Shortcuts",
    icon: "/icons/software/tableau.svg",
    description: "Mastering keyboard shortcuts in Tableau can improve your data visualization process, enabling faster navigation, dashboard creation, and analytics on both Windows and macOS.",
    metadescription: "Check all Tableau Keyboard Shortcuts to enhance your data visualization workflow. These Tableau shortcuts are updated for MacOS and Windows OS.",
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
              "C"
            ],
            "description": "Go to Data Source page",
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
            "id": "2",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Open a new Tableau Desktop instance",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "E"
            ],
            "description": "Export data",
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
            "id": "4",
            "keys": [
              "Ctrl (Control)",
              "P"
            ],
            "description": "Print",
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
        "title": "Selection Shortcuts",
        "shortcuts": [
          {
            "id": "5",
            "keys": [
              "Ctrl (Control)",
              "A"
            ],
            "description": "Select all items",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "A"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "A"
            ],
            "description": "Clear selection",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "A"
              ]
            }
          }
        ]
      },
      {
        "title": "Workbook Shortcuts",
        "shortcuts": [
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save workbook",
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
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Shift",
              "S"
            ],
            "description": "Save As",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Shift",
                "S"
              ],
              "mac": [
                "\u2318 (Command)",
                "Shift",
                "S"
              ]
            }
          },
          {
            "id": "9",
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
            "id": "10",
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
          }
        ]
      },
      {
        "title": "Data Handling Shortcuts",
        "shortcuts": [
          {
            "id": "11",
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
            "id": "12",
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
            "id": "13",
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
      }
    ]
  },
  "vlc-player": {
    id: "vlc-player",
    name: "VLC Media Player",
    shortcutpageName: "VLC Media Player Keyboard Shortcuts",
    icon: "/icons/software/vlc.svg",
    officialURL: "https://www.videolan.org/vlc/",

    description: "Mastering keyboard shortcuts in VLC Media Player can make media playback more efficient, enabling quicker control over playback, volume, and settings on both Windows and macOS.",
    metadescription: "Check all VLC Media Player Keyboard Shortcuts to improve your media playback experience. These VLC shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Playback Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Space"
            ],
            "description": "Play/Pause",
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
            "id": "2",
            "keys": [
              "F"
            ],
            "description": "Toggle Full Screen",
            "platforms": {
              "windows": [
                "F"
              ],
              "mac": [
                "F"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "P"
            ],
            "description": "Previous Playlist Item",
            "platforms": {
              "windows": [
                "P"
              ],
              "mac": [
                "P"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "N"
            ],
            "description": "Next Playlist Item",
            "platforms": {
              "windows": [
                "N"
              ],
              "mac": [
                "N"
              ]
            }
          },
          {
            "id": "5",
            "keys": [
              "S"
            ],
            "description": "Stop Playback",
            "platforms": {
              "windows": [
                "S"
              ],
              "mac": [
                "S"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl (Control)",
              "Up Arrow"
            ],
            "description": "Increase Volume",
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
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "Down Arrow"
            ],
            "description": "Decrease Volume",
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
      },
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "Left Arrow"
            ],
            "description": "Jump Backward 10 Seconds",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Left Arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Left Arrow"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl (Control)",
              "Right Arrow"
            ],
            "description": "Jump Forward 10 Seconds",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "Right Arrow"
              ],
              "mac": [
                "\u2318 (Command)",
                "Right Arrow"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "M"
            ],
            "description": "Mute/Unmute Audio",
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
      }
    ]
  },
  "gimp": {
    id: "gimp",
    name: "GIMP",
    shortcutpageName: "GIMP Keyboard Shortcuts",
    icon: "/icons/software/gimp.svg",
    officialURL: "https://www.videolan.org/vlc/",

    description: "Mastering keyboard shortcuts in GIMP can streamline your image editing process, enabling efficient navigation, tool usage, and adjustments on both Windows and macOS.",
    metadescription: "Check all GIMP Keyboard Shortcuts to edit images efficiently. These GIMP shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "File Management",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Ctrl (Control)",
              "N"
            ],
            "description": "Create a new image",
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
              "O"
            ],
            "description": "Open an existing file",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save the current file",
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
              "Alt",
              "Shift",
              "Ctrl",
              "S"
            ],
            "description": "Save the current file as a new file",
            "platforms": {
              "windows": [
                "Alt",
                "Shift",
                "Ctrl",
                "S"
              ],
              "mac": [
                "Option",
                "Shift",
                "\u2318 (Command)",
                "S"
              ]
            }
          }
        ]
      },
      {
        "title": "Image Editing",
        "shortcuts": [
          {
            "id": "5",
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
            "id": "6",
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
          },
          {
            "id": "7",
            "keys": [
              "Ctrl (Control)",
              "C"
            ],
            "description": "Copy the selection",
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
            "id": "8",
            "keys": [
              "Ctrl (Control)",
              "V"
            ],
            "description": "Paste the selection",
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
      },
      {
        "title": "Tools and Functions",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "P"
            ],
            "description": "Select the Pen Tool",
            "platforms": {
              "windows": [
                "P"
              ],
              "mac": [
                "P"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "B"
            ],
            "description": "Select the Brush Tool",
            "platforms": {
              "windows": [
                "B"
              ],
              "mac": [
                "B"
              ]
            }
          },
          {
            "id": "11",
            "keys": [
              "Shift",
              "O"
            ],
            "description": "Change tool option",
            "platforms": {
              "windows": [
                "Shift",
                "O"
              ],
              "mac": [
                "Shift",
                "O"
              ]
            }
          },
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "M"
            ],
            "description": "Merge visible layers",
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
      }
    ]
  },
  "quickbooks": {
    id: "quickbooks",
    name: "QuickBooks",
    shortcutpageName: "QuickBooks Keyboard Shortcuts (Accounting Software)",
    icon: "/icons/software/quickbooks.svg",
    officialURL: "https://quickbooks.intuit.com/",

    description: "QuickBooks is a widely used accounting software developed by Intuit, designed to help small and medium-sized businesses manage their finances efficiently. It offers features like invoicing, expense tracking, payroll management, tax preparation, and real-time financial reporting. With its user-friendly interface and integrations with other business tools, QuickBooks simplifies accounting tasks for business owners and accountants. It is available on Windows, macOS, and as a cloud-based service for added flexibility.Mastering keyboard shortcuts in QuickBooks can make managing finances, invoices, and reports faster and more efficient on both Windows and macOS.",
    metadescription: "Check all QuickBooks Keyboard Shortcuts to manage finances efficiently. These QuickBooks shortcuts are updated for MacOS and Windows OS.",
    platforms: ["windows", "macos"],
    featured: true,
    "groups": [
      {
        "title": "Navigation Shortcuts",
        "shortcuts": [
          {
            "id": "1",
            "keys": [
              "Alt",
              "C"
            ],
            "description": "Go to Customers",
            "platforms": {
              "windows": [
                "Alt",
                "C"
              ],
              "mac": [
                "Option",
                "C"
              ]
            }
          },
          {
            "id": "2",
            "keys": [
              "Alt",
              "Q"
            ],
            "description": "Go to Banking",
            "platforms": {
              "windows": [
                "Alt",
                "Q"
              ],
              "mac": [
                "Option",
                "Q"
              ]
            }
          },
          {
            "id": "3",
            "keys": [
              "Alt",
              "V"
            ],
            "description": "Go to Vendor Center",
            "platforms": {
              "windows": [
                "Alt",
                "V"
              ],
              "mac": [
                "Option",
                "V"
              ]
            }
          },
          {
            "id": "4",
            "keys": [
              "Ctrl",
              "D"
            ],
            "description": "Delete transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "D"
              ],
              "mac": [
                "Command",
                "D"
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
              "Ctrl",
              "E"
            ],
            "description": "Edit transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "E"
              ],
              "mac": [
                "Command",
                "E"
              ]
            }
          },
          {
            "id": "6",
            "keys": [
              "Ctrl",
              "Y"
            ],
            "description": "Copy transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "Y"
              ],
              "mac": [
                "Command",
                "Y"
              ]
            }
          },
          {
            "id": "7",
            "keys": [
              "Ctrl",
              "P"
            ],
            "description": "Print transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "P"
              ],
              "mac": [
                "Command",
                "P"
              ]
            }
          }
        ]
      },
      {
        "title": "Other Shortcuts",
        "shortcuts": [
          {
            "id": "8",
            "keys": [
              "Ctrl",
              "F"
            ],
            "description": "Find transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "F"
              ],
              "mac": [
                "Command",
                "F"
              ]
            }
          },
          {
            "id": "9",
            "keys": [
              "Ctrl",
              "B"
            ],
            "description": "Create a new transaction",
            "platforms": {
              "windows": [
                "Ctrl",
                "B"
              ],
              "mac": [
                "Command",
                "B"
              ]
            }
          }
        ]
      }
    ]
  },
  "krita": {
    id: "krita",
    name: "Krita",
    shortcutpageName: "25 Useful Krita Keyboard Shortcuts",
    icon: "/icons/software/Krita.svg",
    officialURL: "https://krita.org/",

    description: "Krita is a powerful, free, and open-source digital painting software designed for artists and illustrators. It provides a robust set of tools for creating illustrations, concept art, comics, and animations. With its intuitive interface, extensive brush library, and advanced features like layer management, vector tools, and HDR support, Krita is widely popular among both beginners and professionals. It is available on Windows, macOS, and Linux, making it a versatile choice for creative workflows. Mastering keyboard shortcuts in Krita can enhance your painting and drawing process, enabling efficient navigation, tool selection, and adjustments on both Windows and macOS.",
    metadescription: "Check all Krita Keyboard Shortcuts to create art efficiently. These Krita shortcuts are updated for MacOS and Windows OS.",
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
              "N"
            ],
            "description": "New document",
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
              "O"
            ],
            "description": "Open document",
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
            "id": "3",
            "keys": [
              "Ctrl (Control)",
              "S"
            ],
            "description": "Save document",
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
            "id": "5",
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
            "id": "6",
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
            "id": "7",
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
            "id": "8",
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
          }
        ]
      },
      {
        "title": "Canvas Shortcuts",
        "shortcuts": [
          {
            "id": "9",
            "keys": [
              "Spacebar"
            ],
            "description": "Pan the canvas",
            "platforms": {
              "windows": [
                "Spacebar"
              ],
              "mac": [
                "Spacebar"
              ]
            }
          },
          {
            "id": "10",
            "keys": [
              "Ctrl (Control)",
              "+"
            ],
            "description": "Zoom In",
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
            "id": "11",
            "keys": [
              "Ctrl (Control)",
              "-"
            ],
            "description": "Zoom Out",
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
          },
          {
            "id": "12",
            "keys": [
              "Ctrl (Control)",
              "0"
            ],
            "description": "Fit to Screen",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "0"
              ],
              "mac": [
                "\u2318 (Command)",
                "0"
              ]
            }
          }
        ]
      },
      {
        "title": "Selection Shortcuts",
        "shortcuts": [
          {
            "id": "13",
            "keys": [
              "Ctrl (Control)",
              "A"
            ],
            "description": "Select All",
            "platforms": {
              "windows": [
                "Ctrl (Control)",
                "A"
              ],
              "mac": [
                "\u2318 (Command)",
                "A"
              ]
            }
          },
          {
            "id": "14",
            "keys": [
              "Ctrl (Control)",
              "D"
            ],
            "description": "Deselect",
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
      }
    ]
  },

  // ... Convert all other applications to this format
};


// as const;

// Add TypeScript type



