import { Row, Col, Typography, Tag, Avatar } from "antd";
import { motion } from "framer-motion";

import dj from "@/assets/images/nft-dj.png";
import assassin from "@/assets/images/assassin.png";
import neonGuy from "@/assets/images/neon-guy.png";
import mafiaEngland from "@/assets/images/mafia-england.png";
import basketballGirl from "@/assets/images/basketball-girl.png";

import { IProduct } from "@/models/product";

import ETHIcon from "@/components/Icons/ETHIcon";
import HeartIcon from "@/components/Icons/HeartIcon";
import ActiveIcon from "@/components/Icons/ActiveIcon";

import styles from "./styles.module.scss";

const randomNFT = [dj, assassin, neonGuy, mafiaEngland, basketballGirl];
const randomBgNFT = [
  "bg-nft-1",
  "bg-nft-2",
  "bg-nft-3",
  "bg-nft-4",
  "bg-nft-5",
];

const handleRandom = (value: number) => {
  return Math.floor(Math.random() * value);
};

interface IProps {
  product: IProduct;
}

const ProductItem = (props: IProps) => {
  const { product } = props;

  return (
    <motion.div className={styles.productItem} whileHover={{ scale: 1.1 }}>
      <div
        className={`w-full mb-6 rounded text-center ${
          randomBgNFT[handleRandom(randomBgNFT.length)]
        }`}
      >
        <div className="flex items-center justify-between p-2 pb-0">
          <Tag>{product.category}</Tag>

          <HeartIcon />
        </div>

        <img
          src={randomNFT[handleRandom(randomNFT.length)]}
          style={{
            maxWidth: "235px",
            width: "100%",
            maxHeight: "197px",
            height: "100%",
            objectFit: "cover",
          }}
          className="mx-auto"
        />
      </div>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Col span={12}>
              <Typography className="text-base font-semibold">
                {product.title}
              </Typography>
            </Col>

            <Col span={12}>
              <div className="flex justify-end gap-2 items-center">
                <ETHIcon />

                <Typography className="text-s font-medium">
                  {product.price} ETH
                </Typography>
              </div>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Avatar src={product.author.avatar} />

              <div className="absolute bottom-0 right-0">
                <ActiveIcon />
              </div>
            </div>

            <Typography className="text-sm font-medium">
              {product.author.firstName} {product.author.lastName}
            </Typography>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProductItem;
