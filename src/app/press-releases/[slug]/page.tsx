import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { fetchTaskPostBySlug } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'
import { notFound } from 'next/navigation'

export const revalidate = 300

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await fetchTaskPostBySlug('mediaDistribution', params.slug)
  
  if (!post) {
    return {
      title: 'Press Release Not Found',
      description: 'The requested press release could not be found.',
    }
  }

  return buildPageMetadata({
    path: `/press-releases/${params.slug}`,
    title: post.title,
    description: post.summary || `Read the latest press release from ${SITE_CONFIG.name}`,
    openGraphTitle: post.title,
    openGraphDescription: post.summary,
    image: post.media?.[0]?.url || '/og-default.png',
    keywords: ['press release', 'announcement', 'news', ...(post.tags || [])],
  })
}

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const relatedPosts: SitePost[] = [
  {
    id: '1',
    title: 'Q4 Financial Results Show Strong Growth',
    summary: 'Company reports record revenue and expansion into new markets with positive outlook for 2024.',
    slug: 'q4-financial-results',
    publishedAt: new Date('2024-01-15').toISOString(),
    media: [{ url: '/placeholder.jpg?height=400&width=600' }],
    tags: ['Finance', 'Earnings'],
    content: {},
  },
  {
    id: '2',
    title: 'New Partnership Announced with Tech Leader',
    summary: 'Strategic collaboration aims to accelerate innovation and deliver enhanced solutions to global customers.',
    slug: 'tech-partnership',
    publishedAt: new Date('2024-01-10').toISOString(),
    media: [{ url: '/placeholder.jpg?height=400&width=600' }],
    tags: ['Partnership', 'Technology'],
    content: {},
  },
  {
    id: '3',
    title: 'Sustainability Initiative Receives Industry Recognition',
    summary: 'Environmental program honored for outstanding contribution to corporate responsibility and green practices.',
    slug: 'sustainability-award',
    publishedAt: new Date('2024-01-05').toISOString(),
    media: [{ url: '/placeholder.jpg?height=400&width=600' }],
    tags: ['Sustainability', 'Awards'],
    content: {},
  },
]

export default async function PressReleasePage({ params }: { params: { slug: string } }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', params.slug)
  
  if (!post) {
    notFound()
  }

  const publishDate = new Date(post.publishedAt || post.createdAt || Date.now())
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  const authorName = (content as any).author || 'Worldreporter 24 X 7'
  const featuredImage = (post.media?.[0]?.url as string) || '/placeholder.jpg?height=600&width=1200'

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: post.title,
      description: post.summary,
      image: featuredImage,
      datePublished: publishDate.toISOString(),
      author: {
        '@type': 'Organization',
        name: authorName,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        logo: `${SITE_CONFIG.baseUrl}/logo.png`,
      },
      url: `${SITE_CONFIG.baseUrl}/press-releases/${post.slug}`,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarShell />
      <SchemaJsonLd data={schemaData} />
      
      <main>
        {/* Breadcrumb */}
        <section className="border-b border-gray-200 bg-white py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/press-releases" className="text-gray-600 hover:text-primary transition-colors">
                Press Releases
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="mb-8">
              <Link
                href="/press-releases"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Press Releases
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-[3fr_1fr]">
              {/* Main Content */}
              <div className="space-y-8">
                {/* Title and Meta */}
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    {post.title}
                  </h1>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={publishDate.toISOString()}>
                        {publishDate.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{authorName}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Press Release
                      </span>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                {featuredImage && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <ContentImage
                      src={featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      intrinsicWidth={1200}
                      intrinsicHeight={675}
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  {post.summary && (
                    <div className="rounded-xl bg-gray-50 p-6 text-lg leading-relaxed text-gray-700">
                      {post.summary}
                    </div>
                  )}
                  
                  {post.content && typeof post.content === 'object' && (post.content as any).body ? (
                    <div 
                      className="article-content text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: (post.content as any).body }}
                    />
                  ) : (
                    <div className="text-gray-800 leading-relaxed">
                      <p>
                        This is a press release from {authorName}. For more information about this announcement, 
                        please contact our media relations team or visit our website for additional details.
                      </p>
                      <p className="mt-4">
                        {post.summary || 'Stay tuned for more updates and developments from our organization.'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Social Share */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this Press Release</h3>
                      <div className="flex gap-3">
                        <button
                          className="rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 transition-colors"
                          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                          <Facebook className="h-5 w-5" />
                        </button>
                        <button
                          className="rounded-lg bg-sky-500 p-3 text-white hover:bg-sky-600 transition-colors"
                          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                          <Twitter className="h-5 w-5" />
                        </button>
                        <button
                          className="rounded-lg bg-blue-700 p-3 text-white hover:bg-blue-800 transition-colors"
                          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        >
                          <Linkedin className="h-5 w-5" />
                        </button>
                        <button
                          className="rounded-lg bg-gray-600 p-3 text-white hover:bg-gray-700 transition-colors"
                          onClick={() => window.location.href = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                        >
                          <Mail className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                        <Share2 className="h-4 w-4" />
                        Share
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Quick Actions */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="flex items-center justify-between rounded-lg bg-primary p-3 text-white hover:bg-primary/90 transition-colors"
                    >
                      <span className="font-medium">Contact Media Relations</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center justify-between rounded-lg border border-gray-300 bg-white p-3 text-gray-900 hover:border-primary hover:text-primary transition-colors"
                    >
                      <span className="font-medium">View Pricing Plans</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Categories */}
                {post.tags && post.tags.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Download */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Download</h3>
                  <div className="space-y-3">
                    <button className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 hover:border-primary hover:text-primary transition-colors">
                      Download PDF Version
                    </button>
                    <button className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 hover:border-primary hover:text-primary transition-colors">
                      Download Images
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Related Press Releases */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">More Press Releases</h2>
              <p className="mt-2 text-lg text-gray-600">
                Stay updated with more company announcements and industry news
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <TaskPostCard
                  key={relatedPost.id}
                  post={relatedPost}
                  href={`/press-releases/${relatedPost.slug}`}
                  taskKey="mediaDistribution"
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/press-releases"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                View All Press Releases
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
