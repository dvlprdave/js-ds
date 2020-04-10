import Prism from 'prismjs'
import {useEffect} from 'react'

export default () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    return(
        <>
            <h1>This is the Array Map component</h1>
            <p>Some description about mapping arrays</p> 

            <pre>
                <code className='language-javascript'>
                    {`
                        onSubmit(e) {
                            e.preventDefault();
                            const obj = {
                                title: 'Prism',
                                company: 'JavaScript'
                            }
                        }
                    `}
                </code>
            </pre>
        </>
    )
}