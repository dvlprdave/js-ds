import {useState} from "react";
import useSWR from "swr";

import DisplayData from './dataUi';
import * as Cards from './methods'

function FetchDisplayData({idType}) {
  const [filterCategory, setFilterCategory] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState('')

  const { data, error } = useSWR('/api/randomQuote');
  console.log(data);
  console.log(selectedMethod);
  
  
  
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;


  const filterForArrays = data.array.methods.filter(item => item.id === `${idType}`)
  const componentFilter = data.array.methods.map(item => item.component)

  // Map over filtered array id's and return each title
  const uniqueArray = filterForArrays.map(item => item.title)

  // If theres a filtered category, then filter each title to see if
  // it's equal to the one being filtered.
  // Otherwise, render unfiltered list
  const filteredData = filterCategory
    ? filterForArrays.filter(item => item.title === filterCategory)
    : filterForArrays;

  const renderSelectedCard = (selectedMethod) => {
    if (!selectedMethod)
      return <p>Nothing to display</p>;

    const Card = Cards[selectedMethod];

    return <Card />;
  }

  return (
    <>
      <DisplayData 
        idType={idType}
        data={data}
        uniqueArray={uniqueArray}
        filteredData={filteredData}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        setSelectedMethod={setSelectedMethod}
        componentFilter={componentFilter}
        renderSelectedCard={renderSelectedCard}
        selectedMethod={selectedMethod}
      />

    </>
  );
}



export default FetchDisplayData