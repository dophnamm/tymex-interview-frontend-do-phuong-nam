import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import assassin from "@/assets/images/assassin.png";
import neonGuy from "@/assets/images/neon-guy.png";
import mafiaEngland from "@/assets/images/mafia-england.png";
import basketballGirl from "@/assets/images/basketball-girl.png";

import { Featured } from "@/models/featured";

import FeaturedItem from "../FeaturedItem";

import styles from "./styles.module.scss";

const FeaturedList = () => {
  const data: Featured[] = [
    {
      id: "1",
      image: assassin,
      name: "Assassin",
    },
    {
      id: "2",
      image: neonGuy,
      name: "Neon Guy",
    },
    {
      id: "3",
      image: mafiaEngland,
      name: "Mafia England",
    },
    {
      id: "4",
      image: basketballGirl,
      name: "Basketball Girl",
    },
  ];

  return (
    <div className="">
      <div
        className={`
        lg:hidden
        md:max-w-[500px] md:overflow-auto
        sm:max-w-[600px] sm:overflow-auto
        xs:hidden
        xxs:hidden
      `}
      >
        <div className="flex gap-[68px]">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <FeaturedItem values={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[300px] hidden xs:block xxs:block lg:block">
        <Swiper
          slidesPerView={1}
          centeredSlides
          pagination={{}}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <FeaturedItem values={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedList;
