'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import { Modal } from '@/components/Modal'
import { NoStringsResume } from '@/components/NoStringsResume'
import { teamResumes, teamPhotos } from '@/data/team-resumes'
import { getAssetPath } from '@/lib/basePath'

function Culture() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isIntegrityModalOpen, setIsIntegrityModalOpen] = useState(false)
  const [isTrustModalOpen, setIsTrustModalOpen] = useState(false)
  const [isCompassion1ModalOpen, setIsCompassion1ModalOpen] = useState(false)
  const [isCompassion2ModalOpen, setIsCompassion2ModalOpen] = useState(false)

  return (
    <>
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro eyebrow="Our Mission" title="What We Want" invert>
          <p>
            Our mission is to empower SMEs and nonprofits with accessible AI
            solutions, democratizing technology to help organizations thrive in
            the digital era. We provide customized AI solutions that enable
            organizations to harness their data and streamline operations.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => setIsModalOpen(true)}
              invert
              className="transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white"
            >
              Learn More
            </Button>
          </div>
        </SectionIntro>
        <Container className="mt-16">
          <h3 className="mb-12 font-display text-base font-semibold text-white">
            Core Values
          </h3>
          <GridList>
            <GridListItem
              title={<span style={{ color: '#31b9fd' }}>Integrity</span>}
              invert
            >
              <div className="space-y-4">
                <p>
                  This captures the essence of integrity as a core value that
                  encompasses multiple virtues and guides consistent ethical
                  behavior.
                </p>
                <button
                  onClick={() => setIsIntegrityModalOpen(true)}
                  className="inline-flex items-center gap-x-2 text-sm font-medium text-white transition-colors hover:text-[#31b9fd]"
                >
                  Learn More
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
              </div>
            </GridListItem>
            <GridListItem
              title={
                <span style={{ color: '#31b9fd' }}>Digital Stewardship</span>
              }
              invert
            >
              <div className="space-y-4">
                <p>
                  We practice digital stewardship by actively engaging with and
                  supporting the digital ecosystem that sustains our work.
                </p>
                <button
                  onClick={() => setIsTrustModalOpen(true)}
                  className="inline-flex items-center gap-x-2 text-sm font-medium text-white transition-colors hover:text-[#31b9fd]"
                >
                  Learn More
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
              </div>
            </GridListItem>
            <GridListItem
              title={<span style={{ color: '#31b9fd' }}>Antifragility</span>}
              invert
            >
              <div className="space-y-4">
                <p>
                  Antifragility is a system&apos;s or organization&apos;s
                  capacity to grow stronger in response to stressors,
                  volatility, and challenges.
                </p>
                <button
                  onClick={() => setIsCompassion1ModalOpen(true)}
                  className="inline-flex items-center gap-x-2 text-sm font-medium text-white transition-colors hover:text-[#31b9fd]"
                >
                  Learn More
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
              </div>
            </GridListItem>
            <GridListItem
              title={<span style={{ color: '#31b9fd' }}>Collaboration</span>}
              invert
            >
              <div className="space-y-4">
                <p>
                  Collaboration embodies our commitment to harnessing the
                  collective power of diverse minds working together towards a
                  shared vision
                </p>
                <button
                  onClick={() => setIsCompassion2ModalOpen(true)}
                  className="inline-flex items-center gap-x-2 text-sm font-medium text-white transition-colors hover:text-[#31b9fd]"
                >
                  Learn More
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
              </div>
            </GridListItem>
          </GridList>
        </Container>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Our Mission"
      >
        <div className="space-y-8">
          <div className="flex justify-center">
            <Image
              src={getAssetPath('/our-mission.png')}
              alt="Our Mission"
              width={300}
              height={300}
              className="rounded-full border-4 border-neutral-200 object-cover shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-neutral-950">
              What We Want
            </h3>
            <p>
              Our mission is to empower SMEs and nonprofits with accessible AI
              solutions, democratizing technology to help organizations thrive
              in the digital era. We provide customized AI solutions that enable
              organizations to harness their data and streamline operations.
            </p>
            <p>
              Our company is founded on a bedrock of core values that guide our
              mission and shape our approach to business. Integrity is the heart
              of our ethos, ensuring that every action we take is done with
              honesty, ethical conduct, and unwavering moral principles. This
              foundational value fosters trust and transparency with our
              clients, employees, and partners, creating a positive ripple
              effect throughout our industry and community.
            </p>
            <p>
              Our commitment to digital stewardship complements our integrity:
              we navigate the evolving digital landscape ethically, balancing
              the use of open-source ecosystems and proprietary technologies to
              drive forward-thinking solutions while considering the profound
              impact our work has on society.
            </p>
            <p>
              Antifragility— a system&apos;s or organization&apos;s capacity to
              grow stronger in response to stressors, volatility, and
              challenges— transforms how we perceive and interact with the
              world&apos;s inherent disorder. We turn potential disruptions into
              catalysts for growth and innovation. This approach allows us to
              lead in our industry with confidence, responding to new
              information and conditions with a forward-thinking mindset that
              actively seeks and uses change for continuous improvement.
              Thriving in the face of the unpredictable is a fundamental part of
              our identity.
            </p>
            <p>
              Collaboration is the thread that weaves together our values,
              amplifying their impact. By fostering a culture of collaboration
              both internally and externally, we harness the collective power of
              diverse minds working towards a shared vision. This collaborative
              spirit extends beyond our organizational boundaries, engaging
              customers, communities, and partners in a co-creative process that
              ensures our solutions are grounded in real-world needs.
            </p>
            <p>
              Together, these values form the pillars of our company and propel
              us towards achieving our mission of delivering exceptional value,
              driving long-lasting growth, and making a meaningful difference in
              the world.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isIntegrityModalOpen}
        onClose={() => setIsIntegrityModalOpen(false)}
        title="Integrity"
      >
        <div className="space-y-6">
          <p>
            Integrity is a multifaceted value that encompasses honesty, ethical
            conduct, reliability, accountability, respect for others, courage,
            transparency, and professionalism. Integrity guides us to align our
            actions with our words, ensuring that we conduct ourselves with
            unwavering moral principles both in the spotlight and behind the
            scenes. Integrity is not just a principle for us: it is a practice
            that we live by every day.
          </p>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              How we practice integrity:
            </h3>
            <ul className="list-inside list-disc space-y-2 text-neutral-600">
              <li>
                <strong>Honesty and truthfulness:</strong> Ensuring all
                communications and actions are truthful and transparent.
              </li>
              <li>
                <strong>Ethical conduct:</strong> Making decisions that are not
                only legal but also ethically sound.
              </li>
              <li>
                <strong>Reliability and consistency:</strong> Following through
                on commitments and maintaining consistency in our actions.
              </li>
              <li>
                <strong>Accountability:</strong> Taking responsibility for our
                actions, admitting mistakes, and learning from them.
              </li>
              <li>
                <strong>Respect for others:</strong> Engaging with everyone
                respectfully and valuing diverse perspectives.
              </li>
              <li>
                <strong>Courage:</strong> Standing up for what is right, even
                when it is challenging or unpopular.
              </li>
              <li>
                <strong>Transparency:</strong> Being open about our processes,
                successes, and areas for improvement.
              </li>
              <li>
                <strong>Professionalism:</strong> Adhering to the highest
                standards of our profession and continuously striving for
                excellence.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              Why it matters:
            </h3>
            <p>
              Integrity is essential for building and maintaining trust with our
              clients, employees, and partners. It fosters a culture of
              openness, fairness, and respect, which are crucial for long-term
              success. By committing to integrity, we not only enhance our
              reputation but also create a positive impact on our community and
              industry. This commitment empowers us to make decisions with
              confidence and courage, knowing they are rooted in ethical
              considerations and respect for all stakeholders.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isTrustModalOpen}
        onClose={() => setIsTrustModalOpen(false)}
        title="Digital Stewardship"
      >
        <div className="space-y-6">
          <p>
            We practice digital stewardship by actively engaging with and
            supporting the digital ecosystem that sustains our work. This
            involves enriching digital communities through active participation,
            knowledge sharing, and advocacy for open-source contributions and
            ethical standards within our industry.
          </p>

          <p>
            Our commitment extends to investing in the sustainability of
            critical open-source and digital platforms, especially those lacking
            commercial support. We believe in the democratizing effect of
            open-source software and open technologies, which thrive on
            community contributions and provide broader access to technology.
          </p>

          <p>
            We employ AI solutions—both proprietary and open—in a manner that is
            ethical, transparent, and aligned with societal benefit. This
            includes ensuring responsible data use, prioritizing privacy, and
            striving to eliminate biases in our AI implementations.
          </p>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              How we practice digital stewardship:
            </h3>
            <ul className="list-inside list-disc space-y-2 text-neutral-600">
              <li>
                <strong>Community engagement:</strong> Enriching digital
                communities through active participation, knowledge sharing, and
                advocacy for open-source contributions and ethical standards
                within our industry.
              </li>
              <li>
                <strong>Financial support:</strong> Investing in the
                sustainability of critical open-source and digital platforms,
                especially those lacking commercial support.
              </li>
              <li>
                <strong>Responsible integration of AI:</strong> Employing AI
                solutions—both proprietary and open—in a manner that is ethical,
                transparent, and aligned with societal benefit.
              </li>
              <li>
                <strong>Ethical data practices:</strong> Ensuring responsible
                data use, prioritizing privacy, and striving to eliminate
                biases.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              Why it matters:
            </h3>
            <p>
              The digital infrastructure, much like its physical counterpart,
              requires active engagement for its sustenance and growth.
              Open-source software and open technologies/platforms (which thrive
              on community contributions) have a profound democratizing effect
              on technology access. At the same time, blending this open
              innovation with proprietary tools presents opportunity. By
              adopting digital stewardship, we commit to thoughtful engagement
              with and improvement of this ecosystem, mindful of the ethical
              complexities inherent in AI development and deployment. This
              stewardship ensures that our contributions and choices both
              bolster the health of the digital commons and align with our
              commitment to ethical and sustainable business practices.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isCompassion1ModalOpen}
        onClose={() => setIsCompassion1ModalOpen(false)}
        title="Antifragility"
      >
        <div className="space-y-6">
          <p>
            Antifragility is a system&apos;s or organization&apos;s capacity to
            grow stronger in response to stressors, volatility, and challenges.
            This core value stands at the heart of our business ethos,
            signifying our commitment to not only navigate but excel in the face
            of uncertainty and change.
          </p>
          <p>
            We proactively embrace the unpredictable, viewing every challenge
            and bit of randomness as a springboard for growth, innovation, and
            systemic enhancement. It shapes our approach to strategy, culture,
            and development, ensuring we benefit from disruptions.
          </p>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              How we practice antifragility:
            </h3>
            <ul className="list-inside list-disc space-y-2 text-neutral-600">
              <li>
                <strong>Embracing volatility:</strong> harnessing
                unpredictability as a catalyst for strategic and creative
                breakthroughs.
              </li>
              <li>
                <strong>Proactive innovation:</strong> Seeing stressors as
                essential drivers for our innovation process, prompting us to
                venture into new territories, solutions, and markets.
              </li>
              <li>
                <strong>Systemic growth:</strong> Designing our organization to
                ensure that every aspect of our business is primed to not just
                cope with but thrive under conditions of change, fostering an
                ecosystem that grows more capable and robust through trials.
              </li>
              <li>
                <strong>Forward-thinking mindset:</strong> Guiding us to make
                decisions that ensure enduring success and relevance in a
                fluctuating world.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              Why it matters:
            </h3>
            <p>
              The swift advancement of technology tends to exacerbate the divide
              between large corporations and smaller organizations, with the
              latter finding it challenging to keep pace because of limited
              resources. However, AI solutions that embody the principle of
              antifragility are designed to flourish in innovative and
              fast-paced environments. By adapting to the varied and evolving
              requirements of SMEs and nonprofits, they improve during periods
              of rapid technological advancement, becoming both more
              cost-effective and accessible.
            </p>
            <p>
              Antifragility as a core value means that we are committed to not
              only surviving but thriving in the face of industry disruptions.
              For SMEs and nonprofits, partnering with a provider that embraces
              this value creates a strategic advantage. They gain access to AI
              solutions that are at the forefront of navigating and capitalizing
              on technological disruptions, enabling these smaller entities to
              punch above their weight in a competitive digital economy.
            </p>
            <p>
              The principle of antifragility encourages continuous learning and
              evolution based on feedback and environmental changes. This
              approach fosters a culture of collaboration and innovation, where
              AI technologies evolve in response to the real-world experiences
              and the different challenges faced by a diverse user base of SMEs
              and nonprofits. By prioritizing solutions that grow more robust
              and effective through user interaction, antifragility ensures that
              AI democratization is not a static goal but a dynamic process that
              continually seeks to lower barriers to access and use.
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isCompassion2ModalOpen}
        onClose={() => setIsCompassion2ModalOpen(false)}
        title="Collaboration"
      >
        <div className="space-y-6">
          <p>
            Collaboration embodies our commitment to harnessing the collective
            power of diverse minds working together towards a shared vision. It
            transcends the boundaries of internal teams and extends into our
            partnerships, customer relationships, and innovation processes.
          </p>
          <p>
            By valuing collaboration, we champion a culture where
            cross-functional teamwork, open communication, and mutual respect
            are foundational. This value emphasizes the act of working together
            in a way that leverages our combined strengths, insights, and
            creativity to achieve outcomes that are greater than the sum of our
            parts.
          </p>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              How we practice collaboration:
            </h3>
            <ul className="list-inside list-disc space-y-2 text-neutral-600">
              <li>
                <strong>Cross-functional integration:</strong> Encouraging teams
                from different areas of the business to work together, breaking
                down silos and fostering a holistic understanding of our goals
                and challenges.
              </li>
              <li>
                <strong>Strategic partnerships:</strong> Actively seeking
                partnerships and alliances that complement our strengths, fill
                gaps in our expertise, and expand our reach, creating mutually
                beneficial relationships.
              </li>
              <li>
                <strong>Customer and community engagement:</strong> Involving
                customers and community members in the development and
                refinement of our products and services, ensuring our solutions
                are both innovative and relevant.
              </li>
              <li>
                <strong>Co-creation and open innovation:</strong> Embracing the
                principles of co-creation and open innovation to involve a wider
                community in our problem-solving processes, enriching our
                innovation pipeline with a diversity of ideas and perspectives.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-950">
              Why it matters:
            </h3>
            <p>
              Through collaboration, we not only accelerate our own growth but
              also contribute to the advancement of our industry and the
              betterment of society. Collaboration amplifies our impact,
              enabling us to achieve what we could not accomplish alone.
              Moreover, engaging customers and communities in our collaborative
              processes ensures that our solutions are grounded in real-world
              needs and have a positive impact.
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}

