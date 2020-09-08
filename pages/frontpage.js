import Head from 'next/head'
import Link from 'next/link'
import Footer from './components/footer'
import BackgroundImage1 from './components/images/backgroundImage1';
import GirlImage1 from './components/images/girl.image';
import GirlImage2 from './components/images/girl2.image';
import CardBckgnd1 from './components/images/card.background 1';
import CardBckgnd2 from './components/images/card.background 2';
import CardBckgnd3 from './components/images/card.background 3';
import TableauChart from './components/tableau/chart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Frontpage() {
  return (<div className="main">
    <Head>
    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> */}
      <title>Vital Seed</title>
      <link rel="icon" href="/favicon.ico" />
      {/* </link> */}
    </Head>
    {/* <h1 className="title">Welcome to Vital Seed!</h1> */}

    {/* container1 */}
    <div className="containerTop">
      <div><BackgroundImage1 /></div>
      <div className="subContainer">Welcome to Vital Seed! This is iteration 1, the functionalities we are showing are: popup information, chart of infected rate and the map of clinics
      </div>
    </div>

    {/* container2 */}
    <div className="container2">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">
            <div className = "bckImg1"><GirlImage1 /></div>
            <p className="paperContent">How safe is your sex?
                            <br />
                            Let's check here...</p>
            <Button variant="contained" color="secondary" href="./questionnaire" className="paperButton">Let's start</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">
          <div className = "bckImg1"><GirlImage2 /></div>
            <p className="paperContent">How well do you know about STDs?</p>
            <Button variant="contained" color="secondary" href="./questionnare" className="paperButton">Take a quiz</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>

    <div className="container3">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className="paper">
          <div className = "bckImg1"><CardBckgnd1/></div>
            <p className="paperContent">Are contraceptives important? Why?</p>
            
            <Button variant="contained" color="secondary" href="https://www.abc.net.au/radionational/programs/drive/the-contraceptive-pill-and-why-you-dont-need-to-bleed/10737704" target="_blank" className="paperButton">Learn more</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="paper">
          <div className = "bckImg1"><CardBckgnd2/></div>
            <p className="paperContent">Why does STD infection rate keep raising?</p>
            
            <Button variant="contained" color="secondary" href="https://www.abc.net.au/news/health/2019-09-29/stis-on-the-rise-but-stigma-persists/11552194 " target="_blank" className="paperButton">Learn more</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="paper">
          <div className = "bckImg1"><CardBckgnd3/></div>
            <p className="paperContent">What is sex and ways to safe sex?</p>
            <Button variant="contained" color="secondary" href="https://www.abc.net.au/life/how-to-practise-safe-sexting/10242646" target="_blank" className="paperButton">Learn more</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </div>);
}
