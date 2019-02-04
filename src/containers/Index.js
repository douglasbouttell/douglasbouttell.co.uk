import * as React from 'react'
import moment from "moment";
import {SiteData, RouteData, Head, Link} from 'react-static'
import convert from 'htmr'
//
import './Index.css'
//

const getTime = post => new Date(post.meta.date).getTime();
const byDate = (a, b) => getTime(b) - getTime(a);

const SlugScraperHOC = (regex, title) => ({posts}) => {
  const id = title.toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/ +/g, '-');

  const slug = x => x.meta.slug;
  const filtered_posts = posts
    .filter(post => regex.test(slug(post)))
    .sort(byDate);

  return filtered_posts && (<aside>
    <h3>{title}</h3>
    <ul id={`${id}-posts`} className="posts">
      {filtered_posts.map(post =>
        <li key={post.path}>
          <Link to={post.path}>{post.meta.title}</Link>
        </li>)}
    </ul>
  </aside>)
};

const SoftDevShouldKnowSlug = SlugScraperHOC(
  /^soft-dev-should-know-.*/,
  'Software Developers Should Know'
);

const RecentPosts = ({posts, limit = 5}) => {
  const recent_posts = posts.sort(byDate).slice(0, limit);

  return <aside>
    <h3>Recent Posts</h3>
    <ul id="recent-posts" className="posts">
      {recent_posts.map(post =>
        <li key={post.path}>
          <Link to={post.path}>{post.meta.title}</Link>
          {' \u2014 '}
          <time dateTime={post.meta.date}>{moment(post.meta.date).format('LL')}</time>
        </li>)}
    </ul>
  </aside>;
}

const Index = (props) => {
  const {meta, siteData, html} = props;
  return (
    <React.Fragment>
      <Head>
        {meta.title
          ? <title>{meta.title} - {siteData.title}</title>
          : <title>{siteData.title}</title>
        }
      </Head>
      <div className="container">
        <section id={"index-content"}>
          {convert(html)}
        </section>
        <SoftDevShouldKnowSlug posts={meta.posts}/>
        <RecentPosts posts={meta.posts}/>
      </div>
    </React.Fragment>
  );
};

export default () =>
  <RouteData render={routeData =>
    <SiteData render={siteData =>
      <Index {...{...routeData, siteData}} />
    }/>
  }/>