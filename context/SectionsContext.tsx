// context/SectionsContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

interface Section {
  id: string;
  title: string;
}

interface SectionsContextType {
  sections: Section[];
  setSections: React.Dispatch<React.SetStateAction<Section[]>>;
}

const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

export const SectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [sections, setSections] = useState<Section[]>([]);
  return (
    <SectionsContext.Provider value={{ sections, setSections }}>
      {children}
    </SectionsContext.Provider>
  );
};

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (!context) {
    throw new Error("useSections must be used within a SectionsProvider");
  }
  return context;
};
