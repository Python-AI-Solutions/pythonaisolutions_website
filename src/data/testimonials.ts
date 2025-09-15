// Testimonials data
import logoJusticeInnovationLab from '@/images/clients/justice-innovation-lab/logo-dark.svg'
import logoSustech from '@/images/clients/sustech/logo-dark.svg'
import logoBioImaginix from '@/images/clients/BioImaginix/logo-dark.svg'

export const testimonials = [
  {
    client: 'OpenTeams',
    logo: '/OT-Color-WithTagline-Horizontal-NoBackground-1.webp',
    year: '2023',
    testimonial: {
      content:
        'John is a professional who always stays up to date technically, a fast learner, and a good listener of your needs. His experience in consulting for both private companies and government agencies makes him adapt quickly to any situation.',
      author: { name: 'Pierre-Olivier Simonard', role: 'Engineering Manager' },
    },
    detailedReport: {
      summary:
        'John demonstrated exceptional technical expertise and adaptability while working with OpenTeams, showcasing his ability to quickly understand client needs and deliver effective solutions.',
      achievements: [
        'Maintained cutting-edge technical knowledge and skills',
        'Demonstrated rapid learning and adaptation capabilities',
        'Provided excellent client consultation and communication',
        'Successfully adapted to diverse organizational contexts',
      ],
      impact: [
        { value: '100%', label: 'Client satisfaction' },
        { value: 'Fast', label: 'Learning curve' },
        { value: 'Expert', label: 'Technical knowledge' },
        { value: 'Versatile', label: 'Consulting approach' },
      ],
      fullTestimonial:
        'John is a professional who always stays up to date technically, a fast learner, and a good listener of your needs. His experience in consulting for both private companies and government agencies makes him adapt quickly to any situation.',
    },
  },
  {
    client: 'Justice Innovation Lab',
    logo: logoJusticeInnovationLab,
    year: '2025',
    testimonial: {
      content:
        'Working with John for over 2 years we built an engineering workflow that enabled our data analysts and data scientists to quickly and securely access data and deliver critical reporting for our partners.',
      author: { name: 'Rory Pulvino', role: 'Project Lead' },
    },
    detailedReport: {
      summary:
        'Justice Innovation Lab collaborated with John for over two years to develop custom data engineering workflows that significantly improved their ability to serve partners with secure, efficient data access and analysis.',
      achievements: [
        'Developed custom data engineering workflows tailored to organizational needs',
        'Implemented high-security data access protocols',
        'Enabled faster and more efficient data analysis processes',
        'Improved technical expert management and ETL security',
      ],
      impact: [
        { value: '2+ years', label: 'Partnership duration' },
        { value: 'Secure', label: 'Data access' },
        { value: 'Critical', label: 'Partner reporting' },
        { value: 'Custom', label: 'Workflow solutions' },
      ],
      fullTestimonial:
        "Justice Innovation Lab worked with John for over two years. Over that time, John continually listened to our needs and our bottlenecks and then designed solutions around our organization. This included developing custom data engineering workflows that could be managed by our staff afterwards and met our high security needs. The processes that John designed allowed our staff to more quickly and securely access data and perform analyses that provided critical information to our partners. John also managed a technical expert who improved our logging and security for our ETL processes. John's willingness to listen to our challenges and ability to diagnose issues and design solutions were key to improving our ability to serve our partners.",
    },
  },
]
