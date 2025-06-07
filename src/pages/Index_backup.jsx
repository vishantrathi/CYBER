import React from "react";
import logo from "../Image/logo.png";
import heroImage from "../Image/hacker1.png";
import service1 from "../Image/s1.png";
import service2 from "../Image/s2.png";
import service3 from "../Image/s3.png";
import aboutImg from "../Image/about1.png";

const HomePage = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">Cyber Security</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#service" className="hover:text-cyan-400">Service</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Stay Safe in the Digital World
          </h1>
          <p className="text-gray-300 text-lg">
            We provide cutting-edge cyber security solutions to protect your digital life.
          </p>
          <a href="#contact" className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition">
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={heroImage} alt="Hacker" className="w-full" />
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[{ img: service1, title: "Network Security", desc: "Protect your network infrastructure from unauthorized access, misuse, or theft." },
            { img: service2, title: "Threat Detection", desc: "Advanced threat detection systems to identify and eliminate cyber threats." },
            { img: service3, title: "Data Protection", desc: "Secure and manage sensitive information against data breaches and leaks." }
          ].map(({ img, title, desc }, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={img} alt={title} className="h-32 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
              <p className="text-center text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center px-6 py-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img src={aboutImg} alt="About us" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12 space-y-6">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-gray-300 text-lg">
            We are a team of cyber security professionals dedicated to safeguarding your digital presence. Our mission is to deliver high-quality protection for individuals and organizations.
          </p>
          <p className="text-gray-400">
            With years of experience and a passion for technology, we offer comprehensive solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded shadow"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
