import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="section-line" />
      <ProjectsSection />
      <div className="section-line" />
      <SkillsSection />
      <div className="section-line" />
      <AboutSection />
      <div className="section-line" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
