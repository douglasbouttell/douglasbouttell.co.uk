import * as React from "react";
import moment from "moment";
import { SiteData, RouteData, Head, Link } from "react-static";
import convert from "htmr";
//
import "./AllPosts.css";
//

const AllPostsList = ({ posts }) => {
  const getTime = post => new Date(post.meta.date).getTime();
  const sorted_posts = posts.sort((a, b) => getTime(b) - getTime(a));

  return (
    <aside>
      <h2>All Posts</h2>
      <ul className="all-posts">
        {sorted_posts.map(post => (
          <li key={post.path}>
            <Link to={post.path}>{post.meta.title}</Link>
            {" \u2014 "}
            <time dateTime={post.meta.date}>
              {moment(post.meta.date).format("LL")}
            </time>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const AllPosts = props => {
  const { meta, siteData, html } = props;
  return (
    <React.Fragment>
      <Head>
        {meta.title ? (
          <title>
            {meta.title} - {siteData.title}
          </title>
        ) : (
          <title>{siteData.title}</title>
        )}
      </Head>
      <div className="container">
        <AllPostsList posts={meta.posts} />
      </div>
    </React.Fragment>
  );
};

export default () => (
  <RouteData
    render={routeData => (
      <SiteData
        render={siteData => <AllPosts {...{ ...routeData, siteData }} />}
      />
    )}
  />
);
