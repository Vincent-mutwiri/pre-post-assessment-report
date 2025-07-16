import { Toaster } from "./ui/toaster"
import { ThemeProvider } from "./theme-provider"

export function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
