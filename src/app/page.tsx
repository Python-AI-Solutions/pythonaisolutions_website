'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import logoJusticeInnovationLabLight from '@/images/clients/justice-innovation-lab/logo-light.svg'
import logoSustechLight from '@/images/clients/sustech/logo-light.svg'
import logoCmnLight from '@/images/clients/cmn/logo-light.svg'
import logoDataScienceNimhLight from '@/images/clients/data-science-nimh/logo-light.svg'
import logoCirunLight from '@/images/clients/cirun/logo-light.svg'
import logoPytorchIgniteLight from '@/images/clients/Pytorch-Ignite/logo-light.svg'
import logoOpenteams from '@/images/clients/openteams/OT-Color-WithTagline-Horizontal-NoBackground-1.webp'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'
import { Modal } from '@/components/Modal'
import { testimonials } from '@/data/testimonials'
import { getLogoContainerProps } from '@/lib/logoUtils'

const clients = [
  ['PyTorch Ignite', logoPytorchIgniteLight, 'https://pytorch.org/ignite/'],
  [
    'Justice Innovation Lab',
    logoJusticeInnovationLabLight,
    'https://www.justiceinnovationlab.org/',
  ],
  ['DSST', logoDataScienceNimhLight, 'https://cmn.nimh.nih.gov/dsst'],
  ['CMN', logoCmnLight, 'https://cmn.nimh.nih.gov'],
  ['SUStech', logoSustechLight, 'https://sustech.ie/'],
  ['Cirun', logoCirunLight, 'https://cirun.io/'],
  ['OpenTeams', logoOpenteams, 'https://www.openteams.com/'],
  [
    'Futurus',
    'https://futurus.ie/wp-content/themes/bootscore/assets/img/logo/futurus_logo.png',
    'https://futurus.ie/',
  ],
]

