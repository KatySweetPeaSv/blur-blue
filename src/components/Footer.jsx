import React from 'react';
import FooterImg from '../assets/footer.jpg';
import BlackWhiteLogo from '../assets/logo-black-and-white.png';
import FacebookLogo from '../assets/social-logos/icons8-facebook-24.png';
import InstagramLogo from '../assets/social-logos/icons8-instagram-32.png';
import TwitterLogo from '../assets/social-logos/icons8-twitter-24.png';
import YoutubeLogo from '../assets/social-logos/icons8-youtube-24.png';
import PinterestLogo from '../assets/social-logos/icons8-pinterest-24.png';
import WhatsappLogo from '../assets/social-logos/icons8-whatsapp-24.png';
import TiktokLogo from '../assets/social-logos/icons8-tiktok-24.png';
import LinkedInLogo from '../assets/social-logos/icons8-linkedin-24.png';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <div className="max-w-[1536px] mt-[2rem] font-oswald">
      <div className="bg-black text-white">
        <div className=" border-white border-solid flex justify-start p-10 gap-[5rem]">
          <div className="flex flex-col gap-5">
            <img className="w-[8rem]" src={BlackWhiteLogo} alt="" />
            <p className="text-xs font-light">
              Mitzu No Kokyu es una empresa registrada, <br />
              bajo el sello de aprobación de la superintendencia de trabajo. 
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white uppercase font-bold">
              Enlaces de Importancia
            </h4>
            <div className="font-light flex flex-col gap-2 pt-5 text-xs">
              <p>Política de reservas</p>
              <p>Pagos y envíos</p>
              <p>Métodos de pago a plazos</p>
              <p>Términos y condiciones de uso</p>
              <p>Política de Privacidad</p>
              <p>Política de Cookies</p>
              <p>Programa de puntos</p>
              <p>Trabaja con nosotros</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white uppercase font-bold">
              Dirección y Contacto
            </h4>

            <div className="font-light grid grid-cols-3 gap-2 pt-5 text-xs">
                 <MapPinIcon className='w-4 text-center col-span-0' />
                 <p className='col-span-2 ml-[-3rem]'>Ave. San Marcos, Distrito 2, Pol. 19, Local #3</p>
                 <MapPinIcon className='w-4 text-center col-span-0' />
                 <p className='col-span-2 ml-[-3rem]'>Centro Comercial La Gran Vía, 8va Etapa, Local #25 </p>
                 <PhoneIcon className='w-4 text-center col-span-0' />
                 <p className='col-span-2 ml-[-3rem]'>(503) 2241-5689</p>
                 <PhoneIcon className='w-4 text-center col-span-0' />
                 <p className='col-span-2 ml-[-3rem]'>(503) 2357-7896</p>
                 <EnvelopeIcon className='w-4 text-center col-span-0' />
                 <p className='col-span-2 ml-[-3rem]'>contacto@mnk.com</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white uppercase font-bold">Redes Sociales</h4>
            <div className="font-light grid grid-cols-4 gap-2 items-center">
              <img
                className="w-6 pt-5"
                src={FacebookLogo}
                alt="facebook logo"
              />
              <img
                className="w-6 pt-5"
                src={InstagramLogo}
                alt="instagram logo"
              />
              <img className="w-6 pt-5" src={TwitterLogo} alt="twitter logo" />
              <img className="w-6 pt-5" src={TiktokLogo} alt="tiktok logo" />
              <img
                className="w-6 pt-5"
                src={WhatsappLogo}
                alt="whatsapp logo"
              />
              <img
                className="w-6 pt-5"
                src={PinterestLogo}
                alt="pinterest logo"
              />
              <img className="w-6 pt-5" src={YoutubeLogo} alt="youtube logo" />
              <img className="w-6 pt-5" src={LinkedInLogo} alt="linked logo" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="w-[10rem] mt-[-3rem]"
            src={FooterImg}
            alt="Luffy Anime Illustration"
          />
        </div>
        <div className='flex flex-col justify-end items-center mt-[-5rem] p-10 border-t-[0.5px] border-white'>
            <p className='font-light text-xs'>Todos los derechos reservados <span className='text-Reddish'> Mitzu No KoKyu </span> Copyright &copy; 2022 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
