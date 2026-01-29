import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "$5,000",
    period: "starting at",
    features: [
      "Up to 4 weeks development",
      "Single developer",
      "Basic documentation",
      "30-day support",
      "Source code delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "$15,000",
    period: "starting at",
    features: [
      "Up to 12 weeks development",
      "Dedicated team (2-3 devs)",
      "Full documentation",
      "90-day support",
      "CI/CD setup",
      "Performance optimization",
    ],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited development scope",
      "Full dedicated team",
      "Architecture design",
      "24/7 priority support",
      "SLA guarantee",
      "Ongoing maintenance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium">Pricing</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Transparent pricing for every stage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your project needs. All plans include our commitment to quality and on-time delivery.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border bg-card ${
                plan.popular
                  ? "border-accent"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
