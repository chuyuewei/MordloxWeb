'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { 
  Twitter, 
  MessageCircle, 
  Youtube, 
  Twitch, 
  MessageSquare, 
  Facebook,
  Instagram,
  Github
} from 'lucide-react'

export function Footer() {
  const footerLinks = {
    game: [
      { name: 'Download', href: '#' },
      { name: 'System Requirements', href: '#' },
      { name: 'Game Features', href: '#' },
      { name: 'New Player Guide', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    community: [
      { name: 'Forums', href: '#' },
      { name: 'Discord', href: '#' },
      { name: 'Reddit', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Alliance Tournament', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'Bug Reports', href: '#' },
      { name: 'Account Security', href: '#' },
      { name: 'Status Page', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Investor Relations', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-indigo-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
    { name: 'Twitch', icon: Twitch, href: '#', color: 'hover:text-purple-400' },
    { name: 'Reddit', icon: MessageSquare, href: '#', color: 'hover:text-orange-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-400' }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                EVE Online
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Experience the ultimate sci-fi MMO in a vast, player-driven universe where your choices shape the galaxy.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center transition-all duration-200 ${social.color} hover:bg-accent hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>&copy; 2024 EVE Online. All rights reserved.</span>
            <span>•</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with ❤️ by the EVE Community</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Status: Online</span>
            </div>
          </div>
        </div>

        {/* Additional Legal Info */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>
            EVE Online and the EVE logo are registered trademarks of CCP hf. All rights are reserved worldwide. 
            All other trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}