import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          
          <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <p className="text-dark-300 mb-8 text-center text-lg">
              Feel free to reach out to me through any of the platforms below:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="mailto:seun7674@gmail.com" 
                className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <MdEmail className="text-2xl text-primary" />
                <span className="text-dark-200 font-medium">Email Me</span>
              </a>
              
              <a 
                href="https://github.com/SeunExploits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaGithub className="text-2xl text-dark-200" />
                <span className="text-dark-200 font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/oluwaseun-ajayi-sam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-600/50 hover:bg-blue-600/70 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaLinkedin className="text-2xl text-white" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://x.com/ExploitsSeun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-green-400/50 hover:bg-blue-400/70 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaTwitter className="text-2xl text-white" />
                <span className="text-white font-medium">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};