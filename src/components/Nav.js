import * as React from 'react'
import {Link, SiteData} from "react-static"
//
import './Nav.css'
//
import {SimpleIcon} from "./SimpleIcon"

export class Nav extends React.Component {
  render() {
    return (
      <nav className='main'>
        <SiteData>
          {({navLinks, iconLinks}) =>
            <div className="nav-container">
              <div className='title'>
                <Link exact to="/">douglasbouttell.co.uk</Link>
              </div>
              {iconLinks &&
              <div className='links'>
                <div className='line'/>
                {Object.keys(iconLinks).map(icon =>
                  <Link key={icon} to={iconLinks[icon]}><SimpleIcon icon={icon}/></Link>)}
                <div className='line'/>
              </div>}
            </div>
          }
        </SiteData>
      </nav>
    )
  }
}