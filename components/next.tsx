import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type NextType = {
  maskGroup?: string;
  iconsArrow?: string;
  theNightCaf?: string;

  /** Style props */
  propColor?: CSSProperties["color"];

  /** Action props */
  onNextContainerClick?: () => void;
};

const Next: NextPage<NextType> = ({
  maskGroup,
  iconsArrow,
  theNightCaf,
  propColor,
  onNextContainerClick,
}) => {
  const theNightCaf1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="w-64 flex flex-col items-center justify-start pt-16 px-8 pb-20 box-border relative gap-[18px] cursor-pointer text-center text-5xl text-white font-portfolio-thumbnails-14-18-aa"
      onClick={onNextContainerClick}
    >
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={maskGroup}
      />
      <img
        className="w-12 h-[22px] relative z-[1]"
        loading="eager"
        alt=""
        src={iconsArrow}
      />
      <div
        className="self-stretch h-[72px] relative leading-[32px] uppercase font-medium flex items-center justify-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]"
        style={theNightCaf1Style}
      >
        {theNightCaf}
      </div>
    </div>
  );
};

export default Next;
