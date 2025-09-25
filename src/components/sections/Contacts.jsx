import React from "react";

export const Contacts = () => {
  return (
    <section
      id="contact"
      class="section-padding bg-dark-teal text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--lavender) 2px, transparent 2px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div class="w-60 h-3 bg-lavender mx-auto rounded-full mb-4"></div>
          <p class="text-cream text-lg max-w-2xl mx-auto text-balance">
            I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="bg-white/10 backdrop-blur-custom rounded-2xl p-8 lg:p-12 border border-white/20">
            <form action="#" method="GET" id="contact-form" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-cream block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-cream block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-cream block">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows="6"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom resize-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-lavender text-dark-teal px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 card-shadow"
              >
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
            <div
              id="contact-feedback"
              class="mt-6 text-center text-lg font-semibold text-lavender"
            ></div>
          </div>

          {/* Social Links */}
          <div class="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/JuanLuther"
              target="_blank"
              class="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <i class="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jerick-dale-mendoza-343b45190/"
              target="_blank"
              class="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/jerickdalealejandromendoza"
              target="_blank"
              class="w-12 h-12 bg-white/10 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-lavender hover:text-dark-teal transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <i class="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
