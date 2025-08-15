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
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+968 9107 3089</span>
            </div>
            <div className="flex items-center gap-2 text-red-500">
              <Mail className="w-4 h-4" />
              <span>alsafahypermarket01@gmail.com</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Open Daily: 8:00 AM - 12:00 AM
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Al Safa Hypermarket Logo" className="w-12 h-12 rounded-lg object-cover shadow-soft" />
            <div>
              <h1 className="font-bold text-[#e64343] text-left text-4xl">AL SAFA
Hypermarket</h1>
              <p className="text-sm hidden sm:block text-green-700 text-left">Hypermarket</p>
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