/**
 * Utility functions for handling logo display with smart background strategies
 */

export interface LogoBackgroundConfig {
  background: string
  borderColor?: string
  className: string
}

/**
 * Get smart background configuration for a logo based on the client name
 * This helps ensure logos display well regardless of their design system
 */
export function getLogoBackground(clientName: string): LogoBackgroundConfig {
  const lowerName = clientName.toLowerCase()

  // Company-specific background strategies
  const configs: Record<string, LogoBackgroundConfig> = {
    // Companies that typically use dark logos
    openteams: {
      background: 'bg-gradient-to-br from-neutral-50 to-neutral-100',
      borderColor: 'border-neutral-200',
      className: 'rounded-lg p-2',
    },
    'justice innovation lab': {
      background: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      className: 'rounded-lg p-2',
    },
    pytorch: {
      background: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      className: 'rounded-lg p-2',
    },
    futurus: {
      background: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      className: 'rounded-lg p-2',
    },
    sustech: {
      background: 'bg-gradient-to-br from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      className: 'rounded-lg p-2',
    },
    cirun: {
      background: 'bg-gradient-to-br from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200',
      className: 'rounded-lg p-2',
    },
    cmn: {
      background: 'bg-gradient-to-br from-slate-50 to-gray-50',
      borderColor: 'border-slate-200',
      className: 'rounded-lg p-2',
    },
    dsst: {
      background: 'bg-gradient-to-br from-violet-50 to-purple-50',
      borderColor: 'border-violet-200',
      className: 'rounded-lg p-2',
    },
  }

  // Find matching config
  for (const [key, config] of Object.entries(configs)) {
    if (lowerName.includes(key)) {
      return config
    }
  }

  // Default fallback - subtle neutral background
  return {
    background: 'bg-gradient-to-br from-neutral-50 to-gray-50',
    borderColor: 'border-neutral-200',
    className: 'rounded-lg p-2',
  }
}

/**
 * Get background for testimonial/case study logos (more subtle)
 */
export function getTestimonialLogoBackground(
  clientName: string,
): LogoBackgroundConfig {
  const config = getLogoBackground(clientName)

  // Make it more subtle for testimonials
  return {
    ...config,
    background: config.background.replace(/50/g, '25').replace(/100/g, '50'),
    className: 'rounded-md p-1.5',
  }
}

/**
 * Get background for client grid logos (even more subtle)
 */
export function getClientGridLogoBackground(
  clientName: string,
): LogoBackgroundConfig {
  return {
    background: 'bg-neutral-900/5 hover:bg-neutral-900/10',
    borderColor: 'border-neutral-900/10',
    className: 'rounded-lg p-3 transition-colors',
  }
}
