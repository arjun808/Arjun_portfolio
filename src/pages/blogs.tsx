import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamically import CustomCursor to avoid SSR issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const blogPosts = [
  {
    title: "Mastering React Performance: Tips and Tricks",
    excerpt:
      "Learn advanced techniques to optimize your React applications for maximum performance and better user experience.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
    slug: "mastering-react-performance",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Building Scalable Design Systems with React and TypeScript",
    excerpt:
      "A comprehensive guide to creating maintainable and scalable design systems for modern web applications.",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "building-scalable-design-systems",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt:
      "Explore the latest CSS features and techniques that will level up your styling game in 2024.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "CSS",
    slug: "modern-css-techniques",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "Next.js 14: What's New and Exciting",
    excerpt:
      "Explore the latest features in Next.js 14, including improved performance, better developer experience, and new APIs.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Next.js",
    slug: "nextjs-14-features",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    gradient: "from-green-500 to-blue-500",
  },
  {
    title: "State Management in React: Redux vs Context API",
    excerpt:
      "Compare different state management solutions in React and learn when to use each approach in your applications.",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "React",
    slug: "react-state-management",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Creating Smooth Animations with Framer Motion",
    excerpt:
      "Learn how to add beautiful animations to your React applications using Framer Motion's powerful animation library.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Animation",
    slug: "framer-motion-animations",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&h=400&fit=crop",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const categories = [
  "All",
  "React",
  "TypeScript",
  "CSS",
  "Next.js",
  "Animation",
];

export default function Blogs() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <>
      <Head>
        <title>Blog - Arjun Patidar | Frontend Developer</title>
        <meta
          name="description"
          content="Read my thoughts on web development, React, TypeScript, and modern frontend technologies. Tips, tutorials, and insights from 3 years of experience."
        />
        <meta
          name="keywords"
          content="React Blog, TypeScript Tutorial, Web Development, Frontend Development, JavaScript, CSS, Next.js"
        />
        <meta name="author" content="Arjun Patidar" />
        <meta
          property="og:title"
          content="Blog - Arjun Patidar | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Thoughts on web development and modern frontend technologies."
        />
        <meta property="og:url" content="https://anshgupta.dev/blogs" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Arjun Patidar's Blog",
              description:
                "Frontend development blog covering React, TypeScript, and modern web technologies",
              url: "https://anshgupta.dev/blogs",
              author: {
                "@type": "Person",
                name: "Arjun Patidar",
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

          <Navigation />

          <main className="pt-24 pb-16">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-20 overflow-hidden">
              <div className="absolute inset-0 grid-background opacity-30" />

              {/* Animated gradient orbs */}
              <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />

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
                    <BookOpen className="w-10 h-10 text-white" />
                  </motion.div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
                    My <span className="gradient-text">Blog</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Sharing knowledge, experiences, and insights from my journey
                    as a frontend developer
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="py-8 lg:py-12">
                <div className="container mx-auto px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 mb-6 lg:mb-8"
                  >
                    <TrendingUp className="w-5 h-5 text-purple-500" />
                    <h2 className="text-2xl lg:text-3xl font-bold">
                      Featured Posts
                    </h2>
                  </motion.div>
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {featuredPosts.map((post, index) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        passHref
                      >
                        <motion.article
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="group cursor-pointer h-full"
                        >
                          <div className="relative h-full overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                            {/* Image */}
                            <div className="relative h-48 lg:h-56 overflow-hidden">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-80`}
                              />
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover opacity-50"
                              />
                              <div className="absolute top-4 left-4 flex items-center gap-2">
                                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium text-white">
                                  Featured
                                </span>
                                <span className="px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-xs lg:text-sm text-white">
                                  {post.category}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8">
                              <h3 className="text-xl lg:text-2xl font-semibold mb-3 group-hover:text-purple-500 transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-sm lg:text-base text-muted-foreground mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                                    {post.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                                    {post.readTime}
                                  </span>
                                </div>
                                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-purple-500 group-hover:translate-x-2 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Filter Section */}
            <section className="py-6 lg:py-8">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap justify-center gap-2 lg:gap-4"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25"
                          : "bg-secondary/50 hover:bg-secondary border border-border"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-8 lg:py-12">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  ref={ref}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {filteredPosts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
                      <motion.article
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group cursor-pointer h-full"
                      >
                        <div className="h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60`}
                            />
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute bottom-4 left-4">
                              <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 lg:p-6">
                            <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 group-hover:text-purple-500 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm lg:text-base text-muted-foreground mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs lg:text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 lg:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl mx-auto text-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl" />
                    <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-purple-500/20">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                        Stay Updated
                      </h2>
                      <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
                        Get the latest articles and tutorials delivered straight
                        to your inbox
                      </p>
                      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm lg:text-base"
                        />
                        <motion.button
                          type="submit"
                          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm lg:text-base"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Subscribe
                        </motion.button>
                      </form>
                    </div>
                  </div>
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
