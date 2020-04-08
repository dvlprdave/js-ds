const DataUi = ({data, idType, filteredData, filterCategory, uniqueArray, setFilterCategory }) => (
  <>
    {uniqueArray.map(title => (
        <button
          onClick={() => {
            setFilterCategory(title);
          }}
          key={title}
        >
          {title}
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
      {filterCategory 
        ? 
        filteredData.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        }) 
        : 
        <div>
          <h2>{data.array.title}</h2>
          <p>{`{data.${idType}.mainDescription}`}</p>
        </div>
      }
    </div>
  </>
)

export default DataUi