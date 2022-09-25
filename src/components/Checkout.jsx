import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/actions";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-[100%] m-auto text-center p-10 items-center font-lato">
      <div className="border-GrayishBlack border-[1px]  m-auto flex flex-col justify-center rounded gap-4  bg-[#FAFBFC] py-5">
        {cart &&
          cart.map((item) => {
            return (
              <div className="flex justify-around flex-wrap   py-2">
                <div>
                  <div className="flex justify-center">
                    <img
                      className="checkoutImg"
                      src={item.image}
                      alt="product"
                    />
                  </div>
                  <p className="font-bold text-Blue text-lg">{item.price}</p>
                  <p className="text-base font-semibold capitalize">
                    {item.name}
                  </p>
                  <p className="text-base capitalize">{item.brand}</p>
                  <p className="text-base capitalize italic">
                    {item.franchise}
                  </p>
                </div>

                <div className="flex justify-center">
                  <TrashIcon
                    className="w-6 hover:text-Reddish cursor-pointer"
                    onClick={() => dispatch(deleteFromCart(item.id))}
                  />
                </div>
              </div>
            );
          })}
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
          Al realizar el pedido, aceptas el{" "}
          <span className="text-blue-700 underline">aviso de privacidad</span> y
          las
          <span className="text-blue-700 underline">
            {" "}
            condiciones de uso{" "}
          </span>{" "}
          de Mitzu No Kokyu &#8482;.
        </small>
      </div>
      <div>
        <a href="#" className="text-xs capitalize">
          Ver todos
        </a>
      </div>
    </div>
  );
};

export default Checkout;
