import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Users,
} from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    text: "Build knowledge through curiosity, exploration and meaningful learning experiences.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Explore",
    text: "Discover new interests through sport, creativity, technology and life beyond the classroom.",
  },
  {
    number: "03",
    icon: Users,
    title: "Belong",
    text: "Grow within a supportive community that encourages confidence, connection and character.",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        {/* TOP */}
        <motion.div
          className="experience-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="experience-label">
            06 / EXPERIENCE TIS
          </span>

          <span className="experience-location">
            DEHRADUN · INDIA
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <div className="experience-main">

          <motion.div
            className="experience-heading"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              More than
              <br />
              <em>a school.</em>
            </h2>
          </motion.div>

          <motion.div
            className="experience-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <span className="experience-intro-label">
              THE TIS EXPERIENCE
            </span>

            <p>
              Every day at TIS is an opportunity to discover
              something new. Learning extends beyond lessons,
              creating space for students to think, participate,
              connect and grow into confident individuals.
            </p>

            <a href="#admissions" className="experience-link">
              Discover TIS
              <span>
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* EXPERIENCE CARDS */}
        <motion.div
          className="experience-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-card"
                key={item.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <div className="experience-card-top">
                  <span>{item.number}</span>

                  <div className="experience-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="experience-card-content">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <span className="experience-card-line" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="experience-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <span>
            LEARN · EXPLORE · CONNECT · GROW
          </span>

          <span>
            06 / 07
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;