import { ArrowUpRight, ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo">
              T
            </div>

            <div>
              <strong>TULAS</strong>
              <span>INTERNATIONAL SCHOOL</span>
            </div>
          </div>

          <div className="footer-heading">
            <span>LET'S CONNECT</span>

            <h2>
              Start a
              <br />
              <em>conversation.</em>
            </h2>

            <a
              href="mailto:admissions@tis.edu.in"
              className="footer-email"
            >
              admissions@tis.edu.in
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        {/* GRID */}
        <div className="footer-grid">

          {/* Explore */}
          <div className="footer-column">
            <span className="footer-label">
              EXPLORE
            </span>

            <a href="#about">About TIS</a>
            <a href="#academics">Academics</a>
            <a href="#sports">Sports</a>
            <a href="#campus">Campus Life</a>
            <a href="#admissions">Admissions</a>
          </div>

          {/* Visit */}
          <div className="footer-column">
            <span className="footer-label">
              VISIT
            </span>

            <p>
              Tulas International School
              <br />
              Dehradun, Uttarakhand
              <br />
              India
            </p>
          </div>

          {/* Social */}
          <div className="footer-column">
            <span className="footer-label">
              FOLLOW
            </span>

            <div className="footer-socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Facebook"
              >
                f
              </a>

            </div>
          </div>

          {/* Back to top */}
          <div className="footer-column footer-top-button">

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
              <span>BACK TO TOP</span>
            </button>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Tulas International School
          </span>

          <span>
            Designed & developed with intention.
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;