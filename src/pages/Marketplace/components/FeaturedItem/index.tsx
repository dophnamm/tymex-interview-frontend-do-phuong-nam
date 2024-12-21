import { Typography } from "antd";

import { Featured } from "@/models/featured";

import bgFeatured from "@/assets/images/bg-featured.png";

interface IProps {
  values: Featured;
}

const FeaturedItem = (props: IProps) => {
  const { values } = props;

  return (
    <div className="grid gap-7">
      <div
        className={`
          relative w-[200px] h-[120px] border bg-contain bg-center
          border-yellow-100 shadow-drop-shadow
        `}
        style={{
          backgroundImage: `url(${bgFeatured})`,
        }}
      >
        <img
          src={values.image}
          alt={values.image}
          className="absolute bottom-0"
        />
      </div>

      <div className="text-center">
        <Typography className="font-bold text-xl font-drone-ranger !text-black-100">
          {values.name}
        </Typography>
      </div>
    </div>
  );
};

export default FeaturedItem;
