import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"


const profileSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 character").max(20, "username too long"),
    bio: z.string().max(150, "Bio must not exceed 150 characters").optional(),
    age: z.coerce.number({ invalid_type_error: "Age must be a number"}).min(18, "You must be at least 18").max(60, "Maximum age allowed is 60")
})

const ProfileUpdateForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(profileSchema),
    })

    const onSubmit = (data) => {
        console.log("Profile data : ", data);  
    }

  return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Profile Update Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block mb-1">Username</label>
          <input
            {...register("username")}
            placeholder="Enter username"
            className="w-full border p-2 rounded"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1">Bio (optional)</label>
          <textarea
            {...register("bio")}
            placeholder="Short bio (max 150 chars)"
            className="w-full border p-2 rounded"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1">Age</label>
          <input
            type="number"
            {...register("age")}
            placeholder="Enter age"
            className="w-full border p-2 rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default ProfileUpdateForm