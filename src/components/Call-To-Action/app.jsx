import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import '../Hero/style.css'
import '../../components/variable.css'
import '../../index.css'
import './style.css'

import {CallToAction
} from '../../asstes/plan'


function CTA() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="hero">
          <div className="container flex">
            <img data-aos="zoom-in-right" src={CallToAction} alt="" />
    
            <div data-aos="fade-left" className="hero-txt">
              <h1 className="display-l" id='second-hero'>Get Landing Page UI Kit Today!</h1>
              <p className="body-l">
                Break the Figma limits and explore the endless possibilities with
                Anima.
              </p>
              <div className="buttons">
                <a 
                    onClick={() => setModalOpen(true)}>
                  <button className="cta display-x">
                    Get Started
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}


export default CTA;