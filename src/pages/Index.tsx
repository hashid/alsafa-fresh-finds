import { useState, useEffect } from 'react';
import { ModernHeader } from '@/components/ModernHeader';
import { ModernHero } from '@/components/ModernHero';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BestDealsImageSection } from '@/components/BestDealsImageSection';
import { BestDealsSection } from '@/components/BestDealsSection';
import { ModernAbout } from '@/components/ModernAbout';
import { ContactSection } from '@/components/ContactSection';
import { ModernFooter } from '@/components/ModernFooter';
import { LoadingScreen } from '@/components/LoadingScreen';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      
      <div className={`min-h-screen font-poppins transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ModernHeader />
        <main>
          <div id="hero">
            <ModernHero />
          </div>
          <div id="categories">
            <CategoriesSection />
          </div>
          <div id="deals">
            <BestDealsImageSection />
          </div>
          
          <div id="about">
            <ModernAbout />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <ModernFooter />
      </div>
    </>
  );
};
export default Index;