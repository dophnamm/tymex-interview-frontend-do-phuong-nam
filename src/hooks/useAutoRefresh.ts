import { useQuery, QueryKey } from "react-query";

export const A_MINUTE = 60000;

export const useAutoRefresh = <T>(
  fetchData: () => Promise<T>,
  interval: number = A_MINUTE,
  queryKey: QueryKey = "auto-refresh-data"
) => {
  return useQuery<T, Error>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: fetchData,
    refetchInterval: interval,
    refetchIntervalInBackground: true,
  });
};
