import React from 'react';
import AddressForm from './CheckoutForms/AddressForm';
import PaymentForm from './CheckoutForms/PaymentForm';
import OrderDetailsForm from './CheckoutForms/OrderDetailsForm';

const CheckoutFullPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto font-lato">
      <div className="mt-[7rem] mb-[3rem] text-center">
        <h1 className="text-3xl font-bold py-5 border-neutral-500 border-b-[1px]">
          Finalizar compra (<span className="text-blue-400">1 artículo(s)</span>
          )
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5 text-border ">
        <AddressForm />
        <PaymentForm />
      </div>
      <div className="flex flex-col justify-center">
        <OrderDetailsForm />
      </div>
    </div>
  );
};

export default CheckoutFullPage;
