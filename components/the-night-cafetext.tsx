import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TheNightCafetextType = {
  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propColor8?: CSSProperties["color"];
};

const TheNightCafetext: NextPage<TheNightCafetextType> = ({
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
}) => {
  const fieldStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const field1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const field2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const field3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const field4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const field5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const field6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const field7Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const theNightCafStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
    };
  }, [propColor8]);

  return (
    <section className="w-[1160px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-sm text-gray-300 font-portfolio-thumbnails-14-18-aa">
      <div className="w-[832px] flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[32px]">
        <div className="w-[352px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <div
              className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0"
              style={fieldStyle}
            >
              year
            </div>
            <div
              className="flex-1 relative leading-[18px] uppercase text-black inline-block min-w-[25px]"
              style={field1Style}
            >
              1888
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <div
              className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0"
              style={field2Style}
            >
              MEDIUM
            </div>
            <div
              className="flex-1 relative leading-[18px] uppercase text-black inline-block min-w-[86px]"
              style={field3Style}
            >
              Oil on canvas
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <div
              className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0"
              style={field4Style}
            >
              LOCATION
            </div>
            <div
              className="flex-1 relative leading-[18px] uppercase text-black inline-block min-w-[155px]"
              style={field5Style}
            >
              AYale University Gallery
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <div
              className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0"
              style={field6Style}
            >
              SIZE
            </div>
            <div
              className="flex-1 relative leading-[18px] uppercase text-black inline-block min-w-[88px]"
              style={field7Style}
            >
              28.5 in × 36.3 in
            </div>
          </div>
        </div>
        <div
          className="flex-1 relative leading-[20px] text-black inline-block min-w-[291px] max-w-full"
          style={theNightCafStyle}
        >
          The Night Café (French: Le Café de nuit) is an oil painting created by
          Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is
          inscribed lower right beneath the signature. The painting is owned by
          Yale University and is currently held at the Yale University Art
          Gallery in New Haven, Connecticut.
        </div>
      </div>
    </section>
  );
};

export default TheNightCafetext;
