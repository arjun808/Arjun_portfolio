import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable, and efficient code following industry best practices.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Creating beautiful, responsive interfaces with attention to detail and user experience.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency to deliver the best user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively in teams, communicating clearly, and delivering results on time.",
  },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate frontend developer with 2+ years of experience creating
              exceptional web experiences
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div style={{ y }} className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                  <motion.div
                    className="text-6xl font-bold gradient-text"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    AP
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a frontend developer specializing in building
                exceptional digital experiences. With expertise in React,
                TypeScript, and Next.js, I create performant and scalable web
                applications that delight users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past 2 years, I&apos;ve worked as a freelancer, on
                contract basis, and in full-time positions, collaborating with
                diverse teams and clients to bring their visions to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m passionate about clean code, modern design patterns,
                and creating intuitive user interfaces that make a difference.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-muted-foreground/50 transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
