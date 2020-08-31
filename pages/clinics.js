import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Navigation from "./components/Navigation";
import BackgroundImage1 from './components/images/backgroundImage1';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

//this is a testing page 
export default function clinics() {
  return (
    <div className="main">
      <Navigation />
      <div className="container1">
        <div className="left1"><BackgroundImage1 /></div>
        <div className="right1">This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 This is container1 </div>
      </div>
      <div className="container">
        <div>This is container2</div>
      </div>
      <div className="container">
        <div>This is container3</div>
      </div>
      <Footer />
    </div>
  );
}