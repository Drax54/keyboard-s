// data/applications.ts


// import { Application } from "@/types/shortcut";

// export const applications: { [key: string]: Application } = {
//   // vscode: {
//   //   id: "vscode",
//   //   name: "Visual Studio Code",
//   //   icon: "/icons/software/vscode.png",
//   //   description: "Shortcuts for Visual Studio (VS code) - Windows and MacOS",
//   //   groups: [
//   //     {
//   //       title: "General",
//   //       shortcuts: [
//   //         {
//   //           id: "1",
//   //           keys: ["Ctrl", "P"],
//   //           description: "Quick Open, Go to File",
//   //           platforms: {
//   //             windows: ["Ctrl", "P"],
//   //             mac: ["⌘", "P"]
//   //           }
//   //         },
//   //         {
//   //           id: "2",
//   //           keys: ["Ctrl", "Shift", "P"],
//   //           description: "Show Command Palette",
//   //           platforms: {
//   //             windows: ["Ctrl", "Shift", "P"],
//   //             mac: ["⌘", "Shift", "P"]
//   //           }
//   //         },
//   //         {
//   //           id: "3",
//   //           keys: ["Ctrl", "Shift", "N"],
//   //           description: "New Window",
//   //           platforms: {
//   //             windows: ["Ctrl", "Shift", "N"],
//   //             mac: ["⌘", "Shift", "N"]
//   //           }
//   //         },
//   //         {
//   //           id: "4",
//   //           keys: ["Ctrl", "W"],
//   //           description: "Close Window",
//   //           platforms: {
//   //             windows: ["Ctrl", "W"],
//   //             mac: ["⌘", "W"]
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     {
//   //       title: "Basic Editing",
//   //       shortcuts: [
//   //         {
//   //           id: "5",
//   //           keys: ["Ctrl", "X"],
//   //           description: "Cut line",
//   //           platforms: {
//   //             windows: ["Ctrl", "X"],
//   //             mac: ["⌘", "X"]
//   //           }
//   //         },
//   //         {
//   //           id: "6",
//   //           keys: ["Ctrl", "C"],
//   //           description: "Copy line",
//   //           platforms: {
//   //             windows: ["Ctrl", "C"],
//   //             mac: ["⌘", "C"]
//   //           }
//   //         },
//   //         {
//   //           id: "7",
//   //           keys: ["Ctrl", "V"],
//   //           description: "Paste",
//   //           platforms: {
//   //             windows: ["Ctrl", "V"],
//   //             mac: ["⌘", "V"]
//   //           }
//   //         },
//   //         {
//   //           id: "8",
//   //           keys: ["Alt", "↑"],
//   //           description: "Move line up",
//   //           platforms: {
//   //             windows: ["Alt", "↑"],
//   //             mac: ["⌥", "↑"]
//   //           }
//   //         },
//   //         {
//   //           id: "9",
//   //           keys: ["Alt", "↓"],
//   //           description: "Move line down",
//   //           platforms: {
//   //             windows: ["Alt", "↓"],
//   //             mac: ["⌥", "↓"]
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     {
//   //       title: "Search and Replace",
//   //       shortcuts: [
//   //         {
//   //           id: "10",
//   //           keys: ["Ctrl", "F"],
//   //           description: "Find",
//   //           platforms: {
//   //             windows: ["Ctrl", "F"],
//   //             mac: ["⌘", "F"]
//   //           }
//   //         },
//   //         {
//   //           id: "11",
//   //           keys: ["Ctrl", "H"],
//   //           description: "Replace",
//   //           platforms: {
//   //             windows: ["Ctrl", "H"],
//   //             mac: ["⌘", "H"]
//   //           }
//   //         },
//   //         {
//   //           id: "12",
//   //           keys: ["Ctrl", "Shift", "F"],
//   //           description: "Find in Files",
//   //           platforms: {
//   //             windows: ["Ctrl", "Shift", "F"],
//   //             mac: ["⌘", "Shift", "F"]
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     {
//   //       title: "Navigation",
//   //       shortcuts: [
//   //         {
//   //           id: "13",
//   //           keys: ["Ctrl", "G"],
//   //           description: "Go to Line",
//   //           platforms: {
//   //             windows: ["Ctrl", "G"],
//   //             mac: ["⌘", "G"]
//   //           }
//   //         },
//   //         {
//   //           id: "14",
//   //           keys: ["Ctrl", "Tab"],
//   //           description: "Switch between open files",
//   //           platforms: {
//   //             windows: ["Ctrl", "Tab"],
//   //             mac: ["⌘", "Tab"]
//   //           }
//   //         },
//   //         {
//   //           id: "15",
//   //           keys: ["Ctrl", "\\"],
//   //           description: "Split editor",
//   //           platforms: {
//   //             windows: ["Ctrl", "\\"],
//   //             mac: ["⌘", "\\"]
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     {
//   //       title: "Code Folding",
//   //       shortcuts: [
//   //         {
//   //           id: "16",
//   //           keys: ["Ctrl", "Shift", "["],
//   //           description: "Fold region",
//   //           platforms: {
//   //             windows: ["Ctrl", "Shift", "["],
//   //             mac: ["⌘", "⌥", "["]
//   //           }
//   //         },
//   //         {
//   //           id: "17",
//   //           keys: ["Ctrl", "Shift", "]"],
//   //           description: "Unfold region",
//   //           platforms: {
//   //             windows: ["Ctrl", "Shift", "]"],
//   //             mac: ["⌘", "⌥", "]"]
//   //           }
//   //         },
//   //         {
//   //           id: "18",
//   //           keys: ["Ctrl", "K", "Ctrl", "0"],
//   //           description: "Fold all regions",
//   //           platforms: {
//   //             windows: ["Ctrl", "K", "Ctrl", "0"],
//   //             mac: ["⌘", "K", "⌘", "0"]
//   //           }
//   //         }
//   //       ],
//   //     },
//   //     {
//   //       title: "IntelliSense",
//   //       shortcuts: [
//   //         {
//   //           id: "19",
//   //           keys: ["Ctrl", "Space"],
//   //           description: "Trigger suggestion",
//   //           platforms: {
//   //             windows: ["Ctrl", "Space"],
//   //             mac: ["⌘", "Space"]
//   //           }
//   //         },
//   //         {
//   //           id: "20",
//   //           keys: ["Ctrl", "."],
//   //           description: "Quick Fix",
//   //           platforms: {
//   //             windows: ["Ctrl", "."],
//   //             mac: ["⌘", "."]
//   //           }
//   //         }
//   //       ],
//   //     }
//   //   ],
//   // },
//   photoshop: {
//     id: "photoshop",
//     name: "Adobe Photoshop",
//     icon: "/icons/software/photoshop.svg",
//     description: "Shortcuts for Adobe Photoshop - Image editing shortcuts for Windows and macOS",
//     groups: [
//       {
//         title: "Essential Tools",
//         shortcuts: [
//           {
//             id: "1",
//             keys: ["V"],
//             description: "Move Tool",
//             platforms: { windows: ["V"], mac: ["V"] }
//           },
//           {
//             id: "2",
//             keys: ["M"],
//             description: "Rectangular Marquee Tool",
//             platforms: { windows: ["M"], mac: ["M"] }
//           },
//           {
//             id: "3",
//             keys: ["L"],
//             description: "Lasso Tool",
//             platforms: { windows: ["L"], mac: ["L"] }
//           },
//           {
//             id: "4",
//             keys: ["W"],
//             description: "Magic Wand Tool",
//             platforms: { windows: ["W"], mac: ["W"] }
//           },
//           {
//             id: "5",
//             keys: ["C"],
//             description: "Crop Tool",
//             platforms: { windows: ["C"], mac: ["C"] }
//           }
//         ],
//       },
//       {
//         title: "File Operations",
//         shortcuts: [
//           {
//             id: "6",
//             keys: ["Ctrl", "N"],
//             description: "New Document",
//             platforms: {
//               windows: ["Ctrl", "N"],
//               mac: ["⌘", "N"]
//             }
//           },
//           {
//             id: "7",
//             keys: ["Ctrl", "O"],
//             description: "Open File",
//             platforms: {
//               windows: ["Ctrl", "O"],
//               mac: ["⌘", "O"]
//             }
//           },
//           {
//             id: "8",
//             keys: ["Ctrl", "S"],
//             description: "Save",
//             platforms: {
//               windows: ["Ctrl", "S"],
//               mac: ["⌘", "S"]
//             }
//           },
//           {
//             id: "9",
//             keys: ["Ctrl", "Shift", "S"],
//             description: "Save As",
//             platforms: {
//               windows: ["Ctrl", "Shift", "S"],
//               mac: ["⌘", "Shift", "S"]
//             }
//           },
//           {
//             id: "10",
//             keys: ["Ctrl", "Alt", "S"],
//             description: "Save for Web",
//             platforms: {
//               windows: ["Ctrl", "Alt", "S"],
//               mac: ["⌘", "Option", "S"]
//             }
//           }
//         ],
//       },
//       {
//         title: "Edit Operations",
//         shortcuts: [
//           {
//             id: "11",
//             keys: ["Ctrl", "Z"],
//             description: "Undo/Redo",
//             platforms: {
//               windows: ["Ctrl", "Z"],
//               mac: ["⌘", "Z"]
//             }
//           },
//           {
//             id: "12",
//             keys: ["Ctrl", "Alt", "Z"],
//             description: "Step Backward",
//             platforms: {
//               windows: ["Ctrl", "Alt", "Z"],
//               mac: ["⌘", "Option", "Z"]
//             }
//           },
//           {
//             id: "13",
//             keys: ["Ctrl", "Shift", "Z"],
//             description: "Step Forward",
//             platforms: {
//               windows: ["Ctrl", "Shift", "Z"],
//               mac: ["⌘", "Shift", "Z"]
//             }
//           }
//         ],
//       },
//       {
//         title: "Image Adjustments",
//         shortcuts: [
//           {
//             id: "14",
//             keys: ["Ctrl", "L"],
//             description: "Levels",
//             platforms: {
//               windows: ["Ctrl", "L"],
//               mac: ["⌘", "L"]
//             }
//           },
//           {
//             id: "15",
//             keys: ["Ctrl", "M"],
//             description: "Curves",
//             platforms: {
//               windows: ["Ctrl", "M"],
//               mac: ["⌘", "M"]
//             }
//           },
//           {
//             id: "16",
//             keys: ["Ctrl", "U"],
//             description: "Hue/Saturation",
//             platforms: {
//               windows: ["Ctrl", "U"],
//               mac: ["⌘", "U"]
//             }
//           }
//         ],
//       },
//       {
//         title: "Layer Operations",
//         shortcuts: [
//           {
//             id: "17",
//             keys: ["Ctrl", "J"],
//             description: "Duplicate Layer",
//             platforms: {
//               windows: ["Ctrl", "J"],
//               mac: ["⌘", "J"]
//             }
//           },
//           {
//             id: "18",
//             keys: ["Ctrl", "G"],
//             description: "Group Layers",
//             platforms: {
//               windows: ["Ctrl", "G"],
//               mac: ["⌘", "G"]
//             }
//           },
//           {
//             id: "19",
//             keys: ["Ctrl", "Shift", "N"],
//             description: "New Layer",
//             platforms: {
//               windows: ["Ctrl", "Shift", "N"],
//               mac: ["⌘", "Shift", "N"]
//             }
//           }
//         ],
//       },
//       {
//         title: "View Controls",
//         shortcuts: [
//           {
//             id: "20",
//             keys: ["Ctrl", "+"],
//             description: "Zoom In",
//             platforms: {
//               windows: ["Ctrl", "+"],
//               mac: ["⌘", "+"]
//             }
//           },
//           {
//             id: "21",
//             keys: ["Ctrl", "-"],
//             description: "Zoom Out",
//             platforms: {
//               windows: ["Ctrl", "-"],
//               mac: ["⌘", "-"]
//             }
//           },
//           {
//             id: "22",
//             keys: ["Ctrl", "0"],
//             description: "Fit on Screen",
//             platforms: {
//               windows: ["Ctrl", "0"],
//               mac: ["⌘", "0"]
//             }
//           }
//         ],
//       }
//     ],
//   },
//   "microsoft-word": {
//     id: "microsoft-word",
//     name: "Microsoft Word",
//     icon: "/icons/software/microsoft-word.png",
//     description: "Comprehensive shortcuts for creating and editing documents",
//     groups: [
//       {
//         title: "General Shortcuts",
//         shortcuts: [
//           {
//             id: "1",
//             keys: ["Ctrl (Control)", "+", "N"],
//             description: "Create a new document",
//             platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
//           },
//           {
//             id: "2",
//             keys: ["Ctrl (Control)", "+", "O"],
//             description: "Open an existing document",
//             platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
//           },
//           {
//             id: "3",
//             keys: ["Ctrl (Control)", "+", "S"],
//             description: "Save the current document",
//             platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
//           },
//           {
//             id: "4",
//             keys: ["Ctrl (Control)", "+", "P"],
//             description: "Print the document",
//             platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
//           },
//           {
//             id: "5",
//             keys: ["Ctrl (Control)", "+", "W"],
//             description: "Close the current document",
//             platforms: { windows: ["Ctrl (Control)", "+", "W"], mac: ["⌘ (Command)", "+", "W"] }
//           },
//           {
//             id: "6",
//             keys: ["Ctrl (Control)", "+", "Q"],
//             description: "Quit Microsoft Word",
//             platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "Q"] }
//           }
//         ]
//       },
//       {
//         title: "Text Editing",
//         shortcuts: [
//           {
//             id: "7",
//             keys: ["Ctrl (Control)", "+", "X"],
//             description: "Cut selected text",
//             platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
//           },
//           {
//             id: "8",
//             keys: ["Ctrl (Control)", "+", "C"],
//             description: "Copy selected text",
//             platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
//           },
//           {
//             id: "9",
//             keys: ["Ctrl (Control)", "+", "V"],
//             description: "Paste copied text",
//             platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
//           },
//           {
//             id: "10",
//             keys: ["Ctrl (Control)", "+", "Z"],
//             description: "Undo the last action",
//             platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
//           },
//           {
//             id: "11",
//             keys: ["Ctrl (Control)", "+", "Y"],
//             description: "Redo the last action",
//             platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
//           },
//           {
//             id: "12",
//             keys: ["Ctrl (Control)", "+", "A"],
//             description: "Select all text",
//             platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
//           }
//         ]
//       },
//       {
//         title: "Formatting",
//         shortcuts: [
//           {
//             id: "13",
//             keys: ["Ctrl (Control)", "+", "B"],
//             description: "Apply bold formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
//           },
//           {
//             id: "14",
//             keys: ["Ctrl (Control)", "+", "I"],
//             description: "Apply italic formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
//           },
//           {
//             id: "15",
//             keys: ["Ctrl (Control)", "+", "U"],
//             description: "Apply underline formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
//           },
//           {
//             id: "16",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "D"],
//             description: "Apply double underline",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "D"], mac: ["⌘ (Command)", "+", "Shift", "+", "D"] }
//           },
//           {
//             id: "17",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "W"],
//             description: "Underline words, not spaces",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "W"], mac: ["⌘ (Command)", "+", "Shift", "+", "W"] }
//           },
//           {
//             id: "18",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "K"],
//             description: "Format text as small caps",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "K"], mac: ["⌘ (Command)", "+", "Shift", "+", "K"] }
//           }
//         ]
//       }
//     ]
//   },
//   "microsoft-powerpoint": {
//     id: "microsoft-powerpoint",
//     name: "Microsoft PowerPoint",
//     icon: "/icons/software/microsoft-powerpoint.png",
//     description: "Comprehensive shortcuts for Shortcuts for Microsoft Power Point - creating and editing presentations",
//     groups: [
//       {
//         title: "General Shortcuts",
//         shortcuts: [
//           {
//             id: "1",
//             keys: ["Ctrl (Control)", "+", "N"],
//             description: "Create a new presentation",
//             platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
//           },
//           {
//             id: "2",
//             keys: ["Ctrl (Control)", "+", "O"],
//             description: "Open an existing presentation",
//             platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
//           },
//           {
//             id: "3",
//             keys: ["Ctrl (Control)", "+", "S"],
//             description: "Save the current presentation",
//             platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
//           },
//           {
//             id: "4",
//             keys: ["Ctrl (Control)", "+", "P"],
//             description: "Print the current presentation",
//             platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
//           },
//           {
//             id: "5",
//             keys: ["Ctrl (Control)", "+", "W"],
//             description: "Close the current presentation",
//             platforms: { windows: ["Ctrl (Control)", "+", "W"], mac: ["⌘ (Command)", "+", "W"] }
//           },
//           {
//             id: "6",
//             keys: ["Ctrl (Control)", "+", "Q"],
//             description: "Quit PowerPoint",
//             platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "Q"] }
//           }
//         ]
//       },
//       {
//         title: "Text Editing",
//         shortcuts: [
//           {
//             id: "7",
//             keys: ["Ctrl (Control)", "+", "X"],
//             description: "Cut selected text",
//             platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
//           },
//           {
//             id: "8",
//             keys: ["Ctrl (Control)", "+", "C"],
//             description: "Copy selected text",
//             platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
//           },
//           {
//             id: "9",
//             keys: ["Ctrl (Control)", "+", "V"],
//             description: "Paste copied text",
//             platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
//           },
//           {
//             id: "10",
//             keys: ["Ctrl (Control)", "+", "Z"],
//             description: "Undo the last action",
//             platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
//           },
//           {
//             id: "11",
//             keys: ["Ctrl (Control)", "+", "Y"],
//             description: "Redo the last undone action",
//             platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
//           },
//           {
//             id: "12",
//             keys: ["Ctrl (Control)", "+", "A"],
//             description: "Select all objects",
//             platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
//           }
//         ]
//       },
//       {
//         title: "Presentation View Shortcuts",
//         shortcuts: [
//           {
//             id: "13",
//             keys: ["F5"],
//             description: "Start slideshow from the beginning",
//             platforms: { windows: ["F5"], mac: ["⌘ (Command)", "+", "Return"] }
//           },
//           {
//             id: "14",
//             keys: ["Shift", "+", "F5"],
//             description: "Start slideshow from the current slide",
//             platforms: { windows: ["Shift", "+", "F5"], mac: ["Shift", "+", "⌘ (Command)", "+", "Return"] }
//           },
//           {
//             id: "15",
//             keys: ["Esc"],
//             description: "End the slideshow",
//             platforms: { windows: ["Esc"], mac: ["Esc"] }
//           }
//         ]
//       },
//       {
//         title: "Navigation Shortcuts",
//         shortcuts: [
//           {
//             id: "16",
//             keys: ["Arrow (Right)"],
//             description: "Go to the next slide",
//             platforms: { windows: ["Arrow (Right)"], mac: ["Arrow (Right)"] }
//           },
//           {
//             id: "17",
//             keys: ["Arrow (Left)"],
//             description: "Go to the previous slide",
//             platforms: { windows: ["Arrow (Left)"], mac: ["Arrow (Left)"] }
//           },
//           {
//             id: "18",
//             keys: ["Home"],
//             description: "Go to the first slide",
//             platforms: { windows: ["Home"], mac: ["Fn", "+", "Arrow (Left)"] }
//           },
//           {
//             id: "19",
//             keys: ["End"],
//             description: "Go to the last slide",
//             platforms: { windows: ["End"], mac: ["Fn", "+", "Arrow (Right)"] }
//           }
//         ]
//       },
//       {
//         title: "Formatting",
//         shortcuts: [
//           {
//             id: "20",
//             keys: ["Ctrl (Control)", "+", "B"],
//             description: "Apply bold formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
//           },
//           {
//             id: "21",
//             keys: ["Ctrl (Control)", "+", "I"],
//             description: "Apply italic formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
//           },
//           {
//             id: "22",
//             keys: ["Ctrl (Control)", "+", "U"],
//             description: "Apply underline formatting",
//             platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
//           }
//         ]
//       },
//       {
//         title: "Object Management",
//         shortcuts: [
//           {
//             id: "23",
//             keys: ["Ctrl (Control)", "+", "D"],
//             description: "Duplicate the selected object",
//             platforms: { windows: ["Ctrl (Control)", "+", "D"], mac: ["⌘ (Command)", "+", "D"] }
//           },
//           {
//             id: "24",
//             keys: ["Delete"],
//             description: "Delete the selected object",
//             platforms: { windows: ["Delete"], mac: ["Delete"] }
//           },
//           {
//             id: "25",
//             keys: ["Ctrl (Control)", "+", "G"],
//             description: "Group selected objects",
//             platforms: { windows: ["Ctrl (Control)", "+", "G"], mac: ["⌘ (Command)", "+", "G"] }
//           },
//           {
//             id: "26",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "G"],
//             description: "Ungroup selected objects",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "G"], mac: ["⌘ (Command)", "+", "Shift", "+", "G"] }
//           }
//         ]
//       }
//     ]
//   },
//   "microsoft-outlook": {
//     id: "microsoft-outlook",
//     name: "Microsoft Outlook",
//     icon: "/icons/software/microsoft-outlook.png",
//     description: "Comprehensive shortcuts for managing emails, calendar, and tasks",
//     groups: [
//       {
//         title: "General Shortcuts",
//         shortcuts: [
//           {
//             id: "1",
//             keys: ["Ctrl (Control)", "+", "N"],
//             description: "Create a new item",
//             platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
//           },
//           {
//             id: "2",
//             keys: ["Ctrl (Control)", "+", "O"],
//             description: "Open an item",
//             platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
//           },
//           {
//             id: "3",
//             keys: ["Ctrl (Control)", "+", "S"],
//             description: "Save an item",
//             platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
//           },
//           {
//             id: "4",
//             keys: ["Ctrl (Control)", "+", "P"],
//             description: "Print the selected item",
//             platforms: { windows: ["Ctrl (Control)", "+", "P"], mac: ["⌘ (Command)", "+", "P"] }
//           },
//           {
//             id: "5",
//             keys: ["Ctrl (Control)", "+", "Q"],
//             description: "Mark the selected email as read",
//             platforms: { windows: ["Ctrl (Control)", "+", "Q"], mac: ["⌘ (Command)", "+", "T"] }
//           },
//           {
//             id: "6",
//             keys: ["Ctrl (Control)", "+", "U"],
//             description: "Mark the selected email as unread",
//             platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "Shift", "+", "T"] }
//           }
//         ]
//       },
//       {
//         title: "Navigation Shortcuts",
//         shortcuts: [
//           {
//             id: "7",
//             keys: ["Ctrl (Control)", "+", "1"],
//             description: "Switch to Mail",
//             platforms: { windows: ["Ctrl (Control)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
//           },
//           {
//             id: "8",
//             keys: ["Ctrl (Control)", "+", "2"],
//             description: "Switch to Calendar",
//             platforms: { windows: ["Ctrl (Control)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
//           },
//           {
//             id: "9",
//             keys: ["Ctrl (Control)", "+", "3"],
//             description: "Switch to Contacts",
//             platforms: { windows: ["Ctrl (Control)", "+", "3"], mac: ["⌘ (Command)", "+", "3"] }
//           },
//           {
//             id: "10",
//             keys: ["Ctrl (Control)", "+", "4"],
//             description: "Switch to Tasks",
//             platforms: { windows: ["Ctrl (Control)", "+", "4"], mac: ["⌘ (Command)", "+", "4"] }
//           },
//           {
//             id: "11",
//             keys: ["Ctrl (Control)", "+", "5"],
//             description: "Switch to Notes",
//             platforms: { windows: ["Ctrl (Control)", "+", "5"], mac: ["⌘ (Command)", "+", "5"] }
//           },
//           {
//             id: "12",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "I"],
//             description: "Go to Inbox",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "I"], mac: ["⌘ (Command)", "+", "Shift", "+", "I"] }
//           },
//           {
//             id: "13",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "O"],
//             description: "Go to Outbox",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "O"], mac: ["⌘ (Command)", "+", "Shift", "+", "O"] }
//           }
//         ]
//       },
//       {
//         title: "Email Management",
//         shortcuts: [
//           {
//             id: "14",
//             keys: ["Ctrl (Control)", "+", "R"],
//             description: "Reply to the email",
//             platforms: { windows: ["Ctrl (Control)", "+", "R"], mac: ["⌘ (Command)", "+", "R"] }
//           },
//           {
//             id: "15",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "R"],
//             description: "Reply all to the email",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "R"], mac: ["⌘ (Command)", "+", "Shift", "+", "R"] }
//           },
//           {
//             id: "16",
//             keys: ["Ctrl (Control)", "+", "F"],
//             description: "Forward the email",
//             platforms: { windows: ["Ctrl (Control)", "+", "F"], mac: ["⌘ (Command)", "+", "J"] }
//           },
//           {
//             id: "17",
//             keys: ["Ctrl (Control)", "+", "Enter"],
//             description: "Send the email",
//             platforms: { windows: ["Ctrl (Control)", "+", "Enter"], mac: ["⌘ (Command)", "+", "Return"] }
//           },
//           {
//             id: "18",
//             keys: ["Delete"],
//             description: "Delete the selected email",
//             platforms: { windows: ["Delete"], mac: ["Delete"] }
//           }
//         ]
//       },
//       {
//         title: "Calendar Management",
//         shortcuts: [
//           {
//             id: "19",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "A"],
//             description: "Create a new appointment",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "A"], mac: ["⌘ (Command)", "+", "Shift", "+", "N"] }
//           },
//           {
//             id: "20",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "Q"],
//             description: "Create a new meeting request",
//             platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "Q"], mac: ["⌘ (Command)", "+", "Shift", "+", "Q"] }
//           },
//           {
//             id: "21",
//             keys: ["Alt (Alt)", "+", "0"],
//             description: "Switch to Month view",
//             platforms: { windows: ["Alt (Alt)", "+", "0"], mac: ["⌘ (Command)", "+", "3"] }
//           },
//           {
//             id: "22",
//             keys: ["Alt (Alt)", "+", "1"],
//             description: "Switch to Day view",
//             platforms: { windows: ["Alt (Alt)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
//           },
//           {
//             id: "23",
//             keys: ["Alt (Alt)", "+", "2"],
//             description: "Switch to Work Week view",
//             platforms: { windows: ["Alt (Alt)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
//           },
//           {
//             id: "24",
//             keys: ["Alt (Alt)", "+", "3"],
//             description: "Switch to Full Week view",
//             platforms: { windows: ["Alt (Alt)", "+", "3"], mac: ["⌘ (Command)", "+", "3"] }
//           }
//         ]
//       }
//     ]
//   },
//   "microsoft-excel": {
//     id: "microsoft-excel",
//     name: "Microsoft Excel",
//     icon: "/icons/software/microsoft-excel.png",
//     description: "Powerful shortcuts for data analysis and spreadsheets",
//     groups: [
//       {
//         title: "Basic Editing Shortcuts",
//         shortcuts: [
//           {
//             id: "1",
//             keys: ["Ctrl (Control)", "+", "C"],
//             description: "Copy selected cells",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "C"],
//               mac: ["⌘ (Command)", "+", "C"]
//             }
//           },
//           {
//             id: "2",
//             keys: ["Ctrl (Control)", "+", "V"],
//             description: "Paste content into selected cells",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "V"],
//               mac: ["⌘ (Command)", "+", "V"]
//             }
//           },
//           {
//             id: "3",
//             keys: ["Ctrl (Control)", "+", "X"],
//             description: "Cut selected cells",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "X"],
//               mac: ["⌘ (Command)", "+", "X"]
//             }
//           },
//           {
//             id: "4",
//             keys: ["Ctrl (Control)", "+", "Z"],
//             description: "Undo the last action",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "Z"],
//               mac: ["⌘ (Command)", "+", "Z"]
//             }
//           },
//           {
//             id: "5",
//             keys: ["Ctrl (Control)", "+", "Y"],
//             description: "Redo the last undone action",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "Y"],
//               mac: ["⌘ (Command)", "+", "Shift", "+", "Z"]
//             }
//           }
//         ]
//       },
//       {
//         title: "Navigation Shortcuts",
//         shortcuts: [
//           {
//             id: "6",
//             keys: ["Arrow (Up)"],
//             description: "Move one cell up",
//             platforms: {
//               windows: ["Arrow (Up)"],
//               mac: ["Arrow (Up)"]
//             }
//           },
//           {
//             id: "7",
//             keys: ["Ctrl (Control)", "+", "Arrow (Down)"],
//             description: "Move to the bottom edge of the current data region",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "Arrow (Down)"],
//               mac: ["⌘ (Command)", "+", "Arrow (Down)"]
//             }
//           },
//           {
//             id: "8",
//             keys: ["Ctrl (Control)", "+", "Arrow (Right)"],
//             description: "Move to the right edge of the current data region",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "Arrow (Right)"],
//               mac: ["⌘ (Command)", "+", "Arrow (Right)"]
//             }
//           }
//         ]
//       },
//       {
//         title: "Formatting Shortcuts",
//         shortcuts: [
//           {
//             id: "9",
//             keys: ["Ctrl (Control)", "+", "B"],
//             description: "Apply bold formatting to selected text",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "B"],
//               mac: ["⌘ (Command)", "+", "B"]
//             }
//           },
//           {
//             id: "10",
//             keys: ["Ctrl (Control)", "+", "I"],
//             description: "Apply italic formatting to selected text",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "I"],
//               mac: ["⌘ (Command)", "+", "I"]
//             }
//           },
//           {
//             id: "11",
//             keys: ["Ctrl (Control)", "+", "U"],
//             description: "Underline selected text",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "U"],
//               mac: ["⌘ (Command)", "+", "U"]
//             }
//           }
//         ]
//       },
//       {
//         title: "Data Management Shortcuts",
//         shortcuts: [
//           {
//             id: "12",
//             keys: ["Ctrl (Control)", "+", "T"],
//             description: "Convert selected data into a table",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "T"],
//               mac: ["⌘ (Command)", "+", "T"]
//             }
//           },
//           {
//             id: "13",
//             keys: ["Ctrl (Control)", "+", "Shift", "+", "L"],
//             description: "Apply or remove filters",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "Shift", "+", "L"],
//               mac: ["⌘ (Command)", "+", "Shift", "+", "L"]
//             }
//           }
//         ]
//       },
//       {
//         title: "Workbook Shortcuts",
//         shortcuts: [
//           {
//             id: "14",
//             keys: ["Ctrl (Control)", "+", "N"],
//             description: "Create a new workbook",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "N"],
//               mac: ["⌘ (Command)", "+", "N"]
//             }
//           },
//           {
//             id: "15",
//             keys: ["Ctrl (Control)", "+", "O"],
//             description: "Open an existing workbook",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "O"],
//               mac: ["⌘ (Command)", "+", "O"]
//             }
//           },
//           {
//             id: "16",
//             keys: ["Ctrl (Control)", "+", "S"],
//             description: "Save the current workbook",
//             platforms: {
//               windows: ["Ctrl (Control)", "+", "S"],
//               mac: ["⌘ (Command)", "+", "S"]
//             }
//           }
//         ]
//       }
//     ]
//   }
// };



// data/applications.ts

export interface BaseItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  featured?: boolean;
  platforms?: ReadonlyArray<string>;
  groups?: ReadonlyArray<{
    title: string;
    shortcuts: ReadonlyArray<{
      id: string;
      description: string;
      keys: ReadonlyArray<string>;
      platforms?: {
        windows?: ReadonlyArray<string>;
        mac?: ReadonlyArray<string>;
      };
    }>;
  }>;
}

export interface CategoryCardProps {
  title: string;
  items: ReadonlyArray<BaseItem>;
  baseUrl: string;
}

// Add this type assertion utility
export type ValidId<T> = T extends { [key: string]: any } ? keyof T : never;

export const applications = {
  "microsoft-word": {
    id: "microsoft-word",
    name: "Microsoft Word",
    icon: "/icons/software/microsoft-word.svg",
    description: "Comprehensive shortcuts for creating and editing documents",
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
    icon: "/icons/software/microsoft-powerpoint.png",
    description: "Shortcuts for Microsoft Power Point - creating and editing presentations",
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
    icon: "/icons/software/microsoft-outlook.png",
    description: "Comprehensive shortcuts for managing emails, calendar, and tasks",
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
    icon: "/icons/software/microsoft-excel.png",
    description: "Powerful shortcuts for data analysis and spreadsheets",
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
  "microsoft-access": {
    id: "microsoft-access",
    name: "Microsoft Access",
    icon: "/icons/software/microsoft-access.png",
    description: "Shortcuts for Microsoft Access - Database management and form design",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "General Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new database",
            platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an existing database",
            platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Save the current object",
            platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
          },
          {
            id: "4",
            keys: ["Alt (Alt)", "+", "F4"],
            description: "Close Microsoft Access",
            platforms: { windows: ["Alt (Alt)", "+", "F4"], mac: ["⌘ (Command)", "+", "Q"] }
          }
        ]
      },
      {
        title: "Data Navigation",
        shortcuts: [
          {
            id: "5",
            keys: ["Tab"],
            description: "Move to the next field in a form or table",
            platforms: { windows: ["Tab"], mac: ["Tab"] }
          },
          {
            id: "6",
            keys: ["Shift", "+", "Tab"],
            description: "Move to the previous field",
            platforms: { windows: ["Shift", "+", "Tab"], mac: ["Shift", "+", "Tab"] }
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "Arrow (Right)"],
            description: "Move to the next record",
            platforms: { windows: ["Ctrl (Control)", "+", "Arrow (Right)"], mac: ["⌘ (Command)", "+", "Arrow (Right)"] }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "Arrow (Left)"],
            description: "Move to the previous record",
            platforms: { windows: ["Ctrl (Control)", "+", "Arrow (Left)"], mac: ["⌘ (Command)", "+", "Arrow (Left)"] }
          }
        ]
      },
      {
        title: "Form Design",
        shortcuts: [
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "D"],
            description: "Duplicate the selected control",
            platforms: { windows: ["Ctrl (Control)", "+", "D"], mac: ["⌘ (Command)", "+", "D"] }
          },
          {
            id: "10",
            keys: ["Delete"],
            description: "Delete the selected control",
            platforms: { windows: ["Delete"], mac: ["Delete"] }
          },
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "G"],
            description: "Group selected controls",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "G"], mac: ["⌘ (Command)", "+", "Shift", "+", "G"] }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "U"],
            description: "Ungroup selected controls",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "U"], mac: ["⌘ (Command)", "+", "Shift", "+", "U"] }
          }
        ]
      },
      {
        title: "Search and Replace",
        shortcuts: [
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "F"],
            description: "Find a record",
            platforms: { windows: ["Ctrl (Control)", "+", "F"], mac: ["⌘ (Command)", "+", "F"] }
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "H"],
            description: "Replace data",
            platforms: { windows: ["Ctrl (Control)", "+", "H"], mac: ["⌘ (Command)", "+", "H"] }
          },
          {
            id: "15",
            keys: ["F3"],
            description: "Repeat the last Find or Replace action",
            platforms: { windows: ["F3"], mac: ["Fn", "+", "F3"] }
          }
        ]
      },
      {
        title: "Data Entry",
        shortcuts: [
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", ";"],
            description: "Insert the current date",
            platforms: { windows: ["Ctrl (Control)", "+", ";"], mac: ["⌘ (Command)", "+", ";"] }
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", ":"],
            description: "Insert the current time",
            platforms: { windows: ["Ctrl (Control)", "+", ":"], mac: ["⌘ (Command)", "+", ":"] }
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "Enter"],
            description: "Save the current record",
            platforms: { windows: ["Ctrl (Control)", "+", "Enter"], mac: ["⌘ (Command)", "+", "Enter"] }
          }
        ]
      },
      {
        title: "View and Navigation",
        shortcuts: [
          {
            id: "19",
            keys: ["F11"],
            description: "Toggle the Navigation Pane",
            platforms: { windows: ["F11"], mac: ["Fn", "+", "F11"] }
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", ","],
            description: "Switch to Datasheet View",
            platforms: { windows: ["Ctrl (Control)", "+", ","], mac: ["⌘ (Command)", "+", ","] }
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "."],
            description: "Switch to Design View",
            platforms: { windows: ["Ctrl (Control)", "+", "."], mac: ["⌘ (Command)", "+", "."] }
          }
        ]
      }
    ]
  },
  "microsoft-onenote": {
    id: "microsoft-onenote",
    name: "Microsoft OneNote",
    icon: "/icons/software/microsoft-onenote.png",
    description: "Shortcuts for Microsoft OneNote - Note-taking and organization",
    platforms: ["windows", "macos"],
    featured: true,
    groups: [
      {
        title: "General Shortcuts",
        shortcuts: [
          {
            id: "1",
            keys: ["Ctrl (Control)", "+", "N"],
            description: "Create a new notebook",
            platforms: { windows: ["Ctrl (Control)", "+", "N"], mac: ["⌘ (Command)", "+", "N"] }
          },
          {
            id: "2",
            keys: ["Ctrl (Control)", "+", "O"],
            description: "Open an existing notebook",
            platforms: { windows: ["Ctrl (Control)", "+", "O"], mac: ["⌘ (Command)", "+", "O"] }
          },
          {
            id: "3",
            keys: ["Ctrl (Control)", "+", "S"],
            description: "Sync the current notebook",
            platforms: { windows: ["Ctrl (Control)", "+", "S"], mac: ["⌘ (Command)", "+", "S"] }
          },
          {
            id: "4",
            keys: ["Alt (Alt)", "+", "F4"],
            description: "Close Microsoft OneNote",
            platforms: { windows: ["Alt (Alt)", "+", "F4"], mac: ["⌘ (Command)", "+", "Q"] }
          }
        ]
      },
      {
        title: "Text Editing",
        shortcuts: [
          {
            id: "5",
            keys: ["Ctrl (Control)", "+", "X"],
            description: "Cut selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "X"], mac: ["⌘ (Command)", "+", "X"] }
          },
          {
            id: "6",
            keys: ["Ctrl (Control)", "+", "C"],
            description: "Copy selected text",
            platforms: { windows: ["Ctrl (Control)", "+", "C"], mac: ["⌘ (Command)", "+", "C"] }
          },
          {
            id: "7",
            keys: ["Ctrl (Control)", "+", "V"],
            description: "Paste copied text",
            platforms: { windows: ["Ctrl (Control)", "+", "V"], mac: ["⌘ (Command)", "+", "V"] }
          },
          {
            id: "8",
            keys: ["Ctrl (Control)", "+", "Z"],
            description: "Undo the last action",
            platforms: { windows: ["Ctrl (Control)", "+", "Z"], mac: ["⌘ (Command)", "+", "Z"] }
          },
          {
            id: "9",
            keys: ["Ctrl (Control)", "+", "Y"],
            description: "Redo the last undone action",
            platforms: { windows: ["Ctrl (Control)", "+", "Y"], mac: ["⌘ (Command)", "+", "Y"] }
          },
          {
            id: "10",
            keys: ["Ctrl (Control)", "+", "A"],
            description: "Select all text on the page",
            platforms: { windows: ["Ctrl (Control)", "+", "A"], mac: ["⌘ (Command)", "+", "A"] }
          }
        ]
      },
      {
        title: "Page and Notebook Navigation",
        shortcuts: [
          {
            id: "11",
            keys: ["Ctrl (Control)", "+", "Tab"],
            description: "Switch to the next page",
            platforms: { windows: ["Ctrl (Control)", "+", "Tab"], mac: ["⌘ (Command)", "+", "]"] }
          },
          {
            id: "12",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "Tab"],
            description: "Switch to the previous page",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "Tab"], mac: ["⌘ (Command)", "+", "["] }
          },
          {
            id: "13",
            keys: ["Ctrl (Control)", "+", "G"],
            description: "Navigate to the next notebook",
            platforms: { windows: ["Ctrl (Control)", "+", "G"], mac: ["⌘ (Command)", "+", "G"] }
          },
          {
            id: "14",
            keys: ["Ctrl (Control)", "+", "E"],
            description: "Search all notebooks",
            platforms: { windows: ["Ctrl (Control)", "+", "E"], mac: ["⌘ (Command)", "+", "E"] }
          }
        ]
      },
      {
        title: "Formatting",
        shortcuts: [
          {
            id: "15",
            keys: ["Ctrl (Control)", "+", "B"],
            description: "Apply bold formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "B"], mac: ["⌘ (Command)", "+", "B"] }
          },
          {
            id: "16",
            keys: ["Ctrl (Control)", "+", "I"],
            description: "Apply italic formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "I"], mac: ["⌘ (Command)", "+", "I"] }
          },
          {
            id: "17",
            keys: ["Ctrl (Control)", "+", "U"],
            description: "Apply underline formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "U"], mac: ["⌘ (Command)", "+", "U"] }
          },
          {
            id: "18",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "D"],
            description: "Apply strikethrough formatting",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "D"], mac: ["⌘ (Command)", "+", "Shift", "+", "D"] }
          }
        ]
      },
      {
        title: "Tagging and To-Do Lists",
        shortcuts: [
          {
            id: "19",
            keys: ["Ctrl (Control)", "+", "1"],
            description: "Mark as To-Do",
            platforms: { windows: ["Ctrl (Control)", "+", "1"], mac: ["⌘ (Command)", "+", "1"] }
          },
          {
            id: "20",
            keys: ["Ctrl (Control)", "+", "2"],
            description: "Mark as Important",
            platforms: { windows: ["Ctrl (Control)", "+", "2"], mac: ["⌘ (Command)", "+", "2"] }
          },
          {
            id: "21",
            keys: ["Ctrl (Control)", "+", "Shift", "+", "K"],
            description: "Add a link to a tag",
            platforms: { windows: ["Ctrl (Control)", "+", "Shift", "+", "K"], mac: ["⌘ (Command)", "+", "Shift", "+", "K"] }
          }
        ]
      },
      {
        title: "Inserting Content",
        shortcuts: [
          {
            id: "22",
            keys: ["Alt (Alt)", "+", "N", "+", "P"],
            description: "Insert a picture",
            platforms: { windows: ["Alt (Alt)", "+", "N", "+", "P"], mac: ["⌘ (Command)", "+", "Option", "+", "P"] }
          },
          {
            id: "23",
            keys: ["Alt (Alt)", "+", "N", "+", "T"],
            description: "Insert a table",
            platforms: { windows: ["Alt (Alt)", "+", "N", "+", "T"], mac: ["⌘ (Command)", "+", "Option", "+", "T"] }
          },
          {
            id: "24",
            keys: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "D"],
            description: "Insert the current date and time",
            platforms: { windows: ["Ctrl (Control)", "+", "Alt (Alt)", "+", "D"], mac: ["⌘ (Command)", "+", "Option", "+", "D"] }
          }
        ]
      }
    ]
  },
  photoshop: {
    id: "photoshop",
    name: "Adobe Photoshop",
    icon: "/icons/software/photoshop.svg",
    description: "Shortcuts for Adobe Photoshop - Image editing shortcuts for Windows and macOS",
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
    icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.svg",
    description: "Shortcuts for Visual Studio Code (VS code) - Updated for MacOS and Windows OS",
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
    "id": "adobe-illustrator",
    "name": "Adobe Illustrator",
    "icon": "/icons/Software/illustrator.svg",
    "description": "Shortcuts for Adobe Illustrator - Updated for MacOS and Windows OS",
    "platforms": [
      "windows",
      "macos"
    ],
    "featured": true,
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
  "salesforce": {
    "id": "salesforce",
    "name": "Salesforce",
    "icon": "/icons/Software/salesforce.svg",
    "description": "Shortcuts for Salesforce - Updated for MacOS and Windows OS",
    "platforms": [
      "windows",
      "macos"
    ],
    "featured": true,
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
    "id": "tableau",
    "name": "Tableau",
    "icon": "/icons/Software/tableau.svg",
    "description": "Shortcuts for Tableau - Updated for MacOS and Windows OS",
    "platforms": [
      "windows",
      "macos"
    ],
    "featured": true,
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
  }
  // ... Convert all other applications to this format
} as const;

// Add TypeScript type
export type Application = typeof applications[keyof typeof applications];