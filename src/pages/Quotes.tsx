import { Link } from 'react-router-dom';
import QuoteCard from '../components/QuoteCard';
import { useAppContext } from 'contexts/AppContextProvider';

const Quotes = () => {
  const { query, setQuery, sort, setSort, sortedFilteredQuotes } =
    useAppContext();

  return (
    <div className='container mx-auto p-4'>
      {/* Title */}
      <h1 className='text-3xl font-bold mb-4'>All Quotes</h1>

      {/* Search Input */}
      <input
        type='text'
        className='input-default mb-4 w-full' // Input
        placeholder='Search by author or keyword...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Sort Dropdown */}
      <div className='flex flex-col md:flex-row md:items-center mb-4'>
        <label
          htmlFor='sort'
          className='mb-2 md:mb-0 md:mr-2 text-sm font-medium'
        >
          Sort by:
        </label>
        <select
          id='sort'
          value={sort}
          onChange={(e) =>
            setSort(
              e.target.value as 'newest' | 'alphabetical' | 'oldest' | 'random'
            )
          }
          className='input-default'
        >
          <option value='newest'>Newest</option>
          <option value='alphabetical'>Alphabetical</option>
          <option value='oldest'>Oldest</option>
          <option value='random'>Random</option>
        </select>
      </div>

      {/* Quote List */}
      {sortedFilteredQuotes.map((q) => (
        <div key={q.originalIndex} className='mb-4'>
          <QuoteCard data={q} reveal={true} />
          <Link
            to={`/quotes/${q.originalIndex}`}
            className='accent-background-hover text-white font-bold py-2 px-4 rounded text-sm mt-2 inline-block' // Link button
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
