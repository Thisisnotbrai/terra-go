import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-secondary shadow-xl">
          
          <div className="relative px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
            
            <div className="text-center space-y-6 sm:space-y-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-medium">
                  Start Your Impact Journey Today
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Contribute to a Sustainable Future?
              </h2>

              <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto">
                Join thousands of eco-travelers making a real difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 gap-2 w-full sm:w-auto">
                  Join Your First Eco Mission
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  Learn More
                </Button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 pt-6 text-white/80 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">50,000+</div>
                  <div className="text-xs sm:text-sm">Members</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">180+</div>
                  <div className="text-xs sm:text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">1,200+</div>
                  <div className="text-xs sm:text-sm">Projects</div>
                </div>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}