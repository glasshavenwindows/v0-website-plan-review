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

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meenzgnj'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Form submission failed')

      setIsSubmitted(true)

      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="glass-card rounded-xl p-8 text-center animate-scale-in">
        <h3 className="text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted-foreground">
          We’ll get back to you within 24 hours.
        </p>

        <Button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 w-full"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 md:p-8">
      <div className="space-y-5">

        <div className="space-y-2">
          <Label>Name *</Label>
          <Input name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label>Email *</Label>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label>Phone</Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label>Service Type</Label>
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
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="specialty">Specialty</SelectItem>
              <SelectItem value="other">Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Message *</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
