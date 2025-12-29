export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: TeaCategory;
  image_url: string;
  origin: string;
  flavour_notes: string[];
  in_stock: boolean;
  created_at?: string;
}

export type TeaCategory = 
  | "green"
  | "black"
  | "oolong"
  | "white"
  | "herbal"
  | "pu-erh"
  | "gifts"
  | "samplers";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: TeaCategory;
  name: string;
  description: string;
  image: string;
}
