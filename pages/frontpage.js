import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Navigation from "./components/Navigation";
import BackgroundImage1 from './components/images/backgroundImage1';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import VirusImage from "./components/images/virus.image";
import GirlImage from "./components/images/girl.image";
import Chlamydia from "./components/sti-info/chlamydia";
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'
import React from 'react'

export default function Frontpage() {
  return (
    <div className="main">
      <Head>
        <title>Vital Seed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <h1 className="title">Welcome to Vital Seed!</h1>
      <div className="containerTop">
        <div><BackgroundImage1 /></div>
        <div className="right1">Welcome to vital seed. </div>
      </div>
      <div className="container">
        <div className="subContainer">
          <h1>STI Information</h1>
          <br />
          <br />
          <Chlamydia />
          <br />
          <Gonorrhea />
          <br />
          <Hpv />
          <br />
          <Hiv />
          <br />
          <Syphilis />
        </div>
        <div><GirlImage /></div>
      </div>
      <div className="container">
        <div>This is container3</div>
      </div>
      <div className="container">
        <div>This is container4</div>
      </div>
      <Footer />
    </div>
  );
}