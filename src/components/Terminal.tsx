import { useEffect, useState } from 'react'

type Line =
  | { type: 'cmd'; prompt: string; text: string; delay: number }
  | { type: 'out'; text: string; delay: number; color?: 'success' | 'cyan' | 'accent' | 'muted' }

const SCRIPT: Line[] = [
  { type: 'cmd', prompt: '~/yami-digital', text: 'git clone git@github.com:yami-digital/core.git', delay: 0 },
  { type: 'out', text: "Cloning into 'core'...", delay: 900 },
  { type: 'out', text: 'remote: Counting objects: 2048, done.', delay: 1100, color: 'muted' },
  { type: 'out', text: 'Resolving deltas: 100% (1874/1874), done.', delay: 1300, color: 'muted' },
  { type: 'cmd', prompt: '~/yami-digital/core', text: 'npm run build', delay: 1800 },
  { type: 'out', text: '▶  vite build', delay: 2600, color: 'cyan' },
  { type: 'out', text: '✓  1024 modules transformed.', delay: 3000, color: 'success' },
  { type: 'out', text: '✓  dist/assets/index-DkFxLyRc.js  142.8 kB │ gzip: 45.1 kB', delay: 3200, color: 'success' },
  { type: 'cmd', prompt: '~/yami-digital/core', text: 'npm run deploy', delay: 4000 },
  { type: 'out', text: '🚀  Deploying to production...', delay: 4700, color: 'accent' },
  { type: 'out', text: '✓  Deployed in 3.2s  →  https://yami.digital', delay: 5500, color: 'success' },
]

export default function Terminal() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= SCRIPT.length) {
      const reset = setTimeout(() => setVisible(0), 3500)
      return () => clearTimeout(reset)
    }
    const next = SCRIPT[visible]
    const id = setTimeout(() => setVisible(v => v + 1), next.delay + (visible > 0 ? SCRIPT[visible - 1].delay : 0) === next.delay ? 800 : 500)
    return () => clearTimeout(id)
  }, [visible])

  useEffect(() => {
    if (visible >= SCRIPT.length) return
    const id = setTimeout(() => setVisible(v => v + 1), 800)
    return () => clearTimeout(id)
  }, [visible])

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
        </div>
        <span className="terminal-title">bash — yami-digital</span>
      </div>
      <div className="terminal-body">
        {SCRIPT.slice(0, visible).map((line, i) =>
          line.type === 'cmd' ? (
            <div key={i} className="terminal-line">
              <span className="prompt">{line.prompt} $</span>
              <span className="cmd">{line.text}</span>
            </div>
          ) : (
            <div key={i} className={`terminal-line output-line ${line.color ? `hl-${line.color}` : ''}`}>
              {line.text}
            </div>
          )
        )}
        {visible < SCRIPT.length && (
          <div className="terminal-line">
            <span className="prompt">{SCRIPT[visible].type === 'cmd' ? (SCRIPT[visible] as Extract<Line, {type:'cmd'}>).prompt + ' $' : ''}</span>
            <span className="cursor" style={{ display: 'inline-block', width: 8, height: 15, background: 'var(--accent)', borderRadius: 1, verticalAlign: 'text-bottom', animation: 'blink 1s step-end infinite' }} />
          </div>
        )}
      </div>
    </div>
  )
}
