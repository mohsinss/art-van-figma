import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ propColor }) => {
  const paragraph1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="w-[831px] flex flex-col items-end justify-start pt-0 px-0 pb-32 box-border gap-[128px] max-w-full text-left text-5xl text-black font-portfolio-thumbnails-14-18-aa lg:pb-[83px] lg:box-border mq1050:gap-[128px] mq750:pb-[54px] mq750:box-border mq450:gap-[128px]">
      <h2
        className="m-0 w-[640px] relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
        style={paragraph1Style}
      >
        he Night Café (French: Le Café de nuit) is an oil painting created by
        Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title
        is inscribed lower right beneath the signature. The painting is owned by
        Yale University and is currently held at the Yale University Art Gallery
        in New Haven, Connecticut.
      </h2>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <img
          className="w-[735px] relative max-h-full object-cover max-w-full"
          loading="eager"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
