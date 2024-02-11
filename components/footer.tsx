import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FooterType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionCodeImage?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText2?: string;
  dimensionCodeImageText?: string;

  /** Style props */
  footerWidth?: CSSProperties["width"];
  footerFlex?: CSSProperties["flex"];
  vangoghcomColor?: CSSProperties["color"];
  linkedinColor?: CSSProperties["color"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  dribbbleColor?: CSSProperties["color"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
  myspaceColor?: CSSProperties["color"];
  dividerBackgroundColor2?: CSSProperties["backgroundColor"];
  gITHUBColor?: CSSProperties["color"];
  dividerBackgroundColor3?: CSSProperties["backgroundColor"];
  instagramColor?: CSSProperties["color"];
};

const Footer: NextPage<FooterType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImage,
  dimensionCodeImageUrl,
  dimensionCodeText2,
  dimensionCodeImageText,
  footerWidth,
  footerFlex,
  vangoghcomColor,
  linkedinColor,
  dividerBackgroundColor,
  dribbbleColor,
  dividerBackgroundColor1,
  myspaceColor,
  dividerBackgroundColor2,
  gITHUBColor,
  dividerBackgroundColor3,
  instagramColor,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerWidth,
      flex: footerFlex,
    };
  }, [footerWidth, footerFlex]);

  const vangoghcomStyle: CSSProperties = useMemo(() => {
    return {
      color: vangoghcomColor,
    };
  }, [vangoghcomColor]);

  const linkedinStyle: CSSProperties = useMemo(() => {
    return {
      color: linkedinColor,
    };
  }, [linkedinColor]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  const dribbbleStyle: CSSProperties = useMemo(() => {
    return {
      color: dribbbleColor,
    };
  }, [dribbbleColor]);

  const divider1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor1,
    };
  }, [dividerBackgroundColor1]);

  const myspaceStyle: CSSProperties = useMemo(() => {
    return {
      color: myspaceColor,
    };
  }, [myspaceColor]);

  const divider2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor2,
    };
  }, [dividerBackgroundColor2]);

  const gITHUBStyle: CSSProperties = useMemo(() => {
    return {
      color: gITHUBColor,
    };
  }, [gITHUBColor]);

  const divider3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor3,
    };
  }, [dividerBackgroundColor3]);

  const instagramStyle: CSSProperties = useMemo(() => {
    return {
      color: instagramColor,
    };
  }, [instagramColor]);

  return (
    <div
      className="w-[1120px] overflow-hidden flex flex-row flex-wrap items-center justify-start py-0 pr-px pl-0 box-border gap-[46px] max-w-full text-left text-sm text-black font-portfolio-thumbnails-14-18-aa mq750:gap-[46px]"
      style={footerStyle}
    >
      <div className="w-[300px] flex flex-row items-center justify-center">
        <div
          className="flex-1 relative leading-[18px] uppercase"
          style={vangoghcomStyle}
        >
          ☻@vangogh.com
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 pr-1 pl-0 box-border gap-[31px] min-w-[502px] max-w-full mq450:gap-[31px] mq750:flex-wrap mq750:min-w-full">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-between min-w-[81px] gap-[20px]">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-[25px] pl-0 relative gap-[8px]">
            <div
              className="relative leading-[18px] uppercase"
              style={linkedinStyle}
            >
              Linkedin
            </div>
            <img
              className="h-[17px] w-[17px] absolute my-0 mx-[!important] top-[0.5px] right-[0px] object-contain"
              alt=""
              src={dimensionCode}
            />
          </div>
          <div className="h-6 w-px relative bg-gray-400" style={dividerStyle} />
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-px pl-0 box-border min-w-[81px] gap-[20px]">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-[25px] pl-0 relative gap-[8px]">
            <div
              className="relative leading-[18px] uppercase"
              style={dribbbleStyle}
            >
              Dribbble
            </div>
            <img
              className="h-[17px] w-[17px] absolute my-0 mx-[!important] top-[0.5px] right-[0px] object-contain"
              alt=""
              src={dimensionCodeText}
            />
          </div>
          <div
            className="h-6 w-px relative bg-gray-400"
            style={divider1Style}
          />
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-between py-0 pr-px pl-0 box-border min-w-[81px] gap-[20px]">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-[25px] pl-0 relative gap-[8px]">
            <div
              className="relative leading-[18px] uppercase"
              style={myspaceStyle}
            >
              myspace
            </div>
            <img
              className="h-[17px] w-[17px] absolute my-0 mx-[!important] top-[0.5px] right-[0px] object-contain"
              alt=""
              src={dimensionCodeImage}
            />
          </div>
          <div
            className="h-6 w-px relative bg-gray-400"
            style={divider2Style}
          />
        </div>
        <div className="w-[111px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-0 pr-px pl-0 box-border gap-[20px]">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-[25px] pl-0 relative gap-[8px]">
            <div
              className="relative leading-[18px] uppercase"
              style={gITHUBStyle}
            >
              GITHUB
            </div>
            <img
              className="h-[17px] w-[17px] absolute my-0 mx-[!important] top-[0.5px] right-[0px] object-contain"
              alt=""
              src={dimensionCodeImageUrl}
            />
          </div>
          <div
            className="h-6 w-px relative bg-gray-400"
            style={divider3Style}
          />
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-center">
          <div className="overflow-hidden flex flex-row items-center justify-start py-0 pr-[25px] pl-0 relative gap-[8px]">
            <div
              className="relative leading-[18px] uppercase"
              style={instagramStyle}
            >
              Instagram
            </div>
            <img
              className="h-[17px] w-[17px] absolute my-0 mx-[!important] top-[0.5px] right-[0px] object-contain"
              alt=""
              src={dimensionCodeText2}
            />
          </div>
        </div>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="eager"
          alt=""
          src={dimensionCodeImageText}
        />
      </div>
    </div>
  );
};

export default Footer;
