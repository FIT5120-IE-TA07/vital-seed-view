import Head from 'next/head'
import Link from 'next/link'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Navigation from "./components/Navigation";

export default function clinics() {
  return (
    <div>
      <Navigation/>
      <div className="container1">
        <div>This is container1</div>
        </div>
      <div className="container">
        <div>This is container2</div>
      </div>
      <Footer/>
    </div>
  );
}