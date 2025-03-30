import { RevealOnScroll } from "../RevealOnScroll";
import seun from "../../assets/seun.png";

export const Home = ({ isDarkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5"></div>
      
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8 md:py-0">
        <RevealOnScroll>
          <div className="text-center md:text-left z-10 flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight animate-fade-up">
              Hi, I'm Ajayi Oluwaseun
            </h1>

            <p className="text-secondary text-base sm:text-lg mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              I'm a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="bg-primary text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-primary/50 text-primary py-2.5 sm:py-3 px-6 rounded-lg font-medium transition-all duration-300 
                hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 hover:bg-primary/10 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="relative flex-1 flex justify-center items-center animate-scale mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <img
                  src={seun}
                  alt="Ajayi Oluwaseun"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-50 animate-float"></div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};