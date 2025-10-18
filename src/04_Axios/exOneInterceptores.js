import axios from "axios";


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})


// request interceptor

api.interceptors.request.use(
    (config) => {
        console.log("Request Url: ", config.url);
        config.headers["X-APP-Version"] = "1.0.0"
        console.log(config.headers);
        
        return config
    }
)

// responce InterCeptor

api.interceptors.response.use(
    (res) => {
        console.log("Responce OK", res.status);
        return res;      
     
    }
)

export default api;





