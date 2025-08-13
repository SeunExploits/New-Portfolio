import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Firework = ({ x, y, color }) => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 30) * (Math.PI / 180),
    distance: Math.random() * 50 + 50,
  }));

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute w-3 h-3 rounded-full"
        style={{
          left: x,
          top: y,
          background: color,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
        }}
      />
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos(particle.angle) * particle.distance,
            y: Math.sin(particle.angle) * particle.distance,
            scale: 1,
            opacity: 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: x,
            top: y,
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}
    </>
  );
};

const Particle = ({ x, y, size, color }) => {
  return (
    <motion.div
      initial={{ x, y, scale: 0 }}
      animate={{
        x: x + (Math.random() - 0.5) * 300,
        y: y + (Math.random() - 0.5) * 300,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 15px ${color}`,
      }}
    />
  );
};

export const Hero = () => {
  const [fireworks, setFireworks] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    }));
    setParticles(initialParticles);

    // Create fireworks on interval
    const interval = setInterval(() => {
      const newFirework = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      };
      setFireworks((prev) => [...prev, newFirework]);
      setTimeout(() => {
        setFireworks((prev) => prev.filter((f) => f.id !== newFirework.id));
      }, 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Fireworks */}
      {fireworks.map((firework) => (
        <Firework key={firework.id} {...firework} />
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center md:text-left space-y-6 relative bg-white/80 dark:bg-transparent backdrop-blur-sm rounded-2xl p-8 shadow-lg"
            >
              {/* Decorative background elements */}
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />

              <div className="space-y-4 relative">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold leading-tight relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-black dark:text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
                    Oluwaseun
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 blur-xl rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </motion.h1>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-primary relative"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full blur-sm"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <p className="text-xl md:text-2xl text-black dark:text-gray-300 font-medium">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              
              <motion.p 
                className="text-lg text-black/90 dark:text-gray-400 max-w-lg leading-relaxed relative bg-white/50 dark:bg-transparent p-4 rounded-xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                Crafting elegant solutions through code. Specializing in building scalable web applications with modern technologies and best practices.
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-xl blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 relative">
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    backgroundColor: "rgba(59, 130, 246, 0.9)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 bg-primary text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/20 relative overflow-hidden group border-2 border-primary/20"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/30 to-white/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
                    backgroundColor: "rgba(16, 185, 129, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg transition-all duration-300 relative overflow-hidden group bg-white/50 dark:bg-transparent"
                >
                  <span className="relative z-10">Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-2xl group bg-white/50 dark:bg-transparent backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-2xl"></div>
                <motion.img
                  src="/images/profile.jpg"
                  alt="Oluwaseun"
                  className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}; 