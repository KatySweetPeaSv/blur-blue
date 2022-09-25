import React from "react";
import AddressForm from "../components/CheckoutForms/AddressForm";
import PaymentForm from "../components/CheckoutForms/PaymentForm";
import OrderDetailsForm from "../components/CheckoutForms/OrderDetailsForm";
import { useSelector } from "react-redux";

const CheckoutFullPage = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="max-w-[1280px] mx-auto font-lato">
      <div className="mt-[7rem] mb-[3rem] text-center">
        <h1 className="text-3xl font-bold py-5 border-neutral-500 border-b-[1px]">
          Finalizar compra (
          <span className="text-blue-400">{cart.length} artículo(s)</span>)
        </h1>
      </div>

      <div className="flex flex-col justify-center">
        <OrderDetailsForm />
      </div>
      <div className="grid grid-cols-2 gap-5 text-border ">
        <AddressForm />
        <PaymentForm />
      </div>
    </div>
  );
};

export default CheckoutFullPage;
