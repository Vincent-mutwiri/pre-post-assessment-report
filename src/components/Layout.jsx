import { Toaster } from "./ui/toaster"
import { ThemeProvider } from "./theme-provider"
import { ThemeToggle } from "./ThemeToggle"

export function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <header className="container mx-auto px-4 py-4 flex justify-end">
          <ThemeToggle />
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
