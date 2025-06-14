# Portfolio Landing Page

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Dark Theme**: Sleek dark design with custom color palette
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Parallax Effects**: Dynamic scrolling effects throughout the site
- **Responsive Design**: Fully responsive across all devices
- **Custom Cursor**: Interactive cursor animation (desktop only)
- **Smooth Scrolling**: Enhanced scrolling experience with Lenis
- **Type Safety**: Built with TypeScript for better developer experience
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP, React Spring
- **Icons**: Lucide React, Radix UI Icons
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-landing.git
cd portfolio-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio-landing/
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   └── SmoothScroll.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── pages/           # Next.js pages
│   │   ├── _app.tsx
│   │   └── index.tsx
│   └── styles/          # Global styles
│       └── globals.css
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customization

### Colors
The color scheme is defined in `src/styles/globals.css` using CSS custom properties. You can modify the colors in the `@theme` block.

### Content
Update the content in each component file:
- Personal information in `HeroSection.tsx`
- About content in `AboutSection.tsx`
- Skills in `SkillsSection.tsx`
- Work experience in `ExperienceSection.tsx`
- Contact details in `ContactSection.tsx`

### Social Links
Update social media links in:
- `HeroSection.tsx`
- `ContactSection.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Arjun Patidar**
- Frontend Developer
- 2+ Years Experience
- Specializing in React, TypeScript, and Next.js

---

Built with ❤️ using Next.js and TypeScript
#   A r j u n _ p o r t f o l i o  
 