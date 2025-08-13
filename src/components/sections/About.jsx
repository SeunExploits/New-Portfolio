import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript",
    "Redux",
    "Framer Motion",
    "Material UI"
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "GraphQL",
    "JWT Authentication",
    "AWS"
  ];

  const otherSkills = [
    "Git",
    "Docker",
    "CI/CD",
    "Agile/Scrum",
    "UI/UX Design",
    "Responsive Design",
    "Web3/Solidity",
    "Testing"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-black dark:text-green-500 mb-8 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              With a keen eye for detail and a commitment to writing clean, maintainable code, I specialize in building 
              scalable web applications that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl p-6 bg-primary/5 hover:bg-primary/10 transition-all">
                <h3 className="text-xl font-bold mb-4 text-green-500 dark:text-primary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-primary/10 text-green-500 dark:text-primary py-1 px-3 rounded-full text-sm hover:bg-primary/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-secondary/5 hover:bg-secondary/10 transition-all">
                <h3 className="text-xl font-bold mb-4 text-green-500 dark:text-secondary">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-secondary/10 text-green-500 dark:text-secondary py-1 px-3 rounded-full text-sm hover:bg-secondary/20 
                               hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-blue-500/5 hover:bg-blue-500/10 transition-all">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-green-500">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-black dark:text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-green-500 dark:text-primary">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-500 dark:text-green-500">B.S. in Hydrology</h4>
                    <p className="text-green-500 dark:text-500">Federal University Abeokuta (2016-2021)</p>
                    <ul className="list-disc list-inside text-black dark:text-green-500 mt-2 space-y-1">
                      <li>Completed advanced coursework in Data Structures and Web Development</li>
                      <li>Led the University's Tech Club and organized multiple hackathons</li>
                      <li>Created a student portal system for better campus communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-green-500 dark:text-primary">Technical Achievements</h3>
                <div className="space-y-6">
                  <div>
                    <ul className="list-disc list-inside text-black dark:text-green-500 mt-2 space-y-1">
                      <li>Built and deployed multiple full-stack applications</li>
                      <li>Optimized application performance and reduced load times</li>
                      <li>Implemented complex features using modern web technologies</li>
                      <li>Created responsive and accessible web applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};