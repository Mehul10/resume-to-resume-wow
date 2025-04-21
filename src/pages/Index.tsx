import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import LeetCode from "@/components/LeetCode";
import Certificates from "@/components/Certificates";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Certificates />
      <LeetCode />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
