import React from "react";
import CardGrid from "./CardGrid";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="w-screen z-10 bg-GrayishBlack fixed overflow-hidden top-0 drop-shadow-lg mb-5 p-2">
      <div className="flex justify-between items-center w-full h-full px-2  text-white">
        <div className="flex items-center ">
          <Link to="/">
            <h1 className="text-2xl font-bold mr-[10rem] sm:text-3xl cursor-pointer font-oswald">
              Mizu No KoKyú
            </h1>
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
            <a
              href="#"
              className="pCounter ml-[-44px] mb-[38px] text-center text-xs"
            >
              0
            </a>
          </div>

          <button className="px-4 py-2 mr-4 font-oswald">Ingresar</button>
          <button className="px-4 py-2 mr-4 font-oswald">Registrarme</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
