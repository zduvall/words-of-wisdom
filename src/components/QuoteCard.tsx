export interface IQuote {
  quote: string;
  author: string;
  source: string;
  hint: string;
}

interface IQuoteCardProps {
  data: IQuote;
  reveal?: boolean;
  onToggle?: () => void;
}

const QuoteCard = ({ data, reveal = true, onToggle }: IQuoteCardProps) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition duration-300 ${
        onToggle ? 'cursor-pointer hover:bg-gray-100' : 'cursor-default'
      }`}
      onClick={onToggle}
    >
      {reveal ? (
        <>
          <p className='text-lg mb-2'>“{data.quote}”</p>
          <div className='flex gap-2'>
            <p className='text-base italic mb-4'>— {data.author},</p>
            <p className='text-base italic mb-2'>{data.source}</p>
          </div>
          {data.hint && (
            <p className='text-sm text-gray-500'>Hint: {data.hint}</p>
          )}
        </>
      ) : (
        <p className='text-2xl font-bold'>{data.hint}</p>
      )}
    </div>
  );
};

export default QuoteCard;
