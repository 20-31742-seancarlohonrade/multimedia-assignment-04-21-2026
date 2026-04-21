import { PortfolioHeader } from './components/PortfolioHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { PortfolioFooter } from './components/PortfolioFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <PortfolioFooter />
    </div>
  );
}
