import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MaskGroupEllipseType = {
  iconsArrow?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const MaskGroupEllipse: NextPage<MaskGroupEllipseType> = ({
  iconsArrow,
  propBackgroundColor,
  propColor,
}) => {
  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const theRedVineyard1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="h-64 w-64 relative text-center text-5xl text-black font-portfolio-thumbnails-14-18-aa">
      <div
        className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full"
        style={ellipseDiv1Style}
      />
      <div
        className="absolute top-[104px] left-[32px] leading-[32px] uppercase font-medium flex items-center justify-center w-48 h-[72px] z-[1] mq450:text-lgi mq450:leading-[26px]"
        style={theRedVineyard1Style}
      >
        The red Vineyard
      </div>
      <img
        className="absolute top-[64px] left-[104px] w-12 h-[22px] z-[1]"
        loading="eager"
        alt=""
        src={iconsArrow}
      />
    </div>
  );
};

export default MaskGroupEllipse;
