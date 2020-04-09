import Link from 'next/link'

const Card = ({ title, img }) => {
  return (
    <div className='card-wrapper'>

      <div className="card-heading">
        <h2>
          {title}
        </h2>
      </div>

      <div className="card-img">
        <Link href='/array' as={`/${title}`}>
          <img src={img} alt="card image" />
        </Link>
      </div>

      <style jsx>{`
        .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
          width: 30rem;
        }

        .card-img {
          cursor: pointer;
          transition: 400ms ease-in-out;
        }

        .card-img:hover {
          filter: grayscale(1);
        }

        img {
          width: 300px;
          height: auto;
        }

        @media screen and (max-width: 768px) {
          .card-img {
          width: 300px;
          }
        }
      `}</style>
    </div>
  )
}

const CardContainer = () => (
  <main className='card-section'>
    <h1>JS Data Structures</h1>
    <div className='card-container'>
      <Card title='Arrays' img='/arrays.png' />
      <Card title='Objects' img='/objects.png' />
    </div>

    <style jsx>{`
      .card-section {
        opacity: 1;
        text-align: center;
      }

      h1 {
        font-size: 2.5rem;
      }

      .card-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>
  </main>
)

export default CardContainer