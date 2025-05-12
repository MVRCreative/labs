import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Car, CheckCircle, Rocket, Flame } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
import { NavLink } from "@/components/nav-link"
import { SplitText } from "@/components/split-text"
import { ScrollTriggerComponent } from "@/components/scroll-trigger"
import { PlanCard } from "@/components/plan-card"
import { TimelineCard } from "@/components/timeline-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-light relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[#0A0A0F] bg-grid-pattern pointer-events-none"></div>

      {/* Side Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#0A0A0F] to-transparent pointer-events-none z-[1]"></div>
      <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#0A0A0F] to-transparent pointer-events-none z-[1]"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Cursor Effect */}
      <CursorEffect />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="block">
                <div className="flex items-center gap-2">
                  <Car className="text-orange-500 h-6 w-6" />
                  <span className="text-2xl font-light">MoverLabs</span>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#summary">Project Summary</NavLink>
              <NavLink href="#plans">Retainer Plans</NavLink>
              <NavLink href="#tech">Tech Stack</NavLink>
              <NavLink href="#timeline">Timeline</NavLink>
            </nav>
            <div>
              <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 text-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative isolate px-6 pt-14">
          {/* Decorative blob top */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500/30 to-amber-500/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="flex justify-center mb-8">
              <Badge className="bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full px-4 py-1.5 text-sm">
                Partnership Proposal
              </Badge>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Bramo Full-Stack
                </SplitText>{" "}
                <span className="text-orange-400">
                  <SplitText type="chars" animation="random" stagger={0.04} delay={0.5}>
                    Partnership
                  </SplitText>
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-pretty text-zinc-400 max-w-3xl mx-auto">
                <SplitText type="words" animation="fadeIn" stagger={0.02} delay={0.8}>
                  A community platform for vintage car enthusiasts, allowing users to create virtual garages, share
                  stories, and participate in real-world events.
                </SplitText>
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-6 h-auto text-sm">
                  View Proposal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-8 py-6 h-auto text-sm"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative blob bottom */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-500/30 to-orange-500/30 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </section>

        {/* Project Summary Section */}
        <section id="summary" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Project Summary
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Building a Community for Vintage Car Enthusiasts
                </SplitText>
              </h2>
            </div>

            <ScrollTriggerComponent animation="fadeUp">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Bramo is a community platform for vintage car enthusiasts, allowing users to create virtual garages,
                  share stories behind their vehicles, and participate in real-world events.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  The client is currently managing the app via Lovable with staging and production flows handled through
                  Netlify. This proposal outlines a structured plan to migrate the app to a professional local
                  development environment and provide ongoing full-stack support at three scalable levels.
                </p>
              </div>
            </ScrollTriggerComponent>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Tech Stack & Tools
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Professional Tools for Quality Development
                </SplitText>
              </h2>
              <p className="text-zinc-400 mb-8">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  We've carefully selected these technologies to ensure a robust, maintainable codebase.
                </SplitText>
              </p>
            </div>

            <ScrollTriggerComponent animation="fadeUp">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Frontend Card - Large */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm md:col-span-2 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-light">Frontend</h3>
                        <p className="text-zinc-400 text-sm">
                          The user interface layer that delivers a responsive, intuitive experience.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">React</h4>
                        <p className="text-zinc-400 text-sm">
                          Component-based UI library for building interactive interfaces.
                        </p>
                      </div>
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">TailwindCSS</h4>
                        <p className="text-zinc-400 text-sm">Utility-first CSS framework for rapid styling.</p>
                      </div>
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">ShadCN</h4>
                        <p className="text-zinc-400 text-sm">Accessible component library built on Radix UI.</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 text-xs text-zinc-500">
                    Frontend for seamless user experiences
                  </div>
                </div>

                {/* Backend Card */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-light">Backend</h3>
                        <p className="text-zinc-400 text-sm">
                          Powerful server-side technologies for data and business logic.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mt-6">
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">Node.js</h4>
                        <p className="text-zinc-400 text-sm">
                          JavaScript runtime for scalable server-side applications.
                        </p>
                      </div>
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">Supabase</h4>
                        <p className="text-zinc-400 text-sm">
                          Open-source Firebase alternative with PostgreSQL database.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 text-xs text-zinc-500">
                    Backend for reliable data management
                  </div>
                </div>

                {/* Project Management Card */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-light">Project Management</h3>
                        <p className="text-zinc-400 text-sm">Tools that keep development organized and transparent.</p>
                      </div>
                    </div>

                    <div className="space-y-4 mt-6">
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">Linear</h4>
                        <p className="text-zinc-400 text-sm">Modern issue tracking tool for high-performance teams.</p>
                      </div>
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">Loom + Slack</h4>
                        <p className="text-zinc-400 text-sm">Communication tools for async updates and messaging.</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 text-xs text-zinc-500">
                    Project management for efficient workflows
                  </div>
                </div>

                {/* Hosting Card - Large */}
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm md:col-span-2 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 group-hover:bg-orange-500/10 transition-all duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-light">Hosting & Deployment</h3>
                        <p className="text-zinc-400 text-sm">
                          Infrastructure that ensures your application is fast and reliable.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">Netlify</h4>
                        <p className="text-zinc-400 text-sm">
                          All-in-one platform for automating modern web projects with continuous deployment.
                        </p>
                      </div>
                      <div className="bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
                        <h4 className="font-medium text-orange-400 mb-2">GitHub</h4>
                        <p className="text-zinc-400 text-sm">
                          Version control platform for code collaboration and feature branching.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-6 text-xs text-zinc-500">Hosting for seamless deployment</div>
                </div>

                {/* Optional Tools Card */}
              </div>
            </ScrollTriggerComponent>
          </div>
        </section>

        {/* Retainer Plan Options Section */}
        <section id="plans" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Retainer Plan Options
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Choose the Right Plan for Your Needs
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Each plan ensures you're supported with technical leadership and dev execution.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <PlanCard
                title="STABILITY Plan"
                price="$3,000"
                description="Your go-to dev for stability & light enhancements."
                features={[
                  "Up to 3 days/month of development",
                  "Bug fixes & light feature work",
                  "GitHub + Netlify branch management",
                  "Linear project setup & tracking",
                  "Async communication & review",
                ]}
                icon={<CheckCircle className="text-orange-400 size-5" />}
                index={0}
                timeline={[
                  { week: "Week 1", task: "GitHub repo & Netlify setup" },
                  { week: "Week 2", task: "Begin Lovable → local dev migration" },
                  { week: "Week 3", task: "Complete migration & testing" },
                  { week: "Week 4+", task: "Bug fixes & feature work (~3 days/month)" },
                ]}
              />

              <PlanCard
                title="GROWTH Plan"
                price="$5,500"
                description="Ship more, iterate faster, and keep momentum."
                features={[
                  "Up to 5 days/month",
                  "Full-stack support (frontend, backend, auth)",
                  "Prioritized bug & feature tracking",
                  "System audits (e.g. auth issues)",
                  "Weekly async updates",
                  "GitHub branching & Netlify CI/CD",
                ]}
                icon={<Rocket className="text-orange-400 size-5" />}
                index={1}
                highlighted={true}
                timeline={[
                  { week: "Week 1", task: "GitHub + Netlify setup & migration start" },
                  { week: "Week 2", task: "Complete migration & begin improvements" },
                  { week: "Week 3", task: "Launch Linear board & map features" },
                  { week: "Week 4+", task: "Feature work & weekly updates (~5 days/month)" },
                ]}
              />

              <PlanCard
                title="STRATEGY Plan"
                price="$7,500"
                description="Your embedded tech partner & strategic advisor."
                features={[
                  "Up to 10 days/month",
                  "Everything in Growth Plan +",
                  "Monthly strategy call",
                  "Product direction & roadmap collaboration",
                  "Scalable architecture decisions",
                  "Optional light team mgmt",
                ]}
                icon={<Flame className="text-orange-400 size-5" />}
                index={2}
                timeline={[
                  { week: "Week 1", task: "Complete setup & migration in 1 week" },
                  { week: "Week 2", task: "Audit feature backlog & begin implementation" },
                  { week: "Week 3-4", task: "Weekly check-ins & roadmap planning" },
                  { week: "Ongoing", task: "Architecture & UX improvements (~10 days/month)" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Execution Timeline Section */}
        <section id="timeline" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Execution Timeline
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Structured Process for Each Plan
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  All plans follow the same foundational process with different timelines.
                </SplitText>
              </p>
            </div>

            <div className="space-y-12">
              <TimelineCard
                title="STABILITY Plan (3 days/month)"
                steps={[
                  { week: "Week 1", tasks: ["GitHub repo created", "Connect to Netlify", "Set up feature branching"] },
                  { week: "Week 2", tasks: ["Begin Lovable → local dev migration"] },
                  { week: "Week 3", tasks: ["Complete migration", "Test staging/production builds"] },
                  {
                    week: "Week 4+",
                    tasks: [
                      "Setup Linear board",
                      "Add bug reports & feature backlog",
                      "Begin resolving issues (~3 days/month)",
                    ],
                  },
                ]}
                color="yellow"
                index={0}
              />

              <TimelineCard
                title="GROWTH Plan (5 days/month)"
                steps={[
                  {
                    week: "Week 1",
                    tasks: ["GitHub + Netlify setup", "Branching system live", "Begin full migration"],
                  },
                  { week: "Week 2", tasks: ["Complete migration", "Begin scoped improvements"] },
                  { week: "Week 3", tasks: ["Launch Linear board", "Map bugs & features"] },
                  { week: "Week 4+", tasks: ["Implement feature work (~5 days/month)", "Weekly updates"] },
                ]}
                color="green"
                index={1}
              />

              <TimelineCard
                title="STRATEGY Plan (10 days/month)"
                steps={[
                  {
                    week: "Week 1",
                    tasks: [
                      "GitHub + Netlify setup",
                      "Migrate from Lovable to local codebase (complete in 1 week)",
                      "Linear project + strategy kickoff call",
                    ],
                  },
                  { week: "Week 2", tasks: ["Audit feature & bug backlog", "Begin implementation"] },
                  {
                    week: "Week 3–4",
                    tasks: [
                      "Weekly check-ins",
                      "Roadmap planning",
                      "Performance, architecture, UX improvements (~10 days/month)",
                    ],
                  },
                ]}
                color="red"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollTriggerComponent animation="scale">
              <div className="bg-zinc-900/50 rounded-xl p-8 md:p-12 border border-zinc-800/50 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4">
                    <SplitText type="words" animation="fadeUp" stagger={0.08}>
                      Let's build something timeless.
                    </SplitText>
                  </h2>
                  <p className="text-zinc-400 text-lg mb-8">
                    <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                      Each plan ensures you're supported with technical leadership and dev execution. Whether you need
                      light-touch maintenance or a fully embedded partner, this proposal gives you scalable options to
                      match your momentum and goals.
                    </SplitText>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 h-10 text-sm">
                      Get Started
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollTriggerComponent>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-lg font-light">© 2025 MoverLabs</span>
              </div>
              <div className="flex gap-8">
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Privacy
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Terms
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-zinc-600 text-xs">
              Building innovative solutions for vintage car enthusiasts
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
