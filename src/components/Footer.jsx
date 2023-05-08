import { PageLinks } from "../data";
import { PageIcons } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {PageIcons.map((icon) => {
          return (
            <a
              key={icon.id}
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className={icon.name}></i>
            </a>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
