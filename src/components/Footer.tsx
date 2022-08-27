import logo from "../files/gymbro-navbar-logo.png";
import "../styles/Footer/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <img className="footer__wrapper__logo" src={logo} alt="gymbro logo" />
        <div className="footer__text-wrapper">
          <span>E-mail</span>
          <span>Phone</span>
          <span>Address</span>
        </div>
        <div className="footer__social-wrapper">
          <a href="https://www.facebook.com/">
            <img
              src="https://img.icons8.com/ios/344/facebook-new.png"
              alt="facebook"
              className="footer__social-wrapper__image"
            ></img>
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="https://img.icons8.com/ios/344/instagram-new--v1.png"
              alt="instagram"
              className="footer__social-wrapper__image"
            ></img>
          </a>
          <a href="https://www.twitter.com/">
            <img
              src="https://img.icons8.com/ios/344/twitter--v1.png"
              alt="twitter"
              className="footer__social-wrapper__image"
            ></img>
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="https://img.icons8.com/ios/344/linkedin-circled--v1.png"
              alt="linkedin"
              className="footer__social-wrapper__image"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
