"use client"
import { BG_COLOR_02 } from "@/constants/colors"
import { gsap } from "gsap"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

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

export default function Section01() {
    const seoProgressRef = useRef<HTMLDivElement>(null)
    const marketingProgressRef = useRef<HTMLDivElement>(null)
    const projectCountRef = useRef<HTMLHeadingElement>(null)
    const teamCountRef = useRef<HTMLHeadingElement>(null)
    const customerCountRef = useRef<HTMLHeadingElement>(null)
    const reviewCountRef = useRef<HTMLHeadingElement>(null)
    const person2Ref = useRef<HTMLImageElement>(null)
    const person3Ref = useRef<HTMLImageElement>(null)
    const welcomeRef = useRef<HTMLSpanElement>(null);
    const mainHeadingRef = useRef<HTMLHeadingElement>(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    useEffect(() => {
        if (inView) {
            gsap.to(".rotating-image", {
                rotation: 360,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "none"
            })

            gsap.fromTo(
                seoProgressRef.current,
                { width: "0%" },
                { width: "80%", duration: 10, ease: "power2.out" }
            )

            gsap.fromTo(
                marketingProgressRef.current,
                { width: "0%" },
                { width: "90%", duration: 10, ease: "power2.out", delay: 0.3 }
            )

            gsap.to(projectCountRef.current, {
                innerText: 3000,
                duration: 10,
                snap: { innerText: 1 },
                ease: "power2.out",
                onUpdate: function () {
                    if (projectCountRef.current) {
                        projectCountRef.current.innerText = `${Math.round(Number(projectCountRef.current.innerText) / 1000)}K+`
                    }
                }
            })

            gsap.to(teamCountRef.current, {
                innerText: 200,
                duration: 10,
                snap: { innerText: 1 },
                ease: "power2.out",
                delay: 0.2,
                onUpdate: function () {
                    if (teamCountRef.current) {
                        teamCountRef.current.innerText = `${Math.round(Number(teamCountRef.current.innerText))}`
                    }
                }
            })

            gsap.to(customerCountRef.current, {
                innerText: 43000,
                duration: 10,
                snap: { innerText: 1 },
                ease: "power2.out",
                delay: 0.4,
                onUpdate: function () {
                    if (customerCountRef.current) {
                        customerCountRef.current.innerText = `${Math.round(Number(customerCountRef.current.innerText) / 1000)}K+`
                    }
                }
            })

            gsap.to(reviewCountRef.current, {
                innerText: 36000,
                duration: 10,
                snap: { innerText: 1 },
                ease: "power2.out",
                delay: 0.6,
                onUpdate: function () {
                    if (reviewCountRef.current) {
                        reviewCountRef.current.innerText = `${Math.round(Number(reviewCountRef.current.innerText) / 1000)}K+`
                    }
                }
            })

            gsap.fromTo(
                person2Ref.current,
                { clipPath: "inset(0% 100% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 5, ease: "power2.out" }
            )

            gsap.fromTo(
                person3Ref.current,
                { clipPath: "inset(0% 100% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 5, ease: "power2.out", delay: 0.3 }
            )

            // Animate "Welcome to SEO Agency" letters
            if (welcomeRef.current) {
                gsap.to(welcomeRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    duration: 4,
                    ease: "power2.out",
                    from: { y: 30 }
                });
            }

            // Animate main heading letters
            if (mainHeadingRef.current) {
                gsap.to(mainHeadingRef.current.querySelectorAll('span'), {
                    opacity: 1,
                    y: 0,
                    stagger: 0.03,
                    duration: 4,
                    ease: "elastic.out(1, 0.5)",
                    from: { y: 40 }
                });
            }
        }
    }, [inView])

    return (
        <div ref={ref} className="bg-[#F0EFE9] pt-6 lg:pt-12 xl:pt-16 min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12">
                    <div className="inline-flex items-center space-x-2 mb-2 sm:mb-4">
                        <img src="/section01/Group 18.svg" alt="Yellow Chevron" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                        <span ref={welcomeRef} className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black">
                            {splitText("Welcome to SEO Agency")}
                        </span>
                        <img src="/section01/Group 18.svg" alt="Yellow Chevron" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
                    </div>
                    <h2 ref={mainHeadingRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        {splitText("Comprehensive SEO & Digital Marketing Solutions.")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-20 items-center">
                    <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            Our SEO services ensure your website ranks higher on search engines like Google, helping your business
                            attract more organic traffic. From keyword research and on-page optimization to link building and
                            technical SEO, we use proven strategies to improve your visibility and authority online.
                        </p>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            We believe in making informed decisions. By using analytics and performance metrics, we continuously
                            refine our strategies to deliver measurable results and maximize your return on investment.
                        </p>

                        <div className="space-y-4 pt-2 sm:pt-4">
                            <div>
                                <div className="flex justify-between items-center mb-1 sm:mb-2">
                                    <p className="text-black font-semibold text-sm sm:text-base">SEO Analysis</p>
                                    <span className="text-yellow-600 font-bold text-sm sm:text-base">80%</span>
                                </div>
                                <div className="w-full bg-gray-300 h-1.5 sm:h-2 rounded-full">
                                    <div ref={seoProgressRef} className={`h-full rounded-full ${BG_COLOR_02}`}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1 sm:mb-2">
                                    <p className="text-black font-semibold text-sm sm:text-base">Marketing Strategy</p>
                                    <span className="text-black font-bold text-sm sm:text-base">90%</span>
                                </div>
                                <div className="w-full bg-gray-300 h-1.5 sm:h-2 rounded-full">
                                    <div ref={marketingProgressRef} className="bg-black h-full rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="inline-flex items-center bg-black text-white py-2 sm:py-3 px-4 sm:px-6 text-base font-semibold hover:bg-gray-800 transition-colors group"
                        >
                            More About Us
                            <ArrowUpRight className="ml-1 sm:ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="lg:col-span-7 relative min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] xl:min-h-[600px] w-full h-full flex items-center justify-center mt-6 sm:mt-0">
                        <div className="relative w-[35%] h-full">
                            <img
                                ref={person2Ref}
                                src="/section01/person2.webp"
                                alt="Person working on laptop"
                                className="absolute w-full h-full object-fill shadow-lg z-20"
                            />
                        </div>
                        <div className="relative w-[65%] h-full flex flex-col">
                            <div className="relative w-full h-[50%] flex items-center justify-center">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[80%] lg:w-[80%] h-auto z-10 flex items-center justify-center">
                                    <img
                                        src="/section01/Group 17.png"
                                        alt="Build a Brand Success with Saor 02"
                                        className="absolute w-[50vw]"
                                    />
                                    <div className="inset-0 flex items-center justify-center">
                                        <img
                                            src="/section01/Subtract.png"
                                            alt="Build a Brand Success with Saor"
                                            className="rotating-image w-[40%] relative left-[33%] text-black"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full h-[50%] p-5 box-border">
                                <img
                                    ref={person3Ref}
                                    src="/section01/person3.webp"
                                    alt="Team discussing charts"
                                    className="absolute w-full h-full object-fill shadow-lg z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-around lg:items-center py-[15vh] text-center text-black gap-8 lg:gap-0">
                    <div>
                        <h3 ref={projectCountRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold">0</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Successful Project</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/section01/Group 19.svg" className="w-[4vw] mx-auto" />
                    </div>
                    <div>
                        <h3 ref={teamCountRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold">0</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Experienced Team</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/section01/Group 19.svg" className="w-[4vw] mx-auto" />
                    </div>
                    <div>
                        <h3 ref={customerCountRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold">0</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Happy Customers</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src="/section01/Group 19.svg" className="w-[4vw] mx-auto" />
                    </div>
                    <div>
                        <h3 ref={reviewCountRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold">0</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Client 5 Star Review</p>
                    </div>
                </div>


            </div>
        </div>
    )
}