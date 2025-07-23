"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Play, ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function Section2() {
    const { ref: sectionRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const servicesRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const serviceListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView) {
            // Animate "Our Services" - fade and slide from left
            if (servicesRef.current) {
                gsap.fromTo(
                    servicesRef.current,
                    { opacity: 0, x: -50 },
                    { opacity: 1, x: 0, duration: 3, ease: "power2.out" }
                );
            }
            // Animate heading - scale and fade in
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 4, ease: "elastic.out(1, 0.5)", delay: 0.5 }
                );
            }
            // Animate service list items
            if (serviceListRef.current) {
                gsap.fromTo(
                    serviceListRef.current.querySelectorAll('.service-row'),
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power2.out"
                    }
                );
            }
        }
    }, [inView]);

    return (
        <section ref={sectionRef} className="bg-[#F8F7F4] py-16 px-4 md:px-8 lg:px-16 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 md:mb-20">
                    <div
                        ref={servicesRef}
                        className="flex items-center text-lg font-medium text-gray-700 mb-4"
                    >
                        <img src={"/section01/Group 18.svg"} alt="Group 18.svg" className={`w-[2vw]`} />
                        Our Services
                    </div>
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl"
                    >
                        Boost your SEO ranking with excellent effective services
                    </h2>
                    {/* More About Button - Desktop Only */}
                    <a
                        href="#"
                        className="hidden md:flex absolute top-16 right-[10vw] items-center justify-center w-32 h-32 rounded-full border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                        More About <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start border-y-1 p-5">
                    {/* Left Column: Services List */}
                    <div className="bg-white border-b-1">
                        {/* Highlighted Service */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">Search Engine Optimization</h3>
                                <div className="bg-yellow-400 p-2 rounded-full flex-shrink-0">
                                    <ArrowRight className="w-5 h-5 text-gray-900" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                Our SEO services ensure your website ranks higher on search engines like Google, helping your business.
                            </p>
                        </div>

                        {/* Other Services */}
                        <div className="divide-y bg-[#F8F7F4]" ref={serviceListRef}>
                            {[
                                "Pay-Per-Click (PPC) Advertising",
                                "Content Marketing",
                                "Email Marketing",
                                "Social Media Marketing",
                                "Conversion Rate Optimization",
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="service-row flex justify-between items-center py-4 px-6 hover:bg-gray-50 cursor-pointer"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-gray-700 flex-shrink-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column: Image */}
                    <div className="flex justify-center items-center">
                        <Image
                            src="/section2/seo.webp"
                            alt="Business meeting discussing SEO marketing"
                            width={800}
                            height={600}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}