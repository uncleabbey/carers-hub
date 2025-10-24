import Image from 'next/image'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { JoinCommunity } from './components/JoinCommunity'
import { BlogSection } from './components/BlogSection'
import { Contact } from './components/Contact'

export default function Home () {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <JoinCommunity />
      <BlogSection />
      <Contact />
    </div>
  )
}
