import Layout from '../../layout/layout'

import fs from 'fs'
import path from 'path'


const Post = ({posts}) => {
    
  return (
    <Layout>
      {posts.map((post) => (
        <p>{post}</p>
      ))
      }

      <style jsx>{`
        h1, p {
          text-align: center;
        }  
      `}</style>
    </Layout>
  )
}


export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'data')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    return {
      filename,
      content: fileContents,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'arrays' } },
      { params: { id: 'objects' } }
    ],
    fallback: false
  };
}


export default Post