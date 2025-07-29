'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Star, 
  Zap, 
  Users, 
  TrendingUp,
  MapPin,
  Navigation,
  Rocket
} from 'lucide-react'
import { useState } from 'react'

export function UniverseMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const regions = [
    {
      id: 'forge',
      name: 'The Forge',
      description: 'Industrial heartland of New Eden, home to Jita - the largest trade hub',
      security: 'High-Sec',
      players: '45,234',
      systems: 87,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      stats: [
        { label: 'Trade Volume', value: '$2.1B Daily' },
        { label: 'Corporations', value: '1,234' },
        { label: 'Stations', value: '456' }
      ]
    },
    {
      id: 'deklein',
      name: 'Deklein',
      description: 'Nullsec powerhouse controlled by major alliances',
      security: 'Null-Sec',
      players: '12,456',
      systems: 234,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      stats: [
        { label: 'Alliances', value: '15' },
        { label: 'SOV Level', value: '5' },
        { label: 'Capital Fleets', value: '89' }
      ]
    },
    {
      id: 'domain',
      name: 'Domain',
      description: 'Ammar Empire stronghold with rich historical significance',
      security: 'High-Sec',
      players: '23,789',
      systems: 156,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      stats: [
        { label: 'Agents', value: '2,345' },
        { label: 'Missions', value: '15,678' },
        { label: 'Lore Sites', value: '89' }
      ]
    },
    {
      id: 'providence',
      name: 'Providence',
      description: 'NRDS (Not Red Don\'t Shoot) region with unique diplomacy',
      security: 'Null-Sec',
      players: '8,901',
      systems: 198,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      stats: [
        { label: 'Alliances', value: '8' },
        { label: 'Standings', value: 'NRDS' },
        { label: 'Citadels', value: '234' }
      ]
    },
    {
      id: 'syndicate',
      name: 'Syndicate',
      description: 'Pirate haven and lawless space',
      security: 'Low-Sec',
      players: '5,678',
      systems: 67,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      stats: [
        { label: 'Pirate Factions', value: '12' },
        { label: 'Hidden Bases', value: '456' },
        { label: 'Bounty Hunters', value: '2,345' }
      ]
    },
    {
      id: ' Essence',
      name: 'Essence',
      description: 'Gallente Federation core with advanced technology',
      security: 'High-Sec',
      players: '19,234',
      systems: 123,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      stats: [
        { label: 'Research Labs', value: '3,456' },
        { label: 'Tech Level', value: 'V' },
        { label: 'Innovation Index', value: '9.2' }
      ]
    }
  ]

  const universeStats = [
    { icon: Globe, label: 'Total Systems', value: '7,800+', color: 'text-blue-400' },
    { icon: Star, label: 'Regions', value: '64', color: 'text-purple-400' },
    { icon: Users, label: 'Active Pilots', value: '500K+', color: 'text-green-400' },
    { icon: TrendingUp, label: 'Daily Traffic', value: '2.3M', color: 'text-orange-400' }
  ]

  return (
    <section id="universe" className="py-20 relative">
      <div className="absolute inset-0 space-bg opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explore New Eden
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate through 7,800+ star systems across 64 unique regions, each with its own politics, economy, and dangers.
          </p>
        </div>

        {/* Universe Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {universeStats.map((stat, index) => (
            <Card key={index} className="eve-card text-center">
              <CardContent className="pt-6">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Map Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {regions.map((region) => (
            <Card 
              key={region.id} 
              className={`eve-card cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedRegion === region.id ? 'ring-2 ' + region.borderColor.replace('border', 'ring') : ''
              }`}
              onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-3 h-3 rounded-full ${region.bgColor.replace('bg', 'bg').replace('/10', '')}`}></div>
                  <Badge variant="outline" className={`text-xs ${region.borderColor}`}>
                    {region.security}
                  </Badge>
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${region.color}`} />
                  {region.name}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {region.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{region.players}</div>
                    <div className="text-muted-foreground">Pilots</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{region.systems}</div>
                    <div className="text-muted-foreground">Systems</div>
                  </div>
                </div>
                
                {selectedRegion === region.id && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <h4 className="font-medium mb-3">Region Statistics</h4>
                    <div className="space-y-2">
                      {region.stats.map((stat, index) => (
                        <div key={index} className="flex justify-between text-xs sm:text-sm">
                          <span className="text-muted-foreground">{stat.label}:</span>
                          <span className="font-medium">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 eve-button" size="sm">
                      <Navigation className="w-4 h-4 mr-2" />
                      View Region
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="eve-gradient p-1 rounded-2xl inline-block">
            <div className="bg-background rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Download the game and start your journey through the vast universe of New Eden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="eve-button group relative overflow-hidden">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Exploring
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button variant="outline" className="border-border/50 hover:border-primary transition-all duration-300">
                  Interactive Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}