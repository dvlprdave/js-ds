import {useState} from "react";
import useSWR from "swr";

import DisplayData from './displayData';

function DisplayArrays({idType}) {
  const [filterCategory, setFilterCategory] = useState(null);

  const { data, error } = useSWR('/api/randomQuote');

  console.log(data);
  
  
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  const filterForArrays = data.filter(item => item.id === `${idType}`)

  // Map over filtered array id's and return each title
  const uniqueArray = filterForArrays.map(item => item.title)

  // If theres a filtered category, then filter each title to see if
  // it's equal to the one being filtered.
  // Otherwise, render unfiltered list
  const filteredData = filterCategory
    ? filterForArrays.filter(item => item.title === filterCategory)
    : filterForArrays;

  return (
    <>
    <DisplayData 
      uniqueArray={uniqueArray}
      filteredData={filteredData}
      filterCategory={filterCategory}
      setFilterCategory={setFilterCategory}
    />
    </>
  );
}



export default DisplayArrays