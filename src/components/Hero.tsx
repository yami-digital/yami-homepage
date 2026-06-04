import MatrixRain from './MatrixRain'
import { useTypewriter } from './useTypewriter'

const PHRASES = [
  'ship software that matters.',
  'build for the long run.',
  'write clean, think deep.',
  'open source. production ready.',
]

export default function Hero() {
  const typed = useTypewriter(PHRASES)

  return (
    <div className="hero">
      <MatrixRain />
      <div className="hero-gradient" />

      <div className="hero-content">
        <div className="hero-logo">YDL</div>

        <h1>
          YAMI <span>Digital Lab</span>
        </h1>

        <p className="hero-tagline">
          <span>// </span>
          {typed}
          <span className="cursor" />
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="https://github.com/orgs/yami-digital" target="_blank" rel="noreferrer">
            <GitHubIcon />
            View on GitHub
          </a>
          <a className="btn btn-secondary" href="mailto:dev@yamidigital.com">
            <MailIcon />
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  )
}
