import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import "./Admissions.css";

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <div className="container">

        {/* ================================
            ADMISSIONS HEADER
        ================================= */}

        <motion.div
          className="admissions-content"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LEFT */}
          <div className="admissions-heading">
            <span className="admissions-label">
              07 / ADMISSIONS
            </span>

            <h2>
              Begin the
              <br />
              <em>journey.</em>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="admissions-copy">

            <div className="admissions-intro">
              <Sparkles
                size={18}
                strokeWidth={1.5}
              />

              <span>
                YOUR NEXT CHAPTER STARTS HERE
              </span>
            </div>

            <p>
              Every student's journey begins with the
              right environment. At Tulas International
              School, curiosity, confidence and character
              come together to shape a meaningful future.
            </p>

            <div className="admissions-actions">

              <a
                href="#contact"
                className="admission-primary"
              >
                Enquire now
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#contact"
                className="admission-secondary"
              >
                Admissions information
              </a>

            </div>

          </div>

        </motion.div>

        {/* ================================
            INFO STRIP
        ================================= */}

        <motion.div
          className="admission-info-grid"
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

          {/* LOCATION */}
          <motion.div
            className="admission-info"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >
            <div className="admission-info-icon">
              <MapPin
                size={18}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span>VISIT US</span>

              <strong>
                Dehradun, Uttarakhand
              </strong>
            </div>
          </motion.div>

          {/* ADMISSIONS */}
          <motion.div
            className="admission-info"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >
            <div className="admission-info-icon">
              <CalendarDays
                size={18}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span>ADMISSIONS</span>

              <strong>
                Start your enquiry
              </strong>
            </div>
          </motion.div>

          {/* DISCOVER */}
          <motion.div
            className="admission-info admission-info-last"
            variants={{
              hidden: {
                opacity: 0,
                y: 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            }}
          >
            <div className="admission-info-icon">
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <span>DISCOVER</span>

              <strong>
                Explore TIS
              </strong>
            </div>
          </motion.div>

        </motion.div>

        {/* ================================
            CLOSING LINE
        ================================= */}

        <motion.div
          className="admissions-closing"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <span>
            A place to learn.
          </span>

          <span>
            A place to grow.
          </span>

          <span>
            A place to belong.
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Admissions;