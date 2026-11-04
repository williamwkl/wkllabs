import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProductList from "@/components/ProductList"
import HomeServices from "@/components/HomeServices"
import HomeReview from "@/components/HomeReview"
import HomeCta from "@/components/HomeCta"
import StudioNote from "@/components/StudioNote"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <HomeServices />
        <ProductList />
        <HomeReview />
        <StudioNote />
        <HomeCta />
        <Footer />
      </main>
    </PageWrapper>
  )
}
