import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="section-pad-lg">
      <div className="shell flex flex-col items-center text-center gap-6">
        <p className="eyebrow text-accent">Page not found</p>
        <h1 className="display-hero font-serif text-ink">We could not find that page.</h1>
        <p className="body-lg text-muted max-w-xl">
          Return to the homepage or explore the portfolio for inspiration.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
          <Link to="/portfolio" className="btn-outline">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
