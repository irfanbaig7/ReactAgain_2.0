import React, { useReducer } from 'react'
import { fromReducer, initalForm } from './fromReducer'

const SignupForm = () => {

    const [form, dispatch] = useReducer(fromReducer, initalForm)

    const handleChange = (e) => {
        dispatch({
            type : "CHANGE",
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);        
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col p-4 gap-2">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
        </form>
    )
}

export default SignupForm