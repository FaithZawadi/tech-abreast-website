import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import AISolutions from '@/components/AISolutions'
import Industries from '@/components/Industries'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <AISolutions />
      <Industries />
      <Resources />
      <Contact />
      <Footer />
    </main>
  )
}
