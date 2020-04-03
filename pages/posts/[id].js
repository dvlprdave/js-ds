import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the Data Structure content</p>

      <style jsx>{`
        h1, p {
          text-align: center;
        }  
      `}</style>
    </>
  );
}

export default Post