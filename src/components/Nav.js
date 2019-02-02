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
              <div style={{flex: 99}}/>
              {navLinks && Object.keys(navLinks).map(k =>
                <div key={navLinks[k]} className='links text' style={{flex: 1}}>
                  <Link to={navLinks[k]}>{k}</Link>
                </div>)
              }
              {iconLinks &&
              <div className='links'>
                {Object.keys(iconLinks).map(icon =>
                  <Link key={icon} to={iconLinks[icon]}><SimpleIcon icon={icon}/></Link>)}
              </div>}
            </div>
          }
        </SiteData>
      </nav>
    )
  }
}