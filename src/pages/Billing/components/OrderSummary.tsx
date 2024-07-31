import { BillSummary } from "@/Interface/cart";
import product from "/images/product.jpeg";
// import { useNavigate } from "react-router-dom";

function OrderSummary({
  subtotal,
  total,
  tax_total,
  shipping_total,
  item,

  discount_total,
}: BillSummary) {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const cartId = urlParams.get("cart_id") || localStorage.getItem("cart_id");
  //  const navigate = useNavigate();
  // const handleGotoPayment = () => {

  // navigate(`/payment?cart_id=${cartId}`);
  // }

  return (
    <div className="flex ">
      <div className="border-2 border-black/10  w-full p-4">
        <h2 className="text-gray-800 text-2xl text-left font-bold font-jakarta leading-[100%]">
          Order Summary
        </h2>
        <div className="max-h-[250px] overflow-scroll">
          {item &&
            item?.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex flex-row justify-start items-start gap-x-4 w-full my-4"
                >
                  <img
                    src={product}
                    className="w-[80px] h-[80px] object-cover rounded-xl "
                  />
                  <div>
                    <h2 className="text-gray-800 text-base  font-bold font-jakarta leading-[125%] line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-cGreen text-base leading-[125%]  font-bold font-jakarta ">
                      {item.price && <>${(item.price / 100)?.toFixed(2)}</>}
                    </p>
                    <p className="text-gray-800 text-base leading-[125%] font-bold font-jakarta ">
                      {item.quantity && <>Quantity: {item.quantity}</>}
                    </p>
                  </div>
                </section>
              );
            })}
        </div>

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
          <div className="flex justify-between items-center">
            <p>Total</p>
            <p>$ {(total / 100)?.toFixed(2)}</p>
          </div>
          {discount_total > 0 && (
            <div className="flex justify-between text-cGreen items-center">
              <p>Discount</p>
              <p>-$ {(discount_total / 100)?.toFixed(2)}</p>
            </div>
          )}
        </div>
        {/* <section className="flex flex-col justify-center items-center w-full ">
          <input
            type="text"
            placeholder="Coupon code "
            className="flex-1 w-full border-2 px-2 py-1 min-h-[40px] text-cGreen font-semibold 
             rounded-[0.1rem]  text-[0.9rem] font-jakarta leading-[100%] my-2
          "
          />
          <button className=" text-black/80 font-bold py-2 border-2  rounded-[0.1rem] flex-1 w-full text-[0.9rem] ">
            Apply Coupon
          </button>
          <button onClick={handleGotoPayment} className="flex-1 w-full bg-cGreen text-white text-[1rem] py-1 min-h-[40px] my-2 font-semibold    ">
            Proceed to Payment
          </button>
        </section> */}
      </div>
    </div>
  );
}

export default OrderSummary;
