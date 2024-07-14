import { Link } from "react-router-dom";
import OrderSummary from "./components/OrderSummary";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRightCircle } from "lucide-react";
import {
  useCartShippingOptions,
  useGetCart,
  useUpdateCart,
} from "medusa-react";
import {
  BillingCartItem,
  BillSummary,
  IShippingAddress,
  IShippingForm,
} from "@/Interface/cart";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import ShippingDisplay from "./components/ShippingAddressDisplay";
import ShippingForm from "./components/ShippingForm";
import ShippingOption from "./components/ShippingOption";
import { PricedShippingOption } from "@medusajs/medusa/dist/types/pricing";
import { getItemsFromCart } from "@/utils/cart/getItemsFromCart";
// import Medusa from "@medusajs/medusa-js";
// const medusa = new Medusa({
//   baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
//   maxRetries: 3,
// });
function Billing() {
  const { toast } = useToast();

  const [isShippingAddress, setIsShippingAddress] = useState<boolean>(false);
  const [showShippingOption, setShowShippingOption] = useState<boolean>(false);
  const urlParams = new URLSearchParams(window.location.search);
  const cartId = urlParams.get("cart_id") || localStorage.getItem("cart_id");
  const updateCart = useUpdateCart(cartId ?? "");
  const [shippingAddress, setShippingAddress] = useState<IShippingAddress[]>(
    []
  );
  const [billSummary, setBillSummary] = useState<BillSummary>();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [defaultAddress, setDefaultAddress] = useState<IShippingAddress>();
  const [shippingOption, setShippingOption] =
    useState<PricedShippingOption[]>();
  const { shipping_options } = useCartShippingOptions(cartId ?? "");
  const { cart } = useGetCart(cartId || "");

  useEffect(() => {
    if (cart?.shipping_address_id) {
      console.log("setting from cart");
      const address: IShippingAddress = {
        shipping_address_id: cart?.shipping_address_id,
        email: cart?.email,
        first_name: (cart?.shipping_address?.first_name as string) ?? "",
        last_name: (cart?.shipping_address?.last_name as string) ?? "",
        address1: (cart?.shipping_address?.address_1 as string) ?? "",
        address2: (cart?.shipping_address?.address_2 as string) ?? "",
        company: (cart?.shipping_address?.company as string) ?? "",
        city: (cart?.shipping_address?.city as string) ?? "",
        postal_code: (cart?.shipping_address?.postal_code as string) ?? "",
        country: (cart?.shipping_address?.country_code as string) ?? "",
        phone: (cart?.shipping_address?.phone as string) ?? "",
        state: (cart?.shipping_address?.province as string) ?? "",
      };
      setDefaultAddress(address);
      setShippingAddress([address]);
      setShowShippingOption(true);
      setIsShippingAddress(true);
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const items = getItemsFromCart(cart);
      const summary = {
        subtotal: cart?.subtotal,
        tax_total: cart?.tax_total,
        total: cart?.total,
        shipping_total: cart?.shipping_total,
        discount_total: cart?.discount_total,
        discount_code: cart?.discounts.map((discount) => discount.code),
        no_of_discounts: cart?.discounts.length,
        item: items as BillingCartItem[],
      };
      setBillSummary((summary as BillSummary) ?? {});
    }
  }, [cart]);

  useEffect(() => {
    setShippingOption(shipping_options);
  }, [shipping_options]);

  const token = localStorage.getItem("token") || "";
  useEffect(() => {
    if (token) setIsAuth(true);
  }, [token]);
  // useEffect(() => {
  //   if (token !== "") {
  //     console.log("setting from already logged in");

  //     setIsAuth(true);
  //     medusa.customers
  //       .retrieve()
  //       .then(({ customer }) => {
  //         customer?.shipping_addresses.map((address) => {
  //           const shippingAddress: IShippingAddress = {
  //             shipping_address_id: address.id,
  //             email: customer?.email as string,
  //             first_name: address.first_name ?? "",
  //             last_name: address.last_name ?? "",
  //             address1: address.address_1 ?? "",
  //             address2: address.address_2 ?? "",
  //             company: address.company ?? "",
  //             city: address.city ?? "",
  //             postal_code: address.postal_code ?? "",
  //             country: address.country_code ?? "",
  //             phone: address.phone ?? "",
  //             state: address.province ?? "",
  //           };
  //           setShippingAddress((prev) => [...prev, shippingAddress]);
  //         });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     setDefaultAddress(shippingAddress[0]);
  //   }
  // }, [token]);

  const handleAddShipping = (data: IShippingForm) => {
    updateCart.mutate(
      {
        email: data.email,
        shipping_address: {
          first_name: data.first_name,
          last_name: data.last_name,
          address_1: data.address1,
          address_2: data.address2,
          company: data.company,
          city: data.city,
          postal_code: data.postal_code,
          country_code: data.country,
          phone: data.phone,
          province: data.state,
        },
      },
      {
        onSuccess: ({ cart }) => {
          const shippingAddress: IShippingAddress = {
            shipping_address_id: cart?.shipping_address_id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            address1: data.address1,
            address2: data.address2,
            company: data.company,
            city: data.city,
            postal_code: data.postal_code,
            country: data.country,
            phone: data.phone,
            state: data.state,
          };

          setShippingAddress([shippingAddress]);
          setIsShippingAddress(true);
          setShowShippingOption(true);
          toast({
            title: "Shipping details added",
            description: "Shipping details added successfully",
            variant: "success",
          });
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Error adding shipping details",
            variant: "error",
          });
        },
      }
    );
  };

  const [isAddressEditing, setIsAddressEditing] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<IShippingAddress>({
    shipping_address_id: "",
    email: "",
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    company: "",
    city: "",
    postal_code: "",
    country: "",
    phone: "",
    state: "",
  });

  // const [isAddingNewAddress, setIsAddingNewAddress] = useState<boolean>(false);
  // const handleSetAddNewAddress = () => {
  //   setIsAddingNewAddress(true);
  // };

  const handleAddressEdit = (shipping_address_id: string) => {
    const address = shippingAddress.find(
      (address) => address.shipping_address_id === shipping_address_id
    );
    setEditAddress(address as IShippingAddress);
    setIsAddressEditing(true);
  };

  // const handleAddNewAddress = (data: IShippingForm) => {
  //   try {
  //     medusa.customers.addresses
  //       .addAddress({
  //         address: {
  //           first_name: data.first_name,
  //           last_name: data.last_name,
  //           address_1: data.address1,
  //           address_2: data.address2,
  //           company: data.company,
  //           city: data.city,
  //           postal_code: data.postal_code,
  //           country_code: data.country,
  //           phone: data.phone,
  //           province: data.state,
  //           metadata: {},
  //         },
  //       })
  //       .then(({ customer }) => {
  //         setIsAddingNewAddress(false);
  //         console.log("setting from new");

  //         customer?.shipping_addresses.map((address) => {
  //           const shippingAddress: IShippingAddress = {
  //             shipping_address_id: address.id,
  //             email: customer?.email as string,
  //             first_name: address.first_name ?? "",
  //             last_name: address.last_name ?? "",
  //             address1: address.address_1 ?? "",
  //             address2: address.address_2 ?? "",
  //             company: address.company ?? "",
  //             city: address.city ?? "",
  //             postal_code: address.postal_code ?? "",
  //             country: address.country_code ?? "",
  //             phone: address.phone ?? "",
  //             state: address.province ?? "",
  //           };
  //           setShippingAddress([shippingAddress]);
  //         });
  //         setDefaultAddress(shippingAddress[0] || []);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };






  // const handleDeleteAddress = (shipping_address_id: string) => {
  //   medusa.customers.addresses
  //     .deleteAddress(shipping_address_id)
  //     .then(({ customer }) => {
  //       toast({
  //         title: "Address Deleted",
  //         description: "Address deleted successfully",
  //         variant: "success",
  //       });

  //       customer?.shipping_addresses.length !== 0
  //         ? customer?.shipping_addresses?.map((address) => {
  //             const shippingAddress: IShippingAddress = {
  //               shipping_address_id: address.id,
  //               email: customer?.email as string,
  //               first_name: address.first_name ?? "",
  //               last_name: address.last_name ?? "",
  //               address1: address.address_1 ?? "",
  //               address2: address.address_2 ?? "",
  //               company: address.company ?? "",
  //               city: address.city ?? "",
  //               postal_code: address.postal_code ?? "",
  //               country: address.country_code ?? "",
  //               phone: address.phone ?? "",
  //               state: address.province ?? "",
  //             };
  //             setShippingAddress([shippingAddress]);
  //           })
  //         : setShippingAddress([]);
  //       setDefaultAddress(shippingAddress[0] || []);
  //     });
  // };
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
                <BreadcrumbLink
                  className="text-[1.1rem] font-jakarta font-semibold "
                  href="/product"
                >
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/cart"
                  className="text-[1.1rem] font-jakarta font-semibold "
                >
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[1.1rem] font-jakarta font-semibold ">
                  Billing
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-gray-800 text-[2.25rem] mt-4 mb-2 font-bold font-jakarta leading-[110%]">
            Billing Details
          </h1>
          {!isAuth && (
            <div className="flex flex-col md:flex-row justify-start items-start border-[1px] px-2 md:justify-between md:items-center py-2">
              <p className="text-gray-800 text-2xl font-bold font-jakarta leading-[48px]">
                {" "}
                Returning Customer?
              </p>
              <Link
                to={`/auth?ahead=billing?cart_id=${cartId}`}
                className="text-cGreen  font-semibold font-jakarta  flex flex-row justify-center items-center gap-x-2 text-[1.1rem]  border-2 w-fit px-4 py-2  "
              >
                Click here to Login
                <ChevronRightCircle size={20} />
              </Link>
            </div>
          )}

          <section>
            <div className=" w-full  flex flex-col justify-start items-center  pb-8  py-2 ">
              {isAddressEditing && (
                <ShippingForm
                  handleAddShipping={handleAddShipping}
                  editAddress={editAddress}
                  setIsAddressEditing={setIsAddressEditing}
                />
              )}
              {isShippingAddress && !isAddressEditing ? (
                <ShippingDisplay
                  shippingAddress={shippingAddress}
                  defaultAddress={defaultAddress}
                  handleAddressEdit={handleAddressEdit}
                  isAuth={isAuth}
                  // handleSetAddNewAddress={handleSetAddNewAddress}
                  // handleDeleteAddress={handleDeleteAddress}
                />
              ) : !isAddressEditing && shippingAddress.length === 0 ? (
                <ShippingForm handleAddShipping={handleAddShipping} />
              ) : null}

              {/* {isAddingNewAddress && (
                <ShippingForm
                  handleAddShipping={handleAddNewAddress}
                  editAddress={editAddress}
                  setIsAddressEditing={setIsAddressEditing}
                />
              )} */}
            </div>
          </section>
          {showShippingOption && (
            <section>
              <ShippingOption shippingOptions={shippingOption} />
            </section>
          )}
        </section>

        <section className="w-full lg:w-[300px]">
          <OrderSummary
            item={billSummary?.item ?? []}
            subtotal={billSummary?.subtotal ?? 0}
            tax_total={billSummary?.tax_total ?? 0}
            total={billSummary?.total ?? 0}
            shipping_total={billSummary?.shipping_total ?? 0}
            discount_code={billSummary?.discount_code ?? []}
            no_of_discounts={billSummary?.no_of_discounts ?? 0}
            discount_total={billSummary?.discount_total ?? 0}
          />
        </section>
      </div>
    </div>
  );
}

export default Billing;
