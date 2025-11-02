import { useEffect, useState } from "react"

export const useThrottle = (value, delay = 300) => {
    const [throttledValue, setThrottledValue] = useState(value)

    useEffect(() => {
        const lastupdateTime = Date.now()

        const handler = setTimeout(() => {
            if (Date.now() - lastupdateTime >= delay) {
                setThrottledValue(value)
            }
        }, delay - (Date.now() - lastupdateTime))

        return () => clearTimeout(handler)

    }, [value, delay])

    return throttledValue;
}


