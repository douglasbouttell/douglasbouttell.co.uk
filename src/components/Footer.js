import * as React from "react";
import { Link, SiteData } from "react-static";
import convert from "htmr";
//
import "./Footer.css";

export class Footer extends React.Component {
  render() {
    return (
      <SiteData>
        {siteData => (
          <React.Fragment>
            <aside id="biography">
              <hr />
              {convert(siteData.biography)}
            </aside>
            <footer>
              <div>
                Built with <span style={{ color: "red" }}>❤</span> and{" "}
                <Link to="https://github.com/nozzle/react-static">
                  react-static
                </Link>
                {" | "}
                Copyright &copy; {siteData.copyright} 2018&ndash;
                {new Date(siteData.lastBuilt).getFullYear()}
                {" | "}
                <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  <img
                    alt="Creative Commons License"
                    style={{ borderWidth: 0 }}
                    src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
                  />
                </a>
              </div>
              <div className="small-print">
                All views and opinions expressed on this website are that of{" "}
                {siteData.copyright}. Views and opinions expressed on this
                website do not represent the views and opinions of past, present
                and future employers of {siteData.copyright}.
              </div>
            </footer>
          </React.Fragment>
        )}
      </SiteData>
    );
  }
}
