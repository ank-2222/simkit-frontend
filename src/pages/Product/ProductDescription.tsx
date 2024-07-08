import { useProduct, useProducts } from "medusa-react";
import ProductDescriptionTab from "./components/ProductDescriptionTab";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams } from "react-router-dom";
import ProductDescriptionSkeleton from "./components/skeleton/ProductDescriptionSkeleton";
import ProductBanner from "./components/ProductBanner";
import ProductDisplaySkeleton from "./components/skeleton/ProductDisplaySkeleton";
import ProductShowcase from "./components/ProductShowcase";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { getProductsByCategory } from "@/utils/products/getProductsByCategory";
import { ProductCategory } from "@/Enums/products";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProductDescription() {
  const { id } = useParams<{ id: string }>();

  const { product } = useProduct(
    id ?? ""
    // , region?.region_id ?? ""
  );
  const {
    products,
    isLoading: productLoading,
    // refetch: productRefetch,
  } = useProducts({
    expand: "categories,variants,variants.prices,images",
    // region_id: region?.region_id,
  });

  const [featuredProducts, setFeaturedProducts] = useState<
    PricedProduct[] | null
  >(null);
  // useEffect(() => {
  //   if (region?.region_id) {
  //     productRefetch(region?.region_id);
  //   }
  // }, [region, productRefetch]);
  useEffect(() => {
    if (products) {
      const featuredProductsResponse = getProductsByCategory(
        products,
        ProductCategory.FEATURED_PRODUCTS
      ) as PricedProduct[];
      setFeaturedProducts(featuredProductsResponse);
    }
  }, [products]);
  return (
    <div>
      <div>
        <section className="xl:w-[90%] px-6 m-auto ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/product">
                  {product?.subtitle || "Products"}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          {product ? (
            <ProductDescriptionTab
              // region={region}
              product={product}
            />
          ) : (
            <div className="xl:w-[90%] m-auto px-6 mt-4">
              <ProductDescriptionSkeleton />
            </div>
          )}
        </section>

        <ProductBanner />

        <section>
          {productLoading && (
            <div className="w-[90%] m-auto mt-[20px]">
              <ProductDisplaySkeleton />
            </div>
          )}
          {featuredProducts && featuredProducts.length > 0 && (
            <ProductShowcase
              title={"You may also like"}
              subTitle={"Products"}
              description={
                "Your physical + digital subscription includes exclusive printed content delivered to your door, full digital access on all devices, bonus online features, and members-only perks and discounts."
              }
              // region={region}
              products={featuredProducts}
            />
          )}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDescription;
