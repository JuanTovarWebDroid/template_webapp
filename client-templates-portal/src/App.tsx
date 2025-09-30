import { useId, useMemo, useState } from 'react'

import ClientAccessPage from './pages/ClientAccessPage'
import TemplatePreviewPage, {
  TEMPLATE_LABEL,
  TEMPLATE_TITLE,
} from './pages/TemplatePreviewPage'
import type { TemplateSummary } from './pages/TemplatePreviewPage'
import { VoicesOnStageTemplate } from './templates/voices-on-stage'
import { VoicesOnStageLightTemplate } from './templates/voices-on-stage-light'
import { VoicesOnStageV1Template } from './templates/voices-on-stage-v1'
import { VoicesOnStageV3Template } from './templates/voices-on-stage-v3'
import darkV2Preview from './assets/darkv2.png'
import card2Preview from './assets/card2.png'
import card3Preview from './assets/card3.png'
import card4Preview from './assets/card4.png'

const ACCESS_CODE = 'CAMIVoices#2025!'

/**
 * Renders the client access portal with a form and template preview screen.
 * Provides an accessible text input for a client code and swaps to the preview after submit.
 * On submit, validates the code and updates the URL query (?code=...). No routing is added.
 */
function App() {
  const inputId = useId()
  const [code, setCode] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [activeTemplateId, setActiveTemplateId] = useState<string | null>(null)
  const isValid = useMemo(() => code.trim() === ACCESS_CODE, [code])
  const templates = useMemo<TemplateSummary[]>(() => {
    const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'long' })
    const toMetaDate = (iso: string) => ({
      iso,
      label: formatter.format(new Date(iso)),
    })

    return [
      {
        id: 'voices-on-stage',
        title: 'Dark Theme Site v2',
        variantTitle: 'Dark Theme Site v2',
        author: 'Juan Tovar',
        description:
          'A refined dark-mode experience balancing rich contrast with warm accent highlights. Includes responsive layouts, hero sections, and modular content blocks ready for quick customization.',
        createdAt: toMetaDate('2025-09-30'),
        previewImage: darkV2Preview,
        previewUrl:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
        detailId: 'voices-on-stage',
      },
      {
        id: 'luminous-portfolio',
        title: 'Light Theme Site v2',
        variantTitle: 'Light Theme Site v2',
        author: 'Juan Tovar',
        description:
          'A minimal, typography-forward portfolio with generous whitespace, ideal for showcasing photography or illustration case studies.',
        createdAt: toMetaDate('2025-09-30'),
        previewImage: card2Preview,
        previewUrl:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
        detailId: 'voices-on-stage-light',
      },
      {
        id: 'modular-brand-kit',
        title: 'Dark Theme Site',
        variantTitle: 'Horizontal Navigation Dark Site',
        author: 'Juan Tovar',
        description:
          'A flexible brand guideline kit featuring modular sections for voice, palette, iconography, and social asset previews.',
        createdAt: toMetaDate('2025-09-30'),
        previewImage: card3Preview,
        previewUrl:
          'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
        detailId: 'voices-on-stage-v3',
      },
      {
        id: 'signature-motion',
        title: 'Light theme v2',
        variantTitle: 'Interactive Motion Microsite',
        author: 'Juan Tovar',
        description:
          'A scroll-triggered narrative with layered motion cues, spotlighting product milestones with cinematic transitions.',
        createdAt: toMetaDate('2025-09-30'),
        previewImage: card4Preview,
        previewUrl:
          'https://images.unsplash.com/photo-1522202189501-3d5a205a2ad9?auto=format&fit=crop&w=1600&q=80',
        detailId: 'voices-on-stage-v1',
      },
    ]
  }, [])

  /**
   * Returns the UI to the access form, clearing the code and URL param state.
   *
   * @returns - void
   */
  const handleBack = () => {
    setActiveTemplateId(null)
    setShowTemplates(false)
    setCode('')
    const url = new URL(window.location.href)
    url.searchParams.delete('code')
    window.history.replaceState({}, '', url.toString())
  }

  /**
   * Leaves the full template view and returns to the template list.
   *
   * @returns - void
   */
  const handleCloseTemplate = () => {
    setActiveTemplateId(null)
  }

  /**
   * Matches the active template id with its rendered component.
   *
   * @returns - The template component or null when not matched.
   */
  const renderActiveTemplate = () => {
    switch (activeTemplateId) {
      case 'voices-on-stage':
        return <VoicesOnStageTemplate onBack={handleCloseTemplate} />
      case 'voices-on-stage-light':
        return <VoicesOnStageLightTemplate onBack={handleCloseTemplate} />
      case 'voices-on-stage-v1':
        return <VoicesOnStageV1Template onBack={handleCloseTemplate} />
      case 'voices-on-stage-v3':
        return <VoicesOnStageV3Template onBack={handleCloseTemplate} />
      default:
        return null
    }
  }

  /**
   * Handle form submission: prevents full page reload, does basic validation,
   * and reflects the entered code in the URL as a query parameter.
   *
   * @param e - The form submit event
   */
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const trimmed = code.trim()
    if (trimmed !== ACCESS_CODE) return
    try {
      setSubmitting(true)
      const url = new URL(window.location.href)
      url.searchParams.set('code', trimmed)
      window.history.replaceState({}, '', url.toString())
      setShowTemplates(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (activeTemplateId) {
    const activeTemplate = renderActiveTemplate()
    if (activeTemplate) {
      return activeTemplate
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 p-6">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,148,107,0.12),transparent)]" />

      {showTemplates ? (
        <>
          <div className="absolute left-6 top-6 z-20 flex flex-col gap-3 sm:gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-500">{TEMPLATE_LABEL}</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{TEMPLATE_TITLE}</h1>
            </div>
            <button
              type="button"
              onClick={handleBack}
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-cream-300/70 bg-white/80 px-4 py-2 text-sm font-medium text-ink-800 shadow-soft transition duration-200 ease-out hover:border-accent-400 hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-800"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 stroke-current transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
              >
                <path d="M11.25 5.25L6.5 10l4.75 4.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10h6.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go Back
            </button>
          </div>
          <div className="relative z-10 ml-auto w-full max-w-5xl">
            <TemplatePreviewPage
              templates={templates}
              onTemplateSelect={(templateId) => {
                setActiveTemplateId(templateId)
              }}
            />
          </div>
        </>
      ) : (
        <ClientAccessPage
          inputId={inputId}
          code={code}
          isValid={isValid}
          submitting={submitting}
          onSubmit={onSubmit}
          onCodeChange={(value) => setCode(value)}
        />
      )}
    </div>
  )
}

export default App
