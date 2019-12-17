import parse from 'date-fns/parse';
import format from 'date-fns/format';

export default ({ title, date, author }) => (
  <>
    <h1 id="post-title">{title}</h1>
    <desc className="post-title-details">
      By {author} on{' '}
      <time dateTime={format(parse(date), 'YYYY-MM-DD')}>
        {format(parse(date), 'Do MMMM YYYY')}
      </time>
    </desc>
  </>
);
