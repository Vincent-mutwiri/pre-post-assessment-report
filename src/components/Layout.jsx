import { Toaster } from "./ui/toaster"
import { ThemeProvider } from "./theme-provider"
import { ThemeToggle } from "./ThemeToggle"
import { NavLink, Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import logo from '@/assets/react.svg'

export function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <header className="border-b bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" aria-label="Home">
              <img src={logo} alt="Learning Science logo" className="h-8 w-8" />
              <span className="font-semibold">Learning Science</span>
            </Link>
            <nav aria-label="Main navigation" className="flex items-center gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn('px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-accent' : 'hover:bg-accent')
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/kenya"
                className={({ isActive }) =>
                  cn('px-3 py-2 rounded-md text-sm font-medium', isActive ? 'bg-accent' : 'hover:bg-accent')
                }
              >
                Dashboard
              </NavLink>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
