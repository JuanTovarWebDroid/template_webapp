import { useEffect, useMemo, useState } from 'react'
import type { JSX, SVGAttributes } from 'react'

interface VoicesOnStageTemplateProps {
  onBack: () => void
  showBackButton?: boolean
}

type ProgramItem = {
  title: string
  description: string
}

type ServiceItem = {
  title: string
  description: string
  Icon: (props: IconProps) => JSX.Element
}

type Testimonial = {
  quote: string
  attribution: string
}

type FAQItem = {
  id: string
  question: string
  answer: string
}

type ContactInterest = {
  value: string
  label: string
}

type IconProps = SVGAttributes<SVGSVGElement>

const NAV_LINKS = [
  { id: 'home', label: 'Inicio' },
  { id: 'programa', label: 'Programa' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'logros', label: 'Logros' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'evento', label: 'Evento' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
] as const

const PROGRAM_ITEMS: ProgramItem[] = [
  { title: 'Voz y presencia', description: 'Respiración, proyección, dicción y manejo del cuerpo.' },
  { title: 'Storytelling', description: 'Estructura, claridad de ideas y narrativa memorable.' },
  { title: 'Pánico a poder', description: 'Estrategias para el miedo escénico y manejo de nervios.' },
  { title: 'Diseño de charla', description: 'Mensaje, slides esenciales y ritmo.' },
  { title: 'Ensayos guiados', description: 'Prácticas con feedback accionable todas las semanas.' },
  { title: 'Evento final', description: 'Presentación en Voices on Stage frente a público real.' },
]

const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: 'Curso Voices on Stage (10 semanas)',
    description: 'Entrenamiento premium con prácticas reales, feedback y acompañamiento cercano.',
    Icon: StarIcon,
  },
  {
    title: 'Coaching personalizado',
    description: 'Mentoría 1:1 en liderazgo, mentalidad y performance para potenciar tu voz.',
    Icon: UsersIcon,
  },
  {
    title: 'Workshops corporativos',
    description: 'Comunicación para equipos: presentaciones, reuniones y ventas.',
    Icon: MicIcon,
  },
]

const ACHIEVEMENTS = [
  { value: '150+', label: 'Personas formadas' },
  { value: '4', label: 'Ciudades en Australia' },
  { value: '98%', label: 'Satisfacción' },
] as const

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Pasé de temer al escenario a disfrutarlo. La práctica semanal y el feedback marcaron la diferencia.',
    attribution: 'Ana P. · Ingeniera · Sydney',
  },
  {
    quote: 'Descubrí que mi historia puede inspirar y aprendí a contarla sin miedo.',
    attribution: 'Daniel R. · Founder · Melbourne',
  },
  {
    quote: 'El evento final fue inolvidable. Me sentí en un TEDx y ahora doy charlas en mi empresa.',
    attribution: 'Sofía G. · HR Manager · Brisbane',
  },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-experience',
    question: '¿Necesito experiencia previa?',
    answer: 'No. Empezamos desde tu punto actual y diseñamos un plan que te lleve al escenario con confianza.',
  },
  {
    id: 'faq-includes',
    question: '¿Qué incluye el curso?',
    answer: '10 semanas de formación, ensayos guiados, coaching premium y tu presentación final.',
  },
  {
    id: 'faq-city',
    question: '¿Puedo tomarlo desde otra ciudad?',
    answer: 'Sí. Formato híbrido con sesiones online y práctica presencial opcional.',
  },
  {
    id: 'faq-seats',
    question: '¿Cuántos cupos hay?',
    answer: 'Grupo reducido para asegurar acompañamiento cercano.',
  },
]

const CONTACT_INTERESTS: ContactInterest[] = [
  { value: 'miedo-escenico', label: 'Superar miedo escénico' },
  { value: 'charla-profesional', label: 'Dar una charla profesional' },
  { value: 'storytelling-liderazgo', label: 'Storytelling y liderazgo' },
  { value: 'voz-diccion', label: 'Mejorar mi voz y dicción' },
]

const SECTION_CLASS = 'px-6 py-16 md:py-24'
const CARD_CLASS = 'rounded-3xl border border-white/10 bg-white/5 backdrop-blur'

/**
 * Scrolls smoothly to a section inside the template.
 *
 * @param id - The DOM id for the section to reveal.
 * @returns - void
 */
function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Displays the Voices on Stage marketing site template.
 *
 * @param props - Provides handler to navigate back to the template gallery.
 * @returns - The rendered marketing template.
 */
