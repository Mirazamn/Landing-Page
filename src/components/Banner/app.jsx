import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {GetLandingImg
} from '../../asstes/plan'

function GetLanding() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="banner">
          <div className="container flex">
    
            <div data-aos="fade-right" data-aos-delay="100" className="banner-txt">
              <h1 className="display-l">Get Landing Page UI Kit Today!</h1>
              <p>Break the Figma limits and explore the endless possibilities with Anima.</p>
              <a onClick={() => setModalOpen(true)}>
                <button className="display-x flex">
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
    
            <img data-aos="zoom-in" data-aos-delay="200" src={GetLandingImg} alt=""/>
            
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default GetLanding;  // export the component