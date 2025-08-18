import bestDealsBanner from '@/assets/best-deals-banner.jpg';

export const BestDealsImageSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="pop-up">
            <img 
              src={bestDealsBanner} 
              alt="Best Deals" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};