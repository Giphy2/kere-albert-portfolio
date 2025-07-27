"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Resume', href: '#resume' },
	{ name: 'Services', href: '#services' },
	{ name: 'Contact', href: '#contact' },
]

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const [activeSection, setActiveSection] = useState<string>('home')

	// Scroll spy for highlighting Projects link
	useEffect(() => {
		const handleScroll = () => {
			const sections = ['home', 'about', 'projects', 'resume', 'services', 'contact']
			let current = 'home'
			for (const section of sections) {
				const el = document.getElementById(section)
				if (el && window.scrollY + 80 >= el.offsetTop) {
					current = section
				}
			}
			setActiveSection(current)
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				isScrolled
					? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-7' // increased from py-3
					: 'bg-transparent py-9' // increased from py-5
			)}
		>
			<div className="container mx-auto flex items-center justify-between">
				{/* Removed centered logo */}

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={cn(
								'text-sm font-medium transition px-3 py-1 rounded-full',
								activeSection === item.name.toLowerCase()
									? 'bg-indigo-600 text-white shadow'
									: 'text-foreground/80 hover:text-foreground'
							)}
						>
							{item.name}
						</Link>
					))}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						aria-label="Toggle theme"
					>
						<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					</Button>
					<Button asChild className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-4">
						<Link href="#contact">Get in Touch</Link>
					</Button>
				</nav>

				{/* Mobile Navigation Toggle */}
				<div className="flex items-center md:hidden gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						aria-label="Toggle theme"
					>
						<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm md:hidden">
					<nav className="container mx-auto py-8 flex flex-col items-center gap-6">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-lg font-medium text-foreground"
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<Button asChild className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full max-w-xs">
							<Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
								Get in Touch
							</Link>
						</Button>
					</nav>
				</div>
			)}
		</header>
	)
}