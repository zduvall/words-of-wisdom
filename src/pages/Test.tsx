import { useEffect, useState } from 'react';
import quotesData from '../data/quotes.json';
import QuoteCard, { IQuote } from '../components/QuoteCard';

const shuffleArray = <T extends unknown>(array: T[]): T[] => {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Test = () => {
  const quotes: IQuote[] = quotesData;
  const [shuffled, setShuffled] = useState<IQuote[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);

  useEffect(() => {
    setShuffled(shuffleArray(quotes));
    setCurrentIndex(0);
    setRevealed(false);
  }, [quotes]);

  const currentQuote = shuffled[currentIndex];

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % shuffled.length);
    setRevealed(false);
  };
  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + shuffled.length) % shuffled.length);
    setRevealed(false);
  };

  return (
    <div>
      <h1 className='title'>Test Your Memory</h1>
      {currentQuote && (
        <div onClick={() => setRevealed(!revealed)}>
          <QuoteCard data={currentQuote} reveal={revealed} />
        </div>
      )}
      <div className='buttons has-addons is-centered'>
        <button className='button' onClick={goPrev}>
          Previous
        </button>
        <span className='button is-static'>
          Quote {currentIndex + 1} of {shuffled.length}
        </span>
        <button className='button' onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
