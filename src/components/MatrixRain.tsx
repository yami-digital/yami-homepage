import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01アBCDE#$%&<>{}[]|'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const SIZE = 15
    let drops: number[] = []
    let animId: number

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / SIZE)
      drops = Array.from({ length: cols }, () => Math.random() * -100)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 14, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const bright = Math.random() > 0.92
        ctx.fillStyle = bright ? '#a5b4fc' : '#3730a3'
        ctx.font = `${SIZE}px monospace`
        ctx.fillText(
          CHARS[Math.floor(Math.random() * CHARS.length)],
          i * SIZE,
          drops[i] * SIZE,
        )
        if (drops[i] * SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    animId = requestAnimationFrame(draw)

    const onResize = () => { init() }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} />
}
