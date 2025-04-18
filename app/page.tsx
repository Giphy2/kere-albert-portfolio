import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ResumeSection } from '@/components/sections/ResumeSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}