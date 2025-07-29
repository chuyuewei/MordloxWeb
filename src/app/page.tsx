import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { UniverseMap } from '@/components/universe-map'
import { ShipShowcase } from '@/components/ship-showcase'
import { NewsSection } from '@/components/news-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UniverseMap />
        <ShipShowcase />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}