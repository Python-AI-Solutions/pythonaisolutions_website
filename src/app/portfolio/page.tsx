'use client'

import { type Metadata } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'

// Icons for links
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

const projects = [
  // Production Ready Projects
  {
    id: 'cervical-screener',
    title: 'Cervical Screener',
    category: 'Healthcare AI',
    description:
      'An AI-powered medical imaging solution for cervical cancer screening. This advanced system leverages deep learning to analyze cytology slides, providing healthcare professionals with accurate and efficient diagnostic support.',
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'FastAPI'],
    features: [
      'Automated cell detection and classification',
      'Real-time analysis pipeline',
      'Clinical-grade accuracy metrics',
      'HIPAA-compliant data handling',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/CervicalAIScreener.png',
    github: 'https://github.com/Python-AI-Solutions/agentic-cervical-screener',
    demo: null,
    achievements: [
      'Winner - Health Innovation Hub AI Call',
      'Processing 1000+ slides per day capability',
    ],
  },
  {
    id: 'nostrings-resume',
    title: 'NoStrings Resume',
    category: 'Developer Tools',
    description:
      'A privacy-first resume builder that runs entirely in your browser. Create professional resumes with multiple export formats (PDF, DOCX, HTML, JSON Resume, HR-Open) while keeping your data on your device with zero server dependencies.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    features: [
      'Client-side architecture with localStorage',
      'JSON Resume Schema v1.2.1 compliance',
      'Multiple export formats (PDF, DOCX, HTML, JSON, HR-Open)',
      'Theme customization with live preview',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/NoStringsResume.png',
    github: 'https://github.com/NoStringsDevelopment/no-strings-resume',
    demo: 'https://nostringsresume.org',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & DevOps',
    category: 'Platform Engineering',
    description:
      'Production infrastructure-as-code system managing Kubernetes deployment across AWS and on-premises environments with comprehensive documentation and security hardening. Hybrid cloud setup using Terraform, WireGuard VPN, and ArgoCD for GitOps deployments.',
    techStack: ['Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'AWS', 'GCP', 'WireGuard', 'Traefik', 'ArgoCD'],
    features: [
      'Infrastructure as Code with modular Terraform modules',
      'Hybrid cloud setup (on-premises + AWS)',
      'Secure network access via WireGuard VPN',
      'GitOps deployment with ArgoCD',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/infrastructure-architecture.png',
    github: 'https://github.com/Python-AI-Solutions/websites-management',
    demo: null,
    achievements: [
      'Automated infrastructure provisioning with Terraform',
      'Secure multi-environment deployment via WireGuard VPN',
    ],
  },
  {
    id: 'archive-flow',
    title: 'ArchiveFlow',
    category: 'Data Management',
    description:
      'A lab data entry and validation platform for neuroscience research. Validates experiments against NWB schemas and integrates with eLabFTW and LabArchives ELN backends.',
    techStack: ['Python', 'Streamlit', 'eLabFTW API', 'Playwright', 'Pytest'],
    features: [
      'Dynamic form tables for surgery & behavior data',
      'Real-time NWB schema validation (17+ fields)',
      'Multi-format export (JSON, CSV)',
      'Dual ELN support (eLabFTW, LabArchives)',
    ],
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    image: '/portfolio/archive-flow.png',
    github: null,
    demo: null,
    achievements: [
      'Production ready for lab deployment',
      'Validates against ndx-fiber-photometry NWB schema',
    ],
  },
  // Beta Projects
  {
    id: 'evaluation-exploration',
    title: 'Evaluation Exploration',
    category: 'Developer Tools',
    description:
      'A framework for comparing seven validation techniques to catch LLM hallucinations in RAG systems. Run RAGAS, LLM-as-Judge, metamorphic testing, and more—all locally with deterministic results.',
    techStack: ['Python', 'Flask', 'Sentence Transformers', 'Claude API', 'Ollama'],
    features: [
      'Seven validation pipelines (P0-P6)',
      'Hybrid BM25 + vector search retrieval',
      'Web dashboard with dark/light mode',
      'Per-pipeline cost and latency tracking',
    ],
    status: 'Beta',
    statusColor: 'bg-blue-500',
    image: '/portfolio/evaluation-exploration.png',
    github: 'https://github.com/Python-AI-Solutions/validation-project',
    demo: null,
  },
  // In Development Projects
  {
    id: 'nwb-converter',
    title: 'Agentic Neurodata Conversion',
    category: 'Scientific Computing',
    description:
      'An AI assistant that handles NWB conversion workflow through conversation. Three specialized agents (Conversation, Conversion, Evaluation) work together to detect recording formats, collect metadata naturally, and validate output with clear explanations.',
    techStack: ['Python', 'FastAPI', 'Claude Sonnet 4.5', 'NeuroConv', 'NWBInspector', 'WebSocket'],
    features: [
      'Automated format detection for electrophysiology data',
      'Natural language metadata collection with provenance tracking',
      'AI-powered validation with quality scoring (0-100)',
      'Interactive HTML reports and real-time progress updates',
    ],
    status: 'In Development',
    statusColor: 'bg-yellow-500',
    image: '/portfolio/nwb-converter-validation.png',
    github: 'https://github.com/Python-AI-Solutions/agentic-neurodata-conversion',
    demo: null,
    achievements: ['Three-agent MCP architecture', 'DANDI compliance tracking'],
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/portfolio/${project.id}`)
  }

  return (
    <FadeIn className="group relative h-full">
      <div
        onClick={handleCardClick}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-neutral-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image/Placeholder */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#31b9fd]/10 to-[#31b9fd]/5">
          {project.image === '/portfolio/placeholder.svg' ? (
            <>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-6xl font-bold text-[#31b9fd]/20">
                    {project.title.charAt(0)}
                  </div>
                  <div className="text-sm font-medium text-[#31b9fd]/60">
                    {project.category}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          )}
          
          {/* Status Badge */}
          <div className="absolute right-4 top-4">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white ${project.statusColor}`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl font-semibold text-neutral-950">
            {project.title}
          </h3>
          
          <p className="mt-3 text-base text-neutral-600 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-[#31b9fd]/10 px-2 py-1 text-xs font-medium text-[#31b9fd] ring-1 ring-inset ring-[#31b9fd]/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2 min-h-[84px]">
            {project.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-neutral-600"
              >
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#31b9fd]" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mt-4 border-t border-neutral-200 pt-4">
              {project.achievements.slice(0, 2).map((achievement, index) => (
                <div
                  key={index}
                  className="mb-2 text-xs font-medium text-[#31b9fd]"
                >
                  ✨ {achievement}
                </div>
              ))}
            </div>
          )}
          {/* Spacer to maintain consistent height when no achievements */}
          {(!project.achievements || project.achievements.length === 0) && (
            <div className="mt-4"></div>
          )}

          {/* Action Buttons */}
          <div className="mt-auto flex gap-3 pt-6">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                <GithubIcon />
                View Code
              </a>
            ) : (
              <button
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-400"
              >
                <GithubIcon />
                Coming Soon
              </button>
            )}
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full bg-[#31b9fd] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3db7f1]"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function Portfolio() {
  const [filter, setFilter] = useState('all')
  
  // Define the preferred order of categories
  const categoryOrder = [
    'Healthcare AI',
    'AI-Powered Tools', 
    'Platform Engineering',
    'Developer Tools',
    'Scientific Computing',
    'Data Management'
  ]
  
  // Get unique categories from projects and sort them according to our preferred order
  const projectCategories = [...new Set(projects.map((p) => p.category))]
  const sortedCategories = categoryOrder.filter(cat => projectCategories.includes(cat))
  
  // Final categories array with 'all' first
  const categories = ['all', ...sortedCategories]

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects
    }
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Portfolio"
      >
        <p>
          Explore our collection of innovative AI solutions and tools. From
          healthcare applications to developer tools, we&apos;ve built systems that
          push the boundaries of what&apos;s possible with artificial intelligence.
        </p>
      </PageIntro>

      <Container className="mt-16">
        {/* Filter Buttons */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 pb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-[#31b9fd] text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category === 'all'
                  ? 'All Projects'
                  : category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <FadeInStagger key={filter} faster>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-lg text-neutral-600">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </FadeInStagger>

        {/* Call to Action */}
        <FadeIn className="mt-24 rounded-4xl bg-neutral-950 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-neutral-300">
              Let&apos;s collaborate to bring your AI vision to life. Our team is ready
              to tackle your most challenging problems.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                invert
                className="bg-[#31b9fd] text-neutral-950 hover:bg-[#3db7f1] hover:text-neutral-950"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

export default function PortfolioPage() {
  return (
    <RootLayout>
      <Portfolio />
    </RootLayout>
  )
}
