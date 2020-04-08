// import useSWR from "swr";
// import DisplayArrays from './arrayData';

// function DataFetcher() {
//   // Fetch data from file
//   const { data, error } = useSWR('/api/randomQuote');

//   if (error) return <div>Error...</div>;
//   if (!data) return <div>Loading...</div>;

//   // map over all the titles and place them in a Set so each title is unique
//   const uniqueCategories = [...new Set(data.map(title => title.title))]
  
//   return (
//     <>
//     <DisplayArrays 
//       titles={data}
//       categories={uniqueCategories}/>
//     </>
//   );

// }


// export default DataFetcher

import useSWR from "swr";
import fetcher from '../helper/fetcher'


const DataFetcher = () => {
  const { data } = useSWR('/api/randomQuote', fetcher);
  // console.log(data.arrays.title);
  // const arrays = data.arrays
  return (
    <>
     <h1>{data.arrays.title}</h1>
      {/* <h1>{data.arrays.title}</h1>
      <p>{data.arrays.description}</p> */}
        {data.arrays.arrayMethods.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        }) }
    </>
  )
}

export default DataFetcher