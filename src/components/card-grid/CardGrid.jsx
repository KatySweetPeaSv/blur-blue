import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFigures from '../../hooks/useFigure';
// Import all redux logic
import { insertToCart } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CardGrid = () => {
  const { figures, loading } = useFigures();
  console.log(figures);

  // Redux logic
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1240px] m-auto px-4 mt-[7rem] bg-img">
      <div className="flex flex-row-reverse mb-[-18rem] mr-[-6rem]">
        <iframe
          src="https://giphy.com/embed/JnlCMXgPUawQUb5HVf"
          width="160"
          height="160"
        />
      </div>
      <h1 className="text-4xl font-anton text-center py-10 ">
        Figuras más vendidas
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-DeepGray">Filtrar por Franquicia:</p>
          <div className="flex justify-between flex-wrap mt-2">
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              One Piece
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              Kimetsu No Yaiba
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              Shigeki No Kyojin
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              Bleach
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              Death Note
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-DeepGray">Filtrar por precio (US$):</p>
          <div className="flex justify-between flex-wrap mt-2">
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              1 - 100
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              100 - 200
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              200 - 400
            </button>
            <button className="border-Reddish text-Reddish bg-white font-thin hover:bg-Reddish hover:text-white m-2 px-4">
              500+
            </button>
          </div>
        </div>
      </div>
      {/* ==============================*/}
      <div>
        {/*Display cards [8]*/}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {loading && <div>Loading</div>}
          {!loading && (
            <>
              {figures.map((figure) => (
                <div
                  className="border-GrayishBlack  cardShadow flex flex-col 
                        flex-wrap p-3 font-lato transition duration-300 hover:border-[1px] hover:shadow-none rounded"
                  key={figure.id}
                >
                  {/* Image */}
                  <div>
                    <Link to={`/figure/${figure.id}`}>
                      <img
                        className="cardRatio"
                        src={figure.image}
                        alt={figure.name}
                      />
                    </Link>
                  </div>
                  {/* Product Details */}
                  <div className="border-GrayishBlack border-t-[1px] text-center py-2">
                    <Link to={`/figure/${figure.id}`}>
                      <h3 className="uppercase font-bold text-GrayishBlack">
                        {figure.name}
                      </h3>
                    </Link>

                    <p className=" capitalize text-sm text-gray-800">
                      {figure.franchise}
                    </p>
                    <p className=" capitalize text-xs text-gray-600">
                      {figure.brand}
                    </p>
                    <p className=" text-black text-2xl py-2 font-bold">
                      ${figure.price}
                    </p>

                    {/* Checkout Options */}
                    <p className="text-2">Cantidad</p>
                    <div className="counter flex justify-center pt-2">
                      <button className="px-2 py-1 font-bold">-</button>
                      <input
                        className="w-12 border-LightBlue rounded-md mx-1 text-sm text-center
                                        placeholder-gray-600 focus:outline-LightBlue
                                         focus:border-LightBlue focus:ring-1 
                                        focus:ring-LightBlue "
                        type="text"
                        placeholder="0"
                        name="#OfItems"
                      />
                      <button className="px-2 py-1 font-bold">+</button>
                    </div>
                    <button
                      className="px-4 py-2 mt-3"
                      onClick={(e) => dispatch(insertToCart(figure))}
                    >
                      Agregar al Carrito
                    </button>
                    <button className="px-12 py-2 mt-3 bg-green-500 hover:bg-green-300">
                      Comprar
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="flex ml-[-7rem] mt-[-3rem]">
            <iframe
              src="https://giphy.com/embed/kwO0W496Bz21dfCvgk"
              width="160"
              height="160"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
