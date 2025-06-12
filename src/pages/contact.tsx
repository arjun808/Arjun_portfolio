import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import dynamic from "next/dynamic";
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Arjun Patidar | Frontend Developer</title>
        <meta
          name="description"
          content="Get in touch with Arjun Patidar for freelance projects, collaborations, or just to say hello."
        />
        <meta
          property="og:title"
          content="Contact - Arjun Patidar | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Get in touch for freelance projects, collaborations, or just to say hello."
        />
        <meta property="og:url" content="https://anshgupta.dev/contact" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <CustomCursor />
        <main className="pt-24">
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
