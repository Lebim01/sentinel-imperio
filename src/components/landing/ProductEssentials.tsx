/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, ReactNode, useState } from "react";
import classNames from "classnames";

type Props = {
  title: string;
  img: string;
  text: ReactNode;
  textPrimary: string;
  bgClasses: string;
};

const ProductEssentials: FC<Props> = ({
  text,
  img,
  title,
  bgClasses,
  textPrimary,
}) => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    if (!expanded) setExpanded(true);
  };

  return (
    <div className="flex flex-col items-center gap-2 drop-shadow-lg">
      <div
        className={classNames(
          "bg-gradient-to-r text-white rounded-lg p-2 flex flex-col gap-2 items-center",
          bgClasses
        )}
      >
        <img src={img} className="w-2/3 object-contain drop-shadow-md drop-shadow-white" alt={title} />
        <h2
          className={classNames(
            "font-bold bg-[#cdc4bb] p-1 rounded-lg w-full text-center",
            textPrimary
          )}
        >
          {title}
        </h2>
        <p
          onClick={expanded ? undefined : () => expand()}
          className={classNames(
            "transition-all text-balance px-2",
            !expanded && "line-clamp-2",
            expanded && "pb-2"
          )}
        >
          {text}
        </p>
        {!expanded && (
          <a href="#" onClick={expand} className="underline text-blue-500">
            Leer más
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductEssentials;
