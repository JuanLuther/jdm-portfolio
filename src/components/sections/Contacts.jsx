import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../common/FramerMotions.js";
import { SectionHeaderDark } from "../common/headers/SectionHeaderDark.jsx";
import { ContactForm } from "../common/forms/ContactForm.jsx";

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

  return (
    <section
      id="contact"
      className="min-h-screen section-padding bg-dark-teal text-white relative overflow-hidden"
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
          <ContactForm />

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
