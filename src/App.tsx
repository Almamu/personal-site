import { SiGithub, SiTwitch } from "@icons-pack/react-simple-icons";
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
        <CPlusPlus key="cplusplus">C++</CPlusPlus>,
        <OpenGL key="opengl">OpenGL</OpenGL>,
        <Linux key="linux">Linux</Linux>,
      ],
      links: [
        {
          url: "https://github.com/Almamu/linux-wallpaperengine",
          label: "Github",
        },
      ],
    },
    {
      id: 2,
      title: "EVESharp",
      description:
        "A C# implementation of EVE Online server, enabling private server development and game preservation. Features network protocol implementation and game logic.",
      image: "images/evesharp-logo.webp",
      image_fill: "object-contain",
      technologies: [
        <CSharp key="csharp">C#</CSharp>,
        <DotNet key="dotnet">.NET</DotNet>,
        <Other key="networking">Networking</Other>,
      ],
      links: [{ url: "https://github.com/Almamu/EVESharp", label: "Github" }],
    },
    {
      id: 3,
      title: "MangaSekaiProject",
      description:
        "A comprehensive manga reader platform split into two components: a React Native/Expo frontend for cross-platform reading, and a Laravel PHP backend for library management and content delivery.",
      image: "images/mangasekai-logo.webp",
      image_fill: "object-cover",
      technologies: [
        <ReactNative key="reactnative">React Native</ReactNative>,
        <Expo key="expo">Expo</Expo>,
        <PHP key="php">PHP 8</PHP>,
        <Laravel key="laravel">Laravel</Laravel>,
      ],
      links: [
        {
          url: "https://github.com/Almamu/MangaSekaiProject-Frontend/tree/expo-rewrite",
          label: "Frontend",
        },
        {
          url: "https://github.com/Almamu/MangaSekaiProject-Backend",
          label: "Backend",
        },
      ],
    },
    {
      id: 4,
      title: "A Bird in Hand is Worth Hundreds in the Bush",
      description:
        "A game created for GitHub's GameOff 2022 themed 'cliché'. Based on the Spanish proverb, this action-adventure deliberately embraces Hollywood tropes like 'America saves the world' and 'you're our last hope' for a uniquely satirical experience.",
      image: "images/bird.webp",
      image_fill: "object-cover",
      technologies: [
        <Unity key="unity">Unity</Unity>,
        <Other key="gamedev">Game Development</Other>,
        <Other key="voxel">Voxel-like</Other>,
      ],
      links: [
        {
          url: "https://almamu.itch.io/a-bird-in-hand-is-worth-hundreds-in-the-bush",
          label: "itch.io",
        },
      ],
    },
  ];

  const socials = [
    {
      icon: <SiGithub size={24} />,
      url: "https://github.com/Almamu",
      label: "Github",
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/almamu",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      url: "mailto:contact@alma.mu",
      label: "Email",
    },
    {
      icon: <SiTwitch size={24} />,
      url: "https://twitch.tv/almamu",
      label: "Twitch",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-10 md:py-16 relative overflow-hidden">
        <ParticlesBackground className="opacity-50" />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 flex-shrink-0">
            <img
              src="images/portrait.webp"
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
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <span className="pt-2">Get in touch with me on:</span>
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                {socials.map((social) => (
                  <a
                    key={social.url}
                    aria-label={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:text-blue-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Technical Stack Section */}
      <section className="py-10 md:py-16">
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
      <section className="py-10 md:py-16">
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
      <section className="py-10 md:py-16 relative overflow-hidden">
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
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <LanguageLabelContainer>
                      {project.technologies}
                    </LanguageLabelContainer>
                    <div className="flex mt-2 md:mt-0 gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                        >
                          {link.label} <ExternalLink size={16} />
                        </a>
                      ))}
                    </div>
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
    </>
  );
}
