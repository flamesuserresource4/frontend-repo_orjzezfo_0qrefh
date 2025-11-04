import { motion } from 'framer-motion'
import { Rocket, Play, Download } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const GP_LINK = 'https://play.google.com/store/apps/details?id=com.sheikhpublishinginc.calfinity'

export default function Hero() {
  return (
    <section className="relative w-full h-[780px] overflow-hidden bg-[#05070b]">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene={"https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur"
          >
            <Rocket className="h-4 w-4 text-cyan-400" />
            Transform Your Health with AI‑Powered Nutrition Tracking
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl"
          >
            Calfinity
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"> understands your food from a photo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-white/80"
          >
            Snap any meal and instantly get calories, macros, and ingredients. Beautiful insights, personal plans, and complete fitness integration — all in one futuristic experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={GP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Download className="h-5 w-5" />
              Pre‑register on Google Play
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-base font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-5 w-5 text-cyan-300" />
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-6 text-sm text-white/70"
          >
            <span>99% accurate AI food recognition</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>2.8M+ food database</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>Privacy‑first design</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
