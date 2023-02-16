import { useEffect } from 'react'

function useOnclickOutside(ref, handler) {

    useEffect(()=>{
        const listener = (e) =>{
            // console.log(ref.current.contains(e.target))
            if(!ref.current || ref.current.contains(e.target)){
                return;
            }
            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return ()=>{
            document.removeEventListener("mousedown",listener);
            document.removeEventListener("touchstart", listener);
        }

    }, [ref, handler])
}

export default useOnclickOutside