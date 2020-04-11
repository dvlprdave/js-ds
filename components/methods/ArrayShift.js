import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
    Prism.highlightAll()
}, [])
  return (
    <>
      <h1>Array.shift()</h1>
      <p>Removes the first item in an array.</p> 

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          characters.shift()
          
          console.log(characters)
          // OUTPUT --> Aragon, Gandalf, Sauron
        `}
        </code>
      </pre>
      
      <p>Shift() mutates the originl array. The returned value from shift() is the removed element</p>

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          const shiftedCharacter = characters.shift()
          
          console.log(characters)
          // OUTPUT --> Legolas
        `}
        </code>
      </pre>
    </>
  )
}