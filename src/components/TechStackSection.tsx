import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Server, Smartphone, Database, GitBranch } from "lucide-react";

interface TechCategory {
  title: string;
  icon: React.ElementType;
  technologies: string[];
  color: string;
  bgGradient: string;
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    technologies: ["React Native", "Expo", "Mobile UI/UX", "Cross-Platform Apps"],
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    color: "text-pink-400",
    bgGradient: "from-pink-500/10 via-pink-500/5 to-transparent",
    technologies: ["Figma", "UI/UX Design", "Responsive Design", "Design Systems", "Prototyping", "Wireframing"],
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    color: "text-green-400",
    bgGradient: "from-green-500/10 via-green-500/5 to-transparent",
    technologies: ["Git", "GitHub", "Vite.js", "Webpack", "npm/yarn", "VS Code", "Chrome DevTools"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-orange-400",
    bgGradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    technologies: ["REST APIs", "GraphQL", "Node.js", "Express.js", "API Integration", "JSON", "Axios"],
  },
  {
    title: "Libraries & More",
    icon: Database,
    color: "text-indigo-400",
    bgGradient: "from-indigo-500/10 via-indigo-500/5 to-transparent",
    technologies: ["Storybook", "Redux", "Zustand", "React Query", "Jest", "React Testing Library", "Data Structures", "Algorithms"],
  },
];

export default function TechStackSection() {
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
    <section id="tech-stack" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
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
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies I use to build scalable, performant, and beautiful applications
            </p>
          </motion.div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full bg-card/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-border transition-all duration-300">
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className={`relative w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-background/50 flex items-center justify-center border border-border/50 ${category.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-7 h-7 lg:w-8 lg:h-8" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-2xl blur-md opacity-50`} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{category.technologies.length} technologies</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    {category.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm lg:text-base"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color.replace('text', 'from')}-400 to-transparent`} />
                        <span className="text-muted-foreground hover:text-foreground transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 lg:mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                Also <span className="gradient-text">Experienced</span> With
              </h3>
              <p className="text-muted-foreground text-lg">
                Additional skills and technologies I work with
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[
                { skill: "SEO Optimization", icon: "📈", description: "Improving search rankings" },
                { skill: "Web Performance", icon: "⚡", description: "Core Web Vitals optimization" },
                { skill: "Accessibility (a11y)", icon: "♿", description: "WCAG compliance" },
                { skill: "Progressive Web Apps", icon: "📱", description: "Offline-first applications" },
                { skill: "CI/CD", icon: "🚀", description: "Automated deployments" },
                { skill: "Agile/Scrum", icon: "🔄", description: "Collaborative development" },
                { skill: "Code Reviews", icon: "👥", description: "Maintaining code quality" },
                { skill: "Technical Documentation", icon: "📝", description: "Clear documentation" }
              ].map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-card/30 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="text-2xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm lg:text-base mb-1 group-hover:text-purple-400 transition-colors">
                        {item.skill}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 