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
    <div className='container mx-auto p-4'>
      {' '}
      {/* Container and padding */}
      <h1 className='text-3xl font-bold mb-4'>Test Your Memory</h1>{' '}
      {/* Title */}
      {currentQuote && (
        <QuoteCard
          data={currentQuote}
          reveal={revealed}
          onToggle={() => setRevealed((prev) => !prev)}
        />
      )}
      <div className='flex justify-center mt-4'>
        {' '}
        {/* Button container */}
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2' // Previous button
          onClick={goPrev}
        >
          Previous
        </button>
        <span className='bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded'>
          {' '}
          {/* Quote count */}
          Quote {currentIndex + 1} of {shuffled.length}
        </span>
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2' // Next button
          onClick={goNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
