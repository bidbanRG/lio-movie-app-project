import { memo, useEffect} from "react"
import { Movie } from "../Types"

function Header({movie}:{movie:Movie}){
   useEffect(() => {
      window.scrollTo({top:0});
   },[movie]);
	return (
           <header className="w-full  md:h-[700px]  relative"> 
       
            <div className="absolute w-full h-[100%] z-10 flex items-center xl:justify-around flex-col lg:flex-row">
                <aside 
                   style={{backdropFilter:'blur(10px)',
                      backgroundColor:'rgb(0,0,0,0.4)'
                    }}
                    className="rounded-[20px] xl:w-[50%] w-[80%] m-auto xl:m-0"
                 >
                   <h1 className="ml-[25px]  mt-[20px] mb-[20px] text-[24px] md:text-[40px] font-bold text-white">  
                        {movie?.original_title} 
                  </h1>
                   <p className="my-[10px] mx-[20px] font-bold text-[15px] md:text-[25px] text-white text-center">
                      {movie?.overview}
                   </p>

                   <footer className="w-[100%] flex  mb-[15px] mx-[20px] ">
                        
                       <span className="font-bold text-white font-[8px] font-[8px] md:font-[30px] ml-4 flex items-center"> 
                           <StarIcon/>  
                           {movie?.vote_average} 
                      </span>
                       <span className="hidden md:flex  font-bold text-white font-[8px] md:font-[30px] ml-4 items-center"> 
                             <GenresIcon/>
                            {movie?.genres?.slice(0,3).map((value,index) => value.name + (index < movie.genres.length - 1 ? '  |  ' : ""))} 
                       </span>
                       <span className="hidden sm:flex md:hidden font-bold text-white font-[8px] md:font-[30px] ml-4 items-center"> 
                             <GenresIcon/>
                            {movie?.genres?.slice(0,2).map((value,index) => value.name + (index < movie.genres.length - 1 ? ' | ' : ""))} 
                       </span>
                      

                       <span className=" flex font-bold text-white font-[8px] md:font-[30px] ml-4 flex items-center">
                           <TimeIcon/> 
                            2h 31m 
                      </span>
                        <button className="w-[180px] h-[50px] rounded-2xl bg-white text-blac hover:bg-transparent hover:text-white hover:border-2 border-white xl:flex hidden justify-center items-center md:ml-6 md:mr-10  ml-auto mr-a">
                            <span className="font-extrabold"> Play </span>
                        </button>
                   </footer>
                    <button 
                      className="w-[180px] h-[50px] rounded-2xl bg-white text-blac hover:bg-transparent hover:text-white hover:border-2 border-white xl:hidden flex  justify-center items-center ml-6 mb-6 ">
                            <span className="font-extrabold"> Play </span>
                        </button>
                  </aside>
                <img  className=" w-[400px] max-h-[700px] rounded-[10px] xl:opacity-[1] opacity-0"   
               src = {`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
                  loading="lazy"
               />
            </div>
           <img 
               className="w-full md:h-[500px] lg:h-[700px] h-[400px] lg:blur-[5px] blur-[2px]"   
               src = {`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
               
               loading="lazy"
          /> 
    </header>
      )
} 


const StarIcon:React.FC = () => {
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6 mr-2">
  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
</svg>

}

const GenresIcon:React.FC = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="crimson" className="w-6 h-6 mr-2">
  <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
</svg>

}

const TimeIcon:React.FC = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-6 h-6 mr-2">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
</svg>

}



export default memo(Header);