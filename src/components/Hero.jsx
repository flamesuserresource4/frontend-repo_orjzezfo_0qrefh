import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Download, Sparkles, Play } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const GP_LINK = 'https://play.google.com/store/apps/details?id=com.sheikhpublishinginc.calfinity'

export default function Hero() {
  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => i), [])

  return (
    <section id="hero" className="relative w-full h-[92vh] min-h-[720px] overflow-hidden bg-[#04060a]">
      {/* Immersive 3D Background */}
      <div className="absolute inset-0">
        <Spline scene={"https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cosmic gradients + holographic aurora (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[620px] w-[620px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/4 h-72 w-[140%] -translate-x-1/2 rotate-[-8deg] rounded-[80px] bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-2xl"
        />
        {/* Floating spark particles */}
        {particles.map((p) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -8, 0] }}
            transition={{ duration: 3 + (p % 5), repeat: Infinity, delay: p * 0.12, ease: 'easeInOut' }}
            className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
            style={{ left: `${(p * 53) % 100}%`, top: `${(p * 37) % 100}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur"
          >
            <Rocket className="h-4 w-4 text-cyan-300" />
            Welcome to the galaxy of smart nutrition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Calfinity
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent"> makes calories cosmic</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 max-w-xl text-lg text-white/80"
          >
            Point your camera at any meal and get instant, stunning insights. AI analysis, macro targeting, and a universe of motivation — all in one immersive experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={GP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Download className="h-5 w-5" />
              Pre‑register on Google Play
            </a>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
              onClick={() => {
                const features = document.getElementById('features')
                if (features) features.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Play className="h-4 w-4 text-fuchsia-300" />
              See how it works
            </button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center gap-3 text-white/60"
          >
            <span className="h-6 w-3 rounded-full border border-white/30 p-0.5">
              <motion.span
                className="block h-1.5 w-1.5 rounded-full bg-white"
                animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
            </span>
            Scroll to explore the cosmos
          </motion.div>
        </div>
      </div>
    </section>
  )
}
