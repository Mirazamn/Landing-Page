import './style.css'; 
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SubscribeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Get Started?</h2>

        <input
          type="email"
          placeholder="Your email"
          className="email-input"
        />
        <button className="subscribe-btn">Subscribe Now</button>

        <p className="follow-text">Follow us</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            <FaDribbble />
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">
            <FaBehance />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="contact-info">
          <a href="tel:+1234567890" className='follow-text'> <p><strong>Phone:</strong> +123 456 7890</p> </a>
          <a href="mailto:hello@example.com" className='follow-text'> <p><strong>Email:</strong> hello@example.com</p> </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;