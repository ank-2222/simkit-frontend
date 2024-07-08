import { Cart } from "medusa-react";


export const getItemsFromCart = (cart: Cart) => {
    return cart?.items.map((item) => ({
        title: item.title,
        price: item.unit_price,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
        variant_id: item.variant_id,
        line_id: item.id,
      }));
}