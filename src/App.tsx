
import Header from "./components/Header";
import MovieCast from "./components/MovieCast";
import Recommendation from "./components/Recommendation";
import { useSelectMovie } from "./context/MovieContext";

// bg-[teal] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900





function App() {
  


 const { cast,movie,recommendations }  = useSelectMovie();  

  return (
 
     <section className='w-full min-h-screen bg-[#171717]'>
       <Header movie = {movie}/>
       <MovieCast cast = {cast} />
       <Recommendation recommendations={recommendations}/>
     </section>
   
  )
}




export default App
