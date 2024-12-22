import { Row, Col } from "antd";

import assassin from "@/assets/images/assassin.png";
import neonGuy from "@/assets/images/neon-guy.png";
import mafiaEngland from "@/assets/images/mafia-england.png";
import basketballGirl from "@/assets/images/basketball-girl.png";

import { Featured } from "@/models/featured";

import FeaturedItem from "../FeaturedItem";

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
