import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2200&q=90"
          alt="Tulas International School campus"
        />

        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content container">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow-line" />
          TULAS INTERNATIONAL SCHOOL
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Where curiosity
          <br />
          becomes <em>confidence.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          A place where learning extends beyond the classroom,
          shaping confident thinkers, compassionate leaders and
          globally aware individuals.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
        >
          <a href="#about" className="hero-primary">
            Explore TIS
            <ArrowUpRight size={17} />
          </a>

          <a href="#admissions" className="hero-secondary">
            Begin your journey
          </a>
        </motion.div>
      </div>

      {/* Bottom Information */}
      <div className="hero-bottom">
        <div className="hero-location">
          <span className="location-dot" />

          <span>
            Tulas International School
            <small>Dehradun · Uttarakhand</small>
          </span>
        </div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>

          <span className="scroll-icon">
            <ArrowDown size={14} />
          </span>
        </a>

        <span className="hero-index">
          01 <span>/</span> 07
        </span>
      </div>
    </section>
  );
}

export default Hero;