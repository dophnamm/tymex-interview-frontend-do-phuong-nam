import { useQuery } from "react-query";
import urlcat from "urlcat";

import { axiosInstance, BASE_URL, API_PRODUCTS } from "@/providers";
import { IProduct } from "@/models/product";
import { IFormSearch } from "@/models/advancedSearch";

const GET_PRODUCTS_KEY = "getProductsKey";

export interface IParameters extends IFormSearch {
  _start?: number;
  _limit?: number;
}

export const useGetProducts = (params?: IParameters) => {
  const response = useQuery<IProduct[]>({
    queryKey: [GET_PRODUCTS_KEY, params],
    queryFn: () => {
      return axiosInstance.get(urlcat(BASE_URL, API_PRODUCTS, params));
    },
  });

  return response;
};
