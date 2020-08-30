import React from 'react';
import Link from '@material-ui/core/Link';
import { Button } from '@material-ui/core';

class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <div className={styles.logo}></div> */}
        <div className="nav">
          <nav>
            <ul className="ul">
              <Button><Link className="link" href = "./">Home</Link></Button>
              <Button><Link className="link" href = "./events">Events</Link></Button>
              <Button><Link className="link" href = "./reports">Reports</Link></Button>
              <Button><Link className="link" href = "./faq">FAQ</Link></Button>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
