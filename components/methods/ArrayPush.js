import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
    Prism.highlightAll()
}, [])
  return (
    <>
      <h1>Array.push()</h1>
      <p>Adds an element to the end of an array as the last index.</p> 

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          characters.push("Gimli")
          
          console.log(characters)
          // OUTPUT --> Legolas, Aragon, Gandalf, Sauron, Gimli
        `}
        </code>
      </pre>

      <p>Push() mutates the original array and returns the new length of the array.</p>

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          const pushCharacter = characters.push("Gimli")
          
          console.log(pushCharacter)
          // OUTPUT --> 5
        `}
        </code>
      </pre>
    </>
  )
}