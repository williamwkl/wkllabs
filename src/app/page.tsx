import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import PlatformsGrid from "@/components/PlatformsGrid"
import SupportSection from "@/components/SupportSection"
import Footer from "@/components/Footer"
import FloatingEmailButton from "@/components/FloatingEmailButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformsGrid />
      <SupportSection />
      <Footer />
      <FloatingEmailButton />
    </main>
  )
}
