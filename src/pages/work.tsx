import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Zap } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time inventory",
      "Payment processing",
      "Admin dashboard",
      "Mobile responsive",
    ],
    year: "2024",
    type: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time collaboration",
      "Team workspaces",
      "Analytics",
      "Drag & drop",
    ],
    year: "2023",
    type: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "A creative portfolio website for a digital agency with smooth animations and interactive elements.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "https://example.com",
    features: [
      "Smooth animations",
      "Interactive UI",
      "SEO optimized",
      "Fast loading",
    ],
    year: "2023",
    type: "Frontend",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Location tracking",
      "Interactive maps",
      "Weather alerts",
      "Data visualization",
    ],
    year: "2022",
    type: "Frontend",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with multi-platform integration and reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Node.js", "Express", "REST APIs"],
    liveUrl: "https://example.com",
    features: [
      "Multi-platform",
      "Real-time data",
      "Custom reports",
      "Data export",
    ],
    year: "2022",
    type: "Full Stack",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, SEO optimization, and content management.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Markdown support",
      "SEO friendly",
      "Fast performance",
      "Dark mode",
    ],
    year: "2021",
    type: "Frontend",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Work() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.type === selectedCategory);

  return (
    <>
      <Head>
        <title>Work - Arjun Patidar | Frontend Developer</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including e-commerce platforms, dashboards, and modern web applications."
        />
        <meta
          property="og:title"
          content="Work - Arjun Patidar | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio of web development projects."
        />
        <meta property="og:url" content="https://anshgupta.dev/work" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  My <span className="gradient-text">Work</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A collection of projects that showcase my skills and passion
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-secondary/50 hover:bg-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                ref={ref}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-6xl font-bold gradient-text opacity-20"
                          whileHover={{ scale: 1.1 }}
                        >
                          {project.title.charAt(0)}
                        </motion.div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            {project.year}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-secondary/50 rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-secondary/50 rounded-lg text-xs font-medium">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Features */}
                        <div className="space-y-1 mb-6">
                          {project.features.slice(0, 2).map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <Zap className="w-3 h-3" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium hover:text-purple-500 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium hover:text-purple-500 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl font-bold mb-6">
                  Let&apos;s Build Something Together
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have a project in mind? I&apos;d love to hear about it.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
