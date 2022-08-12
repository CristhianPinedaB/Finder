import { VG } from "../interfaces/interfaces"
import { Link } from "react-router-dom";

interface VideogameItemProps {
    videogame: VG
}

const VideoGameItem = ({videogame}: VideogameItemProps) => {
  return (
    <Link to={`/${videogame.id}`}>
      <div className="bg-slate-200	w-full md:h-[150px] flex flex-wrap my-3 rounded-lg cursor-pointer border-indigo-500/50 hover:drop-shadow-2xl">
        <div className="w-2/5 inline-block flex justify-center content-center ">
          <img className="w-full rounded-l-lg" src={videogame.background_image} alt="image" />
        </div>
        <div className="w-3/5 inline-block flex justify-center flex-col ">
          <div>
            <p className="text-sm font-bold md:text-xl lg:">{videogame.name}</p>
          </div>
          <div>
            <p className="text-sm font-light md:text-xl lg:">{videogame.released}</p>
          </div>
          <div className="">
            <p className="text-sm font-medium md:text-xl lg:">Rating</p>
            <p className="text-sm font-medium italic md:text-xl lg:">{videogame.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoGameItem
