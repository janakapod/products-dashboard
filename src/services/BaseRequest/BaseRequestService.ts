import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getEnvValue } from "../../utils";
import { BASE_URL_CATEGORY_ENV_VARIABLE_NAME } from "../../types";

export class BaseRequestService {
  protected static getAxiosRequestConfig = (): AxiosRequestConfig<any> => ({
    baseURL: getEnvValue(BASE_URL_CATEGORY_ENV_VARIABLE_NAME),
  });

  protected static get<T>(requestUrl: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(requestUrl, this.getAxiosRequestConfig());
  }
}
