import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  propColor,
  propColor1,
}) => {
  const h11Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const paragraph3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <section className="w-[1120px] flex flex-row items-start justify-start pt-0 pb-[72px] px-0 box-border max-w-full text-left text-53xl text-black font-portfolio-thumbnails-14-18-aa mq750:pb-[47px] mq750:box-border">
      <div className="w-[1024px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[48px]">
        <h1
          className="m-0 self-stretch h-[352px] relative text-inherit leading-[88px] uppercase font-medium font-inherit inline-block mq450:text-24xl mq450:leading-[53px] mq1050:text-39xl mq1050:leading-[70px]"
          style={h11Style}
        >
          Van Gogh painted several landscapes with flowers, roses, lilacs, and
          sunflowers.
        </h1>
        <h1
          className="m-0 self-stretch h-40 relative text-13xl leading-[40px] uppercase font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]"
          style={paragraph3Style}
        >
          Some reflect his interests in the language of colour, and also in
          Japanese ukiyo-e. There are two series of dying sunflowers. The first
          was painted in Paris in 1887 and shows flowers lying on the ground.
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent;
