import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Metrics() {
    return (
        <section className="metrics">
          <div className="container">
            <h1 className="display-m">Our Metrics Tell the Story</h1>
            <p className="body-m">
              Our metrics component gives you the inside scoop on your success and
              helps you stay on top of your game in style.
            </p>
    
            {/* Cards */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="400" className="metric">
                <span className="display-m">10k+</span>
                <h4 className="body-m">Website launched</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="metric">
                <span className="display-m">931k+</span>
                <h4 className="body-m">Projects created with Anima</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="metric">
                <span className="display-m">240k+</span>
                <h4 className="body-m">New users joined Anima</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="100" className="metric">
                <span className="display-m">12k+</span>
                <h4 className="body-m">Teams used Anima</h4>
              </div>
            </div>
            {/* /Cards */}
          </div>
        </section>
      )
}


export default Metrics;