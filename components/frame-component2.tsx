import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  iconsDarkLight?: string;
  iconsMenu?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  iconsDarkLight,
  iconsMenu,
  propColor,
}) => {
  const h1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="h-[800px] flex-1 relative max-w-[calc(100%_-_144px)] text-center text-45xl text-black font-portfolio-thumbnails-14-18-aa mq750:max-w-full">
      <h1
        className="m-0 absolute top-[244px] left-[0px] text-inherit leading-[78px] uppercase font-medium font-inherit inline-block w-[928px] z-[1] mq1050:text-32xl mq1050:leading-[62px] mq450:text-19xl mq450:leading-[47px]"
        style={h1Style}
      >
        I have tried to express the terrible passions of humanity by means of
        red and purple
      </h1>
      <div className="absolute h-full top-[0px] bottom-[0px] left-[464px] w-[640px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-contain"
          alt=""
          src="/hero-image@2x.png"
        />
        <img
          className="absolute top-[24px] left-[528px] w-8 h-8 object-contain z-[1]"
          loading="eager"
          alt=""
          src={iconsDarkLight}
        />
        <img
          className="absolute top-[24px] left-[576px] w-8 h-8 z-[1]"
          loading="eager"
          alt=""
          src={iconsMenu}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
