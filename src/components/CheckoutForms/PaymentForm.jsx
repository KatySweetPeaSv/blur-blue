import React from 'react';

const PaymentForm = () => {
  return (
    <div className="leftCheckout">
      <div className="checkoutInfoOne p-4">
        <div className="flex flex-col gap-3">
          <h2 className="py-3 border-neutral-500 border-b-[1px]">
            <span className="text-xl font-bold pr-5">2.</span>
            Método de Pago
          </h2>

          <div className="bg-[#f9fafbd5] p-8">
            <div className="flex gap-10">
              <div>
                <input type="radio" name="cardOption" checked />
                <label for="full_name" class="block mb-2 text-sm text-gray-900">
                  Tarjeta de Crédito
                </label>
              </div>
              <div>
                <input type="radio" name="cardOption" />
                <label for="full_name" class="block mb-2 text-sm text-gray-900">
                  Tarjeta de Débito
                </label>
              </div>
            </div>

            <div className="flex py-[6px] ">
              <img
                className="w-[7rem]"
                src="https://cutewallpaper.org/24/credit-card-logos-png/major-credit-card-logo-logodix.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 mt-[0.5rem]">
              <input
                type="text"
                id="cardNumber"
                placeholder="Número de Tarjeta"
                class="bg-white border border-gray-300
           text-gray-900 text-sm block w-[90%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="text"
                id="cardName"
                placeholder="Nombre de la Tarjeta"
                class="bg-white border border-gray-300
           text-gray-900 text-sm block w-[90%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div className="flex gap-4 mt-[0.8rem]">
              <input
                type="text"
                id="expiryNumbers"
                placeholder="Fecha de Vencimiento (MM / AA)"
                class="bg-white border border-gray-300
           text-gray-900 text-sm block w-[56%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="text"
                id="securityCode"
                placeholder="CVV o CVC"
                className="bg-white border border-gray-300
           text-gray-900 text-sm block p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white w-[30%]"
                required
              />
            </div>
            <div className='py-5'>
              <label for="full_name" className="block mb-2 text-sm text-gray-900 py-4 font-md">
                Dirección de la Tarjeta:
              </label>
              <div className='flex justify-start gap-5'>
              <input type="radio" name="cardAddress" id="" className='mt-[-5px]' checked />
              <label for="full_name" className="block mb-2 text-sm text-gray-900">
                Misma dirección de envío
              </label>
              </div>
              <div className='flex justify-start gap-5'>
              <input type="radio" name="cardAddress" id="" className='mt-[-5px]' checked />
              <label for="full_name" className="block mb-2 text-sm text-gray-900">
                Otra dirección
              </label>
              
              </div>
              <input
                type="text"
                id="cardNumber"
                placeholder="Nueva dirección de Tarjeta"
                class="bg-white border border-gray-300
           text-gray-900 text-sm block w-[90%] p-2.5 dark:bg-gray-700
           dark:border-gray-600 dark:text-white"
                required
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
