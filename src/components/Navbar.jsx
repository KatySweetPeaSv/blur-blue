import React from "react";
import CardGrid from "./card-grid/CardGrid";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="w-screen z-10 bg-GrayishBlack fixed overflow-hidden top-0 drop-shadow-lg mb-5 p-2">
      <div className="flex justify-between items-center w-full h-full px-2  text-white">
        <div className="flex items-center justify-evenly">
          <Link to="/">
            <img className="w-[10rem] mr-[8rem]" src={Logo} alt="logo" />
          </Link>

          <ul className="flex">
            <li className="font-oswald">Figuras</li>
            <li className="font-oswald">Franquicias</li>
            <li className="font-oswald">Pre-Ordenes</li>
            <li className="font-oswald">Recién Llegadas</li>
            <li className="font-oswald">Ofertas</li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="mr-4 flex">
            <ShoppingCartIcon
              className=" w-7 mr-8 text-white cursor-pointer"
              title="Carrito"
            />
            <Link to="/checkout">
              <span className="pCounter ml-[-44px] mb-[38px] text-center text-xs">
                {cart.length}
              </span>
            </Link>
          </div>
          <Link to="/register">
            <button className="px-4 py-2 mr-4 font-oswald">Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
