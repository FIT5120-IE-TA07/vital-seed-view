import Link from 'next/link'
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px",
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    height: "3%",
    backgroundColor: "black",
    margin: "0.5% 0.5%",
    "&:hover": {
      backgroundColor: "#15e577"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const router = useRouter()

  return (<div className={classes.root}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Vital Seed
        </Typography>
        <Link href="/">
          <Button color="inherit" className={classes.button}>Home</Button>
        </Link>
        <Link href="/sti.info">
          <Button color="inherit" className={classes.button}>STI</Button>
        </Link>
        <Link href="/questionnaire">
          <Button color="inherit" className={classes.button}>Questionnaire</Button>
        </Link>
        <Link href="/">
          <Button color="inherit" className={classes.button}>Clinics</Button>
        </Link>
        <Link href="/">
          <Button color="inherit" className={classes.button}>Events</Button>
        </Link>
        <Link href="/">
          <Button color="inherit" className={classes.button}>Reports</Button>
        </Link>
        <Link href="/">
          <Button color="inherit" className={classes.button}>FAQ</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </div>)
}
