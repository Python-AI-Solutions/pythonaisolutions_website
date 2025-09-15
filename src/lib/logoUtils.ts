/**
 * Utility functions for handling logo display with smart background strategies
 */

export interface LogoBackgroundConfig {
  background?: string
  borderColor?: string
  className: string
  needsBackground: boolean
}

/**
 * Logos that need backgrounds on white backgrounds (typically light/white logos)
 */
const LOGOS_NEEDING_BACKGROUNDS = [
  'justice innovation lab',
  'jil',
  // Add other logos that are primarily white/light colored
]

/**
 * Get smart background configuration for a logo based on the client name
 * Only applies backgrounds to logos that actually need them
 */
export function getLogoBackground(clientName: string): LogoBackgroundConfig {
  const lowerName = clientName.toLowerCase()

  // Check if this logo needs a background
  const needsBackground = LOGOS_NEEDING_BACKGROUNDS.some((logoName) =>
    lowerName.includes(logoName),
  )

  if (!needsBackground) {
    // No background needed - just padding
    return {
      className: 'rounded-lg p-2',
      needsBackground: false,
    }
  }

  // Company-specific background strategies for logos that need them
  const configs: Record<
    string,
    Omit<LogoBackgroundConfig, 'needsBackground'>
  > = {
    'justice innovation lab': {
      background: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      className: 'rounded-lg p-2',
    },
  }

  // Find matching config
  for (const [key, config] of Object.entries(configs)) {
    if (lowerName.includes(key)) {
      return { ...config, needsBackground: true }
    }
  }

  // Default background for logos that need one but don't have specific styling
  return {
    background: 'bg-gradient-to-br from-neutral-50 to-neutral-100',
    borderColor: 'border-neutral-200',
    className: 'rounded-lg p-2',
    needsBackground: true,
  }
}

/**
 * Get background for testimonial/case study logos (more subtle)
 */
export function getTestimonialLogoBackground(
  clientName: string,
): LogoBackgroundConfig {
  const config = getLogoBackground(clientName)

  if (!config.needsBackground) {
    // No background needed - just padding for spacing
    return {
      className: 'rounded-lg p-3',
      needsBackground: false,
    }
  }

  // Make it more subtle for testimonials
  return {
    ...config,
    background: config.background?.replace(/50/g, '25').replace(/100/g, '50'),
    borderColor: config.borderColor?.replace(/200/g, '100'),
    className: 'rounded-lg p-3',
    needsBackground: true,
  }
}

/**
 * Helper function to generate logo container classes
 */
export function getLogoContainerProps(
  clientName: string,
  context: 'testimonial' | 'clientele' | 'modal' = 'testimonial',
) {
  const config =
    context === 'testimonial'
      ? getTestimonialLogoBackground(clientName)
      : getLogoBackground(clientName)

  if (!config.needsBackground) {
    return {
      className: config.className,
    }
  }

  const classes = [
    config.background,
    config.className,
    config.borderColor ? `border ${config.borderColor}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return {
    className: classes,
  }
}
