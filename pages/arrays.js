import { SWRConfig } from "swr";
import fetcher from '../helper/fetcher'

import Layout from '../layout/layout'
import DisplayData from '../components/FetchDisplayData';

const Home = () => {
  return (
    <Layout>
     {/* revalidateOnFocus = false because data is constant */}
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        <DisplayData idType='array' />
        {/* <DataFetcher /> */}
      </SWRConfig>
    </Layout>
  )
}

export default Home