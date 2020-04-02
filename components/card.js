const Card = ({title, img}) => {
  return (
    <div className='card-wrapper'>
      <div className="card-heading">
        <h2>
          {title}
        </h2>
      </div>
      <div className="card-img">
        <img src={img} alt="card image"/>
      </div>

      <style jsx>{`
        .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          border: 1px solid #000;
          padding: 2rem 0;
        }

        .card-wrapper:not(:last-child) {
          margin-right: 2rem;
        }

        h2 {
          margin-top: 0;
        }

        img {
          width: 200px;
          heigth: auto;
        }
      `}
      </style>
    </div>
  )
}

const CardContainer = () => (
  <div className='card-container'>
    <Card title='Arrays' img='/arrays.png' />
    <Card title='Objects' img='/objects.png' />

    <style jsx>{`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
    </style>
  </div>
)

export default CardContainer
