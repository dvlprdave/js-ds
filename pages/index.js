import Layout from '../layout/layout'
import Head from 'next/head'

const Home = () => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
    </main>


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

export default Home
