


//function which takes array of product categories list and return array of id which matches given product category title 

import { ProductCategory } from "@medusajs/medusa";

export const getCategoryId = (product_categories: ProductCategory[] |undefined, title: string) => {
  const category_id: string[] = [];
  product_categories?.forEach((product_category: ProductCategory) => {
    if (product_category.handle === title) {
      category_id.push(product_category.id);
    }
  });
  return category_id;
};

