import { memo } from "react";
import { Row, Col } from "antd";

import { IProduct } from "@/models/product";

import ProductItem from "../ProductItem";

interface IProps {
  products: IProduct[];
}

const ProductList = (props: IProps) => {
  const { products } = props;

  return (
    <Row
      gutter={[40, 40]}
      className="max-h-[2000px] overflow-auto custom-scrollbar"
    >
      {products.map((item, index) => {
        return (
          <Col
            key={`${item.id}${index}`}
            xxl={6}
            xl={8}
            md={12}
            sm={24}
            xs={24}
          >
            <ProductItem product={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default memo(ProductList);
