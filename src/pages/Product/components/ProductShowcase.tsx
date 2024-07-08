import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import ProductTab from "./ProductTab";
import { StoreRegion } from "@/Interface/product";

interface ProductShowcaseProps {
  title: string;
  subTitle?: string;
  description?: string;
  collection_id?: string;
  products?: PricedProduct[] | null;
  region?: StoreRegion;
}

function ProductShowcase({
  title,
  subTitle,
  description,
  products,
  region,
}: ProductShowcaseProps) {
  return (
    <div>
      <div>
        <section className="mt-[80px] py-16  lg:p-[50px] w-[100%] xl:w-[95%]   m-auto  flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-start items-start xl:max-w-[95%] gap-y-4 px-4 lg:px-0">
            {subTitle && (
              <p className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                {subTitle}
              </p>
            )}

            <h1 className="text-black lg:text-5xl text-[2.5rem] font-bold font-jakarta  leading-[110%]">
              {title}
            </h1>
            {description && (
              <p className="text-black text-base font-normal font-jakarta  leading-normal">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start md:overflow-scroll lg:max-w-[95%]  gap-x-6 w-[100vw]  px-4 lg:px-0 mt-10 gap-y-6">
            {products &&
              products.map((product) => {
                return <ProductTab region={region} key={product.id} product={product} />;
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductShowcase;
