import { 
  Hand, 
  Activity, 
  Bone, 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  Target,
  CheckCircle,
  Clock,
  Star,
  Users
} from "lucide-react";
import content from "@/data/content.json";

const Services = () => {
  const serviceIcons = {
    hand: Hand,
    activity: Activity,
    bone: Bone,
    brain: Brain,
    heart: Heart,
    zap: Zap,
    shield: Shield,
    target: Target,
    star: Star,
    checkCircle: CheckCircle,
    users: Users
  };

  // Fonction de sécurité pour obtenir l'icône
  const getIconComponent = (iconName: string) => {
    const IconComponent = serviceIcons[iconName as keyof typeof serviceIcons];
    if (!IconComponent) {
      console.warn(`Icône non trouvée: ${iconName}, utilisation de l'icône par défaut`);
      return Star; // Icône par défaut
    }
    return IconComponent;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            <span>{content.services.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services principaux */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content.services.items.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-blue-600 font-semibold">{service.price}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services supplémentaires */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {content.services.additionalServicesTitle}
          </h3>
          <p className="text-lg text-gray-600">
            {content.services.additionalServicesSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {content.services.additionalServices.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Fonctionnalités */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Détails du service */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-green-600 font-semibold">
                          {service.price}
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                        {content.services.detailsButton}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section de garantie */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              {content.services.guarantee.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.services.guarantee.items.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={32} />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;