import React from 'react';

import './OtherPage.scss';

class OtherPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='otherpage_wrapper'>
        OtherPage
      <div className="bottom-nav">
          <a href="/">go home</a>
          <a href="/about">go about</a>
        </div>
      </div>
    );
  }
}

export default OtherPage;