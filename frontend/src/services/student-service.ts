import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { requestBackend } from "../utils/requests";
import { StudentDTO } from "../models/students";

export function findPageRequest(page: number, name: string, size = 10, sort = "id") {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/students",
        params: {
            page,
            name,
            size,
            sort
        }
    }

    return requestBackend(config)
}

export function findById(id: number) {
    return requestBackend({ url: `/students/${id}` });
}

export function updateRequest(obj: StudentDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        baseURL: BASE_URL,
        url: `/students/${obj.id}`,
        data: obj
    }

    return requestBackend(config)
}

export function insertRequest(obj: StudentDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        baseURL: BASE_URL,
        url: "/students",
        data: obj
    }

    return requestBackend(config)
}

export function deleteRequest(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/students/${id}`,
    }

    return requestBackend(config)
}
