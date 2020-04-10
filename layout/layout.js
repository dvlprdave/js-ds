const Layout = ({children}) => (
  <div className='container'>
    {children}

    <style jsx>{`
      .container {
        min-height: 100vh;
        max-width: 1560px;
      }
    
    `}</style>
  </div>
)

export default Layout