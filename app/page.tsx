import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Activity, FlaskRoundIcon as Flask, PenToolIcon as Tool, LinkedinIcon } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
import { ProductCard } from "@/components/product-card"
import { NavLink } from "@/components/nav-link"
import { SplitText } from "@/components/split-text"
import { ScrollTriggerComponent } from "@/components/scroll-trigger"
import { GridLightEffects } from "@/components/grid-light-effects"
import Image from "next/image"

export default function Home() {
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
              <NavLink href="#studio">Studio</NavLink>
              <NavLink href="#builder-house">Builder House</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="/community">Community</NavLink>
            </nav>
            <div>
              <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 text-sm">
                Get Involved
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section - Updated with inspiration from the example */}
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
                Venture Studio
              </Badge>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Build Bold.
                </SplitText>{" "}
                <span className="text-orange-400">
                  <SplitText type="chars" animation="random" stagger={0.04} delay={0.5}>
                    Ship Smart.
                  </SplitText>
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-pretty text-zinc-400 max-w-3xl mx-auto">
                <SplitText type="words" animation="fadeIn" stagger={0.02} delay={0.8}>
                  Innovation Labs is a venture studio turning big ideas into scalable products—powered by strategy,
                  community, and execution.
                </SplitText>
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-6 h-auto text-sm">
                  See Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-8 py-6 h-auto text-sm"
                >
                  Get Involved
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

        {/* Main Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - About */}
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="text-zinc-500 text-xs mb-4 font-mono">// About Us</div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-orange-400">
                      class <span className="text-zinc-400">InnovationLabs</span> {"{"}
                    </div>
                    <div className="text-zinc-300 pl-4">constructor() {"{"}</div>
                    <div className="text-zinc-300 pl-8">
                      this.type = <span className="text-green-400">"Venture Studio"</span>;
                    </div>
                    <div className="text-zinc-300 pl-8">
                      this.focus = <span className="text-green-400">"Building Scalable Products"</span>;
                    </div>
                    <div className="text-zinc-300 pl-8">
                      this.approach = <span className="text-green-400">"Strategy + Community + Execution"</span>;
                    </div>
                    <div className="text-zinc-300 pl-4">{"}"}</div>
                    <div className="text-orange-400">{"}"}</div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-light mb-3">
                      <SplitText type="words" animation="slideIn" stagger={0.05}>
                        We're builders, not dreamers.
                      </SplitText>
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Innovation Labs exists to bring serious software to life. We combine deep product thinking,
                      lightning-fast execution, and a global network of creators to build, test, and scale meaningful
                      digital products.
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed mt-4">Our model is simple:</p>
                    <ul className="mt-2 space-y-2 text-zinc-400 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="size-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                        <span>The Studio builds production-grade, monetizable products.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="size-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                        <span>
                          The Builder House fuels creativity, challenges, and new ideas through a thriving community.
                        </span>
                      </li>
                    </ul>
                    <p className="text-zinc-500 text-sm leading-relaxed mt-4">
                      Together, we launch multiple ventures per year—and we're just getting started.
                    </p>
                  </div>
                </div>
              </ScrollTriggerComponent>

              {/* Right Column - Divisions */}
              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="text-zinc-500 text-xs mb-4 font-mono">$divisions</div>
                  <div className="flex justify-between mb-6 font-mono text-xs">
                    <div className="text-zinc-400">DIVISION</div>
                    <div className="text-zinc-400">STATUS</div>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between">
                      <div className="text-zinc-300">Studio</div>
                      <div className="text-green-400">active</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-zinc-300">Builder House</div>
                      <div className="text-green-400">active</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-zinc-300">Ventures</div>
                      <div className="flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        <span className="text-zinc-400">10+ active</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <div className="relative size-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-light">10+</div>
                        <div className="text-xs text-zinc-500 absolute mt-8">Active ventures</div>
                      </div>
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#27272A" strokeWidth="2" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                          strokeDasharray="283"
                          strokeDashoffset="70"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-light mb-3">
                      <SplitText type="words" animation="slideIn" stagger={0.05}>
                        Our Approach
                      </SplitText>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                      <Activity className="text-orange-400 size-4" />
                      <span>Strategy + Community + Execution</span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      We focus on clear market fit, strong UX, and high-growth potential. Our approach combines
                      strategic vision with rapid execution and community-driven innovation.
                    </p>
                  </div>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Division Overview Section */}
        <section id="studio" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Division Overview
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Two Divisions, One Mission
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Our complementary divisions work together to create, validate, and scale innovative products.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <ScrollTriggerComponent animation="slideIn">
                <div
                  id="builder-house"
                  className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full"
                >
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Tool className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="chars" animation="fadeUp" stagger={0.02}>
                      Builder House
                    </SplitText>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2 font-medium">Where ideas are born.</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Builder House is our community division—a home for creators, developers, and innovators to
                    experiment, compete, and collaborate. From weekly challenges to hackable prototypes, this is where
                    the next great thing starts.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">Live challenges & build events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">Community-driven ideas & feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">The R&D lab feeding the Studio</span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                  >
                    <Link href="/community" className="flex items-center">
                      Join the Builder House <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="slideIn" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Flask className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="chars" animation="fadeUp" stagger={0.02}>
                      Studio
                    </SplitText>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2 font-medium">Where vision becomes product.</p>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Our product development division takes validated ideas and turns them into scalable, venture-ready
                    software. We focus on clear market fit, strong UX, and high-growth potential.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">Marketable, revenue-driven products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">MVP to launch-ready in weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="text-green-400 text-sm">✓</div>
                      <span className="text-zinc-300 text-sm">Portfolio of 10+ active ventures</span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                  >
                    Learn More About Studio <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">Portfolio</Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  What We're Building
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  A curated look at a few of our top ventures, each with a unique market focus and growth trajectory.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ProductCard
                title="Product 1"
                description="A lightning-fast reporting tool for financial analysts."
                progress={75}
                index={0}
              />

              <ProductCard
                title="Product 2"
                description="AI-powered tournament hosting for the eSports world."
                progress={50}
                index={1}
              />

              <ProductCard
                title="Product 3"
                description="Proposal software built for freelancers who hate proposals."
                progress={90}
                index={2}
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
              >
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  We're founders first.
                </SplitText>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="mb-6 relative">
                    <div className="aspect-square rounded-xl bg-zinc-800/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 size-12 rounded-full bg-zinc-700 flex items-center justify-center">
                        <span className="text-xl font-light">S</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-light">
                      <SplitText type="chars" animation="fadeIn" stagger={0.03}>
                        Shawn
                      </SplitText>
                    </h3>
                    <Link href="#" className="text-zinc-400 hover:text-white">
                      <LinkedinIcon className="size-5" />
                    </Link>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Co-Founder, CEO - fundraising, strategic, leadership, investor relations
                  </p>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="mb-6 relative">
                    <div className="aspect-square rounded-xl bg-zinc-800/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 size-12 rounded-full bg-zinc-700 flex items-center justify-center">
                        <span className="text-xl font-light">J</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-light">
                      <SplitText type="chars" animation="fadeIn" stagger={0.03}>
                        Josh
                      </SplitText>
                    </h3>
                    <Link href="#" className="text-zinc-400 hover:text-white">
                      <LinkedinIcon className="size-5" />
                    </Link>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Co-Founder, Chief Product Officer - Product Vision, Market fit, execution strategy
                  </p>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.4}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="mb-6 relative">
                    <div className="aspect-square rounded-xl bg-zinc-800/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 size-12 rounded-full bg-zinc-700 flex items-center justify-center">
                        <span className="text-xl font-light">D</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-light">
                      <SplitText type="chars" animation="fadeIn" stagger={0.03}>
                        Dave
                      </SplitText>
                    </h3>
                    <Link href="#" className="text-zinc-400 hover:text-white">
                      <LinkedinIcon className="size-5" />
                    </Link>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">Co-founder, Head of Community & Innovation</p>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollTriggerComponent animation="scale">
              <div className="bg-zinc-900/50 rounded-xl p-8 md:p-12 border border-zinc-800/50 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-light mb-4">
                    <SplitText type="words" animation="fadeUp" stagger={0.08}>
                      Let's build something worth shipping.
                    </SplitText>
                  </h2>
                  <p className="text-zinc-400 text-sm mb-8">
                    <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                      Whether you want to invest, partner, or join the community, let's talk.
                    </SplitText>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 h-10 text-sm">
                      Contact Us
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                    >
                      Get Involved
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

