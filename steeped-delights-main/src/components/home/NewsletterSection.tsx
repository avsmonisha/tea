import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to TeaLeaf!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Leaf className="h-12 w-12 mx-auto opacity-80" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">
            Join the Tea Journey
          </h2>
          <p className="text-primary-foreground/80">
            Subscribe to receive exclusive offers, brewing tips, and first access to new arrivals.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground"
            />
            <Button
              type="submit"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Subscribe
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
