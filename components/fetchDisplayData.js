import {useState} from "react";
import useSWR from "swr";

import * as Cards from './methods'
import MainArray from './mainArray'
import Button from './button'

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
    <div className='wrapper'>
      <div className='method-list'>
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
      </div>
      

      {/* <button onClick={() => {setSelectedMethod('')}}>
        reset
      </button> */}

      <div className='method-component'>{renderSelectedCard(selectedMethod)}</div>

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 200px 2fr;
          height: 100vh;
        }

        .method-list {
          display: flex;
          flex-direction: column;
          height: 90vh;
          background: rgba(211, 174, 54, 1);
          padding: 1rem;
        }

        .method-component {
          align-self: center;
          justify-self: center;
        }

        button {
          padding: 10px;
          border: 1px solid #000;
          border-radius: 10px;
          width: 150px;
          margin: 0 auto;
          margin-bottom: 1rem;
          font-weight: bold;
          font-size: .88rem;
        }
      `}</style>
    </div>
  );
}

export default FetchDisplayData