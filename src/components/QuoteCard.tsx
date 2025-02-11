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
      className='box'
      style={{ cursor: onToggle ? 'pointer' : 'default' }}
      onClick={onToggle}
    >
      {reveal ? (
        <>
          <p className='title is-4'>“{data.quote}”</p>
          <p className='subtitle is-6'>— {data.author}</p>
          <p>
            <em>{data.source}</em>
          </p>
          {data.hint && <p className='is-size-7'>Hint: {data.hint}</p>}
        </>
      ) : (
        <p className='title is-4'>{data.hint}</p>
      )}
    </div>
  );
};

export default QuoteCard;
