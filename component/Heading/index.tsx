import React, { FC } from "react";
import Image from "next/image";

import scss from "./index.module.scss";

const Heading: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={ scss.heading }>
      <div className={ scss.border }>
        <div className={ scss.solid } />
        <div className={ scss.dashed } />
      </div>

      <div className={ scss.content }>
        <div className={ scss.image }>
          <Image
            src="/images/nikukyu.png"
            width={ 32 } height={ 32 }
            alt="肉球"
          />
        </div>

        { children }

        <div className={ scss.image }>
          <Image
            src="/images/nikukyu.png"
            width={ 32 } height={ 32 }
            alt="肉球"
          />
        </div>
      </div>

      <div className={ scss.border }>
        <div className={ scss.solid } />
        <div className={ scss.dashed } />
      </div>
    </div>
  );
};
export default Heading;