import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  Briefcase,
  Code2,
  ExternalLink,
  Linkedin,
  Mail,
  User,
} from "lucide-react";

import { Angular } from "./components/LanguageLabels/Angular.tsx";
import { C } from "./components/LanguageLabels/C.tsx";
import { CloudFlare } from "./components/LanguageLabels/CloudFlare.tsx";
import { CPlusPlus } from "./components/LanguageLabels/CPlusPlus.tsx";
import { CSharp } from "./components/LanguageLabels/CSharp.tsx";
import { DotNet } from "./components/LanguageLabels/DotNet.tsx";
import { Expo } from "./components/LanguageLabels/Expo.tsx";
import { Git } from "./components/LanguageLabels/Git.tsx";
import { LanguageLabelContainer } from "./components/LanguageLabels/LanguageLabelContainer.tsx";
import { Laravel } from "./components/LanguageLabels/Laravel.tsx";
import { Linux } from "./components/LanguageLabels/Linux.tsx";
import { NextJS } from "./components/LanguageLabels/NextJS.tsx";
import { NodeJS } from "./components/LanguageLabels/NodeJS.tsx";
import { OpenGL } from "./components/LanguageLabels/OpenGL.tsx";
import { Other } from "./components/LanguageLabels/Other.tsx";
import { PHP } from "./components/LanguageLabels/PHP.tsx";
import { Python } from "./components/LanguageLabels/Python.tsx";
import { React } from "./components/LanguageLabels/React.tsx";
import { ReactNative } from "./components/LanguageLabels/ReactNative.tsx";
import { SQL } from "./components/LanguageLabels/SQL.tsx";
import { TypeScript } from "./components/LanguageLabels/TypeScript.tsx";
import { Unity } from "./components/LanguageLabels/Unity.tsx";
import { VueJS } from "./components/LanguageLabels/VueJS.tsx";
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

export function App() {
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
      technologies: [
        <CPlusPlus>C++</CPlusPlus>,
        <OpenGL>OpenGL</OpenGL>,
        <Linux>Linux</Linux>,
      ],
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
      technologies: [
        <CSharp>C#</CSharp>,
        <DotNet>.NET</DotNet>,
        <Other>Networking</Other>,
      ],
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
      technologies: [
        <ReactNative>React Native</ReactNative>,
        <Expo>Expo</Expo>,
        <PHP>PHP 8</PHP>,
        <Laravel>Laravel</Laravel>,
      ],
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
      technologies: [
        <Other>Game Development</Other>,
        <Other>Voxel-like</Other>,
        <Unity>Unity</Unity>,
      ],
      link: "https://almamu.itch.io/a-bird-in-hand-is-worth-hundreds-in-the-bush",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-10 md:py-16 relative overflow-hidden">
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
            <span className="text-lg text-gray-400 text-opacity-40">
              @Almamu
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Hi, I'm <span className="text-blue-400">Alexis</span>
            </h1>
            <div>
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
              <span className="py-2">Get in touch with me on:</span>
              <a
                href="https://github.com/Almamu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-blue-400 transition-colors"
              >
                <SiGithub size={24} />
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

      {/* Technical Stack Section */}
      <section className="bg-blue-950/20 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 size={24} className="text-blue-400" />
            Technical Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-blue-400 font-semibold">Frontend</span>
              <LanguageLabelContainer>
                <React>React 19</React>
                <Angular>Angular 19</Angular>
                <VueJS>VueJS</VueJS>
                <TypeScript>TypeScript</TypeScript>
              </LanguageLabelContainer>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-blue-400 font-semibold">Backend</span>
              <LanguageLabelContainer>
                <PHP>PHP 8</PHP>
                <Laravel>Laravel</Laravel>
                <NodeJS>NodeJS</NodeJS>
              </LanguageLabelContainer>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-blue-400 font-semibold">Fullstack</span>
              <LanguageLabelContainer>
                <Expo>Expo</Expo>
                <ReactNative>React Native</ReactNative>
                <NextJS>NextJS</NextJS>
              </LanguageLabelContainer>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <span className="text-blue-400 font-semibold">Other skills</span>
              <LanguageLabelContainer>
                <Git>GIT</Git>
                <C>C</C>
                <CPlusPlus>C++</CPlusPlus>
                <CSharp>C#</CSharp>
                <Python>Python</Python>
                <Linux>Linux</Linux>
                <SQL>SQL</SQL>
                <Other>Reverse Engineering</Other>
                <Unity>Unity</Unity>
                <CloudFlare>Cloudflare</CloudFlare>
              </LanguageLabelContainer>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <User className="text-blue-400" />
            About Me
          </h2>
          <div className="grid grid-cols-1 items-center gap-12">
            <div className="">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey into software development began with a deep passion
                for video games in my early years. What started as curiosity
                about how games worked evolved into a fascination with
                programming and software development in general. Today at {age},
                with over 7 years of professional experience, I channel that
                same enthusiasm into creating scalable applications and solving
                complex technical challenges. My background in game development
                has given me a unique perspective on user experience and
                performance optimization.
              </p>
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
                    <LanguageLabelContainer>
                      {project.technologies}
                    </LanguageLabelContainer>
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

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Almamu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
