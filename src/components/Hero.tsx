"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Text */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Hello, I'm Roton
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Frontend Developer
            <span className="block text-violet-500">Building Modern Web</span>
            Experiences.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and high-performance websites using
            React, Next.js, TypeScript and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Developer Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-3xl" />

          {/* Code Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            {/* Browser Dots */}
            <div className="mb-8 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Code */}
            <div className="space-y-4 font-mono text-sm">
              <p className="text-slate-500">{"// developer.ts"}</p>

              <p className="text-white">
                <span className="text-violet-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
              </p>

              <p className="pl-5 text-slate-300">
                name: <span className="text-green-400">"Roton Islam"</span>,
              </p>

              <p className="pl-5 text-slate-300">
                role:{" "}
                <span className="text-green-400">"Frontend Developer"</span>,
              </p>

              <p className="pl-5 text-slate-300">stack: [</p>

              <p className="pl-10 text-green-400">"React",</p>

              <p className="pl-10 text-green-400">"Next.js",</p>

              <p className="pl-10 text-green-400">"TypeScript",</p>

              <p className="pl-10 text-green-400">"Tailwind CSS",</p>

              <p className="pl-5 text-slate-300">],</p>

              <p className="text-white">{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
