import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { GridPattern } from '@/components/GridPattern'
import { GridList, GridListItem } from '@/components/GridList'
import { getAssetPath } from '@/lib/basePath'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'Home', href: '/' },
      { title: 'Services', href: '/services' },
      { title: 'About Us', href: '/about' },
      { title: 'Clientele', href: '/clientele' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <div className="flex flex-col">
        <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-4">
          {navigation[0].title}
        </div>
        <ul role="list" className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-700">
          {navigation[0].links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <Link
                href={link.href}
                className="transition hover:text-neutral-950"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-none"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
          <div className="lg:flex lg:justify-start">
            <Navigation />
          </div>
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image
              src={getAssetPath('/snakebrain.svg')}
              alt="SnakeBrain Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <p className="text-sm text-neutral-500">
            © Python AI Solutions 2023-2025
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
