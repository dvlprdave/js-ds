import Layout from '../../layout/layout'

import useSWR from 'swr';

const fetcher = (url) => ( fetch(url).then(r => r.json()) )

const Post = () => {

  const { data, error } = useSWR(
    `/api/randomQuote`,
    fetcher
  );

  console.log(data);

  if (!data) 'Loading...';
  if (error) 'Failed to fetch the description.';
    
  return (
    <Layout>
     {data.map((item, i) => {
       return (
         <div key={i}>
           {item.title}
         </div>
       )
     })}

    <style jsx>{`
      h1, p {
        text-align: center;
      }  
    `}</style>
    </Layout>
  )
}

export default Post