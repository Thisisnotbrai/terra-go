import { MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function FeaturedProject() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-accent/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Project
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Active Environmental Restoration
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our most impactful projects
          </p>
        </div>

        <Card className="overflow-hidden border shadow-lg">
          <div className="grid lg:grid-cols-2">
            
            {/* IMAGE */}
            <div className="relative h-64 sm:h-80 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643276714790-9e30f89a5a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Omapoy Reef Restoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-secondary text-secondary-foreground">
                  Active Project
                </Badge>
              </div>
            </div>

            {/* CONTENT */}
            <CardContent className="p-5 sm:p-8 flex flex-col justify-between">
              
              <div className="space-y-5">
                
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Omapoy Reef Restoration
                  </h3>

                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Philippines
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      2,450 contributors
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground">
                  Help restore coral ecosystems through transplantation and monitoring.
                </p>

                {/* PROGRESS */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Funding</span>
                    <span className="text-muted-foreground">₱38k / ₱50k</span>
                  </div>
                  <Progress value={71} />
                  <div className="flex items-center gap-1 text-sm text-secondary font-medium">
                    <TrendingUp className="h-4 w-4" />
                    71% funded
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-accent">
                    <div className="font-bold text-primary">250+</div>
                    <div className="text-[10px] sm:text-xs">Corals</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-accent">
                    <div className="font-bold text-primary">12</div>
                    <div className="text-[10px] sm:text-xs">Species</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-lg bg-accent">
                    <div className="font-bold text-primary">3.2k</div>
                    <div className="text-[10px] sm:text-xs">Sq m</div>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="w-full">Contribute Now</Button>
                <Button variant="outline" className="w-full">
                  View Live Impact
                </Button>
              </div>

            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}