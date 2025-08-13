'use client'

import { useState, useId } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { Border } from '@/components/Border'

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
        className="focus:outline-hidden peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 pointer-events-none absolute left-6 top-6 origin-left text-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextAreaInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        className="focus:outline-hidden peer block w-full resize-none border border-neutral-300 bg-transparent px-6 pb-4 pt-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 pointer-events-none absolute left-6 top-6 origin-left text-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TestimonialTextAreaInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        className="focus:outline-hidden peer block w-full resize-none border border-neutral-300 bg-transparent px-6 pb-4 pt-24 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 pointer-events-none absolute left-6 top-6 origin-left text-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function SelectInput({
  label,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'select'> & {
  label: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        {...props}
        className="focus:outline-hidden peer block w-full appearance-none border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="peer-not-[value='']:-translate-y-3 peer-not-[value='']:scale-75 peer-not-[value='']:font-semibold peer-not-[value='']:text-neutral-950 pointer-events-none absolute left-6 top-6 origin-left text-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
      {/* Custom dropdown arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
        <svg
          className="h-5 w-5 text-neutral-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

function TestimonialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    shareMore: false,
    completeStory: false,
  })
  const [achievements, setAchievements] = useState([''])

  const toggleSection = (section: 'shareMore' | 'completeStory') => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const addAchievement = () => {
    setAchievements((prev) => [...prev, ''])
  }

  const updateAchievement = (index: number, value: string) => {
    setAchievements((prev) =>
      prev.map((item, i) => (i === index ? value : item)),
    )
  }

  const removeAchievement = (index: number) => {
    setAchievements((prev) => prev.filter((_, i) => i !== index))
  }

  const handleCopyToClipboard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCopyStatus('')

    try {
      const formDataObj = new FormData(e.currentTarget)

      // Get form values (same as in handleSubmit)
      const name = formDataObj.get('name') as string
      const quickQuote = formDataObj.get('quickQuote') as string
      const role = formDataObj.get('role') as string
      const company = formDataObj.get('company') as string
      const email = formDataObj.get('email') as string
      const testimonial = formDataObj.get('testimonial') as string
      const projectType = formDataObj.get('projectType') as string
      const timeline = formDataObj.get('timeline') as string
      const results = formDataObj.get('results') as string
      const challenges = formDataObj.get('challenges') as string
      const impactValue1 = formDataObj.get('impactValue1') as string
      const impactLabel1 = formDataObj.get('impactLabel1') as string
      const impactValue2 = formDataObj.get('impactValue2') as string
      const impactLabel2 = formDataObj.get('impactLabel2') as string
      const impactValue3 = formDataObj.get('impactValue3') as string
      const impactLabel3 = formDataObj.get('impactLabel3') as string
      const impactValue4 = formDataObj.get('impactValue4') as string
      const impactLabel4 = formDataObj.get('impactLabel4') as string

      // Validate required fields
      if (!name || !quickQuote) {
        setCopyStatus('Please provide your name and a quick quote.')
        return
      }

      // Filter out empty achievements
      const filteredAchievements = achievements.filter(
        (achievement) => achievement.trim() !== '',
      )

      // Build impact metrics
      const impactMetrics = []
      if (impactValue1 && impactLabel1)
        impactMetrics.push(`${impactValue1}: ${impactLabel1}`)
      if (impactValue2 && impactLabel2)
        impactMetrics.push(`${impactValue2}: ${impactLabel2}`)
      if (impactValue3 && impactLabel3)
        impactMetrics.push(`${impactValue3}: ${impactLabel3}`)
      if (impactValue4 && impactLabel4)
        impactMetrics.push(`${impactValue4}: ${impactLabel4}`)

      // Build email content
      const subject = `New Testimonial Submission from ${name}`
      const body = `Name: ${name}
Email: ${email || 'Not provided'}
Quick Quote: ${quickQuote}

${
  role || company
    ? `Contact Details:
Role: ${role || 'Not provided'}
Company: ${company || 'Not provided'}
`
    : ''
}
${
  testimonial
    ? `Full Testimonial:
${testimonial}
`
    : ''
}
${
  projectType || timeline
    ? `Project Details:
Project Type: ${projectType || 'Not provided'}
Timeline: ${timeline || 'Not provided'}
`
    : ''
}
${
  challenges
    ? `Challenges Faced:
${challenges}
`
    : ''
}
${
  results
    ? `Results & Impact:
${results}
`
    : ''
}
${
  filteredAchievements.length > 0
    ? `Key Achievements:
${filteredAchievements.map((achievement) => `- ${achievement}`).join('\n')}
`
    : ''
}
${
  impactMetrics.length > 0
    ? `Impact Metrics:
${impactMetrics.join('\n')}
`
    : ''
}`

      // Copy to clipboard
      const emailContent = `Subject: ${subject}

${body}`

      await navigator.clipboard.writeText(emailContent)
      setCopyStatus('Email content copied to clipboard!')

      // Clear the success message after 3 seconds
      setTimeout(() => setCopyStatus(''), 3000)
    } catch (error) {
      console.error('Copy to clipboard error:', error)
      setCopyStatus('Failed to copy to clipboard. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formDataObj = new FormData(e.currentTarget)

      // Get form values
      const name = formDataObj.get('name') as string
      const quickQuote = formDataObj.get('quickQuote') as string
      const role = formDataObj.get('role') as string
      const company = formDataObj.get('company') as string
      const email = formDataObj.get('email') as string
      const testimonial = formDataObj.get('testimonial') as string
      const projectType = formDataObj.get('projectType') as string
      const timeline = formDataObj.get('timeline') as string
      const results = formDataObj.get('results') as string
      const challenges = formDataObj.get('challenges') as string
      const impactValue1 = formDataObj.get('impactValue1') as string
      const impactLabel1 = formDataObj.get('impactLabel1') as string
      const impactValue2 = formDataObj.get('impactValue2') as string
      const impactLabel2 = formDataObj.get('impactLabel2') as string
      const impactValue3 = formDataObj.get('impactValue3') as string
      const impactLabel3 = formDataObj.get('impactLabel3') as string
      const impactValue4 = formDataObj.get('impactValue4') as string
      const impactLabel4 = formDataObj.get('impactLabel4') as string

      // Validate required fields (only name and quick quote are required)
      if (!name || !quickQuote) {
        setSubmitMessage('Please provide your name and a quick quote.')
        return
      }

      // Filter out empty achievements
      const filteredAchievements = achievements.filter(
        (achievement) => achievement.trim() !== '',
      )

      // Build impact metrics
      const impactMetrics = []
      if (impactValue1 && impactLabel1)
        impactMetrics.push(`${impactValue1}: ${impactLabel1}`)
      if (impactValue2 && impactLabel2)
        impactMetrics.push(`${impactValue2}: ${impactLabel2}`)
      if (impactValue3 && impactLabel3)
        impactMetrics.push(`${impactValue3}: ${impactLabel3}`)
      if (impactValue4 && impactLabel4)
        impactMetrics.push(`${impactValue4}: ${impactLabel4}`)

      // Open email client in browser
      const subject = `New Testimonial Submission from ${name}`
      const body = `Name: ${name}
Email: ${email || 'Not provided'}
Quick Quote: ${quickQuote}

${
  role || company
    ? `Contact Details:
Role: ${role || 'Not provided'}
Company: ${company || 'Not provided'}
`
    : ''
}
${
  testimonial
    ? `Full Testimonial:
${testimonial}
`
    : ''
}
${
  projectType || timeline
    ? `Project Details:
Project Type: ${projectType || 'Not provided'}
Timeline: ${timeline || 'Not provided'}
`
    : ''
}
${
  challenges
    ? `Challenges Faced:
${challenges}
`
    : ''
}
${
  results
    ? `Results & Impact:
${results}
`
    : ''
}
${
  filteredAchievements.length > 0
    ? `Key Achievements:
${filteredAchievements.map((achievement) => `- ${achievement}`).join('\n')}
`
    : ''
}
${
  impactMetrics.length > 0
    ? `Impact Metrics:
${impactMetrics.join('\n')}
`
    : ''
}`

      // Try Gmail compose URL first (most common)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=testimonials@pythonaisolutions.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open Gmail compose in new tab
      window.open(gmailUrl, '_blank')

      // Reset form after successful submission
      e.currentTarget.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage(
        'There was an error. Please try again or contact us directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-sm font-semibold text-neutral-950 sm:text-base">
          Share your experience
        </h2>

        <div className="isolate mt-4 -space-y-px rounded-2xl bg-white/50 sm:mt-6">
          {/* Essential Section */}
          <div className="border border-neutral-300 bg-blue-50/30 px-4 py-6 first:rounded-t-2xl last:rounded-b-2xl sm:px-6 sm:py-8">
            <h3 className="mb-4 text-sm font-semibold text-neutral-950 sm:text-base">
              Essential Information
            </h3>
            <div className="-space-y-px space-y-0">
              <TextInput
                label="Full Name"
                name="name"
                autoComplete="name"
                required
              />
              <TextAreaInput
                label="Quick Quote"
                name="quickQuote"
                rows={2}
                required
              />
            </div>
            <p className="mt-3 text-xs text-neutral-600">
              Your key message about working with Python AI Solutions
            </p>
          </div>

          {/* Share More Section */}
          <div className="border border-neutral-300 px-4 py-6 first:rounded-t-2xl last:rounded-b-2xl sm:px-6 sm:py-8">
            <button
              type="button"
              onClick={() => toggleSection('shareMore')}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-sm font-semibold text-neutral-950 sm:text-base">
                Share More (Optional)
              </h3>
              <svg
                className={`h-5 w-5 transition-transform ${expandedSections.shareMore ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedSections.shareMore && (
              <div className="mt-4 -space-y-px space-y-0">
                <TextAreaInput
                  label="Full Testimonial"
                  name="testimonial"
                  rows={4}
                />
                <p className="mt-3 text-xs text-neutral-600">
                  Tell the complete story of your experience with us
                </p>
              </div>
            )}
          </div>

          {/* Complete Your Story Section */}
          <div className="border border-neutral-300 px-4 py-6 first:rounded-t-2xl last:rounded-b-2xl sm:px-6 sm:py-8">
            <button
              type="button"
              onClick={() => toggleSection('completeStory')}
              className="flex w-full items-center justify-between text-left"
            >
              <h3 className="text-sm font-semibold text-neutral-950 sm:text-base">
                Complete Your Story (Optional)
              </h3>
              <svg
                className={`h-5 w-5 transition-transform ${expandedSections.completeStory ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expandedSections.completeStory && (
              <div className="mt-4 space-y-6">
                {/* Contact Details */}
                <div className="-space-y-px space-y-0">
                  <TextInput
                    label="Email Address (for follow-up)"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                  <TextInput label="Job Title" name="role" />
                  <TextInput
                    label="Company/Organization"
                    name="company"
                    autoComplete="organization"
                  />
                  <p className="mt-2 text-xs text-neutral-600">
                    We understand these cannot always be shared.
                  </p>
                </div>

                {/* Project Details */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-neutral-700">
                    Project Details
                  </h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectInput label="Project Type" name="projectType">
                      <option value="">Select project type</option>
                      <option value="AI Development">AI Development</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Automation">Automation</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </SelectInput>

                    <SelectInput label="Project Timeline" name="timeline">
                      <option value="">Select timeline</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="1+ years">1+ years</option>
                    </SelectInput>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="-space-y-px space-y-0">
                  <TextAreaInput
                    label="Challenges You Faced"
                    name="challenges"
                    rows={3}
                  />
                  <TextAreaInput
                    label="Results & Impact"
                    name="results"
                    rows={3}
                  />
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-neutral-700">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={achievement}
                          onChange={(e) =>
                            updateAchievement(index, e.target.value)
                          }
                          placeholder={`Achievement ${index + 1}`}
                          className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                        />
                        {achievements.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAchievement(index)}
                            className="px-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addAchievement}
                      className="text-sm font-medium text-[#31b9fd] hover:text-[#3db7f1]"
                    >
                      + Add another achievement
                    </button>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div>
                  <h4 className="mb-3 text-sm font-medium text-neutral-700">
                    Impact Metrics
                  </h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="impactValue1"
                        placeholder="e.g., 40%"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="impactLabel1"
                        placeholder="e.g., Increase in efficiency"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="impactValue2"
                        placeholder="e.g., $2M"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="impactLabel2"
                        placeholder="e.g., Cost savings achieved"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="impactValue3"
                        placeholder="e.g., 3x"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="impactLabel3"
                        placeholder="e.g., Faster processing"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="impactValue4"
                        placeholder="e.g., 99.9%"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                      <input
                        type="text"
                        name="impactLabel4"
                        placeholder="e.g., Uptime achieved"
                        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-950 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Static Preview */}
                  <div className="mt-4 rounded-lg border border-[#31b9fd]/20 bg-gradient-to-br from-[#31b9fd]/10 to-transparent p-3">
                    <p className="mb-2 text-xs font-medium text-neutral-700">
                      Preview: How metrics will appear
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded border bg-white p-2">
                        <div className="text-lg font-bold text-[#31b9fd]">
                          40%
                        </div>
                        <div className="text-xs text-neutral-600">
                          Increase in efficiency
                        </div>
                      </div>
                      <div className="rounded border bg-white p-2">
                        <div className="text-lg font-bold text-[#31b9fd]">
                          $2M
                        </div>
                        <div className="text-xs text-neutral-600">
                          Cost savings achieved
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {submitMessage && (
          <div
            className={`mt-6 rounded-lg p-4 ${
              submitMessage.includes('error')
                ? 'border border-red-200 bg-red-50 text-red-800'
                : 'border border-green-200 bg-green-50 text-green-800'
            }`}
          >
            <p>{submitMessage}</p>
          </div>
        )}

        {copyStatus && (
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800">
            <p>{copyStatus}</p>
          </div>
        )}

        <div className="mt-10 space-y-6">
          <div className="flex justify-center">
            <Button
              type="submit"
              className="transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Opening Email...' : 'Open in Email Client'}
            </Button>
          </div>

          <div className="space-y-4 text-center">
            <div>
              <p className="mb-2 text-sm text-neutral-600">
                Or send your testimonial manually to:
              </p>
              <p className="text-sm font-medium text-[#31b9fd]">
                testimonials@pythonaisolutions.com
              </p>
            </div>

            <Button
              type="submit"
              formAction=""
              onClick={(e) => {
                e.preventDefault()
                const form = e.currentTarget.closest('form')
                if (form) {
                  const formEvent = new Event('submit', {
                    cancelable: true,
                  }) as any
                  formEvent.currentTarget = form
                  handleCopyToClipboard(formEvent)
                }
              }}
              className="bg-neutral-200 text-neutral-900 transition-colors duration-300 hover:!bg-neutral-300 hover:!text-neutral-950"
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>
      </form>
    </FadeIn>
  )
}

function TestimonialGuidance() {
  return (
    <FadeIn>
      <h2 className="font-display text-sm font-semibold text-neutral-950 sm:text-base">
        How to Share Your Experience
      </h2>

      <div className="mt-6 space-y-6 sm:mt-10 sm:space-y-8">
        <div>
          <h3 className="mb-1 text-sm font-semibold text-[#31b9fd] sm:mb-2 sm:text-base">
            Start with Your Key Message
          </h3>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Your quick quote should capture the main benefit or outcome you
            experienced. Think of it as the headline of your story.
          </p>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold text-[#31b9fd] sm:mb-2 sm:text-base">
            Share Your Full Experience
          </h3>
          <p className="text-xs text-neutral-600 sm:text-sm">
            The full testimonial tells the complete story - your challenges, our
            solution, and the results. This helps others understand the full
            journey.
          </p>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold text-[#31b9fd] sm:mb-2 sm:text-base">
            Show the Impact
          </h3>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Specific numbers and metrics make testimonials more credible and
            compelling. Even rough estimates help others understand the value.
          </p>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-semibold text-[#31b9fd] sm:mb-2 sm:text-base">
            Be Authentic
          </h3>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Write in your own voice and share what really mattered to you.
            Authentic experiences resonate more than polished marketing speak.
          </p>
        </div>

        <Border className="pt-6 sm:pt-8">
          <div className="rounded-xl border border-[#31b9fd]/20 bg-[#31b9fd]/10 p-4 sm:p-6">
            <h4 className="mb-2 text-sm font-semibold text-[#31b9fd] sm:text-base">
              The Process
            </h4>
            <div className="space-y-2 text-xs text-neutral-600 sm:text-sm">
              <p>
                <strong>Essential:</strong> Start with just your name and key
                message - better than nothing!
              </p>
              <p>
                <strong>Share More:</strong> Add your full story for a richer
                testimonial.
              </p>
              <p>
                <strong>Complete Story:</strong> Include metrics, achievements,
                and details for maximum impact.
              </p>
            </div>
          </div>
        </Border>
      </div>
    </FadeIn>
  )
}

export default function TestimonialPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Share Your Experience" title="Provide a Testimonial">
        <p>
          Your feedback helps us improve and inspires others to work with Python
          AI Solutions. We value every testimonial and use your insights to
          enhance our services.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-24 lg:grid-cols-2">
          <TestimonialForm />
          <TestimonialGuidance />
        </div>
      </Container>
    </RootLayout>
  )
}
