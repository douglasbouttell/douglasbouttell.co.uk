import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export default ({ title, date, author }) => (
  <>
    <h1 id="post-title">{title}</h1>
    <desc className="post-title-details">
      By {author} on{' '}
      <time dateTime={format(parseISO(date), 'yyyy-MM-dd')}>
        {format(parseISO(date), 'do MMMM yyyy')}
      </time>
    </desc>
  </>
);
