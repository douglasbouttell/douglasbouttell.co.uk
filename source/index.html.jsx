import LayoutMain from "./layout-main.jsx";
import format from "date-fns/format";
import parse from "date-fns/parse";

export default (props) => <LayoutMain {...props}>
  <ul className="posts">
    {props.pages
    .filter(page => page.path.startsWith("/posts/"))
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date))
    .map(page => (
      <li key={page.path}>
        <a href={`${page.path}.html`}>{page.meta.title}</a>
        <desc>
          {page.meta.author}
          {' '}posted on{' '}
          {format(parse(page.meta.date), "Do MMMM YYYY")}
        </desc>
      </li>
    ))}
  </ul>
</LayoutMain>