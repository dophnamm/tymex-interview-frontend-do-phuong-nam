import { useCallback, memo } from "react";
import { Row, Col } from "antd";

import { IFormSearch } from "@/models/advancedSearch";

import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import AdvancedSearch from "./components/AdvancedSearch";

interface IProps {
  onSearch: (values: IFormSearch) => void;
}

const Products = (props: IProps) => {
  const { onSearch } = props;

  const handleSearch = useCallback(
    (values: IFormSearch) => {
      onSearch(values);
    },
    [onSearch]
  );

  return (
    <div
      id="products"
      className="mx-[160px] sm-lg:lg:container sm-lg:mx-auto md:container md:mx-auto sm:"
    >
      <Row gutter={[{ lg: 40, md: 20 }, { md: 20 }]}>
        <Col xxl={6} xl={6} md={24}>
          <AdvancedSearch onSearch={handleSearch} />
        </Col>

        <Col xxl={18} xl={18} md={24}>
          <div className="flex flex-col gap-10">
            <Categories />

            <ProductList />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Products);
