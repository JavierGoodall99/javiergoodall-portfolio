"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Github, Linkedin, Mail, SendIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// Form schema with validation rules
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false)
  const [submitError, setSubmitError] = React.useState<string>("")

  // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      // Create FormData for FormSubmit.co
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('message', data.message)
      formData.append('_subject', `New contact form submission from ${data.name}`)
      formData.append('_captcha', 'false') // Disable captcha for better UX
      formData.append('_template', 'table') // Use table template for better formatting

      // Submit to FormSubmit.co
      const response = await fetch('https://formsubmit.co/javiergoodall23@gmail.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitSuccess(true)
        form.reset()
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError("Failed to send message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Warm CTA heading */}
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-center">
          Looking for a frontend dev who thinks like a designer? Let&apos;s talk.
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I&apos;m passionate about creating interfaces that are both beautiful and functional. 
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Contact form */}
          <Card className="w-full md:w-2/3 shadow-md">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I&apos;ll respond within 48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Your name" 
                    {...form.register("name")}
                    aria-invalid={!!form.formState.errors.name}
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com" 
                    {...form.register("email")}
                    aria-invalid={!!form.formState.errors.email}
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project, goals, or questions..." 
                    {...form.register("message")}
                    aria-invalid={!!form.formState.errors.message}
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending<span className="ml-2 animate-pulse">...</span></>
                  ) : (
                    <>Send Message <SendIcon className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
                
                {submitSuccess && (
                  <p className="text-sm text-green-600 dark:text-green-500 mt-2 animate-fade-in">
                    Message sent successfully! I&apos;ll be in touch soon.
                  </p>
                )}
                
                {submitError && (
                  <p className="text-sm text-destructive mt-2">
                    {submitError}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
          
          {/* Contact information and social links */}
          <div className="w-full md:w-1/3">
            <Card className="shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="transition-all hover:translate-x-1 duration-200">
                  <a 
                    href="https://github.com/JavierGoodall99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </div>
                
                <div className="transition-all hover:translate-x-1 duration-200">
                  <a 
                    href="https://www.linkedin.com/in/javier-goodall/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                
                <div className="transition-all hover:translate-x-1 duration-200">
                  <a 
                    href="mailto:javiergoodall23@gmail.com"
                    className="flex items-center text-foreground hover:text-primary"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-primary/10 dark:bg-primary/5 rounded-lg p-6 border border-primary/20">
              <p className="text-foreground font-medium mb-2">Why work with me?</p>
              <p className="text-muted-foreground text-sm">
                I blend technical expertise with design sensibility to build interfaces that are not just functional, 
                but delightful to use. Let&apos;s create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}