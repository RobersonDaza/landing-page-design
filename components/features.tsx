import { Zap, Users, GitBranch, Clock, CheckCircle2, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid development cycles without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work directly with senior developers who understand your business goals.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Complete transparency with Git-based workflows and regular code reviews.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule, every time.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure bug-free, production-ready code.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimized",
    description: "Applications built for speed, scalability, and optimal user experience.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-medium">Why Choose Us</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Faster iteration. More innovation.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
            </p>

            {/* Features List */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-muted-foreground ml-2 font-mono">api.ts</span>
              </div>
              <pre className="p-4 text-xs sm:text-sm overflow-x-auto max-w-full">
                <code className="font-mono whitespace-pre-wrap break-words sm:whitespace-pre sm:break-normal">
                  <span className="text-accent">{"'use server'"}</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">{"import"}</span>
                  <span className="text-foreground">{" { db } "}</span>
                  <span className="text-muted-foreground">{"from"}</span>
                  <span className="text-accent">{" '@/lib/database'"}</span>
                  {"\n\n"}
                  <span className="text-muted-foreground">{"export async function"}</span>
                  <span className="text-foreground">{" fetchProjects() {"}</span>
                  {"\n"}
                  <span className="text-foreground">{"  const projects = "}</span>
                  <span className="text-muted-foreground">{"await"}</span>
                  <span className="text-foreground">{" db.project.findMany({"}</span>
                  {"\n"}
                  <span className="text-foreground">{"    orderBy: { createdAt: "}</span>
                  <span className="text-accent">{"'desc'"}</span>
                  <span className="text-foreground">{" },"}</span>
                  {"\n"}
                  <span className="text-foreground">{"    include: { team: "}</span>
                  <span className="text-accent">{"true"}</span>
                  <span className="text-foreground">{" }"}</span>
                  {"\n"}
                  <span className="text-foreground">{"  })"}</span>
                  {"\n"}
                  <span className="text-foreground">{"  "}</span>
                  <span className="text-muted-foreground">{"return"}</span>
                  <span className="text-foreground">{" projects"}</span>
                  {"\n"}
                  <span className="text-foreground">{"}"}</span>
                </code>
              </pre>
            </div>

            {/* Floating Card */}
            <div className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-6 sm:-left-6 p-4 rounded-lg border border-border bg-card shadow-lg w-fit">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Build Successful</div>
                  <div className="text-xs text-muted-foreground">Deployed in 2.3s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
