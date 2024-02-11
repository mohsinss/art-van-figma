import type { NextPage } from "next";

const Image2Icon: NextPage = () => {
  return (
    <img
      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
      loading="eager"
      alt=""
      src="/image2@2x.png"
    />
  );
};

export default Image2Icon;
