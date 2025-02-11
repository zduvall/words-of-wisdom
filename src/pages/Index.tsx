import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuoteCard, { IQuote } from '../components/QuoteCard';
import quotesData from '../data/quotes.json';

const IndexPage = () => {
  const [query, setQuery] = useState<string>('');
  const quotes: IQuote[] = quotesData;

  // Filter quotes by any field.
  const filteredQuotes = quotes.filter((q) =>
    Object.values(q).some((val) =>
      val.toLowerCase().includes(query.toLowerCase())
    )
  );

  // Sort quotes by author then source.
  const sortedQuotes = filteredQuotes.sort((a, b) => {
    const authorCompare = a.author.localeCompare(b.author);
    if (authorCompare !== 0) return authorCompare;
    return a.source.localeCompare(b.source);
  });

  return (
    <div>
      <h1 className='title'>All Quotes</h1>
      <input
        type='text'
        className='input'
        placeholder='Search by author or keyword...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {sortedQuotes.map((q, idx) => (
        <div key={idx}>
          <QuoteCard data={q} reveal={true} />
          <Link to={`/quote/${idx}`} className='button is-small is-link'>
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
