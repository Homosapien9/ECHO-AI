import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import BentoAccordion from '@/components/sections/BentoAccordion'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <BentoAccordion />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}
