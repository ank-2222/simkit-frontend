/* eslint-disable @typescript-eslint/no-explicit-any */




function OrderSummary({
  subtotal,
  total,
  tax_total,
  shipping_total,

  discount_total,
}: any) {

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
      
      </div>
    </div>
  );
}

export default OrderSummary;
