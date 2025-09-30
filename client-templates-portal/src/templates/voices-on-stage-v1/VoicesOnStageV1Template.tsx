import { useMemo, useState } from 'react'
import type { JSX, SVGAttributes } from 'react'

interface VoicesOnStageV1TemplateProps {
  onBack: () => void
  showBackButton?: boolean
}

type IconProps = SVGAttributes<SVGSVGElement>

type Feature = {
  title: string
  description: string
}

type Module = {
  title: string
  blurb: string
}

type Testimonial = {
  quote: string
  author: string
}

const HERO_FEATURES: Feature[] = [
  {
    title: 'Mentoría premium',
    description: 'Acompañamiento semanal con feedback accionable y seguimiento personalizado.',
  },
  {
    title: 'Evento final',
    description: 'Presentación en escenario real con producción audiovisual y público invitado.',
  },
  {
    title: 'Comunidad global',
    description: 'Acceso a una red de speakers en Australia, LatAm y Europa.',
  },
]

const PROGRAM_MODULES: Module[] = [
  { title: 'Bases de voz y presencia', blurb: 'Respiración, anclaje corporal y proyección para ganar seguridad.' },
  { title: 'Arquitectura narrativa', blurb: 'Construye historias memorables con inicios potentes y cierres claros.' },
  { title: 'Ensayos guiados', blurb: 'Simulacros grabados, métricas y plan de mejora cada semana.' },
]

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'En 10 semanas pasé de evitar presentaciones a liderar un townhall para 400 personas.',
    author: 'Mariana D. · Product Lead',
  },
  {
    quote: 'Cada sesión tuvo foco y rigor. Terminás con un guion pulido y dominio del escenario.',
    author: 'Luis A. · Consultant',
  },
]

