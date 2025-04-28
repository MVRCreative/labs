import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, BarChart2, Zap, Users } from "lucide-react"
import { CursorEffect } from "@/components/cursor-effect"
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
                <Image src="/logo.svg" alt="MAVER" width={140} height={20} priority />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
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
                Limited Time Offer
              </Badge>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Transform Your
                </SplitText>{" "}
                <span className="text-orange-400">
                  <SplitText type="chars" animation="random" stagger={0.04} delay={0.5}>
                    Business Today
                  </SplitText>
                </span>
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-pretty text-zinc-400 max-w-3xl mx-auto">
                <SplitText type="words" animation="fadeIn" stagger={0.02} delay={0.8}>
                  Powerful solutions designed to streamline your operations, boost productivity, and drive growth for
                  your business.
                </SplitText>
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-6 h-auto text-sm">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-8 py-6 h-auto text-sm"
                >
                  Book a Demo
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

        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <ScrollTriggerComponent animation="fadeUp">
              <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light text-orange-400 mb-2">98%</div>
                    <p className="text-zinc-400 text-sm">Customer Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-orange-400 mb-2">10k+</div>
                    <p className="text-zinc-400 text-sm">Active Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-orange-400 mb-2">35%</div>
                    <p className="text-zinc-400 text-sm">Productivity Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-orange-400 mb-2">24/7</div>
                    <p className="text-zinc-400 text-sm">Customer Support</p>
                  </div>
                </div>
              </div>
            </ScrollTriggerComponent>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Key Features
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Everything You Need to Succeed
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Our comprehensive suite of tools and services designed to help your business thrive in today's
                  competitive market.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Zap className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="chars" animation="fadeUp" stagger={0.02}>
                      Lightning Fast Performance
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Our platform is optimized for speed and efficiency, ensuring your team can work without delays or
                    interruptions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Real-time data processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Minimal latency across all devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">99.9% uptime guarantee</span>
                    </li>
                  </ul>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <BarChart2 className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="chars" animation="fadeUp" stagger={0.02}>
                      Advanced Analytics
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Gain valuable insights into your business performance with our comprehensive analytics dashboard.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Customizable reporting tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Predictive analysis capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Data visualization and export options</span>
                    </li>
                  </ul>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.4}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="size-12 rounded-full border border-orange-500/20 flex items-center justify-center mb-6">
                    <Users className="text-orange-400 size-5" />
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="chars" animation="fadeUp" stagger={0.02}>
                      Team Collaboration
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Empower your team to work together seamlessly with our integrated collaboration tools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Real-time document editing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Project management capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Secure file sharing and storage</span>
                    </li>
                  </ul>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Business Solutions
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Tailored for Your Industry
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  We understand that different industries have unique challenges. Our solutions are customized to meet
                  your specific needs.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollTriggerComponent animation="slideIn">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="mb-6 relative">
                    <div className="aspect-video rounded-xl bg-zinc-800/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="words" animation="slideIn" stagger={0.05}>
                      Enterprise Solutions
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    Comprehensive tools designed for large organizations with complex needs. Scale your operations
                    efficiently while maintaining security and compliance.
                  </p>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="slideIn" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="mb-6 relative">
                    <div className="aspect-video rounded-xl bg-zinc-800/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-light mb-3">
                    <SplitText type="words" animation="slideIn" stagger={0.05}>
                      Small Business Package
                    </SplitText>
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                    Affordable solutions tailored for growing businesses. Get all the essential tools you need without
                    the enterprise price tag.
                  </p>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Pricing Plans
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  Transparent Pricing, No Surprises
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Choose the plan that works best for your business needs. All plans include core features with no
                  hidden fees.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="text-zinc-400 text-sm mb-4">Starter</div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-light">$29</span>
                    <span className="text-zinc-500 ml-2">/month</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Perfect for small teams and startups just getting off the ground.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Up to 5 team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Basic analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">5GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-zinc-800 hover:bg-zinc-700 rounded-full px-6 h-10 text-sm">
                    Get Started
                  </Button>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-orange-500/30 backdrop-blur-sm h-full relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div className="text-orange-400 text-sm mb-4">Professional</div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-light">$79</span>
                    <span className="text-zinc-500 ml-2">/month</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Ideal for growing businesses that need more features and capacity.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Up to 20 team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">50GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Custom integrations</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 rounded-full px-6 h-10 text-sm">
                    Get Started
                  </Button>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.4}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="text-zinc-400 text-sm mb-4">Enterprise</div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-light">$199</span>
                    <span className="text-zinc-500 ml-2">/month</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    For large organizations that need maximum power and customization.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Unlimited team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Enterprise-grade analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">500GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">24/7 dedicated support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 size-4 mt-0.5" />
                      <span className="text-zinc-300 text-sm">Custom development</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-zinc-800 hover:bg-zinc-700 rounded-full px-6 h-10 text-sm">
                    Contact Sales
                  </Button>
                </div>
              </ScrollTriggerComponent>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-zinc-800/50 text-orange-400 hover:bg-zinc-800/50 rounded-full">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-light mb-6">
                <SplitText type="words" animation="fadeUp" stagger={0.08}>
                  What Our Clients Say
                </SplitText>
              </h2>
              <p className="text-zinc-400">
                <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </SplitText>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ScrollTriggerComponent animation="fadeUp">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="size-12 rounded-full bg-zinc-800 mr-4"></div>
                    <div>
                      <h4 className="text-lg font-light">Sarah Johnson</h4>
                      <p className="text-zinc-500 text-sm">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    "MAVER has completely transformed how we operate. The analytics tools alone have helped us increase
                    our revenue by 35% in just six months."
                  </p>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.2}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="size-12 rounded-full bg-zinc-800 mr-4"></div>
                    <div>
                      <h4 className="text-lg font-light">Michael Chen</h4>
                      <p className="text-zinc-500 text-sm">Operations Director, Global Logistics</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    "The implementation was seamless, and the support team has been exceptional. We've been able to
                    streamline our processes and reduce overhead costs significantly."
                  </p>
                </div>
              </ScrollTriggerComponent>

              <ScrollTriggerComponent animation="fadeUp" delay={0.4}>
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="size-12 rounded-full bg-zinc-800 mr-4"></div>
                    <div>
                      <h4 className="text-lg font-light">Jessica Williams</h4>
                      <p className="text-zinc-500 text-sm">Marketing Manager, Retail Solutions</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    "As a marketing team, we needed tools that could keep up with our fast-paced environment. MAVER not
                    only met but exceeded our expectations. The collaboration features are game-changing."
                  </p>
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
                      Ready to transform your business?
                    </SplitText>
                  </h2>
                  <p className="text-zinc-400 text-sm mb-8">
                    <SplitText type="words" animation="fadeIn" stagger={0.03} delay={0.3}>
                      Get started today with a 14-day free trial. No credit card required.
                    </SplitText>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-orange-600 hover:bg-orange-700 rounded-full px-6 h-10 text-sm">
                      Start Free Trial
                    </Button>
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 rounded-full px-6 h-10 text-sm"
                    >
                      Schedule a Demo
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
                <Image src="/logo.svg" alt="MAVER" width={100} height={16} />
                <p className="text-zinc-500 text-sm mt-2">Transforming businesses since 2020</p>
              </div>
              <div className="flex gap-8">
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Privacy
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Terms
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Support
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm">
                  Contact
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-zinc-600 text-xs">© 2025 MAVER. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
