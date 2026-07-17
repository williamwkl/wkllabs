import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import FactsStrip from "@/components/FactsStrip"
import StudioNote from "@/components/StudioNote"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <ProductList />
        <FactsStrip />
        <StudioNote />
        <Footer />
      </main>
    </PageWrapper>
  )
}
