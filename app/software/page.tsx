
// app/software/page.tsx


// import { Command } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

// const applications = [
//   {
//     id: "vscode",
//     name: "Visual Studio Code",
//     icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_vscode.svg",
//     description: "Shortcuts for Visual Studio Code (VS code)",
//   },
//   {
//     id: "photoshop",
//     name: "Adobe Photoshop",
//     icon: "https://raw.githubusercontent.com/adobe-icons/adobe-icons/master/icons/photoshop/photoshop.svg",
//     description: "Shortcuts for Adobe Photoshop - Image editing shortcuts",
//   },
//   {
//     id: "microsoft-word",
//     name: "Microsoft Word",
//     icon: "/icons/software/microsoft-word.png",
//     description: "Shortcuts for Microsoft Word - creating and editing documents",
//   },
//   {
//     id: "microsoft-excel",
//     name: "Microsoft excel",
//     icon: "/icons/software/microsoft-excel.png",
//     description: "Shortcuts for Microsoft excel - shortcuts for data analysis and spreadsheets",
//   },
//   {
//     id: "microsoft-powerpoint",
//     name: "Microsoft PowerPoint",
//     icon: "/icons/software/microsoft-powerpoint.png",
//     description: "Comprehensive shortcuts for Shortcuts for Microsoft Power Point - creating and editing presentations",
//   },
//   {
//     id: "microsoft-outlook",
//     name: "Microsoft Outlook",
//     icon: "/icons/software/microsoft-outlook.png",
//     description: "Email and calendar management shortcuts",
//   },
//   {
//     id: "microsoft-access",
//     name: "Microsoft Access",
//     icon: "/icons/software/microsoft-access.png",
//     description: "Database management shortcuts for Microsoft Access",
//   },
//   {
//     id: "microsoft-onenote",
//     name: "Microsoft OneNote",
//     icon: "/icons/software/microsoft-onenote.png",
//     description: "Note-taking shortcuts for better productivity",
//   },
//   {
//     id: "adobe-photoshop",
//     name: "Adobe Photoshop",
//     icon: "/icons/software/adobe-photoshop.png",
//     description: "Image editing shortcuts for Windows and macOS",
//   },
//   {
//     id: "adobe-acrobat-reader",
//     name: "Adobe Acrobat Reader",
//     icon: "/icons/software/adobe-acrobat-reader.png",
//     description: "PDF viewing and editing shortcuts",
//   },
//   {
//     id: "google-chrome",
//     name: "Google Chrome",
//     icon: "/icons/software/google-chrome.png",
//     description: "Essential browser shortcuts for navigation and tab management",
//   },
//   {
//     id: "mozilla-firefox",
//     name: "Mozilla Firefox",
//     icon: "/icons/software/mozilla-firefox.png",
//     description: "Powerful browser shortcuts for better productivity",
//   },
//   {
//     id: "visual-studio-code",
//     name: "Visual Studio Code",
//     icon: "/icons/software/visual-studio-code.png",
//     description: "Popular code editor shortcuts",
//   },
//   {
//     id: "visual-studio",
//     name: "Microsoft Visual Studio",
//     icon: "/icons/software/visual-studio.png",
//     description: "Professional IDE shortcuts for coding and debugging",
//   },
//   {
//     id: "vlc-media-player",
//     name: "VLC Media Player",
//     icon: "/icons/software/vlc-media-player.png",
//     description: "Media playback shortcuts for efficient control",
//   },
//   {
//     id: "spotify",
//     name: "Spotify",
//     icon: "/icons/software/spotify.png",
//     description: "Music streaming shortcuts for quick access and control",
//   },
//   {
//     id: "slack",
//     name: "Slack",
//     icon: "/icons/software/slack.png",
//     description: "Team communication shortcuts for better collaboration",
//   },
//   {
//     id: "zoom",
//     name: "Zoom",
//     icon: "/icons/software/zoom.png",
//     description: "Video conferencing shortcuts for meetings and webinars",
//   },
//   {
//     id: "skype",
//     name: "Skype",
//     icon: "/icons/software/skype.png",
//     description: "Communication shortcuts for calls and chats",
//   },
//   {
//     id: "discord",
//     name: "Discord",
//     icon: "/icons/software/discord.png",
//     description: "Gaming and community shortcuts for chats and voice",
//   },
//   {
//     id: "steam",
//     name: "Steam",
//     icon: "/icons/software/steam.png",
//     description: "Gaming platform shortcuts for better navigation",
//   },
//   {
//     id: "autocad",
//     name: "AutoCAD",
//     icon: "/icons/software/autocad.png",
//     description: "2D and 3D design shortcuts for architects and engineers",
//   },
//   {
//     id: "blender",
//     name: "Blender",
//     icon: "/icons/software/blender.png",
//     description: "3D modeling and animation shortcuts",
//   },
//   {
//     id: "7-zip",
//     name: "7-Zip",
//     icon: "/icons/software/7-zip.png",
//     description: "File compression and extraction shortcuts",
//   },
//   {
//     id: "notepad-plus-plus",
//     name: "Notepad++",
//     icon: "/icons/software/notepad-plus-plus.png",
//     description: "Text editor shortcuts for programmers and power users",
//   },
//   {
//     id: "gimp",
//     name: "GIMP",
//     icon: "/icons/software/gimp.png",
//     description: "Image editing shortcuts for open-source users",
//   },
//   {
//     id: "obs-studio",
//     name: "OBS Studio",
//     icon: "/icons/software/obs-studio.png",
//     description: "Live streaming and recording shortcuts",
//   },
//   // Add more applications as needed
// ];

