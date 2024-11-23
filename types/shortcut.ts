// export interface Shortcut {
//   id: string;
//   description: string;
//   platforms?: {
//     windows?: string[];
//     mac?: string[];
//     universal?: string[];
//   };
//   keys?: string[]; // Fallback if no platform-specific shortcuts
// }

// export interface ShortcutGroup {
//   title: string;
//   shortcuts: Shortcut[];
// }

// export interface Application {
//   id: string;
//   name: string;
//   icon: string;
//   description: string;
//   groups: ShortcutGroup[];
// }



export interface ShortcutPlatforms {
  windows?: ReadonlyArray<string>;
  mac?: ReadonlyArray<string>;
  universal?: ReadonlyArray<string>;
  linux?: ReadonlyArray<string>;
}

export interface Shortcut {
  id: string;
  keys: ReadonlyArray<string>;
  description: string;
  platforms: ShortcutPlatforms;
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
