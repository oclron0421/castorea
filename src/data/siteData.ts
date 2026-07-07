import completionPhoto from '../assets/CompletionPhoto.png'
import homePage1 from '../assets/HP1.jpg'
import homePage2 from '../assets/HP2.jpg'
import homePage3 from '../assets/HP3.jpg'
import homePage4 from '../assets/HP4.jpg'
import understandingNeeds1 from '../assets/UN1.jpg'
import understandingNeeds2 from '../assets/UN2.jpg'
import understandingNeeds3 from '../assets/UN3.png'
import visualisation1 from '../assets/V1.png'
import visualisation2 from '../assets/V2.png'

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

export type HomeHeroPhoto = {
  label: string
  accent: string
  height: string
  image: string
}

export type Service = {
  title: string
  summary: string
  bullets: string[]
  accent: string
}

export type PortfolioCategoryId = 'residential' | 'commercial' | 'smaller-projects'

export type PortfolioCategory = {
  id: PortfolioCategoryId
  eyebrow: string
  title: string
  description: string
}

export type Project = {
  slug: string
  title: string
  portfolioCategory: PortfolioCategoryId
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

export type ProjectJourneyMedia = {
  label: string
  image?: string
}

export type ProjectJourneyStage = {
  stage: string
  title: string
  description: string
  media: ProjectJourneyMedia[]
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

export const web3FormsEndpoint = 'https://api.web3forms.com/submit'
export const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''

const portfolioImageModules = import.meta.glob<string>('../assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const getPortfolioImage = (path: string) => {
  const image = portfolioImageModules[`../assets/${path}`]

  if (!image) {
    throw new Error(`Portfolio image not found: ${path}`)
  }

  return image
}

const projectPhoto = (label: string, caption: string, path: string): ProjectPhoto => ({
  label,
  caption,
  image: getPortfolioImage(path),
})

const createProject = (project: Omit<Project, 'image'> & { image?: string }): Project => ({
  ...project,
  image: project.image ?? project.photos[0]?.image,
})

export const homeHeroPhotos: HomeHeroPhoto[] = [
  { label: 'Living Room', accent: '#E5D2BC', height: 'aspect-[4/5]', image: homePage1 },
  { label: 'Dining', accent: '#D8BFA2', height: 'aspect-[3/4]', image: homePage2 },
  { label: 'Bedroom', accent: '#D1B495', height: 'aspect-[3/4]', image: homePage3 },
  { label: 'Kitchen', accent: '#E8D7C4', height: 'aspect-[4/5]', image: homePage4 },
]

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'residential',
    eyebrow: 'Residential',
    title: 'Residential projects',
    description: 'Complete home interiors, BTO works, and renovation details shaped for everyday living.',
  },
  {
    id: 'commercial',
    eyebrow: 'Commercial',
    title: 'Commercial projects',
    description: 'Retail and business spaces planned around customer flow, display, storage, and operations.',
  },
  {
    id: 'smaller-projects',
    eyebrow: 'Smaller projects',
    title: 'Smaller projects',
    description: 'Focused carpentry and feature works for storage, display, bedrooms, and compact upgrades.',
  },
]

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Cabinetry', path: '/cabinetry' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', short: 'IG', href: '' },
  { label: 'TikTok', short: 'TK', href: '' },
  { label: 'Carousell', short: 'CR', href: '' },
]

