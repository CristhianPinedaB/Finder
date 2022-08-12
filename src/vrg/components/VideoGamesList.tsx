import { useVideogame } from '../hooks/useVideogame';
import VideoGameItem from './VideoGameItem';

const VideoGamesList = () => {

    const { videogames } = useVideogame();
    
    
  return (
    <div className="bg-white-500 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 mx-8">
      {videogames.map( v => <VideoGameItem key={v.id} videogame={v}/>)}
    </div>
  )
}

export default VideoGamesList
