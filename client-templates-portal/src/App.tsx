import { useId, useMemo, useState } from 'react'

/**
 * Renders the client access form screen.
 * Provides an accessible text input for a client code and a submit button.
 * On submit, validates the code and updates the URL query (?code=...). No routing is added.
 */
function App() {
  const inputId = useId()
  const [code, setCode] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const isValid = useMemo(() => /^[A-Za-z0-9-_]{4,32}$/.test(code.trim()), [code])

  /**
   * Handle form submission: prevents full page reload, does basic validation,
   * and reflects the entered code in the URL as a query parameter.
   *
   * @param e - The form submit event
   */
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const trimmed = code.trim()
    if (!/^[A-Za-z0-9-_]{4,32}$/.test(trimmed)) return
    try {
      setSubmitting(true)
      const url = new URL(window.location.href)
      url.searchParams.set('code', trimmed)
      window.history.replaceState({}, '', url.toString())
      // Placeholder: integrate real navigation or fetch as needed
      // e.g., window.location.href = `/client/${encodeURIComponent(trimmed)}`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 p-6">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,148,107,0.12),transparent)]" />

      <main className="relative z-10 w-full max-w-md">
        <section className="rounded-2xl border border-cream-300/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-6 sm:p-8 shadow-soft">
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
                onChange={(e) => setCode(e.currentTarget.value)}
                aria-invalid={code.length > 0 && !isValid}
                aria-describedby={code.length > 0 && !isValid ? `${inputId}-error` : undefined}
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap px-5"
                disabled={!isValid || submitting}
              >
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
            {code.length > 0 && !isValid && (
              <p id={`${inputId}-error`} className="mt-2 text-sm text-ink-800/80">
                Use 4–32 characters: letters, numbers, dashes or underscores.
              </p>
            )}
          </form>

          <footer className="mt-6 text-xs text-ink-700/70">
            You’ll only see templates tied to your code.
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
