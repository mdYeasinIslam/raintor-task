import AboutSection from '@/components/home/AboutSection'
import ContactSection from '@/components/home/ContactSection'
import HeroSection from '@/components/home/HeroSection'
import MySkills from '@/components/home/MySkills'
import WorkProcessSection from '@/components/home/WorkProcessSection'
import React from 'react'

export default function page() {
  return (
      <div className=''>
      <HeroSection />
      <MySkills />
      <AboutSection/>
      <WorkProcessSection/>
      <ContactSection />
    </div>
  )
}
