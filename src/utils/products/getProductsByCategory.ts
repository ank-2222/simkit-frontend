import {   ProductCategory } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

export const getProductsByCategory = (
  products: PricedProduct[]|undefined,
  matchingCategory: string
): PricedProduct[]=> {
  const productsByCategory  = products?.filter((product: PricedProduct) => {
    return product?.categories?.find(
      (category: ProductCategory) => category.handle === matchingCategory
    );
  });
  return productsByCategory as PricedProduct[];
};
