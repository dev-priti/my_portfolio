import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioConfig } from "./portfolioConfig";
import "./styles.css";

// Group technologies by category
const groupedSkills = portfolioConfig.technologies.reduce((acc, skill) => {
  const category = skill.category || "Other";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skill.name);
  return acc;
}, {});

const projects = portfolioConfig.projects || [];

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
        {/* Hero Section */}
        <section className="hero" id="home">
          <p className="eyebrow">SENIOR SOFTWARE ENGINEER</p>
          <h1>
            I architect enterprise-scale solutions and
            <span> high-performance web applications.</span>
          </h1>
          <p className="intro">
            Hi, I'm {portfolioConfig.profile.name}, a senior full-stack software
            engineer with 12+ years of experience specializing in React,
            TypeScript, Node.js, and enterprise e-commerce platforms. I lead
            technical initiatives, optimize global multi-brand architectures,
            and build secure, resilient applications that drive business growth.
          </p>
          <a
            className="button"
            href={portfolioConfig.profile.linkedInUrl}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={17} />
          </a>
        </section>

        {/* Featured Projects Section */}
        <section className="section" id="work">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h2>Enterprise & Full-Stack Case Studies</h2>
          <p style={{ marginBottom: "2.5rem", color: "#666" }}>
            Key highlights showcasing enterprise e-commerce scale, secure
            customization engines, and modern engineering workflows.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            {projects.map((project, index) => (
              <div className="project" key={index}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                  />
                )}
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "#2563eb",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 style={{ marginTop: "0.5rem" }}>{project.title}</h3>
                  <p>{project.description}</p>

                  {project.highlights && (
                    <ul
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1.5rem",
                        paddingLeft: "1.25rem",
                        color: "#444",
                      }}
                    >
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} style={{ marginBottom: "0.5rem" }}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                      marginTop: "1rem",
                    }}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        View source on GitHub <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        View website <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="section" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Curious by nature. Engineer by choice.</h2>
          <p>
            With over 12 years of enterprise experience, I specialize in
            building robust full-stack solutions, optimizing performance and
            conversion rates across global e-commerce platforms, and
            implementing secure, scalable web architectures.
          </p>
        </section>

        {/* Categorized Skills Section */}
        <section className="section" id="skills">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>Technologies I use</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div
                key={category}
                style={{
                  background: "#f8fafc",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "1rem",
                    color: "#1e293b",
                    borderBottom: "2px solid #cbd5e1",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {category}
                </h3>
                <div
                  className="skills"
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "#ffffff",
                        padding: "0.4rem 0.8rem",
                        borderRadius: "6px",
                        fontSize: "0.85rem",
                        border: "1px solid #cbd5e1",
                        color: "#334155",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's connect.</h2>
          <p>
            Have an engineering challenge or want to discuss enterprise
            architecture?
          </p>
          {portfolioConfig.profile.email && (
            <a href={`mailto:${portfolioConfig.profile.email}`}>
              <Mail size={17} /> Email me
            </a>
          )}
          {portfolioConfig.profile.githubUrl && (
            <a
              href={portfolioConfig.profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={17} /> GitHub
            </a>
          )}
          {portfolioConfig.profile.linkedInUrl && (
            <a
              href={portfolioConfig.profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={17} /> LinkedIn
            </a>
          )}
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} {portfolioConfig.profile.name}. Built with
        React and TypeScript.
      </footer>
    </>
  );
}
