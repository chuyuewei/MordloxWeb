'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Rocket, 
  Users, 
  Building2, 
  Globe, 
  Shield, 
  TrendingUp,
  Zap,
  Crown
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: "Epic Space Combat",
      description: "Engage in massive fleet battles with hundreds of players. Command everything from frigates to titans in strategic warfare.",
      badge: "PvP",
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "Player-Driven Economy",
      description: "Build trade empires, manufacture ships, and shape the market. The most complex virtual economy in gaming.",
      badge: "Economy",
      color: "text-green-400"
    },
    {
      icon: Building2,
      title: "Sovereignty & Alliances",
      description: "Claim territory, build stations, and forge alliances. Control vast regions of space through diplomacy or force.",
      badge: "Sandbox",
      color: "text-purple-400"
    },
    {
      icon: Globe,
      title: "Vast Universe",
      description: "Explore over 7,800 star systems with unique planets, moons, and cosmic phenomena. No loading screens between systems.",
      badge: "Exploration",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Industry & Crafting",
      description: "Mine resources, research technology, and build everything from ammunition to capital ships.",
      badge: "Industry",
      color: "text-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Character Progression",
      description: "Skill training continues in real-time. Specialize in combat, industry, exploration, or leadership.",
      badge: "Progression",
      color: "text-yellow-400"
    }
  ]

  const stats = [
    { icon: Crown, label: "Largest MMO Battle", value: "8,825 Players" },
    { icon: Zap, label: "Real-Time Economy", value: "$2.1B Daily Volume" },
    { icon: Globe, label: "Universe Size", value: "7,800+ Systems" },
    { icon: Users, label: "Community", value: "500K+ Pilots" }
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 space-bg opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Universe of Possibilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled freedom in a living, breathing universe where your choices shape the galaxy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="eve-card text-center">
              <CardContent className="pt-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="eve-card group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="eve-gradient p-1 rounded-2xl inline-block">
            <div className="bg-background rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Legend?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join hundreds of thousands of pilots in the world's most compelling sci-fi universe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="eve-button bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
                  Start Your Journey
                </button>
                <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}