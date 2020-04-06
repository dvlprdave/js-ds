// import {useEffect} from 'react'
// import gsapAnimations from '../animations/bannerAnimation'

// import fs from 'fs'
// import path from 'path'

import {useState} from "react";
import useSWR, { SWRConfig } from "swr";

import Layout from '../layout/layout'
import Head from 'next/head'
import Banner from '../components/banner'
import CardContainer from './../components/card';

import Link from 'next/link'

// TODO: Move fetcher into own component
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Home = () => {
  // useEffect(async () => {
  //   // gsapAnimations()
    
  // }, [])
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {/* <CardContainer titleData={titleData}/> */}
      <CardContainer />

      {/* revalidateOnFocus = false because data is constant */}
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        <Crimes />
      </SWRConfig>
    </Layout>
  )
}



function Crimes() {
  // Fetch data from file
  const { data, error } = useSWR('/api/randomQuote');

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  // map over all the titles and place them in a Set so each title is unique
  const uniqueCategories = [...new Set(data.map(title => title.title))]

  return (
    <DisplayCrimes
      titles={data}
      categories={uniqueCategories}
    />
  );
}

function DisplayCrimes({ titles, categories }) {
  const [filterCategory, setFilterCategory] = useState(null);

  const filteredData = filterCategory
    ? titles.filter(title => title.title === filterCategory)
    : titles;

    console.log(filteredData);
    

  return (
    <>
      {categories.map(category => (
        <button
          onClick={() => {
            setFilterCategory(category);
          }}
          key={category}
        >
          {category}
        </button>
      ))}

      {filterCategory && (
        <button
          onClick={() => {
            setFilterCategory(null);
          }}
        >
          reset
        </button>
      )}

      <div>
        {filteredData.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>

      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </>
  );
}



export default Home

// export async function getStaticProps() {
//   // Read file directory
//   const postsDirectory = path.join(process.cwd(), 'data')
//   const filenames = fs.readdirSync(postsDirectory)

//   // Read and parse JSON file
//   const fileData = filenames.map(filename => {
//     const filePath = path.join(postsDirectory, filename)
//     const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))

//     return {
//       filename,
//       content: fileContents,
//     }
//   })

//   return {
//     props: {
//       slug: fileData[0].content
//     },
//   }
// }

