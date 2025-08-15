import { Header } from '@/components/Header';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { AboutSection } from '@/components/AboutSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <HeroSlideshow />
        </div>
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
