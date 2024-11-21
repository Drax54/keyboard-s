export interface Shortcut {
  id: string;
  description: string;
  platforms?: {
    windows?: string[];
    mac?: string[];
    universal?: string[];
  };
  keys?: string[]; // Fallback if no platform-specific shortcuts
}

export interface ShortcutGroup {
  title: string;
  shortcuts: Shortcut[];
}

export interface Application {
  id: string;
  name: string;
  icon: string;
  description: string;
  groups: ShortcutGroup[];
}