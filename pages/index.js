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
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {/* <CardContainer titleData={titleData}/> */}
      <CardContainer />
    </Layout>
  )
}

export default Home