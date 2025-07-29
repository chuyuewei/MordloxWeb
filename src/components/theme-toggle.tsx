'use client'

import { Moon, Sun, Monitor, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return (
          <motion.div
            key="light"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
          </motion.div>
        )
      case 'dark':
        return (
          <motion.div
            key="dark"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
          </motion.div>
        )
      default:
        return (
          <motion.div
            key="system"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Monitor className="h-[1.2rem] w-[1.2rem] text-purple-400" />
          </motion.div>
        )
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-9 h-9 transition-colors duration-300 hover:bg-accent relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {getThemeIcon()}
            </AnimatePresence>
            <motion.div 
              className="absolute inset-0 bg-accent/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-background border-border/50 backdrop-blur-sm overflow-hidden"
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DropdownMenuItem 
              onClick={() => setTheme('light')}
              className="flex items-center gap-3 cursor-pointer transition-colors hover:bg-accent"
            >
              <Sun className="h-4 w-4 text-yellow-400" />
              <span>Light</span>
              <AnimatePresence>
                {theme === 'light' && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <Check className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </DropdownMenuItem>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DropdownMenuItem 
              onClick={() => setTheme('dark')}
              className="flex items-center gap-3 cursor-pointer transition-colors hover:bg-accent"
            >
              <Moon className="h-4 w-4 text-blue-400" />
              <span>Dark</span>
              <AnimatePresence>
                {theme === 'dark' && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <Check className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </DropdownMenuItem>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <DropdownMenuItem 
              onClick={() => setTheme('system')}
              className="flex items-center gap-3 cursor-pointer transition-colors hover:bg-accent"
            >
              <Monitor className="h-4 w-4 text-purple-400" />
              <span>System</span>
              <AnimatePresence>
                {theme === 'system' && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto"
                  >
                    <Check className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </DropdownMenuItem>
          </motion.div>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}