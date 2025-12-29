import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">TeaLeaf Store</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Curating the world's finest teas since 2020. From leaf to cup, we deliver exceptional quality and authentic flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Shop</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/products?category=green" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Green Tea
              </Link>
              <Link to="/products?category=black" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Black Tea
              </Link>
              <Link to="/products?category=oolong" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Oolong Tea
              </Link>
              <Link to="/products?category=white" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                White Tea
              </Link>
              <Link to="/products?category=herbal" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Herbal Tea
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Story
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sustainability
              </Link>
              <Link to="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>123 Tea Lane, Portland, OR 97201</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(503) 555-0123</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@tealeafstore.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 TeaLeaf Store. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
