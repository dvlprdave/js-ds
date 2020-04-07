const DisplayData = ({filteredData, filterCategory, uniqueArray, setFilterCategory }) => (
  <>
    {uniqueArray.map(category => (
        <button
          onClick={() => {
            setFilterCategory(category);
          }}
          key={category}
        >
          {category}
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
)

export default DisplayData