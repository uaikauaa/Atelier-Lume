import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Preloader.css'

const SESSION_KEY = 'atelier-lume-preloaded'

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY)
    if (alreadyShown) return
    setShouldRender(true)
    sessionStorage.setItem(SESSION_KEY, 'true')
  }, [])

  useEffect(() => {
    if (!shouldRender || !rootRef.current || !nameRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.style.overflow = 'hidden'

    if (prefersReducedMotion) {
      setShouldRender(false)
      document.body.style.overflow = ''
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setShouldRender(false)
      },
    })

    tl.fromTo(
      nameRef.current.querySelectorAll('.pre-letter'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.045, ease: 'power3.out' }
    )
      .to(nameRef.current, { opacity: 0, duration: 0.5, delay: 0.5, ease: 'power2.inOut' })
      .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.1')

    return () => {
      tl.kill()
    }
  }, [shouldRender])

  if (!shouldRender) return null

  const letters = 'ATELIER LUME'.split('')

  return (
    <div className="preloader" ref={rootRef} role="presentation" aria-hidden="true">
      <div className="preloader__name" ref={nameRef}>
        {letters.map((letter, i) => (
          <span className="pre-letter" key={i}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  )
}
