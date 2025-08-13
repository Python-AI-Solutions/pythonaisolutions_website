import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-20 md:px-12 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
              Let&apos;s Work Together
            </h2>
            <div className="mt-4 space-y-4 text-sm text-neutral-300 sm:mt-6 sm:space-y-6 sm:text-base">
              <p>
                We&apos;re always looking for new opportunities and are
                comfortable working internationally. We believe in
                cross-disciplinary collaboration and open communication because
                together we can create something greater than we could achieve
                on our own.
              </p>
              <p>
                Please get in touch to learn more about how we can help your
                organization achieve its goals.
              </p>
            </div>
            <div className="mt-6 flex justify-center sm:mt-8">
              <Button
                href="/contact"
                invert
                className="px-4 py-2 text-sm transition-colors duration-300 hover:!bg-[#31b9fd] hover:!text-white sm:px-6 sm:py-3 sm:text-base"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
