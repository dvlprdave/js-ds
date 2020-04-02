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
      }

      .row {
        flex-direction: column;
        justify-content: center;
      }

      h2 {
        font-size: 3rem;
        line-height: 4.2rem;
        font-weight: 700;
      }

      .line {
        z-index: 9;
        position: relative;
        height: 56px;
        margin-bottom: 8px;
        overflow: hidden;
        mix-blend-mode: overlay;
      }
    
      img {
        width: 700px;
        height: auto;
        position: absolute;
        top: 0;
        right: 0;
      }
    `}</style>
  </section>
)

export default Banner