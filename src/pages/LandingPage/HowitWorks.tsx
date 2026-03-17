import { Search, Waves, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover Eco Destinations",
    description: "Browse verified sustainable travel destinations and environmental projects worldwide.",
    color: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: Waves,
    title: "Join Environmental Activities",
    description: "Participate in restoration projects, beach cleanups, and conservation efforts during your travels.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    number: "03",
    icon: Award,
    title: "Earn Impact Points & Rewards",
    description: "Track your environmental contributions and unlock exclusive eco-travel rewards and recognition.",
    color: "bg-primary/10 text-primary",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Terra Go Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start making a positive environmental impact while exploring the world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <Card className="border shadow-sm hover:shadow-md transition-all h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}>
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-sm font-bold text-muted-foreground/40">
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
