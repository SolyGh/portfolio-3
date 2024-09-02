import { FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer17">
      <div className="footer__container17 container17 grid17">
        <div className="footer__socials17">
          <a href="" className="footer__socials-link17">
            <FaTwitter />
          </a>

          <a href="" className="footer__socials-link17">
            <FaDribbble />
          </a>

          <a href="" className="footer__socials-link17">
            <FaBehance />
          </a>
        </div>

        <p className="footer__copyright17 text-cs17">
          &copy;2023<span>All Rights</span>Reserved
        </p>

        <p className="footer__copyright17 text-cs17">
          Developed by <span>Soliman</span>Ghonaim
        </p>
      </div>
    </footer>
  );
};

export default Footer;
