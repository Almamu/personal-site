import {
  Briefcase,
  Code2,
  Coffee,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";

import { ParticlesBackground } from "./components/ParticlesBackground";

const email = "mailto:contact@alma.mu";

function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function App() {
  const birthDate = new Date(1995, 2, 3); // Month is 0-based, so 2 = March
  const age = calculateAge(birthDate);

  const projects = [
    {
      id: 1,
      title: "linux-WallpaperEngine",
      description:
        "A native Linux implementation of Wallpaper Engine, bringing animated wallpapers to Linux desktop environments. Built with C++ and modern OpenGL.",
      image:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60",
      image_fill: "object-cover",
      technologies: ["C++", "OpenGL", "Linux"],
      link: "https://github.com/Almamu/linux-wallpaperengine",
    },
    {
      id: 2,
      title: "EVESharp",
      description:
        "A C# implementation of EVE Online server, enabling private server development and game preservation. Features network protocol implementation and game logic.",
      image:
        "https://raw.githubusercontent.com/wiki/Almamu/EVESharp/assets/EVESharp.png",
      image_fill: "object-contain",
      technologies: ["C#", ".NET", "Networking"],
      link: "https://github.com/Almamu/EVESharp",
    },
    {
      id: 3,
      title: "MangaSekaiProject",
      description:
        "A comprehensive manga reader platform split into two components: a React Native/Expo frontend for cross-platform reading, and a Laravel PHP backend for library management and content delivery.",
      image:
        "https://raw.githubusercontent.com/Almamu/MangaSekaiProject-Frontend/refs/heads/expo-rewrite/assets/images/mangasekai-logo.png",
      image_fill: "object-cover",
      technologies: ["React Native", "Expo", "Laravel", "PHP"],
      links: {
        frontend:
          "https://github.com/Almamu/MangaSekaiProject-Frontend/tree/expo-rewrite",
        backend: "https://github.com/Almamu/MangaSekaiProject-Backend",
      },
    },
    {
      id: 4,
      title: "A Bird in Hand is Worth Hundreds in the Bush",
      description:
        "A game created for GitHub's GameOff 2022 themed 'cliché'. Based on the Spanish proverb, this action-adventure deliberately embraces Hollywood tropes like 'America saves the world' and 'you're our last hope' for a uniquely satirical experience.",
      image: "images/bird.png",
      image_fill: "object-cover",
      technologies: ["Game Development", "Pixel Art"],
      link: "https://almamu.itch.io/a-bird-in-hand-is-worth-hundreds-in-the-bush",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32 relative overflow-hidden">
        <ParticlesBackground className="opacity-50" />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 flex-shrink-0">
            <img
              src="images/portrait.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Almamu</span>
            </h1>
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Senior Fullstack Developer at{" "}
                <a
                  href="https://www.convotis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  CONVOTIS Iberia
                </a>
              </p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Almamu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/almamu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={email}
                className="p-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <User className="text-blue-400" />
            About Me
          </h2>
          <div className="grid grid-cols-1 items-center gap-12">
            <div className="w-1/2">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At {age}, my journey into software development began with a deep
                passion for video games in my early years. What started as
                curiosity about how games worked evolved into a fascination with
                programming and software development. Today, with over 5 years
                of professional experience, I channel that same enthusiasm into
                creating scalable applications and solving complex technical
                challenges. My background in game development has given me a
                unique perspective on user experience and performance
                optimization.
              </p>
            </div>
            <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="text-blue-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">
                    Systems Programming
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      C/C++
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      C#
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">
                    Web Technologies
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      PHP
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      React
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Angular
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      TypeScript
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">
                    Mobile & Framework
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Expo
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">
                    Specialized Skills
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Reverse Engineering
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Coffee className="text-blue-400" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">Development</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Open Source Contribution
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Game Development
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">Entertainment</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Gaming
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Anime
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Manga
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-semibold">
                    Sports & Activities
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Airsoft
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      Karting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <ParticlesBackground className="opacity-30" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Briefcase className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className={"w-full h-48 " + project.image_fill}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 backdrop-blur-sm rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {"links" in project ? (
                      <div className="flex gap-2">
                        <a
                          href={project.links!.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          Frontend <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.links!.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          Backend <ExternalLink size={16} />
                        </a>
                      </div>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you'd like to discuss a project or just say
            hello!
          </p>
          <a
            href={email}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Almamu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
