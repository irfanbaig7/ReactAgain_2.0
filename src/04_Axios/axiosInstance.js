import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
    headers: { // reqke sath ye bhi bhej rahe hai.
        "Content-Type": "application/json"
    }
})

// request interceptors 

api.interceptors.request.use(
    (config) => {
        console.log("Sending request : ", config.url);
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

// Response INTERCEPTOR

api.interceptors.response.use(
    (response) => {
        console.log("📥 Got response:", response.status);
        return response; // tu chahe to yaha data transform bhi kar sakta hai
    },
    (error) => {
        if (error.response?.status === 404) {
            alert("Data not found!");
        }
        return Promise.reject(error);
    }
);

export default api

