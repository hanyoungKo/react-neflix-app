import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";

function SearchPage() {
  /* state */
  const [searchResults, setSearchResults] = useState([]);
 
  /* Routing */
  const useQuery = () => {
    console.log("data:",useLocation());
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q");
  const debounceSearchTerm = useDebounce(searchTerm,500);

  const navigate = useNavigate();

  /* request hooks */
  const fetchSearchMovie =  async (searchData)=>{
    try{
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchData}`)
      console.log(request);

      setSearchResults(request.data.results)
    }catch (error){
      console.log(error)
    }
  }

  /* 최적화 */
  useEffect(() => {
    if(debounceSearchTerm){
      fetchSearchMovie(debounceSearchTerm);
    }
  }, [debounceSearchTerm]);


  const renderSearchResults = () =>{
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map(movie => {
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
        
            return(
              <div className='movie' key={movie.id}>
                <div className='movie_colmn-poster' onClick={()=> navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt="movie_image" className='movie_poster'/>
                </div>
              </div>
            );
          
          } 
        })}
      </section>
      )
    : (
      <section className='no-results'>
        <div className='no-results_text'>
          <p>
             찾으시는 검색어 "{debounceSearchTerm}" 에 맞는 영화를 찾을 수 없습니다.
          </p>  
        </div>

      </section>
    );
  };
  
  return renderSearchResults();
}

export default SearchPage