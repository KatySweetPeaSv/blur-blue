import React from 'react';

const AddressForm = () => {
  return (
    <div className="leftCheckout">
      <div className="checkoutInfoOne p-4">
        <div className="flex flex-col gap-3">
          <h2 className="py-3 border-neutral-500 border-b-[1px]">
            <span className="text-xl font-bold pr-5">1.</span> Dirección y Datos
            Personales
          </h2>

          <label
            for="full_name"
            class="block mb-2 text-sm 
         text-gray-900 dark:text-gray-300"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="full_name"
            class="bg-gray-50 border border-gray-300
           text-gray-900 text-sm block w-[90%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
            required
          />

          <label
            for="address"
            class="block mb-2 text-sm 
         text-gray-900 dark:text-gray-300"
          >
            Dirección de envío
          </label>
          <input
            type="text"
            id="address"
            class="bg-gray-50 border border-gray-300
           text-gray-900 text-sm block w-[90%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
            required
          />
          <label
            for="phone"
            class="block mb-2 text-sm 
         text-gray-900 dark:text-gray-300"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300
           text-gray-900 text-sm block w-[40%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
