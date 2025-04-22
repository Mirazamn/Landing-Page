import '../variable.css'
import '../../index.css'
import './style.css'

import {SarahK, MichaelL, LaurenM, StarIcon, EmptyStar
} from '../../asstes/plan'



function Feedbacks() {
    return (
        <section className="feedbacks">
          <div className="container">
            <div className="txt">
              <h3 className="display-m">Real Stories from Satisfied Customers</h3>
              <p className="body-m">
                See how our landing page UI kit is making an impact.
              </p>
            </div>
    
            {/* Comments */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="100" className="comment">
                <div className="profile">
                  <img src={SarahK} alt="" />
                  <h3 className="display-xs">Sarah K.</h3>
                  <h6 className="body-s">UX Designer @Brello</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    "I was looking for a way to streamline my design process and
                    the Anima's Landing Page UI Kit was a lifesaver! The intuitive
                    design and ease of customisation have saved me hours of time
                    and effort. Highly recommend!"
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="comment">
                <div className="profile">
                  <img src={MichaelL} alt="" />
                  <h3 className="display-xs">Michael L.</h3>
                  <h6 className="body-s">Creative Director @Yo</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    “The Landing Page UI Kit has been a game changer for my
                    agency. The pre-designed components and templates have helped
                    us deliver projects faster and with more consistency. Great
                    job!"
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={EmptyStar} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="comment">
                <div className="profile">
                  <img src={LaurenM} alt="" />
                  <h3 className="display-xs">Lauren M.</h3>
                  <h6 className="body-s">UI Designer @Boo</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    "Anima’s Landing Page UI Kit has become a staple in my design
                    toolkit. Whether I'm working on a new project or need to make
                    updates to an existing one, this kit has everything I need to
                    get the job done quickly and efficiently."
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
            </div>
            {/* /Comments */}
          </div>
        </section>
      )
}


export default Feedbacks;