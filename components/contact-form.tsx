'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
    }, 500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-xl p-8 text-center animate-scale-in">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>

        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>

        <div className="mt-6 space-y-3">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            Send Another Message
          </Button>

          <Button
            asChild
            className="w-full btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Get Your Fast Quote
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
      <div className="space-y-5">

        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Service Type */}
        <div className="space-y-2">
          <Label>Service Type (Optional)</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, serviceType: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential Cleaning</SelectItem>
              <SelectItem value="commercial">Commercial Cleaning</SelectItem>
              <SelectItem value="specialty">Specialty Services</SelectItem>
              <SelectItem value="other">Other / Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label>Message *</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Send Message
        </Button>

        {/* FINAL CTA (FIXED) */}
        <p className="text-center text-sm text-muted-foreground">
          Or{' '}
          <a
            href={QUOTE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            get your fast quote
          </a>
        </p>

      </div>
    </form>
  )
}
