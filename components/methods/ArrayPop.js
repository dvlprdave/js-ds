import {useEffect} from 'react'
import Prism from 'prismjs'

export default () => {
  useEffect(() => {
    Prism.highlightAll()
}, [])
  return (
    <>
      <h1>Array.pop()</h1>
      <p>Removes the last index from an array.</p> 

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          characters.pop()
          
          console.log(characters)
          // OUTPUT --> Sauron
        `}
        </code>
      </pre>

      <p>Pop() mutates the original array. The return value is the removed element.</p>

      <pre>
        <code className='language-javascript'>
        {`
          const characters = ["Legolas", "Aragon", "Gandalf", "Sauron"]

          const removedCharacter = characters.pop()
          
          console.log(removedCharacter)
          // OUTPUT --> Sauron
        `}
        </code>
      </pre>
    </>
  )
}