import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Navbar() {
  return (
    <div className="container">
        {/* <div className={styles.logo}></div> */}
        <div className="nav">
          <nav>
            <ul className="ul">
              <li><a href="./">Home</a></li>
              <li><a href="./events">Events</a></li>
              <li><a href="./reports">Reports</a></li>
              <li><a href="./faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </div>
  );
}

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: theme.aqua,
    display: theme.inline,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    // position: "absolute",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <header className={classes.header}>
      <Navbar/>
    </header>
  );
}
