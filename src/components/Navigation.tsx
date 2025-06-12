import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blogs" },
  { name: "Learn", href: "/learn" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3" : "py-4 lg:py-6"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 sm:px-6 md:px-8 py-3 lg:py-4 transition-all duration-300",
              isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg" : ""
            )}
          >
            <Link href="/" passHref>
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Status indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* AG Logo */}
                <div className="relative">
                  <div className="text-2xl lg:text-3xl font-black tracking-tight relative">
                    <span className="inline-block transform hover:rotate-12 transition-transform duration-300">
                      <span className="bg-gradient-to-br from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                        A
                      </span>
                    </span>
                    <span className="inline-block transform hover:-rotate-12 transition-transform duration-300 ml-[-0.1em]">
                      <span className="bg-gradient-to-br from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        P
                      </span>
                    </span>
                  </div>

                  {/* Enhanced decorative elements */}
                  <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <motion.div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/50 via-blue-400/50 to-blue-500/50 scale-x-0 group-hover:scale-x-75 transition-transform duration-700 delay-100 origin-right" />
                </div>

                {/* Available text - hidden on mobile */}
                <motion.span
                  className="hidden sm:block absolute -bottom-4 left-0 text-[10px] text-green-400 font-medium whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Available for opportunities
                </motion.span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <motion.div
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-300 cursor-pointer",
                      router.pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {router.pathname === item.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Fixed to avoid overlap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-background border-b border-border shadow-lg mt-20 sm:mt-24"
            >
              <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <nav className="flex flex-col gap-3 sm:gap-4">
                  {navItems.map((item, index) => (
                    <Link key={item.name} href={item.href} passHref>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "text-base sm:text-lg font-medium py-3 sm:py-4 px-4 rounded-lg transition-all duration-300 cursor-pointer",
                          router.pathname === item.href
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                  <motion.a
                    href="/cv.pdf"
                    download
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="mt-4 px-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-center hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download CV
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
