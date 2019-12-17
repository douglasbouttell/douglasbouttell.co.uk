// import "./reset.css";
// import "./app.css";

const withContainer = (Component) => (props) => {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      <div className="container">{children}</div>
    </Component>
  );
};

const Main = withContainer('main');
const Aside = withContainer('aside');
const Footer = withContainer('footer');
const DivContainer = withContainer('div');

const ContentBreak = () => (
  <DivContainer id="content-break" aria-hidden={true}>
    <hr />
  </DivContainer>
);

const Ribbon = () => <div className="ribbon-top" />;

const Header = (props) => (
  <header className="main">
    <a href="/">{props.children}</a>
  </header>
);

export default (props) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Douglas Bouttell blog" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/css/reset.css" rel="stylesheet" type="text/css" />
      <link href="/css/app.css" rel="stylesheet" type="text/css" />
      <title>{!!props.title ? `${props.title} | ` : ''}Douglas Bouttell</title>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/darcula.min.css"
      />
    </head>
    <body>
      <Ribbon />
      <Header>Douglas Bouttell</Header>
      <Main>{props.children}</Main>
      <Aside id="biography">
        <hr style={{ margin: '3rem 0' }} aria-hidden="true" />
        <h4>Who is Douglas?</h4>
        <p>
          Born, Glasgow, Scotland. I studied Computer and Electronic Systems
          graduating with a Masters in Engineering. Going from QBasic to Java to
          C to Perl to Python to Ruby to Javascript and beyond.{' '}
          <a href="/about.html">Read More...</a>
        </p>
        <hr style={{ margin: '3rem 0' }} aria-hidden="true" />
      </Aside>
      <Footer>
        <div id="notices">
          <span id="copyright">
            Copyright &copy; Douglas Bouttell 2018&ndash;
            {new Date().getFullYear()}
          </span>
          <span>
            Built using{' '}
            <a href="https://charge.js.org/" target="_blank">
              @static/charge
            </a>
          </span>
          <span id="cc-notice">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
              />
            </a>
          </span>
        </div>
        <div className="small-print">
          All views and opinions expressed on this website are that of Douglas
          Bouttell. Views and opinions expressed on this website do not
          represent the views and opinions of past, present and future employers
          of Douglas Bouttell.
        </div>
      </Footer>
    </body>
  </html>
);
