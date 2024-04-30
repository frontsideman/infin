'use client';

import React, { useEffect, useState } from 'react';
import './styles.css';

export const Splash = () => {
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    const timerCallback = () => {
      setIsShowing(false);
      document
        .querySelector('body')
        .classList.remove('overflow-hidden', 'fixed', 'w-screen', 'h-screen');
    };
    const timerId = setTimeout(timerCallback, 2400);

    return () => {
      clearInterval(timerId);
    };
  }, [setIsShowing]);

  if (!isShowing) {
    return;
  }

  return (
    <div className="absolute w-full h-full bg-slate-900 grid z-40">
      <svg
        className="m-auto w-full md:w-auto px-4"
        width="735"
        height="130"
        viewBox="0 0 735 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logoThe" className="logo-item">
          <path
            d="M10.5278 0.919739L20.4268 10.8231H0.637817V0.919739H10.5278Z"
            fill="#FFCD00"
          />
          <path
            d="M20.4279 10.8934H20.4975L30.3269 20.718V51.4448H20.4279V10.8934Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 41.4987V51.3929H110.398L100.507 41.4987V31.0999H110.398V41.4987H150.985Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 0.840942H110.398V10.7352H150.985V0.840942Z"
            fill="#FFCD00"
          />
          <path
            d="M150.985 21.2033V31.0991H110.398L100.507 21.2033V10.7347H110.398V21.2033H150.985Z"
            fill="#FFCD00"
          />
          <path
            d="M90.6089 32.4558V51.3926H80.7356V32.4558H50.0993L40.226 22.5691V10.8928H20.4975L20.4279 10.8231V0.840942H50.0993V22.5691H80.7356L90.6089 32.4558Z"
            fill="#FFCD00"
          />
          <path
            d="M50.0983 32.4553H40.225V51.392H50.0983V32.4553Z"
            fill="#FFCD00"
          />
          <path
            d="M90.6089 0.919678H80.7356V22.5691H90.6089V0.919678Z"
            fill="#FFCD00"
          />
        </g>

        {/* <!-- I --> */}
        <g id="logoI" className="logo-item">
          <path
            d="M224.761 51.4435H199.664V129.086H224.761V51.4435Z"
            fill="#FFCD00"
          />
          <path
            d="M224.761 0.840942V51.4441L199.664 26.3365V0.840942H224.761Z"
            fill="#FFCD00"
          />
        </g>

        {/* <!-- N --> */}
        <g id="logoIn" className="logo-item">
          <path
            d="M274.955 25.9501H249.859V129.087H274.955V25.9501Z"
            fill="#FFCD00"
          />
          <path
            d="M377.875 25.9501V129.087H352.778V25.9501H274.958V0.840942H352.778L377.875 25.9501Z"
            fill="#FFCD00"
          />
        </g>

        {/* <!-- F --> */}
        <g id="logoInf" className="logo-item">
          <path
            d="M530.988 0.840942H428.071V25.9486H530.988V0.840942Z"
            fill="#FFCD00"
          />
          <path
            d="M428.071 89.1084H402.974V129.087H428.071V89.1084Z"
            fill="#FFCD00"
          />
          <path
            d="M428.071 25.9501V63.9994H505.891V89.1086H428.071L402.974 63.9994V25.9501H428.071Z"
            fill="#FFCD00"
          />
        </g>

        {/* <!-- I --> */}
        <g id="logoInfi" className="logo-item">
          <path
            d="M581.181 51.4435H556.085V129.086H581.181V51.4435Z"
            fill="#FFCD00"
          />
          <path
            d="M581.181 0.840942V51.4441L556.085 26.3365V0.840942H581.181Z"
            fill="#FFCD00"
          />
        </g>

        {/* <!-- N --> */}
        <g id="logoInfin" className="logo-item">
          <path
            d="M631.376 25.9501H606.279V129.087H631.376V25.9501Z"
            fill="#FFCD00"
          />
          <path
            d="M734.293 25.9501V129.087H709.196V25.9501H631.376V0.840942H709.196L734.293 25.9501Z"
            fill="#FFCD00"
          />
        </g>
      </svg>
    </div>
  );
};
