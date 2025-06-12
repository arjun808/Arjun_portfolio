import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Code2,
  Award,
  Target,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamically import CustomCursor to avoid SSR issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const timeline = [
  {
    year: "2021",
    title: "Started My Journey",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first responsive website and discovered my passion for creating digital experiences.",
    icon: GraduationCap,
  },
  {
    year: "2021-2022",
    title: "Frontend Developer Intern",
    description:
      "Joined StartUp Hub Indore as an intern. Learned React, modern JavaScript, and industry best practices while working on real client projects.",
    icon: Code2,
  },
  {
    year: "2022-2023",
    title: "Junior Frontend Developer",
    description:
      "Promoted to full-time role at Digital Innovations. Developed reusable component libraries and worked with design teams to implement pixel-perfect UIs.",
    icon: Briefcase,
  },
  {
    year: "2023-Present",
    title: "Frontend Developer",
    description:
      "Working at Tech Solutions Pvt. Ltd., leading frontend development for major client projects and mentoring junior developers.",
    icon: Heart,
  },
];

const interests = [
  "Open Source Contribution",
  "UI/UX Design",
  "Web Performance",
  "New Technologies",
  "Teaching & Mentoring",
  "Problem Solving",
  "Mobile Development",
  "Design Systems",
];

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+"],
  },
  {
    category: "Styling",
    items: ["CSS3", "Tailwind CSS", "Styled Components", "Sass"],
  },
  { category: "Tools", items: ["Git", "Webpack", "Vite", "npm/yarn"] },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX"],
  },
];

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Building fast, optimized applications",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Creating intuitive experiences",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering results",
  },
  { icon: Heart, title: "Passionate", description: "Love what I do every day" },
];

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>About - Arjun Patidar | Frontend Developer</title>
        <meta
          name="description"
          content="Learn more about Arjun Patidar, a passionate Frontend Developer with 3 years of experience in React, TypeScript, and Next.js based in Indore, India."
        />
        <meta
          property="og:title"
          content="About - Arjun Patidar | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Learn more about Arjun Patidar, a passionate Frontend Developer with 3 years of experience."
        />
        <meta property="og:url" content="https://anshgupta.dev/about" />
      </Head>

      <SmoothScroll>
        <div className="min-h-screen bg-background text-foreground">
          {/* Custom Cursor - only visible on desktop */}
          <div className="hidden lg:block">
            <CustomCursor />
          </div>

          <Navigation />

          <main className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-20 overflow-hidden">
              <div className="absolute inset-0 grid-background opacity-20" />
              <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    About <span className="gradient-text">Me</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Frontend Developer passionate about crafting exceptional
                    digital experiences with modern web technologies
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Story Section */}
            <section className="py-16 lg:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    <div className="space-y-6">
                      <h2 className="text-3xl lg:text-4xl font-bold">
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Arjun Patidar</span>
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        A passionate Frontend Developer with 3 years of
                        experience building modern web applications. Based in
                        Indore, India, I specialize in creating beautiful,
                        performant, and user-friendly digital experiences.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        My expertise lies in React ecosystem, TypeScript, and
                        Next.js. I love turning complex problems into simple,
                        elegant solutions. When I&apos;m not coding, you&apos;ll
                        find me exploring new technologies, contributing to open
                        source, or sharing knowledge with the community.
                      </p>
                      <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <MapPin className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="text-foreground">Indore, India</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-purple-500/10">
                            <Briefcase className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="text-foreground">
                            3 Years of Experience
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-green-500/10">
                            <Award className="w-4 h-4 text-green-400" />
                          </div>
                          <span className="text-green-400 font-medium">
                            Available for Opportunities
                          </span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="relative">
                        {/* Profile Image Placeholder */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm p-8 flex items-center justify-center border border-purple-500/20">
                          <motion.div
                            className="text-7xl lg:text-8xl font-black"
                            animate={{
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          >
                            <span className="bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                              AP
                            </span>
                          </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Values Section */}
                  <div className="mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                      My <span className="gradient-text">Values</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {values.map((value, index) => (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.1 }}
                          className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                          <motion.div
                            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <value.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <h3 className="text-xl font-semibold mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {value.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                      Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {skills.map((skillGroup, index) => (
                        <motion.div
                          key={skillGroup.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50"
                        >
                          <h3 className="text-lg font-semibold mb-4 text-purple-400">
                            {skillGroup.category}
                          </h3>
                          <div className="space-y-2">
                            {skillGroup.items.map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
                                <span className="text-sm">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                      My <span className="gradient-text">Journey</span>
                    </h2>
                    <div className="relative">
                      {/* Timeline line - hidden on mobile */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500" />

                      <div className="space-y-8 lg:space-y-12">
                        {timeline.map((item, index) => (
                          <motion.div
                            key={item.year}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.6,
                              delay: 0.3 + index * 0.1,
                            }}
                            className={`relative flex flex-col lg:flex-row items-center ${
                              index % 2 === 0
                                ? "lg:justify-start"
                                : "lg:justify-end"
                            }`}
                          >
                            <div
                              className={`w-full lg:w-5/12 ${
                                index % 2 === 0
                                  ? "lg:text-right lg:pr-12"
                                  : "lg:text-left lg:pl-12"
                              }`}
                            >
                              <motion.div
                                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-purple-500/30 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div
                                  className={`flex items-center gap-3 mb-3 ${
                                    index % 2 === 0 ? "lg:justify-end" : ""
                                  }`}
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <span className="text-xl lg:text-2xl font-bold gradient-text">
                                    {item.year}
                                  </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                  {item.title}
                                </h3>
                                <p className="text-sm lg:text-base text-muted-foreground">
                                  {item.description}
                                </p>
                              </motion.div>
                            </div>

                            {/* Timeline dot - hidden on mobile */}
                            <motion.div
                              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                              whileHover={{ scale: 1.5 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                      What I <span className="gradient-text">Love</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-3xl mx-auto">
                      {interests.map((interest, index) => (
                        <motion.span
                          key={interest}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.05,
                          }}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="px-5 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full font-medium text-sm lg:text-base hover:border-purple-500/40 transition-all duration-300"
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                      Let&apos;s Work{" "}
                      <span className="gradient-text">Together</span>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      I&apos;m always excited to work on new projects and
                      collaborate with amazing teams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get In Touch
                      </motion.a>
                      <motion.a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-500/50 font-medium hover:bg-purple-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download Resume
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
