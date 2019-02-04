import * as React from 'react'
import moment from "moment";
import {SiteData, RouteData, Head, Link} from 'react-static'
import convert from 'htmr'
//
import './Index.css'
//

const RecentPosts = ({posts, limit = 5}) => {
  const getTime = post => new Date(post.meta.date).getTime();
  const recent_posts = posts
  .sort((a, b) => getTime(b) - getTime(a))
  .slice(0, limit);

  return <aside>
    <h2>Recent Posts</h2>
    <ul className="recent-posts">
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
        {convert(html)}
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