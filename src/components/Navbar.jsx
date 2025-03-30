import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 glass transition-all duration-500">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="font-mono text-lg sm:text-xl font-bold text-primary hover:text-secondary transition-all duration-500 animate-fade-up hover:scale-105 transform"
          >
            A<span className="text-blue-500">.O</span>
          </a>

          <button
            className="w-10 h-10 relative cursor-pointer z-40 md:hidden text-primary hover:text-secondary transition-all duration-500 flex items-center justify-center group"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current relative before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-current before:-top-1.5 before:transition-all before:duration-500 after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-current after:top-1.5 after:transition-all after:duration-500
                          ${menuOpen ? 'before:rotate-45 before:translate-y-1.5 after:-rotate-45 after:-translate-y-1.5' : 'group-hover:before:-translate-x-1 group-hover:after:translate-x-1'}`}
            ></div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "mailto:seun7674@gmail.com", label: "Contact" }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary transition-all duration-500 relative group text-sm sm:text-base hover:-translate-y-0.5 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full"></span>
                <span className="absolute -inset-1 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-secondary/20 transition-all duration-500 hover:scale-110 transform"
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

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-xl z-30 md:hidden transition-all duration-500
                   ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 shadow-2xl
                     transform transition-all duration-500 ease-in-out border-r border-gray-200/30 dark:border-gray-700/30
                     ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-8">
            <div className="space-y-6">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "mailto:seun7674@gmail.com", label: "Contact" }
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-secondary 
                           transition-all duration-300 transform hover:translate-x-2 py-4
                           hover:bg-primary/10 dark:hover:bg-primary/20 rounded-xl px-6
                           shadow-sm hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full p-4 rounded-xl bg-gradient-to-r from-primary/40 to-secondary/40 
                         hover:from-primary/50 hover:to-secondary/50 backdrop-blur-sm
                         transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3
                         shadow-lg hover:shadow-xl"
              >
                {isDarkMode ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-white font-bold text-lg">Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="text-white font-bold text-lg">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};