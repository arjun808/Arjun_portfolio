import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Pvt. Ltd.",
    location: "Indore, India",
    period: "Jan 2022 - Present",
    duration: "2+ years",
    type: "Full Time",
    description:
      "Developing and maintaining responsive web applications using React and TypeScript. Leading UI implementation for key client projects and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led the frontend development of 5+ major client projects",
      "Implemented responsive designs for 15+ web applications"
    ]
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Innovations",
    location: "Indore, India",
    period: "Jun 2021 - Dec 2021",
    duration: "7 months",
    type: "Full Time",
    description:
      "Collaborated with the design team to implement pixel-perfect UI components. Worked on multiple client projects using modern JavaScript frameworks.",
    technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "REST APIs"],
    achievements: [
      "Developed reusable component library used across 8 projects",
      "Reduced bug reports by 25% through comprehensive testing",
      "Successfully delivered 10+ client websites on schedule"
    ]
  },
  {
    title: "Frontend Developer Intern",
    company: "StartUp Hub Indore",
    location: "Indore, India",
    period: "Jan 2021 - May 2021",
    duration: "5 months",
    type: "Internship",
    description:
      "Started my professional journey learning modern web development practices. Built responsive websites and gained hands-on experience with React.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    achievements: [
      "Completed 3-month training program with distinction",
      "Built 5+ responsive landing pages for local businesses",
      "Learned React and modern JavaScript development"
    ]
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-16 lg:py-24 overflow-hidden bg-background/50"
    >
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2
              className="text-3xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My 3-year journey in frontend development
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500"
                style={{ height: lineHeight }}
              />
            </div>

            {/* Experience items */}
            <div className="space-y-8 lg:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline dot - hidden on mobile */}
                  <motion.div
                    className="hidden lg:block absolute left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />

                  {/* Content */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="relative group">
                      {/* Card gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative p-6 lg:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/30 transition-all duration-300">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-2 flex items-center gap-2">
                              <Briefcase className="w-5 h-5 text-purple-500" />
                              {exp.title}
                            </h3>
                            <p className="text-lg font-medium text-purple-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-2">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-foreground border border-purple-500/20">
                              {exp.type}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2 text-purple-400">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Hover indicator */}
                        <motion.div
                          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-4 h-4 text-purple-500" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Throughout my journey, I&apos;ve worked on diverse projects, collaborated with talented teams, 
              and continuously expanded my skill set to deliver high-quality frontend solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
