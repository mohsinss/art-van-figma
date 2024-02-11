import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MainTextFrameType = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const MainTextFrame: NextPage<MainTextFrameType> = ({ propColor }) => {
  const paragraph2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[42px] pr-px pl-0 box-border [row-gap:20px] max-w-full text-left text-5xl text-white font-portfolio-thumbnails-14-18-aa mq450:pb-5 mq450:box-border mq1050:flex-wrap mq1050:pb-[27px] mq1050:box-border">
      <img
        className="h-[800px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[416px] min-h-[800px] mq450:min-w-full mq1050:flex-1"
        loading="eager"
        alt=""
        src="/image-41@2x.png"
      />
      <div className="flex-[0.7011] bg-darkturquoise flex flex-row items-center justify-end py-56 pr-[79px] pl-28 box-border min-w-[416px] max-w-full mq450:pl-5 mq450:pt-[95px] mq450:pb-[95px] mq450:box-border mq450:min-w-full mq750:pl-14 mq750:pr-[39px] mq750:box-border mq1050:flex-1 mq1050:pt-[146px] mq1050:pb-[146px] mq1050:box-border">
        <div className="h-[800px] w-[639px] relative bg-darkturquoise hidden max-w-full" />
        <h2
          className="m-0 h-[352px] flex-1 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[26px]"
          style={paragraph2Style}
        >
          it depicts the view from the east-facing window of his asylum room at
          Saint Rémy de Provence, just before sunrise, with the addition of an
          imaginary village. It has been in the permanent collection of the
          Museum of Modern Art in New York City since 1941, acquired through the
          Lizzie Plummer Bliss Bequest.
        </h2>
      </div>
    </section>
  );
};

export default MainTextFrame;
