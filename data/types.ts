
// data/types.ts


// export interface BaseItem {
//     id: string;
//     name: string;
//     icon: string;
//     description: string;
//     featured?: boolean;
//     platforms?: ReadonlyArray<string>;
//     groups?: ReadonlyArray<{
//       title: string;
//       shortcuts: ReadonlyArray<{
//         id: string;
//         description: string;
//         keys: ReadonlyArray<string>;
//         platforms?: {
//           windows?: ReadonlyArray<string>;
//           mac?: ReadonlyArray<string>;
//         };
//       }>;
//     }>;
//   }

//   export interface CategoryCardProps {
//     title: string;
//     items: ReadonlyArray<BaseItem>;
//     baseUrl: string;
//   }



// data/types.ts
export interface CategoryItem {
  id: string;
  name: string;
  shortcutpageName: string;
  metadescription: string;
  icon: string;
  description: string;
  officialURL?: string; // Marked as optional
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
        linux?: ReadonlyArray<string>; // Add the 'linux' property
        universal?: ReadonlyArray<string>; // Include 'universal' if relevant
      };
    }>;
  }>;
}

// Define a new type for the entire data structure
export type CategoryItems = {
  [key: string]: CategoryItem; // Object with unique keys mapping to CategoryItem
};


export interface CategoryCardProps {
  title: string;
  items: ReadonlyArray<CategoryItem>;
  baseUrl: string;
}


export interface ShortcutPlatforms {
  windows?: ReadonlyArray<string> | undefined; // Explicitly allow undefined
  mac?: ReadonlyArray<string> | undefined; // Explicitly allow undefined
  universal?: ReadonlyArray<string> | undefined;
  linux?: ReadonlyArray<string> | undefined; // Add the 'linux' property
}


export interface Shortcut {
  id: string;
  description: string;
  keys: ReadonlyArray<string>;
  platforms?: ShortcutPlatforms;
}

export interface ShortcutGroup {
  title: string;
  shortcuts: ReadonlyArray<Shortcut>;
}


export interface Application {
  id: string;
  name: string;
  icon: string;
  description: string;
  officialURL: string;
  platforms: ReadonlyArray<string>;
  featured?: boolean;
  groups: ReadonlyArray<ShortcutGroup>;
}

// Type assertion helper
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends (infer U)[]
    ? ReadonlyArray<DeepReadonly<U>>
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};


export interface ShortcutCardProps {
  key: string; // The unique key for the shortcut
  shortcut: Shortcut; // Refers to the Shortcut interface already defined
  platform: "windows" | "mac"; // The platform type
  setPlatform: (platform: "windows" | "mac") => void; // A function to change the platform
  isWindowsAvailable: boolean; // Indicates if Windows is available
  isMacAvailable: boolean; // Indicates if Mac is available
}






export interface CategoryItem2 {
  id: string;
  name: string;
  shortcutpageName: string;
  metadescription: string;
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
        linux?: ReadonlyArray<string>; // Add the 'linux' property
        universal?: ReadonlyArray<string>; // Include 'universal' if relevant
      };
    }>;
  }>;
}

// Define a new type for the entire data structure
export type CategoryItems2 = {
  [key: string]: CategoryItem2; // Object with unique keys mapping to CategoryItem
};
