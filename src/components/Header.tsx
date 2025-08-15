import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Al Safa Hypermarket Logo" className="w-16 h-16 rounded-full object-cover shadow-soft" />
            <div className="flex flex-col">
              <h1 className="font-bold text-[#e64343] text-3xl leading-tight">AL SAFA</h1>
              <h1 className="font-bold text-green-700 text-2xl leading-tight">HYPERMARKET</h1>
              <p className="text-sm text-gray-500 mt-1">your satisfaction is our greatness</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary-dark text-white shadow-green">
              Get Directions
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary-dark text-white shadow-green w-full">
                Get Directions
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};