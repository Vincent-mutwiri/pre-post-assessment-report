// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function LandingPage() {
  return (
    <div className="space-y-12">
      <section
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url(/_M5A6541.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Learning Science Deepdive
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Welcome to the Learning Science Deepdive portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kenya">
              <Button className="px-6 py-3 text-lg">View Dashboard</Button>
            </Link>
            <Link to="/kenya#resources">
              <Button variant="secondary" className="px-6 py-3 text-lg">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        <div>
          <h3 className="text-3xl font-bold">45</h3>
          <p className="text-muted-foreground">Participants</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">70%</h3>
          <p className="text-muted-foreground">Avg. Improvement</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">95%</h3>
          <p className="text-muted-foreground">Positive Feedback</p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;
