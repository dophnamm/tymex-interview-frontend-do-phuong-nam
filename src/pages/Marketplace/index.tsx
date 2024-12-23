import { useCallback, useMemo, useState } from "react";

import purpleLine from "@/assets/images/purple-line.png";

import { IFormSearch } from "@/models/advancedSearch";

import Hero from "./components/Hero";
import Products from "./components/Products";

import { useGetProducts, IParameters } from "./api";

const defaultParams: IParameters = {
  _start: 0,
  _limit: 20,
};

const Marketplace = () => {
  const [params, setParams] = useState(defaultParams);

  const { data } = useGetProducts(params);

  const handleSearch = useCallback(
    (values: IFormSearch) => {
      setParams({
        ...params,
        ...values,
      });
    },
    [params]
  );

  const dataView = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  return (
    <div id="marketplace-page" className="overflow-hidden">
      <div className="grid gap-[120px] mb-[54px]">
        <Hero />

        <Products onSearch={handleSearch} products={dataView} />
      </div>

      <img src={purpleLine} alt="purple-line" />
    </div>
  );
};

export default Marketplace;
