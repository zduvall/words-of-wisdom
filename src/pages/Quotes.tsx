import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteCard from '../components/QuoteCard';
import quotesData, { SortOrder, sortQuotes } from '../data/quotes';

const Quotes = () => {
  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<SortOrder>('newest');

  // Filter quotes by any field.
  const filteredQuotes = quotesData.filter((q) =>
    Object.values(q).some((val) =>
      val.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>All Quotes</h1> {/* Title */}
      <input
        type='text'
        className='border border-gray-300 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' // Input
        placeholder='Search by author or keyword...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredQuotes.map((q, idx) => (
        <div key={idx} className='mb-4'>
          {/* Margin between quote cards */}
          <QuoteCard data={q} reveal={true} />
          <Link
            to={`/quotes/${idx}`}
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
