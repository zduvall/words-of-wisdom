import { createContext, useContext, useState } from 'react';

const QuotesContext = createContext({});

export const useQuotesContext = () => useContext(QuotesContext);

interface IProps {
  children: React.ReactNode;
}

export default function AppContextProvider({ children }: IProps) {
  return <QuotesContext.Provider value={{}}>{children}</QuotesContext.Provider>;
}
