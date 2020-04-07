import useSWR, { SWRConfig } from "swr";
import fetcher from '../helper/fetcher'

import Layout from '../layout/layout'
// import DataFetcher from '../components/dataFetcher';
import DisplayArrays from './../components/arrayData';

const Home = () => {
  return (
    <Layout> 
     {/* revalidateOnFocus = false because data is constant */}
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        {/* <Crimes /> */}
        {/* <DataFetcher /> */}
        <DisplayArrays idType='array' />
      </SWRConfig>
    </Layout>
  )
}

export default Home