import React from 'react';
import Link from '@material-ui/core/Link';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="logo"></div> */}
        <div className="nav">
          <nav>
            <ul className="ul">
              <div className = "div"><a href="./">Home</a></div>
              <div className = "div"><a href="./events">Events</a></div>
              <div className = "div"><a href="./reports">Reports</a></div>
              <div className = "div"> <a href="./faq">FAQ</a></div>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
