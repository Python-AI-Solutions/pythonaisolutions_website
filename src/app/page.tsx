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
import logoJusticeInnovationLab from '@/images/clients/justice-innovation-lab/logo-dark.svg'
import logoJusticeInnovationLabLight from '@/images/clients/justice-innovation-lab/logo-light.svg'
import logoSustech from '@/images/clients/sustech/logo-dark.svg'
import logoSustechLight from '@/images/clients/sustech/logo-light.svg'
import logoCmn from '@/images/clients/cmn/logo-dark.svg'
import logoCmnLight from '@/images/clients/cmn/logo-light.svg'
import logoDataScienceNimh from '@/images/clients/data-science-nimh/logo-dark.svg'
import logoDataScienceNimhLight from '@/images/clients/data-science-nimh/logo-light.svg'
import logoCirun from '@/images/clients/cirun/logo-dark.svg'
import logoCirunLight from '@/images/clients/cirun/logo-light.svg'
import logoPytorchIgnite from '@/images/clients/Pytorch-Ignite/logo-dark.svg'
import logoPytorchIgniteLight from '@/images/clients/Pytorch-Ignite/logo-light.svg'
import logoBioImaginix from '@/images/clients/BioImaginix/logo-dark.svg'
import logoBioImaginixLight from '@/images/clients/BioImaginix/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'
import { Modal } from '@/components/Modal'

const clients = [
  ['Phobia', logoPytorchIgniteLight],
  ['Family Fund', logoJusticeInnovationLabLight],
  ['Unseal', logoBioImaginixLight],
  ['Mail Smirk', logoDataScienceNimhLight],
  ['Home Work', logoCmnLight],
  ['Sustech', logoSustechLight],
  ['North Adventures', logoCirunLight],
]

