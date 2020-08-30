import React from 'react';
import styles from './Navigation.module.css';
import Link from '@material-ui/core/Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {/* <div className={styles.logo}></div> */}
        <div className={styles.nav}>
          <nav>
            <ul className={styles.ul}>
              <li><Link className={styles.link} href = "./">Home</Link></li>
              <li><Link className={styles.link}>Events</Link></li>
              <li><Link className={styles.link}>Reports</Link></li>
              <li><Link className={styles.link}>FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;