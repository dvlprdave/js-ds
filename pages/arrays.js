import {useState} from "react";
import useSWR, { SWRConfig } from "swr";

import Layout from '../layout/layout'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Home = () => {
  return (
    <Layout> 
     {/* revalidateOnFocus = false because data is constant */}
      <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
        <Crimes />
      </SWRConfig>
    </Layout>
  )
}

function Crimes() {
  // Fetch data from file
  const { data, error } = useSWR('/api/randomQuote', fetcher);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  // map over all the titles and place them in a Set so each title is unique
  const uniqueCategories = [...new Set(data.map(title => title.title))]
  
  return (
    <>
    <DisplayCrimes
      titles={data}
      categories={uniqueCategories}
    />
    </>
  );
}

function DisplayCrimes({ titles, categories }) {
  const [filterCategory, setFilterCategory] = useState(null);

  const filteredData = filterCategory
    ? titles.filter(title => title.title === 'filterCategory')
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
    </>
  );
}

export default Home