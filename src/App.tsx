import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen snap-y snap-mandatory">
      {/* High-level composition keeps sections isolated and easy to scale into a blog/docs area later. */}
      <Header onToggleTheme={toggleTheme} isDark={theme === 'dark'} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
