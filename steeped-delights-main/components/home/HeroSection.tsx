import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="h-24 w-24 text-primary" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Leaf className="h-16 w-16 text-primary rotate-45" />
        </div>
        <div className="absolute top-40 right-40 animate-float" style={{ animationDelay: "2s" }}>
          <Leaf className="h-12 w-12 text-primary -rotate-12" />
        </div>
      </div>

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <span className="inline-block text-secondary font-medium tracking-widest uppercase text-sm">
              Artisan Tea Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Discover the Art of
              <br />
              <span className="text-primary">Exceptional Tea</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From ancient tea gardens to your cup. We source the world's finest leaves, 
            honoring centuries of tradition with every sip.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products?category=green">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                Explore Green Teas
              </Button>
            </Link>
          </div>

          <div className="flex justify-center gap-8 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Premium Teas</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground">Organic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
