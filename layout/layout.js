const Layout = ({children}) => (
  <div className='container'>
    {children}

    <style jsx>{`
      .container {
        min-height: 100vh;
      }
    
    `}</style>
  </div>
)

export default Layout