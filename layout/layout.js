import {useEffect} from 'react'
import gsapAnimations from '../animations/bannerAnimation'

import Banner from "../components/banner"
const Layout = ({children}) => {
  useEffect(() => {
    // gsapAnimations()
    console.log('reload log');
    
  }, [])
  return (
  <div className='container'>
    <Banner />
    {children}

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 2rem 3rem;
      }
    
    `}
    </style>
  </div>
)
    }

export default Layout