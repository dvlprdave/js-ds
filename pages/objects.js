import { SWRConfig } from "swr";
import fetcher from '../helper/fetcher'

import Layout from '../layout/layout'
// import DataFetcher from '../components/dataFetcher';
import DisplayData from '../components/fetchDisplayData';

const Home = () => {
  return (
    <Layout> 
     {/* revalidateOnFocus = false because data is constant */}
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        {/* <DataFetcher /> */}
        <DisplayData idType='object' />
      </SWRConfig>
    </Layout>
  )
}

export default Home