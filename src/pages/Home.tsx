import { useState } from 'react';
import QuoteCard, { IQuote } from '../components/QuoteCard';
import quotesData from '../data/quotes.json';

const Home = () => {
  const quotes: IQuote[] = quotesData;
  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState<number>(getRandomIndex());

  const newRandomQuote = () => {
    setIndex(getRandomIndex());
  };

  return (
    <div className='container mx-auto p-4'>
      {' '}
      {/* Container and padding */}
      <h1 className='text-3xl font-bold mb-4'>
        Welcome to Words of Wisdom
      </h1>{' '}
      {/* Title styling */}
      <QuoteCard data={quotes[index]} reveal={true} />
      <button
        className='accent-background-hover text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer' // Button styling
        onClick={newRandomQuote}
      >
        New Random Quote
      </button>
    </div>
  );
};

export default Home;
