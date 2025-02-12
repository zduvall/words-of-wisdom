import {
  SORT_ORDER_OPTIONS,
  TSortOrder,
  sortQuotes as sortedQuotes,
} from '../data/quotes';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface IAppContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: TSortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<TSortOrder>>;
  sortedFilteredQuotes: ReturnType<typeof sortedQuotes>;
}

const AppContext = createContext<IAppContext>({
  darkMode: true,
  setDarkMode: () => {},
  query: '',
  setQuery: () => {},
  sortOrder: 'newest',
  setSortOrder: () => {},
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
    (() => {
      // get from local storage and default to true if not found
      const darkModeStore = localStorage.getItem('darkMode');
      return ['true', 'false'].includes(darkModeStore ?? '')
        ? darkModeStore === 'true'
        : true;
    })()
  );

  useEffect(() => {
    // I have dark mode as the default, that's why light-mode is the class being toggled.
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Quotes
  const [query, setQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<TSortOrder>(
    (() => {
      // get from local storage and default to 'newest' if not found
      const sortOrderStore = localStorage.getItem('sortOrder') as TSortOrder;
      return SORT_ORDER_OPTIONS.includes(sortOrderStore)
        ? sortOrderStore
        : 'alphabetical';
    })()
  );

  useEffect(() => {
    localStorage.setItem('sortOrder', sortOrder);
  }, [sortOrder]);

  const sortedFilteredQuotes = sortedQuotes(sortOrder).filter((q) =>
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
        sortOrder,
        setSortOrder,
        sortedFilteredQuotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
