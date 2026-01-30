import { Zap, Brain, TrendingUp, Clock, Layers } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "AI-powered efficiency",
      description:
        "Automate repetitive tasks and streamline operations effortlessly",
    },
    {
      icon: Brain,
      title: "Smarter decision-making",
      description: "AI insights guide your marketing and business strategy",
    },
    {
      icon: TrendingUp,
      title: "Revenue growth",
      description:
        "Targeted marketing campaigns powered by data and AI optimization",
    },
    {
      icon: Clock,
      title: "Time savings",
      description:
        "Let our AI + VAs handle the work so you can focus on growth",
    },
    {
      icon: Layers,
      title: "Flexible, scalable solutions",
      description: "Packages adapt as your business evolves",
    },
  ];

  return (
    <section className="section-padding bg-beige-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Key <span className="text-clay-500 italic">Benefits</span>
          </h2>
          <p className="text-lg text-espresso-800 max-w-2xl mx-auto">
            Experience the power of human expertise combined with cutting-edge
            AI technology
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-beige-50 border border-beige-200 rounded-xl p-6 hover:shadow-lg hover:border-clay-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-clay-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-beige-50" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-espresso-800 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
