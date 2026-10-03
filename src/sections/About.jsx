import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./About.css";

const stats = [
  {
    value: "2012",
    label: "Established",
  },
  {
    value: "22+",
    label: "Acres of Campus",
  },
  {
    value: "16+",
    label: "Sports",
  },
  {
    value: "24×7",
    label: "Student Care",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-number">01 / ABOUT TIS</span>

          <h2>
            Education that
            <br />
            goes <em>beyond</em>
            <br />
            the classroom.
          </h2>
        </motion.div>

        {/* Main About Content */}
        <div className="about-grid">

          {/* Image */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
              alt="School campus"
            />

            <div className="image-label">
              <span>TIS</span>
              <span>DEHRADUN · INDIA</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="about-small-title">
              OUR PHILOSOPHY
            </span>

            <p className="about-large-text">
              At Tulas International School, education is
              more than academics. It is about discovering
              curiosity, building character and developing
              the confidence to shape the future.
            </p>

            <p className="about-description">
              Set against the natural surroundings of Dehradun,
              TIS provides an environment where students can
              learn, explore, compete and grow. With academics,
              sports, arts and leadership woven into everyday
              life, students are encouraged to discover their
              own potential.
            </p>

            <a href="#academics" className="about-link">
              Discover TIS
              <span>
                <ArrowUpRight size={17} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;