import Link from 'next/link'
import React from 'react';
import {makeStyles, withTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './images/logo.js';
import {useRouter} from 'next/router'
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px",
    width: "100%",
    zIndex: 2,
    top:0,
    position:"fixed"
  },
  navMargin:{
    marginTop: "60px",
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    height: "3%",
    color: "white",
    backgroundColor:"transparent",
    margin: "0.5% 0.5%",
    "&:hover": {
      backgroundColor: "white"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const router = useRouter()

  return (<div>
  <div className={classes.root}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        <Link href="/">
          <Logo/>
        </Link>
        </Typography>
        <Link href="/">
          <Button color="inherit" className={classes.button}>Home</Button>
        </Link>
        <Link href="/sti.info">
          <Button color="inherit" className={classes.button}>STI</Button>
        </Link>
        <Link href="/clinics">
          <Button color="inherit" className={classes.button}>Clinics</Button>
        </Link>
        <Link href="/questionnaire">
          <Button color="inherit" className={classes.button}>Quiz</Button>
        </Link>
        {/* <Link href="/events">
          <Button color="inherit" className={classes.button}>Events</Button>
        </Link> */}
        {/* <Link href="/reports">
          <Button color="inherit" className={classes.button}>Reports</Button>
        </Link> */}
        {/* <Link href="/faq">
          <Button color="inherit" className={classes.button}>FAQ</Button>
        </Link> */}
      </Toolbar>
    </AppBar>
  </div>
  <div className={classes.navMargin}></div>
  </div>)
}
