"use client";

import { Bell, Search, TrendingUp, Leaf, Users, Award, TreePine, MapPin, Star, ChevronDown, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  {
    label: "Carbon Offset",
    value: "245",
    unit: "kg CO₂",
    change: "+12%",
    icon: Leaf,
    color: "text-secondary",
    bg: "bg-secondary/10",
    data: [20, 35, 45, 55, 70, 85, 100],
  },
  {
    label: "Activities Joined",
    value: "18",
    unit: "events",
    change: "+8%",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    data: [10, 20, 30, 50, 60, 75, 90],
  },
  {
    label: "Points Earned",
    value: "2,450",
    unit: "pts",
    change: "+15%",
    icon: Award,
    color: "text-primary",
    bg: "bg-primary/10",
    data: [15, 30, 50, 60, 72, 88, 95],
  },
  {
    label: "Trees Planted",
    value: "12",
    unit: "trees",
    change: "+20%",
    icon: TreePine,
    color: "text-secondary",
    bg: "bg-secondary/10",
    data: [5, 20, 40, 55, 65, 80, 100],
  },
];

const achievements = [
  { label: "Beach Hero", emoji: "🏖️", color: "bg-orange-100 text-orange-700" },
  { label: "Tree Hugger", emoji: "🌳", color: "bg-green-100 text-green-700" },
  { label: "Ocean Guardian", emoji: "🌊", color: "bg-blue-100 text-blue-700" },
];

const destinations = [
  { name: "Great Barrier Reef", location: "Queensland, Australia", rating: 4.9, img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80" },
];

function MiniChart({ data, accent }: { data: number[]; accent: string }) {
  const max = Math.max(...data);
  const w = 180;
  const h = 48;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / max) * h}`).join(" ");
  const fill = `${pts} ${w},${h} 0,${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12" preserveAspectRatio="none">
      <polygon points={fill} fill={accent} opacity="0.18" />
      <polyline points={pts} fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-card border-b border-border px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 mr-6">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-foreground text-lg">Terra Go</span>
        </div>
        <div className="flex-1 max-w-lg relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search destinations or activities..."
            className="pl-9 bg-muted/40 border-transparent focus-visible:ring-1"
          />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-secondary text-white text-sm font-medium">AM</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">Alex Morgan</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero */}
        <section className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold text-foreground flex items-center gap-2">
              Welcome back, Alex <span>🌿</span>
            </h1>
            <p className="text-muted-foreground mt-1">Continue your sustainable journey today</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              Explore Destinations →
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Join Activities
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            const accentColor = s.color.includes("secondary") ? "#2D5F3F" : "#D97652";
            return (
              <Card key={s.label} className="overflow-hidden border border-border shadow-none hover:shadow-md transition-shadow">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {s.change}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-semibold text-foreground">
                      {s.value} <span className="text-sm font-normal text-muted-foreground">{s.unit}</span>
                    </p>
                  </div>
                  <MiniChart data={s.data} accent={accentColor} />
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Featured + Progress */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          {/* Featured Destination */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Featured Eco Destination</h2>
            <Card className="overflow-hidden border border-border shadow-none group cursor-pointer">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80"
                  alt="Great Barrier Reef"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-white/90 text-foreground gap-1 font-medium">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> 4.9 Eco Rating
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Great Barrier Reef</h3>
                  <p className="text-sm text-white/80 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> Queensland, Australia
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Your Progress</h2>
            <Card className="border border-border shadow-none">
              <CardContent className="p-5 space-y-5">
                {/* Level */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">Eco Explorer 🌱</p>
                      <Badge className="bg-primary text-white text-xs">Level 5</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">2,450 points</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress to next level</span>
                    <span className="font-medium text-foreground">2450 / 3000</span>
                  </div>
                  <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "82%",
                        background: "linear-gradient(90deg, #D97652, #2D5F3F)",
                      }}
                    />
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-sm font-medium text-foreground flex items-center gap-1.5 mb-3">
                    <Star className="w-3.5 h-3.5 text-yellow-500" /> Recent Achievements
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievements.map((a) => (
                      <span
                        key={a.label}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${a.color}`}
                      >
                        <span>{a.emoji}</span> {a.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border">
                  {[
                    { label: "Streak", value: "7 days", emoji: "🔥" },
                    { label: "Rank", value: "#142", emoji: "📊" },
                    { label: "Next", value: "550 pts", emoji: "🎯" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-lg">{item.emoji}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Recent Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Beach Cleanup", location: "Bondi Beach, AU", date: "Mar 28", pts: "+120 pts", emoji: "🏖️", participants: 34 },
              { title: "Tree Planting Day", location: "Blue Mountains, AU", date: "Mar 22", pts: "+200 pts", emoji: "🌳", participants: 58 },
              { title: "Coral Monitoring", location: "Cairns, AU", date: "Mar 15", pts: "+180 pts", emoji: "🐠", participants: 12 },
            ].map((act) => (
              <Card key={act.title} className="border border-border shadow-none hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-xl shrink-0">
                    {act.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{act.title}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> {act.location}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{act.date} · {act.participants} joined</span>
                      <Badge className="bg-emerald-50 text-emerald-700 text-xs font-medium border-0">{act.pts}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}