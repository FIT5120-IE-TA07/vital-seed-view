import Head from "next/head";
import Link from "next/link";
import BackgroundImage1 from "./components/images/backgroundImage1";
import GirlImage1 from "./components/images/girl.image";
import GirlImage2 from "./components/images/girl2.image";
import CardBckgnd1 from "./components/images/card.background 1";
import CardBckgnd2 from "./components/images/card.background 2";
import CardBckgnd3 from "./components/images/card.background 3";
import TableauChart from "./components/tableau/chart";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import LocationOn from "@material-ui/icons/LocationOn";
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Card from "./components/Card/Card.js";
import carouselStyle from "../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(carouselStyle);
export default function Frontpage() {

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="main">
      <Head>
        <title>Vital Seed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* container1 */}
      <div className="containerTop">
        <div className={classes.section} id="carousel">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
                <Card>
                  <Carousel {...settings}>
                    <div>
                      <CardBckgnd3 />
                      <div className="slick-caption">
                        <h6>
                          Yellowstone National Park, United States
                    </h6>
                      </div>
                    </div>
                    <div>
                      <CardBckgnd1 />
                      <div className="slick-caption">
                        <h6>
                          Somewhere Beyond, United States
                    </h6>
                      </div>
                    </div>
                    <div>
                      <CardBckgnd2 />
                      <div className="slick-caption">
                        <h6>
                          Yellowstone National Park, United States
                    </h6>
                      </div>
                    </div>
                    <div>
                      <CardBckgnd1 />
                      <div className="slick-caption">
                        <h6>
                          Somewhere Beyond, United States
                    </h6>
                      </div>
                    </div>
                    <div>
                      <CardBckgnd1 />
                      <div className="slick-caption">
                        <h6>
                          Somewhere Beyond, United States
                    </h6>
                      </div>
                    </div>
                  </Carousel>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <div className="container">
        <h4>What is Vital Seed?</h4>
        <h6>
          A sexually transmitted infection (STI) is an infection you get from
          someone else during sexual activity. There are lots of different
          kind of STIs, all with different preventions, symptoms and treatment
          options.
          </h6>
        <h6>
          With the right protection, good communication and regular sexual
          health checks, most STIs can be avoided or easily managed.
          </h6>
      </div>

      {/* container2  */}
      <div className="container2">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <div className="bckImg1">
                <GirlImage1 />
              </div>
              <p className="paperContent">
                How safe is your sex?
                <br />
                Let's check here...
              </p>
              <Link href="/questionnaire">
                <Button
                  variant="contained"
                  color="secondary"
                  className="paperButton"
                >
                  Let's start
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paper">
              <div className="bckImg1">
                <GirlImage2 />
              </div>
              <p className="paperContent">How well do you know about STDs?</p>
              <Link href="/questionnaire2">
                <Button
                  variant="contained"
                  color="secondary"
                  className="paperButton"
                >
                  Take a quiz
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="container3">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <div className="bckImg1">
                <CardBckgnd1 />
              </div>
              <p className="paperContent">Are contraceptives important? Why?</p>

              <Button
                variant="contained"
                color="secondary"
                href="https://www.abc.net.au/radionational/programs/drive/the-contraceptive-pill-and-why-you-dont-need-to-bleed/10737704"
                target="_blank"
                className="paperButton"
              >
                Learn more
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <div className="bckImg1">
                <CardBckgnd2 />
              </div>
              <p className="paperContent">
                Why does STD infection rate keep raising?
              </p>

              <Button
                variant="contained"
                color="secondary"
                href="https://www.abc.net.au/news/health/2019-09-29/stis-on-the-rise-but-stigma-persists/11552194 "
                target="_blank"
                className="paperButton"
              >
                Learn more
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <div className="bckImg1">
                <CardBckgnd3 />
              </div>
              <p className="paperContent">What is sex and ways to safe sex?</p>
              <Button
                variant="contained"
                color="secondary"
                href="https://www.abc.net.au/life/how-to-practise-safe-sexting/10242646"
                target="_blank"
                className="paperButton"
              >
                Learn more
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
