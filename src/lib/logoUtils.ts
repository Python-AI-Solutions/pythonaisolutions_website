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

  // Debug logging
  console.log(
    'getLogoBackground called with:',
    clientName,
    'lowercase:',
    lowerName,
  )

  // Check if this logo needs a background
  const needsBackground = LOGOS_NEEDING_BACKGROUNDS.some((logoName) =>
    lowerName.includes(logoName),
  )

  console.log('needsBackground:', needsBackground, 'for client:', clientName)

  if (!needsBackground) {
    // TEMPORARY: Force pink background on ALL logos for debugging
    return {
      background: 'bg-pink-300',
      borderColor: 'border-pink-400',
      className: 'rounded-lg p-2',
      needsBackground: true,
    }
  }

  // Company-specific background strategies for logos that need them
  const configs: Record<
    string,
    Omit<LogoBackgroundConfig, 'needsBackground'>
  > = {
    'justice innovation lab': {
      background: 'bg-gradient-to-br from-pink-400 to-pink-500',
      borderColor: 'border-pink-600',
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
    background: 'bg-gradient-to-br from-neutral-100 to-neutral-200',
    borderColor: 'border-neutral-300',
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

  // Keep it strong for testimonials too since visibility is the priority
  return {
    ...config,
    background: config.background, // Don't make it more subtle - visibility is key
    borderColor: config.borderColor,
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
  console.log(
    '🔍 getLogoContainerProps called with:',
    clientName,
    'context:',
    context,
  )

  const config =
    context === 'testimonial'
      ? getTestimonialLogoBackground(clientName)
      : getLogoBackground(clientName)

  console.log('🎨 Config returned:', config)

  if (!config.needsBackground) {
    console.log('❌ No background needed for:', clientName)
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

  console.log('✅ Background classes for', clientName, ':', classes)

  return {
    className: classes,
  }
}
