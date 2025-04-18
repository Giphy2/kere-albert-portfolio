"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ArrowRight, Code, Edit, HeartHandshake, Layout } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Creating responsive, accessible, and modern user interfaces using React, Next.js, and other cutting-edge technologies.',
    icon: Layout,
    features: [
      'Responsive web design',
      'Interactive UI/UX',
      'Performance optimization',
      'Cross-browser compatibility',
      'Modern framework integration'
    ]
  },
  {
    id: 2,
    title: 'Web App Development',
    description: 'Building full-stack web applications with robust backends, secure authentication, and seamless user experiences.',
    icon: Code,
    features: [
      'Full-stack development',
      'Database design & integration',
      'API development',
      'Authentication & authorization',
      'Third-party service integration'
    ]
  },
  {
    id: 3,
    title: 'Technical Writing',
    description: 'Creating clear, concise, and helpful technical documentation, tutorials, and articles for developers and end-users.',
    icon: Edit,
    features: [
      'API documentation',
      'Technical guides & tutorials',
      'Code walkthroughs',
      'Developer blog posts',
      'Release notes & changelogs'
    ]
  },
  {
    id: 4,
    title: 'Dev Consulting & Code Reviews',
    description: 'Providing expert guidance on architecture decisions, code quality improvements, and best practices implementation.',
    icon: HeartHandshake,
    features: [
      'Code quality assessment',
      'Performance optimization',
      'Architecture consulting',
      'Best practices implementation',
      'Team mentoring & training'
    ]
  }
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Services I Offer</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I provide a range of development services to help bring your ideas to life. Here's what I can do for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="overflow-hidden border-border transition-all duration-300 h-full flex flex-col"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-2">
                <Button asChild variant="ghost" className="p-0 h-auto hover:bg-transparent">
                  <Link href="#contact" className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                    Request Service
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      hoveredId === service.id ? 'translate-x-1' : ''
                    }`} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}