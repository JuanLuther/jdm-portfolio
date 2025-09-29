import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
} from "../common/FramerMotions.js";
import { SectionHeaderDark } from "../common/headers/SectionHeaderDark.jsx";

export const Contacts = () => {
  const SERVER = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const socialMediaLinks = [
    { href: "https://github.com/JuanLuther", icon: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/jerick-dale-mendoza-343b45190/",
      icon: "fab fa-linkedin",
    },
    {
      href: "https://www.facebook.com/jerickdalealejandromendoza",
      icon: "fab fa-facebook",
    },
  ];

  React.useEffect(() => {
    // Form submission feedback
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("contact-feedback");

    // Ensure the form element exists before adding listeners (important for React/Next)
    if (!form) return;

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
          }, 1000); // Wait 1 second before showing success/resetting
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
          }, 1000); // Wait 1 second before showing error
        });
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [SERVER]); // Added SERVER to dependency array

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
        {/* Animated Header */}
        <SectionHeaderDark
          title="Get In Touch"
          caption="I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          {/* Animated Contact Form Block */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-custom rounded-2xl p-8 lg:p-12 border border-white/20"
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
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
                />
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
              <button
                type="submit"
                className="w-full bg-lavender text-dark-teal px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 card-shadow"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
            <div
              id="contact-feedback"
              className="mt-6 text-center text-lg font-semibold text-lavender"
            ></div>
          </motion.div>

          {/* Animated Social Links Container */}
          <motion.div
            className="flex justify-center gap-6 mt-12"
            variants={containerVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 1.0 }}
          >
            {socialMediaLinks.map((link, index) => (
              <motion.a
                href={link.href}
                target="_blank"
                className="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
                variants={itemVariants}
                key={index}
              >
                <i className={link.icon + " text-xl"}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
