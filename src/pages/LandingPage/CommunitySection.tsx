import { Trophy, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const topStewards = [
  { name: "Jeuniceff Umali", points: 12450, rank: 1, badge: "🌟", level: "Diamond" },
  { name: "John Christian Valdez", points: 11230, rank: 2, badge: "🏆", level: "Diamond" },
  { name: "Noel Mateo", points: 10890, rank: 3, badge: "🥉", level: "Platinum" },
  { name: "Angel Libril", points: 9560, rank: 4, badge: "⭐", level: "Platinum" },
  { name: "Zef Sarmiento", points: 8920, rank: 5, badge: "💎", level: "Gold" },
];

const achievements = [
  {
    icon: Trophy,
    title: "Ocean Protector",
    description: "Complete 50 marine conservation activities",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Award,
    title: "Tree Planter",
    description: "Plant 1,000 trees across different projects",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Target,
    title: "Carbon Neutral",
    description: "Offset 10 tons of carbon emissions",
    color: "bg-secondary/10 text-secondary",
  },
];

export function CommunitySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Join Our Global Community
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with eco-conscious travelers and environmental stewards making a difference worldwide
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* LEADERBOARD */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h3 className="text-lg sm:text-xl font-bold">
                  Top Environmental Stewards
                </h3>
                <Badge variant="outline" className="gap-1 w-fit">
                  <Trophy className="h-3.5 w-3.5" />
                  This Month
                </Badge>
              </div>

              <div className="space-y-3">
                {topStewards.map((steward) => (
                  <div
                    key={steward.rank}
                    className={`flex items-center gap-3 sm:gap-4 p-3 rounded-lg transition-colors ${
                      steward.rank <= 3 ? "bg-accent" : "hover:bg-accent/50"
                    }`}
                  >
                    
                    {/* LEFT */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      
                      <div className="font-bold text-muted-foreground w-5 text-center text-sm">
                        {steward.rank}
                      </div>

                      <Avatar className="h-9 w-9 sm:h-10 sm:w-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-xs">
                          {steward.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate text-sm sm:text-base">
                          {steward.name}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          {steward.level} Member
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="text-right">
                      <div className="font-bold text-primary text-sm sm:text-base">
                        {steward.points.toLocaleString()}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">
                        points
                      </div>
                    </div>

                    <div className="text-xl sm:text-2xl">
                      {steward.badge}
                    </div>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>

          {/* RIGHT SIDE */}
          <div className="space-y-5 sm:space-y-6">
            
            {/* ACHIEVEMENTS */}
            <Card className="border shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">
                  Community Achievements
                </h3>

                <div className="space-y-4">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={achievement.title} className="flex items-start gap-3 sm:gap-4">
                        <div className={`p-2.5 sm:p-3 rounded-lg ${achievement.color}`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </CardContent>
            </Card>

            {/* CTA CARD */}
            <Card className="border shadow-sm bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-5 sm:p-6 text-center space-y-4">
                
                <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-sm sm:text-base">
                    Unlock Exclusive Badges
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Earn recognition for your environmental contributions
                  </p>
                </div>

                <button className="text-primary hover:underline font-medium text-sm">
                  View All Badges →
                </button>

              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}