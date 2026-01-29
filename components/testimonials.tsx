import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "CodeCraft transformed our outdated system into a modern, scalable platform. Their team's expertise and professionalism exceeded our expectations.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc",
    rating: 5,
  },
  {
    quote: "Working with CodeCraft was a game-changer for our startup. They delivered a production-ready MVP in just 8 weeks that helped us secure our Series A.",
    author: "Marcus Rodriguez",
    role: "Founder",
    company: "Nexus AI",
    rating: 5,
  },
  {
    quote: "The team's attention to detail and commitment to quality is unmatched. They don't just write code—they build solutions that truly work.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "DataStream",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium">Testimonials</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Trusted by industry leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about working with our team.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6">
                {`"${testimonial.quote}"`}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
