export const initialState = {
    products: [],
    loading: false,
    error: null,
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, products: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
};
