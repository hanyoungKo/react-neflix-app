import { useState ,useEffect } from "react"


export const useDebounce = (value, delay) =>{

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        const timeDelay = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return  () =>{
           clearTimeout(timeDelay)
        }
    },[value, delay])

    return debounceValue;
}