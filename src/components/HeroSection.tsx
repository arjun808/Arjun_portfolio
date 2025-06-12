import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "https://github.com/arjun808", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/arjun-patidar-6556b2226",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:arjunjagotra2001@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+917909788474", label: "Phone" },
];

const stats = [
  { value: "2+", label: "Years Experience", icon: Sparkles },
  { value: "25+", label: "Projects Completed", icon: Code2 },
  { value: "15+", label: "Technologies", icon: Zap },
  { value: "100%", label: "Commitment", icon: Palette },
];

const roles = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Typing effect
  useEffect(() => {
    const ticker = setInterval(() => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setIsDeleting(true);
        setDelta(100);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setDelta(200);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, roleIndex]);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.05);
    mouseY.set(y * 0.05);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-32 pb-20"
      onMouseMove={handleMouseMove}
      style={{ overflow: "hidden" }}
    >
      {/* Enhanced Background - lower z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-blue-900/10" />
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="absolute inset-0 noise opacity-50" />
      </div>

      {/* Animated gradient orbs with mouse interaction - contained within section */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] bg-purple-500/10 rounded-full blur-3xl"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] bg-blue-500/10 rounded-full blur-3xl"
          style={{
            x: useTransform(mouseXSpring, (x) => -x),
            y: useTransform(mouseYSpring, (y) => -y),
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles - limited number and contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content with proper z-index */}
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-4 lg:mb-6">
            <motion.div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 text-xs lg:text-sm">
              <motion.div
                className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-medium text-green-400">
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading with Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-5 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m
            </motion.span>{" "}
            <motion.span
              className="gradient-text relative inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Arjun Patidar
            </motion.span>
          </motion.h1>

          {/* Dynamic Role with Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="h-10 sm:h-12 lg:h-14 flex items-center justify-center mb-4 lg:mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-purple-400">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 sm:h-6 lg:h-8 xl:h-10 bg-purple-400 ml-1 align-middle"
              />
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-4 lg:mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20">
              <MapPin className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-purple-400" />
              <span className="text-sm lg:text-base text-foreground/80 font-medium">
                Indore, India
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Passionate Frontend Developer with 2 years of experience crafting
            pixel-perfect, performant web applications. Specialized in React
            ecosystem, modern JavaScript, and creating exceptional user
            experiences.
          </motion.p>

          {/* Enhanced Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8 lg:mb-10 max-w-4xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative bg-card/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 border border-border/50 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl lg:rounded-2xl" />

                <div className="relative z-10">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mx-auto mb-1.5 lg:mb-2 text-purple-400" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-0.5 lg:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 lg:mb-10 px-4"
          >
            <Link href="/work" passHref>
              <motion.div
                className="group relative px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium overflow-hidden cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Projects
                  <span>→</span>
                </span>
              </motion.div>
            </Link>

            <motion.a
              href="/resume.pdf"
              download
              className="group relative px-6 sm:px-7 lg:px-8 py-3 lg:py-4 rounded-full border-2 border-purple-500/50 bg-background/50 backdrop-blur-sm font-medium overflow-hidden flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              </span>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 sm:gap-4 lg:gap-5 justify-center"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 sm:p-3 lg:p-3.5 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator - moved higher to avoid overlap */}
      <motion.div
        className="absolute bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 lg:gap-2"
        >
          <span className="text-xs text-muted-foreground">
            Scroll to explore
          </span>
          <div className="w-5 h-8 lg:w-6 lg:h-10 rounded-full border-2 border-purple-500/50 flex justify-center relative">
            <motion.div
              className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mt-1.5 lg:mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
