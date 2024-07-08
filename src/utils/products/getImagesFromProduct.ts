import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

const dummyImage = [
    {
      original: "/images/product.jpeg",
      thumbnail: "/images/product.jpeg",
    },
    {
      original: "/images/product.jpeg",
      thumbnail: "/images/product.jpeg",
    }
  ];
export const getImagesFromProduct = (product:PricedProduct) => {
 
    const images = product?.images?.map((image) => {
      return {
        original: image.url,
        thumbnail: image.url,
      };
    });
    return images || dummyImage;

}