// import {useEffect} from 'react'
// import gsapAnimations from '../animations/bannerAnimation'
import Layout from '../layout/layout'
import Head from 'next/head'
import Banner from '../components/banner'
import CardContainer from './../components/card';

// TODO: Move fetcher into own component
const Home = () => {
  // useEffect(async () => {
  //   // gsapAnimations()
    
  // }, [])

  return (
    <>
      <Head>
        <title>JS Data Structures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-container'>
        <Banner />
        <CardContainer />

      <style jsx>{`
        .home-container {
          padding: 2rem 3rem;
        }
      `}</style>
      </div>
    </>
  )
}

export default Home