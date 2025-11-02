import { useEffect, useState } from "react"


export const useDebounce = (value, delay = 500) => {

    const [debouncevalue, setDebounceValue] = useState(value)

    // har bar jab value change hoti hai → ek timer set karo
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        // cleanup function
        return () => clearTimeout(timer)

    }, [value, delay])

    return debouncevalue

}