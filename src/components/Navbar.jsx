import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 glass transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="font-mono text-lg sm:text-xl font-bold text-primary hover:text-secondary transition-colors duration-300 animate-fade-up"
          >
            A<span className="text-blue-500">.O</span>
          </a>

          <button
            className="w-8 h-8 relative cursor-pointer z-40 md:hidden text-primary hover:text-secondary transition-colors duration-300 flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current relative before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-current before:-top-1.5 before:transition-all before:duration-300 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-current after:top-1.5 after:transition-all after:duration-300"
              className={`${menuOpen ? 'before:rotate-45 before:translate-y-1.5 after:-rotate-45 after:-translate-y-1.5' : ''}`}
            ></div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-primary hover:text-secondary transition-colors duration-300 relative group text-sm sm:text-base"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-primary hover:text-secondary transition-colors duration-300 relative group text-sm sm:text-base"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-primary hover:text-secondary transition-colors duration-300 relative group text-sm sm:text-base"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-primary hover:text-secondary transition-colors duration-300 relative group text-sm sm:text-base"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-secondary/20 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};