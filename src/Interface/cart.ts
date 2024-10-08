export interface CartItem {
  title: string;
  price: number;
  thumbnail: string | null;
  quantity: number;
  variant_id: string;
  line_id: string;
  deleteItem: () => void;
  handleUpdateItem: (line_id: string, quantity: number) => void;
  isActionLoading: boolean;
}

export interface CartSummary {
  subtotal: number;
  tax_total: number;
  total: number;
  shipping_total: number;
  discount_total: number;
  discount_code: string[];
  no_of_discounts: number;
}
export interface CartOrderSummary extends CartSummary {
handleDiscount: (discount_code:string,no_of_discounts:number) => void;
handleRemoveDiscount: (discount_code:string) => void;
}

export interface BillingCartItem {
  title: string;
  price: number;
  quantity: number;
}



export interface IShippingForm {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postal_code: string;
  country: string;
  state: string;
}

export interface IShippingAddress extends IShippingForm {
  shipping_address_id: string;
  
}

export interface BillSummary{
  subtotal: number;
  tax_total: number;
  total: number;
  shipping_total: number;
  discount_total: number;
  discount_code: string[];
  no_of_discounts: number;
  item: BillingCartItem[];

}