export const contact = {
  email: 'enquires@castorea.sg',
  phone: '+65 8176 0754',
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
    title: 'Premium Cabinetry',
    summary: 'End-to-end furnishing from concept to styling day.',
    bullets: ['Premium material', 'Precision finish', 'Superior Craftsmanship'],
    accent: '#E4D2BC',
  },
  {
    title: 'Interior Design',
    summary: 'From concept to completion, we manage the entire renovation process.',
    bullets: ['Interior renovation', 'Space planning', 'Design consultation'],
    accent: '#D9C1A6',
  },
  {
    title: 'Home Renovation',
    summary: 'Focussed on quality workmanship, transparency and reliable delivery',
    bullets: ['Direct contractor', 'Factory pricing', 'No middleman'],
    accent: '#D1B79A',
  },
  {
    title: 'Direct Carpentry',
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
  createProject({
    slug: 'bukit-batok-residence',
    title: 'Bukit Batok Residence',
    portfolioCategory: 'residential',
    category: 'Residential',
    location: 'Bukit Batok',
    year: '2025',
    style: 'Warm contemporary',
    accent: '#D6BFA6',
    summary:
      'A residential renovation with warm finishes, practical built-ins, and clean everyday storage details.',
    scope: ['Residential renovation', 'Custom carpentry', 'Storage and finish coordination'],
    photos: [
      projectPhoto(
        'Living and storage view',
        'A warm residential view with built-in details planned for daily use.',
        '(RESIDENTIAL) BUKIT BATOK/IMG-20251002-WA0027.jpg',
      ),
      projectPhoto(
        'Feature carpentry',
        'Clean cabinetry lines paired with a practical circulation flow.',
        '(RESIDENTIAL) BUKIT BATOK/IMG-20251002-WA0025.jpg',
      ),
      projectPhoto(
        'Home detail',
        'A closer project angle showing materials, finishes, and alignment.',
        '(RESIDENTIAL) BUKIT BATOK/IMG-20251002-WA0024.jpg',
      ),
      projectPhoto(
        'Installation detail',
        'Completed carpentry and finishing details after site coordination.',
        '(RESIDENTIAL) BUKIT BATOK/IMG-20251016-WA0105.jpg',
      ),
      projectPhoto(
        'Final view',
        'A final project view documenting the completed residential works.',
        '(RESIDENTIAL) BUKIT BATOK/IMG-20251016-WA0106.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'hougang-residence',
    title: 'Hougang Residence',
    portfolioCategory: 'residential',
    category: 'Residential',
    location: 'Hougang',
    year: '2026',
    style: 'Modern built-in',
    accent: '#C5A98A',
    summary:
      'A residential project combining carpentry, foyer planning, kitchen works, and bedroom storage.',
    scope: ['Home carpentry works', 'Kitchen and foyer planning', 'Bedroom storage details'],
    photos: [
      projectPhoto(
        'Completed home view',
        'A completed residential angle showing the built-in works in context.',
        '(RESIDENTIAL) HOUGANG/20260417_230059.jpg',
      ),
      projectPhoto(
        'Carpentry detail',
        'A closer look at the storage workmanship and finish alignment.',
        '(RESIDENTIAL) HOUGANG/20260417_230036.jpg',
      ),
      projectPhoto(
        'Interior detail',
        'A supporting view documenting completed residential works.',
        '(RESIDENTIAL) HOUGANG/20260417_230021.jpg',
      ),
      projectPhoto(
        'Bedroom',
        'Bedroom carpentry planned around a clean and functional layout.',
        '(RESIDENTIAL) HOUGANG/Bedroom.png',
      ),
      projectPhoto(
        'Foyer',
        'Foyer storage and entry details designed for daily routines.',
        '(RESIDENTIAL) HOUGANG/Foyer.png',
      ),
      projectPhoto(
        'Kitchen view 1',
        'Kitchen cabinetry and storage designed for a polished workflow.',
        '(RESIDENTIAL) HOUGANG/Kitchen 1.png',
      ),
      projectPhoto(
        'Kitchen view 2',
        'A second kitchen angle showing material continuity and storage lines.',
        '(RESIDENTIAL) HOUGANG/Kitchen.png',
      ),
    ],
  }),
  createProject({
    slug: 'punggol-cove-4-room-bto',
    title: 'Punggol Cove 4-Room BTO',
    portfolioCategory: 'residential',
    category: 'Residential',
    location: 'Punggol Cove',
    year: '2026',
    style: 'BTO contemporary',
    accent: '#E0C8AD',
    summary:
      'A 4-room BTO project with planned entry storage, living room features, dining, study, and bedroom works.',
    scope: ['BTO renovation', 'Whole-home carpentry', 'Living, study, and bedroom planning'],
    photos: [
      projectPhoto(
        'Main entrance',
        'Entry storage and arrival details for a tidy everyday routine.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Main Entrance.png',
      ),
      projectPhoto(
        'Living room',
        'A living room setup with feature storage and a clean home rhythm.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Living Room.png',
      ),
      projectPhoto(
        'Dining table',
        'Dining placement and finishes connected to the wider living space.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Dining Table.png',
      ),
      projectPhoto(
        'Study room 1',
        'Study carpentry and desk planning for focused work at home.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Study Room 1.png',
      ),
      projectPhoto(
        'Master bedroom',
        'Bedroom works with storage and finish coordination.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Master Bed Room.png',
      ),
      projectPhoto(
        'Study room 2',
        'A second study view showing the built-in workspace composition.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Study Room 2.png',
      ),
      projectPhoto(
        'Study room',
        'Additional study room details for storage and working surfaces.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/Study Room.png',
      ),
      projectPhoto(
        'TV console',
        'Living room TV console work with integrated storage.',
        '(RESIDENTIAL) PUNGGOL COVE 4RM BTO/Punggol Cove/TV Console.png',
      ),
    ],
  }),
  createProject({
    slug: 'loft-at-the-promenade',
    title: 'Loft at the Promenade',
    portfolioCategory: 'commercial',
    category: 'Commercial',
    location: 'The Promenade',
    year: '2025',
    style: 'Loft retail',
    accent: '#D2B089',
    summary:
      'A commercial loft project focused on display presence, durable finishes, and clean customer-facing details.',
    scope: ['Commercial renovation', 'Display and storage planning', 'On-site installation'],
    photos: [
      projectPhoto(
        'Commercial view 1',
        'A completed commercial view showing display and circulation details.',
        '(COMMERCIAL) LOFT AT THE PROMENADE/IMG-20250829-WA0017.jpg',
      ),
      projectPhoto(
        'Commercial view 2',
        'A supporting angle documenting the completed loft works.',
        '(COMMERCIAL) LOFT AT THE PROMENADE/IMG-20250829-WA0016.jpg',
      ),
      projectPhoto(
        'Commercial view 3',
        'A closer view of the commercial carpentry and finish execution.',
        '(COMMERCIAL) LOFT AT THE PROMENADE/IMG-20250829-WA0015.jpg',
      ),
      projectPhoto(
        'Commercial view 4',
        'Final view of the commercial interior works at handover.',
        '(COMMERCIAL) LOFT AT THE PROMENADE/IMG-20250829-WA0014.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'raph-tcg-pop-store',
    title: 'Raph TCG Pop Store',
    portfolioCategory: 'commercial',
    category: 'Commercial',
    location: 'Singapore',
    year: '2026',
    style: 'Pop store display',
    accent: '#B9895C',
    summary:
      'A pop store commercial fit-out with display cabinetry, retail flow, and customer-facing feature details.',
    scope: ['Pop store fit-out', 'Display cabinet works', 'Retail installation coordination'],
    photos: [
      projectPhoto(
        'Storefront view',
        'A completed store view showing the retail display environment.',
        '(COMMERCIAL) Raph TCG POP STORE/20260625_191849.jpg',
      ),
      projectPhoto(
        'Display setup 1',
        'Display and counter details arranged for retail operations.',
        '(COMMERCIAL) Raph TCG POP STORE/20260625_125820.jpg',
      ),
      projectPhoto(
        'Display setup 2',
        'A second display angle showing storage and product presentation.',
        '(COMMERCIAL) Raph TCG POP STORE/20260625_125816.jpg',
      ),
      projectPhoto(
        'Retail view',
        'A wider view of the completed pop store interior.',
        '(COMMERCIAL) Raph TCG POP STORE/20260625_191851.jpg',
      ),
      projectPhoto(
        'Feature display',
        'Final display details captured after installation.',
        '(COMMERCIAL) Raph TCG POP STORE/20260625_191914.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'jinx-card-pewkemart',
    title: 'Jinx Card x Pewkemart',
    portfolioCategory: 'commercial',
    category: 'Commercial',
    location: 'Singapore',
    year: '2026',
    style: 'Retail renovation',
    accent: '#C8A37C',
    summary:
      'A retail renovation with entrance storage, display cabinetry, counter works, and back-of-house storage.',
    scope: ['Commercial renovation', 'Counter and display cabinetry', 'Front and back cabinet works'],
    photos: [
      projectPhoto(
        'Foyer',
        'Retail foyer planning with a clear first impression and storage function.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Foyer.png',
      ),
      projectPhoto(
        'Entrance cabinet',
        'Entrance cabinet work designed for display and daily retail use.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Entrance Cabinet.png',
      ),
      projectPhoto(
        'Display cabinet',
        'Display cabinetry arranged around product visibility and access.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Display Cabinet.png',
      ),
      projectPhoto(
        'Counter',
        'Counter works supporting customer service and store operations.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Counter.png',
      ),
      projectPhoto(
        'Back cabinet',
        'Back cabinet planning for commercial storage and workflow.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Back Cabinet.png',
      ),
      projectPhoto(
        'Back cabinet detail',
        'A second back cabinet view showing layout and built-in detailing.',
        '(COMMERCIAL) Jinx Card x Pewkemart/Jinx Card Commercial Reno/Back Cabinet 1.png',
      ),
    ],
  }),
  createProject({
    slug: 'custom-wardrobe-vanity-table',
    title: 'Custom Wardrobe + Vanity Table',
    portfolioCategory: 'smaller-projects',
    category: 'Custom Wardrobe',
    location: 'Singapore',
    year: '2026',
    style: 'Bedroom carpentry',
    accent: '#DCC7AE',
    summary:
      'A focused bedroom carpentry project combining wardrobe storage with a practical vanity table setup.',
    scope: ['Custom wardrobe', 'Vanity table carpentry', 'Bedroom storage installation'],
    photos: [
      projectPhoto(
        'Wardrobe and vanity view',
        'A completed view of the custom wardrobe and vanity table works.',
        'Smaller Projects/CUSTOM WARDROBE + VANITY TABLE/20260615_173910.jpg',
      ),
      projectPhoto(
        'Wardrobe detail 1',
        'A closer look at the wardrobe finish and storage layout.',
        'Smaller Projects/CUSTOM WARDROBE + VANITY TABLE/20260615_173857.jpg',
      ),
      projectPhoto(
        'Wardrobe detail 2',
        'Additional cabinetry details for the custom bedroom setup.',
        'Smaller Projects/CUSTOM WARDROBE + VANITY TABLE/20260615_173923.jpg',
      ),
      projectPhoto(
        'Vanity detail',
        'Vanity table workmanship and surrounding storage details.',
        'Smaller Projects/CUSTOM WARDROBE + VANITY TABLE/20260615_173944.jpg',
      ),
      projectPhoto(
        'Completed angle',
        'A final angle documenting the completed wardrobe and vanity works.',
        'Smaller Projects/CUSTOM WARDROBE + VANITY TABLE/20260615_174025.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'custom-tv-console-resale-condo',
    title: 'Custom TV Console Resale Condo',
    portfolioCategory: 'smaller-projects',
    category: 'TV Console',
    location: 'Singapore',
    year: '2026',
    style: 'Living room carpentry',
    accent: '#C7AD93',
    summary:
      'A resale condo living room upgrade with a custom TV console and coordinated storage details.',
    scope: ['Custom TV console', 'Living room carpentry', 'Resale condo upgrade'],
    photos: [
      projectPhoto(
        'TV console view 1',
        'A completed view of the custom TV console in the living space.',
        'Smaller Projects/CUSTOM TV CONSOLE RESALE CONDO/20260423_134046.jpg',
      ),
      projectPhoto(
        'TV console view 2',
        'A second angle showing the console proportions and wall alignment.',
        'Smaller Projects/CUSTOM TV CONSOLE RESALE CONDO/20260423_134132.jpg',
      ),
      projectPhoto(
        'TV console detail',
        'A closer detail of the console finish and installation.',
        'Smaller Projects/CUSTOM TV CONSOLE RESALE CONDO/IMG-20260423-WA0003.jpg',
      ),
      projectPhoto(
        'TV console final angle',
        'A final angle documenting the completed resale condo console works.',
        'Smaller Projects/CUSTOM TV CONSOLE RESALE CONDO/20260423_134141.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'display-cabinets',
    title: 'Display Cabinets',
    portfolioCategory: 'smaller-projects',
    category: 'Display Cabinets',
    location: 'Singapore',
    year: '2026',
    style: 'Display carpentry',
    accent: '#E9D8C5',
    summary:
      'A focused display cabinet project for organized storage and presentation.',
    scope: ['Display cabinet carpentry', 'Storage planning', 'On-site installation'],
    photos: [
      projectPhoto(
        'Display cabinet view 1',
        'A completed view of the display cabinet installation.',
        'Smaller Projects/DISPLAY CABINETS/IMG-20260307-WA0041.jpg',
      ),
      projectPhoto(
        'Display cabinet view 2',
        'A supporting view showing the display cabinet proportions.',
        'Smaller Projects/DISPLAY CABINETS/IMG-20260307-WA0042.jpg',
      ),
      projectPhoto(
        'Display cabinet view 3',
        'A closer view of the storage and display details.',
        'Smaller Projects/DISPLAY CABINETS/IMG-20260307-WA0043.jpg',
      ),
      projectPhoto(
        'Display cabinet view 4',
        'Final display cabinet details after installation.',
        'Smaller Projects/DISPLAY CABINETS/IMG-20260307-WA0045.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'custom-l-shape-wardrobe',
    title: 'Custom L-Shape Wardrobe',
    portfolioCategory: 'smaller-projects',
    category: 'Custom Wardrobe',
    location: 'Singapore',
    year: '2026',
    style: 'L-shape storage',
    accent: '#BFA083',
    summary:
      'An L-shape wardrobe project planned around corner storage, access, and practical bedroom organization.',
    scope: ['L-shape wardrobe', 'Bedroom storage planning', 'Custom carpentry installation'],
    photos: [
      projectPhoto(
        'L-shape wardrobe view 1',
        'A completed L-shape wardrobe view showing storage layout.',
        'Smaller Projects/CUSTOM L-SHAPE WARDROBE/Screenshot_20260301_211108_WeChat.jpg',
      ),
      projectPhoto(
        'L-shape wardrobe view 2',
        'A supporting angle showing cabinetry proportions and access.',
        'Smaller Projects/CUSTOM L-SHAPE WARDROBE/Screenshot_20260301_211058_WeChat.jpg',
      ),
      projectPhoto(
        'L-shape wardrobe view 3',
        'A detail view of the wardrobe layout and finish.',
        'Smaller Projects/CUSTOM L-SHAPE WARDROBE/Screenshot_20260301_211115_WeChat.jpg',
      ),
      projectPhoto(
        'L-shape wardrobe view 4',
        'Final project angle of the custom L-shape wardrobe.',
        'Smaller Projects/CUSTOM L-SHAPE WARDROBE/Screenshot_20260301_211149_WeChat.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'kids-loft-bed-with-slide',
    title: 'Kids Loft Bed with Slide',
    portfolioCategory: 'smaller-projects',
    category: 'Kids Loft Bed',
    location: 'Singapore',
    year: '2026',
    style: 'Playful carpentry',
    accent: '#E2CCB6',
    summary:
      'A custom kids loft bed with slide designed around play, sleep, and compact room function.',
    scope: ['Kids loft bed', 'Slide feature', 'Custom bedroom carpentry'],
    photos: [
      projectPhoto(
        'Loft bed view 1',
        'A completed view of the custom kids loft bed and slide.',
        'Smaller Projects/KIDS LOFT BED WITH SLIDE/IMG-20260627-WA0050.jpg',
      ),
      projectPhoto(
        'Loft bed view 2',
        'A second angle showing the loft bed structure and play feature.',
        'Smaller Projects/KIDS LOFT BED WITH SLIDE/IMG-20260627-WA0051.jpg',
      ),
      projectPhoto(
        'Loft bed view 3',
        'A final view documenting the custom kids bedroom installation.',
        'Smaller Projects/KIDS LOFT BED WITH SLIDE/IMG-20260627-WA0052.jpg',
      ),
    ],
  }),
  createProject({
    slug: 'walk-in-cabinet-newtown',
    title: 'Walk-In Cabinet @ Newtown',
    portfolioCategory: 'smaller-projects',
    category: 'Walk-In Cabinet',
    location: 'Newtown',
    year: '2026',
    style: 'Walk-in storage',
    accent: '#BFA384',
    summary:
      'A walk-in cabinet project with structured storage, accessible compartments, and clean carpentry lines.',
    scope: ['Walk-in cabinet', 'Storage compartment planning', 'Custom cabinet installation'],
    photos: [
      projectPhoto(
        'Walk-in cabinet view 1',
        'A completed view of the walk-in cabinet storage works.',
        'Smaller Projects/WALK IN CABINET @ NEWTOWN/NEWTOWN CABINET/3.jpeg',
      ),
      projectPhoto(
        'Walk-in cabinet view 2',
        'A second view showing the cabinet layout and compartments.',
        'Smaller Projects/WALK IN CABINET @ NEWTOWN/NEWTOWN CABINET/2.jpeg',
      ),
      projectPhoto(
        'Walk-in cabinet view 3',
        'Final cabinet detail documenting the completed installation.',
        'Smaller Projects/WALK IN CABINET @ NEWTOWN/NEWTOWN CABINET/1.jpeg',
      ),
    ],
  }),
]

export const reviews: Review[] = [
  {
    name: 'Sarah T.',
    project: 'Bishan, HDB 4-Room',
    quote:
      'Castorea understood what we wanted for our home very quickly. The final space feels warm, practical, and very easy for daily living.',
    stars: 5,
  },
  {
    name: 'Marcus L.',
    project: 'Clementi, Condominium',
    quote:
      'The team was patient and organised throughout the reno. Updates were clear, and we did not need to keep chasing for progress.',
    stars: 5,
  },
  {
    name: 'Priya R.',
    project: 'Bukit Timah, Landed',
    quote:
      'They managed to keep the design elegant without making it feel too showroom-like. Guests always ask who did up the place.',
    stars: 5,
  },
  {
    name: 'Jia H.',
    project: 'Serangoon, HDB 5-Room',
    quote:
      'The whole process was smooth and quite fuss-free. The home still feels like us, just more polished and better planned.',
    stars: 5,
  },
  {
    name: 'Hannah C.',
    project: 'Novena, Condominium',
    quote:
      'They gave honest suggestions and explained the options clearly. We felt assured at every stage, and the end result was worth it.',
    stars: 5,
  },
  {
    name: 'Kelvin W.',
    project: 'Pasir Ris, HDB 4-Room',
    quote:
      'We appreciated the transparent timeline and steady coordination. The workmanship came out neat, and the final handover was very thorough.',
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
    media: [
      { label: 'Site photos', image: understandingNeeds1 },
      { label: 'Floor plan', image: understandingNeeds2 },
      { label: 'Design proposals', image: understandingNeeds3 },
    ],
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
    media: [
      { label: 'Render photo 1', image: visualisation1 },
      { label: 'Render photo 2', image: visualisation2 },
    ],
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
    media: [{ label: 'Completion photo', image: completionPhoto }],
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
    title: 'Comfort in Every Detail',
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
