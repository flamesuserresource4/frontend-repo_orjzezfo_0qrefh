import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#04060a] text-white">
      <Header />

      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-[#04060a] py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Calfinity. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#cta" className="hover:text-white">Get the app</a>
            <a href="https://play.google.com/store/apps/details?id=com.sheikhpublishinginc.calfinity" target="_blank" rel="noreferrer" className="hover:text-white">Google Play</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
