import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./Sports.css";

const sports = [
  {
    number: "01",
    name: "Football",
    category: "TEAM SPORT",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "02",
    name: "Swimming",
    category: "AQUATICS",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "03",
    name: "Tennis",
    category: "RACKET SPORT",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=85",
  },

  {
    number: "04",
    name: "Cricket",
    category: "TEAM SPORT",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85",
  },

{
  number: "05",
  name: "Archery",
  category: "PRECISION SPORT",
  image:
    "https://images.unsplash.com/photo-1771784630899-f95d3ba54e5d?auto=format&fit=crop&w=1200&q=85",
},

  {
    number: "06",
    name: "Basketball",
    category: "TEAM SPORT",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85",
  },
];

function Sports() {
  return (
    <section className="sports-section" id="sports">
      <div className="container">

        {/* ========================================
            HEADER
        ======================================== */}

        <motion.div
          className="sports-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div>
            <span className="sports-label">
              03 / BEYOND ACADEMICS
            </span>

            <h2>
              Find your
              <br />
              <em>arena.</em>
            </h2>
          </div>

          <div className="sports-intro">
            <p>
              From competitive sport to personal discovery,
              students are encouraged to challenge themselves,
              build resilience and experience the power of teamwork.
            </p>

            <div className="sports-count">
              <strong>16+</strong>

              <span>
                SPORTS & ACTIVITIES
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================
            SPORTS CARDS
        ======================================== */}

        <div className="sports-track">
          {sports.map((sport, index) => (
            <motion.article
              className="sport-card"
              key={sport.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <img
                src={sport.image}
                alt={sport.name}
                loading="lazy"
              />

              <div className="sport-overlay" />

              <div className="sport-top">
                <span>{sport.number}</span>

                <span>{sport.category}</span>
              </div>

              <div className="sport-bottom">
                <h3>{sport.name}</h3>

                <span className="sport-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================
            FOOTER
        ======================================== */}

        <motion.div
          className="sports-footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <span>
            EXPLORE OUR SPORTS PROGRAM
          </span>

          <a href="#campus">
            Discover more
            <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Sports;