const Banner = () => (
  <section className='main'>
    <div className='container'>
      <div className='row'>
        <h2>
          <div className='line'>
            <span>Creating unique brands is</span>
          </div>
          <div className='line'>
            <span>what we do</span>
          </div>
        </h2>
      </div>
    </div>
    <style jsx>{`
      .main {
        height: 50vh; 
        height: calc(var(--vh, 1vh) * 50);
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
        position: relative;
        height: 56px;
        margin-bottom: 8px;
        overflow: hidden;
      }
    
    `}</style>
  </section>
)

export default Banner