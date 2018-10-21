import * as React from 'react'
import {SiteData, RouteData, Head} from 'react-static'
import convert from 'htmr'

const RenderMarkdown = (props) => {
  const {meta, siteData, html} = props;
  return (
    <React.Fragment>
      <Head>
        {meta.title
          ? <title>{meta.title} - {siteData.title}</title>
          : <title>{siteData.title}</title>
        }
      </Head>
      <div className="container">{convert(html)}</div>
    </React.Fragment>
  );
};

export default () =>
  <RouteData render={routeData =>
    <SiteData render={siteData =>
      <RenderMarkdown {...{...routeData, siteData}} />
    }/>
  }/>