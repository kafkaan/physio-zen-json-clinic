import { Button } from "@/components/ui/button";
import content from "@/data/content.json";
import heroImage from "@/assets/hero-physio.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                {content.hero.cta.primary}
              </Button>
              <Button variant="outline" size="lg">
                {content.hero.cta.secondary}
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img
              src={heroImage}
              alt="Modern physiotherapy clinic"
              className="relative z-10 rounded-3xl shadow-glow w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;