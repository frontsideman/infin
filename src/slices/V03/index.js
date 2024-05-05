import { PrismicNextImage } from "@prismicio/next";
import { Text } from "@/components/Text";
import styles from "./styles.module.css";

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
      className="mb-4
                  grid-flow-dense
                  grid-cols-8
                  grid-rows-[40px_repeat(5,1fr)]
                  rounded-2xl
                  bg-custom-dark
                  px-8
                  py-8
                  text-white
                  shadow-md
                  md:grid"
    >
      <div className="col-[1_/_9] row-[1_/_2] text-sm font-bold">
        {slice.primary.page_number}
      </div>
      <div
        className={`col-[1_/_5] row-[2_/_5] mb-5 md:mb-0 md:pr-4 ${styles.title}`}
      >
        <Text
          field={slice.primary.block_name}
          className="font-normal leading-tight"
        />
      </div>
      <div
        className={`col-[1_/_5] row-[5_/_7] mb-8 w-1/2 pr-1 text-custom-gray-dark  md:mb-0 ${styles.points}`}
      >
        <Text field={slice.primary.points} className="font-light" />
      </div>

      <div className="col-[5_/_9] row-[2_/_7]">
        {slice.items.map((item, index) => (
          <div key={index} className="mb-10">
            <Text field={item.message} className="text-xl font-light" />
            <div className="mt-4 flex items-center">
              <PrismicNextImage field={item.avatar} alt="" />
              <div className="ml-2 flex flex-col">
                <p className="text-sm font-bold">{item.user_name}</p>
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
