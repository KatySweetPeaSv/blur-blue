import React from "react";
import AnimeGirl from "../assets/anime-girl-2.png";

const Hero = () => {
  return (
    <div className="mt-5">
      <div className="grid md:grid-cols-2 max-w-[1240px] items-center mt-24">
        <div className="border-GrayishBlack p-8  border-2 justify-center items-center content-center">
          <div className="flex flex-col justify-center items-center w-full bg-GrayishBlack text-white border-white h-[25rem] p-5">
            <div className="flex ml-[15rem] mb-[-4.5rem] relative">
              <iframe
                src="https://giphy.com/embed/wwAT20FrHyVd3Cxvor"
                width="160"
                height="133"
                class="giphy-embed"
              ></iframe>
            </div>
            <h1 className="text-center text-3xl uppercase font-luckiest text-Reddish">
              Las figuras más <span className="italic">SUGOI</span>
            </h1>
            <p className="text-center pt-14 font-lato">
              Figuras exclusivas, entregas rápidas en todo el país, <br /> free
              shipping, las mejores franquicias. <br /> TODO en un solo lugar.
            </p>
            <div className="flex items-center">
              <button className="px-4 py-2 mt-14 text-white bg-GrayishBlack font-oswald">
                Todas las Figuras
              </button>
            </div>
          </div>
        </div>

        <img
          className="ml-10  w-10/12 items-center"
          src={AnimeGirl}
          alt="ilustración chica anime"
        />
      </div>
    </div>
  );
};

export default Hero;
