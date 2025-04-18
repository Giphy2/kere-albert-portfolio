import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="#home" className="text-2xl font-bold">
              K<span className="text-indigo-500">.</span>Albert
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Passionate software developer focused on crafting scalable, efficient, 
              and clean code. Specializing in modern JavaScript frameworks.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</Link></li>
              <li><Link href="#resume" className="text-muted-foreground hover:text-foreground transition">Resume</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground transition">Services</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
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
              <Link 
                href="mailto:contact@kerealbert.com" 
                className="text-muted-foreground hover:text-foreground transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Kere Albert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}