import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  ExternalLink,
  Star,
} from "lucide-react";
import React from "react";

const resources = [
  {
    category: "Frontend Fundamentals",
    icon: BookOpen,
    items: [
      {
        title: "HTML & CSS Mastery",
        description: "Master the building blocks of web development",
        type: "Course",
        duration: "20 hours",
        level: "Beginner",
        link: "#",
      },
      {
        title: "JavaScript Deep Dive",
        description: "Understand JavaScript from the ground up",
        type: "Course",
        duration: "30 hours",
        level: "Intermediate",
        link: "#",
      },
      {
        title: "Responsive Web Design",
        description: "Build websites that work on any device",
        type: "Tutorial",
        duration: "10 hours",
        level: "Beginner",
        link: "#",
      },
    ],
  },
  {
    category: "React Ecosystem",
    icon: Video,
    items: [
      {
        title: "React Fundamentals",
        description: "Learn React from scratch with practical examples",
        type: "Course",
        duration: "25 hours",
        level: "Intermediate",
        link: "#",
      },
      {
        title: "Advanced React Patterns",
        description: "Master advanced React concepts and patterns",
        type: "Workshop",
        duration: "15 hours",
        level: "Advanced",
        link: "#",
      },
      {
        title: "State Management with Redux",
        description: "Manage complex application state effectively",
        type: "Course",
        duration: "12 hours",
        level: "Intermediate",
        link: "#",
      },
    ],
  },
  {
    category: "TypeScript & Next.js",
    icon: FileText,
    items: [
      {
        title: "TypeScript for React Developers",
        description: "Add type safety to your React applications",
        type: "Course",
        duration: "18 hours",
        level: "Intermediate",
        link: "#",
      },
      {
        title: "Next.js Production Ready",
        description: "Build and deploy production-ready Next.js apps",
        type: "Course",
        duration: "22 hours",
        level: "Advanced",
        link: "#",
      },
      {
        title: "Full-Stack with Next.js",
        description: "Build complete applications with Next.js",
        type: "Workshop",
        duration: "28 hours",
        level: "Advanced",
        link: "#",
      },
    ],
  },
];

const learningPaths = [
  {
    title: "Frontend Developer Path",
    description: "Start from zero and become a frontend developer",
    duration: "6 months",
    modules: 12,
    students: "2.5k+",
    rating: 4.8,
  },
  {
    title: "React Specialist Path",
    description: "Master React and its ecosystem",
    duration: "4 months",
    modules: 8,
    students: "1.8k+",
    rating: 4.9,
  },
  {
    title: "Full-Stack JavaScript Path",
    description: "Become a full-stack JavaScript developer",
    duration: "8 months",
    modules: 16,
    students: "3.2k+",
    rating: 4.7,
  },
];

export default function Learn() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>Learn - Arjun Patidar | Frontend Developer</title>
        <meta
          name="description"
          content="Free resources and tutorials to learn web development, React, TypeScript, and modern frontend technologies."
        />
        <meta
          property="og:title"
          content="Learn - Arjun Patidar | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Free resources to learn web development and modern frontend technologies."
        />
        <meta property="og:url" content="https://anshgupta.dev/learn" />
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
                  Learn <span className="gradient-text">Web Development</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Curated resources to help you master modern web technologies
                </p>
              </motion.div>
            </div>
          </section>

          {/* Learning Paths */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Structured Learning Paths
                </h2>
                <p className="text-lg text-muted-foreground">
                  Follow these paths to achieve your learning goals
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {learningPaths.map((path, index) => (
                  <motion.div
                    key={path.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <h3 className="text-2xl font-semibold mb-3">
                        {path.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {path.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Duration
                          </span>
                          <span className="font-medium">{path.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Modules</span>
                          <span className="font-medium">{path.modules}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Students
                          </span>
                          <span className="font-medium">{path.students}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-medium">{path.rating}</span>
                        </div>
                        <span className="text-sm font-medium text-purple-500 group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                          Start Learning
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
                <p className="text-lg text-muted-foreground">
                  Handpicked tutorials, courses, and workshops
                </p>
              </motion.div>

              <div className="space-y-12">
                {resources.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {category.category}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <motion.a
                          key={item.title}
                          href={item.link}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + itemIndex * 0.05,
                          }}
                          whileHover={{ y: -5 }}
                          className="block group"
                        >
                          <div className="h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/50 transition-all duration-300">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg font-semibold group-hover:text-purple-500 transition-colors">
                                {item.title}
                              </h4>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              {item.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="px-2 py-1 bg-secondary/50 rounded">
                                {item.type}
                              </span>
                              <span className="text-muted-foreground">
                                {item.duration}
                              </span>
                              <span
                                className={`px-2 py-1 rounded ${
                                  item.level === "Beginner"
                                    ? "bg-green-500/20 text-green-500"
                                    : item.level === "Intermediate"
                                    ? "bg-yellow-500/20 text-yellow-500"
                                    : "bg-red-500/20 text-red-500"
                                }`}
                              >
                                {item.level}
                              </span>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <Users className="w-16 h-16 mx-auto mb-6 text-purple-500" />
                <h2 className="text-3xl font-bold mb-4">
                  Join the Learning Community
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with fellow learners, share knowledge, and grow
                  together
                </p>
                <motion.button
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
