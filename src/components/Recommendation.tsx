import { Movie } from "../Types";
import { useSelectMovie } from "../context/MovieContext";



export default function Recommendation({recommendations}:{recommendations:Movie[]}){
	return (
		<>
		 <h1 className="font-bold text-4xl ml-7 mt-7 text-white"> Recommendations </h1>
         <section className="flex flex-wrap justify-center">
           {
           	recommendations.map((data,index) => <Card key = {index} {...data} />)
           }
        </section>
        </>
	)
}

const Card:React.FC<Movie> = ({ original_title,backdrop_path,id}) => {

  const {setMovieId, setMovieClicked} = useSelectMovie();
 
  const onMovieClick = (id:string) => {
      if( setMovieClicked && setMovieId){
         setMovieId(id);
        setMovieClicked(true);
        
      }
      
  }
	return (
       <div className="text-white m-[30px] relative rounded-2xl border-2 border-white hover:scale-[1.1] transition transform duration-300 cursor-pointer"
        
         onClick={() => onMovieClick(id)}
       >
      
        <div className="absolute z-10 h-[70px] w-full rounded-2xl bottom-0 flex flex-col  justify-center"
            style={{backdropFilter:'blur(10px)',
                      backgroundColor:'rgb(0,0,0,0.3)'
                    }}
        >  
           <p className="text-2xl mb-6 font-bold mt-4 text-center">  {original_title} </p>
           
        </div>
           <img src = {`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
              className="min-w-[400px] max-w-[400px]   rounded-2xl "
              loading="lazy"
         />
       </div>

	)
} 