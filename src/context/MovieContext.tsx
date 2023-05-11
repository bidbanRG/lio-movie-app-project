import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Cast, Movie } from "../Types";

type MovieContextType = {
	cast:Cast[],
	recommendations:Movie[],
	movie:Movie,
	setMovieId?:React.Dispatch<React.SetStateAction<string>>
	setMovie?:React.Dispatch<React.SetStateAction<Movie>>
	setMovieClicked?:React.Dispatch<React.SetStateAction<boolean>>
}


const MovieContext = 
createContext<MovieContextType>({
	cast:[],
	recommendations:[],
	movie:{backdrop_path:"",poster_path:"",original_title:"",overview:"",vote_average:"",genres:[],id:""},
});


export const useSelectMovie = () => {
	return useContext(MovieContext);
}

 export default function MovieContextProvider({children}:{children:ReactNode}){
       const [movie,setMovie] = useState<Movie>({backdrop_path:"",
												  poster_path:"",
												  original_title:"",
												  overview:"",
												  vote_average:"",
												  genres:[],
												  id:""
												});
    const [movieCast,setMovieCast] = useState<Cast[]>([]);
    const [movieRecommendations,setMovieRecommendations] = useState<Movie[]>([]);
    const [movieId,setMovieId] = useState<string>('299534');
    const [movieClicked,setMovieClicked] = useState<boolean>(true);  

 //    useEffect(() => {
 //       const fetchMovie = async () => {
 //       const Movie = await fetch('https://api.themoviedb.org/3/movie/299534?api_key=4023cd363965fae6358b2678800cc837');
 //       const jsonMovie:Movie =  await Movie.json();
      
 //      setMovie(jsonMovie);
 //      }     

 //        fetchMovie();
 // },[]) 


   useEffect(() => {
     
     // const castApiController = new AbortController();
     // const castApiSignal = castApiController.signal;  

     // const recommendApiController = new AbortController();
     // const recommendApiSignal = recommendApiController.signal;
       
     const fetchCastAndRecommendation =  async () => {
     	// const Cast = fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4023cd363965fae6358b2678800cc837`,{signal:castApiSignal});
      //   const Recommend = fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=4023cd363965fae6358b2678800cc837`,{signal:recommendApiSignal});
      //   const res = await Promise.all([Cast,Recommend]);
      //   const jsonCast = await res[0].json();
      //   const jsonRecommend = await res[1].json();
        
        if(movieClicked){ 
        const Movie = fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4023cd363965fae6358b2678800cc837`);
        const Cast = fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4023cd363965fae6358b2678800cc837`);
        const Recommend = fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=4023cd363965fae6358b2678800cc837`);
        const res = await Promise.all([Cast,Recommend,Movie]);
        const jsonMovie = await res[2].json() 	
        const jsonCast = await res[0].json();
        const jsonRecommend = await res[1].json();
         setMovieRecommendations(jsonRecommend.results);
         setMovieCast(jsonCast.cast);
         setMovie(jsonMovie);
         setMovieClicked(false);
         
        }
     }

       
       
       fetchCastAndRecommendation();

       // return () => {
       // 	   castApiController.abort();
       // 	   recommendApiController.abort();
       // }


   },[movieId])   



 	return <MovieContext.Provider value={{movie,cast:movieCast,recommendations:movieRecommendations,setMovieId,setMovie,setMovieClicked}}>{children}</MovieContext.Provider>
 }
