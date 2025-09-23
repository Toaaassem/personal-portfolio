import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaGithub,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

function Getintouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uann7oc", // ✅ service ID
        "template_19japm3", // ✅ template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rFdOAJYDzHe1Z7lXd" // ✅ public key
      )
      .then(
        (result) => {
          console.log("Message sent ✅", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Failed ❌", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gradient-to-r from-zinc-900 via-black to-zinc-900" id="contact">
      {/* Form Box */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-zinc-900 p-8 sm:p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Get in Touch
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex items-center rounded-lg mb-4 p-3 bg-zinc-800 hover:border hover:border-pink-500 transition">
            <FaUser className="text-pink-400 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center rounded-lg mb-4 p-3 bg-zinc-800 hover:border hover:border-pink-500 transition">
            <FaEnvelope className="text-pink-400 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Message */}
          <div className="flex items-start rounded-lg mb-4 p-3 bg-zinc-800 hover:border hover:border-pink-500 transition">
            <FaRegCommentDots className="text-pink-400 mr-3 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none h-36"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/Toaaassem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-400 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/toaaassem27/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-pink-400 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:toaa.assem33@gmail.com"
            className="text-white text-2xl hover:text-pink-400 transition transform hover:scale-125"
          >
            <FaGoogle />
          </a>
        </div>
      </div>

      <hr className="w-3/4 border-t border-gray-700 my-8" />
<p className="text-neutral-100 text-sm text-center">
  © {new Date().getFullYear()} Toaa Assem. All Rights Reserved.
</p>

    </div>
  );
}

export default Getintouch;
