import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterLeftType = {
  /** Style props */
  instagramDividerBackgroundImage?: CSSProperties["backgroundImage"];
  companyColor?: CSSProperties["color"];
  positionColor?: CSSProperties["color"];
  yearColor?: CSSProperties["color"];
  companyColor1?: CSSProperties["color"];
  positionColor1?: CSSProperties["color"];
  yearColor1?: CSSProperties["color"];
  companyColor2?: CSSProperties["color"];
  positionColor2?: CSSProperties["color"];
  yearColor2?: CSSProperties["color"];
  companyColor3?: CSSProperties["color"];
  positionColor3?: CSSProperties["color"];
  yearColor3?: CSSProperties["color"];
  companyColor4?: CSSProperties["color"];
  positionColor4?: CSSProperties["color"];
  yearColor4?: CSSProperties["color"];
};

const FooterLeft: NextPage<FooterLeftType> = ({
  instagramDividerBackgroundImage,
  companyColor,
  positionColor,
  yearColor,
  companyColor1,
  positionColor1,
  yearColor1,
  companyColor2,
  positionColor2,
  yearColor2,
  companyColor3,
  positionColor3,
  yearColor3,
  companyColor4,
  positionColor4,
  yearColor4,
}) => {
  const instagramDividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: instagramDividerBackgroundImage,
    };
  }, [instagramDividerBackgroundImage]);

  const companyStyle: CSSProperties = useMemo(() => {
    return {
      color: companyColor,
    };
  }, [companyColor]);

  const positionStyle: CSSProperties = useMemo(() => {
    return {
      color: positionColor,
    };
  }, [positionColor]);

  const yearStyle: CSSProperties = useMemo(() => {
    return {
      color: yearColor,
    };
  }, [yearColor]);

  const company1Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor1,
    };
  }, [companyColor1]);

  const position1Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor1,
    };
  }, [positionColor1]);

  const year1Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor1,
    };
  }, [yearColor1]);

  const company2Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor2,
    };
  }, [companyColor2]);

  const position2Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor2,
    };
  }, [positionColor2]);

  const year2Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor2,
    };
  }, [yearColor2]);

  const company3Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor3,
    };
  }, [companyColor3]);

  const position3Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor3,
    };
  }, [positionColor3]);

  const year3Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor3,
    };
  }, [yearColor3]);

  const company4Style: CSSProperties = useMemo(() => {
    return {
      color: companyColor4,
    };
  }, [companyColor4]);

  const position4Style: CSSProperties = useMemo(() => {
    return {
      color: positionColor4,
    };
  }, [positionColor4]);

  const year4Style: CSSProperties = useMemo(() => {
    return {
      color: yearColor4,
    };
  }, [yearColor4]);

  return (
    <section className="w-[1120px] flex flex-row items-start justify-end pt-0 px-0 pb-[72px] box-border max-w-full text-left text-5xl text-black font-portfolio-thumbnails-14-18-aa mq750:pb-[47px] mq750:box-border">
      <div className="w-[1024px] flex flex-row items-center justify-start gap-[97px] max-w-full mq750:gap-[97px] mq1050:flex-wrap mq1050:gap-[97px]">
        <div
          className="h-[631px] w-[447px] rounded-xl flex flex-row items-start justify-start py-[30px] pr-[60px] pl-5 box-border bg-cover bg-no-repeat bg-[top] min-w-[447px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq750:min-w-full mq1050:flex-1"
          style={instagramDividerStyle}
        >
          <img
            className="w-[447px] relative rounded-xl max-h-full object-cover hidden max-w-full"
            alt=""
            src="/rectangle-2@2x.png"
          />
          <img
            className="h-[549px] flex-1 relative max-w-full overflow-hidden object-cover z-[1] mq1050:flex-1"
            loading="eager"
            alt=""
            src="/rectangle-3@2x.png"
          />
        </div>
        <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[312px] max-w-full">
          <div className="w-[480px] overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-full">
              <h2
                className="m-0 w-96 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
                style={companyStyle}
              >
                Nuenen and Antwerp
              </h2>
              <div
                className="w-[480px] relative text-sm leading-[18px] uppercase inline-block max-w-[115%] shrink-0"
                style={positionStyle}
              >
                painting intern
              </div>
            </div>
            <div
              className="relative leading-[32px] uppercase font-medium text-gray-300 text-right mq450:text-lgi mq450:leading-[26px]"
              style={yearStyle}
            >
              1883
            </div>
          </div>
          <div className="w-[480px] overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-full">
              <h2
                className="m-0 w-96 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
                style={company1Style}
              >
                PAris
              </h2>
              <div
                className="w-[480px] relative text-sm leading-[18px] uppercase inline-block max-w-[115%] shrink-0"
                style={position1Style}
              >
                Junior Painter
              </div>
            </div>
            <div
              className="relative leading-[32px] uppercase font-medium text-gray-300 text-right mq450:text-lgi mq450:leading-[26px]"
              style={year1Style}
            >
              1886
            </div>
          </div>
          <div className="w-[480px] overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-full">
              <h2
                className="m-0 w-96 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
                style={company2Style}
              >
                Gauguin's visit
              </h2>
              <div
                className="w-[480px] relative text-sm leading-[18px] uppercase inline-block max-w-[115%] shrink-0"
                style={position2Style}
              >
                Experimental artist
              </div>
            </div>
            <div
              className="relative leading-[32px] uppercase font-medium text-gray-300 text-right mq450:text-lgi mq450:leading-[26px]"
              style={year2Style}
            >
              1888
            </div>
          </div>
          <div className="w-[480px] overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-full">
              <h2
                className="m-0 w-96 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
                style={company3Style}
              >
                Saint-Rémy
              </h2>
              <div
                className="w-[480px] relative text-sm leading-[18px] uppercase inline-block max-w-[115%] shrink-0"
                style={position3Style}
              >
                Senior Painter
              </div>
            </div>
            <div
              className="relative leading-[32px] uppercase font-medium text-gray-300 text-right mq450:text-lgi mq450:leading-[26px]"
              style={year3Style}
            >
              1889
            </div>
          </div>
          <div className="w-[480px] overflow-hidden flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-full">
              <h2
                className="m-0 w-96 relative text-inherit leading-[32px] uppercase font-medium font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]"
                style={company4Style}
              >
                Auvers-sur-Oise
              </h2>
              <div
                className="w-[480px] relative text-sm leading-[18px] uppercase inline-block max-w-[115%] shrink-0"
                style={position4Style}
              >
                painting studio manager
              </div>
            </div>
            <div
              className="relative leading-[32px] uppercase font-medium text-gray-300 text-right mq450:text-lgi mq450:leading-[26px]"
              style={year4Style}
            >
              1890
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLeft;
