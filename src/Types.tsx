export type Movie = {
  backdrop_path:string;
  poster_path:string;
  original_title:string;
  overview:string;
  vote_average:string;
  genres:{id:number,name:string}[],
  id:string;
  
}

export type Cast = {
  character:string;
  name:string;
  profile_path:string;
}
