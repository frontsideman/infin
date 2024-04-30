import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage } from '@prismicio/next';
import { Button } from '@/components/Button';
import styles from './styles.module.css';

/**
 * @typedef {import("@prismicio/client").Content.V04Slice} V04Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V04Slice>} V04Props
 * @param {V04Props}
 */
const V04 = ({ slice }) => {
  const picturePositionClasses = {
    ['Top Left']: 'row-[1_/_3] col-[1_/_2]',
    ['Top Right']: 'row-[1_/_3] col-[-2_/_-1]',
    ['Bottom Right']: 'row-[-3_/_-1] col-[-2_/_-1] flex items-end justify-end',
    ['Bottom Left']: 'row-[-3_/_-1] col-[1_/_2]',
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="marketing-efforts"
      className={` grid
                  grid-flow-dense
                  grid-cols-8
                  grid-rows-6
                  px-8
                  py-8
                  mb-4
                  rounded-2xl
                  shadow-md
                  ${styles['custom-bg']}`}
    >
      <div className="col-[2_/_8] row-[1_/_2] text-center font-bold text-sm">
        {slice.primary.block_number}
      </div>
      <div
        className={`m-auto col-[2_/_8] row-[2_/_6] text-center ${styles.title}`}
      >
        <div className="text-sm"></div>
        <PrismicRichText field={slice.primary.question} />
        <PrismicRichText field={slice.primary.title} />
        <div className="text-center">
          <Button
            textField={slice.primary.button}
            linkField={slice.primary.link}
            className="bg-white inline-block px-10"
            labelClassName="font-bold"
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
