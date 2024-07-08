import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Medusa from "@medusajs/medusa-js";
import { useGetCart } from "medusa-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Lock } from "lucide-react";
import {  useNavigate } from "react-router-dom";
const client = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PaymentForm({ clientSecret, cartId }: any) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useGetCart(cartId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handlePayment(e:any) {
    e.preventDefault();
    // TODO handle payment
    if (elements && stripe && email && name && cart) {
      return stripe
        ?.confirmCardPayment(clientSecret, {
          payment_method: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            card: elements?.getElement(CardElement) as any,
            billing_details: {
              name: name,
              email:email,
              phone: cart?.shipping_address?.phone,
              address: {
                city: cart?.shipping_address?.city,
                country: cart?.shipping_address?.country_code,
                line1: cart?.shipping_address?.address_1,
                line2: cart?.shipping_address?.address_2,
                postal_code: cart?.shipping_address?.postal_code,
              },
            },
          },
        })
        .then(({ error, paymentIntent }) => {
          // TODO handle errors
          console.log(error);
          console.log("payemntint", paymentIntent);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          client.carts.complete(cartId).then((resp:any) => {
            console.log(resp);
            const order_id = resp?.data?.payments[0]?.order_id as string;
            navigate("/confirm?order_id=" + order_id);
          });
          localStorage.removeItem("cart_id");
        });
    }
  }

  return (
    <form>
      <div className="flex justify-center items-center flex-col gap-y-2 ">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
        <CardElement className="my-4 border-b-2 border-black/50 py-2 " />
      <button
        className="w-full flex justify-center items-center gap-x-1 bg-cGreen h-[40px] text-white font-bold font-jakarta "
        onClick={handlePayment}
      >
        <Lock size={16}  />
        Pay
      </button>
    </form>
  );
}
