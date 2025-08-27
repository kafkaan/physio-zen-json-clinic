import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  User,
  FileText,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

const Contact = () => {
  const handleReservation = () => {
    alert(`📞 Appelez-nous pour réserver : ${content.contact.info.phone}`);
  };

  const contactMethodIcons = {
    phone: Phone,
    mail: Mail,
    mapPin: MapPin,
    clock: Clock
  };

  const formFieldIcons = {
    user: User,
    phone: Phone,
    mail: Mail,
    fileText: FileText
  };

  // Fonction de sécurité pour obtenir l'icône de méthode de contact
  const getContactMethodIcon = (iconName: string) => {
    const IconComponent = contactMethodIcons[iconName as keyof typeof contactMethodIcons];
    if (!IconComponent) {
      console.warn(`Icône de méthode de contact non trouvée: ${iconName}, utilisation de l'icône par défaut`);
      return Phone; // Icône par défaut
    }
    return IconComponent;
  };

  // Fonction de sécurité pour obtenir l'icône de champ de formulaire
  const getFormFieldIcon = (iconName: string) => {
    const IconComponent = formFieldIcons[iconName as keyof typeof formFieldIcons];
    if (!IconComponent) {
      console.warn(`Icône de champ de formulaire non trouvée: ${iconName}, utilisation de l'icône par défaut`);
      return User; // Icône par défaut
    }
    return IconComponent;
  };

  const services = content.services.servicesList;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle size={16} />
            <span>{content.contact.contactSectionTitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {content.contact.contactSectionSubtitle}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {content.contact.contactSectionDescription}
              </p>
            </div>

            {/* Méthodes de contact */}
            <div className="space-y-6">
              {content.contact.contactMethods.map((method, index) => {
                const IconComponent = getContactMethodIcon(method.icon);
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300">
                        {method.action}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Services disponibles */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">{content.services.title}</h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-blue-200" />
                    <span className="text-sm text-blue-100">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {content.contact.form.title}
            </h3>
            
            <form className="space-y-6">
              {content.contact.form.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={field.placeholder}
                    />
                  ) : field.type === 'select' ? (
                    <div className="relative">
                      {field.icon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {(() => {
                            const IconComponent = getFormFieldIcon(field.icon);
                            return <IconComponent size={20} />;
                          })()}
                        </div>
                      )}
                      <select className={`w-full ${field.icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none bg-white`}>
                        <option>{field.placeholder}</option>
                        {services.map((service, idx) => (
                          <option key={idx}>{service}</option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div className="relative">
                      {field.icon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          {(() => {
                            const IconComponent = getFormFieldIcon(field.icon);
                            return <IconComponent size={20} />;
                          })()}
                        </div>
                      )}
                      <input
                        type={field.type}
                        className={`w-full ${field.icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={field.placeholder}
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-4">
                {content.contact.form.buttons.map((button, index) => {
                  const IconComponent = button.icon === 'send' ? Send : Calendar;
                  return (
                    <Button 
                      key={index}
                      type={button.type as "submit" | "button" | "reset"}
                      onClick={button.type === 'button' ? handleReservation : undefined}
                      className={`flex-1 ${button.type === 'submit' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <IconComponent size={20} />
                      <span>{button.text}</span>
                    </Button>
                  );
                })}
              </div>
            </form>
          </div>
        </div>

        {/* Carte et informations supplémentaires */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {content.contact.additionalInfo.title}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.contact.additionalInfo.addressLabel}</div>
                    <div className="text-gray-600">{content.contact.info.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.contact.additionalInfo.hoursLabel}</div>
                    <div className="text-gray-600">{content.contact.info.hours}</div>
                    <div className="text-sm text-gray-500 mt-1">{content.contact.additionalInfo.weekendNote}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">{content.contact.additionalInfo.emergencyLabel}</div>
                    <div className="text-gray-600">{content.contact.additionalInfo.emergency}</div>
                    <div className="text-sm text-gray-500 mt-1">{content.contact.additionalInfo.emergencyNote}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>{content.contact.additionalInfo.mapPlaceholder}</p>
                <p className="text-sm">{content.contact.additionalInfo.mapDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;