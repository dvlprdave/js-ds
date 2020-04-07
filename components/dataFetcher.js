import useSWR from "swr";
import DisplayArrays from './arrayData';

function DataFetcher() {
  // Fetch data from file
  const { data, error } = useSWR('/api/randomQuote');

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  // map over all the titles and place them in a Set so each title is unique
  const uniqueCategories = [...new Set(data.map(title => title.title))]
  
  return (
    <>
    <DisplayArrays 
      titles={data}
      categories={uniqueCategories}/>
    </>
  );

}


export default DataFetcher