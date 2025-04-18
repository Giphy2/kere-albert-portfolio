"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from '@/lib/motion-wrapper'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()
      
      const x = clientX - rect.left
      const y = clientY - rect.top
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    }
    
    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_var(--mouse-x,_center)_var(--mouse-y,_center),_rgba(99,102,241,0.1)_0%,_rgba(0,0,0,0)_60%)]"
    >
      <div 
        className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_80%)]"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 pt-24 md:pt-0 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-block bg-indigo-100 dark:bg-indigo-950/50 text-indigo-800 dark:text-indigo-300 rounded-full px-4 py-1 text-sm font-medium mb-6">
              Software Developer
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Kere Albert</span>. 
            <br />
            I build things for the web.
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Passionate software developer focused on crafting scalable, efficient, 
            and clean code. Specializing in modern JavaScript frameworks like React and Next.js.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="https://github.com/kerealbert" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/kerealbert" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com/kerealbert" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-muted-foreground rounded-full mt-1"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection