import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      {/* Enhanced Animated Backdrop */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-lg z-20 
                   transition-all duration-700 ease-in-out transform
                   ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-700
                       ${menuOpen ? "opacity-100" : "opacity-0"}`} />
      </div>

      {/* Enhanced Menu Container */}
      <div
        className={`fixed top-0 left-0 w-80 h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl z-30
                   transform transition-all duration-700 ease-in-out
                   ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float" />
        </div>

        {/* Enhanced Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <a 
            href="#home" 
            className="font-mono text-2xl font-bold text-black dark:text-white hover:text-primary transition-all duration-300 
                     hover:scale-105 transform"
            onClick={() => setMenuOpen(false)}
          >
            A<span className="text-blue-500">.O</span>
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 
                     hover:rotate-90 transform"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Enhanced Menu Items */}
        <nav className="relative p-6">
          <div className="flex flex-col space-y-6">
            {[
              { href: "#home", label: "Home", delay: 100 },
              { href: "#about", label: "About", delay: 200 },
              { href: "#projects", label: "Projects", delay: 300 },
              { href: "#contact", label: "Contact", delay: 400 }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`group relative text-xl font-medium text-black dark:text-white hover:text-primary 
                         transition-all duration-500 transform hover:translate-x-2
                         ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                         transition-all duration-500 delay-${item.delay}`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 
                               rounded-lg transform scale-x-0 group-hover:scale-x-100 
                               transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>
        </nav>

        {/* Enhanced Theme Toggle */}
        <div className="relative px-6 py-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 
                     hover:from-primary/20 hover:to-secondary/20 backdrop-blur-sm
                     transition-all duration-500 transform hover:scale-105
                     ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                     transition-all duration-500 delay-500`}
            aria-label="Toggle theme"
          >
            <div className="flex items-center justify-center space-x-3">
              {isDarkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-black dark:text-white font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span className="text-black dark:text-white font-medium">Dark Mode</span>
                </>
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-sm text-black dark:text-white">
          <p>© 2024 Ajayi Oluwaseun</p>
        </div>
      </div>
    </>
  );
};