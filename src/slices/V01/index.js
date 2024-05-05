"use client";

import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";

/**
 * @typedef {import("@prismicio/client").Content.V01Slice} V01Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<V01Slice>} V01Props
 * @param {V01Props}
 */
const V01 = ({ slice }) => {
  const bgColorOptions = {
    Grey: "bg-custom-gray-e8",
    White: "bg-white",
  };
  const bgClass = bgColorOptions[slice.primary.background];
  const isImageLeft = slice.variation === "imageLeft";

  return (
    <section
      ref={container}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "mb-4 flex flex-col rounded-2xl px-8 py-8 shadow-md md:flex-row",
        isImageLeft && "flex-row-reverse",
        bgClass,
      )}
      id={slice.variation === "default" ? "for-business" : "for-individuals"}
    >
      <div className={clsx("flex flex-col md:w-2/3", isImageLeft && "pl-8")}>
        <div className="text-author-red text-sm font-bold">
          {slice.primary.page_number}
        </div>
        <div className="py-7 text-6xl font-normal md:w-4/5 md:pr-7">
          <Text field={slice.primary.title} />
        </div>
        {slice.items.map((item) => (
          <div key={JSON.stringify(item)} className="">
            <div
              className={`h-px ${
                isImageLeft ? "bg-custom-gray-d7" : "bg-custom-gray-e8"
              }`}
            />
            <div className="flex flex-col pb-12 pt-7 last-of-type:pb-8 md:flex-row md:pr-14">
              <div className="pr-3 text-custom-dark opacity-40 md:w-1/6">
                <Text field={item.key_1} className="mt-1 text-xs font-light" />
              </div>
              <div className="md:w-5/6">
                <div
                  className={clsx({
                    "grid-cols-2 gap-x-4 text-sm md:grid":
                      item.value_1.length > 2,
                    "text-xl": item.value_1.length <= 2,
                  })}
                >
                  <Text field={item.value_1} className="mb-3 font-light" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-row md:w-1/3">
        <PrismicNextImage
          field={slice.primary.picture}
          alt=""
          className="md:aspect-auto aspect-[1/1] w-full rounded-2xl object-cover md:h-full"
        />
        <div className="absolute bottom-3 left-3 right-3">
          <Button
            textField={slice.primary.button_text}
            linkField={slice.primary.button_link}
            className={clsx({
              "bg-black text-white": isImageLeft,
              "bg-custom-yellow": !isImageLeft,
            })}
          />
        </div>
      </div>
    </section>
  );
};

export default V01;