function VoicesOnStageTemplate({ onBack, showBackButton = true }: VoicesOnStageTemplateProps): JSX.Element {
  const [faqOpenId, setFaqOpenId] = useState<string | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    if (formStatus !== 'sending') return
    const timeout = window.setTimeout(() => setFormStatus('sent'), 600)
    return () => window.clearTimeout(timeout)
  }, [formStatus])

  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const isSubmitting = formStatus === 'sending'
  const isSent = formStatus === 'sent'

  return (
    <div className="relative min-h-screen bg-[#0B0B12] text-white">
      {showBackButton ? (
        <button
          type="button"
          onClick={onBack}
          className="group absolute left-6 top-6 z-50 inline-flex w-fit items-center gap-2 rounded-lg border border-cream-300/70 bg-white/80 px-4 py-2 text-sm font-medium text-ink-800 shadow-soft transition duration-200 ease-out hover:border-accent-400 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-800"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4 stroke-current transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
          >
            <path d="M11.25 5.25L6.5 10l4.75 4.75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M7 10h6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          Go Back
        </button>
      ) : null}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FFD700] text-black">
              <MicIcon className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-wide text-white/90">VOICES ON STAGE</span>
            <span className="hidden rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70 md:inline-block">
              Edición 2.0
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-white/75 transition duration-200 ease-out hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => scrollToSection('contacto')}
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FFD700] px-4 py-2 font-semibold text-black shadow md:inline-flex"
          >
            Inscríbete
          </button>
        </div>
      </header>

      <main>
        <section id="home" className={`${SECTION_CLASS} relative overflow-hidden`}>
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF6A00]/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#FFD700]/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_-10%,rgba(255,215,0,0.12),transparent)]" />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Edición 2.0
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
                Tu voz merece un escenario.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Un programa premium de 10 semanas para comunicar con seguridad, autenticidad y liderazgo. Cierre en
              escenario real tipo TED.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 transition duration-200 ease-out hover:bg-white/10"
                href="#programa"
              >
                Ver programa
              </a>
              <a
                className="rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FFD700] px-6 py-3 font-semibold text-black transition duration-200 ease-out hover:brightness-110"
                href="#contacto"
              >
                Reservar mi lugar
              </a>
            </div>
          </div>
        </section>

        <section id="programa" className={SECTION_CLASS}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Voices on Stage: transformación guiada</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {PROGRAM_ITEMS.map((item) => (
                <div key={item.title} className={`${CARD_CLASS} p-6`}>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-[#FFD700]" />
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <p className="mt-1 text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className={SECTION_CLASS}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Formación a tu medida</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {SERVICE_ITEMS.map((item) => (
                <div key={item.title} className={`${CARD_CLASS} p-6`}>
                  <div className="flex items-center gap-3">
                    <item.Icon className="h-5 w-5 text-[#FFD700]" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="logros" className={SECTION_CLASS}>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {ACHIEVEMENTS.map((item) => (
              <div key={item.label} className={`${CARD_CLASS} p-6 text-center`}>
                <div className="text-4xl font-bold text-white">{item.value}</div>
                <div className="text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonios" className={SECTION_CLASS}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Lo que dicen</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <blockquote key={item.attribution} className={`${CARD_CLASS} p-6`}>
                  <p className="text-white/80">“{item.quote}”</p>
                  <footer className="mt-6 text-sm text-white/60">{item.attribution}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="evento" className={SECTION_CLASS}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Evento tipo TED: tu momento</h2>
            <div className={`${CARD_CLASS} p-6`}>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2 text-white/80">
                  <div>🗓 Octubre 2025</div>
                  <div>📍 Gold Coast · Presencial + Streaming</div>
                  <div>👥 10 ponentes (cupos actuales)</div>
                </div>
                <p className="md:col-span-2 text-white/70">
                  Un escenario profesional, curaduría de charlas y producción cuidada. Tu charla será el resultado de 10
                  semanas de trabajo estratégico.
                </p>
              </div>
              <div className="mt-6">
                <a
                  className="inline-block rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FFD700] px-5 py-2.5 font-semibold text-black transition duration-200 ease-out hover:brightness-110"
                  href="#contacto"
                >
                  Quiero estar en el escenario
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className={SECTION_CLASS}>
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => {
              const isOpen = faqOpenId === item.id
              return (
                <div key={item.id} className={`${CARD_CLASS} p-6`}>
                  <button
                    type="button"
                    onClick={() => setFaqOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-white/90">{item.question}</span>
                    <span className={`transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {isOpen ? <p className="mt-3 text-sm text-white/70">{item.answer}</p> : null}
                </div>
              )
            })}
          </div>
        </section>

        <section id="contacto" className={SECTION_CLASS}>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Contacto</h2>
            <div className={`${CARD_CLASS} p-6`}>
              <form
                className="grid gap-4 md:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  if (isSubmitting) return
                  setFormStatus('sending')
                }}
              >
                <input
                  required
                  placeholder="Nombre completo"
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#FF6A00]/60 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#FF6A00]/60 focus:outline-none"
                />
                <input
                  placeholder="Ciudad"
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#FF6A00]/60 focus:outline-none"
                />
                <select
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white focus:border-[#FF6A00]/60 focus:outline-none"
                  defaultValue={CONTACT_INTERESTS[0]?.value}
                >
                  {CONTACT_INTERESTS.map((interest) => (
                    <option key={interest.value} value={interest.value} className="text-black">
                      {interest.label}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={4}
                  placeholder="¿Qué te gustaría lograr en 10 semanas?"
                  className="md:col-span-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#FF6A00]/60 focus:outline-none"
                />
                <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FFD700] px-6 py-3 font-semibold text-black transition duration-200 ease-out hover:brightness-110 disabled:opacity-60"
                  >
                    {isSubmitting ? 'Enviando…' : 'Enviar'}
                  </button>
                  <span className="text-sm text-white/60">Cupos limitados · Programa premium</span>
                </div>
                {isSent ? (
                  <div className="md:col-span-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                    ¡Gracias! Te contactaremos pronto.
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <div>© {currentYear} Voices on Stage. Todos los derechos reservados.</div>
          <div className="text-white/50">Inspira. Comunica. Transforma.</div>
        </div>
      </footer>
    </div>
  )
}

function MicIcon({ className = '', ...props }: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`.trim()}
      {...props}
    >
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <path d="M12 17v5" />
      <path d="M8 22h8" />
    </svg>
  )
}

function UsersIcon({ className = '', ...props }: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`.trim()}
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function StarIcon({ className = '', ...props }: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`.trim()}
      {...props}
    >
      <path d="M12 3 14.09 8.26 20 9.27l-4.5 4.39 1.06 6.18L12 17.77l-4.56 2.07L8.5 13.66 4 9.27l5.91-1.01L12 3Z" />
    </svg>
  )
}

function CheckIcon({ className = '', ...props }: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`.trim()}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default VoicesOnStageTemplate
