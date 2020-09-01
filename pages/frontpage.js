import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Navigation from "./components/Navigation";
import BackgroundImage1 from './components/images/backgroundImage1';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import VirusImage from "./components/images/virus.image";
import GirlImage from "./components/images/girl.image";
import ChartImage from "./components/images/chart.image";
import MapImage from "./components/images/map.image";
import Chlamydia from "./components/sti-info/chlamydia";
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'
import TableauEmbed from './components/tableau.js'

export default function Frontpage() {
  return (<div className="main">
    <Head>
      <title>Vital Seed</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Navigation/>
    <h1 className="title">Welcome to Vital Seed!</h1>

    {/* container1 */}
    <div className="containerTop">
      <div><BackgroundImage1/></div>
      <div className="subContainer2">Welcome to Vital Seed! This is iteration 1, the functionalities we are showing are: popup information, chart of infected rate and the map of clinics
      </div>
    </div>

    {/* container2 */}
    <div className="container">
      <div className="subContainer">
        <h1>STI Information</h1>
        <br/>
        <br/>
        <Chlamydia/>
        <br/>
        <Gonorrhea/>
        <br/>
        <Hpv/>
        <br/>
        <Hiv/>
        <br/>
        <Syphilis/>
      </div>
      <div><GirlImage/></div>
    </div>
    {/* container3 */}
    <div className="container">
      <TableauEmbed />
      <div><ChartImage/></div>
      <div className="subContainer2">
        Because of some technical issues, we're using image to represent the chart. We will fix it soon. Sorry for the inconvenience.
      </div>
    </div>

    {/* container4 */}
    <div className="container">
      <div className="subContainer">
        Because of some technical issues, we're using image to represent the map. We will fix it soon. Sorry for the inconvenience.
      </div>
      <div><MapImage/></div>
    </div>
    <Footer/>
  </div>);
}
