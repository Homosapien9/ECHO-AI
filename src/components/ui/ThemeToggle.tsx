'use client'

import { Moon, SunMedium } from 'lucide-react'
import { useDarkMode } from '@/hooks/useDarkMode'

const ThemeToggle = () => {
  const { dark, setDark, mounted } = useDarkMode()

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" aria-hidden />
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setDark(!dark)}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-200 transition hover:scale-105 hover:text-white"
      title={dark ? 'Light me up' : 'Back to the void'}
    >
      {dark ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
