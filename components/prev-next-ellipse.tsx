import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type PrevNextEllipseType = {
  iconsArrow?: string;
  paulGauguinsArmchair?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMargin?: CSSProperties["margin"];
  propColor?: CSSProperties["color"];

  /** Action props */
  onNextContainerClick?: () => void;
};

const PrevNextEllipse: NextPage<PrevNextEllipseType> = ({
  iconsArrow,
  paulGauguinsArmchair,
  propBackgroundColor,
  propMargin,
  propColor,
  onNextContainerClick,
}) => {
  const linkedinDividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const paulGauguinsArmchairStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      color: propColor,
    };
  }, [propMargin, propColor]);

  return (
    <div
      className="w-64 flex flex-col items-center justify-start pt-16 px-[25px] pb-20 box-border relative gap-[18px] text-center text-5xl text-white font-portfolio-thumbnails-14-18-aa"
      onClick={onNextContainerClick}
    >
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-black"
        style={linkedinDividerStyle}
      />
      <img
        className="w-12 h-[22px] relative object-contain z-[1]"
        loading="eager"
        alt=""
        src={iconsArrow}
      />
      <h2
        className="m-0 self-stretch h-[72px] relative text-inherit leading-[32px] uppercase font-medium font-inherit flex items-center justify-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]"
        style={paulGauguinsArmchairStyle}
      >
        {paulGauguinsArmchair}
      </h2>
    </div>
  );
};

export default PrevNextEllipse;
