import { useQuery } from "react-query";
import urlcat from "urlcat";

import { axiosInstance, BASE_URL, API_PRODUCTS } from "@/providers";

const GET_PRODUCTS_KEY = "getProductsKey";

export interface IParameters {
  _start?: number;
  _limit?: number;
}

export const useGetProducts = (params?: IParameters) => {
  const response = useQuery({
    queryKey: [GET_PRODUCTS_KEY],
    queryFn: () => {
      return axiosInstance.get(urlcat(BASE_URL, API_PRODUCTS, params));
    },
  });

  return response;
};