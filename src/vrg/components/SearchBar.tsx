import { useState } from "react"
import { useVideogame } from "../hooks/useVideogame";


const SearchBar = () => {

    let [game, setGame] = useState("");
    const {getVideoGamesByName} = useVideogame()

    function buscarVG (e:any){
        e.preventDefault();
        getVideoGamesByName(game);
    }

  return (
    <div className="flex justify-center my-4">
     
        <form className="w-3/4 md:w-2/4" onSubmit={(e)=>buscarVG(e)}>
            <input className="w-3/4 mx-2 md:w-2/4 bg-stone-300 rounded-md border-2 border-white-600" type="text" placeholder='Search' value={game} onChange = {(e) => setGame(e.target.value)}/>
            <input className="bg-slate-600 rounded-md border-double border-4 border-sky-500 hover:bg-white font-semibold text-sky-400" type="submit" value="Search" /> 
        </form>

    </div>
  )
}

export default SearchBar
