import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'Kuch galat ho gaya hai!';
    if (error.response) {
      const status = error.response.status;
      if (status === 404) message = 'Resource nahi mila';
      else if (status === 401) message = 'Anadhikarit entry';
      else if (status === 500) message = 'Server ki dikat';
      else message = error.response.data.message || message;
    } else if (error.request) {
      message = 'Server se koi jawab nahi aaya';
    } else {
      message = error.message;
    }

    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;
