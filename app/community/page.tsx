import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Rocket, Zap } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
import { NavLink } from "@/components/nav-link"
import { SplitText } from "@/components/split-text"
import { ScrollTriggerComponent } from "@/components/scroll-trigger"
import { GridLightEffects } from "@/components/grid-light-effects"
import Image from "next/image"

export default function Community() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-light relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[#0A0A0F] bg-grid-pattern pointer-events-none"></div>

      {/* Grid Light Effects */}
      <GridLightEffects gridSize={50} density={0.03} color="rgba(249, 115, 22, 0.6)" />

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
                <Image src="/logo.svg" alt="Innovation Labs" width={180} height={25} priority />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/#studio">Studio</NavLink>
              <NavLink href="/#builder-house">Builder House</NavLink>
              <NavLink href="/#products">Products</NavLink>
              <NavLink href="/community">Community</NavLink>
            </nav>
            <div>
              <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 text-sm">
                Get Involved
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
                Builder Portal
              </Badge>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  One challenge to
                </SplitText>{" "}
                <span className="text-orange-400">
                  <SplitText type="chars" animation="random" stagger={0.04} delay={0.5}>
                    change&nbsp;everything.
                  </SplitText>
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-pretty text-zinc-400 max-w-3xl mx-auto">
                <SplitText type="words" animation="fadeIn" stagger={0.02} delay={0.8}>
                  The Builder Portal drops May 2nd. $10K. No gatekeepers. No excuses. And no one's coming to save you.
                </SplitText>
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-6 h-auto text-sm">
                  Join Drop #001 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-8 py-6 h-auto text-sm"
                >
                  Learn More
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

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollTriggerComponent animation="fadeUp">
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">
                    <SplitText type="words" animation="fadeUp" stagger={0.05}>
                      This is where the next generation of builders get discovered.
                    </SplitText>
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-6 text-center">
                    The Builder Portal is a live, no-fluff startup challenge where solo devs, squads, and first-time
                    founders go head-to-head to ship MVPs in hours—and prove they've got what it takes.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed text-center">
                    Whether you're building in your dorm, your day job, or your garage... this is where your story
                    starts.
                  </p>
                </div>
              </div>
            </ScrollTriggerComponent>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Rocket className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="words" animation="slideIn" stagger={0.05}>
                      Don't wish you were there in 1995. Be there for 2025.
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    We're not waiting for VC intros, product-market fit, or permission. We're building now—in public,
                    with community, and with stakes.
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    This isn't a course. It's not a cohort.
                    <br />
                    <span className="text-orange-400 font-medium">It's a Drop.</span>
                  </p>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Zap className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="words" animation="slideIn" stagger={0.05}>
                      The Rules Are Simple:
                    </SplitText>
                  </h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="text-orange-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">You can build solo or with a squad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-orange-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">You must ship something real and post public logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-orange-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">
                        Top builds win $10K, exposure, and a permanent badge on your profile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-orange-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">No entry fee. No gatekeeping. Just execution.</span>
                    </li>
                  </ul>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Who It's For Section - Alternative Layout */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Who It's For
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  You belong here if:
                </SplitText>
              </h2>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <ScrollTriggerComponent animation="fadeUp">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        You're tired of waiting for someone to say yes
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        You want to find your squad and actually ship something
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">You've been sitting on that idea too long</p>
                    </div>
                  </div>
                </ScrollTriggerComponent>

                <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">You believe progress {">"} perfection</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">You'd rather be building</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-8 rounded-full border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-zinc-300 text-lg leading-relaxed">You want to be part of something bigger</p>
                    </div>
                  </div>
                </ScrollTriggerComponent>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Latest Updates
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  From the Builder Blog
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Stories, insights, and lessons from our community of builders.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="h-48 bg-zinc-800/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-zinc-900/80 text-orange-400 hover:bg-zinc-900/80">Community</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-zinc-500 text-sm mb-2">April 15, 2025</p>
                    <h3 className="text-xl font-light mb-3">
                      <SplitText type="words" animation="fadeUp" stagger={0.03}>
                        How Drop #004 Changed Everything
                      </SplitText>
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                      The inside story of how 300 builders came together to ship 42 products in 48 hours—and what
                      happened next.
                    </p>
                    <Button
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-500 hover:bg-transparent p-0 h-auto text-sm justify-start"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.1}>
                <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="h-48 bg-zinc-800/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-zinc-900/80 text-orange-400 hover:bg-zinc-900/80">Insights</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-zinc-500 text-sm mb-2">April 8, 2025</p>
                    <h3 className="text-xl font-light mb-3">
                      <SplitText type="words" animation="fadeUp" stagger={0.03}>
                        From Zero to Funded in 90 Days
                      </SplitText>
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                      The journey of three builders who met at Drop #003 and turned their weekend project into a
                      venture-backed startup.
                    </p>
                    <Button
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-500 hover:bg-transparent p-0 h-auto text-sm justify-start"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="h-48 bg-zinc-800/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-zinc-900/80 text-orange-400 hover:bg-zinc-900/80">Resources</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-zinc-500 text-sm mb-2">March 30, 2025</p>
                    <h3 className="text-xl font-light mb-3">
                      <SplitText type="words" animation="fadeUp" stagger={0.03}>
                        The Builder's Tech Stack for 2025
                      </SplitText>
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                      Our recommended tools, frameworks, and platforms for shipping your MVP faster than ever before.
                    </p>
                    <Button
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-500 hover:bg-transparent p-0 h-auto text-sm justify-start"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollTriggerComponent>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
              >
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Reminder Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollTriggerComponent animation="scale">
              <div className="bg-zinc-900/50 rounded-xl p-8 md:p-12 border border-zinc-800/50 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4">
                    <SplitText type="words" animation="fadeUp" stagger={0.08}>
                      Join Drop #001. Make May 2nd your Day One.
                    </SplitText>
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 h-10 text-sm">
                      Claim My Spot
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                    >
                      Watch the Recap from Drop #004
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
                <span className="text-lg font-light">© 2025 Innovation Labs</span>
              </div>
              <div className="flex gap-8">
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Privacy
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Terms
                </Link>
                <Link href="/community" className="text-zinc-500 hover:text-white text-sm">
                  Community
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-zinc-600 text-xs">Built by the team at innovation.dev</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
