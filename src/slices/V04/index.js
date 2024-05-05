import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.V04Slice} V04Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V04Slice>} V04Props
 * @param {V04Props}
 */
const V04 = ({ slice }) => {
  const picturePositionClasses = {
    ["Top Left"]: "row-[1_/_3] col-[1_/_3]",
    ["Top Right"]: "row-[1_/_3] col-[-3_/_-1]",
    ["Bottom Right"]: "row-[7_/_9] col-[-3_/_-1] flex items-end justify-end",
    ["Bottom Left"]: "row-[-1_/_-3] col-[1_/_3]",
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="marketing-efforts"
      className={` grid-rows-6- mb-4 grid grid-cols-12 grid-rows-[30px_repeat(6,_auto)_30px] rounded-2xl bg-custom-yellow px-8 py-8 shadow-md ${styles["custom-bg"]}`}
    >
      <div className="col-[3_/_-3] row-[1_/_2] text-center text-sm font-bold">
        {slice.primary.block_number}
      </div>
      <div className="col-[3_/_-3] row-[2_/_9] mx-auto flex flex-col justify-center text-center">
        <Text
          field={slice.primary.question}
          className="mb-4 text-sm font-light"
        />
        <Text
          field={slice.primary.title}
          className="mb-6 text-4xl font-light uppercase leading-none md:text-6xl lg:text-8xl"
        />
        <div className="text-center">
          <Button
            textField={slice.primary.button}
            linkField={slice.primary.link}
            className="inline-block bg-white px-10"
          />
        </div>
      </div>
      {slice.items.map((item, index) => (
        <div
          key={index}
          className={`${picturePositionClasses[item.picture_position]}`}
        >
          <PrismicNextImage
            field={item.picture}
            alt=""
            className="aspect-[1/1]"
            height="233px"
            width="233px"
          />
        </div>
      ))}
    </section>
  );
};

export default V04;
