import LayoutMain from './layout-main.jsx';

export default (props) => (
  <LayoutMain noBio={true} {...props}>
    <h1>Page not found</h1>
    <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
      <a href="/">Return to the front page</a>
    </p>
  </LayoutMain>
);
