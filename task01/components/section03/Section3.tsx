"use client";
import { BG_COLOR_02 } from '@/constants/colors';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Helper to wrap each letter in a span
function splitText(text: string) {
    return text.split('').map((char, i) => (
        <span
            key={i}
            className="inline-block opacity-0"
            style={char === ' ' ? { width: '0.4em', display: 'inline-block' } : {}}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
}

function Section3() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const badgeRef = useRef(null);
    const counterRef = useRef(null);
    const imageRef = useRef(null);
    const textCircleRef = useRef(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const seoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView) {
            // Animate badge from left to right
            gsap.fromTo(
                badgeRef.current,
                { x: '-100%', opacity: 0 },
                { 
                    x: '0%', 
                    opacity: 1, 
                    duration: 2.5, 
                    ease: 'power2.out'
                }
            );

            // Animate counter from 0 to 25 over 5 seconds
            const start = 0;
            const end = 25;
            const duration = 5000;
            const startTime = performance.now();

            interface UpdateCounterParams {
                currentTime: number;
            }

            function updateCounter(currentTime: UpdateCounterParams['currentTime']) {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                if (counterRef.current) {
                    (counterRef.current as HTMLSpanElement).textContent = value.toString();
                }
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);

            // Animate image rotation: 360° clockwise then counterclockwise, infinite
            gsap.to(imageRef.current, {
                rotation: 360,
                duration: 2.5,
                ease: 'none',
                repeat: -1,
                yoyo: true
            });

            // Animate circular text rotation: 360° clockwise then counterclockwise, infinite
            gsap.to(textCircleRef.current, {
                rotation: 360,
                transformOrigin: "50% 50%",
                duration: 20,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });

            // Animate heading letters
            if (headingRef.current) {
                gsap.to(headingRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: 'power2.out',
                    from: { y: 20 }
                });
            }

            // Modern GSAP letter animation for SEO solutions
            if (seoRef.current) {
                gsap.to(seoRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: {
                        amount: 1.5,
                        grid: "auto",
                        from: "random"
                    },
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    from: { y: 40, scale: 0.5 }
                });
            }
        }
    }, [inView]);

    return (
        <div ref={ref} className="min-h-screen w-full py-6 md:py-10 lg:py-12 relative">
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 md:gap-3">
                    <Image
                        src="/section01/Group 18.svg"
                        alt="mission-vision-before"
                        width={48}
                        height={48}
                        className="w-6 md:w-[2vw]"
                        priority
                    />
                    <h3
                        ref={headingRef}
                        className="text-lg md:text-xl lg:text-2xl font-semibold"
                    >
                        {splitText("Our Mission & Vision")}
                    </h3>
                    <Image
                        src="/section01/Group 18.svg"
                        alt="mission-vision-after"
                        width={48}
                        height={48}
                        className="w-6 md:w-[2vw]"
                        priority
                    />
                </div>
                <div
                    ref={seoRef}
                    className="relative z-30 p-6 md:p-8 lg:p-10 text-center text-xl md:text-2xl lg:text-4xl font-bold"
                >
                    {splitText("Present creative and innovative SEO solutions")}
                </div>
            </div>
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] w-full">
                <Image
                    src="/section3/backlines.svg"
                    alt="background"
                    fill
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <Image
                    src="/section3/colleges.png"
                    alt="colleges"
                    width={900}
                    height={600}
                    className="college-image w-[95%] md:w-[90%] h-[80%] md:h-[85%] lg:h-[90%] absolute top-2 md:top-0 left-1/2 transform -translate-x-1/2 object-contain"
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 mx-4 md:mx-8 lg:mx-[10vw] mt-4 md:mt-[2vh]">
                <div className="bg-[#F0EFE9] p-6 md:p-8 lg:p-10 flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-[10px] underline">Our Mission</h3>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-[10px]">Customer Success Is Our Mission</h4>
                    <p className="text-sm md:text-base">Our mission is to empower businesses by creating digital marketing strategies that are not only effective but sustainable. We believe in building long-term relationships with our clients by delivering results that exceed expectations and drive real, tangible growth.</p>
                </div>
                <div className="bg-[#F0EFE9] p-6 md:p-8 lg:p-10 flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-[10px] underline">Our Vision</h3>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-[10px]">To be the Leading Agency in the Industry</h4>
                    <p className="text-sm md:text-base">We help build and maintain a strong social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. By crafting tailored social media strategies, we engage your audience, foster brand loyalty, and drive conversions.</p>
                </div>
            </div>
            <div 
                ref={badgeRef} 
                className={`absolute top-[35vh] left-[10vw] sm:left-[20vw] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 ${BG_COLOR_02} rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black transform origin-center border-[1vw] border-white box-border`}
            >
                <svg
                    ref={textCircleRef}
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 200"
                    className="absolute left-0 top-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                        />
                        <path
                            id="underlinePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                    </defs>
                    <g>
                        <text
                            fontSize="14"
                            fontWeight="bold"
                            fill="black"
                            letterSpacing="2"
                            className="sm:text-[16px] md:text-[18px]"
                        >
                            <textPath
                                href="#circlePath"
                                startOffset="0"
                                textLength="500"
                            >
                                YEAR OF EXPERIENCE • YEAR OF EXPERIENCE •
                            </textPath>
                        </text>
                    </g>
                    <use href="#underlinePath" stroke="black" strokeWidth="2" fill="none" />
                </svg>
                <span ref={counterRef} className='absolute z-10'>0</span>
            </div>
        </div>
    );
}

export default Section3;