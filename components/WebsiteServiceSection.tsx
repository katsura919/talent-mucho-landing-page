import { LayoutTemplate, ArrowRight } from "lucide-react";

export default function WebsiteServiceSection() {
    return (
        <section id="website-services" className="pt-24 pb-12 bg-beige-100">
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                        Digital Foundations
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                        className="mb-5 text-4xl md:text-5xl"
                    >
                        Your Digital Storefront
                        <br />
                        <em className="text-clay-500" style={{ fontStyle: "italic" }}>Built for Conversion</em>
                    </h2>
                    <p className="text-espresso-800 text-lg max-w-2xl mx-auto leading-relaxed">
                        We build high-performance websites and landing pages that don&apos;t just look premium—they drive action and elevate your brand&apos;s perceived value.
                    </p>
                </div>

                {/* Standalone Featured: Website Design & Development */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-beige-200 shadow-sm relative overflow-hidden group">
                    {/* Ambient background glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-50/50 rounded-full blur-[100px] pointer-events-none group-hover:bg-clay-100/50 transition-colors duration-700" />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                        <div className="w-16 h-16 bg-beige-50 rounded-2xl border border-beige-200 flex items-center justify-center mb-6 shadow-sm">
                            <LayoutTemplate className="w-8 h-8 text-clay-500" />
                        </div>
                        <h4 className="text-3xl lg:text-5xl font-semibold text-charcoal-900 mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
                            Website Design & Development
                        </h4>
                        <p className="text-espresso-800 text-xl mb-8 leading-relaxed">
                            Conversion-focused websites that look good and work hard.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {["Business & personal brand websites", "Landing pages", "Optimized for speed, SEO & mobile"].map((b, i) => (
                                <div key={i} className="flex items-center gap-2 bg-beige-50 px-4 py-2 rounded-full border border-beige-200 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-clay-500 flex-shrink-0" />
                                    <span className="text-charcoal-900 font-medium text-sm">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Placeholder: Carousel Area */}
                    <div className="relative z-10 w-full aspect-video md:aspect-[21/9] bg-beige-50 border border-beige-200 rounded-3xl shadow-inner flex items-center justify-center overflow-hidden">
                        {/* Decorative browser UI header */}
                        <div className="absolute top-0 inset-x-0 h-10 bg-white border-b border-beige-200 flex items-center px-6 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-amber-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="mx-auto h-5 w-1/3 bg-beige-100 rounded-md" />
                        </div>

                        <div className="text-center p-8 mt-10">
                            <p className="text-taupe-400 text-lg font-medium tracking-wide">WEBSITE CAROUSEL PLACEHOLDER</p>
                            <p className="text-espresso-800 text-sm mt-3 max-w-md mx-auto">
                                (Add the beautiful websites you built with Jan here. This area is designed for a horizontal scrolling carousel of your best work.)
                            </p>
                        </div>
                        {/* Mock carousel arrow indicators */}
                        <div className="absolute inset-y-0 left-4 flex items-center hidden md:flex">
                            <div className="w-10 h-10 rounded-full bg-white border border-beige-200 shadow-sm flex items-center justify-center opacity-50 cursor-not-allowed">
                                <ArrowRight className="w-5 h-5 text-taupe-400 rotate-180" />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center hidden md:flex">
                            <div className="w-10 h-10 rounded-full bg-white border border-beige-200 shadow-sm flex items-center justify-center opacity-50 cursor-not-allowed">
                                <ArrowRight className="w-5 h-5 text-taupe-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
