import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Campus", href: "#campus" },
    { label: "Sports", href: "#sports" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a
          href="#home"
          className="brand"
          aria-label="Tulas International School home"
          onClick={closeMenu}
        >
          <span className="brand-mark">T</span>

          <span className="brand-text">
            TULAS
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />

          <a href="#admissions" className="nav-cta">
            Apply Now
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${isOpen ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="mobile-apply"
            onClick={closeMenu}
          >
            Apply Now
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <div className="mobile-theme">
          <span>Appearance</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;