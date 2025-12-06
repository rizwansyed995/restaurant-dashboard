"use client";

import { createContext, useContext, useState } from "react";

type SearchField = "id" | "table" | "platform" | "items" | "all";

interface SearchFilterContextType {
  searchField: SearchField;
  setSearchField: (field: SearchField) => void;
}

const SearchFilterContext = createContext<SearchFilterContextType | null>(null);

export function SearchFilterProvider({ children }: { children: React.ReactNode }) {
  const [searchField, setSearchField] = useState<SearchField>("all");

  return (
    <SearchFilterContext.Provider value={{ searchField, setSearchField }}>
      {children}
    </SearchFilterContext.Provider>
  );
}

export function useSearchFilter() {
  const ctx = useContext(SearchFilterContext);
  if (!ctx) throw new Error("useSearchFilter must be inside SearchFilterProvider");
  return ctx;
}
