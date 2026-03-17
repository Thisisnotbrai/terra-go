import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Leaf, Mail, Lock, User, ArrowLeft } from "lucide-react";

export function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="h-screen overflow-hidden grid lg:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex relative">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1629517797905-ee64c208d9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Nature"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
          
          <Link to="/" className="flex items-center gap-2 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">Terra Go</span>
            </div>

            <h2 className="text-2xl font-bold">
              Eco-friendly travel starts here
            </h2>

            <p className="text-sm text-white/80">
              Join thousands making real environmental impact.
            </p>
          </div>

          <div className="flex gap-6 text-xs">
            <div>
              <div className="font-bold">2.5M+</div>
              Trees
            </div>
            <div>
              <div className="font-bold">180+</div>
              Countries
            </div>
            <div>
              <div className="font-bold">95%</div>
              Impact
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-4 py-4">
        
        <div className="w-full max-w-sm space-y-4">
          
          {/* MOBILE HEADER */}
          <div className="lg:hidden flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1 text-sm">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>

            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-secondary" />
              <span className="font-semibold">Terra Go</span>
            </div>
          </div>

          {/* TITLE */}
          <div>
            <h1 className="text-xl font-bold">Welcome</h1>
            <p className="text-xs text-muted-foreground">
              Login or create account
            </p>
          </div>

          {/* TABS */}
          <Tabs defaultValue="login" className="w-full">
            
            <TabsList className="grid grid-cols-2 h-9">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* LOGIN */}
            <TabsContent value="login" className="space-y-3">
              <form onSubmit={handleSubmit} className="space-y-3">
                
                <InputField icon={Mail} type="email" placeholder="Email" />
                <InputField icon={Lock} type="password" placeholder="Password" />

                <Button size="sm" className="w-full" disabled={isLoading}>
                  {isLoading ? "..." : "Sign in"}
                </Button>
              </form>

              <Divider />
              <SocialButtons />
            </TabsContent>

            {/* REGISTER */}
            <TabsContent value="register" className="space-y-3">
              <form onSubmit={handleSubmit} className="space-y-3">
                
                <InputField icon={User} placeholder="Full name" />
                <InputField icon={Mail} type="email" placeholder="Email" />
                <InputField icon={Lock} type="password" placeholder="Password" />

                <Button size="sm" className="w-full" disabled={isLoading}>
                  {isLoading ? "..." : "Create"}
                </Button>
              </form>

              <Divider />
              <SocialButtons />
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function InputField({ icon: Icon, ...props }: any) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input className="pl-9 h-9 text-sm" {...props} required />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <div className="flex-1 border-t" />
      OR
      <div className="flex-1 border-t" />
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button size="sm" variant="outline">Google</Button>
      <Button size="sm" variant="outline">GitHub</Button>
    </div>
  );
}