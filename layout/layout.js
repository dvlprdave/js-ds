import Banner from "../components/banner"

const Layout = ({children}) => (
  <div className='container'>
    <Banner />
    {children}

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 2rem;
      }
    
    `}
    </style>
  </div>
)

export default Layout