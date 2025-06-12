import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Award,
  Briefcase,
  Target,
} from "lucide-react";
import Link from "next/link";

// Dynamically import CustomCursor to avoid SSR issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const highlights = [
  {
    icon: Code2,
    title: "Frontend Expert",
    description:
      "3+ years crafting scalable web applications with modern JavaScript frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description:
      "Creating intuitive, accessible interfaces with attention to detail",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Building fast, optimized applications using best practices",
  },
];

const achievements = [
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "3 years in frontend development across various industries",
  },
  {
    icon: Award,
    title: "Projects Delivered",
    description: "Successfully completed 25+ projects with modern tech stack",
  },
  {
    icon: Target,
    title: "Career Goals",
    description:
      "Seeking opportunities to grow and contribute to innovative teams",
  },
];

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [achievementsRef, achievementsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Head>
        <title>
          Arjun Patidar - Frontend Developer | React, TypeScript Expert
        </title>
        <meta
          name="description"
          content="Frontend Developer with 3 years of experience specializing in React, TypeScript, Next.js, and React Native. Based in Indore, India. Open to new opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://anshgupta.dev" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, TypeScript, Next.js, React Native, Web Development, UI/UX, JavaScript, Indore, India, Hire Frontend Developer"
        />

        {/* Author */}
        <meta name="author" content="Arjun Patidar" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Arjun Patidar - Frontend Developer | React Expert"
        />
        <meta
          property="og:description"
          content="Frontend Developer with 3 years of experience. Expert in React, TypeScript, Next.js, and modern web technologies. Based in Indore, India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anshgupta.dev" />
        <meta
          property="og:image"
          content="https://anshgupta.dev/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Arjun Patidar Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Arjun Patidar - Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Frontend Developer with 3 years of experience. Expert in React, TypeScript, Next.js."
        />
        <meta
          name="twitter:image"
          content="https://anshgupta.dev/twitter-image.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arjun Patidar",
              jobTitle: "Frontend Developer",
              url: "https://anshgupta.dev",
              email: "arjunjagotra2001@gmail.com",
              telephone: "+917000899867",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Indore",
                addressCountry: "India",
              },
              image: "https://anshgupta.dev/profile.jpg",
              sameAs: [
                "https://github.com/anshgupta",
                "https://linkedin.com/in/anshgupta",
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "React Native",
                "Frontend Development",
                "UI/UX Design",
                "Web Performance",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Available for opportunities",
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arjun Patidar Portfolio",
              url: "https://anshgupta.dev",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://anshgupta.dev/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <SmoothScroll>
        <div className="min-h-screen bg-background text-foreground">
          {/* Custom Cursor - only visible on desktop */}
          <div className="hidden lg:block">
            <CustomCursor />
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <HeroSection />

            {/* Quick Overview Section */}
            <section className="py-16 lg:py-20 relative overflow-hidden">
              <div className="absolute inset-0 grid-background opacity-30" />

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 card-hover"
                      >
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <TechStackSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Experience Section */}
            <ExperienceSection />

            {/* Achievements Section */}
            <section className="py-16 lg:py-20 relative overflow-hidden bg-background/50">
              <div className="absolute inset-0 grid-background opacity-30" />

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                  ref={achievementsRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="max-w-6xl mx-auto"
                >
                  <motion.h2
                    className="text-3xl lg:text-5xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    Professional <span className="gradient-text">Journey</span>
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {achievements.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
                      >
                        <motion.div
                          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center"
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon className="w-10 h-10 text-purple-500" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-3 gradient-text">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 relative overflow-hidden">
              <div className="absolute inset-0 grid-background opacity-30" />

              <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Let&apos;s Build Something{" "}
                    <span className="gradient-text">Amazing</span> Together
                  </h2>
                  <p className="text-lg lg:text-xl text-muted-foreground mb-8">
                    I&apos;m actively seeking new opportunities to contribute my
                    skills and grow as a developer. Let&apos;s discuss how I can
                    add value to your team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/work" passHref>
                      <motion.div
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View My Work
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </Link>
                    <Link href="/contact" passHref>
                      <motion.div
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm font-medium hover:bg-secondary/50 transition-colors duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact Me
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
