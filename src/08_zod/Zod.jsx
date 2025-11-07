import React from 'react'
import z from 'zod'



const Zod = () => {



    // schema difine karo
    const userSchema = z.object({
        name: z.string().min(2, 'Name too short'),
        email: z.string().email('invalid email'),
        age: z.number().min(18, 'Must be 18+'),
    })


    // test data validate karo
    const result = userSchema.safeParse({
        name: "irfan baig",
        age: 22,
        email: "ibaig@gmail.com"
    })


    // check output
    if (!result.success) {
        console.log(result.error.issues);
    } else {
        console.log("Valid Data: ", result.data);
    }


    return (
        <div>Zod</div>
    )
}

export default Zod