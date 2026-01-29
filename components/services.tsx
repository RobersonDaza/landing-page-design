import { Code, Database, Cloud, Smartphone, Globe, Shield } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust and scalable APIs that power your applications and enable seamless integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design and implementation of cloud-native solutions for optimal performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications built with the latest technologies and best practices.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments to identify vulnerabilities and protect your systems.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything you need to build great products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end development services to bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
