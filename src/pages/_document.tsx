import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to improve font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Add Inter font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <body className="antialiased">
        <noscript>
          <div style={{ 
            padding: '20px', 
            backgroundColor: '#0a0a0a', 
            color: '#ffffff',
            fontFamily: 'Inter, system-ui, sans-serif',
            minHeight: '100vh'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Arjun Patidar - Senior Frontend Developer</h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#888' }}>
                3 Years of Experience | React | TypeScript | Next.js | React Native
              </p>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About Me</h2>
              <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                I&apos;m a passionate Frontend Developer with 3 years of experience crafting exceptional digital experiences. 
                Specializing in modern web technologies including React, TypeScript, Next.js, and React Native.
              </p>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact</h2>
              <p>Email: arjunjagotra2001@gmail.com</p>
              <p>Phone: +91 7909788474</p>
              <p>Location: Indore, India</p>
              <p>LinkedIn: linkedin.com/in/anshgupta</p>
              <p>GitHub: github.com/anshgupta</p>
              <p style={{ marginTop: '2rem', color: '#666' }}>
                Please enable JavaScript for the best experience.
              </p>
            </div>
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
