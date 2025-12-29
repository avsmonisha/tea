import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Featured Teas
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Our most beloved selections, chosen for their exceptional quality and unique character.
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="text-primary hover:text-primary group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
