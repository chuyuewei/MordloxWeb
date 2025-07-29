'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Star,
  Settings,
  Activity,
  TrendingUp
} from 'lucide-react'
import { useState } from 'react'

export function ShipShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedShip, setSelectedShip] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'All Ships', icon: Star },
    { id: 'frigate', name: 'Frigates', icon: Zap },
    { id: 'cruiser', name: 'Cruisers', icon: Shield },
    { id: 'battleship', name: 'Battleships', icon: Target },
    { id: 'capital', name: 'Capitals', icon: Users }
  ]

  const ships = [
    {
      id: 'rifter',
      name: 'Rifter',
      category: 'frigate',
      faction: 'Minmatar Republic',
      description: 'Fast and agile frigate perfect for hit-and-run tactics',
      role: 'Attack Frigate',
      cost: '250K ISK',
      skillLevel: 'Basic',
      stats: {
        speed: '450 m/s',
        dps: '150',
        tank: '1.2K EHP',
        slots: '3/2/3'
      },
      features: ['High Speed', 'Good DPS', 'Low Cost', 'Easy to Fly'],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'kestrel',
      name: 'Kestrel',
      category: 'frigate',
      faction: 'Caldari State',
      description: 'Missile-based frigate with excellent range capabilities',
      role: 'Missile Boat',
      cost: '300K ISK',
      skillLevel: 'Basic',
      stats: {
        speed: '380 m/s',
        dps: '180',
        tank: '1.5K EHP',
        slots: '4/2/2'
      },
      features: ['Missile Platform', 'Good Range', 'Shield Tanked', 'Versatile'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'rupture',
      name: 'Rupture',
      category: 'cruiser',
      faction: 'Minmatar Republic',
      description: 'Versatile combat cruiser with strong artillery capabilities',
      role: 'Attack Cruiser',
      cost: '8M ISK',
      skillLevel: 'Intermediate',
      stats: {
        speed: '320 m/s',
        dps: '450',
        tank: '25K EHP',
        slots: '5/4/4'
      },
      features: ['Artillery Bonus', 'Drone Bay', 'Versatile', 'Strong DPS'],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30'
    },
    {
      id: 'moa',
      name: 'Moa',
      category: 'cruiser',
      faction: 'Caldari State',
      description: 'Heavy shield-tanked cruiser with hybrid weapon systems',
      role: 'Combat Cruiser',
      cost: '9M ISK',
      skillLevel: 'Intermediate',
      stats: {
        speed: '280 m/s',
        dps: '420',
        tank: '35K EHP',
        slots: '5/4/4'
      },
      features: ['Shield Bonus', 'Hybrid Weapons', 'Strong Tank', 'Fleet Support'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'tempest',
      name: 'Tempest',
      category: 'battleship',
      faction: 'Minmatar Republic',
      description: 'Powerful battleship with exceptional projectile weapon bonuses',
      role: 'Fleet Battleship',
      cost: '120M ISK',
      skillLevel: 'Advanced',
      stats: {
        speed: '220 m/s',
        dps: '950',
        tank: '85K EHP',
        slots: '8/4/6'
      },
      features: ['Artillery Bonus', 'Alpha Strike', 'Fleet Mainstay', 'Versatile'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'raven',
      name: 'Raven',
      category: 'battleship',
      faction: 'Caldari State',
      description: 'Missile battleship capable of dealing devastating damage at range',
      role: 'Missile Battleship',
      cost: '140M ISK',
      skillLevel: 'Advanced',
      stats: {
        speed: '200 m/s',
        dps: '880',
        tank: '95K EHP',
        slots: '6/5/6'
      },
      features: ['Cruise Missiles', 'Extreme Range', 'Strong Tank', 'PVE/PVP'],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'nyx',
      name: 'Nyx',
      category: 'capital',
      faction: 'Gallente Federation',
      description: 'Supercarrier capable of deploying fighter squadrons',
      role: 'Supercarrier',
      cost: '25B ISK',
      skillLevel: 'Expert',
      stats: {
        speed: '80 m/s',
        dps: '4500',
        tank: '15M EHP',
        slots: '6/3/3'
      },
      features: ['Fighter Squadrons', 'Super Weapons', 'Fleet Carrier', 'Capital Class'],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    },
    {
      id: 'avatar',
      name: 'Avatar',
      category: 'capital',
      faction: 'Amarr Empire',
      description: 'Titan class ship with doomsday weapons and fleet support capabilities',
      role: 'Titan',
      cost: '100B ISK',
      skillLevel: 'Expert',
      stats: {
        speed: '60 m/s',
        dps: '2500',
        tank: '35M EHP',
        slots: '8/4/6'
      },
      features: ['Doomsday Device', 'Bridge Network', 'Fleet Command', 'Capital Weapons'],
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    }
  ]

  const filteredShips = selectedCategory === 'all' 
    ? ships 
    : ships.filter(ship => ship.category === selectedCategory)

  const shipStats = [
    { icon: Zap, label: 'Total Ships', value: '350+', color: 'text-blue-400' },
    { icon: Shield, label: 'Ship Classes', value: '12', color: 'text-purple-400' },
    { icon: Target, label: 'Factions', value: '4', color: 'text-green-400' },
    { icon: TrendingUp, label: 'Market Volume', value: '$5.2B', color: 'text-orange-400' }
  ]

  return (
    <section id="ships" className="py-20 relative">
      <div className="absolute inset-0 space-bg opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fleet Command Center
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from over 350 unique ships across 12 classes, each with distinct roles, capabilities, and tactical advantages.
          </p>
        </div>

        {/* Ship Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {shipStats.map((stat, index) => (
            <Card key={index} className="eve-card text-center">
              <CardContent className="pt-6">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id 
                    ? 'eve-button' 
                    : 'border-border/50 hover:border-primary'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            )
          })}
        </div>

        {/* Ships Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredShips.map((ship) => (
            <Card 
              key={ship.id} 
              className={`eve-card cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedShip === ship.id ? 'ring-2 ' + ship.borderColor.replace('border', 'ring') : ''
              }`}
              onClick={() => setSelectedShip(selectedShip === ship.id ? null : ship.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-3 h-3 rounded-full ${ship.bgColor.replace('bg', 'bg').replace('/10', '')}`}></div>
                  <Badge variant="outline" className={`text-xs ${ship.borderColor}`}>
                    {ship.role}
                  </Badge>
                </div>
                <CardTitle className="text-base sm:text-lg">{ship.name}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {ship.faction} • {ship.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {ship.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="text-center p-2 bg-accent/30 rounded">
                    <div className="font-semibold text-xs sm:text-sm">{ship.cost}</div>
                    <div className="text-muted-foreground text-xs">Cost</div>
                  </div>
                  <div className="text-center p-2 bg-accent/30 rounded">
                    <div className="font-semibold text-xs sm:text-sm">{ship.skillLevel}</div>
                    <div className="text-muted-foreground text-xs">Skill Level</div>
                  </div>
                </div>

                {selectedShip === ship.id && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <h4 className="font-medium mb-3">Ship Statistics</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      {Object.entries(ship.stats).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-medium mb-3">Features</h4>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {ship.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full eve-button" size="sm">
                      <Activity className="w-4 h-4 mr-2" />
                      View Fitting
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
              <h3 className="text-2xl font-bold mb-4">Command Your Fleet</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Master the art of spaceship combat and join thousands of pilots in epic fleet battles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="eve-button group relative overflow-hidden">
                  <Settings className="w-5 h-5 mr-2" />
                  Ship Fitting Tool
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button variant="outline" className="border-border/50 hover:border-primary transition-all duration-300">
                  Skill Planner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}