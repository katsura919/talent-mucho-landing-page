"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function BookingEmbed() {
    const [iframeKey, setIframeKey] = useState(0);

    useEffect(() => {
        setIframeKey(Date.now());
    }, []);

    return (
        <>
            <section className="section-padding">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-beige-200 text-clay-500 text-xs font-semibold uppercase tracking-widest bg-white">
                                Book a Discovery Call
                            </span>

                            <h1
                                className="text-5xl md:text-6xl leading-tight font-light tracking-tight text-charcoal-900 mb-4"
                                style={{
                                    fontFamily:
                                        "var(--font-cormorant), ui-serif, Georgia, serif",
                                }}
                            >
                                Let&apos;s Build Something{" "}
                                <em className="not-italic text-clay-500">Remarkable</em>
                            </h1>

                            <p className="editorial-subheading max-w-xl mx-auto">
                                Schedule a free 30-minute consultation to explore how our
                                virtual assistants can streamline your operations.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden">
                            <iframe
                                key={iframeKey}
                                src="https://links.talentmucho.com/widget/booking/c0TCC0Ut58lEQjIbyXcN"
                                style={{
                                    width: "100%",
                                    border: "none",
                                    overflow: "hidden",
                                    minHeight: "700px",
                                    display: "block",
                                }}
                                scrolling="no"
                                id={`c0TCC0Ut58lEQjIbyXcN_${iframeKey}`}
                                title="Book an Appointment with Talent Mucho"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Script
                src="https://links.talentmucho.com/js/form_embed.js"
                strategy="afterInteractive"
            />
        </>
    );
}
