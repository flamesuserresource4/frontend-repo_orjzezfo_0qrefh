import { motion } from 'framer-motion'
import { Camera, Brain, Activity, Sparkles } from 'lucide-react'

export default function Showcase() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#05070b] py-28">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            A cinematic flow that feels alive
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Track smarter in a cosmic, three‑part flow
          </h2>
          <p className="mt-3 text-white/70">
            From snap → understand → act. Designed for speed, clarity, and dopamine.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white backdrop-blur"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{s.description}</p>

              {/* Holographic card visual */}
              <div className="mt-6 h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-[2px]">
                <div className="relative h-full w-full rounded-2xl bg-[#070a11]/60">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -left-10 top-1/3 h-48 w-48 rounded-full bg-cyan-400/20 blur-2xl" />
                    <div className="absolute right-0 -bottom-8 h-48 w-48 rounded-full bg-indigo-400/20 blur-2xl" />
                  </motion.div>
                  <motion.div
                    initial={{ x: -12 }}
                    whileInView={{ x: 12 }}
                    transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4, ease: 'easeInOut' }}
                    className="absolute left-6 top-6 h-6 w-24 rounded-full bg-white/10"
                  />
                  <motion.div
                    initial={{ x: 12 }}
                    whileInView={{ x: -12 }}
                    transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4.6, ease: 'easeInOut' }}
                    className="absolute left-6 top-16 h-6 w-40 rounded-full bg-white/10"
                  />
                  <motion.div
                    initial={{ x: -8 }}
                    whileInView={{ x: 8 }}
                    transition={{ repeat: Infinity, repeatType: 'mirror', duration: 5, ease: 'easeInOut' }}
                    className="absolute left-6 top-28 h-6 w-32 rounded-full bg-white/10"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Snap your meal',
    icon: Camera,
    description: 'Point and capture. Our AI recognizes ingredients and portions in seconds.'
  },
  {
    title: 'Understand instantly',
    icon: Brain,
    description: 'Calories, macros, and micro‑insights rendered with gorgeous clarity.'
  },
  {
    title: 'Act with momentum',
    icon: Activity,
    description: 'Personalized targets, streaks, and smart nudges keep you cruising.'
  }
]