function VoicesOnStageV1Template({ onBack, showBackButton = true }: VoicesOnStageV1TemplateProps): JSX.Element {
  const [sent, setSent] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="relative min-h-screen bg-[#FDF8F1] text-ink-900">
      {showBackButton ? (
        <button
          type="button"
          onClick={onBack}
          className="group absolute left-6 top-6 z-50 inline-flex w-fit items-center gap-2 rounded-lg border border-cream-300/70 bg-white/85 px-4 py-2 text-sm font-medium text-ink-800 shadow-soft transition duration-200 ease-out hover:border-accent-400 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-800 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDF8F1]"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-current transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
          Go Back
        </button>
      ) : null}

      <header className="sticky top-0 z-40 border-b border-cream-300/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFAF6D] via-[#FFD9A3] to-[#FFEACB] text-ink-900">
              <MicIcon className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-wide text-ink-900">Voices on Stage · V1</span>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-ink-700/80 md:flex">
            <AnchorLink id="programa">Programa</AnchorLink>
            <AnchorLink id="experiencia">Experiencia</AnchorLink>
            <AnchorLink id="testimonios">Testimonios</AnchorLink>
            <AnchorLink id="contacto">Contacto</AnchorLink>
          </nav>
          <button
            type="button"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden rounded-lg bg-gradient-to-r from-[#FFAF6D] to-[#FFD9A3] px-4 py-2 text-sm font-semibold text-ink-900 shadow-md transition duration-200 ease-out hover:brightness-105 md:inline-flex"
          >
            Aplicar ahora
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF1E4] via-[#FFF7ED] to-[#FDF8F1] px-6 py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 max-w-4xl rounded-full bg-[#FFE8CD]/60 blur-3xl" />
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFDAB9] bg-white/80 px-3 py-1 text-xs text-ink-700/70">
              Edición 2025 · 10 semanas
            </span>
            <h1 className="mt-5 text-4xl font-semibold text-ink-900 sm:text-5xl">
              Modela tu presencia escénica desde la primera semana
            </h1>
            <p className="mt-4 max-w-2xl text-base text-ink-700/80 sm:text-lg">
              Entrenamiento integral para líderes, founders y equipos que necesitan comunicar con claridad, narrativa y
              confianza. Finaliza con un evento en escenario real.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#programa"
                className="rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-soft transition duration-200 ease-out hover:bg-ink-800"
              >
                Ver plan semanal
              </a>
              <a
                href="#contacto"
                className="rounded-lg border border-ink-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition duration-200 ease-out hover:border-ink-900/30"
              >
                Habla con el equipo
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HERO_FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-cream-300/70 bg-white/90 p-5 text-left shadow-[0_10px_30px_rgba(88,70,40,0.08)]"
              >
                <h3 className="text-base font-semibold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-700/80">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="programa" className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-ink-900">Programa semanal con foco en iteración</h2>
            <p className="mt-3 max-w-3xl text-base text-ink-700/80">
              Cada módulo combina herramientas técnicas, práctica guiada y un plan individual que se ajusta según tus
              métricas de avance.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PROGRAM_MODULES.map((module) => (
                <div key={module.title} className="rounded-2xl border border-cream-300/70 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-ink-900">{module.title}</h3>
                  <p className="mt-2 text-sm text-ink-700/80">{module.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="bg-white px-6 py-16">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-ink-900">Experiencia integral con soporte en vivo</h2>
              <p className="mt-4 text-base text-ink-700/80">
                Selecciona tus objetivos y recibe acompañamiento en sesiones grupales, coaching uno a uno, revisiones de
                guion y clinics de voz. El cierre es un evento tipo TED con producción profesional.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-700/80">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-[#FFAF6D]" />
                  Clínicas de storytelling y slides efectivas
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-[#FFAF6D]" />
                  Feedback inmediato con métricas de progreso
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-[#FFAF6D]" />
                  Librería de recursos para practicar entre sesiones
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2rem] border border-cream-300/80 bg-gradient-to-br from-white via-[#FFF5E9] to-[#FFE7CE] p-8 shadow-[0_20px_50px_rgba(118,97,74,0.2)]">
                <h3 className="text-xl font-semibold text-ink-900">Semana tipo</h3>
                <ol className="mt-4 space-y-3 text-sm text-ink-700/80">
                  <li><strong className="text-ink-900">Lunes:</strong> laboratorio de guion + feedback grupal.</li>
                  <li><strong className="text-ink-900">Miércoles:</strong> coaching 1:1 enfocado en voz y presencia.</li>
                  <li><strong className="text-ink-900">Viernes:</strong> ensayo general grabado y revisión métrica.</li>
                </ol>
                <p className="mt-6 text-sm text-ink-700/70">
                  El evento final se realiza en un teatro boutique con producción audiovisual, fotografía y networking con
                  empresas aliadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-ink-900">Lo que dicen los speakers</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((testimonial) => (
                <figure key={testimonial.author} className="rounded-2xl border border-cream-300/70 bg-white p-6 shadow-sm">
                  <blockquote className="text-base text-ink-800">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-ink-700/80">{testimonial.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-ink-900">Conversemos sobre tu próxima charla</h2>
            <p className="mt-3 max-w-2xl text-base text-ink-700/80">
              Completa el formulario y el equipo coordinará una llamada de diagnóstico para comprender tus metas de
              comunicación.
            </p>
            <form
              className="mt-8 grid gap-4 rounded-2xl border border-cream-300/80 bg-[#FFFDF9] p-6 shadow-[0_12px_40px_rgba(127,102,68,0.12)] md:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault()
                setSent(true)
                window.setTimeout(() => setSent(false), 4000)
              }}
            >
              <input
                required
                placeholder="Nombre completo"
                className="rounded-xl border border-cream-300/70 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#FFAF6D] focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Correo electrónico"
                className="rounded-xl border border-cream-300/70 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#FFAF6D] focus:outline-none"
              />
              <input
                placeholder="Ciudad / País"
                className="rounded-xl border border-cream-300/70 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#FFAF6D] focus:outline-none"
              />
              <select
                className="rounded-xl border border-cream-300/70 bg-white px-3 py-2 text-sm text-ink-900 focus:border-[#FFAF6D] focus:outline-none"
                defaultValue="miedo-escenico"
              >
                <option value="miedo-escenico">Superar miedo escénico</option>
                <option value="estructura-charla">Estructurar una charla</option>
                <option value="voz-presencia">Mejorar voz y presencia</option>
                <option value="equipo-corporativo">Entrenamiento para mi equipo</option>
              </select>
              <textarea
                rows={4}
                placeholder="Cuéntanos qué te gustaría lograr"
                className="md:col-span-2 rounded-xl border border-cream-300/70 bg-white px-3 py-2 text-sm text-ink-900 placeholder:text-ink-400 focus:border-[#FFAF6D] focus:outline-none"
              />
              <div className="md:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-[#FFAF6D] to-[#FFD9A3] px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-md transition duration-200 ease-out hover:brightness-105"
                >
                  Enviar
                </button>
                <span className="text-sm text-ink-600/80">Cupos limitados · Programa premium</span>
              </div>
              {sent ? (
                <div className="md:col-span-2 rounded-xl border border-emerald-400/40 bg-emerald-400/15 px-3 py-2 text-sm text-emerald-700">
                  ¡Gracias! Te contactaremos en las próximas 48 horas.
                </div>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-cream-300/80 bg-white/90 py-10 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-600 md:flex-row">
          <div>© {year} Voices on Stage. Todos los derechos reservados.</div>
          <div className="text-ink-500">Inspira · Comunica · Transforma</div>
        </div>
      </footer>
    </div>
  )
}

function AnchorLink({ id, children }: { id: string; children: React.ReactNode }): JSX.Element {
  return (
    <button
      type="button"
      onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      className="rounded-md px-3 py-1.5 transition duration-200 ease-out hover:bg-white/40 hover:text-ink-900"
    >
      {children}
    </button>
  )
}

function ArrowLeftIcon(props: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.25 5.25 6.5 10l4.75 4.75" />
      <path d="M7 10h6.5" />
    </svg>
  )
}

function MicIcon(props: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v5" />
      <path d="M8 22h8" />
    </svg>
  )
}

function CheckIcon(props: IconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6.5 10 2.25 2.25L13.5 7.5" />
    </svg>
  )
}

export default VoicesOnStageV1Template
