import './style.css'
import '../../components/variable.css'
import '../../index.css'

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
        <footer>
          <div className="container flex">
            <h5 className="body-s">© 2023 Anima’s Landing Page Ui Kit.</h5>
            <div className="f-social">
              <a href="https://www.youtube.com/" target='_blank'>
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/" target='_blank'>
                <FaInstagram />
              </a>
              <a href="https://github.com/" target='_blank'>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/" target='_blank'>
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </footer>
      );
}


export default Footer;