import React from 'react';
// import styles from './Navigation.module.css';
import Link from '@material-ui/core/Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <div className={styles.logo}></div> */}
        <div className="nav">
          <nav>
            <ul className="ul">
              <li><Link className="link" href = "./">Home</Link></li>
              <li><Link className="link">Events</Link></li>
              <li><Link className="link">Reports</Link></li>
              <li><Link className="link">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
