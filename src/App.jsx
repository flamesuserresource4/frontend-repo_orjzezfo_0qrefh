import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#04060a] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#04060a]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Calfinity</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#cta" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10">Get the app</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <Showcase />
        <div id="cta">
          <CTA />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#04060a] py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Calfinity. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="https://play.google.com/store/apps/details?id=com.sheikhpublishinginc.calfinity" target="_blank" rel="noreferrer" className="hover:text-white">Google Play</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
