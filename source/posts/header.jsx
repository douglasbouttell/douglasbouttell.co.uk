import parse from "date-fns/parse";
import format from "date-fns/format";

export default ({title, date, author}) => (
  <React.Fragment>
  <h1 id="post-title">{title}</h1>
    <div className="post-title-details">By {author} on {format(parse(date), "Do MMMM YYYY")}</div>
  </React.Fragment>
)