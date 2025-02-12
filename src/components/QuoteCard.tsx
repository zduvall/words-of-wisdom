import { IQuote } from 'data/quotes';

interface IQuoteCardProps {
  data: IQuote;
  reveal?: boolean;
  onToggle?: () => void;
}

const QuoteCard = ({ data, reveal = true, onToggle }: IQuoteCardProps) => {
  const staticClassNames =
    'p-6 rounded-lg shadow-md transition duration-300 secondary-background';
  const classNames = `${staticClassNames} ${
    onToggle
      ? 'cursor-pointer hover-secondary-vs-tertiary-background'
      : 'cursor-default'
  }`;
  return (
    <div className={classNames} onClick={onToggle}>
      {reveal ? (
        <>
          <p className='text-lg mb-2 whitespace-pre-line'>“{data.quote}”</p>
          <div className='flex gap-2'>
            <p className='text-base italic mb-4'>
              — {data.author}, {data.source}
            </p>
          </div>
          {data.hint && (
            <p className='text-sm text-gray-500'>Hint: {data.hint}</p>
          )}
        </>
      ) : (
        <p className='text-lg'>{data.hint}</p>
      )}
    </div>
  );
};

export default QuoteCard;
