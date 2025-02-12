import { TSortOrder, sortQuotes as sortedQuotes } from '../data/quotes';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IAppContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  sort: TSortOrder;
  setSort: React.Dispatch<React.SetStateAction<TSortOrder>>;
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
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Dark Mode
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true' // load from localStorage if available.
  );

  useEffect(() => {
    // I have dark mode as the default, that's why light-mode is the class being toggled.
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Quotes
  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<TSortOrder>('newest');

  const sortedFilteredQuotes = sortedQuotes(sort).filter((q) =>
    Object.values(q).some((val) => {
      // skip checking values in Quotes that are not strings, such as originalIndex.
      if (typeof val !== 'string') return false;
      return val.toLowerCase().includes(query.toLowerCase());
    })
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
