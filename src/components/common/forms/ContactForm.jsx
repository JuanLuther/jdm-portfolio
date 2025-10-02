import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MessageSentCard } from "../cards/MessageSentCard";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvgwrzen");
  if (state.succeeded) {
    return <MessageSentCard />;
  }
  return (
    <div className="bg-white/10 backdrop-blur-custom rounded-2xl p-8 lg:p-12 border border-white/20">
      <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-cream block"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-cream block"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-cream block"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom transition-all"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-cream block"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello!"
            required
            rows="6"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent text-white placeholder-cream/70 backdrop-blur-custom resize-none transition-all"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-lavender text-dark-teal px-8 py-4 rounded-lg font-semibold hover:bg-cream transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 card-shadow"
        >
          {state.submitting ? (
            <>
              <i class="fas fa-spinner fa-spin mr-2"></i>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i>
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
