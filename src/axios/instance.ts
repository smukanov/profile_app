import axios from "axios";

type Response = {
    [properties: string]: any
    results: any[]
}

export const axiosInstance = axios.create({
    baseURL: 'https://api.dev-smartestprep.com/api/directory/',
    transformResponse: (response: string) => {
        const parsed: Response = JSON.parse(response)
        return parsed.results
    }
})