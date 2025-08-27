import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import content from "@/data/content.json";
import logoImage from "@/assets/402857423_745944100709769_84383080193908286_n.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReservation = () => {
    // Afficher le numéro de téléphone pour la réservation
    alert(`📞 Appelez-nous pour réserver : ${content.contact.info.phone}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo avec image depuis content.json */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt={content.header.logo} 
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {content.header.nav.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={handleReservation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>{content.header.reservationButton}</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-2">
            {content.header.nav.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(item.href.replace('#', ''));
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button 
                onClick={() => {
                  handleReservation();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone size={16} />
                <span>{content.header.reservationButton}</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;