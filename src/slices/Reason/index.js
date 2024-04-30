import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.ReasonSlice} ReasonSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ReasonSlice>} ReasonProps
 * @param {ReasonProps}
 */
const Reason = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} alt="" />
    </section>
  );
};

export default Reason;
