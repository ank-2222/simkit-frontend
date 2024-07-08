import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { getProductPriceByCurrencyCode } from "@/utils/products/getProductPriceByCurrencyCode";
import { CurrencyCode } from "@/Enums/products";
import { getImagesFromProduct } from "@/utils/products/getImagesFromProduct";
import Skeleton from "react-loading-skeleton";
import productDummyImage from "/images/product.jpeg";
import { StoreRegion } from "@/Interface/product";
import { ReactNode, useEffect, useState } from "react";
import { useCreateCart, useCreateLineItem } from "medusa-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductDescriptionTabProps {
  product: PricedProduct;
  region?: StoreRegion;
}

function ProductDescriptionTab({
  product,
  region,
}: ProductDescriptionTabProps) {
  const [productPrice, setproductPrice] = useState<number | null>(null);
  useEffect(() => {
    setproductPrice(
      getProductPriceByCurrencyCode(product, CurrencyCode.USD, region)
    );
  }, []);

  const productImages = getImagesFromProduct(product);

  //cart system
  const { toast } = useToast();
  const [isItemAdding, setIsItemAdding] = useState(false);
  const region_id = import.meta.env.VITE_MEDUSA_REGION_ID || "";
  const createCart = useCreateCart();
  const [cartId, setCartId] = useState<string>(
    localStorage.getItem("cart_id") || ""
  );
  const createLineItem = useCreateLineItem(cartId);
  const [quantity, setQuantity] = useState(0);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const handleCartIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleCartDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async (variant_id: string, isBuyNow: boolean) => {
    if ((cartId && quantity > 0) || isBuyNow) {
      console.log("already cart exists");
      setIsItemAdding(true);
      createLineItem.mutate(
        {
          variant_id: variant_id,
          quantity: isBuyNow ? 1 : quantity,
        },
        {
          onSuccess: () => {
            setQuantity(0);
            setIsItemAdded(true);
            setIsItemAdding(false);

            toast({
              title: "Added to cart",
              description: "Item added to cart",
              variant: "success",
            });
            if (isBuyNow) {
              window.location.href = "/cart?cart_id=" + cartId;
            }
          },
        }
      );
    } else if (quantity > 0 ||isBuyNow) {
      console.log("creating new cart");
      createCart.mutate(
        {
          region_id: region_id,
        },
        {
          onSuccess: ({ cart }) => {
            setCartId(cart.id);
            localStorage.setItem("cart_id", cart.id);
          },
          onError: () => {
            toast({
              title: "Please try again",
              description: "Error adding to cart",
              variant: "error",
            });
          },
        }
      );
      createLineItem.mutate(
        {
          variant_id: variant_id,
          quantity: isBuyNow ? 1 : quantity,
        },
        {
          onSuccess: () => {
            setQuantity(0);
            setIsItemAdded(true);
            setIsItemAdding(false);

            toast({
              title: "Added to cart",
              description: "Item added to cart",
              variant: "success",
            });
            if (isBuyNow) {
              window.location.href = "/cart?cart_id=" + cartId;
            }
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: () => {
            toast({
              title: "Please try again",
              description: "Error adding to cart",
              variant: "error",
            });
          },
        }
      );
    } else {
      toast({
        description: "Add quantity to cart",
        variant: "default",
      });
    }
  };
  return (
    <div className=" my-4  xl:max-w-[90%] m-auto ">
      <section className=" flex  flex-col lg:flex-row  justify-center items-center gap-y-4 lg:justify-center lg:items-start ">
        <div id="image-gallery" className="flex-1 ">
          <div className="xl:hidden">
            {productImages && productImages.length != 0 ? (
              <ImageGallery
                additionalClass="mx-auto w-[95%]  "
                items={productImages}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                lazyLoad={true}
                useTranslate3D={true}
              />
            ) : productImages && productImages.length == 0 ? (
              <img
                className="h-[350px] w-[100%] object-cover"
                src={productDummyImage}
              ></img>
            ) : (
              <Skeleton height={350} />
            )}
          </div>
          <div className="hidden xl:block">
            {productImages && productImages.length != 0 ? (
              <ImageGallery
                additionalClass="mx-auto w-[95%]  "
                items={productImages}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                lazyLoad={true}
                useTranslate3D={true}
                thumbnailPosition="left"
              />
            ) : productImages && productImages.length == 0 ? (
              <img
                className="h-[350px] w-[100%] object-cover"
                src={productDummyImage}
              ></img>
            ) : (
              <Skeleton height={350} />
            )}
          </div>
        </div>

        <div id="product-description" className="flex-1 px-4 xl:px-8 ">
          <p className="text-gray-800 bg-[#e4e2e2] w-fit rounded-[0.4rem] px-2 py-1 text-sm font-semibold font-jakarta leading-normal">
            {product?.subtitle && <>{product.subtitle}</>}
          </p>
          <p className="text-gray-800 text-[2rem] font-bold mt-4 font-jakarta  leading-[110%]">
            {product.title}
          </p>
          <p className="text-gray-800 text-4xl mt-2 font-bold  font-jakarta  leading-[110%]">
            {productPrice != null ? (
              <>${(productPrice / 100)?.toFixed(2)}</>
            ) : null}
          </p>
          <p className="mt-2 text-base ">{product.description}</p>

          {product?.metadata && product.metadata?.length != 0 ? (
            <div>
              {Object.entries(product.metadata).map(([key, value]) => {
                return (
                  <Accordion type="single" collapsible key={key}>
                    <AccordionItem value={key}>
                      <AccordionTrigger>{key}</AccordionTrigger>
                      <AccordionContent>{value as ReactNode}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          ) : null}

          <div
            id="product-actions"
            className="flex justify-center items-center flex-col w-full mt-[20px] gap-y-4"
          >
            <div
              id="cart"
              className={cn(
                isItemAdded ? "hidden -translate-x-full opacity-0" : "flex",
                " flex-row justify-center items-center w-full gap-x-4 transition-all duration-800 ease-in-out"
              )}
            >
              <div
                id="cart-action"
                className=" flex flex-row justify-center items-center border-2 "
              >
                <button
                  onClick={handleCartDecrement}
                  className="bg-[#F6F8F9] text-[2rem] h-10 w-14 leading-[80%] "
                >
                  -
                </button>
                <p className="bg-[#E5E9EB] text-[1.2rem] font-jakarta font-semibold h-10 w-14 flex justify-center items-center  ">
                  {quantity}
                </p>
                <button
                  onClick={handleCartIncrement}
                  className="bg-[#F6F8F9] text-[2rem] h-10 w-14 leading-[100%]  "
                >
                  +
                </button>
              </div>
              <button
                id="add-cart"
                disabled={isItemAdding}
                onClick={() =>
                  handleAddToCart(product?.variants[0]?.id || "", false)
                }
                className={cn(
                  "flex-auto h-11 font-bold w-full flex flex-row justify-center items-center gap-x-4 bg-cGreen text-white font-jakarta rounded-[0.3rem] border-2 border-cGreen transition-all duration-800 ease-in-out "
                )}
              >
                {isItemAdding ? (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-cGreen"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <>
                    <ShoppingCart />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
            <Link
              to={`/cart?cart_id=${cartId}`}
              className={cn(
                isItemAdded
                  ? "flex  translate-y-0 opacity-100 "
                  : " translate-y-20 opacity-0 hidden ",
                "flex-auto h-11 font-bold w-full  flex-row justify-center items-center gap-x-4 bg-cGreen text-white font-jakarta rounded-[0.3rem] border-2 border-cGreen transition-all duration-800 ease-in-out  "
              )}
            >
              <ShoppingCart /> Go to Cart
            </Link>
            {!isItemAdded ? (
              <button 
              disabled={isItemAdding}
              onClick={() =>
                handleAddToCart(product?.variants[0]?.id || "", true)
              }
                id="buy-now"
                className="flex justify-center items-center flex-row w-full border-2 border-black/10  h-12 rounded-[0.3rem]  text-cGreen font-semibold  text-[1.1rem]  "
              >
                Buy Now <ChevronRight />
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDescriptionTab;