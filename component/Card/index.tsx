import React, { FC } from "react";
import Image from "next/image";

import scss from "./index.module.scss";

const Card: FC<{
  src: string,
  width: number,
  height: number,
  alt: string
}> = ({ src, width, height, alt }) => {

  return (
    <div className={ scss.card }>
      <Image
        src={ src }
        width={ width } height={ height }
        alt={ alt }
      />
      <div className={ scss.content }>
        { alt }
      </div>
    </div>
  )
};
export default Card;

