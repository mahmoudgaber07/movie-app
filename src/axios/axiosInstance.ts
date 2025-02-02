import axios from 'axios';
const baseUrl = `https://api.themoviedb.org/3/`;


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
export const axiosBaseQuery = () => async (args: { url: any; method: any; body: any; headers: any; }, _api: any, _extraOptions: any) => {
    try {
        const result = await axiosInstance({
            url: args.url,
            method: args.method || 'GET',
            data: args.body,
            headers: args.headers,
        });
        return {
            data: result.data.results || result.data, meta: {
                status: result.status,
                headers: result.headers,
            }
        };
    } catch (axiosError: any) {
        let err = axiosError;
        if (axiosError.response) {
            err = { status: axiosError.response.status, data: axiosError.response.data };
        } else if (axiosError.request) {
            err = { status: 0, data: axiosError.message };
        }
        return { error: err, meta: { message: err.data.message } };
    }
};

export default axiosInstance;