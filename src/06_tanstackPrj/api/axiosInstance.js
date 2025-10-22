import axios from "axios";
import toast from "react-hot-toast";


// create instance
export const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 8000,
    headers: {
        "Content-Type": "application/json"
    }
})


// create responce interceptor 

api.interceptors.response.use(
    (response) => response,
    (error) => {
        let message = "Somthing went wrong"

        if (error.code === "ECONNABORTED") message = "Request timeout, please try again"
        else if (error.response) {
            switch (error.response.status) {
                case 400:
                    message = "Bad Request. Please check input.";
                    break;
                case 401:
                    message = "Unauthorized. Please login again.";
                    break;
                case 404:
                    message = "Resource not found!";
                    break;
                case 500:
                    message = "Server error. Try later.";
                    break;
                default:
                    message = error.response.data?.message || message;
            }
        }

        toast.error(message)
        return Promise.reject(new Error(message)) // React Query ko clean error mile

    }
)


