import React from 'react';
import './AboutPage.scss';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='aboutpage_wrapper'>
        AboutPage
        <div className="bottom-nav">
          <a href="/">go home</a>
          <a href="/other">go other</a>
        </div>
      </div>
    );
  }
}

export default AboutPage;