import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TechMarquee from "@/components/TechMarquee"
import Problem from "@/components/Problem"
import Services from "@/components/Services"
import HowWeWork from "@/components/HowWeWork"
import WhoItsFor from "@/components/WhoItsFor"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Problem />
      <Services />
      <HowWeWork />
      <WhoItsFor />
      <Contact />
      <Footer />
    </main>
  )
}