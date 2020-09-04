import Head from 'next/head'
import Link from 'next/link'
import Frontpage from './frontpage'
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    backgroundColor: "black",
    margin: "0.5% 0.5%",
    "&:hover": {
      backgroundColor: "#15e577"
    }
  }
}));

export default function Home() {
  const element = <script src="https://public.tableau.com/javascripts/api/tableau-2.6.0.min.js"></script>

  const classes = useStyles();
  const router = useRouter()

  return (<div>
    <Head>
      {element}
    </Head>
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Vital Seed
          </Typography>
          <Link href="/sti.info">
            <Button color="inherit" className={classes.button}>Home</Button>
          </Link>

          <Button color="inherit" className={classes.button}>STDs</Button>
          <Button color="inherit" className={classes.button}>Questionnaire</Button>
          <Button color="inherit" className={classes.button}>Clinics</Button>
          <Button color="inherit" className={classes.button}>Events</Button>
          <Button color="inherit" className={classes.button}>Reports</Button>
          <Button color="inherit" className={classes.button}>FAQ</Button>
        </Toolbar>
      </AppBar>
    </div>
    <Frontpage/>
  </div>)
}
