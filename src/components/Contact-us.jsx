import Section from "./Section";
import Button from "./Button";

const Contact = () => {
  return (
    <Section className="pt-[6rem] bg-n-8" id="contact">
      <div className="container text-center">
        <h2 className="h2 mb-4">Get in Touch</h2>
        <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2">
          We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Your Phone Number"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-n-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
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
