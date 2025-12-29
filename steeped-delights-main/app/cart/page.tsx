"use client";

import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Leaf,
} from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } =
    useCartStore();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Checkout functionality coming soon!",
    });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-foreground">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any teas to your cart yet. Explore our collection to find your perfect cup.
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="font-serif text-3xl font-semibold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-card rounded-lg border border-border animate-fade-in"
              >
                <Link
                  href={`/product/${item.product.id}`}
                  className="shrink-0"
                >
                  <img
                    src={item.product.image_url}
                    alt={item.product.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link href={`/product/${item.product.id}`}>
                    <h3 className="font-serif text-lg font-medium text-foreground hover:text-primary transition-colors line-clamp-1">
                      {item.product.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.product.origin}
                  </p>
                  <p className="font-semibold text-foreground">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Link href="/products">
                <Button variant="ghost" className="text-primary">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-muted-foreground">
                    Add ${(50 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-semibold text-lg mb-6">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">${total.toFixed(2)}</span>
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <Leaf className="h-3 w-3" />
                <span>Eco-friendly packaging included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
