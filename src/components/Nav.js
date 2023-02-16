import React,{useEffect,useState} from 'react'
import "./Nav.css"
import {useNavigate} from 'react-router-dom';

export const Nav = () => {
    
    /* state */
    const [show,setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    
    /* Routing */
    const navigate = useNavigate();

    /* 최적화 */
    useEffect(() => {
       window.addEventListener("scroll",()=>{
        if(window.scrollY > 50){
           setShow(true);
        }else{
            setShow(false);
        }
       })

        return () => {
           window.removeEventListener("scroll",()=>{})
        };

    },[]);

    /* 핸들링 */
    const handleChange= (e)=>{

        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

 
  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img 
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className='nav_logo'
            onClick={()=> {
                if(searchValue){
                    setSearchValue("");
                    navigate("/");
                }
            }}
        /> 

        <input value={searchValue} onChange={handleChange} className='nav_input' type='text'  placeholder='영화를 검색해주세요.' />
       
        <img 
            alt='User logged'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            className='nav_avatar'
        />
    </nav>
  )
}
