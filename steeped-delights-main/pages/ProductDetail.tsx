import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/products/ProductCard";
import { toast } from "@/hooks/use-toast";
import {
  ChevronLeft,
  Minus,
  Plus,
  ShoppingCart,
  Leaf,
  MapPin,
  Package,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="font-serif text-2xl text-foreground mb-4">Product not found</h1>
          <Link to="/products">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const categoryLabels: Record<string, string> = {
    green: "Green Tea",
    black: "Black Tea",
    oolong: "Oolong",
    white: "White Tea",
    herbal: "Herbal",
    "pu-erh": "Pu-erh",
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.title} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            to={`/products?category=${product.category}`}
            className="hover:text-foreground transition-colors"
          >
            {categoryLabels[product.category]}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image_url}
              alt={product.title}
              className="h-full w-full object-cover animate-fade-in"
            />
            <Badge
              variant="secondary"
              className="absolute top-4 left-4 bg-secondary text-secondary-foreground"
            >
              {categoryLabels[product.category]}
            </Badge>
          </div>

          {/* Details */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                {product.origin}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                {product.title}
              </h1>
            </div>

            <p className="text-2xl font-semibold text-foreground">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <Separator />

            {/* Flavour Notes */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Flavour Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavour_notes.map((note) => (
                  <Badge
                    key={note}
                    variant="outline"
                    className="bg-muted text-foreground"
                  >
                    {note}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Origin</p>
                  <p className="text-sm font-medium text-foreground">{product.origin}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                <Leaf className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-medium text-foreground">
                    {categoryLabels[product.category]}
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="h-4 w-4" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
