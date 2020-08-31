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
import Frontpage from './frontpage'

export default function Home() {
  return (
    <div>
      <Frontpage />
    </div>
  )
}