const resumes = [
  {
    name: teamResumes.johnLee.basics?.name ?? 'John Lee',
    data: teamResumes.johnLee,
  },
  { name: 'Sumit Jha', data: teamResumes.sumitJha },
  { name: 'Heet Shah', data: teamResumes.heetShah },
  { name: 'Chevula Jeevan', data: teamResumes.chevulaJeevan },
  { name: 'Aditya Patane', data: teamResumes.adityaPatane },
  // { name: 'Nagendra Dharmireddi', data: teamResumes.nagendraDharmireddi },
  { name: 'Pradyot Ranjan', data: teamResumes.pradyotRanjan },
]

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'John Lee',
        role: 'Founder',
        image: {
          src: getAssetPath('/submodules/the-team/public/photos/John-Lee.webp'),
          width: 400,
          height: 400,
        },
        github: 'https://github.com/leej3',
        description: [
          'PhD-trained neuroscientist and open-source contributor with deep experience in scientific data analysis and software engineering.',
          'Published research in neuroscience and brain segmentation; committed to democratizing ethical and accessible AI.',
        ],
      },
      {
        name: 'Sumit Jha',
        role: 'Technical Lead',
        image: {
          src: getAssetPath(
            '/submodules/the-team/public/photos/Sumit_Jha.webp',
          ),
          width: 400,
          height: 400,
        },
        github: 'https://github.com/isumitjha',
        linkedin: 'https://www.linkedin.com/in/7sumitjha/',
        description: [
          'Full-stack software engineer focused on AI-powered applications and real-time graphics with Python backends (FastAPI, CUDA optimization) and React/WebGL frontends.',
          'Owns end-to-end delivery, deep learning integration, medical imaging systems, interactive visualization, and leads implementation from ML models to deployment with Docker/Kubernetes.',
        ],
      },
    ],
  },
]

