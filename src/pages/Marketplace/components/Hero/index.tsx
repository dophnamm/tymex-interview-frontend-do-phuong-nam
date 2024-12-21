import { Typography } from "antd";

import banner from "@/assets/images/banner.jpeg";
import bgFooterBanner from "@/assets/images/bg-footer-banner.png";
import arrivalBanner from "@/assets/images/arrival-banner.png";
import djBanner from "@/assets/images/dj.png";
import highlightText from "@/assets/images/highlight-text.png";

const Hero = () => {
  return (
    <div className="relative h-[804px]">
      <img
        src={banner}
        alt="banner-hero"
        className="h-[804px] w-full object-cover"
      />

      <div className="absolute left-[178px] top-[148px]">
        <img
          src={arrivalBanner}
          alt="arrival-banner"
          className="max-w-[1094px] w-full"
        />
      </div>

      <div className="absolute bottom-0">
        <div className="relative">
          <img src={bgFooterBanner} alt="bg-footer-banner" />

          <div className="absolute bottom-0 right-[160px]">
            <img
              src={djBanner}
              alt="dj-banner"
              className="max-w-[470px] w-full"
            />
          </div>

          <div className="absolute right-[136px] bottom-[10px]">
            <img
              src={highlightText}
              alt="highlight-dj-banner"
              className="max-w-[436px] w-full"
            />
          </div>

          <div className="absolute right-[282px] bottom-[44px]">
            <Typography className="text-7xl font-drone-ranger text-white">
              THE DJ
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
