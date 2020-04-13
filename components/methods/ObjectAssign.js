import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
    Prism.highlightAll()
}, [])
  return (
    <>
      <h1>Object.assign()</h1>
      <p>Copies the values from one object to another object</p> 

      <pre>
        <code className='language-javascript'>
        {`
          const person = { 
            name: 'David', 
            city: 'New York' 
          };
        
          const newObj = Object.assign({}, person)
        
          console.log(newObj);
          // OUTPUT --> {name: 'David, city: 'New York'}
        `}
        </code>
      </pre>

      <p>Object.assign() allows for multiple objects to be used as a copy.</p>

      <pre>
        <code className='language-javascript'>
        {`
          const person = { 
            name: 'David', 
            city: 'New York' 
          }

          const job = {
            title: 'Artist',
            field: 'Digital Art' 
          }
        
          const newObj = Object.assign({}, person, job)
        
          console.log(newObj);
          // OUTPUT --> {name: 'David, city: 'New York', title: 'Artist', field: 'Digital Art'}
        `}
        </code>
      </pre>
    </>
  )
}