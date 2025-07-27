import './style.css'
import '../../components/variable.css'
import '../../index.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function Contacts() {
    return (
        <section className="contacts" id="contacts">
          <div className="container">
            <h1 className="display-m">Let’s get in touch!</h1>
            <p className="body-m">
              Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.
            </p>
    
            <div className="wraper flex">
              {/* Left side: Contact info and social media */}
              <div className="social flex">
                <div className="contact-details">
                  <a href="tel:+1234567890">
                    <h2 data-aos="fade-right" data-aos-delay="100" className="body-m flex">
                      <FaPhoneAlt/> +012 345 6789
                    </h2>
                  </a>

                  <a href="mailto:hello@example.com">
                    <h2 data-aos="fade-right" data-aos-delay="200" className="body-m flex">
                      <IoMailOutline /> hello@example.com
                    </h2>
                  </a>

                </div>
    
                <div data-aos="fade-right" data-aos-delay="300" className="social-media flex">
                  <h3 className="display-xs">Connect with us</h3>
                  <div className="social-links flex">
                    <a href="https://instagram.com" target='_blank'>
                      <FaInstagram className='img'/>
                    </a>
                    <a href="https://dribbble.com" target='_blank'>
                      <FaDribbble className='img'/>
                    </a>
                    <a href="https://behance.net" target='_blank'>
                      <FaBehance className='img'/>
                    </a>
                    <a href="https://x.com" target='_blank'>
                      <FaTwitter className='img'/>
                    </a>
                  </div>
                </div>
              </div>
    
              {/* Right side: Contact form */}
              <form className="flex">
                <div data-aos="fade-up" className="field flex">
                  <label htmlFor="name">
                    <FaUser />
                  </label>
                  <input type="text" id="name" placeholder="Full Name" required />
                </div>
    
                <div data-aos="fade-up" data-aos-delay="100" className="field flex">
                  <label htmlFor="email">
                    <IoMailOutline />
                  </label>
                  <input type="email" className="body-m" id="email" placeholder="Email" required />
                </div>
    
                <a data-aos="zoom-in" data-aos-delay="200" href="#contacts">
                  <button className="display-x">Submit</button>
                </a>
              </form>
            </div>
          </div>
        </section>
      );
}


export default Contacts;  // export the component