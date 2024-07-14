import { CartOrderSummary } from "@/Interface/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary({
  subtotal,
  total,
  tax_total,
  shipping_total,
  discount_code,
  discount_total,
  no_of_discounts,
  handleDiscount,
  handleRemoveDiscount,
}: CartOrderSummary) {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const cartId = urlParams.get("cart_id") || localStorage.getItem("cart_id");
  const handleCheckout = () => {
    if (cartId) navigate(`/billing?cart_id=${cartId}`);
    else navigate(`/billing`);
  };
  console.log(discount_total);
  const handleDiscountHelper = (discount: string) => {
    handleDiscount(discount, no_of_discounts);
    setDiscount("");
  };

  const handleRemoveDiscountHelper = (discount: string) => {
    handleRemoveDiscount(discount);
    setDiscount("");
  }

  return (
    <div className="flex ">
      <div className="border-2 border-black/10  w-full p-4">
        <h2 className="text-gray-800 text-2xl text-left font-bold font-jakarta leading-[100%]">
          Order Summary
        </h2>

        <div className="text-gray-800 text-base font-semibold font-jakarta capitalize leading-normal my-4 flex flex-col justify-center items-between gap-y-2 ">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>$ {(subtotal / 100)?.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p>$ {(shipping_total / 100)?.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Tax</p>
            <p>${(tax_total / 100)?.toFixed(2)}</p>
          </div>
          {discount_total > 0 && (
            <div className="flex justify-between items-center text-cGreen">
              <p>Discount</p>
              <p>-$ {(discount_total / 100)?.toFixed(2)}</p>
            </div>
          )}
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p>$ {(total / 100)?.toFixed(2)}</p>
          </div>
        </div>
        <section className="flex flex-col justify-center items-center w-full ">
          {
            discount_total === 0 && (
              <input
              value={discount.toUpperCase()}
              onChange={(e) => setDiscount(e.target.value)}
              type="text"
              placeholder="Coupon code "
              className="flex-1 w-full border-2 px-2 py-1 min-h-[40px] text-cGreen font-semibold 
               rounded-[0.1rem]  text-[0.9rem] font-jakarta leading-[100%] my-2
            "
            />
            )
          }
         
          {discount_total > 0 ? (
            <button
              onClick={() => handleRemoveDiscountHelper(discount_code[0])}
              className=" text-red-500 font-bold py-2 border-2 border-red-500  rounded-[0.1rem] flex-1 w-full text-[0.9rem] "
            >
              Remove Coupon
            </button>
          ) : (
            <button
              onClick={() => handleDiscountHelper(discount)}
              className=" text-black/80 font-bold py-2 border-2  rounded-[0.1rem] flex-1 w-full text-[0.9rem] "
            >
              Apply Coupon
            </button>
          )}

          <button
            onClick={handleCheckout}
            className="flex-1 w-full bg-cGreen text-white text-[1rem] py-1 min-h-[40px] my-2 font-semibold    "
          >
            Proceed to Checkout
          </button>
        </section>
      </div>
    </div>
  );
}

export default OrderSummary;
