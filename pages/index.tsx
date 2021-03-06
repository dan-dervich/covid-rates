import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/nav'
import Main from '../components/main'

const Home: NextPage = () => {
  return (
    < >
      <Head>
        <title>Covid Testing Stats App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Main />
      </>
  )
}

export default Home
