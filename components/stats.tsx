const stats = [
  { value: "500+", label: "Projects Delivered", description: "across industries" },
  { value: "99%", label: "Client Satisfaction", description: "retention rate" },
  { value: "50+", label: "Expert Developers", description: "on our team" },
  { value: "24/7", label: "Support Available", description: "when you need us" },
]

export function Stats() {
  return (
    <section className="py-16 border-y border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
