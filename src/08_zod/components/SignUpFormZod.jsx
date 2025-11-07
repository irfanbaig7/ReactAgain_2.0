import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

// schema define

const signUPSchema = z.object({
  name: z.string().min(2, "it's to short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "password must be atleast 6 characters"),
  confirmPassword: z.string().min(6, "please confirm password"),
  terms: z.literal(true, {
    errormap: () => ({
      message: "You must accept terms"
    })
  }),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
    path: ["confirmPassword"]
  })

const SignUpFormZod = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUPSchema)
  })

  const onSubmit = (data) => {
    console.log("Signup successfully", data);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">Signup Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input {...register("name")} className="w-full border p-2 rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input {...register("email")} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input type="password" {...register("password")} className="w-full border p-2 rounded" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Confirm Password</label>
          <input type="password" {...register("confirmPassword")} className="w-full border p-2 rounded" />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("terms")} />
          <label>I agree to terms</label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpFormZod