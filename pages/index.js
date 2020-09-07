import Head from 'next/head'
// import Link from 'next/link'
import Frontpage from './frontpage'
import React from 'react'
// import NavBar from './components/navbar'

export default function Home() {
  const element = <script src="https://public.tableau.com/javascripts/api/tableau-2.6.0.min.js"></script>

  return (<div>
    <Head>
      {element}
    </Head>
    <Frontpage/>
  </div>)
}
