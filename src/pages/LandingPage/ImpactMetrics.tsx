import { TrendingUp, Leaf, Trash2, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Carbon Offset",
    value: "12,450",
    unit: "tons",
    change: "+18%",
    icon: TrendingUp,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Plastic Removed",
    value: "8,920",
    unit: "kg",
    change: "+24%",
    icon: Trash2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Trees Planted",
    value: "2.5M",
    unit: "trees",
    change: "+32%",
    icon: Leaf,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Local Projects Supported",
    value: "1,247",
    unit: "projects",
    change: "+15%",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function ImpactMetrics() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Global Impact in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track the collective environmental impact of our community across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-lg ${metric.bgColor}`}>
                      <Icon className={`h-5 w-5 ${metric.color}`} />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-secondary">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {metric.change}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.unit}
                    </div>
                    <div className="text-sm font-medium mt-2">
                      {metric.title}
                    </div>
                  </div>

                  {/* Mini progress indicator */}
                  <div className="mt-4 h-1.5 bg-accent rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${metric.color === "text-secondary" ? "bg-secondary" : "bg-primary"}`}
                      style={{ width: "75%" }}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
