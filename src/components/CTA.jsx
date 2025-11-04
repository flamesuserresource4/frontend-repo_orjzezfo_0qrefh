import { motion } from 'framer-motion'
import { ShieldCheck, Star, Download } from 'lucide-react'

const GP_LINK = 'https://play.google.com/store/apps/details?id=com.sheikhpublishinginc.calfinity'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070b] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center text-white backdrop-blur"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-4 flex items-center gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <h3 className="text-3xl font-bold sm:text-4xl">Join thousands transforming their health</h3>
            <p className="mt-3 text-white/80">
              “Best nutrition app I’ve ever used! The AI is incredibly accurate.” — Beta User
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={GP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110"
              >
                <Download className="h-5 w-5" />
                Pre‑register on Google Play
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                <ShieldCheck className="h-4 w-4 text-cyan-300" /> Privacy‑first • GDPR compliant
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
