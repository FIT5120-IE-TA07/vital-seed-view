import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header'
import Layout from './components/Layout'
import MyImage from "./components/images/test.image";
import VirusImage from "./components/images/virus.image";
import Chlamydia from "./components/sti-info/chlamydia";
import Gonorrhea from './components/sti-info/gonorrhea'
import Hpv from './components/sti-info/hpv'
import Hiv from './components/sti-info/hiv'
import Syphilis from './components/sti-info/syphilis'
// import melb_map from './components/melb_map'
// import STD_chart from './components/STD_chart'
// import initTableau from './components/std.chart'
// import Viz from './components/viz'
import React, {useState, useEffect} from 'react'
import tableau from 'tableau-api'
// import TableauReport from 'tableau-react';

export default function Home() {
  return (
    <div>
      <Frontpage />
    </div>
  )
}
