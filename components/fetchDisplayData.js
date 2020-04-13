import {useState} from "react"
import useSWR from "swr"

import * as Cards from './methods'
import Navbar from '../components/Navbar'
import MainComponent from './DefaultComponent'

function FetchDisplayData({idType}) {
  const [selectedMethod, setSelectedMethod] = useState('')
  const { data, error } = useSWR('/api/randomQuote')
  
  if (error) return <div>Error...</div>
  if (!data) return <div>Loading...</div>

  const componentFilter = data.dataStructures.methods.filter(item => item.id === `${idType}`).map(item => item.component)
  const mainComponentFilter = data.dataStructures.main.map(item => item).filter(item => item.id === `${idType}`)
  
  const renderSelectedCard = (selectedMethod) => {
    if (!selectedMethod)
      return <MainComponent data={mainComponentFilter}/>

    const Card = Cards[selectedMethod]
    return <Card />;
  }
  
  return (
    <div className='wrapper'>
      <div className='method-list'>
        {mainComponentFilter.map((item) => <h1>{item.mainTitle}</h1>)}

        { componentFilter.map(title => (
          <button
            className='method-button'
            onClick={() => {setSelectedMethod(title)}}
            key={title}
          >
            {/* Add space between component names */}
            { idType === 'array' 
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

        {/* <button className='mobile-menu__btn'>Menu</button> */}
      </div>

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: minmax(200px, 200px) 1fr;
          height: 100vh;
        }

        .method-list {
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .method-button {
          width: 100%;
          margin: 0 auto;
          margin-bottom: 1rem;
          padding: 5px 10px;
          border: none;
          border-radius: 10px;
          font-size: .88rem;
          font-weight: bold;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }

        .mobile-menu__btn {
          display: none;
        }


        @media screen and (max-width: 650px) {
          .wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 100px;
          }

          .method-component {
            vertical-align: bottom;
          }

          .method-list {
            grid-row: 2;

            flex-direction: row;
            overflow: auto;
            white-space: nowrap;
          }

          .method-list h1 {
            display: none;
          }

          .method-button {
            width: 30%;
            margin-bottom: 0;
            font-size: .85rem;
            border-radius: 0;
            background: inherit;
            box-shadow: none;
            transition: .3s ease-in-out;
          }

          .method-button:hover {
            transform: scale(1.1);
          }

          .mobile-menu__btn {
            display: block;
            position: fixed;
          }

        }

      `}</style>
    </div>
  )
}

export default FetchDisplayData