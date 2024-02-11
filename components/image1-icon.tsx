import type { NextPage } from "next";

const Image1Icon: NextPage = () => {
  return (
    <img
      className="self-stretch h-[448px] relative max-w-full overflow-hidden shrink-0 object-cover"
      loading="eager"
      alt=""
      src="/image1@2x.png"
    />
  );
};

export default Image1Icon;
