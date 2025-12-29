import { Link } from "react-router-dom";
import { ShoppingCart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const categoryLabels: Record<string, string> = {
    green: "Green Tea",
    black: "Black Tea",
    oolong: "Oolong",
    white: "White Tea",
    herbal: "Herbal",
    "pu-erh": "Pu-erh",
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image_url}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-secondary text-secondary-foreground"
          >
            {categoryLabels[product.category]}
          </Badge>
          <Button
            size="icon"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.origin}
            </p>
            <h3 className="font-serif text-lg font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {product.flavour_notes.slice(0, 3).map((note) => (
                <span
                  key={note}
                  className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                >
                  {note}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-semibold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary hover:bg-primary/10"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
