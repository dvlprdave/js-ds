import {useState} from "react";
import useSWR from "swr";

import * as Cards from './methods'
import Navbar from '../components/Navbar'
import MainComponent from './DefaultComponent'

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

        {mainComponentFilter.map((item) => <h1>{item.mainTitle}</h1>)}

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
      
      <div>
        <Navbar />
        <div className='method-component'> 
          {renderSelectedCard(selectedMethod)}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 200px 1fr;
          height: 100vh;
        }

        .method-list {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(211, 174, 54, 1);
          text-align: center;
          padding: 1rem;
        }

        .method-component {
          margin: 0 auto;
          padding: 1.8rem;
          max-width: 800px;
        }

        button {
          width: 100%;
          margin: 0 auto;
          margin-bottom: 1rem;
          padding: 6px 10px;
          border-radius: 10px;
          font-size: .88rem;
          font-weight: bold;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }

        @media screen and (max-width: 650px) {
          .wrapper {
            grid-template-columns: 1fr;
          }

          .method-list {
            display: none;
          }

        }

      `}</style>
    </div>
  );
}

export default FetchDisplayData