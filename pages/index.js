import {useEffect} from 'react'
// import gsapAnimations from '../animations/bannerAnimation'

import Layout from '../layout/layout'
import Head from 'next/head'
import Banner from '../components/banner'
import CardContainer from './../components/card';

const Home = () => {

  useEffect(async () => {
    // gsapAnimations()
    
  }, [])
    
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <CardContainer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}

export default Home
