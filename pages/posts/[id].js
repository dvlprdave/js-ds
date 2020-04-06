// import fs from 'fs'
// import path from 'path'
import Layout from '../../layout/layout'

import useSWR from 'swr';
const fetcher = (url) => ( fetch(url).then(r => r.json()) )

const Post = () => {
  // console.log(slug);

  const { data, error } = useSWR(
    `../api/data.json`,
    fetcher
  );

  console.log(data);
  

  if (!data) 'Loading...';
  if (error) 'Failed to fetch the description.';
    
  return (
    <Layout>

         <div>
           {/* {data[0]} */}
         </div>

     {/* {data.map((item, i) => {
       return (
         <div key={i}>
           {item.title}
         </div>
       )
     })} */}


      <style jsx>{`
        h1, p {
          text-align: center;
        }  
      `}</style>
    </Layout>
  )
}

// const Post = ({slug}) => {
//   console.log(slug);

  
    
//   return (
//     <Layout>
//      {slug.map((item, i) => {
//        return (
//          <div>
//            {item.title}
//          </div>
//        )
//      })}


//       <style jsx>{`
//         h1, p {
//           text-align: center;
//         }  
//       `}</style>
//     </Layout>
//   )
// }


// export async function getStaticProps({params}) {
//   // Read file directory
//   const postsDirectory = path.join(process.cwd(), 'data')
//   const filenames = fs.readdirSync(postsDirectory)

//   // Read and parse JSON file
//   const fileData = filenames.map(filename => {
//     const filePath = path.join(postsDirectory, filename)
//     const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))

//     return {
//       filename,
//       content: fileContents,
//     }
//   })

//   return {
//     props: {
//       slug: fileData[0].content
//     },
//   }
// }

// export async function getStaticPaths() {
//   const postsDirectory = path.join(process.cwd(), 'data')
//   const filenames = fs.readdirSync(postsDirectory)

//   // Read and parse JSON file
//   const fileData = filenames.map(filename => {
//     const filePath = path.join(postsDirectory, filename)
//     const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))

//     return {
//       filename,
//       content: fileContents,
//     }
//   })

//   const paths = fileData.map(file => `/posts/${file.id}`)

//   return {
//     paths,
//     fallback: false
//   }

//   // return {
//   //   paths: [
//   //     { params: { id: 'arrays' } },
//   //     { params: { id: 'objects' } }
//   //   ],
//   //   fallback: false
//   // };
// }


export default Post