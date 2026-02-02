import Section from "./Section";
import { Cpu, Rocket, BarChart3, Settings, Target } from "lucide-react";

export default function WhyUsSection() {
  const reasons = [
    {
      Icon: Cpu,
      title: "AI-Powered Operations",
      description:
        "We don't just provide virtual assistants, we give you an intelligent system that automates repetitive tasks, tracks performance, and delivers actionable insights. Most VA agencies only provide people; we provide people + AI + systems.",
    },
    {
      Icon: Rocket,
      title: "Full-Service Growth Support",
      description:
        "Our VAs are not just task doers, they're trained to work with digital marketing, operations, and automation tools to help your business scale faster. You get results, not just hours logged.",
    },
    {
      Icon: BarChart3,
      title: "Free GHL Dashboard for Transparency",
      description:
        "Clients get a GoHighLevel dashboard to monitor tasks, campaigns, and VA performance in real time. You stay in control without micromanaging.",
    },
    {
      Icon: Settings,
      title: "Tailored & Scalable Solutions",
      description:
        "We customize your team and AI workflows to your business needs. As you grow, our systems and VAs evolve with you, no cookie-cutter packages.",
    },
    {
      Icon: Target,
      title: "Focus on Results, Not Busywork",
      description:
        "Our goal is to free your time, increase revenue, and streamline operation, so you can focus on what matters most: growing your business.",
    },
  ];

  const Icon0 = reasons[0].Icon;
  const Icon1 = reasons[1].Icon;
  const Icon2 = reasons[2].Icon;
  const Icon3 = reasons[3].Icon;
  const Icon4 = reasons[4].Icon;

  return (
    <Section id="why-us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Why Clients <span className="text-clay-500 italic">Love Us</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[800px]">
          {/* Left Column - Large Card */}
          <div className="bg-clay-500 rounded-3xl p-8 lg:p-12 flex flex-col justify-between text-beige-50 row-span-2">
            <div>
              <div className="w-16 h-16 bg-beige-50/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon0 className="w-8 h-8 text-beige-50" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                {reasons[0].title}
              </h3>
              <p className="text-lg lg:text-xl text-beige-50/90 leading-relaxed">
                {reasons[0].description}
              </p>
            </div>
          </div>

          {/* Right Column - Two Rows */}
          <div className="grid grid-rows-2 gap-6">
            {/* Top Right Card */}
            <div className="bg-taupe-400 rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-beige-50">
              <div>
                <div className="w-14 h-14 bg-beige-50/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon1 className="w-7 h-7 text-beige-50" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {reasons[1].title}
                </h3>
                <p className="text-base lg:text-lg text-beige-50/90 leading-relaxed">
                  {reasons[1].description}
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-espresso-800 rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-beige-50">
              <div>
                <div className="w-14 h-14 bg-beige-50/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon2 className="w-7 h-7 text-beige-50" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {reasons[2].title}
                </h3>
                <p className="text-base lg:text-lg text-beige-50/90 leading-relaxed">
                  {reasons[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-beige-200 rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-charcoal-900">
            <div>
              <div className="w-14 h-14 bg-clay-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon3 className="w-7 h-7 text-clay-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {reasons[3].title}
              </h3>
              <p className="text-base lg:text-lg text-espresso-800 leading-relaxed">
                {reasons[3].description}
              </p>
            </div>
          </div>

          <div className="bg-beige-300 rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-charcoal-900">
            <div>
              <div className="w-14 h-14 bg-clay-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Icon4 className="w-7 h-7 text-clay-500" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {reasons[4].title}
              </h3>
              <p className="text-base lg:text-lg text-espresso-800 leading-relaxed">
                {reasons[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
