"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })
  
  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out using the form below or through any of my social channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <Card className="border-indigo-600/20">
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <Card className="border-indigo-600/20 h-full">
              <CardContent className="pt-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a 
                          href="mailto:contact@kerealbert.com" 
                          className="text-muted-foreground hover:text-foreground transition"
                        >
                          contact@kerealbert.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a 
                          href="tel:+254700123456" 
                          className="text-muted-foreground hover:text-foreground transition"
                        >
                          +254 700 123 456
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/kerealbert"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="bg-secondary hover:bg-secondary/80 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/kerealbert"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="bg-secondary hover:bg-secondary/80 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/kerealbert"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="bg-secondary hover:bg-secondary/80 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:contact@kerealbert.com"
                      aria-label="Email"
                      className="bg-secondary hover:bg-secondary/80 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}