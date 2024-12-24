import { useContext } from "react";
import { useQuery } from "react-query";
import urlcat from "urlcat";

import { axiosInstance, BASE_URL, API_PRODUCTS } from "@/providers";

import { IProduct } from "@/models/product";
import { IFormSearch } from "@/models/advancedSearch";

import { NotificationContext } from "@/components/common/Notification";

import { errorMsg } from "@/utils/constant";
import { HTTPError } from "@/types";

export const GET_PRODUCTS_KEY = "getProductsKey";

export interface IParameters extends IFormSearch {
  _start?: number;
  _limit?: number;
}

export const getProducts = async (
  params?: IParameters
): Promise<IProduct[]> => {
  return axiosInstance.get(urlcat(BASE_URL, API_PRODUCTS, params));
};

export const useGetProducts = (params?: IParameters) => {
  const { api } = useContext(NotificationContext);

  const response = useQuery<IProduct[], HTTPError>({
    queryKey: [GET_PRODUCTS_KEY, params],
    queryFn: () => {
      return getProducts(params);
    },
    onError: (error) => {
      const statusCode = error?.status;
      const description = errorMsg[statusCode];

      api?.error({ message: statusCode, description });
    },
    staleTime: Infinity,
    retry: false,
  });

  return response;
};
