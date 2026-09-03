import { useState, type FormEvent } from 'react'
import { buildWhatsappLink } from '../../data/siteConfig'
import './ContactForm.css'

interface FormState {
  name: string
  email: string
  phone: string
  city: string
  projectType: string
  budget: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  projectType: '',
  budget: '',
  message: '',
}

const projectTypes = ['Residencial', 'Interiores', 'Comercial', 'Outro']
const budgetRanges = [
  'Até R$ 200 mil',
  'R$ 200 mil — R$ 500 mil',
  'R$ 500 mil — R$ 1 milhão',
  'Acima de R$ 1 milhão',
  'Prefiro conversar sobre isso',
]

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Informe seu nome.'
    if (!form.email.trim()) {
      next.email = 'Informe um e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Informe um e-mail válido.'
    }
    if (!form.phone.trim()) next.phone = 'Informe um telefone.'
    if (!form.city.trim()) next.city = 'Informe a cidade do projeto.'
    if (!form.projectType) next.projectType = 'Selecione o tipo de projeto.'
    if (!form.budget) next.budget = 'Selecione uma faixa de investimento.'
    if (!form.message.trim()) next.message = 'Conte um pouco sobre o projeto.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const message = [
      'Olá, Atelier Lume! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto.',
      '',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      `Cidade do projeto: ${form.city}`,
      `Tipo de projeto: ${form.projectType}`,
      `Faixa de investimento: ${form.budget}`,
      `Mensagem: ${form.message}`,
    ].join('\n')

    window.open(buildWhatsappLink(message), '_blank', 'noreferrer')
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__grid">
        <Field label="Nome" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
          />
        </Field>

        <Field label="E-mail" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
          />
        </Field>

        <Field label="Telefone" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Cidade do projeto" error={errors.city}>
          <input
            type="text"
            value={form.city}
            onChange={(e) => update('city', e.target.value)}
            aria-invalid={!!errors.city}
          />
        </Field>

        <Field label="Tipo de projeto" error={errors.projectType}>
          <select
            value={form.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={!!errors.projectType}
          >
            <option value="" disabled>Selecione</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <Field label="Faixa aproximada de investimento" error={errors.budget}>
          <select
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            aria-invalid={!!errors.budget}
          >
            <option value="" disabled>Selecione</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensagem" error={errors.message} full>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
        />
      </Field>

      <button type="submit" className="btn-solid contact-form__submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  )
}

function Field({
  label,
  error,
  children,
  full,
}: {
  label: string
  error?: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <label className={`contact-form__field ${full ? 'contact-form__field--full' : ''}`}>
      <span className="contact-form__label">{label}</span>
      {children}
      {error && <span className="contact-form__error" role="alert">{error}</span>}
    </label>
  )
}
