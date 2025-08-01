// Testimonials data
import logoJusticeInnovationLab from '@/images/clients/justice-innovation-lab/logo-dark.svg'
import logoSustech from '@/images/clients/sustech/logo-dark.svg'
import logoBioImaginix from '@/images/clients/BioImaginix/logo-dark.svg'

export const testimonials = [
  {
    client: 'FamilyFund',
    logo: logoJusticeInnovationLab,
    year: '2023',
    testimonial: {
      content: 'Python AI Solutions transformed our donor management system with cutting-edge analytics that increased retention by 40%.',
      author: { name: 'Sarah Chen', role: 'Executive Director' }
    },
    detailedReport: {
      summary: 'Improved donor retention and streamlined fundraising processes through automated data analysis and predictive modeling.',
      achievements: [
        'Implemented predictive analytics for donor behavior',
        'Automated donor segmentation and targeting',
        'Created real-time fundraising dashboards',
        'Optimized campaign timing and messaging'
      ],
      impact: [
        { value: '40%', label: 'Increase in donor retention' },
        { value: '3x', label: 'Faster data processing' },
        { value: '85%', label: 'Improvement in service efficiency' },
        { value: '$2.5M', label: 'Additional funds raised' }
      ],
      fullTestimonial: 'Working with Python AI Solutions was a game-changer for our organization. Their team understood our unique challenges in nonprofit fundraising and delivered a comprehensive AI solution that not only improved our donor retention but also gave us insights we never had before. The predictive analytics help us identify potential major donors early, and the automated systems free up our staff to focus on relationship building rather than data management.'
    }
  },
  {
    client: 'Unseal',
    logo: logoBioImaginix,
    year: '2022',
    testimonial: {
      content: 'Their data security and user onboarding AI reduced breaches by 50% while scaling to 100K+ users seamlessly.',
      author: { name: 'Marcus Rodriguez', role: 'Chief Technology Officer' }
    },
    detailedReport: {
      summary: 'Achieved enterprise-grade security while maintaining user-friendly experience and rapid scaling capabilities.',
      achievements: [
        'Implemented AI-powered threat detection',
        'Automated user verification and onboarding',
        'Created adaptive security protocols',
        'Built scalable infrastructure architecture'
      ],
      impact: [
        { value: '100K+', label: 'Users onboarded' },
        { value: '99.9%', label: 'Data security uptime' },
        { value: '50%', label: 'Reduction in data breaches' },
        { value: '$2M', label: 'Cost savings achieved' }
      ],
      fullTestimonial: 'Security and user experience often conflict, but Python AI Solutions found the perfect balance. Their AI-driven approach to user onboarding is brilliant - it maintains high security standards while being completely transparent to legitimate users. The threat detection system has prevented multiple sophisticated attacks, and the scalability they built in allowed us to grow from 10K to 100K users without missing a beat.'
    }
  },
  {
    client: 'DataFlow',
    logo: logoSustech,
    year: '2023',
    testimonial: {
      content: 'Real-time insights delivery improved by 75% while generating $8M in additional revenue through AI-powered analytics.',
      author: { name: 'Dr. Jennifer Wu', role: 'Chief Data Officer' }
    },
    detailedReport: {
      summary: 'Achieved real-time insights delivery with significant revenue growth and improved decision-making accuracy.',
      achievements: [
        'Built real-time data processing pipeline',
        'Implemented predictive revenue modeling',
        'Created automated insight generation',
        'Optimized data warehouse architecture'
      ],
      impact: [
        { value: '40%', label: 'Revenue increase' },
        { value: '75%', label: 'Faster insights delivery' },
        { value: '3x', label: 'Improvement in accuracy' },
        { value: '$8M', label: 'Additional revenue generated' }
      ],
      fullTestimonial: 'As a data-driven company, we thought we were already optimized, but Python AI Solutions showed us what true real-time analytics could achieve. Their solution processes terabytes of data in seconds and delivers actionable insights that directly impact our bottom line. The $8M in additional revenue speaks for itself, but more importantly, we can now make confident decisions based on current data rather than yesterday\'s reports.'
    }
  }
]