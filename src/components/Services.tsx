import { Hand, Activity, Bone, Brain } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  hand: Hand,
  activity: Activity,
  bone: Bone,
  brain: Brain,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {content.services.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-smooth transform hover:scale-105 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <IconComponent className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;