import { StoreRegion } from "@/Interface/product";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";



export const getProductPriceByCurrencyCode= (product:PricedProduct,currency_code:string,region:StoreRegion |undefined) => {
    const isRegion = region?.region_id
  if(isRegion){

      const productPrice = product.variants[0].prices.find((price) => price.region_id === region?.region_id && price.currency_code === currency_code);
      return productPrice?(productPrice?.amount):product.variants[0].prices[0].amount;
  }
    
    const productPrice = product.variants[0].prices[0].amount;
    return productPrice || null;
    

}