// Load testimonials from generated data
const projects = testimonials

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-16 sm:mt-32 sm:py-20 lg:mt-56 lg:py-32">
      <Container>
        <FadeIn className="flex flex-col items-center gap-x-4 sm:flex-row sm:gap-x-8">
          <h2 className="text-center font-display text-xs font-semibold tracking-wider text-white sm:text-left sm:text-sm">
            Providing trusted services globally
          </h2>
          <div className="mt-4 h-px flex-auto bg-neutral-800 sm:mt-0" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, url]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-105"
                  >
                    <Image
                      src={logo}
                      alt={client}
                      unoptimized
                      width={typeof logo === 'string' ? 200 : undefined}
                      height={typeof logo === 'string' ? 80 : undefined}
                      className="mx-auto h-16 w-auto cursor-pointer object-contain sm:h-20"
                    />
                  </a>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile: 1 per slide, Desktop: 3 per slide
  const totalSlidesMobile = projects.length
  const totalSlidesDesktop = Math.ceil(projects.length / 3)
  const totalSlides = isMobile ? totalSlidesMobile : totalSlidesDesktop

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)

    if (isMobile && mobileContainerRef.current) {
      // For mobile: each slide is (100/totalSlidesMobile)% width, so translate by slideIndex * (100/totalSlidesMobile)%
      const slideWidthPercent = 100 / totalSlidesMobile
      const translateX = slideIndex * slideWidthPercent
      mobileContainerRef.current.style.transform = `translateX(-${translateX}%)`
    } else if (containerRef.current) {
      // For desktop: each slide is (100/totalSlidesDesktop)% width, so translate by slideIndex * (100/totalSlidesDesktop)%
      const slideWidthPercent = 100 / totalSlidesDesktop
      const translateX = slideIndex * slideWidthPercent
      containerRef.current.style.transform = `translateX(-${translateX}%)`
    }
  }

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  return (
    <>
      <SectionIntro
        title={
          <span>
            Transforming businesses with{' '}
            <span style={{ color: '#31b9fd' }}>AI</span>
            -powered solutions
          </span>
        }
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We leverage cutting-edge Python AI technologies to solve complex
          business challenges and drive innovation across industries.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="relative">
            {/* Navigation arrows - visible on all screen sizes */}
            <button
              className={`absolute left-2 top-1/2 z-10 -translate-x-2 -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl sm:left-0 sm:-translate-x-16 sm:p-3 ${currentSlide === 0 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <svg
                className="h-4 w-4 text-neutral-600 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 translate-x-2 rounded-full border border-neutral-200 bg-white p-2 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl sm:right-0 sm:translate-x-16 sm:p-3 ${currentSlide === totalSlides - 1 ? 'cursor-not-allowed opacity-50' : 'opacity-100'}`}
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <svg
                className="h-4 w-4 text-neutral-600 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile testimonials container - 1 per slide */}
            <div className="relative overflow-hidden px-8 md:hidden">
              <div
                ref={mobileContainerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${totalSlidesMobile * 100}%`,
                }}
              >
                {projects.map((project) => (
                  <div
                    key={project.client}
                    className="w-full flex-shrink-0"
                    style={{ width: `${100 / totalSlidesMobile}%` }}
                  >
                    <FadeIn>
                      <Link href="/clientele" className="block">
                        <article className="relative flex w-full cursor-pointer flex-col rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:shadow-md">
                          <h3 className="flex justify-center">
                            {project.logo ? (
                              <div
                                {...getLogoContainerProps(
                                  project.client,
                                  'testimonial',
                                )}
                              >
                                <Image
                                  src={project.logo}
                                  alt={project.client}
                                  width={96}
                                  height={96}
                                  className="h-20 w-auto object-contain"
                                  unoptimized
                                />
                              </div>
                            ) : null}
                          </h3>
                          {project.testimonial && (
                            <Blockquote
                              author={project.testimonial.author}
                              className="mt-4"
                            >
                              <span className="text-sm">
                                {project.testimonial.content}
                              </span>
                            </Blockquote>
                          )}

                          {/* Show Read more button only if there's more content beyond basic quote */}
                          {(project.testimonial?.content !==
                            project.detailedReport?.summary ||
                            project.detailedReport?.achievements?.length > 0 ||
                            project.detailedReport?.impact?.length > 0 ||
                            project.detailedReport?.fullTestimonial) && (
                            <button
                              className="mt-4 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-700 transition-colors hover:text-[#31b9fd]"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setSelectedTestimonial(project)
                                setIsModalOpen(true)
                              }}
                            >
                              Read more
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          )}
                        </article>
                      </Link>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop testimonials container - 3 per slide */}
            <div className="relative hidden overflow-hidden md:block">
              <div
                ref={containerRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${totalSlidesDesktop * 100}%`,
                  display: 'flex',
                  flexWrap: 'nowrap',
                }}
              >
                {Array.from({ length: totalSlidesDesktop }, (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex gap-6 lg:gap-8"
                    style={{ width: `${100 / totalSlidesDesktop}%` }}
                  >
                    {projects
                      .slice(slideIndex * 3, slideIndex * 3 + 3)
                      .map((project) => (
                        <FadeIn key={project.client} className="w-1/3 min-w-0">
                          <Link href="/clientele" className="block">
                            <article className="relative flex w-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 hover:shadow-md">
                              <h3 className="flex justify-center">
                                {project.logo ? (
                                  <div
                                    {...getLogoContainerProps(
                                      project.client,
                                      'testimonial',
                                    )}
                                  >
                                    <Image
                                      src={project.logo}
                                      alt={project.client}
                                      width={128}
                                      height={128}
                                      className="h-24 w-auto object-contain lg:h-28"
                                      unoptimized
                                    />
                                  </div>
                                ) : null}
                              </h3>
                              {project.testimonial && (
                                <Blockquote
                                  author={project.testimonial.author}
                                  className="mt-6"
                                >
                                  <span className="text-base">
                                    {project.testimonial.content}
                                  </span>
                                </Blockquote>
                              )}

                              {/* Show Read more button only if there's more content beyond basic quote */}
                              {(project.testimonial?.content !==
                                project.detailedReport?.summary ||
                                project.detailedReport?.achievements?.length >
                                  0 ||
                                project.detailedReport?.impact?.length > 0 ||
                                project.detailedReport?.fullTestimonial) && (
                                <button
                                  className="mt-4 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-700 transition-colors hover:text-[#31b9fd]"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setSelectedTestimonial(project)
                                    setIsModalOpen(true)
                                  }}
                                >
                                  Read more
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </button>
                              )}
                            </article>
                          </Link>
                        </FadeIn>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="mt-4 flex justify-center space-x-2 sm:mt-6">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors duration-200 sm:h-3 sm:w-3 ${
                    i === currentSlide
                      ? 'bg-[#31b9fd]'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>

            {/* Provide a testimonial button */}
            <div className="mt-6 flex justify-center sm:mt-8">
              <Link href="/testimonial">
                <Button className="bg-[#31b9fd] px-4 py-2 text-sm text-white transition-colors duration-300 hover:!bg-[#3db7f1] sm:px-6 sm:py-3 sm:text-base">
                  Provide a testimonial
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
      <Modal
        isOpen={isModalOpen && !!selectedTestimonial}
        onClose={() => setIsModalOpen(false)}
        title={selectedTestimonial?.client || ''}
      >
        {selectedTestimonial && (
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-4 flex flex-col items-center gap-4 sm:mb-6 sm:flex-row">
              {selectedTestimonial.logo ? (
                <div
                  {...getLogoContainerProps(
                    selectedTestimonial.client,
                    'modal',
                  )}
                >
                  <Image
                    src={selectedTestimonial.logo}
                    alt={selectedTestimonial.client}
                    width={64}
                    height={64}
                    className="h-12 w-auto object-contain sm:h-16"
                    unoptimized
                  />
                </div>
              ) : null}
              <div className="flex-1 text-center sm:text-right">
                <h2 className="text-lg font-bold text-neutral-950 sm:text-xl">
                  {selectedTestimonial.client}
                </h2>
                {selectedTestimonial.testimonial?.author && (
                  <p className="text-sm text-neutral-600 sm:text-base">
                    {selectedTestimonial.testimonial.author.name}
                    {selectedTestimonial.testimonial.author.role &&
                      `, ${selectedTestimonial.testimonial.author.role}`}
                  </p>
                )}
              </div>
            </div>

            {/* Executive Summary - only show if different from main testimonial or if no main testimonial */}
            {selectedTestimonial.detailedReport?.summary &&
              selectedTestimonial.detailedReport.summary !==
                selectedTestimonial.testimonial?.content && (
                <div className="rounded-xl bg-neutral-50 p-4 sm:p-6">
                  <h3 className="mb-3 text-base font-semibold text-neutral-950 sm:mb-4 sm:text-lg">
                    Executive Summary
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                    {selectedTestimonial.detailedReport.summary}
                  </p>
                </div>
              )}

            {/* Key Achievements - only show if exists */}
            {selectedTestimonial.detailedReport?.achievements?.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                  Key Achievements
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedTestimonial.detailedReport.achievements.map(
                    (achievement: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#31b9fd]"></div>
                        <p className="text-sm text-neutral-700 sm:text-base">
                          {achievement}
                        </p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Impact & Results - only show if exists */}
            {selectedTestimonial.detailedReport?.impact?.length > 0 && (
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                  Impact & Results
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {selectedTestimonial.detailedReport.impact.map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-3 sm:p-4"
                      >
                        <div className="text-xl font-bold text-[#31b9fd] sm:text-2xl">
                          {item.value}
                        </div>
                        <div className="text-xs text-neutral-600 sm:text-sm">
                          {item.label}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Full Testimonial - show if exists and different from main quote */}
            {selectedTestimonial.detailedReport?.fullTestimonial &&
              selectedTestimonial.detailedReport.fullTestimonial !==
                selectedTestimonial.testimonial?.content && (
                <div className="rounded-xl border-l-4 border-[#31b9fd] bg-gradient-to-r from-[#31b9fd]/10 to-transparent p-4 sm:p-6">
                  <h3 className="mb-2 text-base font-semibold text-neutral-950 sm:mb-3 sm:text-lg">
                    Full Testimonial
                  </h3>
                  <blockquote className="text-sm italic leading-relaxed text-neutral-700 sm:text-base">
                    &quot;{selectedTestimonial.detailedReport.fullTestimonial}
                    &quot;
                  </blockquote>
                  {selectedTestimonial.testimonial?.author && (
                    <div className="mt-3 text-xs text-neutral-600 sm:mt-4 sm:text-sm">
                      — {selectedTestimonial.testimonial.author.name}
                      {selectedTestimonial.testimonial.author.role &&
                        `, ${selectedTestimonial.testimonial.author.role}`}
                      {selectedTestimonial.client &&
                        ` at ${selectedTestimonial.client}`}
                    </div>
                  )}
                </div>
              )}
          </div>
        )}
      </Modal>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow={
          <span>
            <span style={{ color: '#31b9fd' }}>AI</span> Services
          </span>
        }
        title="We help you harness the power of artificial intelligence."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From machine learning models to intelligent automation, we build
          scalable AI solutions that drive real business value.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Services Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FadeIn>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-[#31b9fd]/20">
                  <h3 className="mb-3 font-semibold text-[#31b9fd]">
                    Data Analytics & Insights
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Our data analytics services help you make informed
                    decisions, uncover new opportunities, and optimize your
                    business processes for maximum efficiency.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-[#31b9fd]/20">
                  <h3 className="mb-3 font-semibold text-[#31b9fd]">
                    Automation Services
                  </h3>
                  <p className="text-sm text-neutral-600">
                    From automating repetitive tasks to optimizing workflows,
                    our services free up your resources, allowing you to focus
                    on strategic business activities.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-[#31b9fd]/20">
                  <h3 className="mb-3 font-semibold text-[#31b9fd]">
                    Custom AI Solutions
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Get AI solutions that are tailor-made for your business
                    needs. Whether it&apos;s enhancing operational efficiency,
                    improving customer experiences, or innovating your product
                    offerings.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-[#31b9fd]/20">
                  <h3 className="mb-3 font-semibold text-[#31b9fd]">
                    AI Training & Support
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Empower your team with the knowledge to harness AI
                    effectively. Our comprehensive training programs coupled
                    with ongoing support ensure that your staff are well
                    equipped.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="pt-4">
              <Button
                href="/services"
                className="transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <FadeIn className="w-135 lg:w-180 flex-none">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn>
          <div className="max-w-2xl">
            <div className="mb-6 flex justify-start">
              <Image
                src={getAssetPath('/Python-AI-Solutions-Logo.webp')}
                alt="Python AI Solutions Logo"
                width={600}
                height={240}
                className="h-32 w-auto sm:h-40 md:h-60"
                priority
              />
            </div>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              We are committed to the democratization of AI, believing in its
              capacity to transform the world for the better. Our goal is to
              level the technological playing field and provide organizations
              with accessible, customized AI solutions that enable them to fully
              harness their data and streamline their operations amid rapid
              technological advancements.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
