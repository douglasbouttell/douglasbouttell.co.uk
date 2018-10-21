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
            <div>
              Built with <span style={{color: 'red'}}>❤</span>{' '}
              and <Link to='https://github.com/nozzle/react-static'>react-static</Link>{' | '}
              Copyright &copy; {siteData.copyright} {new Date(siteData.lastBuilt).getFullYear()}
            </div>
          )}
        </SiteData>
      </footer>
    )
  }
}