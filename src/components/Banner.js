import React, { useState, useEffect } from 'react'
import axios from "../api/axios";
import requests from '../api/requests';
import "./Banner.css";

import * as styledComponent from "./StyledComponent/styledComponent";


function Banner() {
    
    /* state */
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked]  = useState(false);

    /* 최적화 */
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // 현재 상영중인 영화 정보 가져오기 (여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);
        //console.log(request);

        // 여러 영화 중 영호 하나의 ID를 가져오기
        const movieId = request.data.results[
            Math.floor(Math.random()* request.data.results.length)
          ].id;

        // 특정 영화의 더 상세한 정보를 가져오기 (비디오 정보 포함)
        const {data: movieDetail} = await axios.get(`movie/${movieId}}`,{
            params: {append_to_response:"videos"} 
            // 받아오는 response 에 videos 값을 담아달라
          });
          //console.log(movieDetail);
          setMovie(movieDetail);

    }

    if(!isClicked){
        return(
            <header
            className="banner"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
              }}
          >
            <div className='banner_contents'>
              <h1 className='banner_movietitle'>
              {movie.title || movie.name || movie.orginal_name}
              </h1>
              <div className='banner_buttons'>
              {movie.videos && movie.videos.results.length>0 && 
                 <button className='banner_button paly' onClick={()=>{setIsClicked(true)}}>Play</button>
              }
                <button className='banner_button info'>More Information</button>
              </div>
              <h1 className="banner_description">
               {movie.overview}
              </h1>
            </div>
            <div className='banner_fadeBottom'></div>
          </header>
        )
    }else{
        return(
                <styledComponent.Container>
                    <styledComponent.HomeContainer>
                        <styledComponent.Iframe
                             width="640"
                             height="360"
                             src={`https://www.youtube.com/embed/${movie.videos.results[0].key}
                             ?controls=0&autoplay=1&loop=1&mute=1
                             &playlist=${movie.videos.results[0].key}`}
                             title=""
                             frameborder="0"
                             allow="autoplay: fullscreen"
                        ></styledComponent.Iframe>
                    </styledComponent.HomeContainer>
                </styledComponent.Container>
            
        )
    }

    
}

export default Banner;


