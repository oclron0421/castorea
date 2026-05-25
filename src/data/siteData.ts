export type NavLink = {
  label: string
  path: string
}

export type SocialLink = {
  label: string
  short: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type Service = {
  title: string
  summary: string
  bullets: string[]
  accent: string
}

export type Project = {
  title: string
  category: string
  location: string
  year: string
  style: string
  accent: string
  image?: string
}

export type Review = {
  name: string
  project: string
  quote: string
  stars: number
}

export type ProcessStep = {
  title: string
  description: string
}

export type Value = {
  title: string
  description: string
}

export type Faq = {
  question: string
  answer: string
}

export type Package = {
  title: string
  description: string
  priceNote: string
  items: string[]
}

export const formspreeEndpoint = 'https://formspree.io/f/yourformid'

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'TikTok', short: 'TK', href: '#' },
  { label: 'Carousell', short: 'CR', href: '#' },
]

export const contact = {
  email: 'hello@castorea.sg',
  phone: '+65 9123 4567',
  location: 'Singapore',
  whatsapp: '#',
}

export const stats: Stat[] = [
  { value: '120+', label: 'Homes furnished' },
  { value: '12 yrs', label: 'Design practice' },
  { value: '4.9/5', label: 'Client rating' },
  { value: '30 days', label: 'Average timeline' },
]

export const services: Service[] = [
  {
    title: 'Full Home Furnishing',
    summary: 'End-to-end furnishing from concept to styling day.',
    bullets: ['Space planning', 'Sourcing and procurement', 'Styling and install'],
    accent: '#E4D2BC',
  },
  {
    title: 'Room Refresh',
    summary: 'Transform a living room, bedroom, or dining space.',
    bullets: ['Layout update', 'Key pieces', 'Final styling'],
    accent: '#D9C1A6',
  },
  {
    title: 'Staging for Sale',
    summary: 'Prepare listings with polished, buyer-ready styling.',
    bullets: ['Furniture rental', 'Lifestyle vignettes', 'Photo ready'],
    accent: '#D1B79A',
  },
  {
    title: 'Custom Carpentry',
    summary: 'Built-ins and storage tailored to your lifestyle.',
    bullets: ['Material selection', 'Production oversight', 'On-site install'],
    accent: '#E0C7A9',
  },
]

export const packages: Package[] = [
  {
    title: 'Signature Styling',
    description: 'Curated essentials for a single room refresh.',
    priceNote: 'Starting from S$4,800',
    items: ['Moodboard and layout', 'Shopping list', '1 styling day'],
  },
  {
    title: 'Full Home Edit',
    description: 'Whole-home furnishing with end-to-end management.',
    priceNote: 'Starting from S$18,000',
    items: ['Space planning', 'Sourcing and procurement', 'Full install'],
  },
  {
    title: 'Property Staging',
    description: 'Short term styling to elevate resale and rental.',
    priceNote: 'Starting from S$2,500',
    items: ['Furniture rental', 'Staging and styling', 'Photo ready'],
  },
]

export const projects: Project[] = [
  {
    title: 'The Maia Residence',
    category: 'Living Room',
    location: 'Bishan, HDB 5-Room',
    year: '2025',
    style: 'Warm minimal',
    accent: '#D6BFA6',
  },
  {
    title: 'Dusk Retreat',
    category: 'Bedroom',
    location: 'Clementi, Condominium',
    year: '2024',
    style: 'Soft layered',
    accent: '#C5A98A',
  },
  {
    title: 'Terranova Kitchen',
    category: 'Kitchen',
    location: 'Orchard, Landed',
    year: '2025',
    style: 'Modern natural',
    accent: '#E0C8AD',
  },
  {
    title: 'Ember Dining',
    category: 'Dining',
    location: 'Sentosa, Condo',
    year: '2024',
    style: 'Sculpted warm',
    accent: '#D2B089',
  },
  {
    title: 'The Scholar Nook',
    category: 'Study',
    location: 'Novena, Condominium',
    year: '2025',
    style: 'Quiet luxe',
    accent: '#C8A37C',
  },
  {
    title: 'Sage Terrace',
    category: 'Family Lounge',
    location: 'Tiong Bahru, HDB 4-Room',
    year: '2023',
    style: 'Layered comfort',
    accent: '#DCC7AE',
  },
]

export const reviews: Review[] = [
  {
    name: 'Sarah T.',
    project: 'Bishan, HDB 4-Room',
    quote:
      'Castorea understood our style immediately and turned it into a space we love coming home to.',
    stars: 5,
  },
  {
    name: 'Marcus L.',
    project: 'Clementi, Condominium',
    quote:
      'The team was organized, warm, and detail-driven. Every piece felt intentional.',
    stars: 5,
  },
  {
    name: 'Priya R.',
    project: 'Bukit Timah, Landed',
    quote:
      'They balanced comfort and elegance perfectly. Our guests always ask who styled the home.',
    stars: 5,
  },
  {
    name: 'Jia H.',
    project: 'Serangoon, HDB 5-Room',
    quote:
      'The process was smooth and the final styling felt like us, just elevated.',
    stars: 5,
  },
  {
    name: 'Hannah C.',
    project: 'Novena, Condominium',
    quote:
      'A thoughtful team that delivered beyond what we imagined. Worth every bit.',
    stars: 5,
  },
  {
    name: 'Kelvin W.',
    project: 'Pasir Ris, HDB 4-Room',
    quote:
      'We appreciated the transparent timeline and the beautiful final result.',
    stars: 5,
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery and Brief',
    description: 'We listen, map your lifestyle, and set a clear direction.',
  },
  {
    title: 'Design and Sourcing',
    description: 'We curate pieces, materials, and a layout that fits you.',
  },
  {
    title: 'Styling and Reveal',
    description: 'We install, style, and walk through the final details.',
  },
]

export const values: Value[] = [
  {
    title: 'Warmth in Every Detail',
    description: 'We design spaces that feel lived-in, welcoming, and timeless.',
  },
  {
    title: 'Function First',
    description: 'Every layout and piece earns its place and supports your routine.',
  },
  {
    title: 'Thoughtful Craft',
    description: 'We balance texture, light, and scale to create harmony.',
  },
]

export const faqs: Faq[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects take 4 to 8 weeks depending on scope and sourcing.',
  },
  {
    question: 'Do you work with existing furniture?',
    answer: 'Yes. We can refresh, re-style, and blend in pieces you already love.',
  },
  {
    question: 'What is the consultation like?',
    answer: 'We discuss your goals, walk through the space, and outline next steps.',
  },
]
