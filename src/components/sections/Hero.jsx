import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hi, I'm <span className="text-primary">Oluwaseun</span>
              </h1>
              <p className="text-xl md:text-2xl text-black dark:text-gray-300 mb-8">
                Full Stack Developer
              </p>
              <p className="text-lg text-black dark:text-gray-400 mb-8">
                I create beautiful and functional web applications with modern technologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-primary text-gray-500 rounded-full hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl"></div>
                <img
                  src="/images/profile.jpg"
                  alt="Oluwaseun"
                  className="w-full h-full object-cover object-center transform scale-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}; 