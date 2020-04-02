const Banner = () => (
  <section className='main'>
    <div className='row'>
      <h2>
        <div className='line'>
          <span>You may forget it</span>
        </div>
        <div className='line'>
          <span>and that's alright !</span>
        </div>
      </h2>
    </div>
    
    <img src='/taxi-programming.png'/>

    <style jsx>{`
      .main {
        margin-top: 8rem;
        margin-bottom: 4rem;
        overflow: hidden;

      }

      .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 60vh;
        margin-left: 6rem;
      }

      h2 {
        font-size: 4rem;
        line-height: 4.5rem;
        font-weight: 700;
      }

      .line {
        opacity: 1;
        z-index: 100;
        position: relative;
        height: 68px;
        margin-bottom: 8px;
        overflow: hidden;
      }
    
      img {
        width: 700px;
        height: auto;
        position: absolute;
        top: 20px;
        right: 20px;
      }

      @media screen and (max-width: 1340px) {
        h2 {
          font-size: 3rem;
          line-height: 3.8rem;
        }
        img {
          width: 600px;
          top: 40px;
        }

        .line {
          height: 60px;
        }
      }

      @media screen and (max-width: 1150px) {
        h2 {
          font-size: 2.8rem;
          line-height: 3rem;
        }
        img {
          width: 550px;
          top: 70px;
        }

        .line {
          height: 55px;
        }
      }

      @media screen and (max-width: 768px) {
        h2 {
          font-size: 3rem;
        }

        img {
          width: 500px;
        }
      }
      
    `}</style>
  </section>
)

export default Banner