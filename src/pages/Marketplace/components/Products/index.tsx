import { useCallback, memo } from "react";
import { Row, Col, Button, Spin, Empty } from "antd";

import { IProduct } from "@/models/product";
import { IFormSearch } from "@/models/advancedSearch";

import Categories from "./components/Categories";
import AdvancedSearch from "./components/AdvancedSearch";
import ProductList from "./components/ProductList";

interface IProps {
  products: IProduct[];
  isLoadingViewMore: boolean;
  isLoading: boolean;
  onSearch: (values: IFormSearch) => void;
  onClickViewMore: () => void;
}

const Products = (props: IProps) => {
  const { products, isLoadingViewMore, isLoading, onSearch, onClickViewMore } =
    props;

  const handleSearch = useCallback(
    (values: IFormSearch) => {
      onSearch(values);
    },
    [onSearch]
  );

  return (
    <div
      id="products"
      className="mx-auto w-[1600px] xxs:max-w-[370px] xs:w-[712px] sm:w-[720px] md:w-[1024px] lg:w-[1024px] xl:w-[1280px]"
    >
      <Row
        gutter={[
          { lg: 40, md: 20, sm: 20, xs: 20 },
          { lg: 40, md: 20, sm: 20, xs: 20 },
        ]}
      >
        <Col xxl={6} xl={6} md={24} sm={24} xs={24}>
          <AdvancedSearch onSearch={handleSearch} />
        </Col>

        <Col xxl={18} xl={18} md={24} sm={24} xs={24}>
          <div className="flex flex-col gap-10 mb-14">
            <Categories onSearch={handleSearch} />

            {products.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              <Spin spinning={isLoading}>
                <ProductList products={products} />
              </Spin>
            )}
          </div>

          <div className="text-center">
            <Button
              type="primary"
              className="py-6 px-[122px] text-base font-semibold"
              loading={isLoadingViewMore}
              onClick={onClickViewMore}
            >
              View more
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Products);
