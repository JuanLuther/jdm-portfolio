import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/components/data/FramerMotions.js";
import { ContactForm } from "@/components/common/forms/ContactForm.jsx";
import SectionDark from "@/components/common/containers/SectionDark.jsx";
import Section from "@/components/common/containers/Section";

export const Contacts = () => {
  const SERVER = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const socialMediaLinks = [
    { href: "https://github.com/JuanLuther", icon: "fa-brands fa-github" },
    {
      href: "https://www.linkedin.com/in/jerick-dale-mendoza-343b45190/",
      icon: "fa-brands fa-linkedin",
    },
    {
      href: "https://www.facebook.com/jerickdalealejandromendoza",
      icon: "fa-brands fa-facebook",
    },
  ];

  return (
    <Section
      title="Get In Touch"
      caption="I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!"
    >
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
              className="w-12 h-12  rounded-full flex items-center justify-center  transition-all duration-300 hover:scale-110 border border-base-content"
              variants={itemVariants}
              key={index}
            >
              <i className={link.icon + " text-xl"}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
