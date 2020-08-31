import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Navigation from "./components/Navigation";
import BackgroundImage1 from './components/images/backgroundImage1';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import MyImage from "./components/images/test.image";
import VirusImage from "./components/images/virus.image";
import Chlamydia from "./components/sti-info/chlamydia";
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'
import React from 'react'

//this is a testing page 
export default function Frontpage() {
  return (
    <div className="main">
      <Navigation />
      <div className="container1">
        <div className="left1"><BackgroundImage1 /></div>
        <div className="right1">This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 </div>
      </div>
      <div className="container">
        {/* <h1 className="title">
          Hi <a href="/clinics">Link testing</a>
        </h1> */}
        {/* <h1 className="title">Welcome to Vital Seed again!</h1> */}

        <VirusImage />
        <h1 className="sub-title">STI Information</h1>
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
      <div className="container">
        <div>This is container3</div>
      </div>
      <Footer />
    </div>
  );
}