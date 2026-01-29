import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-3xl mx-auto">
              Ready to build something amazing?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Let's discuss your project and see how we can help bring your vision to life. Schedule a free consultation today."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 h-12 text-base border-border text-foreground hover:bg-secondary bg-transparent">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
