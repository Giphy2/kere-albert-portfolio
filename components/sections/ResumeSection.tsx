"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Download, FileText, Building, GraduationCap, DivideIcon as LucideIcon, Award, Calendar } from 'lucide-react'
import { education, experience, certifications } from '@/lib/resume-data'
import type { LucideIcon as LucideIconType } from 'lucide-react';

interface TimelineItemProps {
  title: string
  organization: string
  period: string
  description: string[]
  icon: LucideIconType // ✅ Correct type usage
  skills?: string[]
}

function TimelineItem({ title, organization, period, description, icon: Icon, skills }: TimelineItemProps) {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center -translate-x-1/2">
        <Icon className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge variant="outline" className="mt-1 sm:mt-0 w-fit">
          <Calendar className="mr-1 h-3 w-3" />
          {period}
        </Badge>
      </div>
      
      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{organization}</p>
      
      <ul className="list-disc pl-5 mb-3 text-muted-foreground">
        {description.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
      
      {skills && (
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState('experience')
  
  const downloadResume = () => {
    // In a real implementation, this would download an actual PDF file
    alert('Resume download functionality would be implemented here')
  }

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Resume</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-end mb-6">
          <Button onClick={downloadResume} className="bg-indigo-600 hover:bg-indigo-700">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
        
        <Card className="border-indigo-600/20">
          <CardContent className="pt-6">
            <Tabs defaultValue="experience" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Certifications</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="mt-0">
                {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    organization={item.company}
                    period={item.period}
                    description={item.responsibilities}
                    icon={Building}
                    skills={item.skills}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="education" className="mt-0">
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.degree}
                    organization={item.institution}
                    period={item.period}
                    description={item.description}
                    icon={GraduationCap}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="certifications" className="mt-0">
                {certifications.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.name}
                    organization={item.issuer}
                    period={item.date}
                    description={[item.description]}
                    icon={FileText}
                  />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}