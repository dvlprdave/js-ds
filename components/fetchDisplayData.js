import {useState} from "react";
import useSWR from "swr";


import * as Cards from './methods'
import MainComponent from './mainComponent'

function FetchDisplayData({idType}) {
  const [selectedMethod, setSelectedMethod] = useState('')
  const { data, error } = useSWR('/api/randomQuote');
  
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  const componentFilter = data.dataStructures.methods.filter(item => item.id === `${idType}`).map(item => item.component)
  const mainComponentFilter = data.dataStructures.main.map(item => item).filter(item => item.id === `${idType}`)
  
  const renderSelectedCard = (selectedMethod) => {
    if (!selectedMethod)
      return <MainComponent data={mainComponentFilter}/>

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
              ? `${title.slice(0, 5)} ${''} ${title.slice(5, 12)}`
              : `${title.slice(0, 6)} ${''} ${title.slice(6, 12)}`
              }
            </button>
          ))
        }
      </div>
      
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
          height: 100vh;
          background: rgba(211, 174, 54, 1);
          padding: 1rem;
        }

        .method-component {
          align-self: center;
          justify-self: center;
          padding: 1.8rem;
          max-width: 800px;
        }

        button {
          padding: 10px;
          border-radius: 10px;
          width: 100%;
          margin: 0 auto;
          margin-bottom: 1rem;
          font-weight: bold;
          font-size: .88rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }

      `}</style>
    </div>
  );
}

export default FetchDisplayData