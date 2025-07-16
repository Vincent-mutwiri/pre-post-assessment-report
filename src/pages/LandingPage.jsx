// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-4xl border rounded-2xl p-10 shadow-lg bg-card text-card-foreground">
        <h1 className="text-4xl font-bold text-center mb-4">
          2025 CcHUB & iHUB Learning Science Deepdive
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Welcome to the Learning Science Deepdive portal.
          <br />
          Click below to view the session overview, performance data, and resources.
        </p>
        
        <div className="flex justify-center">
          <Link to="/kenya" className="w-full sm:w-64">
            <button className="w-full text-xl font-semibold p-4 border rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              View Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
