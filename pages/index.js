import {useEffect} from 'react'
// import gsapAnimations from '../animations/bannerAnimation'
import Prism from 'prismjs'
import Head from 'next/head'
import NavBar from '../components/Navbar'
import Banner from '../components/Banner'
import CardContainer from './../components/Card';

// TODO: Move fetcher into own component
const Home = () => {
  useEffect(() => {
    // gsapAnimations()
      Prism.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>JS Data Structures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-container'>
        <NavBar />
        <Banner />
        <CardContainer />

      <style jsx>{`
        .home-container {
          padding: 2rem 2rem;
          margin: 0 auto;
        }

       
      `}</style>
      </div>
    </>
  )
}

export default Home