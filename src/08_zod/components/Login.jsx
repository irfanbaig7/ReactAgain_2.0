import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"


// schema define karo
const loginSchema = z.object({
    email: z.string().email("invalid email").min(1, "Email is required"),
    password: z.string().min(8, "password must be 8 characters")
})


const Login = () => {

    // useForm initialize with zod resolver
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginSchema),
    })


    // on form submit
    const onSubmit = (data) => {
        console.log("Login successful with data: ", data);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-center mb-4">Login Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="text"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="w-full border p-2 rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Enter password"
                        className="w-full border p-2 rounded"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-all"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login