import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import PlatformsGrid from "@/components/PlatformsGrid"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformsGrid />
      <Footer />
    </main>
  )
}
