import { useQuery } from "react-query";
import { ProductService } from "../services";
import { EMPTY_PRODUCTS_RESPONSE, ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME, ProductsQueryKeyType, ProductsResponse, QUERY_KEY_PRODUCTS, UseQueryResponse } from "../types";
import { getEnvValue } from "../utils";


export const useAllProductsQuery = (): UseQueryResponse<ProductsResponse> => {

    const queryKey: ProductsQueryKeyType = [QUERY_KEY_PRODUCTS, "ALL"];

    const {
        data,
        isError,
        isFetching,
    } = useQuery<ProductsResponse, unknown, ProductsResponse, ProductsQueryKeyType>(queryKey, {
        placeholderData: EMPTY_PRODUCTS_RESPONSE,
        staleTime: getEnvValue(ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME),
        queryFn: ProductService.getAllProducts,
    });

    return {
        data: data || EMPTY_PRODUCTS_RESPONSE,
        isError,
        isFetching
    }
}