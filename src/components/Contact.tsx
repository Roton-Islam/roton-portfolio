import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's Work <span className="text-violet-500">Together</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project in mind? Feel free to contact me. I'd love to hear
            about your project.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Contact Me</h3>

              <p className="mt-4 leading-7 text-slate-400">
                I'm available for freelance projects and frontend development
                work.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="mailto:rotonislam7899.ba.uk@gmail.com"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-violet-400"
                >
                  <Mail className="text-violet-500" size={22} />
                  your-email@gmail.com
                </a>

                <a
                  href="https://github.com/Roton-Islam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-violet-400"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/roton-islam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-violet-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
