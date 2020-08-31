import Head from 'next/head'
// import Link from 'next/link'
import React from 'react'
import Frontpage from './frontpage'

export default function Home() {
  return (
    <div className="container">
      {/* <Layout> */}
      <Head>
        <title>Vital Seed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* <h1 className="title">
          Hi <a href="/clinics">Link testing</a>
        </h1> */}
        <h1 className="title">Welcome to Vital Seed!</h1>
        <Frontpage />

        {/* <VirusImage />
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
      

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Welcome to team Vital Seed!</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}
    </div>
  )
}
