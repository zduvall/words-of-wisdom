import { useMemo, useState } from 'react';
import quotesData from '../data/quotes.json';
import QuoteCard, { IQuote } from '../components/QuoteCard';

interface ITestProps {
  shuffle: boolean;
  startingIdx?: number;
}

const Test = ({ shuffle, startingIdx = 0 }: ITestProps) => {
  const quotes: IQuote[] = quotesData;
  const [currentIndex, setCurrentIndex] = useState<number>(startingIdx);
  const [revealed, setRevealed] = useState<boolean>(false);

  const indexMap = useMemo(
    () =>
      shuffle
        ? createShuffledNumberToOriginalMap(quotes.length - 1)
        : createIdentityMap(quotes.length - 1),
    [quotes.length, shuffle]
  );

  const curQuote = quotes[indexMap.get(currentIndex) || 0];

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % quotes.length);
    setRevealed(false);
  };
  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length);
    setRevealed(false);
  };

  return (
    <div className='container mx-auto p-4'>
      {/* Container and padding */}
      <h1 className='text-3xl font-bold mb-4'>Test Your Memory</h1>{' '}
      {/* Title */}
      {curQuote && (
        <QuoteCard
          data={curQuote}
          reveal={revealed}
          onToggle={() => setRevealed((prev) => !prev)}
        />
      )}
      <div className='flex justify-center mt-4'>
        {/* Button container */}
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2' // Previous button
          onClick={goPrev}
        >
          Previous
        </button>
        <span className='bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded'>
          {/* Quote count */}
          Quote {currentIndex + 1} of {quotes.length}
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

// =============================================================================
// Helpers
// =============================================================================
function createShuffledUniqueNumbers(max: number): number[] {
  if (max < 0) {
    return [];
  }

  const allNumbers: number[] = Array.from({ length: max + 1 }, (_, i) => i);

  for (let i = allNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
  }

  return allNumbers;
}

function createShuffledNumberToOriginalMap(max: number): Map<number, number> {
  if (max < 0) {
    return new Map();
  }

  const originalIndices: number[] = Array.from(
    { length: max + 1 },
    (_, i) => i
  ); // Renamed to indices as they are used as indices
  const shuffledIndices: number[] = createShuffledUniqueNumbers(max); // Renamed to indices as they are used as indices

  const shuffledIndexToOriginalIndexMap: Map<number, number> = new Map(); // More descriptive map name

  // Reversed mapping: shuffled index (key) -> original index (value)
  for (let i = 0; i <= max; i++) {
    shuffledIndexToOriginalIndexMap.set(shuffledIndices[i], originalIndices[i]);
  }

  return shuffledIndexToOriginalIndexMap;
}

function createIdentityMap(n: number): Map<number, number> {
  if (n < 0) {
    return new Map(); // Or handle negative n as needed, e.g., throw error.
  }

  const identityMap: Map<number, number> = new Map();

  for (let i = 0; i <= n; i++) {
    identityMap.set(i, i);
  }

  return identityMap;
}
