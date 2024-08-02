import { useOrder } from "medusa-react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import OrderSummary from "./components/OrderSummary";
function OrderDetails() {
  const params = useParams();
  const orderId: string = params.id || "";
  const { order, isLoading } = useOrder(orderId);
  return (
    <div>
      <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 mt-6 flex flex-col lg:flex-row justify-center items-start gap-x-8 gap-y-8 mb-[50px] ">
        <section className="flex-1  w-full  font-jakarta ">
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
                  href="/order"
                >
                  Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[1.1rem] font-jakarta font-semibold ">
                  Details
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-gray-800 text-[2.25rem] mt-4 mb-2 font-bold font-jakarta leading-[110%]">
            Order Details 
          </h1>
          <hr/>
          <p className="text-base font-semibold my-2 ">
            Order Id : {order?.id}
          </p>
          <div className="max-h-[250px] overflow-scroll">
          {/* {order &&
            order.items?.map((item, index) => {
              return (
                <section
                  key={index}
                  className="flex flex-row justify-start items-start gap-x-4 w-full my-4"
                >
                  <img
                    // src={product}
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
            })} */}
        </div>
          
        </section>

        <section className="w-full lg:w-[300px]">
          {!isLoading && order && (
            <OrderSummary
              total={order?.total || 0}
              subtotal={order?.subtotal || 0}
              tax_total={order?.tax_total || 0}
              shipping_total={order?.shipping_total || 0}
              discount_total={order?.discount_total || 0}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default OrderDetails;
