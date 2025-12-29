import Link from "next/link";

const shopCategories = [
  {
    id: 1,
    name: "GIFTS",
    link: "/gifts",
    image: "/categories/gifts-category.jpg",
  },
  {
    id: 2,
    name: "TEAS",
    link: "/products",
    image: "/categories/teas-category.jpg",
  },
  {
    id: 3,
    name: "SAMPLERS",
    link: "/samplers",
    image: "/categories/samplers-category.jpg",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10 space-y-2">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            Something for Everyone
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-muted-foreground/50">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto px-4">
          {shopCategories.map((category, index) => (
            <Link
              key={category.id}
              href={category.link}
              className="group flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full aspect-square max-w-[350px] mb-4">
                {/* Dark green circle background */}
                <div className="absolute top-[12%] left-[8%] right-[8%] bottom-0 rounded-full bg-primary shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl" />
                
                {/* Product image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-contain z-10 drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-sm md:text-base font-medium tracking-[0.25em] text-foreground group-hover:text-primary transition-colors mt-2">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
