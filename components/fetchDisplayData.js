import {useState} from "react";
import useSWR from "swr";

import * as Cards from './methods'
import MainArray from './mainArray'

function FetchDisplayData({idType}) {
  const [selectedMethod, setSelectedMethod] = useState('')
  const { data, error } = useSWR('/api/randomQuote');
  
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  const componentFilter = data.dataStructures.methods.filter(item => item.id === `${idType}`).map(item => item.component)

  const renderSelectedCard = (selectedMethod) => {
    if (!selectedMethod)
      return <MainArray />

    const Card = Cards[selectedMethod];
    return <Card />;
  }

  return (
    <>
      {
        componentFilter.map(title => (
          <button
            onClick={() => {setSelectedMethod(title)}}
            key={title}
          >
            {/* Add space between component names */}
            {
            idType === 'array' 
            ? `${title.slice(0, 5)} ${''} ${title.slice(5, 9)}`
            : `${title.slice(0, 6)} ${''} ${title.slice(6, 12)}`
            }
          </button>
        ))
      }

      <button onClick={() => {setSelectedMethod('')}}>
        reset
      </button>

      <div>{renderSelectedCard(selectedMethod)}</div>

    </>
  );
}

export default FetchDisplayData