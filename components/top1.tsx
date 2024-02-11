import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Top1Type = {
  iconsArrow?: string;
  iconsDarkLight?: string;
  iconsMenu?: string;

  /** Style props */
  frameDarkLightIconsMenuColor?: CSSProperties["color"];
  h1Color?: CSSProperties["color"];

  /** Action props */
  onHeaderLeftContainerClick?: () => void;
};

const Top1: NextPage<Top1Type> = ({
  iconsArrow,
  iconsDarkLight,
  iconsMenu,
  frameDarkLightIconsMenuColor,
  h1Color,
  onHeaderLeftContainerClick,
}) => {
  const titleLeft2Style: CSSProperties = useMemo(() => {
    return {
      color: frameDarkLightIconsMenuColor,
    };
  }, [frameDarkLightIconsMenuColor]);

  const titleLeft3Style: CSSProperties = useMemo(() => {
    return {
      color: h1Color,
    };
  }, [h1Color]);

  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-6 px-6 pb-[205px] box-border relative gap-[149px] max-w-full text-center text-sm text-black font-portfolio-thumbnails-14-18-aa mq450:gap-[149px] mq450:pb-[86px] mq450:box-border mq750:gap-[149px] mq1050:pt-5 mq1050:pb-[133px] mq1050:box-border">
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/hero-image1@2x.png"
      />
      <header className="self-stretch flex flex-row items-center justify-between py-0 px-2 gap-[20px] text-left text-sm text-black font-portfolio-thumbnails-14-18-aa">
        <div
          className="flex flex-row items-center justify-start gap-[8px] cursor-pointer z-[2]"
          onClick={onHeaderLeftContainerClick}
        >
          <img
            className="h-[7.4px] w-4 relative object-contain"
            loading="eager"
            alt=""
            src={iconsArrow}
          />
          <div
            className="relative leading-[18px] uppercase"
            style={titleLeft2Style}
          >
            home
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-8 w-8 relative object-contain min-h-[32px] z-[2]"
            loading="eager"
            alt=""
            src={iconsDarkLight}
          />
          <img
            className="h-8 w-8 relative min-h-[32px] z-[2]"
            loading="eager"
            alt=""
            src={iconsMenu}
          />
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
        <div className="w-[1072px] flex flex-row items-center justify-start gap-[126px] max-w-full lg:flex-wrap lg:gap-[126px] mq450:gap-[126px] mq750:gap-[126px]">
          <div
            className="w-[148px] relative leading-[18px] uppercase inline-block [transform:_rotate(-90deg)] z-[2]"
            style={titleLeft3Style}
          >
            1. The STARRY NIGHT
          </div>
          <h1 className="m-0 h-[390px] w-[928px] relative text-45xl leading-[78px] uppercase font-medium font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[47px] mq750:text-32xl mq750:leading-[62px]">
            The Starry Night is an oil on canvas painting by Dutch Post
            Impressionist painter van Gogh. Painted in June 1889.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Top1;
