import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Package } from "lucide-react";

export default function Samplers() {
  const allSamplers = getProductsByCategory("samplers");

  return (
    <Layout>
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">Tea Samplers</h1>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Discover your perfect cup with our curated sampler collections. 
            Explore a variety of flavors and find your new favorites.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {allSamplers.length} {allSamplers.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSamplers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
