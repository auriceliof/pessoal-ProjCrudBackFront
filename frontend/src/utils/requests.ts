import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {

    const headers = config.headers

    ? {
        ...config.headers?.Accept
    }
    : config.headers;

    return axios ({ ...config, baseURL: BASE_URL, headers })
}
