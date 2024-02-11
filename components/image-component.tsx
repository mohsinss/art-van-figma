import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Image1Icon from "./image1-icon";
import Image2Icon from "./image2-icon";

const ImageComponent: NextPage = () => {
  const router = useRouter();

  const onPortfolioItemContainerClick = useCallback(() => {
    router.push("/portfolio-layout2-light");
  }, [router]);

  const onPortfolioItemContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-sm text-gray-300 font-portfolio-thumbnails-14-18-aa">
      <div className="w-[1024px] flex flex-row flex-wrap items-center justify-start gap-[128px] max-w-full mq450:gap-[128px] mq750:gap-[128px] mq1050:gap-[128px]">
        <div
          className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[12px] min-w-[291px] max-w-full cursor-pointer"
          onClick={onPortfolioItemContainerClick}
        >
          <Image1Icon />
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
              1
            </div>
            <div className="relative leading-[18px] uppercase text-black">
              The Starry Night
            </div>
            <img
              className="h-[7.4px] w-[16.5px] relative"
              loading="eager"
              alt=""
              src="/iconsarrow3.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border min-w-[291px] max-w-full">
          <div
            className="self-stretch h-[370px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px] cursor-pointer"
            onClick={onPortfolioItemContainer2Click}
          >
            <Image2Icon />
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                2
              </div>
              <div className="relative leading-[18px] uppercase text-black">
                The Night Café
              </div>
              <img
                className="h-[7.4px] w-[16.5px] relative"
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
