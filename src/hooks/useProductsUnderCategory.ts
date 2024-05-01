import { useQuery } from "react-query";
import { EMPTY_PRODUCTS_RESPONSE, ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME, ProductsQueryKeyType, ProductsResponse, QUERY_KEY_PRODUCTS, UseQueryResponse } from "../types";
import { getEnvValue } from "../utils";
import { ProductService } from "../services";


export const useProductsUnderCategory = (selectedCategoryName?: string): UseQueryResponse<ProductsResponse> => {

    const queryKey: ProductsQueryKeyType = [QUERY_KEY_PRODUCTS, selectedCategoryName];
    const {
        data,
        isError,
        isFetching,
    } = useQuery<ProductsResponse, unknown, ProductsResponse, ProductsQueryKeyType>(queryKey, {
        placeholderData: EMPTY_PRODUCTS_RESPONSE,
        staleTime: getEnvValue(ENV_VARIABLE_NAME_REACT_QUERY_STALE_TIME),
        queryFn: async (context) => {
            const categoryType = context.queryKey[1];

            if (categoryType) {
                return ProductService.getAllProductsUnderCategory(categoryType);
            }

            return Promise.resolve(EMPTY_PRODUCTS_RESPONSE);
        }
    });

    return {
        data: data || EMPTY_PRODUCTS_RESPONSE,
        isError,
        isFetching
    }

}