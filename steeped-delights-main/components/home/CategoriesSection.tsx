import { CategoryCard } from "@/components/products/CategoryCard";
import { categories } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12 space-y-2">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            Browse by Type
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Tea Categories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From delicate whites to robust pu-erhs, explore our curated collection of the world's finest teas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
