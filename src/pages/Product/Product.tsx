import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import ProductBanner from "./components/ProductBanner";
import ProductShowcase from "./components/ProductShowcase";
import { useProducts } from "medusa-react";
import {  ProductCategory } from "@/Enums/products";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "@/utils/products/getProductsByCategory";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import ProductDisplaySkeleton from "./components/skeleton/ProductDisplaySkeleton";
// import Region from "@/components/Region";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Product() {


  const {
    products,
    isLoading: productLoading,
    // refetch: productRefetch,
  } = useProducts({
    expand: "categories,variants,variants.prices,images",
    // region_id: region?.region_id,
  });

  const [bestSellerProducts, setBestSellerProducts] = useState<
    PricedProduct[] | null
  >(null);

  useEffect(() => {
    if (products) {
      const bestSellerProductsResponse = getProductsByCategory(
        products,
        ProductCategory.BESTSELLER
      ) as PricedProduct[];
      setBestSellerProducts(bestSellerProductsResponse);
    }
  }, [products]);

  // useEffect(() => {
  //   if (region?.region_id) {
  //     productRefetch(region?.region_id);
  //   }
  // }, [region, productRefetch]);

  return (
    <div className="mt-20 ">
      <Hero />

      {productLoading && (
        <div className="w-[90%] m-auto mt-[20px]">
          <ProductDisplaySkeleton />
        </div>
      )}
      {products && products.length > 0 && (
        <ProductShowcase
          title={"Featured Products"}
          subTitle={"Products"}
          description={
            "Your physical + digital subscription includes exclusive printed content delivered to your door, full digital access on all devices, bonus online features, and members-only perks and discounts."
          }
          // region={region}

          products={products}
        />
      )}

      <ProductBanner />
      {productLoading && (
        <div className="w-[90%] m-auto mt-[20px]">
          <ProductDisplaySkeleton />
        </div>
      )}
      {bestSellerProducts && bestSellerProducts.length > 0 && (
        <ProductShowcase
          title={"Best Selling Product"}
          subTitle={"Products"}
          description={
            "Your physical + digital subscription includes exclusive printed content delivered to your door, full digital access on all devices, bonus online features, and members-only perks and discounts."
          }
          // region={region}

          products={bestSellerProducts}
        />
      )}
      {/* <div className="lg:w-[90%] m-auto flex justify-end items-start px-6 ">
        <Region  setRegion={setRegion} />
      </div> */}

      <Footer />
    </div>
  );
}

export default Product;
