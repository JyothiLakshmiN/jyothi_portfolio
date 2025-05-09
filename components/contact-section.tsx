"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      formRef.current?.reset()
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="section-heading gradient-text"
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subheading">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out for collaborations, internship opportunities, or just to say hello! I'll get back to
            you as soon as possible.
          </p>

          <div className="space-y-6">
            <Card className="glass-effect border-primary/10">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:jyothilakshmi.cbp@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    jyothilakshmi.cbp@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/10">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+17179436303" className="font-medium hover:text-primary transition-colors">
                    +1 (312) 776-9139
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/10">
              <CardContent className="flex items-center p-4 gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Chicago State University</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4 mt-8">
              <a
                href="https://github.com/JyothiLakshmiN"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Github className="h-6 w-6 text-primary" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jyothilakshminagaraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:jyothilakshmi.cbp@gmail.com"
                className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-6 w-6 text-primary" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="section-subheading">Send Me a Message</h3>
          <Card className="glass-effect border-primary/10">
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass-effect border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="glass-effect border-primary/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="glass-effect border-primary/10"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full btn-glow flex items-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

