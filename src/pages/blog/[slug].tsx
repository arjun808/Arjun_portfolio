import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, User, Tag } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import CustomCursor to avoid SSR issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

// Sample blog posts data - In a real app, this would come from a CMS or markdown files
const blogPosts: BlogPost[] = [
  {
    slug: "mastering-react-performance",
    title: "Mastering React Performance: Tips and Tricks",
    excerpt:
      "Learn advanced techniques to optimize your React applications for maximum performance and better user experience.",
    content: `
      <h2>Introduction</h2>
      <p>React performance optimization is crucial for creating smooth, responsive applications. In this comprehensive guide, we'll explore advanced techniques to make your React apps lightning fast.</p>
      
      <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop" alt="React Performance" style="width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0;" />
      
      <h2>1. Understanding React's Rendering Behavior</h2>
      <p>React's virtual DOM is powerful, but understanding when and why components re-render is key to optimization. Let's dive into the reconciliation process and how to minimize unnecessary renders.</p>
      
      <h3>Using React.memo Effectively</h3>
      <p>React.memo is a higher-order component that memoizes the result. It only re-renders if props change:</p>
      <pre><code>const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data.value}</div>;
});</code></pre>
      
      <h2>2. Code Splitting and Lazy Loading</h2>
      <p>Reduce initial bundle size by splitting your code and loading components only when needed:</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}</code></pre>
      
      <h2>3. Optimizing State Management</h2>
      <p>Choose the right state management solution and structure your state to minimize re-renders. Consider using useReducer for complex state logic and context API wisely.</p>
      
      <h2>4. Virtual Scrolling for Large Lists</h2>
      <p>When dealing with large datasets, implement virtual scrolling to render only visible items:</p>
      <pre><code>import { FixedSizeList } from 'react-window';

const BigList = ({ items }) => (
  <FixedSizeList
    height={600}
    itemCount={items.length}
    itemSize={35}
    width='100%'
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </FixedSizeList>
);</code></pre>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Monitor your app's performance regularly using React DevTools Profiler and browser performance tools. Remember, premature optimization is the root of all evil - optimize when you have identified real bottlenecks.</p>
    `,
    date: "2024-03-15",
    author: "Arjun Patidar",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
  },
  {
    slug: "building-scalable-design-systems",
    title: "Building Scalable Design Systems with React and TypeScript",
    excerpt:
      "A comprehensive guide to creating maintainable and scalable design systems for modern web applications.",
    content: `
      <h2>Why Design Systems Matter</h2>
      <p>Design systems are the backbone of consistent, scalable applications. They provide a shared language between designers and developers, ensuring brand consistency and speeding up development.</p>
      
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop" alt="Design Systems" style="width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0;" />
      
      <h2>1. Setting Up Your Design System</h2>
      <p>Start with a solid foundation using TypeScript for type safety and Storybook for component documentation:</p>
      <pre><code>// Button.types.ts
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}</code></pre>
      
      <h2>2. Creating Flexible Components</h2>
      <p>Build components that are flexible yet consistent. Use composition patterns and prop spreading wisely:</p>
      <pre><code>export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'btn',
        \`btn--\${variant}\`,
        \`btn--\${size}\`
      )}
      {...props}
    >
      {children}
    </button>
  );
};</code></pre>
      
      <h2>3. Design Tokens</h2>
      <p>Establish design tokens for colors, spacing, typography, and more. These become your single source of truth:</p>
      <pre><code>export const tokens = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    // ...
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    // ...
  },
};</code></pre>
      
      <h2>Conclusion</h2>
      <p>A well-implemented design system saves time, ensures consistency, and scales with your application. Start small, document everything, and iterate based on team feedback.</p>
    `,
    date: "2024-03-10",
    author: "Arjun Patidar",
    readTime: "10 min read",
    tags: ["Design Systems", "React", "TypeScript", "UI/UX"],
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt:
      "Explore the latest CSS features and techniques that will level up your styling game in 2024.",
    content: `
      <h2>The Evolution of CSS</h2>
      <p>CSS has evolved dramatically. From Flexbox to Grid, and now Container Queries and CSS Layers, modern CSS is more powerful than ever.</p>
      
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop" alt="Modern CSS" style="width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0;" />
      
      <h2>1. Container Queries</h2>
      <p>Style elements based on their container size, not just viewport:</p>
      <pre><code>@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}</code></pre>
      
      <h2>2. CSS Grid Mastery</h2>
      <p>Create complex layouts with ease using CSS Grid's powerful features:</p>
      <pre><code>.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}</code></pre>
      
      <h2>3. Custom Properties and Theming</h2>
      <p>Build dynamic themes with CSS custom properties:</p>
      <pre><code>:root {
  --primary-color: #6366f1;
  --spacing-unit: 1rem;
}

.themed-component {
  color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Modern CSS empowers developers to create sophisticated designs with less code. Stay updated with new features and experiment with them in your projects.</p>
    `,
    date: "2024-03-05",
    author: "Arjun Patidar",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    coverImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Arjun Patidar Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta name="keywords" content={post.tags.join(", ")} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://anshgupta.dev/blog/${post.slug}`}
        />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:tag" content={post.tags.join(", ")} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              author: {
                "@type": "Person",
                name: post.author,
              },
              datePublished: post.date,
              keywords: post.tags.join(", "),
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
          <main className="pt-24 pb-16 lg:pt-32 lg:pb-20">
            <article className="container mx-auto px-4 sm:px-6 max-w-4xl">
              {/* Back Button */}
              <Link href="/blogs" passHref>
                <motion.div
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 cursor-pointer"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </motion.div>
              </Link>

              {/* Article Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 lg:mb-12"
              >
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-8">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                )}

                <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/50 text-xs lg:text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.header>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                  prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                  prose-blockquote:border-purple-500 prose-blockquote:bg-secondary/20
                  prose-img:rounded-xl prose-img:border prose-img:border-border"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 lg:mt-16 p-6 lg:p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl lg:text-2xl">
                    AP
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2">
                      About the Author
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Arjun Patidar is a Frontend Developer with 3 years of
                      experience building modern web applications. Based in
                      Indore, India, passionate about React, TypeScript, and
                      creating exceptional user experiences.
                    </p>
                    <Link href="/about" passHref>
                      <motion.span
                        className="text-purple-400 hover:text-purple-300 cursor-pointer inline-flex items-center gap-1"
                        whileHover={{ x: 5 }}
                      >
                        Learn more about me
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 lg:mt-16"
              >
                <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                  Related Posts
                </h2>
                <div className="grid gap-6">
                  {blogPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        passHref
                      >
                        <motion.div
                          whileHover={{ x: 10 }}
                          className="p-4 lg:p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 cursor-pointer card-hover"
                        >
                          <h3 className="text-lg lg:text-xl font-semibold mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground text-sm lg:text-base mb-2">
                            {relatedPost.excerpt}
                          </p>
                          <span className="text-sm text-purple-400">
                            Read more →
                          </span>
                        </motion.div>
                      </Link>
                    ))}
                </div>
              </motion.div>
            </article>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
