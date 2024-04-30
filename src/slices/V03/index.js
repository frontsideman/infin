import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage } from '@prismicio/next';

import styles from './styles.module.css';

/**
 * @typedef {import("@prismicio/client").Content.V03Slice} V03Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V03Slice>} V03Props
 * @param {V03Props}
 */
const V03 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="capitalism"
      className=" grid
                  grid-flow-dense
                  grid-cols-8
                  grid-rows-[40px_repeat(5,1fr)]
                  px-8
                  py-8
                  mb-4
                  rounded-2xl
                  shadow-md
                  bg-slate-950
                  text-white"
    >
      <div className="col-[1_/_9] row-[1_/_2] font-bold text-sm">
        {slice.primary.page_number}
      </div>
      <div className={`col-[1_/_5] row-[2_/_4] pr-2 ${styles.title}`}>
        <PrismicRichText field={slice.primary.block_name} />
      </div>
      <div
        className={`col-[1_/_5] row-[4_/_7] w-1/2 pr-2 text-slate-400 ${styles.points}`}
      >
        <PrismicRichText field={slice.primary.points} />
      </div>

      <div className="col-[5_/_9] row-[2_/_7]">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-6">
            <PrismicRichText field={item.message} />
            <div className="flex">
              <PrismicNextImage field={item.avatar} alt="" />
              <div className="flex flex-col ml-2">
                <p className="font-bold text-sm">{item.user_name}</p>
                <p className="text-xs text-slate-400">{item.user_title}</p>
              </div>
            </div>
          </div>
        ))}
        <div className=""></div>
      </div>
    </section>
  );
};

export default V03;
