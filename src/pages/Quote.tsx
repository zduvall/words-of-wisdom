import { useParams } from 'react-router-dom';
import QuoteCard, { IQuote } from '../components/QuoteCard';
import quotesData from '../data/quotes.json';

const Quote = () => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id);
  const quotes: IQuote[] = quotesData;

  if (isNaN(index) || index < 0 || index >= quotes.length) {
    return <p>Quote not found.</p>;
  }

  return (
    <div>
      <h1 className='title'>Quote Detail</h1>
      <QuoteCard data={quotes[index]} reveal={true} />
    </div>
  );
};

export default Quote;
