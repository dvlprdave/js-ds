import {useState} from "react";
import useSWR from "swr";

function DisplayArrays() {
  const [filterCategory, setFilterCategory] = useState(null);
  const { data, error } = useSWR('/api/randomQuote');
  
  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  const filterForArrays = data.filter(item => item.id === 'array')
  
  // const uniqueCategories = [...new Set(data.map(title => title.title))]


  const filteredData = filterCategory
    ? data.filter(item => item.id === filterCategory)
    : data;

    console.log(filteredData);
    
  return (
    <>
      {filterForArrays.map((category, i) => (
        <button
          onClick={() => {
            setFilterCategory(category);
          }}
          key={i}
        >
          {category.title}
        </button>
      ))}

      {filterCategory && (
        <button
          onClick={() => {
            setFilterCategory(null);
          }}
        >
          reset
        </button>
      )}

      <div>
        {filteredData.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default DisplayArrays