import { CategoryDataResponse, ProductsResponse, URL_ALL_CATEGORIES, URL_ALL_Products, URL_PRODUCTS_UNDER_CATEGORY, } from "../../types";
import { BaseRequestService } from "../BaseRequest/BaseRequestService";

export class ProductService extends BaseRequestService {
  public static getAllCategories = async (): Promise<CategoryDataResponse> => {
    const response = await this.get<CategoryDataResponse>(URL_ALL_CATEGORIES);

    return response.data;
  };

  public static getAllProductsUnderCategory = async (selectedCategory: string): Promise<ProductsResponse> => {
    const response = await this.get<ProductsResponse>(this.getUrlPathForAllProductsUnderCategory(selectedCategory));

    return response.data;
  };


  public static getAllProducts = async (): Promise<ProductsResponse> => {
    const response = await this.get<ProductsResponse>(URL_ALL_Products);

    return response.data;
  }

  private static getUrlPathForAllProductsUnderCategory = (selectedCategory: string): string =>
    URL_PRODUCTS_UNDER_CATEGORY + selectedCategory;
}
