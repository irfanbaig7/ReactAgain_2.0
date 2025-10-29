

// create api function

import axios from "axios";

const apiUrl = "https://dummyjson.com/products"

// fetch 
export const fetchProducts = async () => {
    const response = await axios.get(apiUrl)
    return response.data.products;
}

// add function
export const addProduct = async (newPrd) => {
    const res = await axios.post(apiUrl + "/add", newPrd)
    return res.data
}


// update
export const updateProduct = async (updateProd) => {
    const res = await axios.put(`${apiUrl}/${updateProd.id}`, updateProd)
    return res.data
}