import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { MessageSentCard } from "../cards/MessageSentCard";
import Input from "../inputs/Input";

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
            <Input text={"Name"} id={"name"} placeholder={"Your Name"} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="space-y-2">
            <Input
              text={"Email"}
              id={"email"}
              placeholder={"your.email@example.com"}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input id={"subject"} placeholder={"Subject"} text={"Subject"} />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="space-y-2">
          <Input
            id={"message"}
            placeholder={"Tell me about your project or just say hello!"}
            text={"Message"}
            type={"textarea"}
          />
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
