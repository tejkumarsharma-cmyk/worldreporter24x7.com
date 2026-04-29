import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe2, Users, FileText, ArrowRight, Award, Target, Zap } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us - Worldreporter 24 X 7',
    description: 'Learn about Worldreporter 24 X 7, your trusted source for press releases and media distribution. Discover our mission, values, and team.',
    keywords: ['about', 'press release distribution', 'media company', 'newsroom', 'our story'],
  })
}

const stats = [
  {
    icon: FileText,
    value: '10,000+',
    label: 'Press Releases Distributed',
  },
  {
    icon: Users,
    value: '5,000+',
    label: 'Media Partners',
  },
  {
    icon: Globe2,
    value: '150+',
    label: 'Countries Reached',
  },
]

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide businesses and organizations with the most effective press release distribution platform, ensuring their stories reach the right audience at the right time.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Rapid distribution ensures your press releases reach media outlets quickly, maximizing impact and relevance in today\'s fast-paced news cycle.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We maintain strict quality standards and work with verified media outlets to ensure your announcements receive professional coverage.',
  },
]

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    description: '20+ years in media and communications. Leading our vision for modern press release distribution.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    description: 'Expert in distribution logistics and media partnerships. Ensuring seamless delivery of your press releases.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Media Relations',
    description: 'Building relationships with media outlets worldwide. Connecting your stories with the right journalists.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A3263] to-[#0f1f3d] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                About Worldreporter 24 X 7
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Your trusted partner for professional press release distribution and media outreach
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Founded with a simple mission: to bridge the gap between organizations and the media. 
                  We believe every important story deserves to be heard, and every press release 
                  should reach its intended audience.
                </p>
              </div>
              
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-600 leading-relaxed">
                      In today's digital landscape, getting your message heard is harder than ever. 
                      Organizations struggle to cut through the noise and reach the right journalists 
                      and media outlets at the right time.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Worldreporter 24 X 7 provides a streamlined platform that connects your 
                      press releases directly with verified media professionals. Our intelligent distribution 
                      system ensures your announcements reach the most relevant outlets for your industry 
                      and target audience.
                    </p>
                  </div>
                </div>
                
                <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-600">Verified media network with global reach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-600">Real-time distribution and analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-600">Industry-specific targeting options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span className="text-gray-600">Dedicated customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experts behind Worldreporter 24 X 7
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="text-center">
                    <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of organizations who trust us with their press release distribution
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors"
              >
                View Pricing Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-primary transition-colors"
              >
                Contact Our Team
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
