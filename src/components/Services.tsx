import { Code2, Layout, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    title: "Landing Page Development",
    description:
      "Modern, responsive and conversion-focused landing pages for businesses and startups.",
    icon: Layout,
  },
  {
    title: "Figma to React / Next.js",
    description:
      "Pixel-perfect conversion of Figma designs into clean and responsive React or Next.js websites.",
    icon: Code2,
  },
  {
    title: "SaaS Website Development",
    description:
      "Modern SaaS websites with reusable components, responsive layouts and smooth user experience.",
    icon: Code2,
  },
  {
    title: "Responsive Web Design",
    description:
      "Websites that look great and work smoothly across mobile, tablet and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Website Bug Fixing",
    description:
      "Fix frontend issues, responsive problems, UI bugs and common React or Next.js errors.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050816] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            What I Do
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            My <span className="text-violet-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            I help businesses and individuals build modern, responsive and
            professional websites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/5"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
