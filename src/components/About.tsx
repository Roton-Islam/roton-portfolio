export default function About() {
  return (
    <section id="about" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Turning Ideas Into
            <span className="text-violet-500"> Web Experiences</span>
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-2xl font-semibold text-white">Who I Am</h3>

            <p className="leading-8 text-slate-400">
              I'm Roton Islam, a frontend developer focused on creating modern,
              responsive and user-friendly websites. I enjoy turning designs and
              ideas into clean, functional web experiences.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I work mainly with React, Next.js, TypeScript and Tailwind CSS. My
              goal is to build websites that look great, perform well and
              provide a smooth user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-violet-500">3+</h3>
              <p className="mt-2 text-slate-400">Projects Built</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-violet-500">100%</h3>
              <p className="mt-2 text-slate-400">Responsive</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-violet-500">Clean</h3>
              <p className="mt-2 text-slate-400">Code</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-violet-500">Modern</h3>
              <p className="mt-2 text-slate-400">UI Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
