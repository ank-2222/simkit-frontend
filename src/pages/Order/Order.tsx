import useGetOrder from "@/Feature/order/useGetOrder";
import { Order as OrderProps } from "@medusajs/medusa";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
function Order() {
  const {isLoading, getOrder, data } = useGetOrder();
  const [orderList, setOrderList] = useState<OrderProps[]>([]);

  useEffect(() => {
    getOrder();
  }, []);
  useEffect(() => {
    setOrderList(data?.orders);
  }, [data]);

  console.log(orderList);

  return (
    <div>
      <div className="xl:w-[90%] w-[100vw] m-auto px-4 md:px-6 mt-6 flex flex-col lg:flex-row justify-center items-start gap-x-8 gap-y-8 mb-[50px] ">
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
                <BreadcrumbLink className="text-[1.1rem] font-jakarta font-semibold ">
                  Orders
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-gray-800 text-[2.25rem] mt-4 mb-2 font-bold font-jakarta leading-[110%]">
            Orders
          </h1>

          <div className=" overflow-scroll">
            {!isLoading ? (
              orderList?.map((item, index) => {
                return (
                  <Link
                    to={`/order/${item.id}`}
                    key={index}
                    className="flex flex-col justify-start items-start gap-x-4 w-full my-4 border-2 px-4 py-4 rounded-[0.4rem] bg-cGreen/10 border-cGreen/40 gap-y-2 "
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start w-full">
                      <h2 className="text-gray-800 text-base  md:text-[1.3rem] font-bold font-jakarta leading-[125%] line-clamp-1">
                        {item.id}
                      </h2>
                      <p className="text-cGreen text-lg leading-[125%]  font-bold font-jakarta ">
                        {item.total && <>${(item.total / 100)?.toFixed(2)}</>}
                      </p>
                    </div>
                    <p className="text-gray-800 text-base leading-[125%]  font-semibold font-jakarta ">
                      <span className="text-cGreen">Product: </span>
                      {item.items &&
                        item.items.map((item) => {
                          return <span>{item.title}, </span>;
                        })}
                    </p>
                    <p className="text-gray-800 text-base leading-[125%]  font-semibold font-jakarta ">
                      ordered on {new Date(item.created_at).toLocaleString()}
                    </p>
                  </Link>
                );
              })
            ) : (
              <div>
                <Skeleton className="h-20 my-2" />
                <Skeleton className="h-20 my-2" />
                <Skeleton className="h-20 my-2" />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Order;
