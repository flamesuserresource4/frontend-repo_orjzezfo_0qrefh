import { motion, useScroll, useSpring } from 'framer-motion'

export default function Header() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#04060a]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Calfinity</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="relative transition hover:text-white">
            <span className="relative z-10">Features</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#cta" className="relative transition hover:text-white">Get the app</a>
          <a href="#cta" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium transition hover:bg-white/10">Join beta</a>
        </nav>
      </div>
      <motion.div style={{ scaleX }} className="origin-left h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400" />
    </header>
  )
}
