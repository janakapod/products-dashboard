import { ProductsResponse } from "./products-api.types";

export const URL_ALL_Products = "/products";
export const URL_ALL_CATEGORIES = URL_ALL_Products + "/categories";
export const URL_PRODUCTS_UNDER_CATEGORY = URL_ALL_Products + "/category/";



export const QUERY_KEY_PRODUCTS = "QUERY-CATEGORY-PRODUCTS";
export const QUERY_KEY_CATEGORIES = "QUERY-CATEGORIES";


export const EMPTY_PRODUCTS_RESPONSE: ProductsResponse = {
    products: [],
    limit: 0,
    skip: 0,
    total: 0
};
