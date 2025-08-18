import bestDealsBanner from '@/assets/best-deals-banner.jpg';
export const BestDealsImageSection = () => {
  return <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-hypermarket-red rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-1000 opacity-0 translate-y-12 scale-95 animate-on-scroll" style={{
        animation: 'fadeInSlideUp 1.2s ease-out 0.5s forwards, scale-in 0.8s ease-out 0.7s forwards'
      }}>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
              Special Deals & Offers
            </h2>
            <p className="text-xl text-white/90 mb-6">Discover amazing discounts.</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <a 
                href="https://wa.me/96891073089" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-white/80 transition-colors duration-300 cursor-pointer"
              >
                Contact us to know more!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};