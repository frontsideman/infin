import { PrismicNextImage } from '@prismicio/next';
import { Text } from '@/components/Text';
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
      className="md:grid
                  grid-flow-dense
                  grid-cols-8
                  grid-rows-[40px_repeat(5,1fr)]
                  px-8
                  py-8
                  mb-4
                  rounded-2xl
                  shadow-md
                  text-white
                  bg-custom-dark"
    >
      <div className="col-[1_/_9] row-[1_/_2] font-bold text-sm">
        {slice.primary.page_number}
      </div>
      <div className={`col-[1_/_5] row-[2_/_5] pr-4 ${styles.title}`}>
        <Text
          field={slice.primary.block_name}
          className="font-normal leading-tight"
        />
      </div>
      <div
        className={`col-[1_/_5] row-[5_/_7] w-1/2 pr-1 text-custom-gray-dark ${styles.points}`}
      >
        <Text field={slice.primary.points} className="font-light" />
      </div>

      <div className="col-[5_/_9] row-[2_/_7]">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-10">
            <Text field={item.message} className="text-xl font-light" />
            <div className="flex items-center mt-4">
              <PrismicNextImage field={item.avatar} alt="" />
              <div className="flex flex-col ml-2">
                <p className="font-bold text-sm">{item.user_name}</p>
                <p className="text-xs font-light text-custom-gray-dark">
                  {item.user_title}
                </p>
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
