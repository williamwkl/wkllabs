import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import PlatformsGrid from "@/components/PlatformsGrid"
import ChangelogSection from "@/components/ChangelogSection"
import RoadmapSection from "@/components/RoadmapSection"
import EmailCaptureSection from "@/components/EmailCaptureSection"
import SupportSection from "@/components/SupportSection"
import Footer from "@/components/Footer"
import FloatingEmailButton from "@/components/FloatingEmailButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PlatformsGrid />
      <ChangelogSection />
      <RoadmapSection />
      <EmailCaptureSection />
      <SupportSection />
      <Footer />
      <FloatingEmailButton />
    </main>
  )
}
