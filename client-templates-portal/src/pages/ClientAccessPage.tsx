import type { FormEventHandler } from 'react'

interface ClientAccessPageProps {
  inputId: string
  code: string
  isValid: boolean
  submitting: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  onCodeChange: (next: string) => void
}

/**
 * Renders the client access form page with validation feedback and submit button.
 *
 * @param props - Configures input identifiers, current form state, and handlers.
 * @returns The page markup for entering the client code.
 */
function ClientAccessPage({ inputId, code, isValid, submitting, onSubmit, onCodeChange }: ClientAccessPageProps) {
  const showError = code.length > 0 && !isValid
  const errorId = showError ? `${inputId}-error` : undefined

  return (
    <main className="relative z-10 w-full max-w-md">
      <section className="rounded-2xl border border-cream-300/50 bg-white/70 p-6 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:p-8">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900">Access Your Proposals</h1>
          <p className="mt-2 text-sm text-ink-700/80">
            Enter your client code to view your curated templates.
          </p>
        </header>

        <form onSubmit={onSubmit} noValidate>
          <label htmlFor={inputId} className="field-label">
            Client code
          </label>
          <div className="flex gap-3">
            <input
              id={inputId}
              name="clientCode"
              inputMode="text"
              autoComplete="one-time-code"
              placeholder="e.g. ACME-2025"
              className="text-input"
              value={code}
              onChange={(event) => onCodeChange(event.currentTarget.value)}
              aria-invalid={showError}
              aria-describedby={errorId}
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap px-5"
              disabled={!isValid || submitting}
            >
              {submitting ? 'Submitting…' : 'Submit'}
            </button>
          </div>
          {showError && (
            <p id={errorId} className="mt-2 text-sm text-ink-800/80">
              Wrong code. Please try again.
            </p>
          )}
        </form>

        <footer className="mt-6 text-xs text-ink-700/70">
          You’ll only see templates tied to your code.
        </footer>
      </section>
    </main>
  )
}

export default ClientAccessPage
