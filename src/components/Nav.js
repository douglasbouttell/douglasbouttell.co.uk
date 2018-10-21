import * as React from 'react'
import {Link, SiteData} from "react-static"
import {Sticky} from 'react-sticky'
//
import './Nav.css'
//
import {SimpleIcon} from "./SimpleIcon"

export class Nav extends React.Component {
  render() {
    return (
      <Sticky>
        {({style}) =>
          <nav style={style} className='main'>
            <SiteData>
              {({navLinks, iconLinks}) =>
                <div>
                  <div style={{flex: 1}} className='title'>
                    <Link exact to="/">douglas bouttell</Link>
                  </div>
                  <div style={{flex: 99}}/>
                  {navLinks && Object.keys(navLinks).map(k =>
                    <div key={navLinks[k]} style={{flex: 1, minWidth: '102px'}}>
                      <Link to={navLinks[k]}>{k}</Link>
                    </div>)
                  }
                  {iconLinks &&
                  <div style={{flex: 1}}>
                    {Object.keys(iconLinks).map(icon =>
                      <Link key={icon} to={iconLinks[icon]}><SimpleIcon icon={icon}/></Link>)}
                  </div>}
                </div>
              }
            </SiteData>
          </nav>
        }
      </Sticky>
    )
  }
}