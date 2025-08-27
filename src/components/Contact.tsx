import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import content from "@/data/content.json";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {content.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-card-foreground">{content.contact.info.address}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-card-foreground">{content.contact.info.phone}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-card-foreground">{content.contact.info.email}</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="text-primary-foreground" size={24} />
                  </div>
                  <span className="text-card-foreground">{content.contact.info.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center animate-scale-in">
            <div className="text-center">
              <div className="bg-gradient-hero rounded-3xl p-12 shadow-glow">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6">
                  მზად ხართ დაიწყოთ?
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  დაუკავშირდით ჩვენს ექსპერტებს უფასო კონსულტაციისთვის
                </p>
                <Button variant="secondary" size="lg">
                  {content.contact.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;