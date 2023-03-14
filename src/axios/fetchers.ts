import { axiosInstance } from "./instance"

export const fetchCountriesList = async (url: string) => {
    const response = await axiosInstance.get(url)
    return response
}

export const fetchCitiesList = async (url: string) => {
    const response = await axiosInstance.get(url)
    return response
}