import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useSetPaymentSession } from "medusa-react";
import { Button } from "@/components/ui/button";
import { PaymentSession } from "@medusajs/medusa";
import { motion } from "framer-motion";
const publishable_key = import.meta.env.VITE_MEDUSA_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishable_key);

interface PaymentProps {
  paymentSession: PaymentSession[];
}

function Payment({ paymentSession }: PaymentProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const cartId: string =
    urlParams.get("cart_id") || localStorage.getItem("cart_id") || "";
  const [clientSecret, setClientSecret] = useState<string>("");
  const setPaymentSession = useSetPaymentSession(cartId);
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);
  const handleSetPaymentSession = (providerId: string) => {
    setPaymentSession.mutate(
      {
        provider_id: providerId,
      },
      {
        onSuccess: ({ cart }) => {
          const client_secret:string = cart?.payment_session?.data?.client_secret as string || "";
          setClientSecret(client_secret);
          setShowPaymentForm(true);
        },
      }
    );
  };

  return (
    <div>
      <h1 className="text-gray-800 text-[1.5rem] mt-4 mb-4 font-bold font-jakarta leading-[110%]  ">
        Payment option
      </h1>
      <ul className="flex flex-col justify-center items-start">
        {paymentSession &&
          paymentSession.map((session, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleSetPaymentSession(session.provider_id)}
                className="bg-gray-800 text-white font-jakarta font-bold text-[1rem] py-2 px-4  mt-4 hover:bg-gray-700 transition duration-300 ease-in-out w-full lg:w-1/3 rounded-[0.3rem]"
              >
                {session.provider_id}
              </Button>
            );
          })}
      </ul>
      {clientSecret && showPaymentForm && (
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 300, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 border-2  border-black/50 p-2 mt-4 "
        >
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
            }}
          >
            <PaymentForm clientSecret={clientSecret} cartId={cartId} />
          </Elements>
        </motion.div>
      )}
    </div>
  );
}

export default Payment;
