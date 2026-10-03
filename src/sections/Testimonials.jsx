import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "The school provides an environment where children are encouraged to learn, explore and become confident individuals.",
    name: "Parent Community",
    role: "TIS Parent",
  },
  {
    quote:
      "The balance between academics, sports and activities creates a truly enriching school experience.",
    name: "Parent Community",
    role: "TIS Parent",
  },
  {
    quote:
      "The supportive environment helps students discover their interests and develop independence.",
    name: "Parent Community",
    role: "TIS Parent",
  },
];

const personalities = [
  {
    name: "Sakshi Malik",
    role: "Olympic Medalist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sports Excellence",
    role: "Inspiring Young Athletes",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Global Exposure",
    role: "Learning Beyond Borders",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span>05 / THE TIS COMMUNITY</span>

          <h2>
            Stories from
            <br />
            <em>our community.</em>
          </h2>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="testimonial-quote-icon">
            <Quote size={25} />
          </div>

          <div className="testimonial-content">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              “{activeTestimonial.quote}”
            </motion.p>

            <div className="testimonial-author">
              <strong>{activeTestimonial.name}</strong>
              <span>{activeTestimonial.role}</span>
            </div>
          </div>

          <div className="testimonial-controls">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>

            <span>
              0{activeIndex + 1} / 0{testimonials.length}
            </span>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Personalities */}
        <motion.div
          className="personalities-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>INSPIRATION & EXPOSURE</span>

            <h3>
              Meet the
              <br />
              <em>inspirations.</em>
            </h3>
          </div>

          <p>
            Exposure to achievers, mentors and diverse experiences
            gives students new perspectives and encourages them
            to imagine what is possible.
          </p>
        </motion.div>

        <div className="personalities-grid">
          {personalities.map((personality, index) => (
            <motion.article
              className="personality-card"
              key={personality.name}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <div className="personality-image">
                <img
                  src={personality.image}
                  alt={personality.name}
                  loading="lazy"
                />

                <div className="personality-overlay" />

                <span className="personality-number">
                  0{index + 1}
                </span>

                <div className="personality-info">
                  <h4>{personality.name}</h4>
                  <span>{personality.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;