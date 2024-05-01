'use client';

import clsx from 'clsx';
import throttle from 'lodash.throttle';
import { useState, useEffect } from 'react';
import { PrismicText } from '@prismicio/react';
import * as prismic from '@prismicio/client';

export const Nav = ({ navigation }) => {
  const [isRowMenu, setIsRowMenu] = useState(false);

  useEffect(() => {
    const scrollHandler = throttle(() => {
      console.log('---scrollYProgress', window.scrollY);
      if (window.scrollY > 0) {
        setIsRowMenu(true);
      } else {
        setIsRowMenu(false);
      }
    }, 500);
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      className={clsx({
        'self-start': !isRowMenu,
        'self-center': isRowMenu,
      })}
    >
      <ul
        className={clsx('flex', {
          'flex-col': !isRowMenu,
          'flex-row gap-3': isRowMenu,
        })}
      >
        {navigation.data?.links.map((item) => (
          <li
            key={prismic.asText(item.label)}
            className="font-semibold tracking-tight text-slate-800"
          >
            <a href={item.link.url} className="text-sm font-light">
              <PrismicText field={item.label} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
