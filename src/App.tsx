import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { BackdropLogo } from './components/BackdropLogo';
import { BackToTopButton } from './components/BackToTopButton';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      
      // Transparency logic - transparent only in hero section
      if (currentScrollY < 600) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <BackdropLogo />
      <Navigation showNav={showNav} isTransparent={isTransparent} />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;