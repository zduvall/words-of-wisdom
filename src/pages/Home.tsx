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
    <div>
      <h1 className='title'>Welcome to Words of Wisdom</h1>
      <QuoteCard data={quotes[index]} reveal={true} />
      <button className='button is-link' onClick={newRandomQuote}>
        New Random Quote
      </button>
    </div>
  );
};

export default Home;
