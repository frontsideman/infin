'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export const CustomParallaxProvider = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
