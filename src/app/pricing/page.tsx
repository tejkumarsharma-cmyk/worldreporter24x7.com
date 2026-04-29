import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Worldreporter 24 X 7',
    description: 'Choose the perfect pricing plan for your press release distribution needs. Basic, Pro, and Premium options available.',
    keywords: ['pricing', 'press release', 'media distribution', 'basic plan', 'pro plan', 'premium plan'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    price: '$199',
    period: 'per release',
    description: 'Perfect for small businesses and occasional announcements',
    features: [
      'Single press release distribution',
      'Basic media outlet coverage',
      'Standard SEO optimization',
      'Email support',
      '7-day distribution window',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$475',
    period: 'per release',
    description: 'Ideal for growing companies with regular announcements',
    features: [
      'Everything in Basic',
      'Extended media outlet coverage',
      'Premium SEO optimization',
      'Social media promotion',
      'Priority email support',
      '14-day distribution window',
      'Analytics dashboard',
      'Media monitoring alerts',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Premium',
    price: '$899',
    period: 'per release',
    description: 'Complete solution for enterprises and high-volume campaigns',
    features: [
      'Everything in Pro',
      'Maximum media outlet coverage',
      'White-glove service',
      'Dedicated account manager',
      'Phone support',
      '30-day distribution window',
      'Advanced analytics',
      'Custom targeting options',
      'Guaranteed placement options',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
]

const addOns = [
  {
    name: 'Express Distribution',
    price: '$150',
    description: 'Get your press release distributed within 24 hours',
  },
  {
    name: 'Translation Services',
    price: '$250',
    description: 'Professional translation to 5 languages',
  },
  {
    name: 'Video Production',
    price: '$500',
    description: 'Professional video content creation',
  },
]

const faqs = [
  {
    question: 'What is included in the distribution?',
    answer: 'Our distribution includes major news outlets, industry-specific publications, and online media platforms. The coverage varies by plan, with Premium offering the widest reach.',
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for new customers. If you\'re not satisfied with our service, we\'ll provide a full refund.',
  },
  {
    question: 'How quickly will my press release be distributed?',
    answer: 'Standard distribution takes 3-5 business days. Express distribution is available as an add-on for 24-hour delivery.',
  },
  {
    question: 'Can I target specific industries or regions?',
    answer: 'Yes, Premium plan includes advanced targeting options for specific industries, geographic regions, and audience demographics.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A3263] to-[#0f1f3d] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Choose the perfect plan for your press release distribution needs
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border-2 p-8 ${
                    plan.highlighted
                      ? 'border-primary bg-primary/5 shadow-2xl scale-105'
                      : 'border-gray-200 bg-white shadow-lg'
                  } transition-all duration-300`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                        {plan.cta}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="mt-4 text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link
                      href={plan.name === 'Premium' ? '/contact' : '/signup'}
                      className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-colors ${
                        plan.highlighted
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'border-2 border-gray-300 text-gray-900 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {plan.name === 'Premium' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="inline-block h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Enhance Your Distribution</h2>
              <p className="mt-4 text-lg text-gray-600">
                Add these services to any plan for maximum impact
              </p>
            </div>
            
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {addOns.map((addOn, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{addOn.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-primary">{addOn.price}</p>
                  <p className="mt-2 text-gray-600">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="mt-12 space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Amplify Your Message?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Join thousands of companies who trust us with their press release distribution
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-primary transition-colors"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
