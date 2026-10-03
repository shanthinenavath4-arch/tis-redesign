import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import "./Campus.css";

function Campus() {
  return (
    <section className="campus-section" id="campus">
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="campus-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="campus-label">
              04 / CAMPUS LIFE
            </span>

            <h2>
              A place to
              <br />
              <em>belong.</em>
            </h2>
          </div>

          <p>
            Surrounded by the natural beauty of Dehradun, the TIS
            campus is designed to give students space to learn,
            explore, connect and grow.
          </p>
        </motion.div>

        {/* Main Visual */}
        <div className="campus-visual">

          <motion.div
            className="campus-main-image"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=85"
              alt="Tulas International School campus"
            />

            <div className="campus-image-overlay" />

            <div className="campus-image-caption">
              <span>THE TIS CAMPUS</span>
              <span>DEHRADUN · INDIA</span>
            </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            className="campus-info-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            <div className="campus-card-icon">
              <MapPin size={18} />
            </div>

            <span className="campus-card-label">
              OUR LOCATION
            </span>

            <h3>
              Dehradun,
              <br />
              Uttarakhand
            </h3>

            <p>
              A peaceful setting that gives students the
              freedom to focus, discover and grow.
            </p>

            <a href="#admissions">
              Explore the campus
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Small Image */}
          <motion.div
            className="campus-small-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning"
            />
          </motion.div>
        </div>

        {/* Campus Features */}
        <motion.div
          className="campus-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {[
            {
              number: "01",
              title: "Learn",
              text: "Purpose-built spaces that encourage curiosity and focused learning.",
            },
            {
              number: "02",
              title: "Explore",
              text: "Open spaces and activities that encourage discovery beyond the classroom.",
            },
            {
              number: "03",
              title: "Connect",
              text: "A community where students build friendships and learn together.",
            },
            {
              number: "04",
              title: "Grow",
              text: "An environment designed to develop confidence, character and independence.",
            },
          ].map((item) => (
            <motion.div
              className="campus-feature"
              key={item.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
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
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Campus;