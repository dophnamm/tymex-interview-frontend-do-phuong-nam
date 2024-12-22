import { Typography } from "antd";

import banner from "@/assets/images/banner.jpeg";
import bgFooterBanner from "@/assets/images/bg-footer-banner.png";
import arrivalBanner from "@/assets/images/arrival-banner.png";
import djBanner from "@/assets/images/dj.png";
import highlightText from "@/assets/images/highlight-text.png";
import FeaturedList from "../FeaturedList";

const Hero = () => {
  return (
    <div className="relative h-[804px]">
      <img
        src={banner}
        alt="banner-hero"
        className="h-[804px] w-full object-cover"
      />

      <div
        className={`
          absolute left-[178px] top-[148px] 
          md:left-[40px]
          sm:left-2/4 sm:-translate-x-2/4
          xs:left-2/4 xs:-translate-x-2/4
          xxs:left-2/4 xxs:top-2/4 xxs:-translate-x-2/4 xxs:-translate-y-2/4
        `}
      >
        <img
          src={arrivalBanner}
          alt="arrival-banner"
          className={`
            max-w-[1094px] w-full
            md:w-[680px]
            sm:w-[680px]
            xs:w-[300px]
            xxs:w-[300px]
          `}
        />
      </div>

      <img
        src={bgFooterBanner}
        alt="bg-footer-banner"
        className={`
          absolute bottom-0 min-h-[300px] w-full object-cover
        `}
      />

      <div className="absolute bottom-0 w-full">
        <div className="flex w-full gap-[82px] justify-between align-bottom">
          <div className="flex items-end pl-6 mx-auto overflow-auto">
            <FeaturedList />
          </div>

          <div className="relative mr-40 xxs:hidden">
            <img
              src={djBanner}
              alt="dj-banner"
              className={`
                  w-[470px]
                  md:w-[370px]
                  sm:w-[280px]
                  xs:w-[260px]
                `}
            />

            <div
              className={`
                absolute bottom-[10px] left-12
              `}
            >
              <div className="relative">
                <img
                  src={highlightText}
                  alt="highlight-dj-banner"
                  className={`
                  w-[436px]
                  md:w-[400px]
                  sm:w-[240px]
                  xs:w-[240px]
                `}
                />

                <div className="absolute top-2/4 -translate-y-2/4 w-full text-center">
                  <Typography
                    className={`
                      text-7xl
                      font-drone-ranger text-white 
                      sm:text-3xl
                      xs:text-3xl
                    `}
                  >
                    THE DJ
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
