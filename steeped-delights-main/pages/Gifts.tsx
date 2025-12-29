import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Gift } from "lucide-react";

const Gifts = () => {
  const allGifts = getProductsByCategory("gifts");

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="h-8 w-8 text-primary" />
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">Gift Sets</h1>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Beautifully curated tea gift collections, perfect for any occasion. 
            Each set is thoughtfully packaged and ready to delight.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {allGifts.length} {allGifts.length === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGifts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gifts;
