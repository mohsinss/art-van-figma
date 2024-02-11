import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrametitleleftType = {
  /** Style props */
  propColor?: CSSProperties["color"];
};

const Frametitleleft: NextPage<FrametitleleftType> = ({ propColor }) => {
  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-black font-portfolio-thumbnails-14-18-aa">
      <div className="w-[832px] flex flex-col items-end justify-start gap-[80px] max-w-full mq1050:gap-[80px] mq450:gap-[80px]">
        <img
          className="w-[735px] relative max-h-full object-cover max-w-full"
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="w-[353px] flex flex-col items-end justify-start gap-[128px] min-w-[353px] max-w-full mq1050:flex-1 mq750:min-w-full mq450:gap-[128px]">
            <img
              className="w-64 h-64 relative object-cover"
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
            <h2
              className="m-0 self-stretch h-80 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[26px]"
              style={paragraphStyle}
            >
              The interior depicted is the Café de la Gare, 30 Place Lamartine,
              run by Joseph Ginoux and his wife Marie, who in November 1888
              posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph
              Ginoux evidently posed for both artists.
            </h2>
          </div>
          <div className="h-[512px] w-[352px] flex flex-col items-start justify-start min-w-[352px] max-w-full mq1050:flex-1 mq750:min-w-full">
            <img
              className="self-stretch h-[431px] relative max-w-full overflow-hidden shrink-0 object-cover mq1050:self-stretch mq1050:w-auto"
              loading="eager"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frametitleleft;
