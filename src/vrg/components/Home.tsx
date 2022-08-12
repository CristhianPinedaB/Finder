import { useEffect, useState } from 'react'
import { useVideogame } from '../hooks/useVideogame'
import SearchBar from './SearchBar'
import VideoGamesList from './VideoGamesList'
import  Header  from "./Header";
import Footer from './Footer';
import Loading from './Loading';

const Home = () => {

  //Estado para mi Loading...
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false);
      },5000);
  },[])

  const {getVideoGamesByName, videogames} = useVideogame();

  useEffect(()=>{
    getVideoGamesByName('apex')
  },[])

  console.log('estado home---',videogames);
  
  return (
    <div>
      {
        loading?(
          <div  className='h-screen flex items-center justify-center'>
            <Loading/>
          </div>
          ):(
            <>
            <Header/>
            <SearchBar/>
            <VideoGamesList/>
            <Footer/>
            </>
        )
      }
    </div>
  )
}

export default Home
