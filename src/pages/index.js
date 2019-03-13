import React, { Fragment } from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutPage from './AboutPage';
import OtherPage from './OtherPage';

export default class Pages extends React.Component {
  render() {
    return <Router>
      <Fragment>
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/other" component={OtherPage} />
      </Fragment>
    </Router>
  }
}