import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
    Prism.highlightAll()
}, [])
  return (
    <>
      <h1>Array.unshift()</h1>
      <p>Adds a given amount of elements to the start of an array.</p> 

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          characters.unshift("Frodo", "Sam")
          
          console.log(characters)
          // OUTPUT --> Frodo, Sam, Legolas, Aragon, Gandalf, Sauron
        `}
        </code>
      </pre>

      <p>Unshift() mutates the original array and the returned result is the new length of the array </p>

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          const unshiftCharacters = characters.unshift("Frodo", "Sam")
           
          console.log(unshiftCharacters)
          // OUTPUT --> 6
        `}
        </code>
      </pre>
    </>
  )
}