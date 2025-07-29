'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, Gamepad2, Users, Star, FileText, Settings, Rocket, Crown } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Game', href: '#game', icon: Gamepad2 },
    { name: 'Universe', href: '#universe', icon: Rocket },
    { name: 'Community', href: '#community', icon: Users },
    { name: 'Features', href: '#features', icon: Star },
    { name: 'News', href: '#news', icon: FileText },
    { name: 'Support', href: '#support', icon: Settings },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-md border-b border-border/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                EVE Online
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                New Eden
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center space-x-1 group relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="border-border/50 hover:border-primary transition-all duration-300 hover:scale-105">
              Sign In
            </Button>
            <Button size="sm" className="eve-button group relative overflow-hidden">
              <Crown className="w-4 h-4 mr-1" />
              Play Free
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent transition-colors">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-border/50">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2 pb-4 border-b border-border/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    EVE Online
                  </span>
                </div>
                
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105 hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-8 h-8 bg-accent/30 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </Link>
                ))}
                
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-center p-3">
                    <ThemeToggle />
                  </div>
                  <Button variant="outline" className="w-full border-border/50 hover:border-primary transition-all duration-300">
                    Sign In
                  </Button>
                  <Button className="w-full eve-button group relative overflow-hidden">
                    <Crown className="w-4 h-4 mr-2" />
                    Play Free
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </div>
                
                {/* Mobile Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">500K+</div>
                    <div className="text-xs text-muted-foreground">Players</div>
                  </div>
                  <div className="text-center p-3 bg-accent/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">7.8K+</div>
                    <div className="text-xs text-muted-foreground">Systems</div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Animated Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </nav>
  )
}