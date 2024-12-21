import { Row, Col } from "antd";

import { Featured } from "@/models/featured";

import FeaturedItem from "../FeaturedItem";

import img6 from "./66.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";

const FeaturedList = () => {
  const data: Featured[] = [
    {
      id: "1",
      image: img6,
      name: "Assassin",
    },
    {
      id: "2",
      image: img7,
      name: "Neon Guy",
    },
    {
      id: "3",
      image: img8,
      name: "Mafia England",
    },
    {
      id: "4",
      image: img9,
      name: "Bassketball Girl",
    },
  ];

  return (
    <Row gutter={68}>
      {data.map((item) => {
        return (
          <Col span={6} key={item.id}>
            <FeaturedItem values={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default FeaturedList;
