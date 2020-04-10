import { SWRConfig } from "swr";
import fetcher from '../helper/fetcher'
// import { useState } from 'react'

import Layout from '../layout/layout'
import DisplayData from '../components/fetchDisplayData';
// import DataFetcher from "../components/dataFetcher";

const Home = () => {
  // const [selectedMethod, setSelectedMethod] = useState('')

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