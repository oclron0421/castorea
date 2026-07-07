import {
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Gem,
  Hammer,
  Headphones,
  HeartHandshake,
  Home,
  Ruler,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import cabinetryIntro from '../assets/cabinetryIntro.jpg'
import { contact } from '../data/siteData'

type IconCard = {
  icon: LucideIcon
  title: string
  description: string
  note?: string
}

const materials = [
  {

    title: 'E0 emission level',
    description: 'Zero formaldehyde cabinetry panels selected for healthier, long-lasting interiors.',
  },
  {
    
    title: 'Solid Woodboard',
    description: 'Superb strength and stability for built-ins that need to hold up to daily use.',
  },
  {
    
    title: 'Premium veneer laminate',
    description: 'A refined finishing layer with depth, texture, and a polished furniture-grade look.',
  },
]

const process = [
  {
    title: 'Consultation',
    description: 'Understanding your needs, lifestyle, and budget before any design decisions are made.',
  },
  {
    title: 'Space planning',
    description: 'Optimising every inch for functionality, movement, storage, and aesthetic balance.',
  },
  {
    title: 'Material selection',
    description: 'Guidance across premium laminate, real wood veneers, quartz, stone, and finishing details.',
  },
  {
    title: 'Installation',
    description: 'Professional installation with strict quality control from site preparation to handover.',
  },
]

const benefits: IconCard[] = [
  {
    icon: Home,
    title: 'Built specifically for your home',
    description: 'Every cabinet is measured, planned, and fabricated around your exact layout, routines, and storage habits.',
    note: 'Made to fit, not forced to fit',
  },
  {
    icon: Ruler,
    title: 'Better space utilisation',
    description: 'Awkward corners, tall walls, and narrow walkways become useful storage zones without making the room feel heavy.',
    note: 'Smarter use of every inch',
  },
  {
    icon: ShieldCheck,
    title: 'Superior quality',
    description: 'Quality plywood, precise carpentry, and careful installation give your built-ins better strength and everyday reliability.',
    note: 'Built for daily Singapore living',
  },
  {
    icon: Sparkles,
    title: 'Premium finishing',
    description: 'Thoughtful profiles, laminate direction, edge details, and hardware choices create a cleaner, more refined final look.',
    note: 'Details that feel considered',
  },
]

const promises: IconCard[] = [
  {
    icon: HeartHandshake,
    title: 'Customer needs first',
    description: 'We listen closely before proposing layouts, finishes, and budgets so the final plan supports how you actually live.',
  },
  {
    icon: FileText,
    title: 'Transparent quotation',
    description: 'Scope, materials, and pricing are clearly presented so you can make decisions with confidence.',
  },
  {
    icon: Hammer,
    title: 'Premium workmanship',
    description: 'Each detail is handled with care, from fabrication accuracy to alignment, closing gaps, and finishing checks.',
  },
  {
    icon: BadgeCheck,
    title: 'No hidden cost',
    description: 'We keep variations and approvals clear, with no surprise add-ons quietly appearing at the end.',
  },
  {
    icon: ClipboardCheck,
    title: 'Professional project management',
    description: 'Your project is coordinated with practical timelines, site checks, and clear communication through each stage.',
  },
  {
    icon: Headphones,
    title: 'After-sales support',
    description: 'After handover, we remain available for support so your cabinetry keeps performing the way it should.',
  },
]

const Cabinetry = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.35),transparent_55%)]" />
        <div className="shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="flex flex-col gap-6">
            <p className="eyebrow text-accent">Premium cabinetry</p>
            <h1 className="display-hero font-serif text-ink">
              Custom cabinets built with
              <span className="text-accent"> precision and purpose</span>
            </h1>
            <p className="body-lg text-muted max-w-2xl">
              Tailored storage, premium finishing, and thoughtful detailing for homes that need every inch to work beautifully.
            </p>
            <Link to="/book" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-subtle bg-surface shadow-soft">
            <img
              src={cabinetryIntro}
              alt="Custom home cabinetry by Castorea"
              className="h-full min-h-96 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Materials used"
            title={
              <>
                Premium foundations for
                <span className="text-accent"> lasting cabinetry</span>
              </>
            }
            description="Every selection balances safety, strength, and a refined finish suited to everyday use."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material) => (
              <article key={material.title} className="rounded-3xl border border-subtle bg-bg p-6 sm:p-7 shadow-soft text-center flex min-h-48 flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-ink">{material.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{material.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-alt">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Our process"
            title={
              <>
                A clear path from
                <span className="text-accent"> brief to installation</span>
              </>
            }
            description="We keep each cabinetry project practical, transparent, and carefully managed from the first conversation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-ink text-bg text-xs font-semibold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Step</p>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
          <div className="rounded-3xl border border-subtle bg-surface p-7 sm:p-8 shadow-soft flex flex-col justify-between gap-8">
            <SectionHeader
              eyebrow="Premium material"
              title={
                <>
                  Material details with
                  <span className="text-accent"> a refined finish</span>
                </>
              }
              description="A dedicated material photo gallery will be added here."
            />
          </div>
          <div className="grid grid-cols-2 gap-4 min-h-80">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-dashed border-subtle bg-surface-alt/70"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Portfolio"
            title={
              <>
                Cabinetry projects in
                <span className="text-accent"> a clean grid</span>
              </>
            }
            description="Project photos will be added here in a grid layout."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] rounded-3xl border border-dashed border-subtle bg-bg"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-pad bg-surface-alt">
        <div className="shell flex flex-col gap-10">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] items-stretch">
            <div className="rounded-3xl border border-subtle bg-ink p-7 sm:p-9 shadow-soft text-bg flex flex-col justify-between gap-10 overflow-hidden relative">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full border border-bg/10" />
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full border border-bg/15" />
              <SectionHeader
                eyebrow="Why premium cabinetry"
                title={
                  <><span className="text-accent">
                    Built-ins made for
                     how you live</span>
                  </>
                }
                description="Premium cabinetry gives your home better fit, stronger structure, and a finish that feels considered from the first touch."
                className="relative [&_h2]:text-bg [&_p:last-child]:text-bg-soft"
              />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-bg/15 bg-white/5 p-5">
                  <p className="font-serif text-4xl text-accent">4</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.26em] text-bg-soft">Core advantages</p>
                </div>
                <div className="rounded-3xl border border-bg/15 bg-white/5 p-5">
                  <Gem className="h-8 w-8 text-accent" aria-hidden="true" />
                  <p className="mt-4 text-xs uppercase tracking-[0.26em] text-bg-soft">Premium finish</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit) => {
                const Icon = benefit.icon

                return (
                  <article
                    key={benefit.title}
                    className="group rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="h-12 w-12 rounded-2xl bg-bg text-accent flex items-center justify-center border border-subtle">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {benefit.note && (
                        <span className="rounded-full border border-subtle px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                          {benefit.note}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
                      <p className="mt-3 text-sm text-muted leading-relaxed">{benefit.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Our promise"
            title={
              <>
                Clear, careful service
                <span className="text-accent"> from start to aftercare</span>
              </>
            }
            description="We manage each project with practical communication, quality checks, and a commitment to your needs."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {promises.map((promise, index) => {
              const Icon = promise.icon

              return (
                <article
                  key={promise.title}
                  className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="h-12 w-12 rounded-full bg-ink text-bg flex items-center justify-center">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{promise.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{promise.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-bg">
        <div className="shell">
          <div className="rounded-4xl border border-subtle bg-linear-to-br from-white/0 via-white/0 to-white/5 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <p className="eyebrow text-accent">Contact us</p>
              <h2 className="display font-serif text-bg">
                Plan your custom
                <span className="text-accent"> cabinetry project</span>
              </h2>
              <p className="body-lg text-bg-soft">
                Tell us about your space, storage needs, and preferred finishes. We will help map out the next step.
              </p>
              <div className="flex flex-col gap-2 text-sm text-bg-soft">
                <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/book" className="btn-light">
                Book Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline-light">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cabinetry