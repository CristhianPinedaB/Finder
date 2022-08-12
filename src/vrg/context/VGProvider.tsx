import { useReducer } from "react";
import { VGContext } from './VGContext'
import { vgReducer, INITIAL_STATE } from './VGReducer';
import axios from "axios";

// const API_KEY = import.meta.env.VITE_API_KEY2
// console.log('apiiii---',API_KEY);

//Interface de mi Props que le paso a mi provider
interface VGProps {
    children: JSX.Element | JSX.Element[]
}

// COMOPONENTE PROVIDER-----------------------------------------------------------------------------------// 
const VGProvider = ({children}: VGProps) => {
  //Usamos useReducer y le pasamos nuestro reducer y nuestro estado inicial
  const [vgState, dispatch] = useReducer(vgReducer, INITIAL_STATE);

  //Lógica de la función que traer 20 videojuegos en relacion al nombre que le pasan por parámetro
  const getVideoGamesByName = async (name: string) => {
    // const API_KEY = import.meta.env.VITE_API_KEY2
    // console.log('apiiii---',API_KEY);
    console.log('estoy entrando a tu cora');
    const {data} = await axios.get(`https://api.rawg.io/api/games?search={${name}}&key=${import.meta.env.VITE_API_KEY3}`)
    const videogamesMatch = data.results;
    const videogames = await Promise.all(videogamesMatch.map( async (v:any) => {
      let descriptionGameApi = await axios.get(`https://api.rawg.io/api/games/${v.id}?key=${import.meta.env.VITE_API_KEY3}`);
      return {
        id: v.id,
        background_image: v.background_image,
        name: v.name,
        description: descriptionGameApi.data.description,
        rating: v.rating,
        released: v.released,
        platforms: v.platforms,
      }
    }));
    console.log('vg--->', videogames);
    //Retornamos el dispacth con el tipo de Action y el payload (info de los 20 videojuegos)
    return dispatch({type: 'getVideoGamesByName', payload: videogames})
  }

  // Logica de la funcion que trae info de videojuegos pasando un id por parametro
  const getVideoGameById = async (id:string | undefined) => {
    // const API_KEY = import.meta.env.VITE_API_KEY2
    // console.log('apiiii---',API_KEY);
    if(id){
      let videogameFound = await axios.get(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY3}`);
      let videogameById = videogameFound.data;
      
      let videogame = {
        id: videogameById.id,
        background_image: videogameById.background_image,
        background_image_additional: videogameById.background_image_additional,
        name: videogameById.name,
        description: videogameById.description,
        released: videogameById.released,
        platforms: videogameById.platforms,
      }
      return dispatch({type: 'getVideoGameById', payload: videogame})
    }else{
      return dispatch({type: 'getVideoGameById', payload: {}})
    }
  }

  return (
    //Como value pasamos el estado y las funciones que queremos compartir a los componentes (children)
      <VGContext.Provider value={{vgState, getVideoGamesByName, getVideoGameById}}>
        { children }
      </VGContext.Provider>
  )
}
//------------------------------------------------------------------------------------------------------------//
export default VGProvider
