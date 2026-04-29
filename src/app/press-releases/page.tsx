import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Filter, Calendar, ArrowRight } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPosts } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/press-releases',
    title: 'Press Releases - Worldreporter 24 X 7',
    description: 'Latest press releases and company announcements from Worldreporter 24 X 7. Stay updated with industry news and corporate communications.',
    keywords: ['press releases', 'company announcements', 'news', 'media', 'corporate communications'],
  })
}

const categories = [
  'All Categories',
  'Business',
  'Technology',
  'Healthcare',
  'Finance',
  'Entertainment',
  'Sports',
  'Education',
  'Government',
  'Non-Profit',
]

const dateRanges = [
  'All Time',
  'Today',
  'This Week',
  'This Month',
  'This Quarter',
  'This Year',
]

export default async function PressReleasesPage() {
  const posts = await fetchTaskPosts('mediaDistribution', 12, { allowMockFallback: false, fresh: false, revalidate: 120 })
  
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Press Releases',
      description: 'Latest press releases and company announcements',
      url: `${SITE_CONFIG.baseUrl}/press-releases`,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A3263] to-[#0f1f3d] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Press Releases
              </h1>
              <p className="mt-6 text-xl text-white/90">
                Stay updated with the latest company announcements and industry news
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="border-b border-gray-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search press releases..."
                    className="w-full rounded-lg border border-gray-300 pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 lg:flex-nowrap">
                {/* Category Filter */}
                <div className="relative">
                  <select className="appearance-none rounded-lg border border-gray-300 bg-white pl-10 pr-10 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Date Range Filter */}
                <div className="relative">
                  <select className="appearance-none rounded-lg border border-gray-300 bg-white pl-10 pr-10 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {dateRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Header */}
        <section className="bg-gray-50 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Latest Press Releases
                </h2>
                <p className="mt-1 text-gray-600">
                  Showing {posts.length} recent press releases
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <TaskPostCard
                    key={post.id}
                    post={post}
                    href={`/press-releases/${post.slug}`}
                    taskKey="mediaDistribution"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="mx-auto max-w-md">
                  <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No press releases found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pagination */}
        {posts.length > 0 && (
          <section className="border-t border-gray-200 bg-gray-50 py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600">
                  Showing 1-{Math.min(posts.length, 12)} of {posts.length} results
                </div>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    Previous
                  </button>
                  <button
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need Help with Your Press Release?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Our team of experts is here to help you get maximum exposure for your announcements
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-primary transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
