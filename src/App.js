import React from 'react'
import {Router, withLoading} from 'react-static'
import Routes from 'react-static-routes'
import {hot} from 'react-hot-loader'
import {StickyContainer} from 'react-sticky'
//
// reset must be before app
import './reset.css'
import './app.css'
import 'highlight.js/styles/darkula.css'
//
import {Nav} from './components/Nav'
import {Footer} from "./components/Footer"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <StickyContainer>
            <Nav/>
            <main>
              <Routes/>
            </main>
            <Footer/>
          </StickyContainer>
        </div>
      </Router>
    );
  }
}

export default hot(module)(withLoading(App))
