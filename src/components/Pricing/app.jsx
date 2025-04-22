import { useState } from 'react';
import SubscribeModal from '../Modal/app';

import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Plans() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="plan">
          <div className="container">
            <h1 className="display-m">Pick Your Perfect Plan</h1>
            <p className="body-m">
              Find the perfect plan for your business with our flexible pricing
              options.
            </p>
    
            <div className="plan-cards flex">
              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
                <h6 className="body-l">Free</h6>
                <h2><span className="display-l">$0</span>/ month</h2>
                <h4 className="body-m">Best for Small Teams or Individuals.</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x">Get Started</button></a>
              </div>
              {/* Free Plan */}
    
              {/* Professional Plan */}
              <div data-aos="fade-up" data-aos-delay="200" className="card">
                <h6 className="body-l">Professional</h6>
                <h2><span className="display-l">$19</span>/ month</h2>
                <h4 className="body-m">Ideal for Growing Companies.</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x">Get Started</button></a>
              </div>
              {/* Professional Plan */}
    
              {/* Enterprise Plan */}
              <div data-aos="zoom-in" data-aos-delay="100" className="card enterprise">
                <h6 className="body-l">Enterprise</h6>
                <h2><span className="display-l">$49</span>/ month</h2>
                <h4 className="body-m">Ultimate for Enterprise Solutions.</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Write feature details here</li>
                </ul>
                <a 
                    onClick={() => setModalOpen(true)}>
                  <button className="display-x">
                    Get Started <img src="./assets/button-icons/size=16-13.svg" alt="" />
                  </button>
                </a>
              </div>
              {/* Enterprise Plan */}

            </div>
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default Plans;