'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ExternalLink, Star } from 'lucide-react'

export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "EVE Online: Uprising Expansion Launches",
      excerpt: "Experience the largest expansion in EVE history with new ships, gameplay mechanics, and visual improvements.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Expansion",
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Alliance Tournament XIX Finals This Weekend",
      excerpt: "Watch the best pilots in EVE compete for glory and prizes in the most prestigious PvP tournament.",
      date: "2024-01-12",
      readTime: "3 min read",
      category: "Tournament",
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "New Player Experience Revamped",
      excerpt: "Improved tutorials and guidance systems make it easier than ever to start your journey in New Eden.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Update",
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Economy Report: Q4 2023 Market Analysis",
      excerpt: "Deep dive into the player-driven economy, market trends, and industrial activities across New Eden.",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Economy",
      featured: false,
      image: "/api/placeholder/400/200"
    }
  ]

  const updates = [
    {
      title: "Patch Notes v1.2.5",
      description: "Balance changes and bug fixes",
      date: "2 hours ago",
      type: "patch"
    },
    {
      title: "Server Maintenance Complete",
      description: "All systems operational",
      date: "1 day ago",
      type: "maintenance"
    },
    {
      title: "New SKINs Available",
      description: "Limited edition ship skins",
      date: "3 days ago",
      type: "content"
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      'Expansion': 'bg-purple-500',
      'Tournament': 'bg-orange-500',
      'Update': 'bg-blue-500',
      'Economy': 'bg-green-500'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <section id="news" className="py-20 relative">
      <div className="absolute inset-0 space-bg opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest News & Updates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments, expansions, and events in the EVE Online universe.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            {newsItems.filter(item => item.featured).map((item) => (
              <Card key={item.id} className="eve-card mb-8 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-48 md:h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Star className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Other News */}
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.filter(item => !item.featured).map((item) => (
                <Card key={item.id} className="eve-card group hover:scale-105 transition-all duration-300">
                  <div className="h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-background/50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-muted-foreground" />
                    </div>
                  </div>
                  <CardContent className="pt-0">
                    <Badge className={`${getCategoryColor(item.category)} text-white mb-3`}>
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Updates */}
            <Card className="eve-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  System Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {updates.map((update, index) => (
                  <div key={index} className="border-l-2 border-border pl-4 pb-4 last:pb-0">
                    <h4 className="font-medium mb-1">{update.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{update.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {update.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="eve-card">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Forums", href: "#", icon: "💬" },
                  { title: "Wiki", href: "#", icon: "📚" },
                  { title: "Support", href: "#", icon: "🛟" },
                  { title: "Status", href: "#", icon: "📊" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.title}</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="eve-card">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest news and updates delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full eve-button">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}