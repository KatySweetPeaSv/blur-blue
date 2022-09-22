import React from 'react';
import Checkout from '../Checkout';

const OrderDetailsForm = () => {
  return (
    <div>
      <h2 className="py-3 border-neutral-500 border-b-[1px] mt-[1rem]">
        <span className="text-xl font-bold pr-5">3.</span> Detalles de la Compra
      </h2>

      <Checkout/>
    </div>
  );
};

export default OrderDetailsForm;
