// // app/games/[id]/page.tsx
// import { games } from "@/data/games";
// import { ShortcutGroup } from "@/components/shortcut-group";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return Object.keys(games).map((id) => ({ id }));
// }

// export default function GamePage({ params }: { params: { id: string } }) {
//   const game = games[params.id];

//   if (!game) {
//     notFound();
//     return null; // Ensure the component returns null if notFound is called
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       <div className="flex items-center gap-4 mb-8">
//         <img src={game.icon} alt={game.name} className="w-12 h-12" />
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">{game.name}</h1>
//           <p className="text-muted-foreground">{game.description}</p>
//         </div>
//       </div>

//       <div className="space-y-12">
//         {game.groups.map((group) => (
//           <ShortcutGroup key={group.title} group={group} />
//         ))}
//       </div>
//     </div>
//   );
// }



// app/games/[id]/page.tsx


// import { games } from "@/data/games";
// import { notFound } from "next/navigation";
// import GamePageClient from "./client";

// export function generateStaticParams() {
//   return Object.keys(games).map((id) => ({ id }));
// }

// export default function GamePage({ params }: { params: { id: string } }) {
//   const game = games[params.id];

//   if (!game) {
//     notFound();
//     return null; // Ensure the component returns null if notFound is called
//   }

//   return <GamePageClient game={game} />;
// }




// // app/games/[id]/page.tsx
// import { games } from "@/data/games";
// import { notFound } from "next/navigation";
// import { GamePageClient } from "./client";
// import { UnifiedSidebar } from "@/components/unified-sidebar";

// export function generateStaticParams() {
//   return Object.keys(games).map((id) => ({ id }));
// }

// export default function GamePage({ params }: { params: { id: string } }) {
//   const game = games[params.id];

//   if (!game) {
//     notFound();
//   }

//   // Generate sections from game groups
//   const sections = game.groups?.map((group: any) => ({
//     id: group.title.toLowerCase().replace(/\s+/g, "-"),
//     title: group.title,
//   })) || [];

//   return (
//     <div className="container flex gap-8">
//       <div className="flex-1">
//         <GamePageClient game={game} />
//       </div>
//       <UnifiedSidebar sections={sections} />
//     </div>
//   );
// }







// import { games } from "@/data/games";
// import { notFound } from "next/navigation";
// import { GamePageClient } from "./client";

// export const dynamic = "force-static";
// export const revalidate = false;

// // export async function generateStaticParams() {
// //   return Object.keys(games).map((key) => ({
// //     id: games[key].id,
// //   }));
// // }

// type StaticParam = {
//   id: string;
// };

// export function generateStaticParams(): StaticParam[] {
//   if (typeof games !== "object") {
//       throw new Error("browsers must be an object");
//   }

//   const gameIds = Object.keys(games);
//   console.log("Generating static params for games:", gameIds);
//   return gameIds.map((id) => ({ id }));
// }


// export default function GamePage({ params }: { params: { id: string } }) {
//   const game = games[params.id];

//   if (!game) {
//     notFound();
//   }

//   return (
//     <div className="container">
//       <GamePageClient initialData={JSON.stringify(game)} />
//     </div>
//   );
// }











import { games } from "@/data/games";
import { notFound } from "next/navigation";
import { GamePageClient } from "./client";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = false;

// Base URL configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://boostmykey.com' 
    : 'http://localhost:3000');

type GameId = keyof typeof games;
type StaticParam = {
  id: string;
};

// Generate static params for all games
export function generateStaticParams(): StaticParam[] {
  if (typeof games !== "object") {
    throw new Error("games must be an object");
  }
  const gameIds = Object.keys(games);
  console.log("Generating static params for games:", gameIds);
  return gameIds.map((id) => ({ id }));
}

// Generate metadata for each game page
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const game = games[params.id as GameId];

  if (!game) {
    return {
      title: "Game Not Found",
      description: "The requested game shortcuts could not be found.",
      metadataBase: new URL(baseUrl),
    };
  }

  return {
    metadataBase: new URL(baseUrl),
    title: `${game.shortcutpageName} Keyboard Shortcuts - Boost My Key`,
    description: `${game.metadescription}`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `${baseUrl}/games/${game.id}`,
    },
  };
}

export default function GamePage({ params }: { params: { id: string } }) {
  const game = games[params.id as GameId];

  if (!game) {
    notFound();
  }

  return (
    <div className="container">
      <GamePageClient initialData={JSON.stringify(game)} />
    </div>
  );
}