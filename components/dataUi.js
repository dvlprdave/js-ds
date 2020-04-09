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

      { (
        <button
          onClick={() => {
            setSelectedMethod('');
          }}
        >
          reset
        </button>
      )}

    <div>{renderSelectedCard(selectedMethod)}</div>
  </>
)

export default DataUi