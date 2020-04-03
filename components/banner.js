const Banner = () => (
  <section className='main'>
    <div className='row'>
      <h2>
        You may forget it and that's alright !
      </h2>
      <div className="banner-img">
        <img src='/taxi-programming.png'/>
      </div>
    </div>
    

    <style jsx>{`
      .main {
        margin-bottom: 4rem;
        overflow: hidden;
        min-height: 100vh;

        display: flex;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: space-between;

      }

      h2 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 4.5rem;
        flex: 2;
      }

      .banner-img {
        position: relative;
        height: auto;
        width: 650px;
      }
    
      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }

      @media screen and (max-width: 1296px) {
        h2 {
          font-size: 3.5rem;
          line-height: 3.5rem;
        }
      }

      @media screen and (max-width: 1250px) {
        h2 {
          font-size: 3rem;
        }

        .banner-img {
          width: 500px;
        }
      }

      @media screen and (max-width: 1024px) {
        h2 {
          font-size: 2.5rem;
        }

        .banner-img {
          width: 400px;
        }
      }

      @media screen and (max-width: 1024px) {
        h2 {
          font-size: 2.5rem;
        }

        .banner-img {
          width: 400px;
        }
      }

      @media screen and (max-width: 768px) {
        .row {
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
        }

        h2 {
          flex: 0;
          text-align: center;
        }

        .banner-img {
          width: 300px;
        }
      }

    `}</style>
  </section>
)

export default Banner