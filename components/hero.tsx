import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 right-0 w-1/3 h-px bg-linear-to-l from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/3 left-1/4 w-px h-32 bg-linear-to-b from-border to-transparent" />
      <div className="absolute bottom-1/3 right-1/4 w-px h-32 bg-linear-to-b from-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Now accepting new projects</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance max-w-4xl mx-auto">
          Expert Programming Services for the Web
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Transform your ideas into powerful software solutions. Custom development, API integrations, and scalable architecture built by industry experts.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 h-12 text-base border-border text-foreground hover:bg-secondary bg-transparent">
            View Our Work
          </Button>
        </div>

        {/* Terminal Preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="rounded-lg border border-border bg-card overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm text-muted-foreground ml-2 font-mono">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-left">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="h-4 w-4" />
                <span>~ npx create-codecraft-app@latest</span>
              </div>
              <div className="mt-2 text-accent">
                {">"} Initializing your project...
              </div>
              <div className="mt-1 text-muted-foreground">
                {">"} Installing dependencies...
              </div>
              <div className="mt-1 text-foreground">
                {">"} Ready! Your project is set up.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
