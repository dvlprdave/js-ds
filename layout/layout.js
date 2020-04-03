const Layout = ({children}) => (
  <div className='container'>
    {children}

    <style jsx>{`
      .container {
        min-height: 100vh;
        max-width: 1560px;
        padding: 2rem 3rem;
        margin: 0 auto;
      }
    
    `}
    </style>
  </div>
)

export default Layout