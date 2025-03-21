import { Link } from 'react-router-dom';
import QuoteCard from '../components/QuoteCard';
import { useAppContext } from 'contexts/AppContextProvider';
import { TSortOrder } from 'data/quotes';

const Quotes = () => {
  const { query, setQuery, sortOrder, setSortOrder, sortedFilteredQuotes } =
    useAppContext();

  return (
    <div className='page-container'>
      {/* Title */}
      <h1 className='page-title'>All Quotes</h1>

      <div className='flex flex-col md:flex-row md:justify-between gap-4'>
        {/* Search Input */}
        <input
          type='text'
          className='input-default w-full' // Input
          placeholder='Search by author or keyword...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Sort Dropdown */}
        <div className='flex flex-col md:flex-row md:items-center'>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as TSortOrder)}
            className='input-default'
          >
            <option value='alphabetical'>Alphabetical (author)</option>
            <option value='newest'>Added (Newest)</option>
            <option value='oldest'>Added (Oldest)</option>
            <option value='random'>Random</option>
          </select>
        </div>
      </div>

      {/* Quote List */}
      {sortedFilteredQuotes.map((q) => (
        <div key={q.originalIndex} className='flex flex-col gap-2'>
          <QuoteCard data={q} reveal={true} />
          <Link
            to={`/quotes/${q.originalIndex}`}
            className='primary-button' // Link button
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
