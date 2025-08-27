import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Heart,
  ArrowUp
} from "lucide-react";
import content from "@/data/content.json";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin
  };

  // Fonction de sécurité pour obtenir l'icône sociale
  const getSocialIcon = (iconName: string) => {
    const IconComponent = socialIcons[iconName as keyof typeof socialIcons];
    if (!IconComponent) {
      console.warn(`Icône sociale non trouvée: ${iconName}, utilisation de l'icône par défaut`);
      return Facebook; // Icône par défaut
    }
    return IconComponent;
  };

  const services = content.services.servicesList;

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Contenu principal du footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={content.header.logoImage} 
                  alt={content.header.logo} 
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.footer.description}
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                {content.footer.socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{content.footer.quickLinksTitle}</h3>
              <ul className="space-y-3">
                {content.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{content.footer.servicesTitle}</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations de contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{content.footer.contactTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      {content.contact.info.address}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-300 text-sm">
                      {content.contact.info.phone}
                    </div>
                    <div className="text-gray-500 text-xs">{content.footer.available24_7}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-300 text-sm">
                      {content.contact.info.email}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-300 text-sm">
                      {content.contact.info.hours}
                    </div>
                    <div className="text-gray-500 text-xs">{content.footer.weekendNote}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section de newsletter */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {content.footer.newsletter.title}
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              {content.footer.newsletter.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={content.footer.newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
                {content.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {content.footer.copyright}
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {content.footer.legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Message d'amour */}
      <div className="text-center py-4 bg-gray-950">
        <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
          <span>{content.footer.createdFor}</span>
          <Heart size={16} className="text-red-500 fill-current animate-pulse" />
          <span>{content.footer.loveMessage}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
