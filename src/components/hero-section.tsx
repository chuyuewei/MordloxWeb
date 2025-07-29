'use client'

import { Button } from '@/components/ui/button'
import { Play, ArrowRight, Star, Users, Globe, Zap, Shield, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "EVE Online",
      subtitle: "Experience the ultimate sci-fi MMO. Explore a vast universe, engage in epic space battles, and build your empire among the stars.",
      cta: "Play Free Now",
      stats: [
        { icon: Users, value: "500K+", label: "Active Players", color: "text-blue-400" },
        { icon: Globe, value: "7,800+", label: "Star Systems", color: "text-purple-400" }
      ]
    },
    {
      title: "Forge Your Legacy",
      subtitle: "In a universe of over 7,800 star systems, your choices shape the galaxy. Build alliances, wage wars, and write your own epic story.",
      cta: "Start Your Journey",
      stats: [
        { icon: Zap, value: "$2.1B", label: "Daily Economy", color: "text-orange-400" },
        { icon: Shield, value: "8,825", label: "Largest Battle", color: "text-red-400" }
      ]
    },
    {
      title: "Unlimited Freedom",
      subtitle: "No paths. No limits. Just endless possibilities in the world's largest sandbox MMO. Your adventure awaits in New Eden.",
      cta: "Explore Now",
      stats: [
        { icon: TrendingUp, value: "20+", label: "Years of Evolution", color: "text-green-400" },
        { icon: Star, value: "∞", label: "Possibilities", color: "text-yellow-400" }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 space-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full floating opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full floating opacity-80" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400 rounded-full floating opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-orange-400 rounded-full floating opacity-60" style={{animationDelay: '3s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">The Universe Awaits</span>
          </div>

          {/* Main Title with Animation */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent glow-text">
              {currentSlideData.title}
            </h1>
            
            {/* Subtitle with typewriter effect */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
              {currentSlideData.subtitle}
            </p>
          </div>

          {/* Animated Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            {currentSlideData.stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 group">
                <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="eve-button group px-6 sm:px-8 py-3 sm:py-4 text-lg relative overflow-hidden">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {currentSlideData.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-lg border-border/50 hover:border-primary transition-all duration-300 hover:scale-105">
              Watch Trailer
            </Button>
          </div>

          {/* Feature Pills with Hover Effects */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12">
            {['Space Combat', 'Player Economy', 'Alliance Warfare', 'Exploration', 'Industry', 'Diplomacy'].map((feature, index) => (
              <span
                key={feature}
                className="px-3 sm:px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-border/30 hover:bg-accent hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-border/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>
    </section>
  )
}