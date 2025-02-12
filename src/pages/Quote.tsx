import { useCallback, useEffect, useState } from 'react';
import QuoteCard from '../components/QuoteCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from 'contexts/AppContextProvider';

interface ITestProps {
  shuffle?: boolean;
  testMode?: boolean;
}

const Quote = ({ testMode = false }: ITestProps) => {
  const { sortedFilteredQuotes } = useAppContext();

  const {
    goNext: goNext_,
    goPrev: goPrev_,
    quoteToShow,
    currSortedFilteredIndex,
  } = useIndexFromPath();

  const [revealed, setRevealed] = useState<boolean>(!testMode);

  useEffect(() => {
    // needed for when switching directly from a single quote view to test mode
    setRevealed(!testMode);
  }, [testMode]);

  const goNext = () => {
    goNext_();
    setRevealed(!testMode);
  };
  const goPrev = () => {
    goPrev_();
    setRevealed(!testMode);
  };

  const title = testMode ? 'Test Your Memory' : 'Quote';

  return (
    <div className='container mx-auto p-4 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      {quoteToShow && (
        <QuoteCard
          data={quoteToShow}
          reveal={revealed}
          onToggle={testMode ? () => setRevealed((prev) => !prev) : undefined}
        />
      )}
      <div className='flex justify-center'>
        {/* Button container */}
        <button
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2' // Previous button
          onClick={goPrev}
        >
          Previous
        </button>
        <span className='bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded'>
          {/* Quote count */}
          Quote {currSortedFilteredIndex + 1} of {sortedFilteredQuotes.length}
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

function useIndexFromPath() {
  const { sortedFilteredQuotes } = useAppContext();

  const navigate = useNavigate();
  const location = useLocation();

  const defaultIndex = sortedFilteredQuotes[0].originalIndex;

  const getIndexFromPath = (): number => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const parsedIndex = parseInt(lastSegment, 10);
    return isNaN(parsedIndex) ? defaultIndex : parsedIndex;
  };

  const currOriginalIndex = getIndexFromPath();

  const currSortedFilteredIndex = sortedFilteredQuotes.findIndex(
    (q) => q.originalIndex === currOriginalIndex
  );

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

    if (isNaN(parseInt(lastSegment, 10))) {
      updateIndex(defaultIndex);
    }
  }, [defaultIndex, location.pathname, updateIndex]);

  const goNext = () => {
    const nextIndex =
      currSortedFilteredIndex === sortedFilteredQuotes.length - 1
        ? 0
        : currSortedFilteredIndex + 1;
    updateIndex(sortedFilteredQuotes[nextIndex].originalIndex);
  };
  const goPrev = () => {
    const prevIndex =
      currSortedFilteredIndex === 0
        ? sortedFilteredQuotes.length - 1
        : currSortedFilteredIndex - 1;
    updateIndex(sortedFilteredQuotes[prevIndex].originalIndex);
  };

  return {
    goNext,
    goPrev,
    quoteToShow: sortedFilteredQuotes[currSortedFilteredIndex],
    currSortedFilteredIndex,
  };
}
