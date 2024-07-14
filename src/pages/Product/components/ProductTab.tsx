import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { getProductPriceByCurrencyCode } from "@/utils/products/getProductPriceByCurrencyCode";
import { Link } from "react-router-dom";
import { CurrencyCode } from "@/Enums/products";
import { getImagesFromProduct } from "@/utils/products/getImagesFromProduct";
import productDummyImage from "/images/product.jpeg";
import Skeleton from "react-loading-skeleton";
import { StoreRegion } from "@/Interface/product";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useCreateCart } from "medusa-react";
import Medusa from "@medusajs/medusa-js";
const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
});
interface ProductTabProps {
  product: PricedProduct;
  region?: StoreRegion;
}

function ProductTab({ product, region }: ProductTabProps) {
  const price = getProductPriceByCurrencyCode(
    product,
    CurrencyCode.USD,
    region
  );
  const productImages = getImagesFromProduct(product);

  // Cart system
  const { toast } = useToast();
  const [isItemAdding, setIsItemAdding] = useState(false);
  const region_id = import.meta.env.VITE_MEDUSA_REGION_ID || "";
  const createCart = useCreateCart();
  const [cartId, setCartId] = useState<string | null>(
    localStorage.getItem("cart_id")
  );
  // const createLineItem = useCreateLineItem(cartId??"");

  // const [pendingVariantId, setPendingVariantId] = useState<string | null>(null);
  // const [isBuyNow, setIsBuyNow] = useState(false);

  // const handleAddToCart = async (variant_id: string, isBuyNowFlag: boolean) => {
  //   setIsItemAdding(true);
  //   setPendingVariantId(variant_id);
  //   setIsBuyNow(isBuyNowFlag);

  //   if (cartId) {
  //     createLineItemRequest(variant_id, isBuyNowFlag);
  //   } else {
  //     createCartRequest();
  //   }
  // };


  const addItemToCart = async (
    cart_id: string,
    variant_id: string,
    isBuyNow: boolean
  ) => {
    medusa.carts.lineItems
      .create(cart_id, {
        variant_id,
        quantity: 1,
      })
      .then(() => {
        setIsItemAdding(false);

        toast({
          title: "Added to cart",
          description: "Item added to cart",
          variant: "success",
        });
        if (isBuyNow) {
          window.location.href = "/cart?cart_id=" + cart_id;
        }
      })
      .catch(() => {
        toast({
          title: "Please try again",
          description: "Error adding to cart",
          variant: "error",
        });
      });
  };



  const handleAddToCart = async (variant_id: string, isBuyNow: boolean) => {
    if ((cartId)) {
      setIsItemAdding(true);
      addItemToCart(cartId, variant_id, isBuyNow);
    } else {
      
      setIsItemAdding(true);
      createCart.mutate(
        {
          region_id: region_id,
        },
        {
          onSuccess: ({ cart }) => {
            setCartId(cart.id);
            localStorage.setItem("cart_id", cart.id);
            addItemToCart(cart.id, variant_id, isBuyNow);
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
    }
  };

  // const createLineItemRequest = (variant_id: string, isBuyNowFlag: boolean) => {
  //   createLineItem.mutate(
  //     {
  //       variant_id: variant_id,
  //       quantity: 1,
  //     },
  //     {
  //       onSuccess: () => {
  //         setIsItemAdding(false);
  //         toast({
  //           title: "Added to cart",
  //           description: "Item added to cart",
  //           variant: "success",
  //         });
  //         if (isBuyNowFlag) {
  //           window.location.href = "/cart";
  //         }
  //       },
  //       onError: () => {
  //         toast({
  //           title: "Please try again",
  //           description: "Error adding to cart",
  //           variant: "error",
  //         });
  //       },
  //     }
  //   );
  // };

  // const createCartRequest = () => {
  //   createCart.mutate(
  //     {
  //       region_id: region_id,
  //     },
  //     {
  //       onSuccess: ({ cart }) => {
  //         setCartId(cart.id);
  //         localStorage.setItem("cart_id", cart.id);
  //       },
  //       onError: () => {
  //         toast({
  //           title: "Please try again",
  //           description: "Error creating cart",
  //           variant: "error",
  //         });
  //       },
  //     }
  //   );
  // };

  // useEffect(() => {
  //   if (cartId && pendingVariantId) {
  //     createLineItemRequest(pendingVariantId, isBuyNow);
  //     setPendingVariantId(null);
  //   }
  // }, [cartId, pendingVariantId, isBuyNow]);

  return (
    <div>
      <div className="w-[380px]">
        <Link to={`/product/${product.id}`}>
          {productImages && productImages?.length !== 0 ? (
            <img
              className="h-[220px] w-[400px] object-cover rounded-t-[0.3rem]"
              src={productImages[0].original}
            />
          ) : productImages && productImages?.length === 0 ? (
            <img
              className="h-[220px] w-[400px] object-cover"
              src={productDummyImage}
            />
          ) : (
            <Skeleton className="h-[220px] w-[400px]" />
          )}
        </Link>

        <div className="border-2 rounded-b-[0.3rem] p-2 w-full">
          <Link to={`/product/${product.id}`}>
            <p className="capitalize text-zinc-900 line-clamp-1 text-lg font-bold font-jakarta">
              {product.title}
            </p>
            <p className="h-[19px] capitalize text-emerald-700 text-sm font-normal font-jakarta">
              {product.variants[0].title}
            </p>
            <p className="flex justify-start items-center gap-x-2 my-2">
              <Star size={20} /> 4.5/5
            </p>
            <p className="text-zinc-900 text-sm font-medium text-justify font-jakarta my-2 line-clamp-4">
              {product.description}
            </p>
            {price && (
              <p className="text-zinc-900 text-2xl font-extrabold font-jakarta mb-4">
                $ {(price / 100)?.toFixed(2)}
              </p>
            )}
          </Link>
          <div className="flex flex-row justify-center items-center gap-x-4">
            <button
              disabled={isItemAdding}
              onClick={() => handleAddToCart(product?.variants[0].id ?? "", false)}
              className="flex-shrink border-2 px-4 py-2 rounded-[0.3rem] border-black/20"
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
                <ShoppingCart className="text-cGreen" size={24} />
              )}
            </button>
            <button
              disabled={isItemAdding}
              onClick={() => handleAddToCart(product?.variants[0].id ?? "", true)}
              className="flex flex-auto flex-row justify-center items-center bg-cGreen text-white py-2 border-2 border-cGreen rounded-[0.3rem]"
            >
              Buy Now <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTab;
