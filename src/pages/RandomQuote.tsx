import { useState } from 'react';
import QuoteCard from '../components/QuoteCard';
import quotesData, { IQuote } from '../data/quotes';

const RandomQuote = () => {
  const quotes: IQuote[] = quotesData;
  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState<number>(getRandomIndex());

  const newRandomQuote = () => {
    setIndex(getRandomIndex());
  };

  return (
    <div className='page-container'>
      <h1 className='page-title'>Random Quote</h1>
      <button
        className='accent-background-hover primary-button'
        onClick={newRandomQuote}
      >
        New Random Quote
      </button>
      <QuoteCard data={quotes[index]} reveal={true} />
    </div>
  );
};

export default RandomQuote;
