export type CategoryDataResponse = string[];

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductsResponse {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

export type ProductsQueryKeyType = (string | undefined)[];

export interface UseQueryResponse<T> {
    data: T;
    isError: boolean;
    isFetching: boolean;
}

