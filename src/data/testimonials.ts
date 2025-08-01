// Testimonials data
import logoJusticeInnovationLab from '@/images/clients/justice-innovation-lab/logo-dark.svg'
import logoSustech from '@/images/clients/sustech/logo-dark.svg'
import logoBioImaginix from '@/images/clients/BioImaginix/logo-dark.svg'

export const testimonials = [
  {
    client: 'Lorem Corp',
    logo: logoJusticeInnovationLab,
    year: '2023',
    testimonial: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: { name: 'Lorem Ipsum', role: 'Lorem Director' }
    },
    detailedReport: {
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      achievements: [
        'Lorem ipsum dolor sit amet consectetur',
        'Adipiscing elit sed do eiusmod tempor',
        'Incididunt ut labore et dolore magna',
        'Aliqua ut enim ad minim veniam'
      ],
      impact: [
        { value: '40%', label: 'Lorem ipsum dolor' },
        { value: '3x', label: 'Consectetur adipiscing' },
        { value: '85%', label: 'Sed do eiusmod' },
        { value: '2.5M', label: 'Tempor incididunt' }
      ],
      fullTestimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  },
  {
    client: 'Ipsum Industries',
    logo: logoBioImaginix,
    year: '2022',
    testimonial: {
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: { name: 'Dolor Sit', role: 'Amet Consectetur' }
    },
    detailedReport: {
      summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      achievements: [
        'Nemo enim ipsam voluptatem quia',
        'Voluptas sit aspernatur aut odit',
        'Aut fugit sed quia consequuntur',
        'Magni dolores eos qui ratione'
      ],
      impact: [
        { value: '100K+', label: 'Lorem ipsum users' },
        { value: '99.9%', label: 'Dolor sit uptime' },
        { value: '50%', label: 'Amet consectetur' },
        { value: '$2M', label: 'Adipiscing savings' }
      ],
      fullTestimonial: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.'
    }
  },
  {
    client: 'Dolor Solutions',
    logo: logoSustech,
    year: '2023',
    testimonial: {
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: { name: 'Consectetur Elit', role: 'Sed Eiusmod' }
    },
    detailedReport: {
      summary: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.',
      achievements: [
        'Accusantium doloremque laudantium totam',
        'Rem aperiam eaque ipsa quae',
        'Ab illo inventore veritatis et',
        'Quasi architecto beatae vitae dicta'
      ],
      impact: [
        { value: '40%', label: 'Lorem increase' },
        { value: '75%', label: 'Ipsum delivery' },
        { value: '3x', label: 'Dolor improvement' },
        { value: '$8M', label: 'Sit amet revenue' }
      ],
      fullTestimonial: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    }
  }
]