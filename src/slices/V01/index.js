import clsx from 'clsx';
import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage } from '@prismicio/next';
import { Button } from '@/components/Button';
import styles from './styles.module.css';

/**
 * @typedef {import("@prismicio/client").Content.V01Slice} V01Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V01Slice>} V01Props
 * @param {V01Props}
 */
const V01 = ({ slice }) => {
  const bgColorOptions = {
    Grey: '#e8e8e8',
    White: '#ffffff',
  };
  const bgColor = { backgroundColor: bgColorOptions[slice.primary.background] };
  const isImageLeft = slice.variation === 'imageLeft';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        'flex rounded-2xl px-8 py-8 mb-4 shadow-md',
        isImageLeft && 'flex-row-reverse'
      )}
      style={bgColor}
    >
      <div className={clsx('flex flex-col w-2/3', isImageLeft && 'pl-8')}>
        <div className="font-bold text-sm">{slice.primary.page_number}</div>
        <div className="pr-7 py-7 w-4/5 text-6xl font-bold">
          <PrismicRichText field={slice.primary.title} />
        </div>
        {slice.items.map((item) => (
          <div key={JSON.stringify(item)} className="">
            <div
              className="h-px"
              style={{ backgroundColor: isImageLeft ? '#d7d7d7' : '#ececec' }}
            />
            <div className="pr-14 pt-7 pb-12 flex flex-row last-of-type:pb-8">
              <div className="text-slate-400 w-1/6 text-xs pr-3">
                <PrismicRichText field={item.key_1} />
              </div>
              <div className="w-5/6">
                <div
                  className={clsx({
                    [`grid grid-cols-2 gap-x-4 text-sm ${styles['mb-nested-10']}`]:
                      item.value_1.length > 2,
                    'text-xl': item.value_1.length <= 2,
                  })}
                >
                  <PrismicRichText field={item.value_1} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-row w-1/3 relative">
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
              'bg-yellow-500': !isImageLeft,
            })}
            labelClassName="font-bold"
          />
        </div>
      </div>
    </section>
  );
};

export default V01;
