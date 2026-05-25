import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  children,
}: SectionHeaderProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  const actions = align === 'center' ? 'justify-center' : 'justify-start'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className ?? ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display font-serif text-ink">{title}</h2>
      {description && <p className="body-lg text-muted max-w-2xl">{description}</p>}
      {children && <div className={`flex flex-wrap gap-3 ${actions}`}>{children}</div>}
    </div>
  )
}

export default SectionHeader
