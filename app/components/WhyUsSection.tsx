import Section from "./Section";
import { Heart, Eye, Shield, Headphones } from "lucide-react";

export default function WhyUsSection() {
    const reasons = [
        {
            icon: Heart,
            title: "Curated, Not Mass-Sourced",
            description:
                "Every candidate we present has been personally vetted for skills, character, and cultural alignment.",
        },
        {
            icon: Eye,
            title: "Complete Transparency",
            description:
                "No hidden fees, no surprises. You'll always know exactly what you're paying for and why.",
        },
        {
            icon: Shield,
            title: "Strategic Partnership",
            description:
                "We're not just filling seats, we're helping you build a team that drives your vision forward.",
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description:
                "Our relationship doesn't end at placement. We provide continuous support to ensure lasting success.",
        },
    ];

    return (
        <Section id="why-us">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                        Why Talent Mucho
                    </p>
                    <h2 className="mb-6">A partner, not a vendor</h2>
                    <p className="editorial-subheading">
                        We position ourselves as an extension of your team, invested in your
                        success and committed to finding talent that truly fits.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex gap-6 p-6 rounded-xl hover:bg-beige-100 transition-colors duration-300"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-beige-200 rounded-full flex items-center justify-center">
                                    <reason.icon className="w-6 h-6 text-clay-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl mb-2">{reason.title}</h3>
                                <p className="text-taupe-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
