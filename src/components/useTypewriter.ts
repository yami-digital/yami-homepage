import { useState, useEffect, useRef } from 'react'

export function useTypewriter(phrases: string[], typingMs = 70, pauseMs = 2400, deleteMs = 35) {
  const [text, setText] = useState('')
  const state = useRef({ phrase: 0, char: 0, deleting: false, pausing: false })

  useEffect(() => {
    const s = state.current
    const current = phrases[s.phrase]

    if (s.pausing) return

    const delay = s.deleting ? deleteMs : typingMs

    const id = setTimeout(() => {
      if (!s.deleting) {
        s.char++
        setText(current.slice(0, s.char))
        if (s.char === current.length) {
          s.pausing = true
          setTimeout(() => { s.pausing = false; s.deleting = true }, pauseMs)
        }
      } else {
        s.char--
        setText(current.slice(0, s.char))
        if (s.char === 0) {
          s.deleting = false
          s.phrase = (s.phrase + 1) % phrases.length
        }
      }
    }, delay)

    return () => clearTimeout(id)
  })

  return text
}