const projects = [
  {
    client: 'FamilyFund',
    logo: logoJusticeInnovationLab,
    year: '2023',
    testimonial: {
      content: 'Python AI Solutions transformed our vision into a reality. Their expertise in AI and data analytics helped us create a platform that truly serves our community.',
      author: { name: 'Sarah Johnson', role: 'CEO' }
    },
    detailedReport: {
      summary: `Python AI Solutions revolutionized our nonprofit&apos;s approach to community engagement through intelligent data analytics and predictive modeling. Their expertise transformed our raw data into actionable insights that directly improved our service delivery and donor engagement.`,
      achievements: [
        'Developed custom AI algorithms for donor behavior prediction',
        'Implemented automated data processing reducing manual work by 80%',
        'Created predictive models for community needs assessment',
        'Built scalable infrastructure supporting 10,000+ users'
      ],
      impact: [
        { value: '40%', label: 'Increase in donor retention' },
        { value: '3x', label: 'Faster data processing' },
        { value: '85%', label: 'Improvement in service efficiency' },
        { value: '2.5M', label: 'Additional funds raised' }
      ],
      fullTestimonial: `Working with Python AI Solutions was a game-changer for our organization. Their team didn&apos;t just deliver technology—they delivered transformation. The AI solutions they built helped us understand our community better than ever before, leading to more effective programs and increased donor engagement. Their expertise in both technical implementation and nonprofit operations made them the perfect partner for our mission.`
    }
  },
  {
    client: 'Unseal',
    logo: logoBioImaginix,
    year: '2022',
    testimonial: {
      content: 'The team at Python AI Solutions delivered an innovative solution that revolutionized how we think about health data ownership and blockchain technology.',
      author: { name: 'Michael Chen', role: 'CTO' }
    },
    detailedReport: {
      summary: 'Python AI Solutions engineered a groundbreaking blockchain-based health data platform that empowers users to own and control their medical information. Their innovative approach combined cutting-edge AI with blockchain technology to create a secure, transparent, and user-centric healthcare data ecosystem.',
      achievements: [
        'Developed secure blockchain infrastructure for health data',
        'Implemented AI-powered data anonymization algorithms',
        'Created user-friendly data ownership interfaces',
        'Built compliance frameworks for HIPAA and GDPR'
      ],
      impact: [
        { value: '100K+', label: 'Users onboarded' },
        { value: '99.9%', label: 'Data security uptime' },
        { value: '50%', label: 'Reduction in data breaches' },
        { value: '$2M', label: 'Cost savings achieved' }
      ],
      fullTestimonial: 'Python AI Solutions didn\'t just build a platform—they reimagined how healthcare data should work. Their expertise in both AI and blockchain allowed them to create something truly revolutionary. The platform they built has given thousands of users control over their health data while maintaining the highest security standards. Their innovative approach has set a new standard for healthcare technology.'
    }
  },
  {
    client: 'Phobia',
    logo: logoPytorchIgnite,
    year: '2022',
    testimonial: {
      content: 'Working with Python AI Solutions was incredible. They understood our unique concept and built an AI-powered matching system that exceeded our expectations.',
      author: { name: 'Emma Rodriguez', role: 'Founder' }
    },
    detailedReport: {
      summary: 'Python AI Solutions developed a sophisticated AI-powered matching system for our unique dating app concept. Their innovative approach to user behavior analysis and preference matching created an unparalleled user experience that truly understands human psychology and relationship dynamics.',
      achievements: [
        'Built advanced AI matching algorithms',
        'Implemented real-time user behavior analysis',
        'Created personalized recommendation engines',
        'Developed scalable microservices architecture'
      ],
      impact: [
        { value: '500K+', label: 'Active users' },
        { value: '85%', label: 'User satisfaction rate' },
        { value: '3x', label: 'Increase in successful matches' },
        { value: '4.8/5', label: 'App store rating' }
      ],
      fullTestimonial: 'Python AI Solutions took our unique concept and turned it into something extraordinary. Their understanding of both technology and human psychology allowed them to build a matching system that truly works. The AI they developed doesn\'t just match people—it understands them. Our users consistently report higher satisfaction and more meaningful connections thanks to their innovative approach.'
    }
  },
  {
    client: 'TechCorp',
    logo: logoJusticeInnovationLab,
    year: '2023',
    testimonial: {
      content: 'The AI solutions provided by Python AI Solutions have dramatically improved our operational efficiency. Their expertise in machine learning is unmatched.',
      author: { name: 'David Kim', role: 'CTO' }
    },
    detailedReport: {
      summary: 'Python AI Solutions transformed our enterprise operations through intelligent automation and predictive analytics. Their comprehensive AI solutions streamlined our workflows, reduced costs, and provided unprecedented insights into our business processes.',
      achievements: [
        'Implemented enterprise-wide AI automation',
        'Developed predictive maintenance systems',
        'Created intelligent workflow optimization',
        'Built real-time analytics dashboards'
      ],
      impact: [
        { value: '60%', label: 'Reduction in operational costs' },
        { value: '4x', label: 'Faster decision making' },
        { value: '90%', label: 'Improvement in efficiency' },
        { value: '$5M', label: 'Annual cost savings' }
      ],
      fullTestimonial: 'Python AI Solutions didn\'t just improve our operations—they revolutionized them. Their expertise in enterprise AI allowed them to understand our complex business processes and create solutions that truly work. The automation they implemented has freed up our teams to focus on strategic initiatives while dramatically improving our bottom line.'
    }
  },
  {
    client: 'DataFlow',
    logo: logoSustech,
    year: '2023',
    testimonial: {
      content: 'Outstanding work! Python AI Solutions helped us implement predictive analytics that increased our revenue by 40% in just six months.',
      author: { name: 'Lisa Wang', role: 'Data Director' }
    },
    detailedReport: {
      summary: 'Python AI Solutions delivered exceptional predictive analytics solutions that transformed our data-driven decision making. Their advanced machine learning models provided insights that directly impacted our revenue growth and market positioning.',
      achievements: [
        'Developed advanced predictive analytics models',
        'Implemented real-time data processing pipelines',
        'Created automated reporting systems',
        'Built customer behavior prediction algorithms'
      ],
      impact: [
        { value: '40%', label: 'Revenue increase' },
        { value: '75%', label: 'Faster insights delivery' },
        { value: '3x', label: 'Improvement in accuracy' },
        { value: '$8M', label: 'Additional revenue generated' }
      ],
      fullTestimonial: 'Python AI Solutions turned our data into gold. Their predictive analytics capabilities are simply unmatched. The insights they provided helped us make decisions that directly impacted our bottom line. Their team\'s expertise in both data science and business intelligence made them the perfect partner for our growth strategy.'
    }
  },
  {
    client: 'InnovateLab',
    logo: logoCmn,
    year: '2022',
    testimonial: {
      content: 'The custom AI solution developed by Python AI Solutions perfectly aligned with our business needs. Their team is professional and highly skilled.',
      author: { name: 'Alex Thompson', role: 'Founder' }
    },
    detailedReport: {
      summary: 'Python AI Solutions developed a custom AI solution that perfectly aligned with our startup\'s unique business model. Their innovative approach and technical expertise helped us scale rapidly while maintaining the quality and reliability our customers expect.',
      achievements: [
        'Built custom AI recommendation engine',
        'Implemented scalable cloud infrastructure',
        'Created automated customer service systems',
        'Developed intelligent product optimization'
      ],
      impact: [
        { value: '10x', label: 'User growth' },
        { value: '95%', label: 'Customer satisfaction' },
        { value: '50%', label: 'Reduction in support tickets' },
        { value: '$3M', label: 'Series A funding secured' }
      ],
      fullTestimonial: 'Python AI Solutions understood our vision from day one. They didn\'t just build what we asked for—they built what we needed. Their custom AI solution has been instrumental in our growth and success. Their team\'s professionalism and technical expertise made the entire process seamless and enjoyable.'
    }
  },
  {
    client: 'SmartRetail',
    logo: logoDataScienceNimh,
    year: '2023',
    testimonial: {
      content: 'Python AI Solutions revolutionized our customer experience with intelligent automation. The results have been phenomenal.',
      author: { name: 'Maria Garcia', role: 'Operations Manager' }
    },
    detailedReport: {
      summary: 'Python AI Solutions transformed our retail operations through intelligent automation and customer experience optimization. Their AI solutions revolutionized how we interact with customers and manage our operations, leading to significant improvements in efficiency and customer satisfaction.',
      achievements: [
        'Implemented AI-powered customer service',
        'Developed intelligent inventory management',
        'Created personalized shopping experiences',
        'Built predictive demand forecasting'
      ],
      impact: [
        { value: '70%', label: 'Improvement in customer satisfaction' },
        { value: '45%', label: 'Reduction in operational costs' },
        { value: '3x', label: 'Faster customer service' },
        { value: '$4M', label: 'Additional revenue generated' }
      ],
      fullTestimonial: 'Python AI Solutions revolutionized our retail operations. Their intelligent automation solutions have transformed how we serve our customers and manage our business. The results have been nothing short of phenomenal—we\'ve seen dramatic improvements in customer satisfaction, operational efficiency, and our bottom line.'
    }
  },
  {
    client: 'FutureTech',
    logo: logoCirun,
    year: '2022',
    testimonial: {
      content: 'Working with Python AI Solutions was a game-changer for our startup. Their AI expertise helped us scale rapidly and efficiently.',
      author: { name: 'James Wilson', role: 'CEO' }
    },
    detailedReport: {
      summary: 'Python AI Solutions played a crucial role in our startup\'s rapid growth and success. Their AI expertise helped us build scalable solutions that supported our rapid expansion while maintaining the quality and reliability our customers demand.',
      achievements: [
        'Developed scalable AI infrastructure',
        'Implemented automated growth systems',
        'Created intelligent user acquisition',
        'Built predictive scaling algorithms'
      ],
      impact: [
        { value: '20x', label: 'User growth' },
        { value: '90%', label: 'System uptime' },
        { value: '5x', label: 'Faster scaling capability' },
        { value: '$15M', label: 'Series B funding secured' }
      ],
      fullTestimonial: 'Python AI Solutions was instrumental in our startup\'s success. Their AI expertise helped us scale from a small team to a rapidly growing company without missing a beat. Their solutions were not only technically excellent but also perfectly aligned with our business goals. They truly understand how to build AI solutions that scale.'
    }
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-16 sm:py-20 lg:py-32 sm:mt-32 lg:mt-56">
      <Container>
        <FadeIn className="flex flex-col sm:flex-row items-center gap-x-4 sm:gap-x-8">
          <h2 className="text-center font-display text-xs sm:text-sm font-semibold tracking-wider text-white sm:text-left">
            Providing trusted services globally
          </h2>
          <div className="h-px flex-auto bg-neutral-800 mt-4 sm:mt-0" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <Image 
                    src={logo} 
                    alt={client} 
                    unoptimized 
                    className="max-h-16 sm:max-h-20 mx-auto" 
                  />
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Mobile: 1 per slide, Desktop: 3 per slide
  const totalSlidesMobile = projects.length;
  const totalSlidesDesktop = Math.ceil(projects.length / 3);
  const totalSlides = isMobile ? totalSlidesMobile : totalSlidesDesktop;
  
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    
    if (isMobile && mobileContainerRef.current) {
      // For mobile: each slide is (100/totalSlidesMobile)% width, so translate by slideIndex * (100/totalSlidesMobile)%
      const slideWidthPercent = 100 / totalSlidesMobile;
      const translateX = slideIndex * slideWidthPercent;
      mobileContainerRef.current.style.transform = `translateX(-${translateX}%)`;
    } else if (containerRef.current) {
      // For desktop: each slide is (100/totalSlidesDesktop)% width, so translate by slideIndex * (100/totalSlidesDesktop)%
      const slideWidthPercent = 100 / totalSlidesDesktop;
      const translateX = slideIndex * slideWidthPercent;
      containerRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  };
  
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

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
          We leverage cutting-edge Python AI technologies to solve complex business 
          challenges and drive innovation across industries.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="relative">
            {/* Navigation arrows - visible on all screen sizes */}
            <button 
              className={`absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-16 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-neutral-200 z-10 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className={`absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-16 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-neutral-200 z-10 ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Mobile testimonials container - 1 per slide */}
            <div className="relative overflow-hidden px-8 md:hidden">
              <div 
                ref={mobileContainerRef}
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ 
                  width: `${totalSlidesMobile * 100}%`
                }}
              >
                {projects.map((project, index) => (
                  <div key={project.client} className="w-full flex-shrink-0" style={{ width: `${100 / totalSlidesMobile}%` }}>
                    <FadeIn>
                      <Link href="/clientele" className="block">
                        <article className="relative flex w-full flex-col rounded-3xl p-4 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 bg-white shadow-sm hover:shadow-md cursor-pointer">
                          <h3 className="flex justify-center">
                            <Image
                              src={project.logo}
                              alt={project.client}
                              className="h-24 w-24"
                              unoptimized
                            />
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
                          <button
                            className="mt-4 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-700 hover:text-[#31b9fd] transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedTestimonial(project);
                              setIsModalOpen(true);
                            }}
                          >
                            Read more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </article>
                      </Link>
                    </FadeIn>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop testimonials container - 3 per slide */}
            <div className="relative overflow-hidden hidden md:block">
              <div 
                ref={containerRef}
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ 
                  width: `${totalSlidesDesktop * 100}%`,
                  display: 'flex',
                  flexWrap: 'nowrap'
                }}
              >
                {Array.from({ length: totalSlidesDesktop }, (_, slideIndex) => (
                  <div key={slideIndex} className="flex gap-6 lg:gap-8" style={{ width: `${100 / totalSlidesDesktop}%` }}>
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project) => (
                      <FadeIn key={project.client} className="w-1/3 min-w-0">
                        <Link href="/clientele" className="block">
                          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 bg-white shadow-sm hover:shadow-md cursor-pointer">
                            <h3 className="flex justify-center">
                              <Image
                                src={project.logo}
                                alt={project.client}
                                className="h-28 w-28 lg:h-32 lg:w-32"
                                unoptimized
                              />
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
                            <button
                              className="mt-4 inline-flex items-center gap-x-2 text-sm font-semibold text-neutral-700 hover:text-[#31b9fd] transition-colors"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedTestimonial(project);
                                setIsModalOpen(true);
                              }}
                            >
                              Read more
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </article>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    i === currentSlide ? 'bg-[#31b9fd]' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
            
            {/* Provide a testimonial button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link href="/testimonial">
                <Button className="bg-[#31b9fd] text-white hover:!bg-[#3db7f1] transition-colors duration-300 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
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
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-6">
              <Image
                src={selectedTestimonial.logo}
                alt={selectedTestimonial.client}
                className="h-12 w-12 sm:h-16 sm:w-16"
                unoptimized
              />
              <div className="flex-1 text-center sm:text-right">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-950">{selectedTestimonial.client}</h2>
                <p className="text-sm sm:text-base text-neutral-600">{selectedTestimonial.testimonial?.author?.name}, {selectedTestimonial.testimonial?.author?.role}</p>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-950 mb-3 sm:mb-4">Executive Summary</h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">{selectedTestimonial.detailedReport?.summary}</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-950">Key Achievements</h3>
              <ul className="space-y-2 sm:space-y-3">
                {selectedTestimonial.detailedReport?.achievements?.map?.((achievement: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#31b9fd] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-neutral-700">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-950">Impact & Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {selectedTestimonial.detailedReport?.impact?.map?.((item: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-3 sm:p-4 rounded-lg border border-[#31b9fd]/20">
                    <div className="text-xl sm:text-2xl font-bold text-[#31b9fd]">{item.value}</div>
                    <div className="text-xs sm:text-sm text-neutral-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#31b9fd]/10 to-transparent p-4 sm:p-6 rounded-xl border-l-4 border-[#31b9fd]">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-950 mb-2 sm:mb-3">Client Testimonial</h3>
              <blockquote className="text-sm sm:text-base text-neutral-700 italic leading-relaxed">
                &quot;{selectedTestimonial.detailedReport?.fullTestimonial}&quot;
              </blockquote>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-600">
                — {selectedTestimonial.testimonial?.author?.name}, {selectedTestimonial.testimonial?.author?.role} at {selectedTestimonial.client}
              </div>
            </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Services Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#31b9fd]/20 transition-colors">
                  <h3 className="font-semibold text-[#31b9fd] mb-3">Data Analytics & Insights</h3>
                  <p className="text-sm text-neutral-600">
                    Our data analytics services help you make informed decisions, uncover new opportunities, and optimize your business processes for maximum efficiency.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#31b9fd]/20 transition-colors">
                  <h3 className="font-semibold text-[#31b9fd] mb-3">Automation Services</h3>
                  <p className="text-sm text-neutral-600">
                    From automating repetitive tasks to optimizing workflows, our services free up your resources, allowing you to focus on strategic business activities.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#31b9fd]/20 transition-colors">
                  <h3 className="font-semibold text-[#31b9fd] mb-3">Custom AI Solutions</h3>
                  <p className="text-sm text-neutral-600">
                    Get AI solutions that are tailor-made for your business needs. Whether it&apos;s enhancing operational efficiency, improving customer experiences, or innovating your product offerings.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#31b9fd]/20 transition-colors">
                  <h3 className="font-semibold text-[#31b9fd] mb-3">AI Training & Support</h3>
                  <p className="text-sm text-neutral-600">
                    Empower your team with the knowledge to harness AI effectively. Our comprehensive training programs coupled with ongoing support ensure that your staff are well equipped.
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
            <FadeIn className="w-135 flex-none lg:w-180">
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
            <div className="flex justify-start mb-6">
              <Image
                src={getAssetPath("/Python-AI-Solutuons-Logo.webp")}
                alt="Python AI Solutions Logo"
                width={600}
                height={240}
                className="h-32 sm:h-40 md:h-60 w-auto"
                priority
              />
            </div>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600">
              We are committed to the democratization of AI, believing in its capacity to transform the world for the better. Our goal is to level the technological playing field and provide organizations with accessible, customized AI solutions that enable them to fully harness their data and streamline their operations amid rapid technological advancements.
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
