"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '@/lib/projects-data'

// Filter categories
const categories = ['All', 'Frontend', 'Fullstack', 'Backend', 'Other']

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Filter projects by category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and a learning opportunity.
          </p>
        </div>
        
        <Tabs defaultValue="All" className="w-full max-w-3xl mx-auto mb-10">
          <TabsList className="grid grid-cols-5 h-auto">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border-border hover:border-indigo-600/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2 pt-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link 
              href="https://github.com/kerealbert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              See More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}