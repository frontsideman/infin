"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { ButtonLink } from "@/components/ButtonLink";
import { Bounded } from "@/components/Bounded";
import { motion, useAnimationControls } from "framer-motion";

export function RootHeader({ settings, navigation, homepage }) {
  const [isRowMenu, setIsRowMenu] = useState(false);
  const controls = useAnimationControls();
  const logoVariants = {
    expand: {
      width: "30%",
      transition: { type: "linear", duration: 0.6 },
    },
    collapse: {
      width: "25%",
      transition: { type: "linear", duration: 0.6 },
    },
  };

  useEffect(() => {
    const scrollHandler = throttle(() => {
      if (window.scrollY > 0) {
        setIsRowMenu(true);
        controls.start("collapse");
      } else {
        setIsRowMenu(false);
        controls.start("expand");
      }
    }, 200);
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [controls]);

  return (
    <Bounded
      as="header"
      yPadding="sm1-" // leave wrong value
      className={clsx("sticky top-0 z-10 bg-custom-gray-light pb-2 md:-mx-1", {
        "pt-8": !isRowMenu,
        "pt-3": isRowMenu,
      })}
    >
      <div className="flex flex-wrap items-start justify-between leading-none">
        <motion.div
          // className={clsx({
          //   'w-1/3': !isRowMenu,
          //   'w-1/5': isRowMenu,
          // })}
          initial="collapse"
          variants={logoVariants}
          animate={controls}
          exit="exit"
        >
          <a href="/" className="text-xl font-semibold tracking-tight">
            {/* TODO: find solution */}
            <img src={settings.data.logo.url} alt={settings.data.logo.alt} />
          </a>
        </motion.div>
        <nav
          className={clsx({
            "self-start": !isRowMenu,
            "self-center": isRowMenu,
          })}
        >
          <ul
            className={clsx("flex", {
              "flex-col": !isRowMenu,
              "flex-row gap-4": isRowMenu,
            })}
          >
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <a href={item.link.url} className="text-sm font-light">
                  <PrismicText field={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          link={homepage.data.contact_button[0].link.url}
          text={homepage.data.contact_button[0].label[0].text}
          className="self-start border border-custom-gray-dark"
        />
      </div>
    </Bounded>
  );
}
