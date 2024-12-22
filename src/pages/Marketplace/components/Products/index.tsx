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
    <div id="products" className="mx-[160px]">
      <Row gutter={40}>
        <Col span={6}>
          <AdvancedSearch onSearch={handleSearch} />
        </Col>

        <Col span={18}>
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
