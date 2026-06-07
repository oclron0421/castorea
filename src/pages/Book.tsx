import { useState } from 'react'
import CtaSection from '../components/CtaSection'
import SectionHeader from '../components/SectionHeader'
import { contact, formspreeEndpoint } from '../data/siteData'

const Book = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'email' | 'error'>('idle')
  const [projectType, setProjectType] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('company')) {
      return
    }

    if (!formspreeEndpoint) {
      const details = [
        `Name: ${String(formData.get('name') ?? '')}`,
        `Email: ${String(formData.get('email') ?? '')}`,
        `Phone: ${String(formData.get('phone') ?? '')}`,
        `Preferred contact: ${String(formData.get('contactMethod') ?? '')}`,
        `Project type: ${String(formData.get('projectType') ?? '')}`,
        `Budget: ${String(formData.get('budget') ?? '')}`,
        
        '',
        String(formData.get('message') ?? ''),
      ].join('\n')

      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        'Castorea consultation request',
      )}&body=${encodeURIComponent(details)}`
      setStatus('email')
      return
    }

    try {
      setStatus('sending')
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.3),transparent_55%)]" />
        <div className="shell relative flex flex-col gap-6">
          <p className="eyebrow text-accent">Book a consultation</p>
          <h1 className="display-hero font-serif text-ink">
            Tell us about your space and
            <span className="text-accent"> we will guide the rest</span>
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            Share your project details and preferred contact method. We will reply within 2 business days.
          </p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-3xl border border-subtle bg-surface p-6 sm:p-8 shadow-soft">
            <SectionHeader
              eyebrow="Consultation form"
              title={<>Project details</>}
              description="Share a few details about your home, timeline, and preferred way to be contacted."
            />

            <form
              onSubmit={handleSubmit}
              action={formspreeEndpoint || undefined}
              method="POST"
              encType="multipart/form-data"
              className="mt-8 flex flex-col gap-5"
            >
              <input
                type="text"
                name="company"
                className="sr-only"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="input-field"
                    placeholder="+65 9123 4567"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Preferred Contact
                  <select name="contactMethod" required className="input-field">
                    <option value="">Select an option</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Project Type
                  <select
                    name="projectType"
                    required
                    className="input-field"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="HDB-resale-reno">HDB Resale Renovation</option>
                    <option value="condo-reno">Condominium Renovation</option>
                    <option value="BTO-reno">BTO Renovation</option>
                    <option value="contractor">Contractor Services only</option>
                    <option value="commerical">Commercial</option>
                    <option value="landed-reno">Landed Property Renovation</option>
                    <option value="others">Others</option>
                  </select>
                  {projectType === 'others' && (
                    <input
                      type="text"
                      name="projectTypeOther"
                      className="input-field mt-2"
                      placeholder="Please specify"
                      required
                    />
                  )}
                </label>
                
                <label className="flex flex-col gap-2 text-sm text-ink">
                  Project Timeline
                  <select name="timeline" required className="input-field">
                    <option value="">Select an option</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="3-4months">3-4 months</option>
                    <option value="5+months">5+ months</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm text-ink">
                  Budget Range
                  <select name="budget" required className="input-field">
                    <option value="">Select an option</option>
                    <option value="S$5k-10k">S$5k - S$10k</option>
                    <option value="S$10k-25k">S$10k - S$25k</option>
                    <option value="S$25k-50k">S$25k - S$50k</option>
                    <option value="S$50k+">S$50k+</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-ink sm:col-span-2">
                  Any design preferences or lifestyle considerations?
                  <input
                    type="text"
                    name="designPreferences"
                    required
                    className="input-field"
                    placeholder="Any specific styles or features you like?"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-ink">
                Add moodboards, floor plans or any documents you'd like us to know here
                <input
                  type="file"
                  name="attachments"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt"
                  className="input-field"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-ink">
                Message
                <textarea
                  name="message"
                  required
                  className="input-field min-h-35"
                  placeholder="Tell us about your space and goals"
                />
              </label>

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Submit Consultation'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-accent" aria-live="polite">
                  Thanks for reaching out. We will be in touch soon.
                </p>
              )}
              {status === 'email' && (
                <p className="text-sm text-accent" aria-live="polite">
                  Your email app should open with the project details ready to send.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-muted" aria-live="polite">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-subtle bg-surface-alt p-6 sm:p-7 shadow-soft">
              <p className="eyebrow text-accent">What to expect</p>
              <div className="mt-4 flex flex-col gap-4 text-sm text-muted">
                {[
                  'We review your brief within 2 business days.',
                  'You receive a proposal and project timeline.',
                  'We align on budget, scope, and style direction.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-ink" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft">
              <p className="eyebrow text-accent">Direct contact</p>
              <div className="flex flex-col gap-3 mt-4 text-sm text-muted">
                <a href={`mailto:${contact.email}`} className="link-muted">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="link-muted">
                  {contact.phone}
                </a>
                {contact.whatsapp && (
                  <a href={contact.whatsapp} className="link-muted">
                    WhatsApp us
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

     
      <CtaSection
        eyebrow="Need more inspiration"
        title={
          <>
            Explore the portfolio
            <span className="text-accent"> before you decide</span>
          </>
        }
        description="View the latest projects and save your favorites."
        primary={{ label: 'View Portfolio', to: '/portfolio' }}
        secondary={{ label: 'View Services', to: '/services' }}
        tone="light"
      />
    </>
  )
}

export default Book
