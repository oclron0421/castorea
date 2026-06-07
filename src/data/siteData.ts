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
  slug: string
  title: string
  category: string
  location: string
  year: string
  style: string
  accent: string
  summary: string
  scope: string[]
  photos: ProjectPhoto[]
  image?: string
}

export type ProjectPhoto = {
  label: string
  caption: string
  accent?: string
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

export type ProjectJourneyStage = {
  stage: string
  title: string
  description: string
  media: string[]
  note?: string
  bullets: string[]
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

export const formspreeEndpoint = ''

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', short: 'IG', href: '' },
  { label: 'TikTok', short: 'TK', href: '' },
  { label: 'Carousell', short: 'CR', href: '' },
]

export const contact = {
  email: 'hello@castorea.sg',
  phone: '+65 9123 4567',
  location: 'Singapore',
  whatsapp: '',
}

export const stats: Stat[] = [
  { value: '120+', label: 'Homes furnished' },
  { value: '12 yrs', label: 'Design practice' },
  { value: '4.9/5', label: 'Client rating' },
  { value: '500+', label: 'Carpentry custom projects' },
  {value: '100%', label: 'Dedicated Project Coordination'}  
]

export const services: Service[] = [
  {
    title: 'Full Home Furnishing',
    summary: 'End-to-end furnishing from concept to styling day.',
    bullets: ['Space planning', 'Sourcing and procurement', 'Styling and install'],
    accent: '#E4D2BC',
  },
  {
    title: 'Interior Design',
    summary: 'From concept to completion, we manage the entire renovation process.',
    bullets: ['Interior renovation', 'Space planning', 'Design consultation'],
    accent: '#D9C1A6',
  },
  {
    title: 'Direct renovation',
    summary: 'Focussed on quality workmanship, transparency and reliable delivery',
    bullets: ['Direct contractor', 'Factory pricing', 'No middleman'],
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
    slug: 'the-maia-residence',
    title: 'The Maia Residence',
    category: 'Living Room',
    location: 'Bishan, HDB 5-Room',
    year: '2025',
    style: 'Warm minimal',
    accent: '#D6BFA6',
    summary:
      'A warm, calming living space shaped around soft textures, layered storage, and an easy everyday hosting flow.',
    scope: ['Living room design', 'Custom storage planning', 'Furniture and styling direction'],
    photos: [
      {
        label: 'Living room overview',
        caption: 'Main living area with a balanced layout and warm neutral palette.',
        accent: '#D6BFA6',
      },
      {
        label: 'Feature wall detail',
        caption: 'Textured surfaces and storage details designed for a clean visual line.',
        accent: '#C8AD90',
      },
      {
        label: 'Lounge angle',
        caption: 'A secondary view showing circulation, seating, and layered soft furnishings.',
        accent: '#E1CCB3',
      },
      {
        label: 'Material palette',
        caption: 'Finishes selected to keep the home warm, practical, and timeless.',
        accent: '#BFA384',
      },
    ],
  },
  {
    slug: 'dusk-retreat',
    title: 'Dusk Retreat',
    category: 'Bedroom',
    location: 'Clementi, Condominium',
    year: '2024',
    style: 'Soft layered',
    accent: '#C5A98A',
    summary:
      'A restful bedroom concept with muted tones, soft lighting, and tailored storage for a gentle end-of-day rhythm.',
    scope: ['Bedroom refresh', 'Lighting and soft furnishing direction', 'Wardrobe planning'],
    photos: [
      {
        label: 'Bedroom overview',
        caption: 'A calm sleeping area composed with gentle contrast and soft layered finishes.',
        accent: '#C5A98A',
      },
      {
        label: 'Bedside detail',
        caption: 'Close-up of bedside styling, lighting, and tactile materials.',
        accent: '#D9C3A9',
      },
      {
        label: 'Wardrobe elevation',
        caption: 'Storage planning that keeps the room quiet and uncluttered.',
        accent: '#B99878',
      },
      {
        label: 'Textile palette',
        caption: 'Soft fabrics and tonal layers selected for comfort and warmth.',
        accent: '#E3D3C2',
      },
    ],
  },
  {
    slug: 'terranova-kitchen',
    title: 'Terranova Kitchen',
    category: 'Kitchen',
    location: 'Orchard, Landed',
    year: '2025',
    style: 'Modern natural',
    accent: '#E0C8AD',
    summary:
      'A natural-toned kitchen designed for daily cooking, easy storage, and a polished connection to the dining area.',
    scope: ['Kitchen layout planning', 'Cabinetry design', 'Material and countertop selection'],
    photos: [
      {
        label: 'Kitchen overview',
        caption: 'Primary kitchen view with practical zones and a soft modern-natural palette.',
        accent: '#E0C8AD',
      },
      {
        label: 'Cabinetry detail',
        caption: 'Carpentry details planned around storage, durability, and clean proportions.',
        accent: '#CDAF8D',
      },
      {
        label: 'Countertop and backsplash',
        caption: 'Finish pairing selected for easy maintenance and visual warmth.',
        accent: '#ECD8C2',
      },
      {
        label: 'Dining connection',
        caption: 'A wider angle showing how the kitchen opens into the shared living zone.',
        accent: '#B9936B',
      },
    ],
  },
  {
    slug: 'ember-dining',
    title: 'Ember Dining',
    category: 'Dining',
    location: 'Sentosa, Condo',
    year: '2024',
    style: 'Sculpted warm',
    accent: '#D2B089',
    summary:
      'A dining zone with sculptural warmth, considered proportions, and ambient details for intimate hosting.',
    scope: ['Dining area styling', 'Lighting direction', 'Furniture and material curation'],
    photos: [
      {
        label: 'Dining overview',
        caption: 'Main dining view with warm tones, sculptural forms, and soft contrast.',
        accent: '#D2B089',
      },
      {
        label: 'Table setting',
        caption: 'Styling details that bring texture and scale to the dining experience.',
        accent: '#E1C4A0',
      },
      {
        label: 'Lighting feature',
        caption: 'Ambient lighting selected to frame the dining zone with a quiet glow.',
        accent: '#B9895C',
      },
      {
        label: 'Material close-up',
        caption: 'A closer look at finishes and tones used across the dining composition.',
        accent: '#E8D5BE',
      },
    ],
  },
  {
    slug: 'the-scholar-nook',
    title: 'The Scholar Nook',
    category: 'Study',
    location: 'Novena, Condominium',
    year: '2025',
    style: 'Quiet luxe',
    accent: '#C8A37C',
    summary:
      'A compact study corner made more focused through tailored storage, warm lighting, and a quiet luxe palette.',
    scope: ['Study nook planning', 'Built-in desk and shelving', 'Task lighting and styling'],
    photos: [
      {
        label: 'Study overview',
        caption: 'A focused work area with storage, display, and a calm material language.',
        accent: '#C8A37C',
      },
      {
        label: 'Desk detail',
        caption: 'Desk proportions and material details designed for everyday comfort.',
        accent: '#D8BA98',
      },
      {
        label: 'Open shelving',
        caption: 'Display and storage elements arranged to feel refined without clutter.',
        accent: '#B58B62',
      },
      {
        label: 'Work corner styling',
        caption: 'Finishing touches that soften the study zone and make it feel complete.',
        accent: '#E2CCB6',
      },
    ],
  },
  {
    slug: 'sage-terrace',
    title: 'Sage Terrace',
    category: 'Family Lounge',
    location: 'Tiong Bahru, HDB 4-Room',
    year: '2023',
    style: 'Layered comfort',
    accent: '#DCC7AE',
    summary:
      'A relaxed family lounge with practical seating, softer colours, and approachable details for everyday gathering.',
    scope: ['Family lounge furnishing', 'Storage and layout planning', 'Styling and soft furnishings'],
    photos: [
      {
        label: 'Family lounge overview',
        caption: 'A comfortable shared lounge designed for slow evenings and family time.',
        accent: '#DCC7AE',
      },
      {
        label: 'Sofa and textile detail',
        caption: 'Layered fabrics and cushions selected for comfort and texture.',
        accent: '#C7AD93',
      },
      {
        label: 'Storage wall',
        caption: 'Functional storage that supports family routines while staying visually calm.',
        accent: '#E9D8C5',
      },
      {
        label: 'Reading corner',
        caption: 'A quieter nook within the lounge for reading, resting, and display.',
        accent: '#BFA083',
      },
    ],
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

export const projectJourneyStages: ProjectJourneyStage[] = [
  {
    stage: 'Stage 1',
    title: 'Understand Your Needs',
    description:
      'We begin by studying your home, lifestyle, and design direction so every next step is grounded in what matters to you.',
    media: ['Site photos', 'Floor plan', 'Design proposals'],
    bullets: [
      'Thoughtful space planning that shapes a practical, well-balanced layout.',
      'On-site consultation to observe the space, measurements, and daily flow in person.',
      'A clear understanding of your vision, lifestyle needs, and project goals.',
      'Exploration of your preferred aesthetics, references, and design inspirations.',
    ],
  },
  {
    stage: 'Stage 2',
    title: 'Visualisation',
    description:
      'Your concept is translated into visuals, finishes, and material direction before the work moves forward.',
    media: ['Render photo'],
    note:
      'This visualisation stage begins once you decide to engage Castorea, allowing the team to develop your design with full focus and care.',
    bullets: [
      'Your design is refined through unlimited visual revisions until the direction feels fully aligned with your expectations.',
      'Material selection covers finishes, textures, colours, and practical samples so each choice supports the look, budget, and everyday use of the space.',
    ],
  },
  {
    stage: 'Stage 3',
    title: 'Execution and Implementation',
    description:
      'Once the design direction is approved, we coordinate the build, updates, and finishing details through handover.',
    media: ['Completion photo'],
    bullets: [
      'A coordinated project schedule designed to keep work progressing within the agreed timeline.',
      'Consistent workflow updates so you stay informed as each phase is completed.',
      'Quality assurance throughout fabrication, installation, and finishing.',
      'Thorough final checks before handover to make sure the completed work meets the expected standard.',
    ],
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
