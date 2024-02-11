import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FRAMEType = {
  iconsArrow?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onHeaderLeftContainerClick?: () => void;
};

const FRAME: NextPage<FRAMEType> = ({
  iconsArrow,
  propColor,
  propColor1,
  onHeaderLeftContainerClick,
}) => {
  const titleLeftStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const titleLeft1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="h-[466px] w-[66px] flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border text-left text-sm text-black font-portfolio-thumbnails-14-18-aa mq750:hidden">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[284px]">
        <div
          className="flex flex-row items-center justify-start gap-[8px] cursor-pointer"
          onClick={onHeaderLeftContainerClick}
        >
          <img
            className="h-[7.4px] w-4 relative object-contain"
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <div
            className="relative leading-[18px] uppercase"
            style={titleLeftStyle}
          >
            home
          </div>
        </div>
        <div
          className="w-[133px] relative leading-[18px] uppercase text-center inline-block [transform:_rotate(-90deg)]"
          style={titleLeft1Style}
        >
          2. The night café
        </div>
      </div>
    </div>
  );
};

export default FRAME;
