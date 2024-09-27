import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Section from "./Section";
import Button from "./Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c5hskvb", // Your Service ID
        "template_bo0aqdj", // Replace with your EmailJS template ID
        form.current,
        "FuolFOJRv6yZbMTPG" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    // Optionally reset the form after submission
    e.target.reset();
  };

  return (
    <Section className="pt-[6rem] bg-n-8" id="contact">
      <div className="container text-center">
        <h2 className="h2 mb-4">Get in Touch</h2>
        <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
          We’d love to hear from you! Fill out the form below and we’ll get back
          to you as soon as possible.
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="user_phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
          <p className="mt-10 body-1 max-w-3xl mx-auto mb-8 text-n-2"></p>
          <Button href="/work-with-us" className="w-full">
            Wanna Work With Us?
          </Button>
        </form>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#"
          >
            Go to the top.
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