function Team() {
  const [isResumesOpen, setIsResumesOpen] = useState(false)
  const [selectedResume, setSelectedResume] = useState<any | null>(null)
  const getAvatarSrc = (entry: { name: string; data: any }) => {
    const photoPath = teamPhotos[entry.name as keyof typeof teamPhotos]
    if (photoPath) {
      return getAssetPath(photoPath)
    }
    return '' // Fallback to initials for missing photos
  }
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="sticky top-20 z-20 mb-8 flex justify-end">
        <Button
          onClick={() => setIsResumesOpen(true)}
          className="hover:!bg-[#31b9fd] hover:!text-white"
        >
          View Team Resumes
        </Button>
      </div>
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="pt-12 sm:pt-16">
              <FadeIn>
                <h2 className="mb-12 text-center font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              {group.people.map((person, idx) => (
                <div
                  key={person.name}
                  className={`flex flex-col lg:flex-row lg:items-center lg:gap-x-6 ${idx > 0 ? 'mt-16' : ''}`}
                >
                  <div className="mb-8 lg:mb-0 lg:flex-none">
                    <FadeIn>
                      <div className="group relative aspect-[3/4] h-96 w-[18rem] overflow-hidden rounded-3xl bg-neutral-100">
                        <Image
                          alt={`${person.name} - ${person.role}`}
                          src={person.image.src}
                          width={person.image.width}
                          height={person.image.height}
                          className="h-full w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          style={{ objectPosition: 'center 20%' }}
                          unoptimized
                        />
                      </div>
                    </FadeIn>
                  </div>
                  <div className="lg:ml-0 lg:flex-1">
                    <FadeIn>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-neutral-950">
                            {person.name}
                          </h3>
                          <p className="mt-2 text-lg text-neutral-600">
                            {person.role}
                          </p>
                        </div>
                        {Array.isArray(person.description) &&
                          person.description.length > 0 && (
                            <div className="space-y-4 text-base text-neutral-600">
                              {person.description.map(
                                (p: string, i: number) => (
                                  <p key={i}>{p}</p>
                                ),
                              )}
                            </div>
                          )}
                        <div className="mt-6 flex flex-wrap gap-3">
                          {person.github && (
                            <Button
                              href={person.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </Button>
                          )}
                          {person.linkedin && (
                            <Button
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn
                            </Button>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              ))}
            </div>
          </FadeInStagger>
        ))}
        {/* Resumes list modal */}
        <Modal
          isOpen={isResumesOpen}
          onClose={() => {
            setIsResumesOpen(false)
            setSelectedResume(null)
          }}
          title={
            selectedResume ? (
              `${selectedResume.name}'s Resume`
            ) : (
              <div className="flex items-center gap-3 py-1">
                <Image
                  src={getAssetPath('/Python-AI-Solutions-Logo.webp')}
                  alt="Python AI Solutions"
                  width={140}
                  height={32}
                  unoptimized
                />
              </div>
            )
          }
        >
          {selectedResume ? (
            <div
              className="space-y-4"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                  const list = resumes
                  const idx = list.findIndex(
                    (x) => x.name === selectedResume.name,
                  )
                  if (idx !== -1) {
                    const next =
                      e.key === 'ArrowRight'
                        ? (idx + 1) % list.length
                        : (idx - 1 + list.length) % list.length
                    setSelectedResume(list[next])
                  }
                }
              }}
            >
              <NoStringsResume
                resume={selectedResume.data as any}
                photoSrc={(() => {
                  const avatar = getAvatarSrc(selectedResume)
                  return avatar || undefined
                })()}
              />
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search by name or title..."
                  className="w-full rounded-xl border border-neutral-200 px-4 py-2 text-sm focus:border-[#31b9fd] focus:outline-none"
                  onChange={(e) => {
                    const v = e.currentTarget.value.toLowerCase()
                    const grid = document.getElementById('resumes-grid')
                    if (!grid) return
                    for (const child of Array.from(grid.children)) {
                      const el = child as HTMLElement
                      const name =
                        el.getAttribute('data-name')?.toLowerCase() || ''
                      const label =
                        el.getAttribute('data-label')?.toLowerCase() || ''
                      el.style.display =
                        name.includes(v) || label.includes(v) ? '' : 'none'
                    }
                  }}
                />
              </div>
              <div
                id="resumes-grid"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {resumes.map((r, i) => {
                  const avatar = getAvatarSrc(r)
                  return (
                    <div
                      key={r.name}
                      data-name={r.name}
                      data-label={(r.data as any)?.basics?.label || ''}
                      className="flex transform flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition will-change-transform hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#31b9fd] hover:shadow-lg"
                      style={{
                        transitionDuration: '200ms',
                        transitionTimingFunction: 'cubic-bezier(0.2,0.9,0.2,1)',
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-100 ring-1 ring-transparent hover:ring-[#31b9fd]/60">
                          {avatar ? (
                            <Image
                              src={avatar}
                              alt={`${r.name} avatar`}
                              width={48}
                              height={48}
                              className="h-12 w-12 object-cover"
                              unoptimized
                            />
                          ) : (
                            <span className="text-sm font-semibold text-neutral-600">
                              {r.name
                                .split(' ')
                                .map((n: string) => n[0])
                                .slice(0, 2)
                                .join('')}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-950">
                            {r.name}
                          </p>
                          <p className="text-xs text-neutral-600">
                            {(r.data as any)?.basics?.label || 'Team Member'}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm text-neutral-700">
                        {(r.data as any)?.basics?.summary ||
                          'Experienced contributor across AI/ML and engineering.'}
                      </p>
                      <div className="mt-4">
                        <Button
                          onClick={() => setSelectedResume(r)}
                          className="w-full justify-center hover:!bg-[#31b9fd] hover:!text-white"
                        >
                          View Resume
                        </Button>
                      </div>
                    </div>
                  )
                })}
                {/* Optional full-width tile to balance layout */}
                {resumes.length % 3 !== 1 && (
                  <div className="col-span-1 hidden lg:block" />
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro title="About Us">
        <p>
          Our team brings diverse expertise in scientific research, data
          science, programming, and software engineering, serving organizations
          across various sectors and geographies.
        </p>

        <p>
          We have extensive experience working with research institutions,
          government agencies, energy companies, financial institutions,
          non-profits, and startups worldwide.
        </p>

        <p>
          We are active contributors to the open source community and excel at
          delivering projects with remote and global teams.
        </p>
      </PageIntro>

      <Culture />

      <Team />
    </RootLayout>
  )
}
