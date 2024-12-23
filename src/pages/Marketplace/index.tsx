import { useCallback, useEffect, useMemo, useState } from "react";

import purpleLine from "@/assets/images/purple-line.png";

import { IProduct } from "@/models/product";
import { IFormSearch } from "@/models/advancedSearch";

import { useGetProducts } from "./api";

import Hero from "./components/Hero";
import Products from "./components/Products";

import { filterData, handleViewMore } from "./utils/functions";

const defaultParams = {
  _start: 0,
  _limit: 20,
};

const Marketplace = () => {
  const [params, setParams] = useState(defaultParams);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isViewMore, setIsViewMore] = useState<boolean>(false);

  const { data, isLoading } = useGetProducts(params);

  useEffect(() => {
    if (!data) return;

    setProducts([...products, ...data]);

    if (isViewMore) setIsViewMore(false);
  }, [data]);

  const handleSearch = useCallback(
    (values: IFormSearch) => {
      setParams({
        ...params,
        ...values,
      });
    },
    [params]
  );

  const handleClickViewMore = () => {
    const result = handleViewMore(params);

    setParams({
      ...params,
      ...result,
    });

    setIsViewMore(true);
  };

  console.log(params);

  const dataView = useMemo(() => {
    if (!products) return [];

    const result = filterData(params, products);

    return result;
  }, [products, params]);

  return (
    <div id="marketplace-page" className="overflow-hidden">
      <div className="grid gap-[120px] mb-[54px]">
        <Hero />

        <Products
          products={dataView}
          isLoadingViewMore={isViewMore}
          isLoading={isLoading}
          onSearch={handleSearch}
          onClickViewMore={handleClickViewMore}
        />
      </div>

      <img src={purpleLine} alt="purple-line" />
    </div>
  );
};

export default Marketplace;
