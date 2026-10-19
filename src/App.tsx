import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioConfig } from "./portfolioConfig";
import groceryStoreImage from "./assets/grocery-store.png";

import "./styles.css";

const skills = portfolioConfig.technologies;

export default function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          {portfolioConfig.profile.name}
          <span>.</span>
        </a>
        <nav>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">DEVELOPER PORTFOLIO</p>
          <h1>
            I turn ideas into thoughtful,
            <span> functional web experiences.</span>
          </h1>
          <p className="intro">
            Hi, I'm {portfolioConfig.profile.name}, a full-stack developer
            working with React, TypeScript, Node.js, Express, and MongoDB. I
            enjoy building end-to-end applications, solving real-world problems,
            and creating experiences that make everyday tasks simpler.
          </p>
          <a
            className="button"
            href={portfolioConfig.profile.githubUrl}
            target="_blank"
          >
            Explore my work <ArrowUpRight size={17} />
          </a>
        </section>

        <section className="section" id="work">
          <p className="eyebrow">FEATURED PROJECT</p>
          <h2>Grocery Store App</h2>
          <p>
            A full-stack grocery shopping application featuring product
            browsing, authentication, cart management, and order handling.
          </p>

          <div className="project">
            <img
              src={groceryStoreImage}
              alt="Screenshot of my grocery store application"
            />
            <div>
              <h3>Full-stack e-commerce</h3>
              <p>
                Built with React, TypeScript, Express, Node.js, and MongoDB.
              </p>
              <ul>
                <li>Product and category browsing</li>
                <li>JWT-based authentication</li>
                <li>Cart and guest-cart merging</li>
                <li>Orders and address management</li>
              </ul>
              <a
                href={portfolioConfig.projects[0].githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View source on GitHub <ArrowUpRight size={15} />
              </a>
              <a
                href={portfolioConfig.projects[0].websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                View website <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Curious by nature. Developer by choice.</h2>
          <p>
            I enjoy turning ideas into working web applications and learning how
            frontend interfaces, APIs, and databases work together.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technologies I use</h2>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill.name}>{skill.name}</span>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's connect.</h2>
          <p>Have a project idea or want to say hello?</p>
          <a href={`mailto:${portfolioConfig.profile.email}`}>
            <Mail size={17} /> Email me
          </a>
          <a href={portfolioConfig.profile.githubUrl}>
            <FaGithub size={17} /> GitHub
          </a>
          <a href={portfolioConfig.profile.linkedInUrl}>
            <FaLinkedin size={17} /> LinkedIn
          </a>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {portfolioConfig.profile.name}. Built with
        React and TypeScript.
      </footer>
    </>
  );
}
