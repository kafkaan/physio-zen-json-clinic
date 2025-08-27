import content from "@/data/content.json";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {content.about.title}
            </h2>
            <h3 className="text-xl text-primary mb-6">
              {content.about.subtitle}
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {content.about.description}
            </p>

            <div className="grid grid-cols-3 gap-8">
              {content.about.stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img
              src={clinicImage}
              alt="Modern physiotherapy clinic interior"
              className="relative z-10 rounded-3xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;