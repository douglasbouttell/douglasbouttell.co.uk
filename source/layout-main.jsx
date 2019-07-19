// import "./reset.css";
// import "./app.css";

export default (props) => (
  <html>
  <head>
    <meta charSet="UTF-8"/>
    <meta name="description" content="Douglas Bouttell blog"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="/css/reset.css" rel="stylesheet" type="text/css"/>
    <link href="/css/app.css" rel="stylesheet" type="text/css"/>
    <title>{!!props.title ? `${props.title} | ` : ""}Douglas Bouttell</title>
  </head>
  <body>
  <header className="main">
    <a href="/">
      douglas bouttell
    </a>
  </header>
  <main>
    <div className="container">
      {props.children}
    </div>
  </main>
  <aside id="biography">
    <div className="container">
      <h4>Who is Douglas?</h4>

      <p>
        Born, Glasgow, Scotland. I studied Computer and Electronic Systems graduating
        with a Masters in Engineering. Going from QBasic to Java to C to Perl to Python
        to Ruby to Javascript and beyond.
      </p>

      <p><a href="/about.html">Read More...</a></p>
    </div>
  </aside>
  <footer>
    <div>
      Copyright &copy; Douglas Bouttell 2018&ndash;
      {new Date().getFullYear()}
    </div>
    <div>
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
      Douglas Bouttell. Views and opinions expressed on this
      website do not represent the views and opinions of past, present
      and future employers of Douglas Bouttell.
    </div>
  </footer>
  </body>
  </html>
);