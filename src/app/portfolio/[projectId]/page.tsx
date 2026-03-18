import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel'
import { projectDetails } from '@/data/projects'

export async function generateMetadata({
  params,
}: {
  params: { projectId: string }
}): Promise<Metadata> {
  const project = projectDetails[params.projectId]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  }
}

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({
    projectId: id,
  }))
}

// Icons
const GithubIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg
    className="h-5 w-5"
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
)

interface ProjectDetailPageProps {
  params: { projectId: string }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = params
  const project = projectDetails[projectId]

  if (!project) {
    notFound()
  }

  return (
    <RootLayout>
      <Container className="mt-16 sm:mt-20 lg:mt-24">
        {/* Back Button */}
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <Link
              href="/portfolio"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-[#31b9fd]"
            >
              <ArrowLeftIcon />
              Back to Portfolio
            </Link>
          </FadeIn>
        </div>

        {/* Project Header */}
        <div className="mx-auto mb-12 max-w-5xl">
          <FadeIn className="text-center">
            <div className="mb-6 inline-block rounded-full bg-[#31b9fd]/10 px-4 py-2 text-sm font-semibold text-[#31b9fd]">
              {project.category}
            </div>
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              {project.title}
            </h1>
            {project.awardBadge && (
              <div className="mt-6 flex justify-center">
                <Image
                  src={project.awardBadge}
                  alt="Award Badge"
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain sm:h-28"
                />
              </div>
            )}
            <p className="mt-6 text-xl leading-relaxed text-neutral-600">
              {project.fullDescription}
            </p>
          </FadeIn>
        </div>

        {/* Status Badge and Award */}
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mt-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white ${project.statusColor}`}
                >
                  {project.status}
                </span>
                {!project.hideCodeActions && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                  >
                    <GithubIcon />
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#31b9fd] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3db7f1]"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Project Screenshots Carousel */}
        <FadeIn className="mt-8">
          <div className="mx-auto max-w-5xl">
            <ScreenshotCarousel 
              screenshots={project.screenshots || [project.image]} 
              title={project.title}
            />
          </div>
        </FadeIn>

        {/* Problem & Solution Section */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
            <FadeIn className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                    <svg
                      className="h-5 w-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-neutral-950">
                    The Problem
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-neutral-600">
                  {project.problem}
                </p>
              </div>
            </FadeIn>

            <FadeIn className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#31b9fd]/10">
                    <svg
                      className="h-5 w-5 text-[#31b9fd]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-neutral-950">
                    Our Solution
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-neutral-600">
                  {project.solution}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* What We Did Section */}
        <div className="mx-auto mt-12 max-w-5xl">
          <FadeIn>
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                What We Did
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Our comprehensive approach to delivering this solution
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {project.whatWeDid.map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#31b9fd] text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Technology Stack */}
        <div className="mx-auto mt-12 max-w-5xl">
          <FadeIn>
            <div className="rounded-2xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/5 to-transparent p-8">
              <h2 className="mb-1 font-display text-2xl font-semibold text-neutral-950">
                Technology Stack
              </h2>
              <p className="mb-6 text-sm text-neutral-600">
                Technologies and frameworks powering this solution
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#31b9fd] shadow-sm ring-1 ring-inset ring-[#31b9fd]/30 transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Key Features */}
        <div className="mx-auto mt-12 max-w-5xl">
          <FadeIn>
            <div className="mb-4">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Key Features
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Core capabilities that make this solution powerful and effective
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#31b9fd]/30 hover:shadow-md">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#31b9fd]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-sm font-medium leading-relaxed text-neutral-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Achievements */}
        {project.achievements.length > 0 && (
          <div className="mx-auto mt-12 max-w-5xl">
            <FadeIn>
              <div className="mb-4">
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Achievements
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Measurable impact and recognition
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-5 shadow-sm transition-all duration-200 hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#31b9fd]/20">
                        <span className="text-lg">✨</span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-neutral-700">
                        {achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}


        {/* Call to Action */}
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mt-12 rounded-3xl bg-gradient-to-br from-neutral-950 to-neutral-900 p-8 shadow-2xl">
            <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-xl font-medium text-white sm:text-2xl">
              Interested in Similar Solutions?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Let&apos;s discuss how we can help bring your vision to life with
              cutting-edge AI solutions tailored to your needs.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button
                href="/contact"
                invert
                className="bg-[#31b9fd] text-neutral-950 hover:bg-[#3db7f1] hover:text-neutral-950"
              >
                Get in Touch
              </Button>
              <Button
                href="/portfolio"
                className="border border-white/20 bg-transparent !text-white hover:bg-white/10 hover:!text-white"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </FadeIn>
        </div>
      </Container>
    </RootLayout>
  )
}
