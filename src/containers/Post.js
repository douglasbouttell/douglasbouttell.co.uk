import * as React from 'react'
import {SiteData, RouteData, Head} from 'react-static'
import convert from 'htmr'
import moment from "moment";
//
import "./Post.css"
//

const Title = ({title, author, date}) => {
  return <React.Fragment>
    <h1 className="post-title">{title}</h1>
    <p className="post-title-details">
      by {author} {'\u2014'} posted <time dateTime={date}>{moment(date).format('LL')}</time>
    </p>
  </React.Fragment>
}

const Post = (props) => {
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
        <article>
          <Title {...meta}/>
          {convert(html)}
        </article>
      </div>
    </React.Fragment>
  );
};

export default () =>
  <RouteData render={routeData =>
    <SiteData render={siteData =>
      <Post {...{...routeData, siteData}} />
    }/>
  }/>