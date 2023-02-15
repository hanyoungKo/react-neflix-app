import axios from "../api/axios"
import React, {useState, useEffect} from 'react'
import "./Row.css"
import MovieModal from "./MovieModal";

function Row({title, id, fetchUrl, isLargeRow}) {
  
    /* state */
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState([]);

    /* 최적화 */
    useEffect(() => {
       fetchMovieData();
    },[]);
    
    /* 함수부 */
    const fetchMovieData = async ()=>{
        const request = await axios.get(fetchUrl);
        //console.log(request);

        setMovies(request.data.results);
       
        return request;
    }

    const handleClick = (movie) =>{
        setModalOpen(true);
        setMovieSelected(movie)
    }

    return (
        <section className="row">
            <h2>{title}</h2>
            <div className="slider">
                <div className="slider_arrow-left">
                    <span className="arrow"
                        onClick={()=>{
                            document.getElementById(id).scrollLeft -= window.innerWidth-80;
                        }}
                    >{"<"}</span>
                </div>
                <div id={id} className="row_posters">
                    {movies.map((movie)=>(
                        <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow 
                            ? movie.poster_path
                            : movie.backdrop_path }`}
                        loading="lazy"
                        alt={movie.name}
                        onClick = {()=>{handleClick(movie)}}
                        />
                    ))}
                </div>
                <div className="slider_arrow-right">
                    <span className="arrow"
                        onClick={()=>{
                            document.getElementById(id).scrollLeft += window.innerWidth - 80;
                        }} 
                    >{">"}</span>
                </div>
            </div>
            {
                modalOpen &&  (
                    <MovieModal {...movieSelected} setModalOpen={setModalOpen}></MovieModal>
                )

            }
        </section>
  )
}

export default Row