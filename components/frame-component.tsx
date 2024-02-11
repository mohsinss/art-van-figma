import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  iconsArrow?: string;
  iconsArrow1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onPreviousContainerClick?: () => void;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  iconsArrow,
  iconsArrow1,
  propBackgroundColor,
  propColor,
  propBackgroundColor1,
  propColor1,
  onPreviousContainerClick,
}) => {
  const ellipsearrowStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const theSTARRYNIGHTStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const theRedVineyardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="w-[928px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-5xl text-white font-portfolio-thumbnails-14-18-aa">
      <div className="w-[736px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
        <div
          className="w-64 flex flex-col items-center justify-start pt-16 px-8 pb-20 box-border relative gap-[18px] cursor-pointer"
          onClick={onPreviousContainerClick}
        >
          <div
            className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-black"
            style={ellipsearrowStyle}
          />
          <img
            className="w-12 h-[22px] relative object-contain z-[1]"
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <h2
            className="m-0 self-stretch h-[72px] relative text-inherit leading-[32px] uppercase font-medium font-inherit flex items-center justify-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]"
            style={theSTARRYNIGHTStyle}
          >
            The STARRY NIGHT
          </h2>
        </div>
        <div className="h-64 w-64 relative">
          <div
            className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-full h-full"
            style={ellipseDivStyle}
          />
          <h2
            className="m-0 absolute top-[104px] left-[32px] text-inherit leading-[32px] uppercase font-medium font-inherit flex items-center justify-center w-48 h-[72px] z-[1] mq450:text-lgi mq450:leading-[26px]"
            style={theRedVineyardStyle}
          >
            The red Vineyard
          </h2>
          <img
            className="absolute top-[64px] left-[104px] w-12 h-[22px] z-[1]"
            loading="eager"
            alt=""
            src={iconsArrow1}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
