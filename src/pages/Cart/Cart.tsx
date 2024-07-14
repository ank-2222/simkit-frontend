import { useState, useEffect } from "react";

import OrderSummary from "./components/OrderSummary";
import CartItem from "./components/CartItem";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { useParams } from "react-router-dom";
import {
  useDeleteLineItem,
  useGetCart,
  useUpdateCart,
  useUpdateLineItem,
} from "medusa-react";
import { CartItem as CartItemProps, CartSummary } from "@/Interface/cart";
import { useToast } from "@/components/ui/use-toast";
import { getItemsFromCart } from "@/utils/cart/getItemsFromCart";
import Loader from "@/components/Loader";
import Medusa from "@medusajs/medusa-js";
const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
});
function Cart() {
  // const { cartId } = useParams<{ cartId: string }>();
  const urlParams = new URLSearchParams(window.location.search);
  const cartId = urlParams.get("cart_id") || localStorage.getItem("cart_id");
  const { cart, isLoading: cartLoading } = useGetCart(cartId || "");
  const updateCart = useUpdateCart(cartId || "");
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [cartSummary, setCartSummary] = useState<CartSummary>({
    subtotal: 0,
    tax_total: 0,
    total: 0,
    shipping_total: 0,
    discount_code: [],
    discount_total: 0,
    no_of_discounts: 0,
  });
  useEffect(() => {
    if (cart && cart?.items.length !== 0) {
      const items = getItemsFromCart(cart);
      const summary = {
        subtotal: cart?.subtotal,
        tax_total: cart?.tax_total,
        total: cart?.total,
        shipping_total: cart?.shipping_total,
        discount_total: cart?.discount_total,
        discount_code: cart?.discounts.map((discount) => discount.code),
        no_of_discounts: cart?.discounts.length,
      };

      setCartItems((items as CartItemProps[]) ?? []);
      setCartSummary((summary as CartSummary) ?? {});
      setIsCartEmpty(false);
    }
  }, [cart]);

  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);
  const deleteLineItem = useDeleteLineItem(cartId ?? "");
  const { toast } = useToast();
  const handleRemoveItem = (lineId: string) => {
    deleteLineItem.mutate(
      {
        lineId: lineId,
      },
      {
        onSuccess: ({ cart }) => {
          toast({
            title: "Item removed",
            description: "Item removed from cart",
            variant: "default",
          });

          const items = getItemsFromCart(cart);
          const summary = {
            subtotal: cart?.subtotal,
            tax_total: cart?.tax_total,
            total: cart?.total,
            shipping_total: cart?.shipping_total,
            discount_total: cart?.discount_total,
            discount_code: cart?.discounts.map((discount) => discount.code),
            no_of_discounts: cart?.discounts.length,
          };

          setCartItems((items as CartItemProps[]) ?? []);
          setCartSummary((summary as CartSummary) ?? {});
          if (cart?.items.length === 0) {
            setIsCartEmpty(true);
          }
        },
        onError: () => {
          toast({
            title: "Please try again",
            description: "Error removing item from cart",
            variant: "error",
          });
        },
      }
    );
  };
  const updateLineItem = useUpdateLineItem(cartId ?? "");
  const handleUpdateItem = (lineItemId: string, quantity: number) => {
    setIsActionLoading(true);
    updateLineItem.mutate(
      {
        lineId: lineItemId,
        quantity,
      },
      {
        onSuccess: ({ cart }) => {
          toast({
            title: "Item updated",
            description: "Item quantity updated",
            variant: "default",
          });
          const items = getItemsFromCart(cart);

          const summary = {
            subtotal: cart?.subtotal,
            tax_total: cart?.tax_total,
            total: cart?.total,
            shipping_total: cart?.shipping_total,
            discount_total: cart?.discount_total,
            discount_code: cart?.discounts.map((discount) => discount.code),
            no_of_discounts: cart?.discounts.length,
          };

          setCartItems((items as CartItemProps[]) ?? []);
          setCartSummary((summary as CartSummary) ?? {});
        },
      }
    );
    setIsActionLoading(false);
  };

  const handleDiscount = (discount_code: string, no_of_discounts: number) => {
    if (!discount_code) {
      toast({
        title: "Please enter a valid coupon code",
        variant: "default",
      });
      return;
    }
    if (no_of_discounts > 0) {
      toast({
        title: "Discount already applied",
        description: "Discount already applied",
        variant: "default",
      });
      return;
    }
    updateCart.mutate(
      {
        discounts: [
          { code: discount_code },
          // ...(cartSummary && cartSummary.discount_code ? cartSummary.discount_code.map(code => ({ code })) : [])
        ],
      },
      {
        onSuccess: ({ cart }) => {
          toast({
            title: "Discount applied",
            description: "Discount applied successfully",
            variant: "success",
          });
          const summary = {
            subtotal: cart?.subtotal,
            tax_total: cart?.tax_total,
            total: cart?.total,
            shipping_total: cart?.shipping_total,
            discount_total: cart?.discount_total,
            discount_code: cart?.discounts.map((discount) => discount.code),
            no_of_discounts: cart?.discounts.length,
          };

          setCartSummary((summary as CartSummary) ?? {});
        },
      }
    );
  };

  const handleRemoveDiscount = (discount_code: string) => {
    try {
      console.log(cartId,discount_code);
      if (cartId&&discount_code) {
        medusa.carts
          .deleteDiscount(cartId ?? "", discount_code)
          .then(({ cart }) => {
            toast({
              title: "Discount Removed",
              description: "Discount Removed successfully",
              variant: "default",
            });
            const summary = {
              subtotal: cart?.subtotal,
              tax_total: cart?.tax_total,
              total: cart?.total,
              shipping_total: cart?.shipping_total,
              discount_total: cart?.discount_total,
              discount_code: cart?.discounts.map((discount) => discount.code),
              no_of_discounts: cart?.discounts.length,
            };
  
            setCartSummary((summary as CartSummary) ?? {});
          });
      }
    } catch (error) {
      console.error(error);
    }
   
  };

  return (
    <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 mt-6 flex flex-col lg:flex-row justify-center items-start gap-x-8 gap-y-8 ">
      <section className="flex-1  w-full   ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-[1.1rem] font-jakarta font-semibold "
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-[1.1rem] font-jakarta font-semibold "
                href="/product"
              >
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[1.1rem] font-jakarta font-semibold ">
                Cart
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-gray-800 text-[2.25rem] my-4 font-bold font-jakarta leading-[110%]">
          Cart
        </h1>
        <div className="lg:max-h-[60vh] w-full  flex flex-col justify-start items-center  overflow-y-scroll ">
          {cartLoading && cartId ? (
            <Loader />
          ) : isCartEmpty ? (
            <>
              <p className="text-gray-800 text-2xl font-bold font-jakarta leading-[48px]">
                There’s nothing here, add some products to cart
              </p>
            </>
          ) : (
            cartItems.map((item, index) => (
              <CartItem
                key={index}
                {...item}
                deleteItem={() => handleRemoveItem(item.line_id)}
                handleUpdateItem={handleUpdateItem}
                isActionLoading={isActionLoading}
              />
            ))
          )}
        </div>
      </section>

      <section className="w-full lg:w-[300px] ">
        {!isCartEmpty ? (
          <>
            <OrderSummary
              subtotal={cartSummary?.subtotal}
              total={cartSummary?.total}
              tax_total={cartSummary?.tax_total}
              shipping_total={cartSummary?.shipping_total}
              handleDiscount={handleDiscount}
              handleRemoveDiscount={handleRemoveDiscount}
              discount_code={cartSummary?.discount_code}
              discount_total={cartSummary?.discount_total}
              no_of_discounts={cartSummary?.no_of_discounts}
            />
          </>
        ) : null}
      </section>
    </div>
  );
}

export default Cart;
