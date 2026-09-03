import { useCallback, useRef, useState } from 'react'
import './BeforeAfter.css'

interface BeforeAfterProps {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfter({ before, after, beforeAlt, afterAlt }: BeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }

  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - 3))
    } else if (e.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + 3))
    } else if (e.key === 'Home') {
      setPosition(0)
    } else if (e.key === 'End') {
      setPosition(100)
    }
  }

  return (
    <div className="before-after" ref={containerRef}>
      <div className="before-after__layer before-after__layer--before">
        <img src={before} alt={beforeAlt} loading="lazy" />
        <span className="before-after__label before-after__label--before">Antes</span>
      </div>

      <div className="before-after__layer before-after__layer--after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={after} alt={afterAlt} loading="lazy" />
        <span className="before-after__label before-after__label--after">Depois</span>
      </div>

      <div
        className="before-after__handle"
        style={{ left: `${position}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Controle de comparação entre antes e depois"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
      >
        <span className="before-after__grip" aria-hidden="true">
          <span />
          <span />
        </span>
      </div>
    </div>
  )
}
