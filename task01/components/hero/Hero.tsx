"use client";
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Navbar01 from '../navbars/Navbar01';

function Hero() {
  const personRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLImageElement>(null);
  const treeRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Person animation (unchanged)
    if (personRef.current) {
      gsap.to(personRef.current, {
        x: '10vw',
        duration: 15,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // Star rotation animation (unchanged)
    if (starRef.current) {
      gsap.to(starRef.current, {
        rotation: 360,
        duration: 10,
        ease: 'linear',
        repeat: -1,
        transformOrigin: 'center center',
      });
    }

    // Tree left-to-right animation (unchanged)
    if (treeRef.current) {
      gsap.to(treeRef.current, {
        x: '5vw',
        duration: 15,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // Arrow top-to-bottom animation (unchanged)
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        y: '3vh',
        duration: 6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // Content animation (different approach, duration 5s)
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          stagger: 1.2, // 4 elements * 1.2s = ~5s total
          ease: "elastic.out(1, 0.5)",
          delay: 0.3,
        }
      );
    }

    // Badge background animation (new)
    if (badgeRef.current) {
      // Set initial state for background
      gsap.set(badgeRef.current, {
        background: 'linear-gradient(to right, #facc15 0%, transparent 0%)',
      });

      // Animate background from 0% to 100%
      gsap.to(badgeRef.current, {
        background: 'linear-gradient(to right, #facc15 50%, transparent 0%)',
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5,
      });
    }

    // Animate heading letters with a cool GSAP effect
    if (headingTextRef.current) {
      gsap.fromTo(
        headingTextRef.current.querySelectorAll('span'),
        {
          opacity: 0,
          y: 60,
          rotate: -90,
          scale: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.06,
          ease: "elastic.out(1, 0.5)",
          delay: 0.5,
        }
      );
    }
  }, []);

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

  return (
    <div className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="p-10 box-border">
        <Navbar01 />
      </div>
      {/* Background Image */}
      <Image
        src="/hero/background.webp"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <Image
        src={"/hero/hero_rotating_start.svg"}
        alt="Hero pointer arrow"
        width={90}
        height={90}
        className='hidden md:block absolute left-[40vw] top-[30vh]'
        ref={starRef}
      />
      <Image
        src={"/hero/hero_moving_tree.svg"}
        alt="Hero pointer arrow"
        width={90}
        height={90}
        className='hidden md:block absolute right-[10vw] top-[30vh]'
        ref={treeRef}
      />
      {/* Content Container */}
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left Half: Content */}
        <div className="w-full md:w-[40%] flex items-center justify-center p-4 md:p-6">
          <div className="w-full max-w-[90%] md:max-w-[80%]" ref={contentRef}>
            <div className="text-left">
              <span
                ref={badgeRef}
                className="text-black px-2 py-1 text-lg md:text-xl font-bold"
              >
                SEO & Marketing Agency
              </span>
              <h1
                ref={headingTextRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-6"
                style={{ wordSpacing: '0.3rem', letterSpacing: '0.1rem', lineHeight: '1.3' }}
              >
                {splitText("Empowering Growth Unlock SEO Solutions")}
              </h1>
              <p
                className="text-gray-600 mt-4 md:mt-6 mb-4 text-sm md:text-base"
                style={{ wordSpacing: '0.1rem', lineHeight: '1.6' }}
              >
                At Saar, we are dedicated to helping businesses navigate the complex digital landscape with ease. We specialize in providing a full spectrum of SEO.
              </p>
              <button className="mt-4 bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-none hover:bg-gray-800 text-sm md:text-base">
                <span className="flex items-center gap-2">
                  Get Started Now
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Half: Person Image with Fixed Background */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-full">
          <Image
            src={"/hero/hero_pointer_arrow.svg"}
            alt="Hero pointer arrow"
            width={90}
            height={90}
            className='hidden md:block absolute bottom-[28vh] ml-25'
            ref={arrowRef}
          />
          <Image
            src="/hero/hero_person01_bg.svg"
            alt="Person Background"
            width={1000}
            height={1000}
            className="hidden md:block -z-5 object-fill relative -bottom-35 h-[100vh] w-[70vw]"
          />
          <div ref={personRef} className="hidden md:block absolute bottom-0 left-[33vw] h-[100vh] w-full md:w-[85%]">
            <Image
              src="/hero/person1.webp"
              alt="Person"
              fill
              className="object-contain z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;