import { Link } from "react-router";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">Terra Go</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Destinations
            </a>
            <a href="#activities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Activities
            </a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link to ="/auth">
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                    Sign In
                </Button>
            </Link>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}