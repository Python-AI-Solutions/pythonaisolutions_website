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
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
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
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-20 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden resize-none"
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
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-24 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden resize-none"
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

function SelectInput({
  label,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'select'> & { label: string; children: React.ReactNode }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        {...props}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TestimonialForm() {
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
      const role = formDataObj.get('role') as string
      const company = formDataObj.get('company') as string
      const email = formDataObj.get('email') as string
      const testimonial = formDataObj.get('testimonial') as string
      const rating = formDataObj.get('rating') as string
      const projectType = formDataObj.get('projectType') as string
      const timeline = formDataObj.get('timeline') as string
      const results = formDataObj.get('results') as string
      const challenges = formDataObj.get('challenges') as string
      const recommendation = formDataObj.get('recommendation') as string

      // Validate required fields
      if (!name || !role || !company || !email || !testimonial) {
        setSubmitMessage('Please fill in all required fields.')
        return
      }

      // Open email client in browser
      const subject = `New Testimonial Submission from ${name}`
      const body = `Name: ${name}
Role: ${role}
Company: ${company}
Email: ${email}
Rating: ${rating || 'Not provided'}

Project Details:
Project Type: ${projectType || 'Not provided'}
Timeline: ${timeline || 'Not provided'}

Challenges Faced:
${challenges || 'Not provided'}

Results & Impact:
${results || 'Not provided'}

Testimonial:
${testimonial}

Recommendation:
${recommendation || 'Not provided'}`

      // Try Gmail compose URL first (most common)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=testimonials@pythonaisolutions.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
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
        <h2 className="font-display text-sm sm:text-base font-semibold text-neutral-950">
          Share your experience
        </h2>
        
        <div className="isolate mt-4 sm:mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Full Name" name="name" autoComplete="name" required />
          <TextInput label="Job Title" name="role" required />
          <TextInput label="Company/Organization" name="company" autoComplete="organization" required />
          <TextInput label="Email Address" type="email" name="email" autoComplete="email" required />
          
          <div className="border border-neutral-300 px-4 sm:px-6 py-6 sm:py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-sm sm:text-base/6 text-neutral-500">Project Details</legend>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
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
            </fieldset>
          </div>
          
          <TextAreaInput label="Challenges You Faced" name="challenges" rows={3} />
          <TextAreaInput label="Results & Impact" name="results" rows={3} />
          <TextAreaInput label="Your Testimonial" name="testimonial" rows={3} required />
          
          <div className="border border-neutral-300 px-4 sm:px-6 py-6 sm:py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-sm sm:text-base/6 text-neutral-500">Rating & Recommendation</legend>
              <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
                <SelectInput label="Overall Rating" name="rating">
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Very Good</option>
                  <option value="3">⭐⭐⭐ Good</option>
                  <option value="2">⭐⭐ Fair</option>
                  <option value="1">⭐ Poor</option>
                </SelectInput>
                
                <SelectInput label="Would you recommend us?" name="recommendation">
                  <option value="">Select option</option>
                  <option value="Yes, absolutely">Yes, absolutely</option>
                  <option value="Yes, with some reservations">Yes, with some reservations</option>
                  <option value="Maybe">Maybe</option>
                  <option value="No">No</option>
                </SelectInput>
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
            {isSubmitting ? 'Opening Email...' : "Submit Testimonial"}
          </Button>
        </div>
      </form>
    </FadeIn>
  )
}

function TestimonialGuidance() {
  return (
    <FadeIn>
      <h2 className="font-display text-sm sm:text-base font-semibold text-neutral-950">
        How to Write a Great Testimonial
      </h2>
      
      <div className="mt-6 sm:mt-10 space-y-6 sm:space-y-8">
        <div>
          <h3 className="font-semibold text-[#31b9fd] mb-1 sm:mb-2 text-sm sm:text-base">Be Specific</h3>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Mention specific results, improvements, or outcomes you experienced. 
            Numbers and metrics are especially valuable.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#31b9fd] mb-1 sm:mb-2 text-sm sm:text-base">Share the Journey</h3>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Describe the challenges you faced and how Python AI Solutions helped 
            overcome them. This helps others relate to your experience.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#31b9fd] mb-1 sm:mb-2 text-sm sm:text-base">Highlight the Impact</h3>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Focus on the business impact: time saved, costs reduced, 
            efficiency gained, or revenue increased.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#31b9fd] mb-1 sm:mb-2 text-sm sm:text-base">Be Authentic</h3>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Write in your own voice. Authentic testimonials are more 
            compelling than overly formal ones.
          </p>
        </div>

        <Border className="pt-6 sm:pt-8">
          <div className="bg-[#31b9fd]/10 border border-[#31b9fd]/20 rounded-xl p-4 sm:p-6">
            <h4 className="font-semibold text-[#31b9fd] mb-2 text-sm sm:text-base">Example Structure</h4>
            <p className="text-neutral-600 text-xs sm:text-sm">
              &quot;We were struggling with [challenge]. Python AI Solutions helped us 
              [solution] which resulted in [specific outcome]. The team was 
              [professional qualities] and delivered [timeline/quality].&quot;
            </p>
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
          Your feedback helps us improve and inspires others to work with Python AI Solutions. 
          We value every testimonial and use your insights to enhance our services.
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