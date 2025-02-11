import { useParams } from 'react-router-dom';
import QuoteCard, { IQuote } from '../components/QuoteCard';
import quotesData from '../data/quotes.json';

const Quote = () => {
  const { id } = useParams<{ id: string }>();
  const index = Number(id);
  const quotes: IQuote[] = quotesData;

  if (isNaN(index) || index < 0 || index >= quotes.length) {
    return <p className='text-xl text-center mt-8'>Quote not found.</p>; // Styled "not found" message
  }

  return (
    <div className='container mx-auto p-4'>
      {' '}
      {/* Container and padding */}
      <h1 className='text-3xl font-bold mb-4'>Quote Detail</h1> {/* Title */}
      <QuoteCard data={quotes[index]} reveal={true} />
    </div>
  );
};

export default Quote;
