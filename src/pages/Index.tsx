import { ModernHeader } from '@/components/ModernHeader';
import { ModernHero } from '@/components/ModernHero';
import { CategoriesSection } from '@/components/CategoriesSection';
import { BestDealsImageSection } from '@/components/BestDealsImageSection';
import { BestDealsSection } from '@/components/BestDealsSection';
import { ModernAbout } from '@/components/ModernAbout';
import { ContactSection } from '@/components/ContactSection';
import { ModernFooter } from '@/components/ModernFooter';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <ModernHeader />
      <main>
        <div id="hero">
          <ModernHero />
        </div>
        <div id="categories">
          <CategoriesSection />
        </div>
        <BestDealsImageSection />
        <div id="deals">
          <BestDealsSection />
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
  );
};

export default Index;
