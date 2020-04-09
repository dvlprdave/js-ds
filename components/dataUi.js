const DataUi = ({
  data, idType, filteredData, filterCategory, 
  uniqueArray, setFilterCategory, 
  setSelectedMethod, componentFilter, 
  renderSelectedCard, selectedMethod}) => (
  <>
    {componentFilter.map(title => (
        <button
          onClick={() => {
            // setFilterCategory(title);
            setSelectedMethod(title)
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
          <p>{data.array.mainDescription}</p>
        </div>
      }
    </div>

    <div>{renderSelectedCard(selectedMethod)}</div>
  </>
)

export default DataUi