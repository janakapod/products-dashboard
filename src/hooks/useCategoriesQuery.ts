import { useQuery } from "react-query";
import { ProductService } from "../services";
import { CategoryDataResponse, ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME, QUERY_KEY_CATEGORIES, UseQueryResponse } from "../types";
import { getEnvValue } from "../utils";


export const useCategoriesQuery = (): UseQueryResponse<CategoryDataResponse> => {
  const {
    data,
    isError,
    isFetching,
  } = useQuery<CategoryDataResponse>(QUERY_KEY_CATEGORIES, {
    placeholderData: [],
    staleTime: getEnvValue(ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME),
    queryFn: ProductService.getAllCategories,
  });

  return { data: data || [], isError, isFetching };
};
