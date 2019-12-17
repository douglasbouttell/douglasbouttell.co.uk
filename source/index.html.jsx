import LayoutMain from './layout-main.jsx';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export default (props) => (
  <LayoutMain {...props}>
    <ul className="posts">
      {props.pages
        .filter((page) => page.path.startsWith('/posts/'))
        .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
        .map((page) => (
          <li key={page.path}>
            <a href={`${page.path}.html`} className="title">
              {page.meta.title}
            </a>
            <br />
            <desc>
              {page.meta.author} posted on{' '}
              <time dateTime={format(parseISO(page.meta.date), 'yyyy-MM-dd')}>
                {format(parseISO(page.meta.date), 'Do MMMM yyyy')}
              </time>
            </desc>
          </li>
        ))}
    </ul>
  </LayoutMain>
);
