'use client';

import { SliceZone } from '@prismicio/react';
import { Parallax } from 'react-scroll-parallax';
import { components } from '@/slices';

export const CustomParallax = ({ slices }) => {
  const { reason, footer, ...restComponents } = components;
  // console.log('---slices', slices);
  const mapComponentToSpeed = {
    v01: 10,
    v02: 30,
    v03: 50,
  };

  return (
    <>
      {Object.values(slices).map((slice, index) => {
        {
          /* console.log('----111', typeof slices === 'array');
        console.log('----222', slice.slice_type);
        console.log('----333', components[slice.slice_type]); */
        }

        const sliceType = slice.slice_type;

        if (!components[sliceType]) {
          return null;
        }

        if (restComponents.length > 0 && !restComponents.includes(sliceType)) {
          <SliceZone
            slices={[slice]}
            components={{
              [sliceType]: components[sliceType],
            }}
          />;
        }

        return (
          <Parallax key={index} speed={mapComponentToSpeed[sliceType]}>
            <SliceZone
              slices={[slice]}
              components={{
                [sliceType]: components[sliceType],
              }}
            />
          </Parallax>
        );
      })}
    </>
  );
};
