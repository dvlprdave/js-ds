import Layout from './../../layout/layout';
import fetch from 'isomorphic-unfetch'
import fs from 'fs'

const Post = ({id}) => (
  <Layout>
    <h1>This is the id: {id}</h1>

    <style jsx>{`
      h1, p {
        text-align: center;
      }  
    `}</style>
  </Layout>
)

export async function getStaticProps() {
  return { 
    params: {id}
  }
}

export async function getStaticPaths() {

  const files = fs.readdirSync('data')
  
  return {
    paths: files.map(filename => ({
      id: filename.replace('js', '')
    })),
    fallback: true
  }
}

export default Post