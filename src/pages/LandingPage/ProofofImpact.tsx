import { MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const activities = [
  {
    id: 1,
    title: "Mangrove Planting Session",
    location: "Bali, Indonesia",
    time: "2 hours ago",
    points: 150,
    image: "https://images.unsplash.com/photo-1643276714790-9e30f89a5a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    participants: 45,
  },
  {
    id: 2,
    title: "Beach Cleanup Drive",
    location: "Maldives",
    time: "5 hours ago",
    points: 85,
    image: "https://images.unsplash.com/photo-1751646312130-d6be98d867bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    participants: 28,
  },
  {
    id: 3,
    title: "Coral Monitoring & Survey",
    location: "Great Barrier Reef, Australia",
    time: "1 day ago",
    points: 120,
    image: "https://images.unsplash.com/photo-1770535849271-b3caeb39a107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    participants: 32,
  },
  {
    id: 4,
    title: "Reforestation Project",
    location: "Amazon Rainforest, Brazil",
    time: "2 days ago",
    points: 200,
    image: "https://images.unsplash.com/photo-1643276714790-9e30f89a5a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    participants: 67,
  },
];

export function ProofOfImpact() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-accent/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Recent Impact Activities
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Live feed of environmental activities completed by our community
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-4 sm:space-y-5">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="border shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 sm:p-5">
                
                <div className="flex flex-col sm:flex-row gap-4">
                  
                  {/* IMAGE */}
                  <div className="relative w-full sm:w-24 h-40 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0">
                    
                    {/* TITLE + BADGE */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                      
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-1">
                          {activity.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                          
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{activity.location}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{activity.time}</span>
                          </div>

                        </div>
                      </div>

                      <Badge className="bg-secondary/10 text-secondary border-secondary/20 self-start sm:self-auto">
                        +{activity.points} pts
                      </Badge>
                    </div>

                    {/* PARTICIPANTS */}
                    <div className="flex items-center gap-2 mt-3">
                      
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-6 w-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-card flex items-center justify-center text-xs"
                          >
                            {String.fromCharCode(65 + i - 1)}
                          </div>
                        ))}
                      </div>

                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {activity.participants} participants
                      </span>

                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <button className="text-primary hover:underline font-medium text-sm sm:text-base">
            View All Activities →
          </button>
        </div>

      </div>
    </section>
  );
}