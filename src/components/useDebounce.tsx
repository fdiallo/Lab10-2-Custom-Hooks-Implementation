import { useEffect, useState } from "react"

function useDebounce(value, delay) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // Set up the timer to update the value after the delay
        const timer = setTimeout(() => {
            console.log(`Searching for: ${debouncedValue}`)
            setDebouncedValue(value)
        }, delay)

        //Cleanup - if 'value' changes again before the delay finishes, 
        // this clears the previous timer and starts a new one.
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce