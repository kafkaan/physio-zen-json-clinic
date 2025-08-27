import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin, Clock, Star, Users, Award } from "lucide-react";
import content from "@/data/content.json";
import heroImage from "@/assets/hero-physio.jpg";

const Hero = () => {
  const handleReservation = () => {
    alert(`📞 Appelez-nous pour réserver : ${content.contact.info.phone}`);
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge de confiance */}
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star size={16} className="text-green-600" />
              <span>{content.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-loose">
              {content.hero.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              {content.hero.subtitle}
            </p>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {content.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleReservation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-lg font-semibold"
              >
                <Phone size={20} />
                <span>{content.hero.cta.primary}</span>
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg font-semibold"
              >
                <span>{content.hero.cta.secondary}</span>
              </Button>
            </div>

            {/* Informations de contact rapides */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">{content.contact.info.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock size={16} />
                <span className="text-sm">{content.contact.info.hours}</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            {/* Image principale avec effets */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <img
                src={heroImage}
                alt="Modern physiotherapy clinic"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Carte flottante avec informations */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{content.hero.floatingCard.title}</div>
                    <div className="text-sm text-gray-600">{content.hero.floatingCard.subtitle}</div>
                  </div>
                </div>
              </div>

              {/* Badge de qualité */}
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award size={16} />
                  <span>{content.hero.qualityBadge.text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;