import { motion } from 'framer-motion'
import { Camera, Utensils, Smartphone } from 'lucide-react'

export default function Showcase() {
  return (
    <section id="how" className="relative overflow-hidden bg-[#060910] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-white sm:text-5xl"
        >
          Track smarter in 3 simple steps
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Forget manual entry. Calfinity uses cutting‑edge AI to understand your meals, personalize your plan, and show your progress beautifully.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{s.description}</p>
              <div className="mt-6">
                <div className="h-40 w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-3">
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
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
    description:
      'Take a photo or scan a barcode. Our AI recognizes ingredients and estimates portions instantly.',
  },
  {
    title: 'Get instant insights',
    icon: Utensils,
    description:
      'See calories, macros, and micros at a glance with gorgeous visuals and clear recommendations.',
  },
  {
    title: 'Follow your plan',
    icon: Smartphone,
    description:
      'Receive personalized meal suggestions and track progress with streaks, goals, and achievements.',
  },
]
