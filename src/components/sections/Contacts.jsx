import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- Framer Motion Variants ---

// Container for staggered elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Item variant for header and social links
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

// Form slide-in variant
const formSlideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      delay: 0.3, // Delay slightly after header
    },
  },
};

// --- Component Start ---

export const Contacts = () => {
  const SERVER = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // Refs for scroll animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.1 });

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  React.useEffect(() => {
    // Form submission feedback
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("contact-feedback");

    // Define the handler outside to use the same reference for add/remove
    const handleSubmit = (e) => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      button.innerHTML =
        '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      button.disabled = true;

      // Simulate sending (replace with real API if needed)
      fetch(`${SERVER}/portfolio`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setTimeout(() => {
            feedback.textContent =
              "Thank you for reaching out! I'll get back to you soon.";
            button.innerHTML = '<i class="fas fa-paper-plane"></i>Send Message';
            button.disabled = false;
            form.reset();
          }, 1000); // Clear message after 1 second
          setTimeout(() => {
            feedback.textContent = "";
          }, 5000); // Clear message after 5 seconds
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((err) => {
          console.error("Error:", err);
          setTimeout(() => {
            feedback.textContent =
              "Oops! Something went wrong. Please try again later.";
            button.innerHTML = '<i class="fas fa-paper-plane"></i>Send Message';
            button.disabled = false;
          }, 1000); // Clear message after 1 second
        });
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [SERVER]); // Include SERVER in dependency array

  return (
    <section
      id="contact"
      className="section-padding bg-dark-teal text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--lavender) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* SECTION HEADER - Staggered Fade-Up */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-60 h-3 bg-lavender mx-auto rounded-full mb-4"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-cream text-lg max-w-2xl mx-auto text-balance"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* CONTACT FORM - Slide In from Right */}
          <motion.div
            ref={formRef}
            className="bg-white/10 backdrop-blur-custom rounded-2xl p-8 lg:p-12 border border-white/20"
            variants={formSlideIn}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <form
              action="#"
              method="POST"
              id="contact-form"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cream block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-cream block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-cream block">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom resize-none transition-all"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-lavender text-dark-teal px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 card-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // Add infinite subtle pulse animation on initial load
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </motion.button>
            </form>
            <div
              id="contact-feedback"
              className="mt-6 text-center text-lg font-semibold text-lavender"
            ></div>
          </motion.div>

          {/* SOCIAL LINKS - Staggered Fade-Up */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            variants={containerVariants} // Reusing container for stagger
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"} // Using form visibility to trigger social links after form
          >
            <motion.a
              href="https://github.com/JuanLuther"
              target="_blank"
              className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jerick-dale-mendoza-343b45190/"
              target="_blank"
              className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/jerickdalealejandromendoza"
              target="_blank"
              className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <i className="fab fa-facebook text-xl"></i>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
