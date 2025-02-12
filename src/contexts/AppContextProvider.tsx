import { SortOrder, sortQuotes as sortedQuotes } from '../data/quotes';
import { createContext, useContext, useState } from 'react';

const QuotesContext = createContext({});

export const useQuotesContext = () => useContext(QuotesContext);

interface IProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: IProps) {
  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<SortOrder>('newest');

  const sortedFilteredQuotes = sortedQuotes(sort).filter((q) =>
    Object.values(q).some((val) =>
      val.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <QuotesContext.Provider
      value={{
        query,
        setQuery,
        sort,
        setSort,
        sortedFilteredQuotes,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
}
