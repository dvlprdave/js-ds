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

    <style jsx global>{`
      html,
      body {
        font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}
    </style>
  </div>
)

export default Layout