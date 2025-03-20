import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Contact = () => {
  
  return (

    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <RevealOnScroll>
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col items-center justify-center text-center">

      <h2 className="text-xl font-bold mb-2">Contact Me</h2>
      <p className="text-gray-600 mb-4">Feel free to reach out to me through any of the platforms below:</p>
      <div className="flex space-x-4">
        <a href="https://instagram.com/seun_exploits" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl">
          <FaInstagram />
        </a>
        <a href="https://github.com/SeunExploits" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ExploitsSeun" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
          <FaTwitter />
        </a>
      </div>
    </div>
    </RevealOnScroll>
    </section>
  );
};