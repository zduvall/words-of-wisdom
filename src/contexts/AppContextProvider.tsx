import { SortOrder, sortQuotes as sortedQuotes } from '../data/quotes';
import React, { createContext, useContext, useState } from 'react';

interface IAppContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  sort: SortOrder;
  setSort: React.Dispatch<React.SetStateAction<SortOrder>>;
  sortedFilteredQuotes: ReturnType<typeof sortedQuotes>;
}

const AppContext = createContext<IAppContext>({
  darkMode: true,
  setDarkMode: () => {},
  query: '',
  setQuery: () => {},
  sort: 'newest',
  setSort: () => {},
  sortedFilteredQuotes: [],
});

export const useAppContext = () => useContext(AppContext);

interface IProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: IProps) {
  // Dark mode state: load from localStorage if available.
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<SortOrder>('newest');

  const sortedFilteredQuotes = sortedQuotes(sort).filter((q) =>
    Object.values(q).some((val) =>
      val.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        query,
        setQuery,
        sort,
        setSort,
        sortedFilteredQuotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
