// data/types.ts


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