const MainComponent = ({data}) => (
  <div>
    {data.map(item => {
      return (
        <div>
          <h1>{item.mainTitle}</h1>
          <p>{item.description}</p>
        </div>
      )
    })}
  </div>
);


export default MainComponent