import { useEffect, useRef } from "react";
import { Cast } from "../Types";

export default function MovieCast({cast}:{cast:Cast[]}){

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current?.scrollTo({left:0});
  },[cast])

	return (
		<>
		<h1 className="font-bold text-4xl ml-7 mt-7 text-white"> Cast </h1>
       <section className="w-full overflow-x-scroll flex h-[600px] m-auto" ref = {sectionRef}>
         {
         	cast.map((value,index) => <Card key={index} {...value} />)
         }
       </section>
       </>
     )
}

const Card:React.FC<Cast> = ({name,character,profile_path}) => {
	return (
       <div className="text-white m-[50px] relative rounded-2xl border-2 border-white">
      
        <div className="absolute z-10 h-[100px] w-full rounded-2xl bottom-0 flex flex-col  justify-center"
            style={{backdropFilter:'blur(10px)',
                      backgroundColor:'rgb(0,0,0,0.3)'
                    }}
        >  
           <p className="text-2xl m-auto font-bold mt-4">  {name} </p>
           <p className="text-2xl m-auto text-center mb-4"> {character} </p>
        </div>
           <img src = {`https://image.tmdb.org/t/p/w500${profile_path}`} 
              className="min-w-[150px] max-w-[300px] rounded-2xl"
              loading="lazy"
         />
       </div>

	)
} 