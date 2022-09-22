import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const Checkout = () => {
  return (
    <div className="w-[100%] m-auto text-center p-10 items-center font-lato">
      <div className="border-GrayishBlack border-[1px] m-auto flex flex-col justify-center rounded gap-4  bg-[#FAFBFC] py-5">
        <div className="flex justify-around flex-wrap border-b-[1px] border-GrayishBlack py-2">
          <div>
            <div className="flex justify-center">
              <img
                className="checkoutImg"
                src="https://serespensantes.com/wp-content/uploads/2020/12/1607365363_figura_anime.jpg"
                alt="product"
              />
            </div>
            <p className="font-bold text-Blue">$35.99</p>
            <p className="text-xs capitalize">Monkey D. Luffy</p>
          </div>
          <div className="flex justify-center flex-col content-center text-xs">
            <p>Cantidad de figuras:</p>
            <p className="text-gray-600">1</p>
          </div>
          <div className="flex justify-center">
            <TrashIcon className="w-5 hover:text-Reddish cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-1">
          <p>Total a pagar</p>
          <p className="font-bold text-green-500">US$35.29</p>
          <div className="flex justify-center py-5">
            <button className="mx-[55px] bg-green-500 hover:bg-green-300 capitalize w-[30%]">
              Realizar Compra
            </button>
            <button className="mx-[55px] bg-Reddish hover:bg-green-300 capitalize w-[30%]">
              Cancelar Pedido
            </button>
          </div>
          <small>
            Al realizar el pedido, aceptas el{' '}
            <span className="text-blue-700 underline">aviso de privacidad</span>{' '}
            y las
            <span className="text-blue-700 underline">
              {' '}
              condiciones de uso{' '}
            </span>{' '}
            de Mitzu No Kokyu &#8482;.
          </small>
        </div>
        <div>
          <a href="#" className="text-xs capitalize">
            Ver todos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
