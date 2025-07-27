import { useState } from 'react'
import SubscribeModal from '../Modal/app'
import { FaPaintBrush } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { FaCube } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import './style.css'
import '../../components/variable.css'
import '../../index.css'
import Card from './Card/app'



function Features() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="features" id="features">
          <div className="container">
            <h1 className="display-m">Features</h1>
            <p className="body-m">
              These are just a few features you'll get using Anima Landing Page UI Kit.
            </p>
    
            <div className="feature-cards">

                <div data-aos="fade-up" data-aos-delay="100" className="feature-card">
                  <span className="Persimmon">
                      <FaPaintBrush />
                  </span>
                  <h3 className="display-s">Painless Procedures</h3>
                  <p className="body-m">We use the latest pain-free techniques and anesthesia to make sure your visit is as comfortable as possible</p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <FaArrowRightLong />
                      </h6>
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="feature-card">
                  <span className="Observatory">
                      <FaCheckDouble />
                  </span>
                  <h3 className="display-s">Responsive Design</h3>
                  <p className="body-m"> No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile. </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <FaArrowRightLong />
                      </h6>
                  </a>
                </div>


                <div data-aos="fade-up" data-aos-delay="300" className="feature-card">
                  <span className="Sweet-Corn">
                      <FaCube />
                  </span>
                  <h3 className="display-s">No Code Needed</h3>
                  <p className="body-m"> Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease. </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <FaArrowRightLong />
                      </h6>
                  </a>
                </div>

            </div>
          </div>


          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}


export default Features;