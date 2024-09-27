import React from "react";
import Section from "./Section";
import Button from "./Button";
import { check } from "../assets";
import Header from "./Header";
import Footer from "./Footer";
import Heading from "./Heading";

const commissionBenefits = [
  "Earn top commissions for each client you secure.",
  "Tailor your work hours and projects to fit your schedule",
  "Gain exclusive access to a curated list of potential clients ready to engage with your services.",
  "Receive continuous support and guidance to ensure your success.",
  "Grow your business and reputation in the real estate market",
];

const processSteps = [
  {
    title: "Submit Your Application",
    description:
      "Fill out a simple form to share your expertise and business profile with us.",
  },
  {
    title: "Access Our Database",
    description:
      "Once accepted, we’ll provide you with access to our exclusive customer database. You can reach out to potential clients directly via phone or email to offer your services.",
  },
  {
    title: "Create & Earn",
    description:
      "Close deals and earn competitive commissions for each successful sale",
  },
  {
    title: "Grow Your Network",
    description:
      "Whether you work with our database or build your own clientele, you’ll have the freedom to expand your network and increase your earnings.",
  },
];

const testimonial = {
  content:
    "This platform has been a game-changer for me. The access to the customer database and the support has helped me significantly boost my sales!",
  author: "Sarah Johnson",
  role: "Freelance Designer",
};

const WorkWithUs = () => {
  return (
    <Section crosses id="work-with-us">
      <Header />
      <div className="container mt-16 sm:mt-4 lg:mt-0 md:mt-20 ">
        <Heading
          tag="Commissions"
          title="Why Partner with Us for Commissions?"
          className="mb-4 "
        />
        <p className="text-center body-2 mb-10 text-n-4 md:max-w-[50%] mx-auto">
          Partner with us to unlock growth opportunities in the real estate
          industry. Our platform offers the tools and support you need to
          maximize your earnings and expand your client network.
        </p>

        <h3 className="h3 mb-4">Our Commission Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-n-7 p-5 rounded-lg">
              <h4 className="h6 mb-2">{step.title}</h4>
              <p className="body-2 text-n-4">{step.description}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-4 text-center h3 mb-4">
          Benefits of Partnering with Us
        </h3>
        <ul className="max-w-[35rem] mb-10 md:mb-14 mx-auto">
          {commissionBenefits.map((item, index) => (
            <li className="mb-3 py-3" key={index}>
              <div className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-5">{item}</p>
              </div>
            </li>
          ))}
        </ul>
        <Heading title="Our Mission" className="mb-4" />
        <p className="text-center body-2 mb-10 text-n-4 md:max-w-[50%] mx-auto">
          We're dedicated to empowering artists and creators by connecting them
          with exciting opportunities and providing the tools they need to
          succeed. Our platform is built on the principles of fair compensation,
          creative freedom, and continuous growth.
        </p>
        <h3 className="h3 mb-4">What Our Partners Say</h3>
        <div className="bg-n-7 p-6 rounded-lg mb-10">
          <p className="body-2 mb-4">"{testimonial.content}"</p>
          <p className="body-2 text-n-4">
            {testimonial.author}, {testimonial.role}
          </p>
        </div>

        <h3 className="h3 mb-4">Ready to Start Your Journey?</h3>
        <p className="body-2 mb-6 text-n-4 md:max-w-[50%]">
          Join our community of talented creators and start earning today! Click
          the button below to begin your application process.
        </p>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/"
          >
            Go to the Homepage
          </a>
        </div>
      </div>
      <Footer />
    </Section>
  );
};

export default WorkWithUs;
