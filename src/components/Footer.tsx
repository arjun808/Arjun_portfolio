import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code2,
  Coffee,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blogs" },
    { name: "Learn", href: "/learn" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", icon: Github, href: "https://github.com/arjun808" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arjun-patidar-6556b2226",
    },
    { name: "Email", icon: Mail, href: "mailto:arjunjagotra2001@gmail.com" },
    { name: "Phone", icon: Phone, href: "tel:+917909788474" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/50 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 grid-background opacity-5" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <Link href="/" passHref>
                  <motion.div
                    className="inline-flex items-center gap-2 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <div className="text-3xl font-black">
                        <span className="inline-block transform group-hover:rotate-12 transition-transform duration-300">
                          <span className="bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                            A
                          </span>
                        </span>
                        <span className="inline-block transform group-hover:-rotate-12 transition-transform duration-300 ml-[-0.1em]">
                          <span className="bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            P
                          </span>
                        </span>
                      </div>
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
                Frontend Developer crafting exceptional digital experiences with
                modern web technologies and a passion for beautiful interfaces.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Indore, India</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 inline-flex group hover:border-green-500/40 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-green-400">
                  Available for work
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Quick Links
              </h3>
              <nav className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <motion.div
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer py-1"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-400 group-hover:w-4 transition-all duration-300" />
                      <span className="relative">
                        {link.name}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                Get In Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:arjunjagotra2001@gmail.com"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">
                      Email
                    </div>
                    <div className="text-xs">arjunjagotra2001@gmail.com</div>
                  </div>
                </a>
                <a
                  href="tel:+917000899867"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-purple-400 transition-colors">
                      Phone
                    </div>
                    <div className="text-xs">+91 7909788474</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-purple-400" />
                Let&apos;s Connect
              </h3>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2.5 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 relative z-10 group-hover:text-purple-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/contact" passHref>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowUpRight className="w-3 h-3 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>© {currentYear} Arjun Patidar</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>

            <motion.div
              className="flex items-center gap-2 text-xs text-muted-foreground group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="group-hover:text-red-500 transition-colors"
              >
                <Heart className="w-3 h-3 fill-current" />
              </motion.div>
              <span>&</span>
              <Coffee className="w-3 h-3 group-hover:text-purple-400 transition-colors" />
              <span>using</span>
              <Code2 className="w-3 h-3 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
