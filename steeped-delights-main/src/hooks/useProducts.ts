import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product, TeaCategory } from "@/types/product";
import { toast } from "@/hooks/use-toast";

// Type for database product row
interface DbProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image_url: string;
  origin: string;
  flavour_notes: string[];
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

// Convert DB product to app Product type
const mapDbToProduct = (dbProduct: DbProduct): Product => ({
  id: dbProduct.id,
  title: dbProduct.title,
  price: Number(dbProduct.price),
  description: dbProduct.description,
  category: dbProduct.category as TeaCategory,
  image_url: dbProduct.image_url,
  origin: dbProduct.origin,
  flavour_notes: dbProduct.flavour_notes,
  in_stock: dbProduct.in_stock,
  created_at: dbProduct.created_at,
});

// Fetch all products
export const useProducts = (category?: TeaCategory) => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      let query = supabase.from("products").select("*");
      
      if (category) {
        query = query.eq("category", category);
      }
      
      const { data, error } = await query.order("created_at", { ascending: false });
      
      if (error) throw error;
      return (data as DbProduct[]).map(mapDbToProduct);
    },
  });
};

// Fetch single product
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) return null;
      return mapDbToProduct(data as DbProduct);
    },
    enabled: !!id,
  });
};

// Create product mutation
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: Omit<Product, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("products")
        .insert([{
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image_url: product.image_url,
          origin: product.origin,
          flavour_notes: product.flavour_notes,
          in_stock: product.in_stock,
        }])
        .select()
        .single();
      
      if (error) throw error;
      return mapDbToProduct(data as DbProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Product created",
        description: "The product has been added successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

// Update product mutation
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...product }: Partial<Product> & { id: string }) => {
      const { data, error } = await supabase
        .from("products")
        .update({
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image_url: product.image_url,
          origin: product.origin,
          flavour_notes: product.flavour_notes,
          in_stock: product.in_stock,
        })
        .eq("id", id)
        .select()
        .single();
      
      if (error) throw error;
      return mapDbToProduct(data as DbProduct);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Product updated",
        description: "The product has been updated successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

// Delete product mutation
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Product deleted",
        description: "The product has been removed.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
