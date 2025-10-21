import React, { useEffect, useReducer } from 'react'
import { initialState, productReducer } from '../reducer/productsReducer'
import axiosInstance from '../api/axiosInstance'
import { useTheme } from '../context/ThemeContext'


const ProductList = () => {

    const [state, dispatch] = useReducer(productReducer, initialState)
    const { theme } = useTheme()

    // using axiosinstance make request

    useEffect(() => {
        const fetchProduct = async () => {
            dispatch({ type: "FETCH_START" })
            try {
                const res = await axiosInstance.get("/products")
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })

            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message })
            }
        }

        fetchProduct();
    }, [])

    // handling loading and error for ui ( product reducer jo loading & error ko handle kar rahe hai )
    if (state.loading) return <p>Loading products...</p>
    if (state.error) return <p style={{ color: 'red' }}>Error: {state.error}</p>;

    return (
        // ProductList ke andar products ko is tarah style karo:

        <div>
            {
                state.products.map((product) => (
                    <div key={product.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '1rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: theme === 'light' ? '#FEF8E1' : '#444',
                        color: theme === 'light' ? '#000' : '#fff',
                    }}>
                        <img src={product.image} alt={product.title} style={{ width: 80, height: 80, objectFit: 'contain', marginRight: '1rem' }} />
                        <div>
                            <h4 style={{ margin: 0 }}>{product.title}</h4>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>${product.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>


    )
}

export default ProductList