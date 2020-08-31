import React from 'react';
import Link from '@material-ui/core/Link';
import VirusImage from "./images/virus.image";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
        {/* <div className="logo"></div> */}
          <nav>
            <ul className="ul">
              {/* <div className="proName">Vital Seed</div> */}
              <div className="div"><a href="./">Home</a></div>
              <div className="div"><a href="./events">Events</a></div>
              <div className="div"><a href="./reports">Reports</a></div>
              <div className="div"> <a href="./faq">FAQ</a></div>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
