import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ExtraContent1280Dark: NextPage = () => {
  const router = useRouter();

  const onIconsCloseContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-between pt-6 pb-[273px] pr-8 pl-20 box-border gap-[20px] tracking-[normal] text-left text-13xl text-white font-portfolio-thumbnails-14-18-aa mq725:pl-10 mq725:box-border mq1050:flex-wrap">
      <div className="w-[419px] flex flex-col items-start justify-start min-w-[419px] min-h-[329px] max-w-full mq725:min-w-full mq1050:flex-1 mq1050:min-h-[auto]">
        <div className="self-stretch h-20 relative leading-[40px] uppercase font-medium inline-block mq1000:text-7xl mq1000:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          EXTENDED ABOUT SECTION COMING SOON
        </div>
      </div>
      <div className="w-[495px] flex flex-row items-start justify-start gap-[16px] min-w-[495px] max-w-full mq725:flex-wrap mq725:min-w-full mq1050:flex-1">
        <div className="flex-1 flex flex-col items-start justify-start pt-[248px] px-0 pb-0 box-border min-w-[291px] max-w-full mq1000:pt-[161px] mq1000:box-border mq450:pt-[105px] mq450:box-border">
          <div className="self-stretch h-[579px] relative">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[447px] h-[467px] object-cover"
                alt=""
                src="/rectangle-21@2x.png"
              />
              <img
                className="absolute top-[30px] left-[20px] w-[367px] h-[549px] object-cover z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-3@2x.png"
              />
            </div>
          </div>
        </div>
        <div
          className="h-8 w-8 relative cursor-pointer"
          onClick={onIconsCloseContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
          <img
            className="absolute h-[43.75%] w-[43.75%] top-[28.13%] right-[28.13%] bottom-[28.13%] left-[28.13%] max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/vector1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraContent1280Dark;
