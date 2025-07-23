"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BG_COLOR_02 } from '@/constants/colors';

function MarqueeSection() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = marqueeRef.current;

        if (!current) return;

        // Get the width of the actual content
        const contentWidth = current.scrollWidth / 2; // Since we duplicate, half is visible cycle

        // Set initial position: start from the right (fully off-screen to the right)
        gsap.set(current, { x: window.innerWidth });

        // Animate continuously from right to left
        const animateMarquee = () => {
            gsap.to(current, {
                x: -contentWidth,
                duration: 20, // Adjust speed here
                ease: 'none',
                onComplete: () => {
                    // Immediately reset position without flashing
                    gsap.set(current, { x: window.innerWidth });
                    animateMarquee(); // Restart
                },
            });
        };

        animateMarquee();

        // Cleanup on unmount
        return () => {
            gsap.killTweensOf(current);
        };
    }, []);

    return (
        <div className="h-[20vh] -p-10 -m-10 relative">
            {/* BG_COLOR_02 background behind white container */}
            <div className={`absolute inset-0 ${BG_COLOR_02} h-[15vh] z-0`} />

            {/* Rotated white container */}
            <div className=" bg-white w-full py-6 mt-10 transform -rotate-2 z-10">
                {/* Marquee wrapper */}
                <div ref={marqueeRef} className="marquee flex whitespace-nowrap">
                    {/* First instance of content */}
                    <div className="flex items-center">
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">Monitoring Business Analytics</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">Marketing Solutions</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">SEO Strategy Development</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">Research & Analysis</span>
                    </div>

                    {/* Second instance for seamless loop */}
                    <div className="flex items-center ml-4"> {/* Small gap for continuity */}
                        <span className="text-black text-3xl font-semibold mx-4">Monitoring Business Analytics</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">Marketing Solutions</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">SEO Strategy Development</span>
                        <span className="w-[30px] mx-4">
                            <img src="/marquee/marquee_star.svg" alt="marquee_star" className="w-full h-full" />
                        </span>
                        <span className="text-black text-3xl font-semibold mx-4">Research & Analysis</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarqueeSection;