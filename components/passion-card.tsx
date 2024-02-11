import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FRAME from "./f-r-a-m-e";
import FrameComponent2 from "./frame-component2";

const PassionCard: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[78px] max-w-full text-left text-sm text-black font-portfolio-thumbnails-14-18-aa mq750:gap-[78px] mq450:gap-[78px]">
      <FRAME
        iconsArrow="/iconsarrow.svg"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <FrameComponent2
        iconsDarkLight="/iconsdarklight@2x.png"
        iconsMenu="/iconsmenu.svg"
      />
    </div>
  );
};

export default PassionCard;
