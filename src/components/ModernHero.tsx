import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import heroNew from '@/assets/hero-new.jpg';
export const ModernHero = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  return <section className="min-h-screen bg-white flex items-center py-10 md:py-20 relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroNew} alt="Al Safa Hypermarket storefront and shopping experience" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Mobile Layout - Centered */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 px-2">
            {/* Hero Title - Centered */}
            <div className="text-center fade-in-up pt-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-tight bg-gradient-to-r from-mustard-yellow via-premium-gold to-mustard-yellow bg-clip-text text-transparent text-shimmer drop-shadow-lg">
                <span className="block">Your one-stop</span>
                <span className="block">hypermarket in Mabela</span>
              </h1>
              <p className="text-base sm:text-lg text-white mt-4 leading-relaxed font-normal fade-in-left drop-shadow-md" style={{
              animationDelay: '0.3s'
            }}>
                
              </p>
            </div>
            
            {/* WhatsApp Section - Centered */}
            <div className="fade-in-up space-y-4 mt-2" style={{
            animationDelay: '0.4s'
          }}>
              {/* WhatsApp Text */}
              <div className="text-center">
                <p className="text-sm leading-relaxed text-white/90 font-medium">
                  <span className="block">Send "Hi" on WhatsApp and save our number</span>
                  <span className="block">to get exclusive updates and special offers</span>
                </p>
              </div>
              
              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <Button onClick={() => window.open('https://wa.me/96891073089', '_blank')} className="bg-gradient-to-r from-hypermarket-red via-hypermarket-red to-hypermarket-red/90 hover:from-hypermarket-red/95 hover:via-hypermarket-red hover:to-hypermarket-red/95 text-white font-semibold text-sm rounded-lg px-4 py-2.5 h-10 min-w-[110px] shadow-lg hover:shadow-xl hover:shadow-hypermarket-red/40 transition-all duration-500 ease-out flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <MessageSquare className="w-4 h-4 relative z-10 flex-shrink-0" />
                  <span className="relative z-10 text-sm leading-none">WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:min-h-screen lg:text-center">
          {/* Content Centered */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight bg-gradient-to-r from-mustard-yellow via-premium-gold to-mustard-yellow bg-clip-text text-transparent my-0 text-shimmer drop-shadow-lg">
                Your one-stop hypermarket in Mabela
              </h1>
              <p className="text-lg text-white mt-6 leading-relaxed font-normal fade-in-left drop-shadow-md" style={{
              animationDelay: '0.3s'
            }}>
                <span className="block">Your satisfaction is our guarantee</span>
              </p>
            </div>
            
            {/* WhatsApp Section */}
            <div className="fade-in-up space-y-4" style={{
            animationDelay: '0.4s'
          }}>
              {/* WhatsApp Text */}
              <div className="text-center">
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  <span className="block">Send "Hi" on WhatsApp and save our number</span>
                  <span className="block">to get exclusive updates and special offers</span>
                </p>
              </div>
              
              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <Button onClick={() => window.open('https://wa.me/96891073089', '_blank')} className="bg-gradient-to-r from-hypermarket-red to-hypermarket-red/90 hover:from-hypermarket-red/90 hover:to-hypermarket-red text-white font-bold text-sm sm:text-base md:text-lg rounded-xl w-40 sm:w-44 md:w-48 h-12 sm:h-13 md:h-14 px-4 sm:px-5 md:px-7 py-3 md:py-4 shadow-lg hover:shadow-2xl hover:shadow-hypermarket-red/30 transition-all duration-500 ease-out flex items-center justify-center gap-2 transform hover:scale-105 border border-white/20 backdrop-blur-sm relative overflow-hidden group">
                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 flex-shrink-0" />
                  <span className="relative z-10 whitespace-nowrap">WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};