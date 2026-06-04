const CARDS = [
  {
    icon: '🌐',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    title: 'Web Applications',
    desc: 'Modern, performant SPAs and full-stack platforms built with React, TypeScript, and cloud-native backends.',
  },
  {
    icon: '📱',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.1)',
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android experiences with React Native, shipped fast without sacrificing quality.',
  },
  {
    icon: '🛠️',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    title: 'Developer Tools',
    desc: 'CLIs, SDKs, and internal tooling that make engineering teams move faster and ship with confidence.',
  },
  {
    icon: '☁️',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.1)',
    title: 'Cloud Infrastructure',
    desc: 'Scalable, observable, and cost-efficient infra on AWS/GCP with Terraform, Docker, and CI/CD pipelines.',
  },
  {
    icon: '🤖',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    title: 'AI Integration',
    desc: 'Embedding LLMs and intelligent automation into products — from prompt engineering to production APIs.',
  },
  {
    icon: '🔒',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.1)',
    title: 'Security & Auth',
    desc: 'Auth flows, access control, and security audits built into the product from day one.',
  },
]

export default function FocusGrid() {
  return (
    <section>
      <p className="section-label">// what we build</p>
      <h2 className="section-title">Full-stack software, end to end.</h2>
      <div className="cards-grid">
        {CARDS.map(c => (
          <div className="card" key={c.title}>
            <div className="card-icon" style={{ background: c.bg, color: c.color }}>
              {c.icon}
            </div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
