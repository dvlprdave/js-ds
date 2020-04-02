import { useRouter } from 'next/router';
import Layout from '../../layout/layout';

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the Data Structure content</p>

      <style jsx>{`
        h1, p {
          text-align: center;
        }  
      `}</style>
    </Layout>
  );
}

export default Post