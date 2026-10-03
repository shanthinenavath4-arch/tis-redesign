import { motion } from "framer-motion";
import {
  BookOpen,
  Globe2,
  Lightbulb,
  Users,
  ArrowUpRight,
} from "lucide-react";
import "./Academics.css";

const features = [
  {
    number: "01",
    icon: BookOpen,
    title: "Academic Excellence",
    description:
      "A learning environment designed to strengthen knowledge, critical thinking and intellectual curiosity.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Learning Beyond Books",
    description:
      "Experiential learning encourages students to question, explore, create and turn ideas into meaningful experiences.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Students are encouraged to understand diverse perspectives and develop the confidence to engage with a changing world.",
  },
  {
    number: "04",
    icon: Users,
    title: "Holistic Development",
    description:
      "Academics, sports, creativity and leadership come together to support the development of well-rounded individuals.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Academics() {
  return (
    <section className="academics-section" id="academics">
      <div className="container">
        <div className="academics-top">
          <motion.div
            className="academics-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="academics-label">
              02 / THE TIS EXPERIENCE
            </span>

            <h2>
              Learning designed
              <br />
              for <em>life.</em>
            </h2>
          </motion.div>

          <motion.div
            className="academics-intro"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>
              At TIS, education extends beyond academic achievement.
              Students are encouraged to think independently, discover
              their strengths and develop the skills needed to thrive
              beyond the classroom.
            </p>

            <a href="#campus" className="academics-explore">
              Explore student life
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="academics-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="academic-card"
                key={feature.number}
                variants={cardVariants}
              >
                <div className="academic-card-top">
                  <span className="academic-number">
                    {feature.number}
                  </span>

                  <div className="academic-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="academic-card-content">
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>

                <div className="academic-card-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Academics;