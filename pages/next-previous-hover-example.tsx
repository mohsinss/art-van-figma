import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Next from "../components/next";

const NextPreviousHoverExample: NextPage = () => {
  const router = useRouter();

  const onNextContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-between p-[272px] box-border gap-[20px] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:flex-wrap mq725:pl-[136px] mq725:pr-[136px] mq725:box-border">
      <PrevNextEllipse
        iconsArrow="/iconsarrow-1.svg"
        paulGauguinsArmchair="Paul Gauguin's Armchair"
        propBackgroundColor="#000"
        propMargin="unset"
        propColor="#fff"
      />
      <Next
        maskGroup="/mask-group1@2x.png"
        iconsArrow="/iconsarrow-2.svg"
        theNightCaf="The Night Café"
        onNextContainerClick={onNextContainerClick}
      />
    </div>
  );
};

export default NextPreviousHoverExample;
