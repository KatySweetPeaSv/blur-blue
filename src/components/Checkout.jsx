import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/actions.js";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const initialValue = 0;
  // sum of all the prices in the cart
  const total = cart.reduce((acc, item) => acc + item.price, initialValue);
  console.log(total);
  return (
    <div className="w-[25rem] m-auto text-center p-10 items-center font-lato">
      <div className="border-GrayishBlack border-[1px] m-auto flex flex-col py-5 justify-center rounded gap-4  bg-[#fcf8f5]">
        <p className="font-bold capitalize">Carrito de compras</p>
        {cart &&
          cart.map((item) => {
            return (
              <>
                <div className="flex justify-around flex-wrap  py-2">
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="checkoutImg"
                        src={item.image}
                        alt="image"
                      />
                    </div>
                    <p className="font-bold text-Blue">{item.price}</p>
                    <p className="text-xs capitalize">{item.name}</p>
                  </div>
                  <div className="flex justify-center flex-col content-center text-xs">
                    <p>Cantidad:</p>
                    <p className="text-gray-600">1</p>
                  </div>
                  <div className="flex justify-center">
                    <TrashIcon
                      className="w-5 hover:text-Reddish cursor-pointer transition duration-300"
                      title="Eliminar"
                      onClick={() => dispatch(deleteFromCart(item.id))}
                    />
                  </div>
                </div>
              </>
            );
          })}
        <div className="grid grid-cols-1 gap-1">
          <p>Total a pagar</p>
          <p className="font-bold text-green-500">{total}</p>
          <button className="mx-[55px]  bg-green-500 hover:bg-green-300 capitalize">
            Comprar Ya
          </button>
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
