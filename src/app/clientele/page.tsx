import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'

export const metadata: Metadata = {
  title: 'Clientele',
  description:
    'Discover the diverse range of organizations we\'ve helped transform with our AI solutions.',
}

const clients = [
  {
    name: 'FamilyFund',
    logo: '/Python-AI-Solutions-Logo.webp',
    industry: 'Non-Profit',
    testimonial: 'Python AI Solutions transformed our vision into a reality. Their expertise in AI and data analytics helped us create a platform that truly serves our community.',
    author: 'Sarah Johnson',
    role: 'CEO'
  },
  {
    name: 'Unseal',
    logo: '/Python-AI-Solutions-Logo.webp',
    industry: 'Healthcare Technology',
    testimonial: 'The team at Python AI Solutions delivered an innovative solution that revolutionized how we think about health data ownership and blockchain technology.',
    author: 'Michael Chen',
    role: 'CTO'
  },
  {
    name: 'Phobia',
    logo: '/Python-AI-Solutions-Logo.webp',
    industry: 'Mental Health',
    testimonial: 'Working with Python AI Solutions was incredible. They understood our unique concept and built an AI-powered matching system that exceeded our expectations.',
    author: 'Emma Rodriguez',
    role: 'Founder'
  }
]

const industries = [
  'Healthcare',
  'Finance',
  'Education',
  'Non-Profit',
  'Technology',
  'Manufacturing',
  'Retail',
  'Government'
]

export default function Clientele() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our Clientele" title="Trusted by organizations worldwide">
        <p>
          We work with a diverse range of organizations across various industries, 
          helping them leverage AI to solve complex challenges and drive innovation.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
            Industries We Serve
          </h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((industry) => (
            <FadeIn key={industry}>
              <div className="text-center p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors">
                <p className="font-semibold text-sm text-neutral-950">{industry}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
            Client Success Stories & Support/Testimonials
          </h2>
        </FadeIn>
        <div className="space-y-24 lg:space-y-32">
          {clients.map((client, index) => (
            <FadeIn key={client.name}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <div className="flex items-center gap-4 mb-6">
                        <Image
                          src={getAssetPath(client.logo)}
                          alt={`${client.name} logo`}
                          width={120}
                          height={60}
                          className="h-12 w-auto"
                        />
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            {client.name}
                          </h2>
                          <p className="text-sm text-neutral-600">{client.industry}</p>
                        </div>
                      </div>
                      <blockquote className="mt-6 max-w-2xl text-lg text-neutral-600 italic">
                        &ldquo;{client.testimonial}&rdquo;
                      </blockquote>
                      <div className="mt-6 text-sm text-neutral-950">
                        <div className="font-semibold">{client.author}</div>
                        <div>{client.role}</div>
                      </div>
                      <Button
                        href="/contact"
                        className="mt-8"
                      >
                        See full text
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-8">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can help your organization achieve its goals.
            </p>
            <Button href="/contact">
              Get Started Today
            </Button>
          </div>
        </FadeIn>
      </Container>

    </RootLayout>
  )
}
