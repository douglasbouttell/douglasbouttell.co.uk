import * as React from 'react'
import {Link, SiteData} from "react-static";
//
import "./Footer.css"

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <SiteData>
          {(siteData) => (
            <React.Fragment>
              <div>
                Built with <span style={{color: 'red'}}>❤</span>{' '}
                and <Link to='https://github.com/nozzle/react-static'>react-static</Link>{' | '}
                Copyright &copy; {siteData.copyright} 2018&ndash;{new Date(siteData.lastBuilt).getFullYear()}
              </div>
              <div className="small-print">
                All views and opinions expressed on this website are that of {siteData.copyright}.
                Views and opinions expressed on this website do not represent the views and opinions
                of past, present and future employers of {siteData.copyright}.
              </div>
            </React.Fragment>
          )}
        </SiteData>
      </footer>
    )
  }
}