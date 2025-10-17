import React, { createContext, useContext, useReducer } from 'react'

// for reducer function we define initial state
const initialAuthState = { user: null, isAuthenticated: false } 

// reducer Function
const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return { user: action.payload, isAuthenticated: true }
        case "LOGOUT":
            return { user: null, isAuthenticated: false }
        default:
            return state;
    }

}

// create context
const AuthContext = createContext()

// Provider component
export const AuthContextprovider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialAuthState)

    // Actions
    const login = (userData) => dispatch({ type: "LOGIN", payload: userData })
    const logOut = () => dispatch({ type: "LOGOUT" })

    // value to share globally

    const value = {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

// Custome Hook for cusuming context measn useContext

export const UseAuth = () => useContext(AuthContext);