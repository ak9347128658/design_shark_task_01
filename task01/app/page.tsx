import React from 'react'
import Hero from '@/components/hero/Hero';
import Section01 from '@/components/section01/section01';
import MarqueeSection from '@/components/section01/MarqueeSection';
import Section2 from '@/components/section02/Section2';
import Section3 from '@/components/section03/Section3';
function page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Section01/>
      <MarqueeSection/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default page
