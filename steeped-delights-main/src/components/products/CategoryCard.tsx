import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Category } from "@/types/product";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={{ pathname: "/products", search: `?category=${category.id}` }}>
      <Card className="group relative overflow-hidden h-64 border-0">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>
        <div className="relative h-full flex flex-col justify-end p-6 text-primary-foreground">
          <h3 className="font-serif text-2xl font-semibold mb-1">
            {category.name}
          </h3>
          <p className="text-sm text-primary-foreground/80 mb-3">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Explore</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
