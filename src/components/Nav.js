import * as React from "react";
import { Link, SiteData } from "react-static";
//
import "./Nav.css";
//

export class Nav extends React.Component {
  render() {
    return (
      <nav className="main">
        <div className="nav-container">
          <div className="title">
            <Link exact to="/">
              douglas bouttell
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
