import { useCallback, useEffect, useMemo, useState } from 'react';
import quotesData from '../data/quotes.json';
import QuoteCard, { IQuote } from '../components/QuoteCard';
import { useLocation, useNavigate } from 'react-router-dom';

interface ITestProps {
  shuffle?: boolean;
  testMode?: boolean;
}

const Quote = ({ shuffle = false, testMode = false }: ITestProps) => {
  const quotes: IQuote[] = quotesData;
  const {
    index: currentIndex,
    incrementIndex,
    decrementIndex,
  } = useIndexFromPath({ initialIndex: 0, length: quotes.length });

  const [revealed, setRevealed] = useState<boolean>(!testMode);

  useEffect(() => {
    setRevealed(!testMode);
  }, [testMode]);

  const indexMap = useMemo(
    () =>
      shuffle
        ? createShuffledNumberToOriginalMap(quotes.length - 1)
        : createIdentityMap(quotes.length - 1),
    [quotes.length, shuffle]
  );

  const curQuote = quotes[indexMap.get(currentIndex) || 0];

  const goNext = () => {
    incrementIndex();
    setRevealed(!testMode);
  };
  const goPrev = () => {
    decrementIndex();
    setRevealed(!testMode);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Test Your Memory</h1>{' '}
      {curQuote && (
        <QuoteCard
          data={curQuote}
          reveal={revealed}
          onToggle={testMode ? () => setRevealed((prev) => !prev) : undefined}
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

export default Quote;

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

// =============================================================================
// hook
// =============================================================================

interface UseIndexFromPathProps {
  initialIndex?: number;
  length?: number; // Add length prop
}

interface UseIndexFromPathResult {
  index: number;
  incrementIndex: () => void;
  decrementIndex: () => void;
}

function useIndexFromPath({
  initialIndex = 0,
  length,
}: UseIndexFromPathProps = {}): UseIndexFromPathResult {
  const location = useLocation();
  const navigate = useNavigate();

  const getIndexFromPath = useCallback((): number => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const parsedIndex = parseInt(lastSegment, 10);
    return isNaN(parsedIndex) ? initialIndex : parsedIndex;
  }, [initialIndex, location.pathname]);

  const currentIndex = getIndexFromPath();

  const updateIndex = useCallback(
    (newIndex: number) => {
      const pathSegments = location.pathname.split('/');
      // Remove the last segment if it's likely to be the old index
      if (!isNaN(parseInt(pathSegments[pathSegments.length - 1], 10))) {
        pathSegments.pop();
      }
      const basePath = pathSegments.join('/');
      const newPath = `${basePath}/${newIndex}`;
      navigate(newPath, { replace: true });
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    // set default index if last path segment is not a number
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    console.log('lastSegment', lastSegment);
    if (isNaN(parseInt(lastSegment, 10))) {
      updateIndex(initialIndex);
    }
  }, [initialIndex, location.pathname, updateIndex]);

  const incrementIndex = useCallback(() => {
    let nextIndex = currentIndex + 1;
    if (length !== undefined && nextIndex >= length) {
      nextIndex = 0; // Loop back to 0 if length is provided and index exceeds length
    }
    updateIndex(nextIndex);
  }, [currentIndex, length, updateIndex]); // Add length as dependency

  const decrementIndex = useCallback(() => {
    updateIndex(Math.max(0, currentIndex - 1));
  }, [currentIndex, updateIndex]);

  return {
    index: currentIndex,
    incrementIndex,
    decrementIndex,
  };
}
