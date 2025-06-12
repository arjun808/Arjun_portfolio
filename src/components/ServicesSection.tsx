import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Globe, 
  Smartphone, 
  Paintbrush, 
  Zap, 
  Code2, 
  Users,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Building responsive, scalable web applications with modern frameworks and best practices.",
    skills: ["SPA Development", "Progressive Web Apps", "Responsive Design", "Cross-browser Compatibility"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications that deliver native-like performance and user experience.",
    skills: ["React Native", "iOS & Android", "Mobile UI/UX", "App Optimization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Implementation",
    description: "Transforming designs into pixel-perfect, interactive interfaces with smooth animations.",
    skills: ["Design Systems", "Component Libraries", "Animations", "Accessibility"],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving application performance, load times, and overall user experience.",
    skills: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Core Web Vitals"],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code2,
    title: "Frontend Architecture",
    description: "Designing and implementing scalable, maintainable frontend architectures.",
    skills: ["Component Architecture", "State Management", "Code Organization", "Best Practices"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in agile teams with designers, backend developers, and stakeholders.",
    skills: ["Agile/Scrum", "Code Reviews", "Documentation", "Mentoring"],
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-16 lg:py-20 relative overflow-hidden bg-background/50">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              What I Can <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Core competencies and areas where I can add immediate value to your team
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                {/* Card */}
                <div className="relative h-full bg-card/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-purple-500/30 transition-all duration-300">
                  {/* Gradient Background */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-6 lg:p-8">
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-xl lg:text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2.5">
                      {service.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-3 text-sm lg:text-base group/item"
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-purple-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12 lg:mt-16"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Looking for a dedicated frontend developer to join your team?
            </p>
            <Link href="/contact" passHref>
              <motion.div
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 