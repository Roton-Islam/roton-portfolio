const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Technologies I <span className="text-violet-500">Use</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I use modern technologies to build fast, responsive and
            user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10"
            >
              <h3 className="font-semibold text-white transition group-hover:text-violet-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
