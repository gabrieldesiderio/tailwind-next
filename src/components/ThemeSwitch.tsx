'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './Button'
import { MoonStar, SunMoon } from 'lucide-react'

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  function handleSwitchTheme(newTheme: 'dark' | 'light') {
    setTheme(newTheme)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => handleSwitchTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <MoonStar className="h-5 w-5" />
      ) : (
        <SunMoon className="h-5 w-5" />
      )}
    </Button>
  )
}
