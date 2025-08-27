import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  Heart, 
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import content from "@/data/content.json";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  const achievementIcons = {
    award: Award,
    shield: Shield,
    heart: Heart
  };

  // Fonction de sécurité pour obtenir l'icône
  const getIconComponent = (iconName: string) => {
    const IconComponent = achievementIcons[iconName as keyof typeof achievementIcons];
    if (!IconComponent) {
      console.warn(`Icône non trouvée: ${iconName}, utilisation de l'icône par défaut`);
      return Award; // Icône par défaut
    }
    return IconComponent;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart size={16} />
            <span>{content.about.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image et contenu */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={clinicImage}
                alt="Physiotherapy clinic interior"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">{content.about.experienceText}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {content.about.description}
              </p>
              
              <div className="space-y-4">
                {content.about.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6">
              {content.about.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Réalisations et certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {content.about.achievementsTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.about.achievements.map((achievement, index) => {
              const IconComponent = getIconComponent(achievement.icon);
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Témoignages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {content.about.testimonialsTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.about.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section de contact rapide */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              {content.about.contactSection.title}
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              {content.about.contactSection.subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <MapPin size={24} className="text-blue-200" />
                <span className="text-blue-100">{content.contact.info.address}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone size={24} className="text-blue-200" />
                <span className="text-blue-100">{content.contact.info.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Calendar size={24} className="text-blue-200" />
                <span className="text-blue-100">{content.contact.info.hours}</span>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              {content.about.contactButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;