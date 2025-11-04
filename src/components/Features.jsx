import { motion } from 'framer-motion'
import { Camera, Barcode, BarChart3, Activity, Trophy, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'AI‑Powered Food Recognition',
    icon: Camera,
    description:
      'Instant meal analysis from a photo with accurate calories, macros, and ingredient breakdown — even for complex dishes.',
    bullets: [
      'Instant meal analysis',
      'Accurate calories & macros',
      'Ingredient breakdown',
    ],
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Smart Tracking & Analytics',
    icon: BarChart3,
    description:
      'Beautiful charts, trends, and insights keep your goals on track with real‑time calorie and macro tracking.',
    bullets: ['Real‑time tracking', 'Progress charts', 'Micronutrient analysis'],
    accent: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Barcode & Restaurant Scanner',
    icon: Barcode,
    description:
      'Scan packaged foods or analyze restaurant menus in seconds. Works worldwide with a 2.8M+ food database.',
    bullets: ['Barcode scanning', 'Menu analysis', 'Global coverage'],
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Complete Fitness Integration',
    icon: Activity,
    description:
      'Log workouts, track steps and water, and see calories burned — all connected in a single dashboard.',
    bullets: ['Workout logging', 'Steps & water', 'Calories burned'],
    accent: 'from-orange-500/20 to-rose-500/20',
  },
  {
    title: 'Gamified Motivation',
    icon: Trophy,
    description:
      'Unlock achievements, keep streaks, and join weekly challenges that make healthy habits addictive and fun.',
    bullets: ['25+ achievements', 'Streak tracking', 'Weekly challenges'],
    accent: 'from-fuchsia-500/20 to-violet-500/20',
  },
  {
    title: 'Privacy & Security',
    icon: ShieldCheck,
    description:
      'Your data stays yours, backed by secure cloud sync and full GDPR compliance across devices.',
    bullets: ['Secure cloud backup', 'Cross‑device sync', 'GDPR compliant'],
    accent: 'from-sky-500/20 to-cyan-500/20',
  },
]

export default function Features() {
  return (
    <section className="relative bg-[#070a11] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
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
            Everything you need to eat smarter
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Powerful features, thoughtfully designed
          </h2>
          <p className="mt-4 text-white/70">
            From instant AI food recognition to personalized plans and fitness integration, Calfinity adapts to your goals.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${f.accent} p-6`}
            >
              <div className="absolute right-0 top-0 h-28 w-28 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-2xl" />

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3 text-cyan-300">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/75">{f.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
