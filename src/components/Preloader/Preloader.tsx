import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Preloader.css'

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current || !nameRef.current) return

    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        window.scrollTo(0, 0)
        setShouldRender(false)
      },
    })

    tl.fromTo(
      nameRef.current.querySelectorAll('.pre-letter'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.045, ease: 'power3.out' }
    )
      .to(nameRef.current, { opacity: 0, duration: 0.5, delay: 0.45, ease: 'power2.inOut' })
      .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.1')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  if (!shouldRender) return null

  const letters = 'ATELIER LUME'.split('')

  return (
    <div
      className="preloader"
      ref={rootRef}
      role="presentation"
      aria-hidden="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
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

