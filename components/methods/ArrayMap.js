import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
      Prism.highlightAll()
  }, [])
  return(
    <>
      <h1>Array.map()</h1>
      <h2>Iterates over items in an array</h2> 
      <p>The map() method takes in an array and calls a function on each item in that array.</p>
      <p></p>

        <pre>
          <code className='language-javascript'>
          {`
            const myArray = ["Angelica", "Chuckie", "Tommy", "Sussie" ]

            myArray.map((name) => console.log(name))
            // OUTPUT --> Angelica, Chuckie, Tommy, Sussie
          `}
          </code>
        </pre>

        <p>map() is immutable in that a new array is created instead of altering the old array.</p>

        <pre>
          <code className='language-javascript'>
          {`
            const numberArray = [ 2, 3, 4, 5 ]

            const multiply = numberArray.map((number) => console.log(number * 2)) 
            // OUTPUT --> 4, 6, 8, 10

            console.log(numberArray)
            // OUTPUT --> 2, 3, 4, 5
          `}
          </code>
        </pre>

        <h2>Rendering items in React using map()</h2>
        <p>
            In React, it's common to want to render a list based on given data. Using map() within JSX is a helpful method to produce a list efficiently.
        </p>

        <pre>
          <code className='language-jsx'>
          {`
              const rugrats = ["Angelica", "Chuckie", "Tommy", "Sussie" ]

              const Rugratlist = () => (
                <div>
                  <ul>
                    rugrats.map(name => <li key={name}>{name}</li>)}
                  </ul>
                </div>
              )

              // OUTPUT --> 
              /* 
                <ul>
                  <li>Angelica</li>
                  <li>Chuckie</li>
                  <li>Tommy</li>
                  <li>Sussie</li>
                </ul> 
              */
          `}
          </code>
        </pre>
    </>
  )
}       