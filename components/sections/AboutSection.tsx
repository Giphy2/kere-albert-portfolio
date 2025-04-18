import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Cpu, Globe, Lightbulb } from 'lucide-react'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Firebase', 'MongoDB', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'CI/CD'] },
  { category: 'Other', items: ['Technical Writing', 'UI/UX Design', 'SEO', 'Performance Optimization'] }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm Kere Albert, a software developer currently studying at Jomo Kenyatta University
              of Agriculture and Technology (JKUAT). My passion lies in crafting scalable, efficient, 
              and clean code that solves real-world problems.
            </p>
            <p className="text-muted-foreground mb-6">
              With a focus on modern JavaScript frameworks like React and Next.js, I specialize in building
              responsive and user-friendly web applications. My experience extends to backend technologies
              like Node.js and Firebase, allowing me to create full-stack solutions.
            </p>
            <p className="text-muted-foreground">
              I'm an active contributor to open-source projects and constantly seeking opportunities to learn
              and collaborate with other developers. When I'm not coding, you'll find me writing technical articles,
              mentoring junior developers, or exploring the latest in web technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Globe className="text-indigo-600 h-5 w-5" />
                <span>JKUAT</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-indigo-600 h-5 w-5" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-indigo-600 h-5 w-5" />
                <span>Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="text-indigo-600 h-5 w-5" />
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600/20">
              <Image 
                src="https://dfemzhvpiacvayqyuwiz.supabase.co/storage/v1/object/public/drugs/logos/kereAlbert.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Kere Albert"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
                sizes="(max-width: 640px) 16rem, 20rem"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="border-indigo-600/20">
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