// export default function SoftwarePage() {
//   return (
//     <div className="container py-10 ml-16">
//       <div className="flex items-center gap-4 mb-8">
//         <Command className="h-10 w-10" />
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Software Shortcuts</h1>
//           <p className="text-muted-foreground">
//             Master the keyboard shortcuts for your favorite applications
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {applications.map((app) => (
//           <Link key={app.id} href={`/software/${app.id}`}>
//             <Card className="p-6 hover:shadow-lg transition-shadow">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={app.icon}
//                   alt={app.name}
//                   className="w-12 h-12"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{app.name}</h2>
//                   <p className="text-sm text-muted-foreground">
//                     {app.description}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }




//version 2



// // app/software/page.tsx// app/software/page.tsx
// "use client";

// import { Command, Search } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { applications } from "@/data/applications";
// import { motion } from "framer-motion";

// export default function SoftwarePage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const applicationsArray = Object.values(applications);
//   const [filteredApplications, setFilteredApplications] = useState(applicationsArray);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);
//     setFilteredApplications(
//       applicationsArray.filter((app) =>
//         app.name.toLowerCase().includes(lowerCaseQuery)
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 py-8 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section with Flex Layout */}
//         <div className="flex items-center justify-between mb-16">
//           {/* Left side - Title and Icon */}
//           <div className="flex items-center gap-6">
//             <div className="w-16 h-16 bg-[#FF8A80] rounded-2xl flex items-center justify-center">
//               <Command className="h-8 w-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-[2.5rem] font-bold text-gray-900">Software Shortcuts</h1>
//               <p className="text-gray-500 text-lg">
//                 Essential keyboard shortcuts for your favorite applications
//               </p>
//             </div>
//           </div>

//           {/* Right side - Animated Search Bar */}
//           <div className="w-96">
//             <motion.div
//               className={`relative flex items-center ${
//                 isFocused ? 'ring-2 ring-[#FF8A80]' : ''
//               }`}
//               animate={{
//                 scale: isFocused ? 1.02 : 1,
//               }}
//               transition={{ duration: 0.2 }}
//             >
//               <Search 
//                 className={`absolute left-4 w-5 h-5 transition-colors ${
//                   isFocused ? 'text-[#FF8A80]' : 'text-gray-400'
//                 }`}
//               />
//               <input
//                 type="text"
//                 placeholder="Search software..."
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm outline-none transition-all"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* Grid Layout for Applications */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           layout
//         >
//           {filteredApplications.map((app) => (
//             <motion.div
//               key={app.id}
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Link href={`/software/${app.id}`}>
//                 <div className="group relative bg-white rounded-[24px] p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 h-[280px] flex flex-col justify-between">
//                   <div className="absolute top-5 right-5 flex gap-1.5">
//                     {app.platforms?.includes("macos") && (
//                       <div className="bg-gray-50 rounded-md p-1">
//                         <img
//                           src="https://api.iconify.design/bi:apple.svg"
//                           alt="macOS"
//                           className="w-4 h-4 opacity-60"
//                         />
//                       </div>
//                     )}
//                     {app.platforms?.includes("windows") && (
//                       <div className="bg-gray-50 rounded-md p-1">
//                         <img
//                           src="https://api.iconify.design/bi:windows.svg"
//                           alt="Windows"
//                           className="w-4 h-4 opacity-60"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex flex-col items-center flex-1">
//                     <div className="w-20 h-20 mb-6">
//                       <img
//                         src={app.icon}
//                         alt={app.name}
//                         className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
//                       />
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <h2 className="text-lg font-semibold text-gray-900 text-center mb-1">
//                         {app.name}
//                       </h2>
//                       <p className="text-sm text-gray-500 text-center line-clamp-3">
//                         {app.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {filteredApplications.length === 0 && (
//           <motion.div 
//             className="text-center py-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <p className="text-gray-500 text-lg">No software found matching your search.</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }







//version 3



// // app/software/page.tsx
// "use client";

// import { Command, Search } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { applications } from "@/data/applications";
// import { motion } from "framer-motion";

// export default function SoftwarePage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const applicationsArray = Object.values(applications);
//   const [filteredApplications, setFilteredApplications] = useState(applicationsArray);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);
//     setFilteredApplications(
//       applicationsArray.filter((app) =>
//         app.name.toLowerCase().includes(lowerCaseQuery)
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <div className="mb-16 flex items-start justify-between">
//           <div className="flex items-start gap-8">
//             <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
//               <Command className="h-10 w-10 text-white" />
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
//                 Software Shortcuts
//               </h1>
//               <p className="text-lg text-gray-600">
//                 Essential keyboard shortcuts for your favorite applications
//               </p>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <motion.div
//             className="w-96"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className={`relative group ${isFocused ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
//               }`}>
//               <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${isFocused ? 'text-blue-500' : 'text-gray-400'
//                 }`} />
//               <input
//                 type="text"
//                 placeholder="Search software..."
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm outline-none transition-all placeholder:text-gray-400
//                 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/10"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Grid Layout */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           layout
//         >
//           {filteredApplications.map((app, index) => (
//             <motion.div
//               key={app.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Link href={`/software/${app.id}`}>
//                 <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
//                   {/* Platform Icons */}
//                   <div className="absolute top-6 right-6 flex gap-2">
//                     {app.platforms?.includes("macos") && (
//                       <div className="bg-gray-50 rounded-md p-1.5 border border-gray-100">
//                         <img
//                           src="https://api.iconify.design/bi:apple.svg"
//                           alt="macOS"
//                           className="w-4 h-4 opacity-70"
//                         />
//                       </div>
//                     )}
//                     {app.platforms?.includes("windows") && (
//                       <div className="bg-gray-50 rounded-md p-1.5 border border-gray-100">
//                         <img
//                           src="https://api.iconify.design/bi:windows.svg"
//                           alt="Windows"
//                           className="w-4 h-4 opacity-70"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   {/* App Content */}
//                   <div className="flex flex-col items-center">
//                     <div className="w-20 h-20 mb-6 relative">
//                       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl transform -rotate-6 transition-transform group-hover:rotate-0 group-hover:scale-105" />
//                       <img
//                         src={app.icon}
//                         alt={app.name}
//                         className="w-full h-full object-contain relative z-10 transform transition-transform group-hover:scale-110"
//                       />
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
//                       {app.name}
//                     </h2>
//                     <p className="text-sm text-gray-500 text-center line-clamp-2">
//                       {app.description}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* No Results */}
//         {filteredApplications.length === 0 && (
//           <motion.div
//             className="text-center py-16"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
//               <Search className="w-6 h-6 text-gray-400" />
//             </div>
//             <p className="text-lg text-gray-500">No software found matching your search.</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }



// app/software/page.tsx

// "use client";

// import { Command, Search } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { applications } from "@/data/applications";
// import { motion } from "framer-motion";

// export default function SoftwarePage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const applicationsArray = Object.values(applications);
//   const [filteredApplications, setFilteredApplications] = useState(applicationsArray);
//   const [isFocused, setIsFocused] = useState(false);

//   const handleSearch = (query: string) => {
//     const lowerCaseQuery = query.toLowerCase();
//     setSearchQuery(query);
//     setFilteredApplications(
//       applicationsArray.filter((app) =>
//         app.name.toLowerCase().includes(lowerCaseQuery)
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white px-4 py-8 md:px-8">
//       {/* Increased max width */}
//       <div className="max-w-[1400px] mx-auto"> {/* Changed from max-w-7xl to max-w-[1400px] */}
//         {/* Header Section with updated spacing */}
//         <div className="flex items-center justify-between mb-20 gap-10">
//           {/* Left side - Title and Icon with more space */}
//           <div className="flex items-center gap-8">
//             <div className="w-16 h-16 bg-[#FF8A80] rounded-2xl flex items-center justify-center">
//               <Command className="h-8 w-8 text-white" />
//             </div>
//             <div>
//               <h1 className="text-[2.5rem] font-bold text-gray-900">Software Shortcuts</h1>
//               <p className="text-gray-500 text-lg">
//                 Essential keyboard shortcuts for your favorite applications
//               </p>
//             </div>
//           </div>

//           {/* Right side - Animated Search Bar */}
//           <div className="w-96">
//             <motion.div
//               className={`relative flex items-center ${isFocused ? 'ring-2 ring-[#FF8A80]' : ''
//                 }`}
//               animate={{
//                 scale: isFocused ? 1.02 : 1,
//               }}
//               transition={{ duration: 0.2 }}
//             >
//               <Search
//                 className={`absolute left-4 w-5 h-5 transition-colors ${isFocused ? 'text-[#FF8A80]' : 'text-gray-400'
//                   }`}
//               />
//               <input
//                 type="text"
//                 placeholder="Search software..."
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(false)}
//                 className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm outline-none transition-all"
//               />
//             </motion.div>
//           </div>
//         </div>

//         {/* Grid Layout for Applications */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//           layout
//         >
//           {filteredApplications.map((app) => (
//             <motion.div
//               key={app.id}
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Link href={`/software/${app.id}`}>
//                 <div className="group relative bg-white rounded-[24px] p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 h-[280px] flex flex-col justify-between">
//                   <div className="absolute top-5 right-5 flex gap-1.5">
//                     {app.platforms?.includes("macos") && (
//                       <div className="bg-gray-50 rounded-md p-1">
//                         <img
//                           src="https://api.iconify.design/bi:apple.svg"
//                           alt="macOS"
//                           className="w-4 h-4 opacity-60"
//                         />
//                       </div>
//                     )}
//                     {app.platforms?.includes("windows") && (
//                       <div className="bg-gray-50 rounded-md p-1">
//                         <img
//                           src="https://api.iconify.design/bi:windows.svg"
//                           alt="Windows"
//                           className="w-4 h-4 opacity-60"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex flex-col items-center flex-1">
//                     <div className="w-20 h-20 mb-6">
//                       <img
//                         src={app.icon}
//                         alt={app.name}
//                         className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
//                       />
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <h2 className="text-lg font-semibold text-gray-900 text-center mb-1">
//                         {app.name}
//                       </h2>
//                       <p className="text-sm text-gray-500 text-center line-clamp-3">
//                         {app.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {filteredApplications.length === 0 && (
//           <motion.div
//             className="text-center py-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <p className="text-gray-500 text-lg">No software found matching your search.</p>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }


// // app/software/page.tsx
// "use client";

// import { useState } from "react";
// import { Search, Command, X } from "lucide-react";
// import Link from "next/link";
// import { applications } from "@/data/applications";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// // Pre-compute the applications array
// const applicationsArray = Object.values(applications);

// export default function SoftwarePage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isFocused, setIsFocused] = useState(false);

//   const filteredApps = searchQuery
//     ? applicationsArray.filter(app =>
//       app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       app.description.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     : applicationsArray;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
//       {/* Header Section with Search */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 sm:mb-12">
//         {/* Title and Description */}
//         <div className="flex items-start gap-4">
//           <Command className="h-12 w-12" />
//           <div>
//             <h1 className="text-3xl font-bold">Software Shortcuts</h1>
//             <p className="text-gray-500 text-lg">
//               Essential keyboard shortcuts for your favorite applications
//             </p>
//           </div>
//         </div>

//         {/* Enhanced Search Bar */}
//         <div className="relative w-72 group">
//           <div
//             className={cn(
//               "relative flex items-center transition-all duration-300",
//               isFocused && "scale-105"
//             )}
//           >
//             <Search
//               className={cn(
//                 "absolute left-3 w-5 h-5 transition-all duration-300",
//                 isFocused ? "text-blue-500" : "text-gray-400"
//               )}
//             />
//             <input
//               type="text"
//               placeholder="Search software..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//               className={cn(
//                 "w-full pl-10 pr-4 py-2.5 border rounded-lg",
//                 "bg-white/80 backdrop-blur-sm",
//                 "transition-all duration-300 ease-in-out",
//                 "placeholder:text-gray-400 placeholder:transition-opacity",
//                 "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500",
//                 isFocused ? "shadow-lg border-blue-500" : "border-gray-200 shadow-sm",
//                 "hover:border-gray-300"
//               )}
//             />
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery("")}
//                 className={cn(
//                   "absolute right-3 p-1 rounded-full",
//                   "text-gray-400 hover:text-gray-600",
//                   "hover:bg-gray-100 transition-colors",
//                   "focus:outline-none focus:ring-2 focus:ring-blue-500/50"
//                 )}
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             )}
//           </div>

//           {/* Search Results Count */}
//           {searchQuery && (
//             <div className="absolute -bottom-6 left-0 text-sm text-gray-500 transition-opacity">
//               {filteredApps.length} result{filteredApps.length !== 1 ? 's' : ''}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredApps.length > 0 ? (
//           filteredApps.map((app) => (
//             <Link key={app.id} href={`/software/${app.id}`}>
//               <Card className="p-6 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 shrink-0">
//                     <img
//                       src={app.icon}
//                       alt={app.name}
//                       className="w-full h-full rounded object-contain"
//                       loading="eager"
//                       decoding="sync"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg truncate">{app.name}</h2>
//                     <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
//                       {app.description}
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No software found matching your search.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }






// // app/software/page.tsx


import type { Metadata } from "next";
import { SoftwareClient } from "./software-client";

// Define your production URL
const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://boostmykey.com' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Software & Apps Keyboard Shortcuts - Boost Your Productivity | Boost My Key",
  description: "Access a comprehensive collection of keyboard shortcuts for popular software to boost your productivity.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: new URL("/software", baseUrl).toString(),
  },
};

export default function SoftwarePage() {
  return <SoftwareClient />;
}