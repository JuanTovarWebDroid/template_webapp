import type { JSX } from 'react'

import { VoicesOnStageTemplate } from '../templates/voices-on-stage'
import { VoicesOnStageLightTemplate } from '../templates/voices-on-stage-light'
import { VoicesOnStageV3Template } from '../templates/voices-on-stage-v3'
import { VoicesOnStageV1Template } from '../templates/voices-on-stage-v1'

interface TemplatePreviewPageProps {
  templates: TemplateSummary[]
  onTemplateSelect: (templateId: string) => void
}

export interface TemplateSummary {
  id: string
  title: string
  variantTitle?: string
  author: string
  description: string
  createdAt: {
    iso: string
    label: string
  }
  previewImage: string
  previewUrl: string
  detailId?: string
  previewId?: string
}

export const TEMPLATE_LABEL = 'Templates'
export const TEMPLATE_TITLE = 'Camila Solorza'

/**
 * Derives responsive grid column classes based on template count.
 *
 * @param count - Number of templates available for display.
 * @returns Tailwind class names that control the grid columns.
 */
function getGridColumnClass(count: number): string {
  if (count <= 1) return ''
  return 'md:grid-cols-2'
}

/**
 * Renders the template preview page with hero card details and external view action.
 *
 * @param props - Provides the template collection used to render preview cards.
 * @returns The page markup showcasing the selected template.
 */
const TemplatePreviewFrame = ({ children }: { children: JSX.Element }) => (
  <div className="relative h-full w-full overflow-hidden">
    <div
      className="pointer-events-none origin-top-left"
      style={{ transform: 'scale(0.22)', width: '454%', height: '454%' }}
    >
      {children}
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream-100 via-transparent to-transparent" />
  </div>
)

const previewRenderers: Record<string, JSX.Element> = {
  'voices-dark': (
    <TemplatePreviewFrame>
      <VoicesOnStageTemplate onBack={() => {}} showBackButton={false} />
    </TemplatePreviewFrame>
  ),
  'voices-light': (
    <TemplatePreviewFrame>
      <VoicesOnStageLightTemplate onBack={() => {}} showBackButton={false} />
    </TemplatePreviewFrame>
  ),
  'voices-v3': (
    <TemplatePreviewFrame>
      <VoicesOnStageV3Template onBack={() => {}} showBackButton={false} />
    </TemplatePreviewFrame>
  ),
  'voices-v1': (
    <TemplatePreviewFrame>
      <VoicesOnStageV1Template onBack={() => {}} showBackButton={false} />
    </TemplatePreviewFrame>
  ),
}

function TemplatePreviewPage({ templates, onTemplateSelect }: TemplatePreviewPageProps) {
  const gridColumnsClass = getGridColumnClass(templates.length)

  return (
    <main className="relative z-10 w-full">
      <section className="mx-auto w-full max-w-[min(100%,76rem)] rounded-2xl border border-cream-300/50 bg-white/80 px-8 py-10 shadow-soft transition-all duration-200 ease-out backdrop-blur supports-[backdrop-filter]:bg-white/65 sm:px-12 sm:py-12">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              mariacamilasolorza.com site
            </h2>
          </div>
        </header>

        <div className={`grid grid-cols-1 gap-y-8 gap-x-8 ${gridColumnsClass}`}>
          {templates.map((template) => (
            <article
              key={template.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300/60 bg-white/85 shadow-soft transition-transform duration-200 ease-out hover:-translate-y-1 lg:w-[100%]"
            >
              <figure className="aspect-[4/3] w-full overflow-hidden border-b border-cream-300/50 bg-cream-100/70">
                {template.previewId && previewRenderers[template.previewId] ? (
                  previewRenderers[template.previewId]
                ) : (
                  <img
                    src={template.previewImage}
                    alt={`Preview of the ${template.title} template`}
                    className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                )}
              </figure>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-ink-900">{template.title}</h3>  
                  <p className="mt-2 text-sm text-ink-700/80">Created by {template.author}</p>
                </div>
                <time
                  dateTime={template.createdAt.iso}
                  className="text-xs uppercase tracking-[0.24em] text-ink-700/70"
                >
                  {template.createdAt.label}
                </time>
                <p className="text-sm leading-relaxed text-ink-700/90">{template.description}</p>
                <div className="mt-auto pt-2">
                  {template.detailId ? (
                    <button
                      type="button"
                      onClick={() => onTemplateSelect(template.detailId!)}
                      className="inline-flex items-center justify-center rounded-lg bg-ink-800 px-4 py-2 text-sm font-semibold text-cream-50 transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-800"
                    >
                      View Template
                    </button>
                  ) : (
                    <a
                      href={template.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-ink-800 px-4 py-2 text-sm font-semibold text-cream-50 transition duration-200 ease-out hover:translate-y-[-1px] hover:bg-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink-800"
                    >
                      View Template
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default TemplatePreviewPage
