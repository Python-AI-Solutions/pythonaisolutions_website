import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { getAssetPath } from '@/lib/basePath'

const services = [
  {
    title: 'Data Analytics and Insight Generation',
    description:
      'Our data analytics services help you make informed decisions, uncover new opportunities, and optimize your business processes for maximum efficiency.',
  },
  {
    title: 'Automation Services',
    description:
      'From automating repetitive tasks to optimizing workflows, our services free up your resources, allowing you to focus on strategic business activities.',
  },
  {
    title: 'Predictive Analytics',
    description:
      'Stay ahead of the curve with our predictive analytics services. By forecasting trends, customer behaviors, and potential risks, we help you adopt a proactive approach to your business strategy.',
  },
  {
    title: 'Collaborative AI Projects',
    description:
      'Join forces with innovators and stakeholders across the AI ecosystem. Our collaborative projects fosters partnerships that drive innovation, offering shared growth and learning opportunities.',
  },
  {
    title: 'Custom AI Solutions',
    description:
      "Get AI solutions that are tailor-made for your business needs. Whether it's enhancing operational efficiency, improving customer experiences, or innovating your product offerings, our custom AI development is here to transform your vision into reality.",
  },
  {
    title: 'AI Training and Support',
    description:
      'Empower your team with the knowledge to harness AI effectively. Our comprehensive training programs coupled with ongoing support ensure that your staff are well equipped to use AI tools and solutions.',
  },
  {
    title: 'Natural Language Processing (NLP)',
    description:
      'Enhance your communication with customers and streamline internal processes with our NLP services. From sentiment analysis to chatbots and language translation, we help you connect and engage more effectively.',
  },
  {
    title: 'Sustainability Solutions',
    description:
      'Drive your commitment to sustainability with AI. Our solutions help you minimize environmental impact.',
  },
  {
    title: 'AI Consultation and Strategic Planning',
    description:
      'Unlock the potential of AI for your business with our expert consultation and strategic planning services. We guide you through understanding how AI can solve your unique challenges, helping you craft a roadmap for seamless AI integration.',
  },
  {
    title: 'Ethical AI Advisory',
    description:
      'Navigate the complexities of AI with confidence. Our ethical AI advisory services ensure your AI solutions are developed and deployed responsibly, prioritizing data privacy, security, and bias mitigation.',
  },
  {
    title: 'Images processing',
    description:
      'From object detection to image classification and enhancement, unlock new dimensions of data analysis and insights.',
  },
]

function ServicesList() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Services
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {services.map((service, index) => (
          <FadeIn key={service.title}>
            <article>
              <Border className="grid grid-cols-1 gap-x-8 gap-y-8 pt-16 lg:grid-cols-12">
                {index === 0 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/data_analytics.webp')}
                        alt="Data Analytics and Insight Generation"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        priority
                      />
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/automation.webp')}
                        alt="Automation Services"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/predictive_analytics.webp')}
                        alt="Predictive Analytics"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/collaborative.webp')}
                        alt="Collaborative AI Projects"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 4 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/automation.webp')}
                        alt="Custom AI Solutions"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 5 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/AI_training.webp')}
                        alt="AI Training and Support"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 6 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/NLP.webp')}
                        alt="Natural Language Processing (NLP)"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 7 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/sustainability.webp')}
                        alt="Sustainability Solutions"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 8 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/AIconsultation.webp')}
                        alt="AI Consultation and Strategic Planning"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 9 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/EthicalAI.webp')}
                        alt="Ethical AI Advisory"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {index === 10 && (
                  <div className="flex items-center justify-center lg:col-span-4">
                    <div className="via-[#31b9fd]/8 transform rounded-xl border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/15 to-transparent p-4 shadow-[0_8px_32px_rgba(49,185,253,0.25),0_4px_16px_rgba(49,185,253,0.15)] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(49,185,253,0.35),0_6px_20px_rgba(49,185,253,0.25)]">
                      <Image
                        src={getAssetPath('/image_processing.webp')}
                        alt="Images processing"
                        width={400}
                        height={300}
                        className="rounded-lg object-cover shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                <div className="lg:col-span-8 lg:pt-8">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {service.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>{service.description}</p>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive AI solutions including data analytics, automation, predictive analytics, custom AI development, and ethical AI advisory services.',
}

export default function Services() {
  return (
    <RootLayout>
      <ServicesList />

      <ContactSection />
    </RootLayout>
  )
}
