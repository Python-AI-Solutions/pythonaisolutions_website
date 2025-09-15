import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { testimonials } from '@/data/testimonials'
import { getTestimonialLogoBackground } from '@/lib/logoUtils'

export const metadata: Metadata = {
  title: 'Clientele',
  description:
    "Discover the diverse range of organizations we've helped transform with our AI solutions.",
}

// Use real testimonials data
const clients = testimonials

const industries = [
  'Healthcare',
  'Finance',
  'Education',
  'Non-Profit',
  'Technology',
  'Manufacturing',
  'Retail',
  'Government',
]

export default function Clientele() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our Clientele"
        title="Trusted by organizations worldwide"
      >
        <p>
          We work with a diverse range of organizations across various
          industries, helping them leverage AI to solve complex challenges and
          drive innovation.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="mb-16 text-center font-display text-2xl font-semibold text-neutral-950">
            Industries We Serve
          </h2>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((industry) => (
            <FadeIn key={industry}>
              <div className="rounded-lg bg-neutral-50 p-4 text-center transition-colors hover:bg-neutral-100">
                <p className="text-sm font-semibold text-neutral-950">
                  {industry}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="mb-16 text-center font-display text-2xl font-semibold text-neutral-950">
            Client Success Stories & Support/Testimonials
          </h2>
        </FadeIn>
        <div className="space-y-24 lg:space-y-32">
          {clients.map((client) => (
            <FadeIn key={client.client}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <div className="mb-6 flex items-center gap-4">
                        <div
                          className={`${getTestimonialLogoBackground(client.client).background} ${getTestimonialLogoBackground(client.client).className} border ${getTestimonialLogoBackground(client.client).borderColor}`}
                        >
                          <Image
                            src={client.logo}
                            alt={`${client.client} logo`}
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-neutral-950">
                            {client.client}
                          </h2>
                          <p className="text-sm text-neutral-600">
                            {client.year}
                          </p>
                        </div>
                      </div>
                      {client.testimonial && (
                        <>
                          <blockquote className="mt-6 max-w-2xl text-lg italic text-neutral-600">
                            &ldquo;
                            {client.detailedReport?.fullTestimonial ||
                              client.testimonial.content}
                            &rdquo;
                          </blockquote>
                          <div className="mt-6 text-sm text-neutral-950">
                            <div className="font-semibold">
                              {client.testimonial.author.name}
                            </div>
                            <div>{client.testimonial.author.role}</div>
                          </div>
                        </>
                      )}

                      {/* Key Achievements section */}
                      {client.detailedReport?.achievements?.length > 0 && (
                        <div className="mt-8">
                          <h3 className="mb-4 text-base font-semibold text-neutral-950">
                            Key Achievements
                          </h3>
                          <ul className="space-y-2">
                            {client.detailedReport.achievements.map(
                              (achievement, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#31b9fd]"></div>
                                  <p className="text-sm text-neutral-700">
                                    {achievement}
                                  </p>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Impact & Results section */}
                      {client.detailedReport?.impact?.length > 0 && (
                        <div className="mt-8">
                          <h3 className="mb-4 text-base font-semibold text-neutral-950">
                            Impact & Results
                          </h3>
                          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {client.detailedReport.impact.map((item, index) => (
                              <div
                                key={index}
                                className="rounded-lg border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-3"
                              >
                                <div className="text-lg font-bold text-[#31b9fd]">
                                  {item.value}
                                </div>
                                <div className="text-xs text-neutral-600">
                                  {item.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button href="/contact" className="mt-8">
                        Get Started Today
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
            <h2 className="mb-8 font-display text-2xl font-semibold text-neutral-950">
              Ready to Join Our Success Stories?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600">
              Let&apos;s discuss how our AI solutions can help your organization
              achieve its goals.
            </p>
            <Button href="/contact">Get Started Today</Button>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
