'use client'

import React from 'react'

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export function useDarkMode() {
  const [dark, setDark] = React.useState(true)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = window.localStorage.getItem('echo-theme')
    const shouldBeDark = stored ? stored === 'dark' : true
    setDark(shouldBeDark)
    // dark mode is on by default because this is an AI tool and ai tools live in the dark
    applyTheme(shouldBeDark)
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    applyTheme(dark)
    window.localStorage.setItem('echo-theme', dark ? 'dark' : 'light')
  }, [dark, mounted])

  return { dark, setDark, mounted }
}
