import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ShopByCategory } from "@/components/home/ShopByCategory";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ShopByCategory />
      <FeaturedProducts />
      <CategoriesSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;