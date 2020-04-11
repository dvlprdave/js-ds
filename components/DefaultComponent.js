const DefaultComponent = ({data}) => (
  <div>
    {data.map((item, i) => {
      return (
        <div key={i}>
          <h1>{item.mainTitle}</h1>
          <p>{item.description}</p>
        </div>
      )
    })}
  </div>
);


export default DefaultComponent