import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: 'Contact Us - Worldreporter 24 X 7',
    description: 'Get in touch with Worldreporter 24 X 7 media relations team. Contact us for press inquiries, partnerships, and media opportunities.',
    keywords: ['contact', 'media relations', 'press inquiries', 'partnerships', 'customer support'],
  })
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'media@worldreporter24x7.com',
    href: 'mailto:media@worldreporter24x7.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Media Plaza, Press City, PC 12345',
    href: 'https://maps.google.com/?q=123+Media+Plaza+Press+City+PC+12345',
  },
]

const departments = [
  {
    name: 'Media Relations',
    email: 'media@worldreporter24x7.com',
    description: 'For press releases, media inquiries, and interview requests',
  },
  {
    name: 'Advertising',
    email: 'ads@worldreporter24x7.com',
    description: 'For advertising opportunities and sponsored content inquiries',
  },
  {
    name: 'Partnerships',
    email: 'partnerships@worldreporter24x7.com',
    description: 'For strategic partnerships and collaboration opportunities',
  },
  {
    name: 'Technical Support',
    email: 'support@worldreporter24x7.com',
    description: 'For website issues and technical assistance',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A3263] to-[#0f1f3d] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Connect with our team for media inquiries, partnerships, and press opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                      <span className="text-sm text-gray-600">We'll respond within 24 hours</span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-12">
                {/* Quick Contact */}
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-3">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">{info.label}</p>
                            <Link
                              href={info.href}
                              className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                            >
                              {info.value}
                            </Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Departments */}
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Departments</h2>
                  
                  <div className="space-y-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                            <p className="mt-1 text-sm text-gray-600">{dept.description}</p>
                          </div>
                          <Link
                            href={`mailto:${dept.email}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Monday - Friday:</span>
                      <span className="text-gray-900">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Saturday:</span>
                      <span className="text-gray-900">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Sunday:</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of organizations who trust us with their press release distribution
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                View Pricing Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/press-releases"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 hover:border-primary hover:text-primary transition-colors"
              >
                Browse Press Releases
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
