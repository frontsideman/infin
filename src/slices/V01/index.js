import clsx from 'clsx';
import { PrismicNextImage } from '@prismicio/next';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';

/**
 * @typedef {import("@prismicio/client").Content.V01Slice} V01Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V01Slice>} V01Props
 * @param {V01Props}
 */
const V01 = ({ slice }) => {
  const bgColorOptions = {
    Grey: 'bg-custom-gray-e8',
    White: 'bg-white',
  };
  const bgClass = bgColorOptions[slice.primary.background];
  const isImageLeft = slice.variation === 'imageLeft';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        'flex flex-col md:flex-row rounded-2xl px-8 py-8 mb-4 shadow-md',
        isImageLeft && 'flex-row-reverse',
        bgClass
      )}
      id={slice.variation === 'default' ? 'for-business' : 'for-individuals'}
    >
      <div className={clsx('flex flex-col md:w-2/3', isImageLeft && 'pl-8')}>
        <div className="font-bold text-sm text-author-red">
          {slice.primary.page_number}
        </div>
        <div className="pr-7 py-7 w-4/5 text-6xl font-normal">
          <Text field={slice.primary.title} />
        </div>
        {slice.items.map((item) => (
          <div key={JSON.stringify(item)} className="">
            <div
              className={`h-px ${
                isImageLeft ? 'bg-custom-gray-d7' : 'bg-custom-gray-e8'
              }`}
            />
            <div className="md:pr-14 pt-7 pb-12 flex flex-col md:flex-row last-of-type:pb-8">
              <div className="text-custom-dark opacity-40 md:w-1/6 pr-3">
                <Text field={item.key_1} className="text-xs font-light mt-1" />
              </div>
              <div className="md:w-5/6">
                <div
                  className={clsx({
                    'md:grid grid-cols-2 gap-x-4 text-sm':
                      item.value_1.length > 2,
                    'text-xl': item.value_1.length <= 2,
                  })}
                >
                  <Text field={item.value_1} className="font-light mb-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-row md:w-1/3 relative">
        <PrismicNextImage
          field={slice.primary.picture}
          alt=""
          className="object-cover h-full w-full rounded-2xl"
        />
        <div className="absolute bottom-3 right-3 left-3">
          <Button
            textField={slice.primary.button_text}
            linkField={slice.primary.button_link}
            className={clsx({
              'bg-black text-white': isImageLeft,
              'bg-custom-yellow': !isImageLeft,
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default V01;
