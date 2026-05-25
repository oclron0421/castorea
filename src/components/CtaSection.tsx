import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type CtaLink = {
  label: string
  to: string
}

type CtaSectionProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  primary: CtaLink
  secondary?: CtaLink
  tone?: 'dark' | 'light'
}

const CtaSection = ({
  eyebrow = 'Ready to begin',
  title,
  description,
  primary,
  secondary,
  tone = 'dark',
}: CtaSectionProps) => {
  const isDark = tone === 'dark'

  return (
    <section className={`section-pad ${isDark ? 'bg-ink text-bg' : 'bg-surface-alt text-ink'}`}>
      <div className="shell relative">
        <div
          className="absolute -top-10 right-6 h-24 w-24 rounded-full blur-2xl"
          style={{ backgroundColor: 'rgba(197, 154, 106, 0.25)' }}
        />
        <div
          className="absolute bottom-6 left-10 h-20 w-20 rounded-full blur-2xl"
          style={{ backgroundColor: 'rgba(197, 154, 106, 0.35)' }}
        />

        <div
          className="relative rounded-4xl border border-subtle bg-linear-to-br from-white/0 via-white/0 to-white/5 p-8 sm:p-12 lg:p-14 text-center flex flex-col items-center gap-6"
          style={{ borderColor: 'rgba(228, 216, 205, 0.4)' }}
        >
          <p className={`eyebrow ${isDark ? 'text-accent' : 'text-accent'}`}>{eyebrow}</p>
          <h2 className={`display font-serif ${isDark ? 'text-bg' : 'text-ink'}`}>{title}</h2>
          {description && (
            <p className={`body-lg ${isDark ? 'text-bg-soft' : 'text-muted'} max-w-2xl`}>
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={primary.to} className={isDark ? 'btn-light' : 'btn-primary'}>
              {primary.label}
            </Link>
            {secondary && (
              <Link to={secondary.to} className={isDark ? 'btn-outline-light' : 'btn-outline'}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
