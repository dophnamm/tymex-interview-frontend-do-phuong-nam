// import { useState } from "react";

import Hero from "./components/Hero";

// import { useGetProducts, IParameters } from "./api";

// const defaultParams: IParameters = {
//   _start: 0,
//   _limit: 20,
// };

const Marketplace = () => {
  // const [params] = useState(defaultParams);

  // const { data } = useGetProducts(params);

  // console.log(data);

  return (
    <div>
      <Hero />
      <div className="text-white">Marketplace</div>
    </div>
  );
};

export default Marketplace;
