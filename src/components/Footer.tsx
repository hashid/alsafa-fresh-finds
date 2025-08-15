import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Al Safa Hypermarket Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Al Safa Hypermarket</h3>
                <p className="text-white/80 text-sm">Seeb, Muscat</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/80" />
                <a 
                  href="tel:+96891073089" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  +968 9107 3089
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/80 mt-0.5" />
                <a 
                  href="mailto:alsafahypermarket01@gmail.com" 
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  alsafahypermarket01@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5" />
                <div className="text-white/90 text-sm">
                  7729 Way, Al Maabilah<br />
                  Seeb, Muscat 130
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white/80" />
                <div className="text-white/90">
                  <div className="font-medium">Every Day</div>
                  <div className="text-sm">8:00 AM - 12:00 AM</div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-white/10 rounded-lg">
                <p className="text-white/90 text-sm text-center">
                  Open 7 days a week for your convenience!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Al Safa Hypermarket. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Quality Products • Competitive Prices • Excellent Service
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100054276620484" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/alsafahypermarket/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};