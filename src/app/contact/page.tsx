'use client'

import { useId, useState } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formDataObj = new FormData(e.currentTarget)
      
      // Get form values
      const name = formDataObj.get('name') as string
      const email = formDataObj.get('email') as string
      const company = formDataObj.get('company') as string
      const phone = formDataObj.get('phone') as string
      const message = formDataObj.get('message') as string
      const budgetValue = formDataObj.get('budget') as string

      // Validate required fields
      if (!name || !email || !message) {
        setSubmitMessage('Please fill in all required fields.')
        return
      }

      // Convert budget value to proper range
      const getBudgetRange = (value: string) => {
        switch (value) {
          case '10': return '$10K – $50K'
          case '50': return '$50K – $100K'
          case '100': return '$100K – $150K'
          case '150': return 'More than $150K'
          default: return 'Not selected'
        }
      }

      // Open email client in browser
      const subject = `New Contact Form Submission from ${name}`
      const body = `Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Budget: ${getBudgetRange(budgetValue)}

Message:
${message}`

      // Try Gmail compose URL first (most common)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=support@pythonaisolutions.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open Gmail compose in new tab
      window.open(gmailUrl, '_blank')
      
      // Reset form after successful submission
      e.currentTarget.reset()
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage('There was an error. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" required />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Approximate budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$10K – $50K" name="budget" value="10" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        
        {submitMessage && (
          <div className={`mt-6 p-4 rounded-lg ${
            submitMessage.includes('error') 
              ? 'bg-red-50 border border-red-200 text-red-800' 
              : 'bg-green-50 border border-green-200 text-green-800'
          }`}>
            <p>{submitMessage}</p>
          </div>
        )}
        
        <div className="flex justify-center mt-10">
          <Button 
            type="submit" 
            className="transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Opening Email...' : "Let's work together"}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Based in
      </h2>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Support', 'support@pythonaisolutions.com'],
            ['Sales', 'sales@pythonaisolutions.com'],
            ['Security', 'security@pythonaisolutions.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-base/6 text-neutral-500 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Security & Vulnerability Disclosure
        </h2>
        <div className="mt-6 text-sm text-neutral-600">
          <p className="mb-4">
            We take security seriously. If you&apos;ve found a security vulnerability, 
            please report it responsibly to <Link href="mailto:security@pythonaisolutions.com" className="font-semibold text-neutral-950 hover:text-[#31b9fd]">security@pythonaisolutions.com</Link>.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-neutral-950 mb-2">Response Commitment</h3>
              <ul className="space-y-1 text-sm">
                <li>• Acknowledgment within 72 hours</li>
                <li>• Regular progress updates</li>
                <li>• No unsolicited payments</li>
                <li>• Professional collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-950 mb-2">Scope & Guidelines</h3>
              <ul className="space-y-1 text-sm">
                <li>• Website and infrastructure security</li>
                <li>• Data protection issues</li>
                <li>• Authentication vulnerabilities</li>
                <li>• Act in good faith, avoid disruption</li>
              </ul>
            </div>
          </div>
        </div>
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact us" title="Let&apos;s work together">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}