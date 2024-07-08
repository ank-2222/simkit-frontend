import { Trash2 } from "lucide-react";
import product from "/images/product.jpeg";
import { CartItem as CartItemProps } from "@/Interface/cart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CartItem({title,thumbnail,price,quantity,line_id,deleteItem,handleUpdateItem,isActionLoading}:CartItemProps) {
  


  return (
    <div className="flex md:justify-between   md:items-center justify-between items-end border-2 p-2 rounded-[0.3rem] flex-col md:flex-row w-full mt-4 ">
      <section className="flex flex-row justify-start items-start gap-x-4 w-full">
        <img
          src={thumbnail || product}
          className="w-[80px] h-[80px] object-cover rounded-xl "
        />
        <div>
          <h2 className="text-gray-800 text-base  md:text-[1.3rem] font-bold font-jakarta leading-[125%] line-clamp-1">
            {title}
          </h2>
          <p className="text-cGreen text-lg pt-1 font-bold font-jakarta leading-normal">
            {
              price && (
                <>${(price / 100)?.toFixed(2)}</>
              )
            }
          </p>
        </div>
      </section>
      <section className="flex  justify-center items-center gap-x-4">
        <div className="flex flex-row justify-center items-center">
          <button 
            disabled={isActionLoading || quantity===1}
            onClick={()=>handleUpdateItem(line_id,quantity-1)}
          className="bg-slate-100 w-8 h-10 md:w-10 md:h-12 text-[1.3rem] flex justify-center leading-[80%] items-center ">
            -
          </button>
          <p className="bg-slate-200  w-8 h-10 md:w-10 md:h-12 text-[1.2rem] flex justify-center leading-[80%] items-center ">
            {quantity}
          </p>
          <button
          disabled={isActionLoading}
          onClick={()=>handleUpdateItem(line_id,quantity+1)}
          className="bg-slate-100  w-8 h-10 md:w-10 md:h-12 text-[1.3rem]  flex justify-center leading-[80%] items-center ">
            +
          </button>
        </div>
        <button
        // disabled={isActionLoading}
        onClick={deleteItem}
        className="flex justify-center items-center gap-x-2 border-2 px-4 py-2 rounded-[0.3rem] text-[0.9rem] md:text-base ">
          <Trash2 size={20} className="text-red-500  " />
          Remove
        </button>
      </section>
    </div>
  );
}

export default CartItem;
