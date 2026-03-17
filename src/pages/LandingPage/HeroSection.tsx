import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Slider from "react-slick";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1761590700229-0ba5b9e9d842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Coral reef ecosystem",
    badge: "🌊",
    title: "Ocean Conservation",
    subtitle: "Active in 45 locations",
    points: "+12.5k pts"
  },
  {
    src: "https://images.unsplash.com/photo-1759711666840-5314166256ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Coastal conservation",
    badge: "🏝️",
    title: "Coastal Protection",
    subtitle: "52 active projects",
    points: "+8.2k pts"
  },
  {
    src: "https://images.unsplash.com/photo-1697350978674-4b40261b0dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Rainforest conservation",
    badge: "🌳",
    title: "Forest Conservation",
    subtitle: "Active in 38 regions",
    points: "+15.8k pts"
  },
  {
    src: "https://images.unsplash.com/photo-1768473425747-576b88953f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Eco-friendly destination",
    badge: "🌿",
    title: "Sustainable Tourism",
    subtitle: "180+ destinations",
    points: "+9.5k pts"
  }
];

export function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium">
                Join 50,000+ eco-travelers
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Every mile makes a difference
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Discover eco-friendly destinations, participate in environmental restoration projects, 
              and contribute to local communities while exploring the world's most beautiful places.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Eco Destinations
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Join Environmental Activities
              </Button>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </div>

              <div className="hidden sm:block h-12 w-px bg-border" />

              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">180+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>

              <div className="hidden sm:block h-12 w-px bg-border" />

              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Impact Score</div>
              </div>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative">
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Slider {...settings} className="hero-carousel">
                {carouselImages.map((image, index) => (
                  <div key={index} className="relative">
                    <ImageWithFallback 
                      src={image.src}
                      alt={image.alt} 
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ))}
              </Slider>
            </div>
            
            {/* FLOATING CARD */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-card rounded-xl shadow-lg p-4 border">
              <div className="flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-lg">🌊</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">
                      Ocean Conservation
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      Active in 45 locations
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs sm:text-sm font-medium text-secondary">
                    +12.5k pts
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}