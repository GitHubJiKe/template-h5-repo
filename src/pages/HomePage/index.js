import React from 'react';
import './HomePage.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='homepage_wrapper'>
        This is a template repo based on React for quickly building a H5 app
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
        <div>
          <h3>使用到的技术框架</h3>
          <ul>
            <li><a href="https://reactjs.org/">React</a></li>
            <li><a href="https://parceljs.org/">Parcel</a></li>
            <li><a href="http://imochen.github.io/hotcss/">hotcss</a></li>
            <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">react-router</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;